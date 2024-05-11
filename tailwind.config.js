/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
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

export default tailwindConfig;
