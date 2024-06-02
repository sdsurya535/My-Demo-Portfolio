/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      monst: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
};
