import * as THREE from "three"
import { randomBetween } from "../../../lib/utils"

export const PLANE_PARAMS = {
    width: 20,
    height: 20,
    widthSegments: 50,
    heightSegments: 50,
    wireframe: false,
}

export const WAVE_PARAMS = {
    MAX_WAVES: 4,
    amplitude: {
        min: 0.1,
        max: 2,
        step: 0.1,
    },
    frequency: {
        min: 0.1,
        max: 1,
        step: 0.1,
    },
    speed: {
        min: 0.1,
        max: 2,
        step: 0.1,
    },
}

export const FRAGMENT_PARAMS = {
    smoothness: {
        min: 10,
        max: 200,
        step: 1,
    },
    lightDir: {
        x: {
            min: -90,
            max: 90,
            step: 1,
        },
        y: {
            min: 0,
            max: 90,
            step: 1,
        },
        z: {
            min: -90,
            max: 90,
            step: 1,
        },
    },
}

export const UNIFORMS = {
    uResolution: {
        type: "v2",
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    uWaveCount: {
        type: "i",
        value: 4,
    },
    uWaveParams: {
        type: "v4v", // Array of vec4
        value: Array(WAVE_PARAMS.MAX_WAVES)
            .fill()
            .map(
                () =>
                    new THREE.Vector4(
                        randomBetween(WAVE_PARAMS.amplitude.min, WAVE_PARAMS.amplitude.max), // amplitude
                        randomBetween(WAVE_PARAMS.frequency.min, WAVE_PARAMS.frequency.max), // frequency
                        randomBetween(WAVE_PARAMS.speed.min, WAVE_PARAMS.speed.max), // speed
                        1.0 // direction (1.0 for true, -1.0 for false)
                    )
            ),
    },
    uWaveColor: {
        type: "v3",
        // value: new THREE.Color(0x3a4851), // Acerola colors
        value: new THREE.Color(0x0e87cc), // My colors
    },
    uLightDirection: {
        type: "v3",
        value: new THREE.Vector3(5.0, 5.0, 5.0),
    },
    uSmoothness: {
        type: "f",
        value: 200,
    },
}
