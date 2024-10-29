uniform samplerCube uSkybox;

uniform vec3 uWaveColor;
uniform vec3 uLightDirection;
uniform float uSmoothness;

uniform float uFresnelPower;

uniform float uScatteringDepth;
uniform float uBackScatteringStrength;
uniform float uSideScatteringStrength;
uniform float uSideScatterFocus;

varying vec3 vNormal;
varying vec3 vWorldPosition;

float schlickFresnel(float cosTheta, float F0) {
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, uFresnelPower);
}

float sunDisc(vec3 rayDir, vec3 sunDir, float size, float softness) {
    float cosAngle = dot(normalize(rayDir), normalize(sunDir));
    float sun = smoothstep(1.0 - size - softness, 1.0 - size, cosAngle);
    return sun;
}

vec3 subsurfaceScattering(vec3 normal, vec3 lightDir, vec3 viewDir, vec3 waterColor) {
    float backScatter = max(0.0, -dot(lightDir, normal)) * uScatteringDepth * uBackScatteringStrength;

    vec3 sideDir = normalize(cross(lightDir, vec3(0.0, 1.0, 0.0)));
    float sideScatter = pow(max(0.0, dot(viewDir, -sideDir)), uSideScatterFocus) * uScatteringDepth * uSideScatteringStrength;

    float scatterTerm = backScatter + sideScatter;

    return waterColor * scatterTerm;
}

void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightColor = vec3(1.0, 0.957, 0.839);
    vec3 lightDir = normalize(uLightDirection);
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    float NdotV = max(dot(normal, viewDir), 0.0);

    // Calculate Fresnel
    float F0 = 0.04;
    float fresnelFactor = schlickFresnel(NdotV, F0);

    float depthFactor = clamp(length(cameraPosition - vWorldPosition) / 50.0, 0.0, 1.0);

    // Subsurface Scattering
    vec3 scatterColor = mix(uWaveColor, vec3(0.0, 0.4, 0.8),depthFactor);
    vec3 scatter = subsurfaceScattering(normal, lightDir, viewDir, scatterColor) * (1.0 - fresnelFactor * 0.5);
    
    // ambient lighting
    vec3 ambient = vec3(0.5, 0.5, 0.5);

    // diffuse lighting
    float diffuseStrength = max(0.0, dot(lightDir, normal));
    vec3 diffuse = diffuseStrength * lightColor;

    // Specular Light and Fresnel Effect
    vec3 reflectSource = normalize(reflect(-lightDir, normal));
    float specularStrength = max(0.0, dot(viewDir, reflectSource));
    specularStrength = pow(specularStrength, uSmoothness);
    vec3 specular = specularStrength * fresnelFactor * lightColor * (1.0 + fresnelFactor * 0.5);

    // Environment Lighting
    vec3 reflectionDir = reflect(-viewDir, normalize(vNormal));
    vec3 blurredReflectionDir = normalize(reflectionDir + vec3(fresnelFactor * 0.05));
    vec3 skyboxColor = textureCube(uSkybox, blurredReflectionDir).rgb;

    // Sun
    float sunIntensity = 4.0;
    float sunSize = 0.02;
    float sunSoftness = 0.01;
    float sun = sunDisc(reflectionDir, lightDir, sunSize, sunSoftness);
    vec3 sunColor = lightColor * sunIntensity;
    vec3 reflection = skyboxColor + sun * sunColor;

    // Combining Lighting
    vec3 lighting = ambient + scatter + specular;
    
    // Final Color Blend with Fresnel and Depth Factor
    vec3 finalColor = mix(uWaveColor * lighting, reflection, fresnelFactor * depthFactor);

    gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
}