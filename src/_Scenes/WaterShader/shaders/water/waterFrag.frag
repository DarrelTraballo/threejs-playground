uniform samplerCube uSkybox;

uniform vec3 uWaterColor;
uniform vec3 uLightDirection;
uniform float uSmoothness;

uniform float uFresnelPower;

uniform float uScatteringDepth;
uniform float uBackScatteringStrength;
uniform float uSideScatteringStrength;
uniform float uSideScatterFocus;

uniform float uWaterIOR; // default to 1.333
uniform float uTurbidity; // (0 - clear, 1 = murky)
uniform float uDepthColor; // default 50.0

varying vec3 vNormal;
varying vec3 vWorldPosition;

const vec3 WATER_ABSORPTION = vec3(0.45, 0.029, 0.018);

float calculateFresnelF0(float ior) {
    float temp = (1.0 - ior) / (1.0 / ior);
    return temp * temp;
}

float schlickFresnel(float cosTheta, float ior) {
    float F0 = calculateFresnelF0(ior);
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, uFresnelPower);
}

float sunDisc(vec3 rayDir, vec3 sunDir, float size, float softness) {
    float cosAngle = dot(normalize(rayDir), normalize(sunDir));
    float sun = smoothstep(1.0 - size - softness, 1.0 - size, cosAngle);
    return sun * sun;
}

vec3 subsurfaceScattering(vec3 normal, vec3 lightDir, vec3 viewDir, vec3 waterColor, float depth) {
    float backScatter = max(0.0, -dot(lightDir, normal)) * uScatteringDepth * uBackScatteringStrength * (1.0 - uTurbidity * 0.5);

    vec3 sideDir = normalize(cross(lightDir, vec3(0.0, 1.0, 0.0)));
    float sideScatter = pow(max(0.0, dot(viewDir, -sideDir)), uSideScatterFocus) * uScatteringDepth * uSideScatteringStrength;

    float depthAttenuation = exp(-depth * 0.01 * (1.0 + uTurbidity));
    float scatterTerm = (backScatter + sideScatter) * depthAttenuation;

    return waterColor * scatterTerm;
}

vec3 calculateWaterAbsorption(float depth) {
    return exp(-depth * WATER_ABSORPTION * (1.0 + uTurbidity * 2.0));
}

void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightColor = normalize(vec3(1.0, 0.957, 0.839)) * 1.5;
    vec3 lightDir = normalize(uLightDirection);
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    float NdotV = max(dot(normal, viewDir), 0.0);

    float depth = length(vWorldPosition - cameraPosition);
    float depthFactor = clamp(depth / uDepthColor, 0.0, 1.0);

    vec3 absorption = calculateWaterAbsorption(depth);

    // Calculate Fresnel
    float fresnelFactor = schlickFresnel(NdotV, uWaterIOR);

    // Subsurface Scattering
    vec3 shallowColor = uWaterColor;
    vec3 deepColor = vec3(0.0, 0.4, 0.8) * absorption;
    vec3 scatterColor = mix(shallowColor, deepColor,depthFactor);
    vec3 scatter = subsurfaceScattering(normal, lightDir, viewDir, scatterColor, depth) * (1.0 - fresnelFactor * 0.5);
    
    // ambient lighting
    vec3 ambient = vec3(0.5, 0.5, 0.5) * absorption;

    // diffuse lighting
    float diffuseStrength = max(0.0, dot(lightDir, normal));
    vec3 diffuse = diffuseStrength * lightColor * absorption;

    // Specular Light and Fresnel Effect
    vec3 reflectSource = normalize(reflect(-lightDir, normal));
    float specularStrength = max(0.0, dot(viewDir, reflectSource));
    
    float roughness = (1.0 - uSmoothness) * (1.0 + normal.y * 0.5);
    float alpha = roughness * roughness;
    specularStrength = pow(specularStrength, uSmoothness * (1.0 + alpha));

    vec3 specular = specularStrength * fresnelFactor * lightColor * (1.0 + fresnelFactor * 0.5);

    // Environment Lighting
    vec3 reflectionDir = reflect(-viewDir, normalize(vNormal));
    vec3 blurredReflectionDir = normalize(reflectionDir + vec3(fresnelFactor * 0.05));
    vec3 skyboxColor = textureCube(uSkybox, blurredReflectionDir).rgb;

    // Sun
    float sunIntensity = 4.0 * (1.0 - uTurbidity * 0.5);
    float sunSize = 0.02;
    float sunSoftness = 0.01 * (1.0 + uTurbidity * 2.0);
    float sun = sunDisc(reflectionDir, lightDir, sunSize, sunSoftness);
    vec3 sunColor = lightColor * sunIntensity;
    vec3 reflection = skyboxColor + sun * sunColor;

    // Combining Lighting
    vec3 lighting = ambient + scatter + specular;

    float reflectionStrength = fresnelFactor * depthFactor * (1.0 - uTurbidity * 0.3);
        
    // Final Color Blend with Fresnel and Depth Factor
    vec3 finalColor = mix(uWaterColor * lighting, reflection, reflectionStrength);

    gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
}