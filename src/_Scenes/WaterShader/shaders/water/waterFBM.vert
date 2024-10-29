uniform float uTime;
uniform int uWaveCount;
uniform vec4 uWaveParams; // [amplitude, frequency, speed, persistence]
uniform float uPeakHeight;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vWorldPosition;

// 2D random
float random(vec2 st) {
    vec2 k = vec2(23.14069263277926, 2.665144142690225);
    return fract(cos(dot(st, k)) * 12345.6789);
}

float randomSpeed(float seed) {
    float randomValue = random(vec2(seed * 12.9898, seed * 78.233));
    float minSpeed = 0.1;
    float maxSpeed = uWaveParams.z;
    return mix(minSpeed, maxSpeed, randomValue);
}

vec2 randomDirection(float seed) {
    float angle = random(vec2(seed * 43.758, seed * 28.957)) * 2.0 * 3.14159265;
    return normalize(vec2(cos(angle), sin(angle)));
}

float sineWave(vec2 st, vec2 direction, float frequency, float speed, float phase) {
    float angle = -dot(st, direction);
    float wave = sin(angle * frequency + uTime * speed + phase);

    float asymmetry = clamp(uPeakHeight, 0.0, 5.0);
    return sign(wave) * (exp(abs(wave) * asymmetry) - 1.0) * 0.5;
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

    float maxFreq = 25.0;

    for(int i = 0; i < uWaveCount; i++) {
        if(frequency > maxFreq)
            break;

        vec2 dir = randomDirection(float(i));
        float speed = randomSpeed(float(i));

        float wave = steepSineWave(st, dir, frequency, speed, float(i) * 0.5);

        value += amplitude * wave;
        maxValue += amplitude;

        frequency *= 1.18;
        amplitude *= persistence;
    }

    maxValue = max(maxValue, 0.001);
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
    // Calculate base position
    vec2 pos = vec2(position.x, -position.y);

    // Dynamically dampen wave amplitude for distant waves
    float distanceDamp = 1.0 / (1.0 + 0.02 * length(cameraPosition - vec3(position.xy, 0.0)));

    // Adjust height by distanceDamp for distant waves
    float height = sineFbm(pos) * distanceDamp;
    float maxDisplacement = 2.0;
    height = clamp(height, -maxDisplacement, maxDisplacement);

    // Apply peak height scaling
    height *= uPeakHeight;

    // Calculate final position
    vec3 finalPosition = vec3(position.x, height * uWaveParams.x, -position.y);

    // Calculate normal
    vec3 newNormal = calculateNormal(pos, height, 0.01 * distanceDamp);

    vNormal = normalMatrix * newNormal;
    vPosition = finalPosition;
    vWorldPosition = (modelMatrix * vec4(finalPosition, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);
}