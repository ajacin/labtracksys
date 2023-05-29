const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
// https://coolors.co/eac435-345995-03cea4-fb4d3d-ca1551
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#EAC435",
      secondary: "#345995",
      tertiary: "#03CEA4",
      light: "#F4FFFD",
      dark: "#000505",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/bg-science.svg')",
      },
    },
  },
};
