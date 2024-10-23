import { useEffect } from "react"
import * as THREE from "three"

import SceneInit from "../lib/SceneInit"
// import vertex from "../_Scenes/WaterShader/Shaders/water.vert"
import vertexFBM from "../_Scenes/WaterShader/Shaders/waterFBM.vert"
import fragment from "../_Scenes/WaterShader/Shaders/waterFrag.frag"
import {
    createVertexShaderGUI,
    createFragmentShaderGUI,
    createUniformData,
    createPlaneGUI,
} from "../_Scenes/WaterShader/gui/shaderGUI"
import { PLANE_PARAMS } from "../_Scenes/WaterShader/configs/params"

export default function ShadersScene() {
    useEffect(() => {
        const mainScene = new SceneInit("shaderCanvas")
        mainScene.initialize()
        mainScene.animate()

        // const axesHelper = new THREE.AxesHelper(16)
        // mainScene.scene.add(axesHelper)

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

        const uniformData = createUniformData(mainScene.clock)
        const vertexShaderGUI = createVertexShaderGUI(uniformData)
        const fragmentShaderGUI = createFragmentShaderGUI(arrowHelper, sphereMesh, mainScene.camera)

        const geometry = new THREE.PlaneGeometry(
            PLANE_PARAMS.width,
            PLANE_PARAMS.height,
            PLANE_PARAMS.widthSegments,
            PLANE_PARAMS.heightSegments
        )
        const material = new THREE.ShaderMaterial({
            wireframe: PLANE_PARAMS.wireframe,
            uniforms: uniformData,
            // vertexShader: vertex,
            vertexShader: vertexFBM,
            fragmentShader: fragment,
        })

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

        const render = () => {
            uniformData.uTime.value = mainScene.clock.getElapsedTime()

            arrowHelper.position.copy(mesh.position)
            window.requestAnimationFrame(render)
        }

        render()

        return () => {
            vertexShaderGUI.destroy()
            fragmentShaderGUI.destroy()
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
