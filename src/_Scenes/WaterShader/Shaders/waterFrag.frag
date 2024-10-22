uniform samplerCube uSkybox;

uniform vec3 uWaveColor;
uniform vec3 uLightDirection;
uniform float uSmoothness;

uniform float uFresnelPower;

varying vec3 vNormal;
varying vec3 vWorldPosition;

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

    // Specular Light
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 reflectSource = normalize(reflect(-lightDir, normal));
    float specularStrength = max(0.0, dot(viewDir, reflectSource));
    specularStrength = pow(specularStrength, uSmoothness);
    vec3 specular = specularStrength * lightColor;

    // Reflection from skybox
    vec3 reflectionDir = reflect(-viewDir, normal);
    vec3 reflection = textureCube(uSkybox, reflectionDir).rgb;

    // Fresnel Effect
    float fresnelFactor = pow(1.0 - max(dot(viewDir, normal), 0.0), uFresnelPower);

    specular *= fresnelFactor;

    vec3 lighting = ambient + diffuse + specular;
    // lighting = ambient * 0.0 + diffuse * 0.5 + specular * 0.5;
    
    vec3 modelColor = uWaveColor;
    vec3 finalColor = mix(modelColor * lighting, reflection, fresnelFactor);

    // gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
    gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
}