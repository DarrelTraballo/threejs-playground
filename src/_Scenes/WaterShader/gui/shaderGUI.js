import * as dat from "dat.gui"
import * as THREE from "three"

import { PLANE_PARAMS, WAVE_PARAMS, FRAGMENT_PARAMS, WATER_UNIFORMS, POST_PROCESSING_UNIFORMS } from "../configs/params"
import { CAMERA_PRESETS, WATER_PRESETS } from "../configs/presets"

export function createPlaneGUI(mesh, updateMesh) {
    const gui = new dat.GUI()

    const meshFolder = gui.addFolder("Mesh Properties")

    meshFolder.add(mesh.material, "wireframe").name("Wireframe")

    const adjustDimensions = (value) => {
        PLANE_PARAMS.width = value
        PLANE_PARAMS.height = value
        updateMesh()
    }

    const adjustSegments = (value) => {
        PLANE_PARAMS.widthSegments = value
        PLANE_PARAMS.heightSegments = value
        updateMesh()
    }

    meshFolder.add(PLANE_PARAMS, "width").min(50).max(1000).step(10).name("Dimensions").onChange(adjustDimensions)

    meshFolder.add(PLANE_PARAMS, "widthSegments").min(1).max(256).step(1).name("Segments").onChange(adjustSegments)

    meshFolder.open()

    return gui
}

export function createVertexShaderGUI(gui) {
    // const gui = new dat.GUI()

    const vertexFolder = gui.addFolder("Vertex Shader Properties")

    vertexFolder.add(WATER_UNIFORMS.uWaveCount, "value", 1, WAVE_PARAMS.MAX_WAVES, 1).name("Number of Waves")

    const waveFolder = vertexFolder.addFolder(`Wave`)

    const waveControls = {
        amplitude: WATER_UNIFORMS.uWaveParams.value.x,
        frequency: WATER_UNIFORMS.uWaveParams.value.y,
        speed: WATER_UNIFORMS.uWaveParams.value.z,
        persistence: WATER_UNIFORMS.uWaveParams.value.w,
        peakHeight: WATER_UNIFORMS.uPeakHeight.value,
    }

    waveFolder
        .add(
            waveControls,
            "amplitude",
            WAVE_PARAMS.amplitude.min,
            WAVE_PARAMS.amplitude.max,
            WAVE_PARAMS.amplitude.step
        )
        .name("Amplitude")
        .onChange((value) => {
            WATER_UNIFORMS.uWaveParams.value.x = value
        })

    waveFolder
        .add(
            waveControls,
            "frequency",
            WAVE_PARAMS.frequency.min,
            WAVE_PARAMS.frequency.max,
            WAVE_PARAMS.frequency.step
        )
        .name("Frequency")
        .onChange((value) => {
            WATER_UNIFORMS.uWaveParams.value.y = value
        })

    waveFolder
        .add(waveControls, "speed", WAVE_PARAMS.speed.min, WAVE_PARAMS.speed.max, WAVE_PARAMS.speed.step)
        .name("Speed")
        .onChange((value) => {
            WATER_UNIFORMS.uWaveParams.value.z = value
        })

    waveFolder
        .add(
            waveControls,
            "persistence",
            WAVE_PARAMS.persistence.min,
            WAVE_PARAMS.persistence.max,
            WAVE_PARAMS.persistence.step
        )
        .name("Persistence")
        .onChange((value) => {
            WATER_UNIFORMS.uWaveParams.value.w = value
        })

    waveFolder
        .add(
            waveControls,
            "peakHeight",
            WAVE_PARAMS.peakHeight.min,
            WAVE_PARAMS.peakHeight.max,
            WAVE_PARAMS.peakHeight.step
        )
        .name("Peak Height")
        .onChange((value) => {
            WATER_UNIFORMS.uPeakHeight.value = value
        })

    waveFolder.open()
    vertexFolder.open()
    return gui
}

export function createFragmentShaderGUI(gui) {
    const fragmentFolder = gui.addFolder("Fragment Shader Properties")

    const config = {
        color: [
            WATER_UNIFORMS.uWaterColor.value.r * 255,
            WATER_UNIFORMS.uWaterColor.value.g * 255,
            WATER_UNIFORMS.uWaterColor.value.b * 255,
        ],
        smoothness: WATER_UNIFORMS.uSmoothness.value,
        fresnelPower: WATER_UNIFORMS.uFresnelPower.value,
        scatteringDepth: WATER_UNIFORMS.uScatteringDepth.value,
        backScatteringStrength: WATER_UNIFORMS.uBackScatteringStrength.value,
        sideScatteringStrength: WATER_UNIFORMS.uSideScatteringStrength.value,
        sideScatterFocus: WATER_UNIFORMS.uSideScatterFocus.value,
        waterIOR: WATER_UNIFORMS.uWaterIOR.value,
        turbidity: WATER_UNIFORMS.uTurbidity.value,
        depthColor: WATER_UNIFORMS.uDepthColor.value,
    }

    const controllers = {
        color: fragmentFolder
            .addColor(config, "color")
            .name("Wave Color")
            .onChange((value) => {
                WATER_UNIFORMS.uWaterColor.value.setRGB(value[0] / 255, value[1] / 255, value[2] / 255)
            }),

        smoothness: fragmentFolder
            .add(config, "smoothness")
            .min(FRAGMENT_PARAMS.smoothness.min)
            .max(FRAGMENT_PARAMS.smoothness.max)
            .step(FRAGMENT_PARAMS.smoothness.step)
            .name("Smoothness")
            .onChange((value) => {
                WATER_UNIFORMS.uSmoothness.value = value
            }),

        fresnelPower: fragmentFolder
            .add(config, "fresnelPower")
            .min(FRAGMENT_PARAMS.fresnelPower.min)
            .max(FRAGMENT_PARAMS.fresnelPower.max)
            .step(FRAGMENT_PARAMS.fresnelPower.step)
            .name("Fresnel Power")
            .onChange((value) => {
                WATER_UNIFORMS.uFresnelPower.value = value
            }),

        scatteringDepth: fragmentFolder
            .add(config, "scatteringDepth")
            .min(FRAGMENT_PARAMS.scatteringDepth.min)
            .max(FRAGMENT_PARAMS.scatteringDepth.max)
            .step(FRAGMENT_PARAMS.scatteringDepth.step)
            .name("Scattering Depth")
            .onChange((value) => {
                WATER_UNIFORMS.uScatteringDepth.value = value
            }),

        backScatteringStrength: fragmentFolder
            .add(config, "backScatteringStrength")
            .min(FRAGMENT_PARAMS.backScatteringStrength.min)
            .max(FRAGMENT_PARAMS.backScatteringStrength.max)
            .step(FRAGMENT_PARAMS.backScatteringStrength.step)
            .name("Back Scattering Strength")
            .onChange((value) => {
                WATER_UNIFORMS.uBackScatteringStrength.value = value
            }),

        sideScatteringStrength: fragmentFolder
            .add(config, "sideScatteringStrength")
            .min(FRAGMENT_PARAMS.sideScatteringStrength.min)
            .max(FRAGMENT_PARAMS.sideScatteringStrength.max)
            .step(FRAGMENT_PARAMS.sideScatteringStrength.step)
            .name("Side Scattering Strength")
            .onChange((value) => {
                WATER_UNIFORMS.uSideScatteringStrength.value = value
            }),

        sideScatterFocus: fragmentFolder
            .add(config, "sideScatterFocus")
            .min(FRAGMENT_PARAMS.sideScatterFocus.min)
            .max(FRAGMENT_PARAMS.sideScatterFocus.max)
            .step(FRAGMENT_PARAMS.sideScatterFocus.step)
            .name("Side Scatter Focus")
            .onChange((value) => {
                WATER_UNIFORMS.uSideScatterFocus.value = value
            }),

        waterIOR: fragmentFolder
            .add(config, "waterIOR")
            .min(FRAGMENT_PARAMS.waterIOR.min)
            .max(FRAGMENT_PARAMS.waterIOR.max)
            .step(FRAGMENT_PARAMS.waterIOR.step)
            .name("Water IOR")
            .onChange((value) => {
                WATER_UNIFORMS.uWaterIOR.value = value
            }),

        turbidity: fragmentFolder
            .add(config, "turbidity")
            .min(FRAGMENT_PARAMS.turbidity.min)
            .max(FRAGMENT_PARAMS.turbidity.max)
            .step(FRAGMENT_PARAMS.turbidity.step)
            .name("Turbidity")
            .onChange((value) => {
                WATER_UNIFORMS.uTurbidity.value = value
            }),

        depthColor: fragmentFolder
            .add(config, "depthColor")
            .min(FRAGMENT_PARAMS.depthColor.min)
            .max(FRAGMENT_PARAMS.depthColor.max)
            .step(FRAGMENT_PARAMS.depthColor.step)
            .name("Depth Color")
            .onChange((value) => {
                WATER_UNIFORMS.uDepthColor.value = value
            }),
    }

    fragmentFolder.open()

    return { gui, fragmentFolder, config, controllers }
}

function createWaterPresetGUI(gui, fragmentConfig, fragmentControllers) {
    const config = {
        waterPreset: "defaultWater",
    }

    const updatePreset = (presetName) => {
        const preset = WATER_PRESETS[presetName]
        if (!preset) return

        // Update all uniforms and GUI values
        for (const [key, value] of Object.entries(preset.uniforms)) {
            if (key === "uWaterColor") {
                const color = new THREE.Color(value)
                WATER_UNIFORMS[key].value.setRGB(color.r, color.g, color.b)

                // Update the color in fragmentConfig
                fragmentConfig.color = [color.r * 255, color.g * 255, color.b * 255]
                fragmentControllers.color.updateDisplay()
            } else {
                WATER_UNIFORMS[key].value = value

                // Update the corresponding value in fragmentConfig
                const configKey = key.charAt(1).toLowerCase() + key.slice(2)
                fragmentConfig[configKey] = value

                // Update the specific controller if it exists
                if (fragmentControllers[configKey]) {
                    fragmentControllers[configKey].updateDisplay()
                }
            }
        }
    }

    const presetOptions = {}
    for (const [key, preset] of Object.entries(WATER_PRESETS)) {
        presetOptions[preset.name] = key
    }

    gui.add(config, "waterPreset", presetOptions).name("Water Preset").onChange(updatePreset)

    // Initialize with default preset
    updatePreset(config.waterPreset)

    return gui
}

function createLightPresetGUI(gui, arrowHelper, sphereMesh, camera, sunPass) {
    const config = {
        showLightDirection: false,
        lightDirection: {
            water: {
                x: WATER_UNIFORMS.uLightDirection.value.x,
                y: WATER_UNIFORMS.uLightDirection.value.y,
                z: WATER_UNIFORMS.uLightDirection.value.z,
            },
            sun: {
                x: POST_PROCESSING_UNIFORMS.sunUniforms.uLightDirection.value.x,
                y: POST_PROCESSING_UNIFORMS.sunUniforms.uLightDirection.value.y,
                z: POST_PROCESSING_UNIFORMS.sunUniforms.uLightDirection.value.z,
            },
        },
        cameraPreset: "lowAngleRim",
    }

    const updatePreset = (presetName) => {
        const preset = CAMERA_PRESETS[presetName]
        if (!preset) return

        const lightDir = new THREE.Vector3(preset.light.x, preset.light.y, preset.light.z).normalize()

        config.lightDirection.water.x = lightDir.x
        config.lightDirection.water.y = lightDir.y
        config.lightDirection.water.z = lightDir.z

        config.lightDirection.sun.x = lightDir.x
        config.lightDirection.sun.y = lightDir.y
        config.lightDirection.sun.z = lightDir.z

        WATER_UNIFORMS.uLightDirection.value.copy(lightDir)
        POST_PROCESSING_UNIFORMS.sunUniforms.uLightDirection.value.copy(lightDir)

        if (sunPass && sunPass.uniforms.uLightDirection) {
            sunPass.uniforms.uLightDirection.value.copy(lightDir)
        }

        camera.position.set(preset.camera.x, preset.camera.y, preset.camera.z)

        camera.lookAt(0, 0, 0)

        updateLightDirection()
    }

    const updateLightDirection = () => {
        const waterDirection = new THREE.Vector3(
            config.lightDirection.water.x,
            config.lightDirection.water.y,
            config.lightDirection.water.z
        ).normalize()

        const sunDirection = new THREE.Vector3(
            config.lightDirection.sun.x,
            config.lightDirection.sun.y,
            config.lightDirection.sun.z
        ).normalize()

        WATER_UNIFORMS.uLightDirection.value.copy(waterDirection)
        POST_PROCESSING_UNIFORMS.sunUniforms.uLightDirection.value.copy(sunDirection)

        // Update the actual shader pass uniform
        if (sunPass && sunPass.uniforms.uLightDirection) {
            sunPass.uniforms.uLightDirection.value.copy(sunDirection)
        }

        arrowHelper.setDirection(waterDirection)
        const lightDistance = 250
        sphereMesh.position.copy(waterDirection.multiplyScalar(lightDistance))
    }

    gui.add(config, "showLightDirection")
        .name("Show Light Direction")
        .onChange((value) => {
            arrowHelper.visible = value
            sphereMesh.visible = value
        })

    gui.add(config, "cameraPreset", {
        "Backlight Showcase": "backlight",
        "Sunrise Glow": "sunrise",
        "Overhead Drama": "overhead",
        "Low Angle Rim Light": "lowAngleRim",
        "Grazing Light": "grazing",
        "Dual Tone": "dualTone",
        "Dramatic Contrast": "dramatic",
        "Underwater Feel": "underwater",
        "Artistic Profile": "artistic",
        "Scatter Highlight": "scatterHighlight",
    })
        .name("Viewing Preset")
        .onChange(updatePreset)

    updateLightDirection()
    return gui
}

export function initializeShaderGUI(arrowHelper, sphereMesh, camera, sunPass) {
    const gui = new dat.GUI()
    createVertexShaderGUI(gui)
    const { config, controllers } = createFragmentShaderGUI(gui)
    const presetFolder = gui.addFolder("Presets")
    createLightPresetGUI(presetFolder, arrowHelper, sphereMesh, camera, sunPass)
    createWaterPresetGUI(presetFolder, config, controllers)
    presetFolder.open()
    return gui
}
