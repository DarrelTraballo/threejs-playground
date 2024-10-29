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

export const WATER_PRESETS = {
    defaultWater: {
        name: "Default Water",
        uniforms: {
            uWaterIOR: 1.34, // Using average water IOR
            uTurbidity: 0.2,
            uDepthColor: 100.0,
            uSmoothness: 90.0,
            uScatteringDepth: 1.0,
            uBackScatteringStrength: 0.6,
            uSideScatteringStrength: 0.4,
            uSideScatterFocus: 0.9,
            uFresnelPower: 4.5,
            uWaterColor: 0x20b2aa, // Your current default color
        },
    },
    crystalPool: {
        name: "Swimming Pool",
        uniforms: {
            uWaterIOR: 1.338,
            uTurbidity: 0.1,
            uDepthColor: 20.0,
            uSmoothness: 128.0,
            uScatteringDepth: 0.8,
            uBackScatteringStrength: 0.5,
            uSideScatteringStrength: 0.3,
            uSideScatterFocus: 0.8,
            uFresnelPower: 5.0,
            uWaterColor: 0x0080b3, // Converted from (0.0, 0.5, 0.7)
        },
    },
    calmOcean: {
        name: "Calm Ocean",
        uniforms: {
            uWaterIOR: 1.342,
            uTurbidity: 0.3,
            uDepthColor: 150.0,
            uSmoothness: 64.0,
            uScatteringDepth: 1.2,
            uBackScatteringStrength: 0.7,
            uSideScatteringStrength: 0.5,
            uSideScatterFocus: 1.0,
            uFresnelPower: 4.0,
            uWaterColor: 0x004d80, // Converted from (0.0, 0.3, 0.5)
        },
    },
    tropicalLagoon: {
        name: "Tropical Lagoon",
        uniforms: {
            uWaterIOR: 1.339,
            uTurbidity: 0.15,
            uDepthColor: 100.0,
            uSmoothness: 96.0,
            uScatteringDepth: 1.0,
            uBackScatteringStrength: 0.6,
            uSideScatteringStrength: 0.4,
            uSideScatterFocus: 0.9,
            uFresnelPower: 4.5,
            uWaterColor: 0x009980, // Converted from (0.0, 0.6, 0.5)
        },
    },
    murkyLake: {
        name: "Murky Lake",
        uniforms: {
            uWaterIOR: 1.335,
            uTurbidity: 0.7,
            uDepthColor: 30.0,
            uSmoothness: 32.0,
            uScatteringDepth: 1.5,
            uBackScatteringStrength: 0.9,
            uSideScatteringStrength: 0.7,
            uSideScatterFocus: 1.2,
            uFresnelPower: 3.0,
            uWaterColor: 0x334d33, // Converted from (0.2, 0.3, 0.2)
        },
    },
    glacialMelt: {
        name: "Glacial Melt",
        uniforms: {
            uWaterIOR: 1.333,
            uTurbidity: 0.05,
            uDepthColor: 180.0,
            uSmoothness: 150.0,
            uScatteringDepth: 0.6,
            uBackScatteringStrength: 0.4,
            uSideScatteringStrength: 0.2,
            uSideScatterFocus: 0.7,
            uFresnelPower: 5.5,
            uWaterColor: 0x88c3ff, // Light icy blue
        },
    },
    caribbeanShallows: {
        name: "Caribbean Shallows",
        uniforms: {
            uWaterIOR: 1.337,
            uTurbidity: 0.12,
            uDepthColor: 120.0,
            uSmoothness: 110.0,
            uScatteringDepth: 0.9,
            uBackScatteringStrength: 0.55,
            uSideScatteringStrength: 0.45,
            uSideScatterFocus: 0.85,
            uFresnelPower: 4.8,
            uWaterColor: 0x00b4d8, // Bright turquoise
        },
    },
    stormySea: {
        name: "Stormy Sea",
        uniforms: {
            uWaterIOR: 1.343,
            uTurbidity: 0.45,
            uDepthColor: 200.0,
            uSmoothness: 45.0,
            uScatteringDepth: 1.4,
            uBackScatteringStrength: 0.8,
            uSideScatteringStrength: 0.6,
            uSideScatterFocus: 1.1,
            uFresnelPower: 3.5,
            uWaterColor: 0x2c3e50, // Dark stormy blue
        },
    },
    mangroveSwamp: {
        name: "Mangrove Swamp",
        uniforms: {
            uWaterIOR: 1.336,
            uTurbidity: 0.6,
            uDepthColor: 40.0,
            uSmoothness: 50.0,
            uScatteringDepth: 1.3,
            uBackScatteringStrength: 0.85,
            uSideScatteringStrength: 0.65,
            uSideScatterFocus: 1.15,
            uFresnelPower: 3.2,
            uWaterColor: 0x2f4f4f, // Dark green-grey
        },
    },
    hotSpring: {
        name: "Hot Spring",
        uniforms: {
            uWaterIOR: 1.334,
            uTurbidity: 0.25,
            uDepthColor: 90.0,
            uSmoothness: 80.0,
            uScatteringDepth: 1.1,
            uBackScatteringStrength: 0.65,
            uSideScatteringStrength: 0.5,
            uSideScatterFocus: 0.95,
            uFresnelPower: 4.2,
            uWaterColor: 0x7fb5b5, // Milky aqua
        },
    },
}
