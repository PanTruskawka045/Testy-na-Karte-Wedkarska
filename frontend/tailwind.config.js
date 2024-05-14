/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": "'Open Sans', sans-serif",
        "red-hat": "'Red Hat Display', sans-serif"
      },
      colors: {
        ...colors
      }
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
  safelist: [
    {
      pattern: /bg-+/,
    },
  ],
}

