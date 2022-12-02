/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#191B2A",
        mainbg: "#0A0B10",
        secondary: "#902913",
        text: "#F6F6F6",
      },
    },
    plugins: [],
  },
};
