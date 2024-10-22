/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        searchBG:"rgba(21, 11, 43, 0.05)"
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

