/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' : '#9e3185',
        'secondary' : '#521443',
      }
    },
    fontFamily :{
      'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

