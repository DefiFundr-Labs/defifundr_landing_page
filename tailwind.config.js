/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
import inviewPlugin from "tailwind-inview";

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

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
      white: "#FFFFFF", // tenant's white colour
      black: "#121212", // tenant's darkest grey
      primary: "#5A42fE",
      Accent: "#FF715B",
      Background: "FAFAFF",

      brandColor: {
        20: "#F9F5FF",
        30: "#FCFAFF",
        40: "#F9F5FF",
        45: "#F0EEFC",
        50: "#E5E1FA",
        60: "#E5E1FA",
        80: "#BDB3F2",
        90: "#ADA1EF",
        100: "#9C8EEB",
        200: "#8C7BE8",
        300: "#7B68E5",
        400: "#6B55E1",
        500: "#5A42DE",
        600: "#513BC8",
        700: "#4835B2",
        800: "#3F2E9B",
        900: "#362885",
        950: "#2D216F",
        1000: "#241A59",
      },

      border: {
        primary: "#E8D0EF",
        secondary: "#ECECEC",
      },

      accentColor: {
        25: "#FFC6BD",
        50: "#FFB8AD",
        100: "#FFAA9D",
        200: "#FF9C8C",
        300: "#FF8D7C",
        400: "#FF7F6B",
        500: "#FF715B",
        600: "#E66652",
        700: "#CC5A49",
        800: "#B34F40",
        900: "#994437",
        950: "#80392E",
        1000: "#662D24",
      },

      secondAccent: {
        50: "#FEFAEC",
        100: "#FDEFC4",
        200: "#FCE7A7",
        300: "#FBDC7F",
        400: "#FAD566",
        500: "#F9CB40",
        600: "#E3B93A",
        700: "#B1902D",
        800: "#897023",
        900: "#69551B",
      },

      neutralColor: {
        10: "#FDFDFD",
        25: "#FAFAFA",
        50: "#F3F3F5",
        80: "#C6CCD5",
        90: "#B8C0CB",
        100: "#AAB3C0",
        200: "#9CA6B6",
        300: "#8D99AB",
        400: "#7F8DA1",
        500: "#718096",
        600: "#667387",
        700: "#5A6678",
        800: "#4F5A69",
        900: "#444D5A",
        950: "#39404B",
        1000: "#2D2F31",
      },

      errorColor: {
        10: "#FFFBFA",
        25: "#FEF3F2",
        50: "#FEE4E2",
        80: "#ECA6A6",
        90: "#E79090",
        100: "#E27979",
        200: "#DD6363",
        300: "#D94D4D",
        400: "#D43636",
        500: "#CF2020",
        600: "#BA1D1D",
        700: "#A61A1A",
        800: "#911616",
        900: "#7C1313",
        950: "#681010",
        1000: "#530D0D",
      },

      warningColor: {
        25: "#FBEAAD",
        50: "#FAE599",
        100: "#F9E084",
        200: "#F8DB70",
        300: "#F7D55B",
        400: "#F6D047",
        500: "#F5CB32",
        600: "#DDB72D",
        700: "#C4A228",
        800: "#AC8E23",
        900: "#937A1E",
        950: "#7B6619",
        1000: "#625114",
      },

      successColor: {
        25: "#A3EDC2",
        50: "#8CE9B3",
        100: "#75E4A3",
        200: "#5EE094",
        300: "#47DB85",
        400: "#30D775",
        500: "#19D266",
        600: "#17BD5C",
        700: "#14A852",
        800: "#129347",
        900: "#0F7E3D",
        950: "#0D6933",
        1000: "#0A5429",
      },

      blueGray: {
        25: "#FCFCFD",
        50: "#F8F9FC",
        75: "#F1F2F8",
        100: "#EAECF5",
        200: "#D5D9EB",
        300: "#AFB5D9",
        400: "#717BBC",
        500: "#4E5BA6",
        600: "#3E4784",
        700: "#363F72",
        800: "#293056",
        900: "#101323",
      },

      gray_gradient: {
        "600-500": "linear-gradient(90deg, #535862 0%, #717680 100%)",
        "700-600": "linear-gradient(45deg, #414651 0%, #535862 100%)",
        "800-600": "linear-gradient(45deg, #252B37 0%, #535862 100%)",
        "800-600-90": "linear-gradient(90deg, #252B37 0%, #535862 100%)",
        "800-700": "linear-gradient(26.5deg, #252B37 0%, #414651 100%)",
        "900-600": "linear-gradient(45deg, #101828 0%, #535862 100%)",
      },

      brand_gradient: {
        "600-500": "linear-gradient(90deg, #7F56D9 0%, #9E7ED8 100%)",
        "700-600": "linear-gradient(45deg, #6941C6 0%, #7F56D9 100%)",
        "800-600": "linear-gradient(45deg, #53389E 0%, #7F56D9 100%)",
        "800-600-90": "linear-gradient(90deg, #53389E 0%, #7F56D9 100%)",
        "800-700": "linear-gradient(27deg, #53389E 0%, #6941C6 100%)",
        "900-600": "linear-gradient(45deg, #42307D 0%, #7F56D9 100%)",
      },
    },

    // changed the line height
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.125rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.875rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "4.75rem" }],
      "7xl": ["4.5rem", { lineHeight: "5rem" }],
    },

    // amend these values to suit the chosen font
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
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
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        slidein1000: "slidein 1s ease 1000ms forwards",
        slidein1200: "slidein 1s ease 1200ms forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    inviewPlugin,
    require("tailwindcss-animated"),
  ],
});
