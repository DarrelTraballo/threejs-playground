import * as dat from "dat.gui"
import * as THREE from "three"

import { PLANE_PARAMS, WAVE_PARAMS, FRAGMENT_PARAMS, UNIFORMS } from "../configs/params"

export const createUniformData = (clock) => ({
    ...UNIFORMS,
    uTime: {
        type: "f",
        value: clock.getElapsedTime(),
    },
})

export function createVertexShaderGUI(uniformData) {
    const gui = new dat.GUI()

    const vertexFolder = gui.addFolder("Vertex Shader Properties")

    vertexFolder.add(uniformData.uWaveCount, "value", 1, 4, 1).name("Number of Waves")

    for (let waveIndex = 0; waveIndex < WAVE_PARAMS.MAX_WAVES; waveIndex++) {
        const waveFolder = vertexFolder.addFolder(`Wave ${waveIndex + 1}`)

        const waveControls = {
            amplitude: uniformData.uWaveParams.value[waveIndex].x,
            frequency: uniformData.uWaveParams.value[waveIndex].y,
            speed: uniformData.uWaveParams.value[waveIndex].z,
            direction: uniformData.uWaveParams.value[waveIndex].w > 0,
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
            .add(waveControls, "direction")
            .name("Direction")
            .onChange((value) => {
                uniformData.uWaveParams.value[waveIndex].w = value ? 1.0 : -1.0
            })

        waveFolder.open()
    }
    vertexFolder.open()
    return gui
}

export function createFragmentShaderGUI(arrowHelper, sphereMesh) {
    const gui = new dat.GUI()

    const fragmentFolder = gui.addFolder("Fragment Shader Properties")

    const config = {
        color: [
            UNIFORMS.uWaveColor.value.r * 255,
            UNIFORMS.uWaveColor.value.g * 255,
            UNIFORMS.uWaveColor.value.b * 255,
        ],
        smoothness: UNIFORMS.uSmoothness.value,
        showLightDirection: true,
        lightDirection: {
            x: UNIFORMS.uLightDirection.value.x,
            y: UNIFORMS.uLightDirection.value.y,
            z: UNIFORMS.uLightDirection.value.z,
        },
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

    const lightFolder = fragmentFolder.addFolder("Light Direction")

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

    lightFolder
        .add(config, "showLightDirection")
        .name("Show Light Direction")
        .onChange((value) => {
            arrowHelper.visible = value
            sphereMesh.visible = value
        })

    lightFolder
        .add(config.lightDirection, "x")
        .min(FRAGMENT_PARAMS.lightDir.x.min)
        .max(FRAGMENT_PARAMS.lightDir.x.max)
        .step(FRAGMENT_PARAMS.lightDir.x.step)
        .name("X")
        .onChange(() => updateLightDirection())

    lightFolder
        .add(config.lightDirection, "y")
        .min(FRAGMENT_PARAMS.lightDir.y.min)
        .max(FRAGMENT_PARAMS.lightDir.y.max)
        .step(FRAGMENT_PARAMS.lightDir.y.step)
        .name("Y")
        .onChange(() => updateLightDirection())

    lightFolder
        .add(config.lightDirection, "z")
        .min(FRAGMENT_PARAMS.lightDir.z.min)
        .max(FRAGMENT_PARAMS.lightDir.z.max)
        .step(FRAGMENT_PARAMS.lightDir.z.step)
        .name("Z")
        .onChange(() => updateLightDirection())

    lightFolder.open()
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
