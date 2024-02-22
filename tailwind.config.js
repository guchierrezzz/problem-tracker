/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      marlinge: ["marlinge", "sans-serif"],
      moonLight: ["moon-light", "sans-serif"],
      moonBold: ["moon-bold", "sans-serif"],
      marketDeco: ["market-deco", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["business"],
  },
};
