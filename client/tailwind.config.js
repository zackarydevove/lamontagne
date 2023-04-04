/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'homebg': 'url("./images/HomeBackground.jpg")',
      }
    },
  },
  plugins: [],
}