import { defineConfig } from "@pandacss/dev"
import { slisePreset } from "./src/theme"

export default defineConfig({
	presets: [slisePreset],
	// Whether to use css reset
	preflight: true,
	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
	strictTokens: true,
	// strictPropertyValues: true,
	// Files to exclude
	exclude: [],
	jsxFramework: "react",
	// Useful for theme customization

	// The output directory for your css system
	outdir: "styled-system",
	conditions:{
		extend:{
			dark: '@media (prefers-color-scheme: dark)',
			light: '@media (prefers-color-scheme: light)',
		}
	}
})
