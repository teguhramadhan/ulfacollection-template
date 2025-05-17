/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#405D5B",
        "soft-green": "#A7F3D0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        libreBodoni: ["Libre Bodoni", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
