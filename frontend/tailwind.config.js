/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

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
      }
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
}

