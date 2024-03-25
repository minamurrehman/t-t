/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/Slider/Carousel.jsx",
    "./components/ClientCard/ClientCard.jsx",
    "./components/ServiceCard/ServiceCard.jsx",
    "./components/WorkCard/WorkCard.jsx",
    "./components/Hear/Hear.jsx",
    "./components/Button/Button.jsx",
    "./components/ServiceCard/ServiceCard.jsx",
    "./components/Footer/Footer.jsx",
    "./components/BlogCard/BlogCard.jsx",
    "./components/JobCard/JobCard.jsx",
    "./pages/services/index.jsx",
    "./pages/blog/index.jsx",
    "./pages/blog/index.jsx",
    "./pages/clients/dlc.jsx",
    "./pages/clients/kom-op-tegen.jsx",
    "./pages/clients/het-leerstadion.jsx",
    "./pages/blog/*",
    "./pages/vacature/*",
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
  plugins: [require("@tailwindcss/typography")],
};
