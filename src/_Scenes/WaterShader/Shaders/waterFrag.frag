uniform samplerCube uSkybox;

uniform vec3 uWaveColor;
uniform vec3 uLightDirection;
uniform float uSmoothness;

uniform float uFresnelPower;

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

void main() {
    // ambient lighting
    vec3 ambient = vec3(0.5, 0.5, 0.5);

    // diffuse lighting
    vec3 normal = normalize(vNormal);
    vec3 lightColor = vec3(1.0, 0.957, 0.839);
    vec3 lightDir = normalize(uLightDirection);
    // vec3 lightDir = normalize(vec3(0.0, 0.0, 0.0) - vWorldPosition);
    float diffuseStrength = max(0.0, dot(lightDir, normal));
    vec3 diffuse = diffuseStrength * lightColor;

    // Specular Light and Fresnel Effect
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    float NdotV = max(dot(normal, viewDir), 0.0);

    float F0 = 0.04;
    float fresnelFactor = schlickFresnel(NdotV, F0);

    vec3 reflectSource = normalize(reflect(-lightDir, normal));
    float specularStrength = max(0.0, dot(viewDir, reflectSource));
    specularStrength = pow(specularStrength, uSmoothness);

    vec3 specular = specularStrength * fresnelFactor * lightColor;

    // Environment Lighting
    vec3 reflectionDir = reflect(-viewDir, normalize(vNormal));
    vec3 skyboxColor = textureCube(uSkybox, reflectionDir).rgb;

    float sunIntensity = 5.0;
    float sunSize = 0.02;
    float sunSoftness = 0.01;
    float sun = sunDisc(reflectionDir, uLightDirection, sunSize, sunSoftness);
    vec3 sunColor = lightColor * sunIntensity;

    vec3 reflection = skyboxColor + sun * sunColor;


    vec3 lighting = ambient + diffuse + specular;
    // lighting = ambient * 0.0 + diffuse * 0.5 + specular * 0.5;
    
    vec3 modelColor = uWaveColor;
    vec3 finalColor = mix(modelColor * lighting, reflection, fresnelFactor);

    // gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
    gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
}