import type { Tokens, SemanticTokens } from "@pandacss/types"

export const colors: Tokens["colors"] = {
	current: { value: "currentColor" },
	black: { value: "#000" },
	white: { value: "#fff" },
	yellow: {
		DEFAULT: { value: "#ffd338" },
		80: { value: "#2e2a1a" },
		70: { value: "#453d1e" },
		60: { value: "#746224" },
		50: { value: "#b99b2e" },
		40: { value: "#ffe074" },
		30: { value: "#ffedaf" },
		20: { value: "#fff6d7" },
		10: { value: "#fffbeb" },
	},
	green: {
		DEFAULT: { value: "#55ef3c" },
		80: { value: "#1d2d1b" },
		70: { value: "#23421e" },
		60: { value: "#2a5822" },
		50: { value: "#42ae31" },
		40: { value: "#88f477" },
		30: { value: "#ccfac5" },
		20: { value: "#ddfcd8" },
		10: { value: "#eefdec" },
	},
	turquoise: {
		DEFAULT: { value: "#15de8f" },
		80: { value: "#172b23" },
		70: { value: "#173f2f" },
		60: { value: "#166747" },
		50: { value: "#16a26b" },
		40: { value: "#5be8b1" },
		30: { value: "#a1f2d2" },
		20: { value: "#d0f8e9" },
		10: { value: "#e8fcf4" },
	},
	sky: {
		DEFAULT: { value: "#00e0ff" },
		80: { value: "#152b2e" },
		70: { value: "#123f45" },
		60: { value: "#0e6874" },
		50: { value: "#07a4b9" },
		40: { value: "#4de9ff" },
		30: { value: "#99f3ff" },
		20: { value: "#ccf9ff" },
		10: { value: "#e5fcff" },
	},
	blue: {
		DEFAULT: { value: "#1961ed" },
		80: { value: "#171e2c" },
		70: { value: "#172642" },
		60: { value: "#18356d" },
		50: { value: "#184bad" },
		40: { value: "#5e90f2" },
		30: { value: "#a3c0f8" },
		20: { value: "#d1dffb" },
		10: { value: "#e8effd" },
	},
	purple: {
		DEFAULT: { value: "#915ffd" },
		80: { value: "#231e2e" },
		70: { value: "#2f2545" },
		60: { value: "#483473" },
		50: { value: "#6c49b8" },
		40: { value: "#b28ffe" },
		30: { value: "#d3bffe" },
		20: { value: "#e9dfff" },
		10: { value: "#f4efff" },
	},
	pink: {
		DEFAULT: { value: "#f54bd0" },
		80: { value: "#2d1c29" },
		70: { value: "#43213c" },
		60: { value: "#702c61" },
		50: { value: "#b23b98" },
		40: { value: "#f881de" },
		30: { value: "#fbb7ec" },
		20: { value: "#fddbf6" },
		10: { value: "#feedfa" },
	},
	red: {
		DEFAULT: { value: "#f83e3e" },
		80: { value: "#2d1b1b" },
		70: { value: "#441f1f" },
		60: { value: "#712727" },
		50: { value: "#b43232" },
		40: { value: "#fa7878" },
		30: { value: "#fcb2b2" },
		20: { value: "#fed8d8" },
		10: { value: "#feecec" },
	},
	orange: {
		DEFAULT: { value: "#ff7222" },
		80: { value: "#2e2018" },
		70: { value: "#452919" },
		60: { value: "#743b1b" },
		50: { value: "#b9571f" },
		40: { value: "#ff9c64" },
		30: { value: "#ffc7a7" },
		20: { value: "#ffe3d3" },
		10: { value: "#fff1e9" },
	},
	blueAccent: {
		90: { value: "#141a25" },
		85: { value: "#151d2e" },
		80: { value: "#152037" },
		75: { value: "#16233f" },
		70: { value: "#17294a" },
		60: { value: "#18356d" },
		40: { value: "#a3c0f8" },
		35: { value: "#c8d9fb" },
		25: { value: "#dae6fc" },
		20: { value: "#e2ecfd" },
		15: { value: "#edf2fe" },
		10: { value: "#f5f9fd" },
	},
	gray: {
		100: { value: "#000000" },
		90: { value: "#141414" },
		85: { value: "#171717" },
		80: { value: "#1b1b1b" },
		75: { value: "#1d1d1d" },
		70: { value: "#222222" },
		65: { value: "#292929" },
		60: { value: "#333333" },
		55: { value: "#4c4c4c" },
		50: { value: "#666666" },
		45: { value: "#818181" },
		40: { value: "#999999" },
		35: { value: "#b3b3b3" },
		30: { value: "#cccccc" },
		25: { value: "#d6d6d6" },
		20: { value: "#ebebeb" },
		15: { value: "#f1f1f1" },
		10: { value: "#fcfcfc" },
		0: { value: "#ffffff" },
	},
}

export const semanticColors: SemanticTokens["colors"] = {
	text: {
		primary: {
			value: {
				_dark: "{colors.gray.20}",
				_light: "{colors.gray.60}",
			},
		},
		secondary: {
			value: {
				_dark: "{colors.gray.35}",
				_light: "{colors.gray.50}",
			},
		},
		tertiary: {
			value: {
				_dark: "{colors.gray.45}",
				_light: "{colors.gray.40}",
			},
		},
		light: {
			value: {
				_dark: "{colors.gray.50}",
				_light: "{colors.gray.35}",
			},
		},
		extraLight: {
			value: {
				_dark: "{colors.gray.55}",
				_light: "{colors.gray.30}",
			},
		},
		inverted: {
			value: {
				_dark: "{colors.gray.100}",
				_light: "{colors.gray.0}",
			},
		},
		danger: { value: "{colors.red}" },
	},
	modal: {
		primary: {
			value: {
				_dark: "{colors.gray.20}",
				_light: "{colors.gray.60}",
			},
		},
	},
	tag: {
		text: {
			green: { value: { _dark: "{colors.green.10}", _light: "{colors.green.60}" } },
			turquoise: {
				value: {
					_dark: "{colors.turquoise.10}",
					_light: "{colors.turquoise.60}",
				},
			},
			sky: { value: { _dark: "{colors.sky.10}", _light: "{colors.sky.60}" } },
			blue: { value: { _dark: "{colors.blue.10}", _light: "{colors.blue.60}" } },
			purple: {
				value: { _dark: "{colors.purple.10}", _light: "{colors.purple.60}" },
			},
			pink: { value: { _dark: "{colors.pink.10}", _light: "{colors.pink.60}" } },
			red: { value: { _dark: "{colors.red.10}", _light: "{colors.red.60}" } },
			orange: {
				value: { _dark: "{colors.orange.10}", _light: "{colors.orange.60}" },
			},
			yellow: {
				value: { _dark: "{colors.yellow.10}", _light: "{colors.yellow.60}" },
			},
			gray: { value: { _dark: "{colors.gray.10}", _light: "{colors.gray.60}" } },
		},
		background: {
			green: { value: { _dark: "{colors.green.60}", _light: "{colors.green.20}" } },
			turquoise: {
				value: {
					_dark: "{colors.turquoise.60}",
					_light: "{colors.turquoise.20}",
				},
			},
			sky: { value: { _dark: "{colors.sky.60}", _light: "{colors.sky.20}" } },
			blue: { value: { _dark: "{colors.blue.60}", _light: "{colors.blue.20}" } },
			purple: {
				value: { _dark: "{colors.purple.60}", _light: "{colors.purple.20}" },
			},
			pink: { value: { _dark: "{colors.pink.60}", _light: "{colors.pink.20}" } },
			red: { value: { _dark: "{colors.red.60}", _light: "{colors.red.20}" } },
			orange: {
				value: { _dark: "{colors.orange.60}", _light: "{colors.orange.20}" },
			},
			yellow: {
				value: { _dark: "{colors.yellow.60}", _light: "{colors.yellow.20}" },
			},
			gray: { value: { _dark: "{colors.gray.60}", _light: "{colors.gray.20}" } },
		},
	},
	border: {
		strong: { value: { _dark: "{colors.gray.55}", _light: "{colors.gray.25}" } },
		medium: { value: { _dark: "{colors.gray.65}", _light: "{colors.gray.20}" } },
		light: { value: { _dark: "{colors.gray.70}", _light: "{colors.gray.15}" } },
		secondaryInverted: {
			value: { _dark: "{colors.gray.35}", _light: "{colors.gray.50}" },
		},
		inverted: { value: { _dark: "{colors.gray.20}", _light: "{colors.gray.60}" } },
		danger: { value: { _dark: "{colors.red.70}", _light: "{colors.gray.20}" } },
	},
	accent: {
		primary: {
			value: { _light: "{colors.blueAccent.25}", _dark: "{colors.blueAccent.75}" },
		},
		secondary: {
			value: { _light: "{colors.blueAccent.20}", _dark: "{colors.blueAccent.80}" },
		},
		tertiary: {
			value: { _light: "{colors.blueAccent.15}", _dark: "{colors.blueAccent.85}" },
		},
		quaternary: {
			value: { _light: "{colors.blueAccent.10}", _dark: "{colors.blueAccent.90}" },
		},
		accent3570: {
			value: { _light: "{colors.blueAccent.35}", _dark: "{colors.blueAccent.70}" },
		},
		accent4060: {
			value: { _light: "{colors.blueAccent.40}", _dark: "{colors.blueAccent.60}" },
		},
	},
	background: {
		primary: {
			value: {
				_dark: "{colors.gray.85}",
				_light: "{colors.gray.0}",
			},
		},
		secondary: {
			value: {
				_dark: "{colors.gray.80}",
				_light: "{colors.gray.10}",
			},
		},
		tertiary: {
			value: {
				_dark: "{colors.gray.75}",
				_light: "{colors.gray.15}",
			},
		},
		quaternary: {
			value: {
				_dark: "{colors.gray.70}",
				_light: "{colors.gray.20}",
			},
		},
		danger: {
			value: {
				_dark: "{colors.gray.80}",
				_light: "{colors.red.10}",
			},
		},
		transparent: {
			primary: {
				value: {
					_dark: "{colors.gray.85/80}",
					_light: "{colors.gray.0/80}",
				},
			},
			secondary: {
				value: {
					_dark: "{colors.gray.80/80}",
					_light: "{colors.gray.10/80}",
				},
			},
			strong: {
				value: {
					_dark: "{colors.gray.0/14}",
					_light: "{colors.gray.100/16}",
				},
			},
			medium: {
				value: {
					_dark: "{colors.gray.0/10}",
					_light: "{colors.gray.100/8}",
				},
			},
			light: {
				value: {
					_dark: "{colors.gray.0/6}",
					_light: "{colors.gray.100/4}",
				},
			},
			lighter: {
				value: {
					_dark: "{colors.gray.0/3}",
					_light: "{colors.gray.100/2}",
				},
			},
			danger: {
				value: "{colors.red/8}",
			},
		},
		overlay: {
			value: "{colors.gray.80/80}",
		},
		radialGradient: {
			value: `radial-gradient(50% 62.62% at 50% 0%, #505050 0%, {colors.gray.60} 100%)`,
		},
		radialGradientHover: {
			value: `radial-gradient(76.32% 95.59% at 50% 0%, #505050 0%, {colors.gray.60} 100%)`,
		},
	},
}
