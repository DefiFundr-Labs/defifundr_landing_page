/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "textfield-active-shadow": "#F4EBFF",
        "textfield-border-active": "#BDB3F2",
        "textfield-border-inactive": "#B8C0CB",
        "textfield-bg-inactive": "#FAFAFF",
        "textfield-bg-active": "#ffffff",
        "textfield-text": "#2D333C",
        "textfield-placeholder": "#AAB3C0",

        "input-disabled": "#B8C0CB",
        "input-error": "#ECA6A6",
        "input-bg-active": "#FAFAFF",
        "input-active-shadow": "#F4EBFF",
        "input-text": "#000000",
        "input-bg-error": "#ffffff",

        "button-primary": {
          DEFAULT: "#5A42DE",
          text: "#ffffff",
        },
      },
      fontSize: {
        "input-text": "16px",
        "textfield-text": "16px",
        "sm-button-text": "14px",
        "md-button-text": "16px",
        "lg-button-text": "24px",
        "xl-button-text": "28px",
      },
      fontWeight: {
        "input-text": "400",
        "textfield-text": "400",
      },
    },
  },
  plugins: [],
};
