/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#191B2A",
        secondary: "#902913",
        text: "#F6F6F6",
        paragraph: "#E1E1E1",
      },
    },
    plugins: [],
  },
};
