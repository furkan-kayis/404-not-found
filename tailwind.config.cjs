/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        app: {
          gray: "#333333",
          "gray-2": "#4F4F4F",
        },
      },
      fontFamily: {
        inconsolata: "'Inconsolata', monospace",
        montserrat: "'Montserrat', sans-serif",
        "space-mono": "'Space Mono', monospace",
      },
    },
  },
  plugins: [],
};
