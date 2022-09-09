/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira-code": "'Fira Code', monospace"
      },
      colors: {
        primaryDark: "#1C1B2B",
        secondaryDark: "#10111A",
        primaryLight: "#F4F6FA",
        secondaryLight: "#F1F2F6",
        primaryOrange: "#FC5830",
        lightGrey: "#B5BAC7",
        white: "#FFFFFF",
        primaryYellow: "#F6BA3D",
        semiTransparent: "rgba(0, 0, 0, 0.6)",
        primaryGreen: "#08CD92",
        primaryRed: "#D61C4E"
      }
    },
  },
  plugins: [],
}
