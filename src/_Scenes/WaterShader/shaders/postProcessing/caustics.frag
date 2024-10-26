uniform sampler2D tDiffuse;
uniform float uTime;
uniform float uIntensity;
uniform vec2 uResolution;

varying vec2 vUv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 causticWarp(vec2 uv, float time) {
    vec2 p = uv * 8.0;
    float t = time * 0.5;
    
    float x = sin(p.x + t) * 0.01 +
              sin(p.y * 0.8 + t * 1.2) * 0.01;
    float y = sin(p.y + t) * 0.01 +
              sin(p.x * 0.9 + t * 1.1) * 0.01;
              
    return vec2(x, y);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord/uResolution.xy;
    vec2 warp = causticWarp(uv, uTime);
    
    // Layer multiple caustic warps
    vec2 warp2 = causticWarp(uv * 1.4 + vec2(0.5), uTime * 0.8) * 0.5;
    warp += warp2;
    
    vec2 finalUv = uv + warp * uIntensity;
    vec4 color = texture2D(tDiffuse, finalUv);
    
    // Add subtle blue tint and brightness variation
    float brightness = 1.0 + sin(uTime + uv.x * 10.0 + uv.y * 8.0) * 0.05;
    color.rgb *= vec3(0.95, 1.0, 1.05) * brightness;
    
    fragColor = color;
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}