/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#4c0000',
        'primaryColorLight': '#ff2400',
        'secondary': '#ffcc00',
        'darkPrimary': '#000000',
        'darkPrimaryLight': '#1D1D1D',


    },
    keyframes: {
      move: {
        "50%": {transform: 'translateY(-1rem)'}
      }
    },
    animation: {
      'movingY': 'move 2s linear infinite'
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '1.3rem',
    }
  },
  },
  plugins: [],
}