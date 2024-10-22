uniform float uTime;
uniform int uWaveCount;
uniform vec4 uWaveParams; // [amplitude, frequency, speed, persistence]

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;

// 2D random
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

vec2 randomDirection(float seed) {
    float angle = random(vec2(seed, seed + 1.0)) * 2.0 * 3.14159265;
    return vec2(cos(angle), sin(angle));
}

float sineWave(vec2 st, vec2 direction, float frequency, float speed, float phase) {
    float angle = -dot(st, direction);
    return sin(angle * frequency + uTime * speed + phase);
}

float sineFbm(vec2 st) {
    float amplitude = uWaveParams.x;
    float frequency = uWaveParams.y;
    float persistence = uWaveParams.w;

    float value = 0.0;
    float maxValue = 0.0;

    for(int i = 0; i < uWaveCount; i++) {
        vec2 dir = randomDirection(float(i));

        float wave = sineWave(st, dir, frequency, uWaveParams.z, float(i) * 0.5);

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