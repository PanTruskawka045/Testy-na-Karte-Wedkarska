/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": "'Open Sans', sans-serif",
        "red-hat": "'Red Hat Display', sans-serif"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

