/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      title: `6rem;`,
      paragraph: `1.4rem;`,
    },
    colors: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'black': '#000000',
      'white': '#FFFFFF',
    },
    fontFamily:{
      'display': ['Montserrat'],
      'body': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}