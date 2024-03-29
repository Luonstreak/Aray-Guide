const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#CBA051',
      primarylight: '#d5b373',
      primarylighter: '#E4CFA8',
      ...colors
    }
  },
  variants: {
    // extend: {
    //   backgroundImage: ( theme ) => ({
    //     'banner': `url('/public/images/banner.jpg')`
    //   }),
    // }
  },
  plugins: [],
}