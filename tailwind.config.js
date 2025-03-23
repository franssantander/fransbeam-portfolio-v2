/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      geist: ["Geist", "sans-serif"],
    },
    extend: {
      colors: {
        textBlack: "#2D2727",
        textGray: "#737373",
        bgColor: "#e4e4e7",
        primaryColor: "oklch(0.533 0.261 293.62)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
