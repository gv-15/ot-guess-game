/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"], theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#FC5757',
          50: '#ffeeee',
          100 : '#fecdcd',
          200 : '#feabab',
          300 : '#fd8989',
          400 : '#fc7070',
          500 : '#fc5757', // DEFAULT
          600 : '#fc4f4f',
          700 : '#fb4646',
          800 : '#fb3c3c',
          900 : '#fa2c2c',
        },
        'secondary': {
          DEFAULT: '#41dacf',
          100: '#ecfbfa',
          200: '#d9f8f5',
          300: '#c6f4f1',
          400: '#b3f0ec',
          500: '#8de9e2',
          600: '#67e1d9',
          700: '#41dacf', // DEFAULT
        },
        'grey': {
          DEFAULT: '#181632',
          100: '#F3F6F9',
          200: '#E8E8EA',
          300: '#D1D0D6',
          400: '#BAB9C1',
          500: '#A3A2AD',
          600: '#747384',
          700: '#181632', // DEFAULT
        }
      }
    },
  }, plugins: []
}
