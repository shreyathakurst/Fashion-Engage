/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        play: ["Playfair Display", "serif"],
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: [],
});
