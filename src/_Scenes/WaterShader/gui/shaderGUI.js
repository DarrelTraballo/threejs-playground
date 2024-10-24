import * as dat from "dat.gui"
import * as THREE from "three"

import { PLANE_PARAMS, WAVE_PARAMS, FRAGMENT_PARAMS, UNIFORMS, CAMERA_PRESETS } from "../configs/params"

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

    const waveFolder = vertexFolder.addFolder(`Wave`)

    const waveControls = {
        amplitude: uniformData.uWaveParams.value.x,
        frequency: uniformData.uWaveParams.value.y,
        speed: uniformData.uWaveParams.value.z,
        persistence: uniformData.uWaveParams.value.w,
        peakHeight: uniformData.uPeakHeight.value,
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
            uniformData.uWaveParams.value.x = value
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
            uniformData.uWaveParams.value.y = value
        })

    waveFolder
        .add(waveControls, "speed", WAVE_PARAMS.speed.min, WAVE_PARAMS.speed.max, WAVE_PARAMS.speed.step)
        .name("Speed")
        .onChange((value) => {
            uniformData.uWaveParams.value.z = value
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
            uniformData.uWaveParams.value.w = value
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
            uniformData.uPeakHeight.value = value
        })

    waveFolder.open()
    vertexFolder.open()
    return gui
}

export function createFragmentShaderGUI(arrowHelper, sphereMesh, camera) {
    const gui = new dat.GUI()

    const fragmentFolder = gui.addFolder("Fragment Shader Properties")

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
        scatteringDepth: UNIFORMS.uScatteringDepth.value,
        backScatteringStrength: UNIFORMS.uBackScatteringStrength.value,
        sideScatteringStrength: UNIFORMS.uSideScatteringStrength.value,
        sideScatterFocus: UNIFORMS.uSideScatterFocus.value,
    }

    const updatePreset = (presetName) => {
        const preset = CAMERA_PRESETS[presetName]
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

    fragmentFolder
        .add(config, "scatteringDepth")
        .min(FRAGMENT_PARAMS.scatteringDepth.min)
        .max(FRAGMENT_PARAMS.scatteringDepth.max)
        .step(FRAGMENT_PARAMS.scatteringDepth.step)
        .name("Scattering Depth")
        .onChange((value) => {
            UNIFORMS.uScatteringDepth.value = value
        })

    fragmentFolder
        .add(config, "backScatteringStrength")
        .min(FRAGMENT_PARAMS.backScatteringStrength.min)
        .max(FRAGMENT_PARAMS.backScatteringStrength.max)
        .step(FRAGMENT_PARAMS.backScatteringStrength.step)
        .name("Back Scattering Strength")
        .onChange((value) => {
            UNIFORMS.uBackScatteringStrength.value = value
        })

    fragmentFolder
        .add(config, "sideScatteringStrength")
        .min(FRAGMENT_PARAMS.sideScatteringStrength.min)
        .max(FRAGMENT_PARAMS.sideScatteringStrength.max)
        .step(FRAGMENT_PARAMS.sideScatteringStrength.step)
        .name("Side Scattering Strength")
        .onChange((value) => {
            UNIFORMS.uSideScatteringStrength.value = value
        })

    fragmentFolder
        .add(config, "sideScatterFocus")
        .min(FRAGMENT_PARAMS.sideScatterFocus.min)
        .max(FRAGMENT_PARAMS.sideScatterFocus.max)
        .step(FRAGMENT_PARAMS.sideScatterFocus.step)
        .name("Side Scatter Focus")
        .onChange((value) => {
            UNIFORMS.uSideScatterFocus.value = value
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
            "Horizon View": "horizonView",
            "Debug View": "debugView",
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

    meshFolder.add(PLANE_PARAMS, "width").min(5).max(200).step(1).name("Dimensions").onChange(adjustDimensions)

    meshFolder.add(PLANE_PARAMS, "widthSegments").min(1).max(150).step(1).name("Segments").onChange(adjustSegments)

    meshFolder.open()

    return gui
}
