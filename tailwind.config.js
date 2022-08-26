/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        emon: {
          primary: "#3e615b",

          secondary: "#FEC100",

          accent: "#528078",

          neutral: "#EBEBEB",

          "base-100": "#EBEBEB",

          info: "#22c55e",

          success: "#1B6F4C",

          warning: "#CF9307",

          error: "#E46276",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
