const typography = require("@tailwindcss/typography");
const aspectRatio = require("@tailwindcss/aspect-ratio");
const lineClamp = require("@tailwindcss/line-clamp");
const forms = require("@tailwindcss/forms");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./content/**/*.{yml,md}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography, aspectRatio, lineClamp, forms],
};
