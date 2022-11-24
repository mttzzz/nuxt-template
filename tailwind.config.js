/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        md: "1280px",
        lg: "1280px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "close-menu": "close-menu 0.5s ease-in-out forwards",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.1)" },
          "100%": { transform: "scaleY(1)" },
        },
        "close-menu": {
          "0%": { transform: "scaleY(1)" },
          "80%": { transform: "scaleY(0.8)" },
          "100%": { transform: "scaleY(0)" },
        },
      },
    },
  },
  plugins: [],
};
