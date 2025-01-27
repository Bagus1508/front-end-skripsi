/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Tambahkan font Poppins
      },
      colors: {
        'primary': '#5D5FEF',
        'primary-text': '#151D48',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

