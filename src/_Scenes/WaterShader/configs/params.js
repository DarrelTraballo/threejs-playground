import * as THREE from "three"
import { randomBetween } from "../../../lib/utils"

export const PLANE_PARAMS = {
    width: 250,
    height: 250,
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
}

export const WAVE_COLORS = {
    deepOcean: 0x0b4f6c, // Deep blue with slight green tint
    tropicalBlue: 0x0e87cc, // Your current color - good baseline
    caribbeanBlue: 0x20b2aa, // Slightly more turquoise
    glacierBlue: 0x89cff0, // Lighter, more icy blue
    aquamarine: 0x7fffd4, // Stylized turquoise
}

export const CAMERA_PRESETS = {
    // Best for showing subsurface scattering
    backlight: {
        name: "Backlight Showcase",
        light: { x: 60.0, y: 40.0, z: -80.0 },
        camera: { x: -60.0, y: 25.0, z: 80.0 },
    },
    sunrise: {
        name: "Sunrise Glow",
        light: { x: 100.0, y: 15.0, z: 0.0 },
        camera: { x: -40.0, y: 8.0, z: -60.0 },
    },
    overhead: {
        name: "Overhead Drama",
        light: { x: 20.0, y: 100.0, z: 20.0 },
        camera: { x: -70.0, y: 45.0, z: -70.0 },
    },
    lowAngleRim: {
        name: "Low Angle Rim Light",
        light: { x: 40.0, y: 15.0, z: 60.0 },
        camera: { x: -50.0, y: 10.0, z: -80.0 },
    },
    grazing: {
        name: "Grazing Light",
        light: { x: 100.0, y: 8.0, z: 0.0 },
        camera: { x: -60.0, y: 15.0, z: -60.0 },
    },
    dualTone: {
        name: "Dual Tone",
        light: { x: 80.0, y: 30.0, z: -40.0 },
        camera: { x: -70.0, y: 35.0, z: 70.0 },
    },
    dramatic: {
        name: "Dramatic Contrast",
        light: { x: 60.0, y: 50.0, z: -60.0 },
        camera: { x: -50.0, y: 30.0, z: 50.0 },
    },
    underwater: {
        name: "Underwater Feel",
        light: { x: 0.0, y: 80.0, z: 0.0 },
        camera: { x: -40.0, y: 5.0, z: -40.0 },
    },
    artistic: {
        name: "Artistic Profile",
        light: { x: 90.0, y: 25.0, z: 0.0 },
        camera: { x: 0.0, y: 20.0, z: -90.0 },
    },
    scatterHighlight: {
        name: "Scatter Highlight",
        light: { x: 70.0, y: 20.0, z: -70.0 },
        camera: { x: -40.0, y: 15.0, z: 60.0 },
    },
}

export const UNIFORMS = {
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
    uWaveColor: {
        type: "v3",
        // value: new THREE.Color(0x3a4851), // Acerola colors
        // value: new THREE.Color(0x0e87cc), // My colors
        value: new THREE.Color(0x20b2aa), // My colors
    },
    uLightDirection: {
        type: "v3",
        value: new THREE.Vector3(
            CAMERA_PRESETS.lowAngleRim.light.x,
            CAMERA_PRESETS.lowAngleRim.light.y,
            CAMERA_PRESETS.lowAngleRim.light.z
        ).normalize(), // low angle light direction
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
}
