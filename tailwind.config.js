/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
        Montserrat : ["Montserrat", "sans-serif"],
        RussoOne : ["Russo One", "sans-serif"],
      },
      screens: {
        xs: "596px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    }
  },
  plugins: [],
}