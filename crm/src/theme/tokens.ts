import { defineTokens, defineSemanticTokens } from "@pandacss/dev"
import { aspectRatios } from "./aspect-ratios"
import { borders } from "./borders"
import { colors, semanticColors } from "./colors"
import { animations } from "./keyframes"
import { semanticShadows, shadows } from "./shadows"
import { sizes } from "./sizes"
import { spacing } from "./spacing"
import { fontSizes, fontWeights } from "./typography"

export const tokens = defineTokens({
	aspectRatios,
	borders,
	easings: {
		default: { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
		linear: { value: "linear" },
		in: { value: "cubic-bezier(0.4, 0, 1, 1)" },
		out: { value: "cubic-bezier(0, 0, 0.2, 1)" },
		"in-out": { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
	},
	durations: {
		fastest: { value: "50ms" },
		faster: { value: "100ms" },
		fast: { value: "150ms" },
		normal: { value: "200ms" },
		slow: { value: "300ms" },
		slower: { value: "400ms" },
		slowest: { value: "500ms" },
	},
	radii: {
		xs: { value: "2px" },
		sm: { value: "4px" },
		md: { value: "8px" },
		xl: { value: "20px" },
		pill: { value: "999px" },
		rounded: { value: "50%" },
	},
	fontWeights,
	fontSizes,
	shadows,
	colors,
	blurs: {
		light: { value: "6px" },
		strong: { value: "20px" },
	},
	spacing,
	sizes,
	animations,
})

export const semanticTokens = defineSemanticTokens({
	colors: semanticColors,
	shadows: semanticShadows,
})
