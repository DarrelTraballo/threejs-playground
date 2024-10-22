import * as THREE from "three"
import { randomBetween } from "../../../lib/utils"

export const PLANE_PARAMS = {
    width: 100,
    height: 100,
    widthSegments: 100,
    heightSegments: 100,
    wireframe: false,
}

export const WAVE_PARAMS = {
    MAX_WAVES: 12,
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
    persistence: {
        min: 0.1,
        max: 1,
        step: 0.1,
    },
}

export const FRAGMENT_PARAMS = {
    smoothness: {
        min: 10,
        max: 200,
        step: 1,
    },
    fresnelPower: {
        min: 1,
        max: 20,
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
                        0.8 // persistence
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
        // value: new THREE.Vector3(10.0, 10.0, 10.0), // balanced shadows
        // value: new THREE.Vector3(12.0, 8.0, 12.0), // good for showing wave detail
        value: new THREE.Vector3(15.0, 8.0, 0.0), // dramatic shadows
    },
    uSmoothness: {
        type: "f",
        value: 200,
    },
    uFresnelPower: {
        type: "f",
        value: 10.0,
    },
    uSkybox: {
        type: "t",
        value: null,
    },
}
