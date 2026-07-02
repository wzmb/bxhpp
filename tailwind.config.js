/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ink: "#090b0a",
        "brand-orange": "#f97316",
        "brand-gold": "#e8b654",
      },
    },
  },
  plugins: [],
};
