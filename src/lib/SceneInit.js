import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Stats from "three/examples/jsm/libs/stats.module"
import { UNIFORMS, CAMERA_PRESETS } from "../_Scenes/WaterShader/configs/params"

export default class SceneInit {
    constructor(canvasID) {
        this.scene = undefined
        this.camera = undefined
        this.renderer = undefined

        this.clock = undefined
        this.stats = undefined
        this.controls = undefined

        // Camera params
        this.fov = 45
        this.canvasID = canvasID
        this.nearPlane = 1
        this.farPlane = 1000

        // Lighting
        this.ambientLight = undefined
        this.directionalLight = undefined
        this.spotLight = undefined

        // Skybox
        this.skybox = undefined
    }

    initialize() {
        this.scene = new THREE.Scene()

        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth / window.innerHeight,
            this.nearPlane,
            this.farPlane
        )
        // this.camera.position.z = 16 // default
        const lowAnglePreset = CAMERA_PRESETS.lowAngleRim
        this.camera.position.set(lowAnglePreset.camera.x, lowAnglePreset.camera.y, lowAnglePreset.camera.z)

        this.camera.lookAt(0, 0, 0)

        const canvas = document.getElementById(this.canvasID)
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })

        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)

        this.clock = new THREE.Clock()
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.target.set(0, 0, 0)

        this.stats = Stats()
        document.body.appendChild(this.stats.dom)

        //         this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        //         this.ambientLight.castShadow = true
        //         this.scene.add(this.ambientLight)
        //
        //         this.directionalLight = new THREE.DirectionalLight(0xffffff, 1)
        //         this.directionalLight.castShadow = true
        //         this.directionalLight.position.set(1, 5, 0)
        //         this.scene.add(this.directionalLight)

        // this.spotLight = new THREE.SpotLight(0xffffff, 0.5)
        // this.spotLight.castShadow = true
        // this.spotLight.position.set(0, 5, 0)
        // this.scene.add(this.spotLight)

        const loader = new THREE.CubeTextureLoader()

        const DayLightSkyboxPath = "assets/images/Daylight_Box_Pieces/"
        const DayLightSkyboxTextures = [
            "Daylight_Box_Right.bmp",
            "Daylight_Box_Left.bmp",
            "Daylight_Box_Top.bmp",
            "Daylight_Box_Bottom.bmp",
            "Daylight_Box_Front.bmp",
            "Daylight_Box_Back.bmp",
        ]

        const skyUnitySkyboxPath = "assets/images/sky_unity/"
        const skyUnitySkyboxTextures = [
            "sky_test_right.png",
            "sky_test_left.png",
            "sky_test_up.png",
            "sky_test_down.png",
            "sky_test_front.png",
            "sky_test_back.png",
        ]

        loader.setPath(DayLightSkyboxPath)
        loader.load(
            DayLightSkyboxTextures,
            (textureCube) => {
                this.skybox = textureCube
                this.scene.background = this.skybox

                UNIFORMS.uSkybox.value = this.skybox
            },
            undefined,
            (error) => {
                console.error("Error loading skybox textures:", error)
            }
        )

        window.addEventListener("resize", () => this.onWindowResize(), false)
    }

    animate(callback) {
        window.requestAnimationFrame(this.animate.bind(this, callback))
        this.render()
        this.stats.update()
        this.controls.update()

        if (callback) callback(this.clock.getElapsedTime())
    }

    render() {
        this.renderer.render(this.scene, this.camera)
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
}
