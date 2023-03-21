/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { 
      colors: {
        blue: {
          "500": "#5674FF"
        }
      }
    },
  },
  plugins: [],
}
