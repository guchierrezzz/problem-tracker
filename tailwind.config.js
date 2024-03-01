/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1600px",
      },
      animation: {
        "fade-translate": "fade-translate 1000ms",
        blink: "blink 2000ms infinite",
      },
      keyframes: {
        "fade-translate": {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      }, // Close the keyframes block
    },
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
