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
					100: '#fff5e5bd',
					500: '#f9be56',
					600: '#fbb843',
					700: '#f1b243',
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
				gugi: ['Gugi'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
