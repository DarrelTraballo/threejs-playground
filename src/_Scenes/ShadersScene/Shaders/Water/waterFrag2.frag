uniform vec3 uWaveColor;
uniform vec3 uLightDirection;
uniform float uSmoothness;

varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(uLightDirection);
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 halfVector = normalize(lightDir + viewDir);

    vec3 lightColor = vec3(0.88, 0.87, 0.87);

    vec3 ambient = vec3(0.0, 0.0, 0.1);
    float diffuseFactor = max(dot(lightDir, normal), 0.0) * 0.5 + 0.5;
    vec3 diffuse = lightColor * uWaveColor * diffuseFactor * diffuseFactor;
    vec3 specular = lightColor * pow(max(dot(halfVector, normal), 0.0), uSmoothness);

    vec3 finalColor = ambient + diffuse + specular;

    gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
}