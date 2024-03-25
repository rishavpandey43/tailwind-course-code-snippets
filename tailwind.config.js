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
        colors: {
          "brand-blue": "#0d6efd",
          "brand-red": "#dc3545",
          "brand-green": "#198754",
          "brand-yellow": "#ffc107",
          "brand-gray": "#6c757d",
          "brand-light": "#f8f9fa",
          "brand-dark": "#212529",
        },
        spacing: {
          awesome: "43px",
          "new-awesome": "50px",
        },
      },
      spacing: {
        "my-space": "21px",
      },
      padding: {
        love: "143px",
      },
      margin: {},
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
