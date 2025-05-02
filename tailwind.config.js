/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#405D5B',
        'soft-green': '#A7F3D0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        libreBodoni: ['Libre Bodoni', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
