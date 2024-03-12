import type { TextStyles, Tokens } from "@pandacss/types"

export const fontSizes = {
	xss: { value: "0.625rem" },
	xs: { value: "0.85rem" },
	sm: { value: "0.92rem" },
	md: { value: "1rem" },
	lg: { value: "1.23rem" },
	xl: { value: "1.54rem" },
	"2xl": { value: "1.85rem" },
	"3xl": { value: "4.31rem" },
}

export const fontWeights: Tokens["fontWeights"] = {
	regular: { value: "400" },
	medium: { value: "500" },
	semiBold: { value: "600" },
}

export const textStyles: TextStyles = {
	large: {
		description: "Titles/Marketing/Large",
		value: {
			fontFamily: "Inter",
			fontWeight: "600",
			fontSize: fontSizes["3xl"].value,
			lineHeight: "67.2px",
		},
	},
	h1: {
		description: "Titles/H1",
		value: {
			fontFamily: "Inter",
			fontWeight: "600",
			fontSize: fontSizes["2xl"].value,
			lineHeight: "28.8px",
		},
	},
	h2: {
		description: "Titles/H2",
		value: {
			fontFamily: "Inter",
			fontWeight: "600",
			fontSize: fontSizes["xl"].value,
			lineHeight: "24px",
		},
	},
	h3: {
		description: "Titles/H3",
		value: {
			fontFamily: "Inter",
			fontWeight: "600",
			fontSize: fontSizes["lg"].value,
			lineHeight: "19.2px",
		},
	},
	"big-medium": {
		description: "Big/Medium",
		value: {
			fontFamily: "Inter",
			fontWeight: "500",
			fontSize: fontSizes["lg"].value,
			lineHeight: "19.2px",
		},
	},
	"base-sb": {
		description: "Base/Semi-bold",
		value: {
			fontFamily: "Inter",
			fontWeight: "600",
			fontSize: fontSizes["md"].value,
			lineHeight: "19.5px",
		},
	},
	"base-medium": {
		description: "Base/Medium",
		value: {
			fontFamily: "Inter",
			fontWeight: "500",
			fontSize: fontSizes["md"].value,
			lineHeight: "19.5px",
		},
	},
	"base-regular": {
		description: "Base/Regular",
		value: {
			fontFamily: "Inter",
			fontWeight: "400",
			fontSize: fontSizes["md"].value,
			lineHeight: "19.5px",
		},
	},
	"small-medium": {
		description: "Base/Small/Medium",
		value: {
			fontFamily: "Inter",
			fontWeight: "500",
			fontSize: fontSizes["sm"].value,
			lineHeight: "18px",
		},
	},
	"small-regular": {
		description: "Base/Small/Regular",
		value: {
			fontFamily: "Inter",
			fontWeight: "400",
			fontSize: fontSizes["sm"].value,
			lineHeight: "18px",
		},
	},
	label: {
		description: "Label/default",
		value: {
			fontFamily: "Inter",
			fontWeight: "600",
			fontSize: fontSizes["xs"].value,
			lineHeight: "13.31px",
		},
	},
	"label-small": {
		description: "Label/small",
		value: {
			fontFamily: "Inter",
			fontWeight: "600",
			fontSize: fontSizes["xss"].value,
			lineHeight: "10.89px",
		},
	},
}
