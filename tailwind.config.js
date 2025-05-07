/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-dark": "#1D4ED8",
      },
      fontFamily: {
        sans: ["Tajawal", "sans-serif"],
      },
    },
  },
};
