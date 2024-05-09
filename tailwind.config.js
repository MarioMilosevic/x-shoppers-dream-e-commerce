/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "custom-py": "10rem",
      },
    },
    screens: {
      lg: "1240px",
    },
  },
  plugins: [],
};
