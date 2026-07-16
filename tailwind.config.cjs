/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        libre: ['"Libre Caslon Text"', 'serif'],
        science: ['"Science Gothic"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        gradient: {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        gradient: "gradient 10s linear infinite",
        scroll: "scroll 40s linear infinite",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}