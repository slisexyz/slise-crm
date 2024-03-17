import { SemanticTokens } from "@pandacss/dev"

export const shadows = {}

export const semanticShadows: SemanticTokens["shadows"] = {
	light: {
		value: "0px 2px 4px 0px {colors.gray.100/4}, 0px 0px 4px 0px {colors.gray.100/8}",
	},
	strong: {
		value: {
			_dark: "2px 4px 16px 0px {colors.gray.100/16}, 0px 2px 4px 0px {colors.gray.100/8}",
			_light: "2px 4px 16px 0px {colors.gray.100/12}, 0px 2px 4px 0px {colors.gray.100/4}",
		},
	},
	underline: { value: "0px 1px 0px 0px {colors.gray.100/32}" },
	superHeavy: {
		value: {
			_dark: "2px 4px 16px 0px {colors.gray.100/12}, 0px 2px 4px 0px {colors.gray.100/4}",
			_light: "0px 0px 8px 0px {colors.gray.100/16}, 0px 8px 64px -16px {colors.gray.100/48}, 0px 24px 56px -16px {colors.gray.100/8}",
		},
	},
}
