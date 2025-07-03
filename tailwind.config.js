/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        profile: "min-content 1rf min-content",
      },
      colors: {
        teste: "red",
      },
    },
  },
  plugins: [],
};
