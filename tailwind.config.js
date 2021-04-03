const typography = require('@tailwindcss/typography');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const lineClamp = require('@tailwindcss/line-clamp');
const forms = require('@tailwindcss/forms');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [typography, aspectRatio, lineClamp, forms],
};
