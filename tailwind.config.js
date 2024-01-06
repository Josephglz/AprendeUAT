/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'Primary-Blue': '#00426A',
        'Primary-Orange': '#B86125',
        'Primary-Gray': '#CFCDC9',
        'Primary-Black': '#1D252D',
        'Secondary-Blue': '#4070B6',
        'Secondary-LightBlue': '#61B0CC',
        'Secondary-Cyan': '#81C6CC',
        'Secondary-Orange': '#ECB06F',
        'Secondary-LightOrange': '#F7C46E',
        'Secondary-Turquoise': '#376986'
      }
    },
  },
  plugins: [],
}
