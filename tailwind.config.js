/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'], 
        'inter': ['Inter', 'sans-serif'], 
        'poppins': ['Poppins', 'sans-serif'], 
      },
      colors: {
        lightwhite: "#bbbbba",
      },
      lineHeight: {
        '110':'110%',
        '121': '121%',
        '130': '130%',
        '140': '140%',
        '145': '145%',
        '150': '150%',
      },
      boxShadow: {
        'what-card': '2px 4px 25px 0px #0000001A',
      },
    },
  },
  plugins: [],
}
