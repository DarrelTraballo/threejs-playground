uniform vec3 uWaveColor;
uniform vec3 uLightDirection;
uniform float uSmoothness;

varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
    // ambient lighting
    vec3 ambient = vec3(0.5, 0.5, 0.5);

    // diffuse lighting
    vec3 normal = normalize(vNormal);
    vec3 lightColor = vec3(1.0, 0.957, 0.839);
    vec3 lightDir = normalize(uLightDirection);
    float diffuseStrength = max(0.0, dot(lightDir, normal));
    vec3 diffuse = diffuseStrength * lightColor;

    // Specular Light
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 reflectSource = normalize(reflect(-lightDir, normal));
    float specularStrength = max(0.0, dot(viewDir, reflectSource));
    specularStrength = pow(specularStrength, uSmoothness);
    vec3 specular = specularStrength * lightColor;

    vec3 lighting = vec3(0.0);
    lighting = ambient + diffuse + specular;
    // lighting = ambient * 0.0 + diffuse * 0.5 + specular * 0.5;
    
    vec3 modelColor = uWaveColor;
    vec3 finalColor = modelColor * lighting;

    // gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
    gl_FragColor = vec4(finalColor, 1.0);
}