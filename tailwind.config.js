/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        spartan: ["League Spartan"],
      },
      fontSize:{
        '10xl': ['250px','200px']
      },
      colors: {
        gray: "#7D828F",
        ash: "#C8CCD8",
        lightash: "#EEEFF4",
        rectangle: "#C8CCD8",
      },
      letterSpacing: {
        "extra-wide": ".9em",
        tightest: '-3px',
      },
    },
    plugins: [],
  },
};
