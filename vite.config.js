import { defineConfig } from "vite"
import glsl from "vite-plugin-glsl"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    base: "/threejs-playground/",
    plugins: [
        react(),
        glsl({
            include: ["**/*.glsl", "**/*.vert", "**/*.frag"],
        }),
    ],
})
