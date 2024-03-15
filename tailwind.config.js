/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0d6efd",
        "brand-red": "#dc3545",
        "brand-green": "#198754",
        "brand-yellow": "#ffc107",
        "brand-gray": "#6c757d",
        "brand-light": "#f8f9fa",
        "brand-dark": "#212529",
      },
    },
  },
  plugins: [],
};
