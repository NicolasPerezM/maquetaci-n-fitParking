/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'general': "url('/images/background.png')",
        'login-img': "url('/images/login-imageBackground.jpeg')"
      },
      colors: {
        'main-yellow': '#F2C40D',
        'main-black': '#0D0D0D'
      }
    },
  },
  plugins: [],
}

