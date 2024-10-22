uniform float uTime;
uniform int uWaveCount;
uniform vec4 uWaveParams[4];

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vWorldPosition;

float sineWave(vec2 pos, float frequency, float speed, float direction, float angle) {
    float diagonalPos = pos.x * cos(angle) + pos.y * sin(angle);

    return diagonalPos * frequency + (direction * uTime) * speed;
}

void main() {
    vPosition = position;
    vUv = uv;

    vec3 finalPosition = vec3(position.x, 0.0, -position.y);
    vec3 newNormal = normal;

    float waves[6];
    float waveLengths[6];

    // Base Waves
    for(int i = 0; i < uWaveCount; i++) {
        float amplitude = uWaveParams[i].x;
        float frequency = uWaveParams[i].y;
        float speed = uWaveParams[i].z;
        float direction = uWaveParams[i].w;

        float angles[4] = float[4](0.785398,    // 45 degrees for wave 0
        -0.785398,   // -45 degrees for wave 1
        0.523599,    // 30 degrees for wave 2
        -0.523599    // -30 degrees for wave 3
        );

        // float pos = (mod(float(i), 2.0) == 0.0) ? position.x : position.y;

        vec2 pos = vec2(position.x, position.y);

        waves[i] = sineWave(pos, frequency, speed, direction, angles[i]);
        waveLengths[i] = speed / frequency;

        finalPosition.y += amplitude * (sin(waves[i]) + 1.0) * 0.5; // last bit normalizes wave to 0-1 range
    }

    // Calculate Combined Waves
    waves[4] = waves[0] + waves[2]; // Wave A + C
    waves[5] = waves[3] + waves[1]; // Wave D + B

    // Calculate Combined Wavelengths
    waveLengths[4] = uWaveParams[0].z / (uWaveParams[0].y + uWaveParams[2].y);
    waveLengths[5] = uWaveParams[3].z / (uWaveParams[3].y + uWaveParams[1].y);

    finalPosition.y += uWaveParams[0].x * (sin(waves[4]) + 1.0) * 0.5;
    finalPosition.y += uWaveParams[3].x * (sin(waves[5]) + 1.0) * 0.5;

    for(int i = 0; i < uWaveCount; i++) {
        float amplitude = uWaveParams[i].x;
        float angles[4] = float[4](0.785398,    // 45 degrees for wave 0
        -0.785398,   // -45 degrees for wave 1
        0.523599,    // 30 degrees for wave 2
        -0.523599    // -30 degrees for wave 3
        );

        vec3 tangent = normalize(vec3(cos(angles[i]), waveLengths[i] * amplitude * cos(waves[i]), sin(angles[i])));

        vec3 waveNormal = normalize(vec3(-tangent.y * cos(angles[i]), tangent.x, -tangent.y * sin(angles[i])));

        newNormal += waveNormal;

        // if(mod(float(i), 2.0) == 0.0) {
        //     // X-direction waves (A and B)
        //     tangent = normalize(vec3(1.0, waveLengths[i] * amplitude * cos(waves[i]), 0.0));
        //     vec3 waveNormal = vec3(-tangent.y, tangent.x, 0.0);
        //     newNormal += waveNormal;
        // } else {
        //     // Z-direction waves (C and D)
        //     tangent = normalize(vec3(0.0, waveLengths[i] * amplitude * cos(waves[i]), 1.0));
        //     vec3 waveNormal = vec3(0.0, tangent.x, -tangent.y);
        //     newNormal += waveNormal;
        // }
    }

    // Calculate normals for combined waves (adjusted for diagonal motion)
    vec3 tangent5 = normalize(vec3(cos(0.785398), waveLengths[4] * uWaveParams[0].x * cos(waves[4]), sin(0.785398)));
    vec3 normal5 = normalize(vec3(-tangent5.y * cos(0.785398), tangent5.x, -tangent5.y * sin(0.785398)));
    newNormal += normal5;

    vec3 tangent6 = normalize(vec3(cos(-0.785398), waveLengths[5] * uWaveParams[3].x * cos(waves[5]), sin(-0.785398)));
    vec3 normal6 = normalize(vec3(-tangent6.y * cos(-0.785398), tangent6.x, -tangent6.y * sin(-0.785398)));
    newNormal += normal6;

    newNormal = normalize(newNormal);
    vNormal = normalMatrix * newNormal;

    vPosition = finalPosition;
    vWorldPosition = (modelMatrix * vec4(finalPosition, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);
}