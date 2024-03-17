import { breakpoints } from "./breakpoints"
import { containerSizes } from "./containers"
import { keyframes } from "./keyframes"
import { semanticTokens, tokens } from "./tokens"
import { textStyles } from "./typography"
import { definePreset } from "@pandacss/dev"

export const slisePreset = definePreset({
	theme: {
		keyframes,
		breakpoints,
		tokens,
		textStyles,
		containerSizes,
		semanticTokens,
	},
})
