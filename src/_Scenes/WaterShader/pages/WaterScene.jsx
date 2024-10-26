import { useEffect } from "react"
import * as THREE from "three"
import { ShaderPass } from "three/examples/jsm/Addons.js"

import SceneInit from "../../../lib/SceneInit"
import { WaterShader, SunShader, CausticsShader, FogShader, ChromaticAberrationShader } from "../shaders/shaders.js"
import { createVertexShaderGUI, createFragmentShaderGUI, createPlaneGUI } from "../gui/shaderGUI"
import { PLANE_PARAMS, WATER_UNIFORMS } from "../configs/params"

export default function WaterScene() {
    useEffect(() => {
        const mainScene = new SceneInit("shaderCanvas")
        mainScene.initialize()

        const sphere = new THREE.SphereGeometry(0.5, 32, 32)
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0xffff00,
        })
        const sphereMesh = new THREE.Mesh(sphere, sphereMaterial)
        sphereMesh.position.set(5, 5, 5)
        mainScene.scene.add(sphereMesh)
        sphereMesh.visible = false

        const arrowHelper = new THREE.ArrowHelper(
            new THREE.Vector3(5, 5, 5),
            new THREE.Vector3(0, 0, 0),
            5,
            0xffff00,
            1,
            0.5
        )
        mainScene.scene.add(arrowHelper)
        arrowHelper.visible = false

        let lastTime = 0
        const fixedDeltaTime = 1 / 60
        let accumulator = 0

        const uniformData = WATER_UNIFORMS
        const vertexShaderGUI = createVertexShaderGUI(uniformData)
        const fragmentShaderGUI = createFragmentShaderGUI(vertexShaderGUI, arrowHelper, sphereMesh, mainScene.camera)

        const geometry = new THREE.PlaneGeometry(
            PLANE_PARAMS.width,
            PLANE_PARAMS.height,
            PLANE_PARAMS.widthSegments,
            PLANE_PARAMS.heightSegments
        )
        const material = new THREE.ShaderMaterial(WaterShader)

        const mesh = new THREE.Mesh(geometry, material)
        // mesh.rotation.x = -Math.PI / 2
        mesh.position.set(0, 0, 0)
        mainScene.scene.add(mesh)

        const updateMesh = () => {
            const newGeometry = new THREE.PlaneGeometry(
                PLANE_PARAMS.width,
                PLANE_PARAMS.height,
                PLANE_PARAMS.widthSegments,
                PLANE_PARAMS.heightSegments
            )
            mesh.geometry.dispose()
            mesh.geometry = newGeometry
        }

        const meshGUI = createPlaneGUI(mesh, updateMesh)

        const sunPass = new ShaderPass(SunShader)
        const fogPass = new ShaderPass(FogShader)
        const chromaticAberrationPass = new ShaderPass(ChromaticAberrationShader)

        mainScene.composer.addPass(sunPass)
        mainScene.composer.addPass(fogPass)
        mainScene.composer.addPass(chromaticAberrationPass)

        const updateScene = (currentTime) => {
            const deltaTime = currentTime - lastTime
            lastTime = currentTime

            accumulator += deltaTime
            while (accumulator >= fixedDeltaTime) {
                uniformData.uTime.value += fixedDeltaTime
                sunPass.uniforms.uProjectionMatrix.value.copy(mainScene.camera.projectionMatrix)
                sunPass.uniforms.uViewMatrix.value.copy(mainScene.camera.matrixWorldInverse)
                accumulator -= fixedDeltaTime
            }

            arrowHelper.position.copy(mesh.position)
        }

        mainScene.animate(updateScene)

        return () => {
            vertexShaderGUI.destroy()
            // fragmentShaderGUI.destroy()
            meshGUI.destroy()
            geometry.dispose()
            material.dispose()
        }
    }, [])

    return (
        <div>
            <canvas id="shaderCanvas" />
        </div>
    )
}