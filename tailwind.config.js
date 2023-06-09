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
      gray: "#6B7F82",
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      success: "#B1E052",
      warning: "#F3C459",
      error: "#E93F2F",
      disabled: "#ccc",
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/bg-science.svg')",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
};
