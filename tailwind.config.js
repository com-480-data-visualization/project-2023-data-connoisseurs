const { mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f3f4f6",
        primary: "#02025E",
        secondary: "#0043FF",
        accent: "#FF0087",
        ...mauve,
        ...violet,
      },
    },
  },
  plugins: [],
};
