/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      title: `4rem;`,
      sous_title: `1rem`,
      paragraph: `1.3rem;`,
      nav: `1.5rem;`,
      nav_title: `1.3rem`,
    },
    colors: {
      'primary': '#3490dc',
      'secondary': '#ff8400',
      'danger': '#e3342f',
      'black': '#000000',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'display': ['Montserrat'],
      'body': ['Montserrat', 'sans-serif'],
      'agrandir': ['"Agrandir Grand Regular"', 'sans-serif'],
      'medula': ['"Medula One"', 'sans-serif'],
      'orbit': ['"Orbitron"', 'sans-serif'],
    },    
  },
  plugins: [],
};
