/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        1.5: "0.4rem",
        2.5: "0.8rem",
        3.5: "1.2rem",
        4.5: "1.6rem",
        5.5: "2rem",
      },
      fontSize: {
        "sm-rem": "1.2rem",
        "base-rem": "1.6rem",
        "lg-rem": "2rem",
        "xl-rem": "2.4rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
