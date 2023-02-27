/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        soet: "#ffc0c8",
        pearl: "#F8F6F0",
        off: "#f5f5f5",
      },
      fontFamily: {
        amarillo: ["Amarillo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
