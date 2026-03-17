/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        oxford: '#1a2a3a',
        'oxford-dark': '#14212d',
        'oxford-mid':  '#2a3d50',
        // Actualizado: más cálido y con más carácter que el #f5f0e8 anterior.
        // La diferencia es sutil pero consistente — papel de carta vs hoja de impresora.
        bone:        '#ede8da',
        'bone-dark': '#ddd0b8',
        'bone-light': '#f5f0e8', // guardamos el original por si se necesita
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans:  ["Montserrat", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};