uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform vec3 uLightDirection;
uniform vec3 uSunColor;
uniform float uTime;
uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform float uSunSize;
uniform float uSunIntensity;
uniform float uBloomStrength;
uniform float uAtmosphericStrength;

varying vec2 vUv;

vec2 directionToScreenSpace(vec3 direction) {
    vec3 normalizedDirection = normalize(direction);
    vec4 viewSpace = uViewMatrix * vec4(normalizedDirection, 0.0);
    vec4 clipSpace = uProjectionMatrix * viewSpace;
    vec2 ndc = clipSpace.xy / clipSpace.w;

    return ndc * 0.5 + 0.5;
}

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float atmosphere(vec2 uv, vec2 sunPos, float size) {
    float aspectRatio = uResolution.x / uResolution.y;
    vec2 aspectAdjustedUV = vec2((uv.x - sunPos.x) * aspectRatio, uv.y - sunPos.y);
    float dist = length(aspectAdjustedUV);
    float atmosphere = 1.0 - smoothstep(size, size * 4.0, dist);
    return pow(atmosphere, 3.0) * uAtmosphericStrength;
}

float corona(vec2 uv, vec2 sunPos) {
    float time = uTime * 0.5;
    float aspectRatio = uResolution.x / uResolution.y;
    vec2 aspectAdjustedUV = vec2((uv.x - sunPos.x) * aspectRatio, uv.y - sunPos.y);
    
    float angle = atan(aspectAdjustedUV.y, aspectAdjustedUV.x);
    float dist = length(aspectAdjustedUV);
    float corona = 0.0;

    for (int i = 0; i < 6; i++) {
        float freq = float(i) * 2.0 + 1.0;
        float amplitude = 1.0 / float(i + 1);
        corona += sin(angle * freq + time) * amplitude;
    }

    corona = abs(corona) * 0.5;
    corona *= smoothstep(uSunSize * 1.2, uSunSize * 0.8, dist);

    return corona;
}

vec3 lensFlare(vec2 uv, vec2 sunPos) {
    vec2 sunToCenter = sunPos - vec2(0.5);
    vec2 flarePos = vec2(0.5) - sunToCenter * 0.5;
    
    float flare = 0.0;
    flare += smoothstep(0.3, 0.0, length(uv - flarePos)) * 0.3;
    flare += smoothstep(0.1, 0.0, length(uv - (flarePos + sunToCenter * 0.2))) * 0.2;
    flare += smoothstep(0.05, 0.0, length(uv - (flarePos - sunToCenter * 0.2))) * 0.1;
    
    flare *= 0.8 + random(uv + vec2(uTime * 0.1)) * 0.4;
    
    return uSunColor * flare;
}

vec3 bloom(sampler2D tex, vec2 uv, float strength) {
    vec3 color = vec3(0.0);
    float total = 0.0;
    
    for(float i = -4.0; i <= 4.0; i += 1.0) {
        for(float j = -4.0; j <= 4.0; j += 1.0) {
            vec2 offset = vec2(i, j) * strength / uResolution;
            float weight = 1.0 / (1.0 + length(vec2(i, j)));
            color += texture2D(tex, uv + offset).rgb * weight;
            total += weight;
        }
    }
    
    return color / total;
}

void main() {
    vec4 sceneColor = texture2D(tDiffuse, vUv);
    
    vec2 sunPos = directionToScreenSpace(normalize(uLightDirection));
    
    if(sunPos.x >= 0.0 && sunPos.x <= 1.0 && sunPos.y >= 0.0 && sunPos.y <= 1.0) {
        float aspectRatio = uResolution.x / uResolution.y;
        vec2 aspectAdjustedUV = vec2((vUv.x - sunPos.x) * aspectRatio, vUv.y - sunPos.y);
        float dist = length(aspectAdjustedUV);
        
        float sunDisk = 1.0 - smoothstep(uSunSize * 0.9, uSunSize, dist);
        
        float coronaEffect = corona(vUv, sunPos);
        
        float atmosphereEffect = atmosphere(vUv, sunPos, uSunSize);
        
        vec3 sunColor = uSunColor * (sunDisk + coronaEffect) * uSunIntensity;
        sunColor += uSunColor * atmosphereEffect;
        
        vec3 flareColor = lensFlare(vUv, sunPos);
        
        vec3 finalColor = sceneColor.rgb + sunColor + flareColor;
        
        vec3 bloomColor = bloom(tDiffuse, vUv, uBloomStrength);
        finalColor += bloomColor * step(0.4, atmosphereEffect);
        
        gl_FragColor = vec4(finalColor, 1.0);
    } else {
        gl_FragColor = sceneColor;
    }
}
