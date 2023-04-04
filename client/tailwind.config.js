/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'homebg': 'url("./images/HomeBackground.jpg")',
        'step1': 'url("./images/step-1.png")',
        'step2': 'url("./images/step-2.png")',
        'step3': 'url("./images/step-3.png")',
        'step4': 'url("./images/step-4.png")',
      }
    },
  },
  plugins: [],
}