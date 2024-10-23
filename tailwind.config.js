/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        searchBG:"rgba(21, 11, 43, 0.05)",
        btnBG : "rgba(11, 229, 138, 1)",
        btnText : "rgba(21, 11, 43, 1)",
        pText : "#878787",
      },
      gridTemplateColumns: {
        'aa': '0.3fr 1.5fr .6fr .6fr 1fr',
        
    },
  },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}