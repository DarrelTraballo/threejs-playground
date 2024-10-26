uniform float uTime;
uniform int uWaveCount;
uniform vec4 uWaveParams[4];

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;

float sineWave(float pos, float frequency, float speed, float direction) {
    // return pos * frequency + (direction * uTime) * speed;

    float wave = pos * frequency + (direction * uTime) * speed;
    return (sin(wave) + 1.0) * 0.5;
}

void main() {
    vPosition = position;
    vUv = uv;

    vec3 finalPosition = vec3(position.x, 0.0, -position.y);
    vec3 newNormal = normal;

    float waveCacheA = 0.0;
    float waveCacheB = 0.0;

    for(int i = 0; i < uWaveCount; i++) {
        float amplitude = uWaveParams[i].x;
        float frequency = uWaveParams[i].y;
        float speed = uWaveParams[i].z;
        float direction = uWaveParams[i].w;

        float pos;
        if(mod(float(i), 2.0) == 0.0) {
            pos = position.x;
        } else {
            pos = position.y;
        }

        float wave = sineWave(pos, frequency, speed, direction);

        if(i == 0)
            waveCacheB = wave;
        else if(i == 1)
            waveCacheA = wave;

        finalPosition.y += amplitude * wave;

        float waveLength = speed / frequency;
        vec3 tangent;

        if(mod(float(i), 2.0) == 0.0) {
            tangent = normalize(vec3(1.0, waveLength * amplitude * cos(wave), 0.0));
            vec3 waveNormal = vec3(-tangent.y, tangent.x, 0.0);
            newNormal += waveNormal;
        } else {
            tangent = normalize(vec3(0.0, waveLength * amplitude * cos(wave), 1.0));
            vec3 waveNormal = vec3(tangent.y, -tangent.x, 0.0);
            newNormal += waveNormal;
        }
    }

    finalPosition.y += waveCacheA + waveCacheB;

    // finalPosition.y += accumulatedWave * 0.2;

    newNormal = normalize(newNormal);
    vNormal = normalMatrix * newNormal;

    vPosition = finalPosition;
    vWorldPosition = (modelMatrix * vec4(finalPosition, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);
}