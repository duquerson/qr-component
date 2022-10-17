/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fraunces: ["Fraunces", "arial"]
      },
      colors: {
        blanco: 'hsl(0, 0%, 100%)',
        gris_claro: 'hsl(212, 45%, 89%)',
        gris_oscuro: 'hsl(220, 15%, 55%)',
        azul: 'hsl(218, 44%, 22%)',
      }
    },
  },
  plugins: [],
}
