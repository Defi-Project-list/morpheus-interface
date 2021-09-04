const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				primary: {
					100: '#EDE9FE',
					500: '#8B5CF6',
					600: '#7C3AED',
					700: '#6D28D9',
				},
			},
			minHeight: {
				0: '0',
				'1/4-screen': '25vh',
				'1/2-screen': '50vh',
				'3/4-screen': '75vh',
			},
			spacing: {
				'1/7': '70%',
			},
			fontFamily: {
				sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
