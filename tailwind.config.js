const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#315bf0",
          50: "#eff3ff",
          100: "#dce5fd",
          200: "#c1d2fc",
          300: "#96b5fa",
          400: "#648ef6",
          500: "#315bf0",
          600: "#2a47e6",
          700: "#2234d3",
          800: "#222cab",
          900: "#212b87",
          950: "#191d52",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "0.25rem",
          medium: "0.5rem",
          large: "0.75rem",
        },
      },
    }),
  ],
};
