uniform float uTime;
uniform int uWaveCount;
uniform vec4 uWaveParams[4];

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;

// 2D random
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// 2D Noise
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth interpolation
    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
        (c - a) * u.y * (1.0 - u.x) +
        (d - b) * u.x * u.y;
}

// fBm function
float fbm(vec2 st) {
    float amplitude = uWaveParams[0].x;
    float frequency = uWaveParams[0].y;
    float persistence = uWaveParams[0].w;

    float value = 0.0;
    float maxValue = 0.0;  // Used for normalization

    for(int i = 0; i < 32; i++) {  // Using fixed size loop for compatibility
        if(i >= uWaveCount)
            break;    // Break if we've reached desired octaves

        // Animate the noise by offsetting based on time
        vec2 offset = vec2(uTime * uWaveParams[0].z * float(i) * 0.1);
        value += amplitude * noise(st * frequency + offset);
        maxValue += amplitude;

        frequency *= 1.18;
        amplitude *= persistence;
    }

    // Normalize the result
    return value / maxValue;
}

// Calculate normal using partial derivatives
vec3 calculateNormal(vec2 pos, float height, float epsilon) {
    vec2 e = vec2(epsilon, 0.0);

    float h1 = fbm(pos + e.xy);
    float h2 = fbm(pos - e.xy);
    float h3 = fbm(pos + e.yx);
    float h4 = fbm(pos - e.yx);

    vec3 normal = normalize(vec3(h1 - h2, epsilon * 2.0, h3 - h4));

    return normal;
}

void main() {
    vUv = uv;

    // Calculate base position
    vec2 pos = vec2(position.x, -position.y);
    float height = fbm(pos);

    // Calculate final position
    vec3 finalPosition = vec3(position.x, height * uWaveParams[0].x, -position.y);

    // Calculate normal
    vec3 newNormal = calculateNormal(pos, height, 0.01);

    vNormal = normalMatrix * newNormal;
    vPosition = finalPosition;
    vWorldPosition = (modelMatrix * vec4(finalPosition, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);
}