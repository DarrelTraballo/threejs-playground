uniform sampler2D tDiffuse;
uniform float uOffset;
uniform float uTime;

varying vec2 vUv;

void main() {
    float wave = sin(vUv.y * 20.0 + uTime) * 0.5 + 0.5;
    float offset = uOffset * wave;
    
    vec4 cr = texture2D(tDiffuse, vUv + vec2(offset, 0.0));
    vec4 cga = texture2D(tDiffuse, vUv);
    vec4 cb = texture2D(tDiffuse, vUv - vec2(offset, 0.0));
    
    gl_FragColor = vec4(cr.r, cga.g, cb.b, 1.0);
}