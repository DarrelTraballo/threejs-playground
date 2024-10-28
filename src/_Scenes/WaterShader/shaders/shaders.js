import { WATER_UNIFORMS, POST_PROCESSING_UNIFORMS } from "../configs/params"

// Main Water Shader
import waterFBM from "./water/waterFBM.vert"
import waterFrag from "./water/waterFrag.frag"

// Post Processing Shaders
import postProcessVertex from "./postProcessing/postProcess.vert"

import sun from "./postProcessing/sun.frag"
import caustics from "./postProcessing/caustics.frag"
import fog from "./postProcessing/fog.frag"
import chromaticAberration from "./postProcessing/chromaticAberration.frag"

export const WaterShader = {
    uniforms: WATER_UNIFORMS,
    vertexShader: waterFBM,
    fragmentShader: waterFrag,
}

export const SunShader = {
    uniforms: {
        ...POST_PROCESSING_UNIFORMS.sunUniforms,
        uLightDirection: {
            value: POST_PROCESSING_UNIFORMS.sunUniforms.uLightDirection.value.clone(),
        },
    },
    vertexShader: postProcessVertex,
    fragmentShader: sun,
}

export const CausticsShader = {
    uniforms: POST_PROCESSING_UNIFORMS.causticsUniforms,
    vertexShader: postProcessVertex,
    fragmentShader: caustics,
}

export const FogShader = {
    uniforms: POST_PROCESSING_UNIFORMS.fogUniforms,
    vertexShader: postProcessVertex,
    fragmentShader: fog,
}

export const ChromaticAberrationShader = {
    uniforms: POST_PROCESSING_UNIFORMS.chromaticAberrationUniforms,
    vertexShader: postProcessVertex,
    fragmentShader: chromaticAberration,
}
