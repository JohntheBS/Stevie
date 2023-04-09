/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        mobile: '300px',
        tablet: '481px',
        laptop: '769px',
        desktop: '1025px',
        tv: '1280px',
      },
      colors: {
        primary: "#f9690e",
        "primary-accent": "#222",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
