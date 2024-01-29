/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        backgroundColor: 'var(--background-color)',
        linksColor: 'var(--links-color)',
        blackColor: 'var(--black-color)',
        blackColorOpacity: 'var(--black-color-opacity)',
        grayColor: 'var(--gray-color)'
      }
    },
  },
  plugins: [],
}

