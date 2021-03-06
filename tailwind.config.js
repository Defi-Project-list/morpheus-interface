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
        black: {
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
          50: '#fffcf7',
          100: '#fef9ee',
          200: '#feefd5',
          300: '#fde5bb',
          400: '#fbd289',
          500: '#f9be56',
          600: '#e0ab4d',
          700: '#bb8f41',
          800: '#957234',
          900: '#7a5d2a',
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
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
        depositProducts:
          'rgb(139 92 246 / 1%) 0px 0px 1px, rgb(139 92 246 / 4%) 0px 4px 8px, rgb(139 92 246 / 4%) 0px 16px 24px, rgb(139 92 246 / 1%) 0px 24px 32px',
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Lato', 'monospace', ...defaultTheme.fontFamily.mono],
        gugi: ['Gugi'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
