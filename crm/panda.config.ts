import { defineConfig } from "@pandacss/dev"

export default defineConfig({
	// Whether to use css reset
	preflight: true,
	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
	// strictTokens: true,
	strictPropertyValues: true,
	// Files to exclude
	exclude: [],
	jsxFramework: "react",
	// Useful for theme customization
	theme: {
		tokens: {
			colors: {
				gray50: { value: "#F9FAFB" },
				gray500: { value: "#F3F4F6" },
			},
		},
		semanticTokens: {
			colors: {
				primary: { value: "blue" },
				success: {
					value: { _light: "{colors.gray50}", _dark: "{colors.gray500}" },
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
})
