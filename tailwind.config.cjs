const { fontFamily, screens } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		// colors: {},
		screens: {
			xs: '475px',
			...screens
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			},
			animation: {
				blink: 'blink 1.4s infinite both'
			},
			keyframes: {
				blink: {
					'0%': {
						opacity: '0.2'
					},
					'20%': {
						opacity: '1'
					},
					'100%': {
						opacity: ' 0.2'
					}
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'animation-delay': (value) => {
						return {
							'animation-delay': value
						};
					}
				},
				{
					values: theme('transitionDelay')
				}
			);
		})
	]
};
