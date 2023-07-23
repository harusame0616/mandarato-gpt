/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./domains/**/*.{vue,ts}",
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.{vue,ts}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lighten: "#FFa761",
          light: "#F59751",
          dark: "#DD8849",
          darken: "#BD6829",
        },
        secondary: {
          light: "#1AAA9D",
          dark: "#1C998D",
        },
        text: {
          primary: "#313131",
        },
      },
    },
  },
  plugins: [],
};
