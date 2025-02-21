/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px",
    },
    colors: {
      transparent: "transparent", // leave this…
      current: "currentColor", // and this…
      white: colors.white, // tenant's white colour
      black: "#000000", // tenant's darkest grey
      grey: colors.gray,

      
    },

    // changed the line height
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.05rem" }],
      sm: ["0.875rem", { lineHeight: "1.225rem" }],
      base: ["1rem", { lineHeight: "1.4rem" }],
      lg: ["1.125rem", { lineHeight: "1.575rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "1.8rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.7rem" }],
      "5xl": ["3rem", { lineHeight: "3.6rem" }],
      "6xl": ["3.75rem", { lineHeight: "4.5rem" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
    },

    // amend these values to suit the chosen font
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      black: "800",
    },

    screens: {
      "2xs": "320px",
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1920px",
    },
    extend: {
      fontFamily: {
        openrunde: ["Hanken Grotesk", "serif"], // Ensure fallback font

      },
      
      zIndex: {
        "-1": "-1",
        100: 100,
        1000: 1000,
      },
      spacing: {
        // change 863 to whatever half of the max content width you want for wide screens is
        contained: "calc(50vw - 863px)",
        fullheight: "calc(var(--vh, 1vh) * 100)", // --vh var set on html tag by setDocHeight() in app.js
        gutter: "5vw",
        13: "3.125rem",
        15: "3.75rem",
        18: "4.5rem",
        19: "4.75rem",
        22: "5.5rem",
        25: "6.25rem",
        75: "18.75rem",
        114: "28.5rem",
        125: "31.25rem",
      },
    },
  },
  plugins: [],
};
