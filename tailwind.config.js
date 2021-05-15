module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1D465E",
        secondaryBlue: "#2C6383",
        lightBlue: "#F3F7F9",
        primaryOrange: "#EE6C4D",
        blueText: "#344C5A",
        grayText: "#898989",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
}
