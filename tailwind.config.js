const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        accent: {
          50: '#f6f8fd',
          100: '#eef0fb',
          200: '#d4daf4',
          300: '#bbc3ee',
          400: '#8796e1',
          500: '#5469d4',
          600: '#4c5fbf',
          700: '#3f4f9f',
          800: '#323f7f',
          900: '#293368',
        },
        green: {
          50: '#f4f9f7',
          100: '#e8f3ee',
          200: '#c6e1d6',
          300: '#a3cebd',
          400: '#5eaa8b',
          500: '#198559',
          600: '#177850',
          700: '#136443',
          800: '#0f5035',
          900: '#0c412c',
        },
        primary: {
          50: '#f3f4f5',
          100: '#e7e9ec',
          200: '#c2c9cf',
          300: '#9da8b3',
          400: '#546679',
          500: '#0a2540',
          600: '#09213a',
          700: '#081c30',
          800: '#061626',
          900: '#05121f',
        },
        // primary: {
        // 	50: '#f9f7ff',
        // 	100: '#f3effe',
        // 	200: '#e2d6fd',
        // 	300: '#d1befb',
        // 	400: '#ae8df9',
        // 	500: '#8b5cf6',
        // 	600: '#7d53dd',
        // 	700: '#6845b9',
        // 	800: '#533794',
        // 	900: '#442d79'
        // }
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
        mono: ['Lato', 'monospace', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
