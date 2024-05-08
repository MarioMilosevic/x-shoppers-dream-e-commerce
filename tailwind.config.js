/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "custom-py": "6.25rem",
      },
    },
    screens: {
      sm: "500px",
      lg: "1240px",
    },
  },
  plugins: [],
};
