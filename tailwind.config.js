/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Roboto', 'Arial', 'sans-serif'], // Define your custom font stack
      },
    },
  },
  plugins: [],
}
//Montserrat, "Open Sans", Helvetica, Roboto, sans-serif;