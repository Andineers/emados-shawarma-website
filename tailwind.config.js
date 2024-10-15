/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#010a5e',
        'primaryColorLight': '#010d78',
        'secondary': '#ffcc00',


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