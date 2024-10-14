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