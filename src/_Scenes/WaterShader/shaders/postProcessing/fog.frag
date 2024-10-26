uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform vec3 uSkyColor;
uniform float uHorizonHeight;
uniform float uFogDensity;
uniform float uTime;

varying vec2 vUv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 grad(ivec2 z) {
    int n = z.x + z.y * 11111;
    n = (n << 13) ^ n;
    n = (n * (n * n * 15731 + 789221) + 1376312589) >> 16;
    n &= 7;
    
    vec2 gr = vec2(n & 1, n >> 1) * 2.0 - 1.0;
    return normalize(gr);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    float v00 = dot(grad(ivec2(i)), f);
    float v10 = dot(grad(ivec2(i) + ivec2(1, 0)), f - vec2(1.0, 0.0));
    float v01 = dot(grad(ivec2(i) + ivec2(0, 1)), f - vec2(0.0, 1.0));
    float v11 = dot(grad(ivec2(i) + ivec2(1, 1)), f - vec2(1.0, 1.0));
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(v00, v10, u.x), mix(v01, v11, u.x), u.y);
}

float fbm(vec2 p) {
    float sum = 0.0;
    float amp = 1.0;
    float freq = 1.0;
    
    for(int i = 0; i < 4; i++) {
        sum += noise(p * freq) * amp;
        amp *= 0.5;
        freq *= 2.0;
    }
    
    return sum;
}

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    
    float horizonDist = abs(vUv.y - uHorizonHeight);
    
    vec2 noiseCoord = vec2(vUv.x * 3.0 + uTime * 0.05, vUv.y * 2.0);
    float dynamicNoise = fbm(noiseCoord) * 0.5 + 0.5;
    
    float atmosphericDensity = smoothstep(0.0, 0.5, 1.0 - horizonDist * 2.0);
    atmosphericDensity *= dynamicNoise;
    
    float heightGradient = smoothstep(uHorizonHeight - 0.2, uHorizonHeight + 0.2, vUv.y);
    
    float fogStrength = atmosphericDensity * uFogDensity;
    fogStrength *= (1.0 + sin(uTime * 0.2) * 0.1);
    
    vec3 fogColor = mix(uSkyColor, uSkyColor * 0.8, heightGradient);
    color.rgb = mix(color.rgb, fogColor, fogStrength);
    
    gl_FragColor = color;
}