import { WATER_UNIFORMS, POST_PROCESSING_UNIFOMRS } from "../configs/params"

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
    uniforms: POST_PROCESSING_UNIFOMRS.sunUniforms,
    vertexShader: postProcessVertex,
    fragmentShader: sun,
}

export const CausticsShader = {
    uniforms: POST_PROCESSING_UNIFOMRS.causticsUniforms,
    vertexShader: postProcessVertex,
    fragmentShader: caustics,
}

export const FogShader = {
    uniforms: POST_PROCESSING_UNIFOMRS.fogUniforms,
    vertexShader: postProcessVertex,
    fragmentShader: fog,
}

export const ChromaticAberrationShader = {
    uniforms: POST_PROCESSING_UNIFOMRS.chromaticAberrationUniforms,
    vertexShader: postProcessVertex,
    fragmentShader: chromaticAberration,
}
