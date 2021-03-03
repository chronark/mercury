const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { transparent: "transparent", current: "current", ...colors },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
      boxShadow: {
        glow: "0 0 20px 0 rgba(14, 165, 233, 0.5),  0 10px 10px 5px rgba(37, 99, 235, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
