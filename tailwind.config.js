/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm:'500px',
      lg: "1240px",
    },
    extend: {},
  },
  plugins: [],
};
