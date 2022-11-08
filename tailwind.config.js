/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    notebook: "480px",
    tablet: "640px",
    laptop: "1024px",
    desktop: "1280px",
    television: "1800px",
    extend: {
      opacity: {
        fade: ".60",
      },
    },
  },
  plugins: [],
};
