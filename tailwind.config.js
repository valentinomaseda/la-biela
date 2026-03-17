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
        'oxford-mid': '#2a3d50',
        bone: '#f5f0e8',
        'bone-dark': '#e8e0d0',
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Montserrat", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
