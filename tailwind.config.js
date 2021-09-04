const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				primary: {
					50: '#f9f7ff',
					100: '#f3effe',
					200: '#e2d6fd',
					300: '#d1befb',
					400: '#ae8df9',
					500: '#8b5cf6',
					600: '#7d53dd',
					700: '#6845b9',
					800: '#533794',
					900: '#442d79'
				}
			},
			minHeight: {
				0: '0',
				'1/4-screen': '25vh',
				'1/2-screen': '50vh',
				'3/4-screen': '75vh'
			},
			spacing: {
				'1/7': '70%'
			},
			fontFamily: {
				sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
