/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "custom-py": "10rem",
      },
      keyframes: {
        expand: {
          "0%": { width: "0%" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
      },
    
    },
    screens: {
      lg: "1240px",
    },
  },
  plugins: [],
};

export default tailwindConfig;
