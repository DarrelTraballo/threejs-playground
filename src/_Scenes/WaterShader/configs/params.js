import * as THREE from "three"
import { randomBetween } from "../../../lib/utils"
import { CAMERA_PRESETS, WATER_PRESETS } from "./presets"

export const PLANE_PARAMS = {
    width: 500,
    height: 500,
    widthSegments: 200,
    heightSegments: 200,
    wireframe: false,
}

export const WAVE_PARAMS = {
    MAX_WAVES: 16,
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
    peakHeight: {
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
    scatteringDepth: {
        // min: 0.1,
        min: 0.0,
        max: 2.0,
        step: 0.1,
    },
    backScatteringStrength: {
        // min: 0.1,
        min: 0.0,
        max: 4.0,
        step: 0.1,
    },
    sideScatteringStrength: {
        // min: 0.1,
        min: 0.0,
        max: 4.0,
        step: 0.1,
    },
    sideScatterFocus: {
        // min: 1.0,
        min: 1.0,
        max: 20.0,
        step: 1.0,
    },
    waterIOR: {
        min: 1.2,
        max: 1.4,
        step: 0.001,
    },
    turbidity: {
        min: 0.1,
        max: 1,
        step: 0.1,
    },
    depthColor: {
        min: 10,
        max: 200,
        step: 10,
    },
}

export const WAVE_COLORS = {
    deepOcean: 0x0b4f6c, // Deep blue with slight green tint
    tropicalBlue: 0x0e87cc, // Your current color - good baseline
    caribbeanBlue: 0x20b2aa, // Slightly more turquoise
    glacierBlue: 0x89cff0, // Lighter, more icy blue
    aquamarine: 0x7fffd4, // Stylized turquoise
    swimmingPool: 0x0080b3,
    calmOcean: 0x004d80,
    tropicalLagoon: 0x008099,
    murlyLake: 0x334d33,
}

export const WATER_UNIFORMS = {
    uTime: {
        type: "f",
        value: 0,
    },
    uResolution: {
        type: "v2",
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    uWaveCount: {
        type: "i",
        value: 12,
    },
    uWaveParams: {
        type: "v4", // Array of vec4
        value: new THREE.Vector4(
            randomBetween(WAVE_PARAMS.amplitude.min, WAVE_PARAMS.amplitude.max), // amplitude
            randomBetween(WAVE_PARAMS.frequency.min, WAVE_PARAMS.frequency.max), // frequency
            randomBetween(WAVE_PARAMS.speed.min, WAVE_PARAMS.speed.max), // speed
            0.8 // persistence
        ),
    },
    uPeakHeight: {
        type: "f",
        value: 0.8,
    },
    uWaterColor: {
        type: "v3",
        // value: new THREE.Color(0x3a4851), // Acerola colors
        // value: new THREE.Color(0x0e87cc), // My colors
        value: new THREE.Color(WATER_PRESETS.defaultWater.uniforms.uWaterColor), // My colors
    },
    uLightDirection: {
        type: "v3",
        value: new THREE.Vector3(
            CAMERA_PRESETS.lowAngleRim.light.x,
            CAMERA_PRESETS.lowAngleRim.light.y,
            CAMERA_PRESETS.lowAngleRim.light.z
        ),
    },
    uSmoothness: {
        type: "f",
        value: 100,
    },
    uFresnelPower: {
        type: "f",
        value: 10.0,
    },
    uScatteringDepth: {
        type: "f",
        value: 1.0,
    },
    uBackScatteringStrength: {
        type: "f",
        value: 2.0,
    },
    uSideScatteringStrength: {
        type: "f",
        value: 1.0,
    },
    uSideScatterFocus: {
        type: "f",
        value: 4.0,
    },
    uSkybox: {
        type: "t",
        value: null,
    },
    uWaterIOR: {
        type: "f",
        value: 1.333,
    },
    uTurbidity: {
        type: "f",
        value: 0.1,
    },
    uDepthColor: {
        type: "f",
        value: 50.0,
    },
}

export const POST_PROCESSING_UNIFORMS = {
    commonUniforms: {
        tDiffuse: { value: null },
        uTime: WATER_UNIFORMS.uTime,
        uResolution: WATER_UNIFORMS.uResolution,
        uLightDirection: {
            type: "v3",
            value: new THREE.Vector3(
                CAMERA_PRESETS.lowAngleRim.light.x,
                CAMERA_PRESETS.lowAngleRim.light.y,
                CAMERA_PRESETS.lowAngleRim.light.z
            ),
        },
    },

    sunUniforms: {
        tDiffuse: { value: null },
        uTime: WATER_UNIFORMS.uTime,
        uResolution: WATER_UNIFORMS.uResolution,
        uLightDirection: {
            type: "v3",
            value: new THREE.Vector3(
                CAMERA_PRESETS.lowAngleRim.light.x,
                CAMERA_PRESETS.lowAngleRim.light.y,
                CAMERA_PRESETS.lowAngleRim.light.z
            ),
        },
        uSunColor: { value: new THREE.Vector3(1.0, 0.957, 0.839) },
        uProjectionMatrix: { value: new THREE.Matrix4() },
        uViewMatrix: { value: new THREE.Matrix4() },
        uSunSize: { value: 0.02 },
        uSunIntensity: { value: 5.0 },
        uBloomStrength: { value: 0.5 },
        uAtmosphereStrength: { value: 0.3 },
    },

    fogUniforms: {
        tDiffuse: { value: null },
        uTime: WATER_UNIFORMS.uTime,
        uResolution: WATER_UNIFORMS.uResolution,
        // uSkyColor: { value: new THREE.Vector3(0.6, 0.8, 1.0) },
        uSkyColor: { value: new THREE.Vector3(0.7, 0.7, 0.75) },
        uHorizonHeight: { value: 0.9 },
        uFogDensity: { value: 1 },
    },

    causticsUniforms: {
        tDiffuse: { value: null },
        uTime: WATER_UNIFORMS.uTime,
        uResolution: WATER_UNIFORMS.uResolution,
        uIntensity: { value: 1.0 },
    },

    chromaticAberrationUniforms: {
        tDiffuse: { value: null },
        uTime: WATER_UNIFORMS.uTime,
        uOffset: { value: 0.005 },
    },
}
