/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Home.js",
    "./src/About.js",
    "./src/Skills.js",
    "./src/TopMenu.js",
    "./src/Projects.js",
    "./src/GetInTouch.js",
    "./src/Footer.js",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        portfoliobg: "#0A192F",
        onportfoliobg: "#112240",
        portfoliogreen: "#64ffda",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
