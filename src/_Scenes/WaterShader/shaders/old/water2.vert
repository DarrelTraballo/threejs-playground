uniform float uTime;
uniform int uWaveCount;
uniform vec4 uWaveParams[4];

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;

float sineWave(float pos, vec4 params) {
    float frequency = params.y;
    float speed = params.z;
    float direction = params.w;

    float wave = pos * frequency + (direction * uTime) * speed;
    return (sin(wave) + 1.0) * 0.5;
}

void main() {
    vPosition = position;
    vUv = uv;

    vec3 finalPosition = vec3(position.x, 0.0, -position.y);
    vec3 newNormal = normal;

    for(int i = 0; i < uWaveCount; i++) {

        vec4 waveParams = uWaveParams[i];

        float xWave = sineWave(position.x, waveParams);
        finalPosition.y += waveParams.x * xWave;

        float zWave = sineWave(position.y, waveParams);
        finalPosition.y += waveParams.x * zWave;

        float waveLength = waveParams.z / waveParams.y;

        vec3 xTangent = normalize(vec3(1.0, waveLength * waveParams.x * cos(xWave), 0.0));
        vec3 xNormal = vec3(-xTangent.y, xTangent.x, 0.0);

        vec3 zTangent = normalize(vec3(0.0, waveLength * waveParams.x * cos(zWave), 1.0));
        vec3 zNormal = vec3(zTangent.y, -zTangent.x, 0.0);

        vec3 tangent = normalize(vec3(1.0, waveLength * waveParams.x * cos(xWave + zWave), 0.0));
        vec3 tangentNormal = vec3(-tangent.y, tangent.x, 0.0);

        newNormal += tangentNormal;
    }

    newNormal = normalize(newNormal);
    vNormal = normalMatrix * newNormal;

    vPosition = finalPosition;
    vWorldPosition = (modelMatrix * vec4(finalPosition, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);
}