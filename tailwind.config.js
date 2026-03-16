/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        oxford: "#1a2a3a",
        bone: "#f5f5e9",
        gold: "#d4af37",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Montserrat", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
