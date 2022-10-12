/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      blue1: '#31C3BD',
      blue2: '#65E9E4',
      yellow1: '#F2B137',
      yellow2: '#FFC860',
      darkBlue1: '#1A2A33',
      darkBlue2: '#1F3641',
      grey1: '#A8BFC9',
      grey2: '#DBE8ED',
    },

    fontFamily:{
      outfit: ['Outfit', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
