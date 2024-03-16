/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "leage-script": ["League Script", "cursive"],
        unlock: ["Unlock", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "mega-font": "40px",
        "new-xl": [
          "4.5rem",
          {
            lineHeight: "1.2",
          },
        ],
      },
    },
  },
  plugins: [],
};
