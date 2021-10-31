module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        new: '0 15px 18px -17px rgb(134, 98, 138, 0.8) ',
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
}
