/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
      },
      fontFamily: {
        bodyfont: ["Montserrat", "sans-serif"],
        bodyfont2: ["Poppins", "sans-serif"],
        titlefont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
        cardShadow: "2px 4px 2px 2px rgba(249,210,118,.5)",
      },
      colors: {
        bodyColor: "#0a192F",
        // bodyColor: "#212A3E ",
        textGreen: "#F9D276",
        // textGreen: "#F2AA4CFF",
        textLight: "#A5C9CA",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.05s)",
      },
    },
  },
  plugins: [],
};
