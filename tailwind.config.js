const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
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
  plugins: [],
};
