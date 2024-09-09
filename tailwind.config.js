/** @type {import('tailwindcss').Config} */

import colors from "./src/config/colors";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include all relevant file extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        windsong: ["WindSong", "cursive"],
      },
      colors: {
        textBlue: colors.textBlue,
        initialBlue: colors.initialBlue,
        nameGold: colors.nameGold,
        backgroundBlue: colors.backgroundBlue,
      },
    },
  },
  plugins: [],
};
