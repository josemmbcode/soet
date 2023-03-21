/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        soet: "#ef8697",
        pearl: "#F8F6F0",
        off: "#f5f5f5",
        volky: "#a9daf5",
        taller: "#CCB0C6",
        darkVolky: "#4bbbfc"
      },
      fontFamily: {
        amarillo: ["Amarillo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
