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
      colors: {
        type: {
          normal: "#4BD2C1",
          fire: "#FF983F",
          water: "#3393DD",
          grass: "#35C04A",
          flying: "#8AACE4",
          fighting: "#E12C6A",
          poison: "#4BD2C1",
          electric: "#FBD200",
          ground: "#E97333",
          rock: "#C9B787",
          psychic: "#FF6676",
          ice: "#4BD2C1",
          bug: "#84C400",
          ghost: "#4B6AB3",
          steel: "#5A8FA3",
          dragon: "#0070CA",
          dark: "#5B5366",
          fairy: "#FB8AEC",
        },
      },
    },
  },
  plugins: [],
};
