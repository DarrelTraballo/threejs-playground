uniform float uTime;
uniform int uWaveCount;
uniform vec4 uWaveParams; // [amplitude, frequency, speed, persistence]
uniform float uPeakHeight;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;

// 2D random
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float randomSpeed(float seed) {
    float baseSpeed = 1.0;
    float variance = uWaveParams.z; // Higher speed = more variance
    float randomValue = random(vec2(seed * 13.37 + uWaveParams.z, seed * 42.0)); // 0 to 1

    // Map random value to range: baseSpeed ± variance
    return baseSpeed + (randomValue * 2.0 - 1.0) * variance;
}

vec2 randomDirection(float seed) {
    float angle = random(vec2(seed, seed + 1.0)) * 2.0 * 3.14159265;
    return vec2(cos(angle), sin(angle));
}

float sineWave(vec2 st, vec2 direction, float frequency, float speed, float phase) {
    float angle = -dot(st, direction);
    return sin(angle * frequency + uTime * speed + phase);
}

float steepSineWave(vec2 st, vec2 direction, float frequency, float speed, float phase) {
    float angle = -dot(st, direction);
    float wave = sin(angle * frequency + uTime * speed + phase);
    float asymmetry = uPeakHeight;
    return sign(wave) * (exp(abs(wave) * asymmetry) - 1.0);
}

float sineFbm(vec2 st) {
    float amplitude = uWaveParams.x;
    float frequency = uWaveParams.y;
    float persistence = uWaveParams.w;

    float value = 0.0;
    float maxValue = 0.0;

    for(int i = 0; i < uWaveCount; i++) {
        vec2 dir = randomDirection(float(i));
        float speed = randomSpeed(float(i));

        // float wave = sineWave(st, dir, frequency, uWaveParams.z, float(i) * 0.5);
        float wave = steepSineWave(st, dir, frequency, speed, float(i) * 0.5);

        value += amplitude * wave;
        maxValue += amplitude;

        frequency *= 1.18;
        amplitude *= persistence;
    }
    return value / maxValue;
}

// Calculate normal using partial derivatives
vec3 calculateNormal(vec2 pos, float height, float epsilon) {
    vec2 e = vec2(epsilon, 0.0);

    float h1 = sineFbm(pos + e.xy);
    float h2 = sineFbm(pos - e.xy);
    float h3 = sineFbm(pos + e.yx);
    float h4 = sineFbm(pos - e.yx);

    vec3 normal = normalize(vec3(h1 - h2, epsilon * 2.0, h3 - h4));

    return normal;
}

void main() {
    vUv = uv;

    // Calculate base position
    vec2 pos = vec2(position.x, -position.y);
    // float height = fbm(pos);
    float height = sineFbm(pos);

    // Calculate final position
    vec3 finalPosition = vec3(position.x, height * uWaveParams.x, -position.y);

    // Calculate normal
    vec3 newNormal = calculateNormal(pos, height, 0.01);

    vNormal = normalMatrix * newNormal;
    vPosition = finalPosition;
    vWorldPosition = (modelMatrix * vec4(finalPosition, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);
}