/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto Condensed", "sans-serif"],
    },
    container: {
      screens: {
        lg: "1230px",
      },
    },
    extend: {
      screens: {
        xs: "480px",
        "3xl": "1920px",
        "5xl": "2436px",
      },
      flex: {
        25: "0 0 25%",
      },
      colors: {
        main: "rgba(232,130,21,0.7)",
        second: "#fa8c16",
        text: "rgba(255,231,186,0.6)",
        button: "#ff792c",
      },
      boxShadow: {
        custom: "0px 10px 20px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
