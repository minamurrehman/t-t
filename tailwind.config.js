/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/Slider/Carousel.jsx",
    "./components/Hear/Hear.jsx",
    "./components/Button/Button.jsx",
    "./components/ServiceCard/ServiceCard.jsx",
    "./pages/services/index.jsx",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#03EECA",
        tertiary: "#09302F",
        typo: "#171717",
      },
    },
  },
  plugins: [],
}

