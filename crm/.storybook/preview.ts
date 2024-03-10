// import { ThemeProvider } from '@emotion/react';
// import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Preview, ReactRenderer } from "@storybook/react"

// import { THEME_DARK } from '@/ui/theme/constants/ThemeDark';
// import { THEME_LIGHT } from '@/ui/theme/constants/ThemeLight';

// import { RootDecorator } from '../src/testing/decorators/RootDecorator';
// import { mockedUserJWT } from '../src/testing/mock-data/jwt';

// import 'react-loading-skeleton/dist/skeleton.css';


const preview: Preview = {
	// decorators: [
	//   withThemeFromJSXProvider<ReactRenderer>({
	//     themes: {
	//       light: THEME_LIGHT,
	//       dark: THEME_DARK,
	//     },
	//     defaultTheme: 'light',
	//     Provider: ThemeProvider,
	//   }),
	//   RootDecorator,
	//   mswDecorator,
	// ],
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		options: {
			storySort: {
				order: ["UI", "Modules", "Pages"],
			},
		},
	},
}

export default preview
