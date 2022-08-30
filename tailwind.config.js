/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        textPrimary: "#7E7E7E",
        "black-rgba": "rgba(0,0,0,.6)",
      },
    },
  },
  plugins: [],
};
