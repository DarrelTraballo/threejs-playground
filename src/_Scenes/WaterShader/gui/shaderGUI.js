import * as dat from "dat.gui"
import * as THREE from "three"

import { PLANE_PARAMS, WAVE_PARAMS, FRAGMENT_PARAMS, UNIFORMS } from "../configs/params"

export const createUniformData = (clock) => ({
    ...UNIFORMS,
    uTime: {
        type: "f",
        value: clock.getElapsedTime(),
    },
    uSkybox: UNIFORMS.uSkybox,
})

export function createVertexShaderGUI(uniformData) {
    const gui = new dat.GUI()

    const vertexFolder = gui.addFolder("Vertex Shader Properties")

    vertexFolder.add(uniformData.uWaveCount, "value", 1, WAVE_PARAMS.MAX_WAVES, 1).name("Number of Waves")

    for (let waveIndex = 0; waveIndex < 1; waveIndex++) {
        const waveFolder = vertexFolder.addFolder(`Wave ${waveIndex + 1}`)

        const waveControls = {
            amplitude: uniformData.uWaveParams.value[waveIndex].x,
            frequency: uniformData.uWaveParams.value[waveIndex].y,
            speed: uniformData.uWaveParams.value[waveIndex].z,
            persistence: uniformData.uWaveParams.value[waveIndex].w,
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
                uniformData.uWaveParams.value[waveIndex].x = value
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
                uniformData.uWaveParams.value[waveIndex].y = value
            })

        waveFolder
            .add(waveControls, "speed", WAVE_PARAMS.speed.min, WAVE_PARAMS.speed.max, WAVE_PARAMS.speed.step)
            .name("Speed")
            .onChange((value) => {
                uniformData.uWaveParams.value[waveIndex].z = value
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
                uniformData.uWaveParams.value[waveIndex].w = value
            })
        if (waveIndex === 0) {
            waveFolder.open()
        }
    }
    vertexFolder.open()
    return gui
}

export function createFragmentShaderGUI(arrowHelper, sphereMesh, camera) {
    const gui = new dat.GUI()

    const fragmentFolder = gui.addFolder("Fragment Shader Properties")

    const cameraPresets = {
        lowAngle: {
            name: "Low Angle",
            light: { x: 8.0, y: 4.0, z: 8.0 },
            camera: { x: -12.0, y: 3.0, z: -12.0 },
        },
        dramatic: {
            name: "Dramatic Shadows",
            light: { x: 15.0, y: 8.0, z: 0.0 },
            camera: { x: -12.0, y: 6.0, z: -8.0 },
        },
        threeQuarter: {
            name: "Three Quarter View",
            light: { x: 12.0, y: 8.0, z: 12.0 },
            camera: { x: -10.0, y: 6.0, z: -10.0 },
        },
        sideLight: {
            name: "Side Lighting",
            light: { x: 15.0, y: 3.0, z: 0.0 },
            camera: { x: -8.0, y: 5.0, z: -12.0 },
        },
        dramatic45: {
            name: "Dramatic 45°",
            light: { x: 12.0, y: 12.0, z: 0.0 },
            camera: { x: -8.0, y: 8.0, z: -12.0 },
        },
    }

    const config = {
        color: [
            UNIFORMS.uWaveColor.value.r * 255,
            UNIFORMS.uWaveColor.value.g * 255,
            UNIFORMS.uWaveColor.value.b * 255,
        ],
        smoothness: UNIFORMS.uSmoothness.value,
        fresnelPower: UNIFORMS.uFresnelPower.value,
        showLightDirection: false,
        lightDirection: {
            x: UNIFORMS.uLightDirection.value.x,
            y: UNIFORMS.uLightDirection.value.y,
            z: UNIFORMS.uLightDirection.value.z,
        },
        cameraPreset: "lowAngle",
    }

    const updatePreset = (presetName) => {
        const preset = cameraPresets[presetName]
        if (!preset) return

        config.lightDirection.x = preset.light.x
        config.lightDirection.y = preset.light.y
        config.lightDirection.z = preset.light.z
        updateLightDirection()

        camera.position.set(preset.camera.x, preset.camera.y, preset.camera.z)

        camera.lookAt(0, 0, 0)
    }

    fragmentFolder
        .addColor(config, "color")
        .name("Wave Color")
        .onChange((value) => {
            UNIFORMS.uWaveColor.value.setRGB(value[0] / 255, value[1] / 255, value[2] / 255)
        })

    fragmentFolder
        .add(config, "smoothness")
        .min(FRAGMENT_PARAMS.smoothness.min)
        .max(FRAGMENT_PARAMS.smoothness.max)
        .step(FRAGMENT_PARAMS.smoothness.step)
        .name("Smoothness")
        .onChange((value) => {
            UNIFORMS.uSmoothness.value = value
        })

    fragmentFolder
        .add(config, "fresnelPower")
        .min(FRAGMENT_PARAMS.fresnelPower.min)
        .max(FRAGMENT_PARAMS.fresnelPower.max)
        .step(FRAGMENT_PARAMS.fresnelPower.step)
        .name("Fresnel Power")
        .onChange((value) => {
            UNIFORMS.uFresnelPower.value = value
        })

    const updateLightDirection = () => {
        const direction = new THREE.Vector3(
            config.lightDirection.x,
            config.lightDirection.y,
            config.lightDirection.z
        ).normalize()

        arrowHelper.setDirection(direction)
        UNIFORMS.uLightDirection.value.copy(direction)

        const lightDistance = 15
        sphereMesh.position.copy(direction.multiplyScalar(lightDistance))
    }

    fragmentFolder
        .add(config, "showLightDirection")
        .name("Show Light Direction")
        .onChange((value) => {
            arrowHelper.visible = value
            sphereMesh.visible = value
        })

    fragmentFolder
        .add(config, "cameraPreset", {
            "Low Angle": "lowAngle",
            "Dramatic Shadows": "dramatic",
            "Three Quarter View": "threeQuarter",
            "Side Lighting": "sideLight",
            "Dramatic 45°": "dramatic45",
        })
        .name("Viewing Preset")
        .onChange(updatePreset)

    fragmentFolder.open()

    updateLightDirection()

    return gui
}

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

    meshFolder.add(PLANE_PARAMS, "width").min(5).max(100).step(1).name("Dimensions").onChange(adjustDimensions)

    meshFolder.add(PLANE_PARAMS, "widthSegments").min(1).max(100).step(1).name("Segments").onChange(adjustSegments)

    meshFolder.open()

    return gui
}
