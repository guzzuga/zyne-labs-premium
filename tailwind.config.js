/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05060A",
        ink: "#EDEDED",
        muted: "rgba(237,237,237,.68)",
        stroke: "rgba(237,237,237,.14)",
        electric: "#3B6EFF",
        electric2: "#7AA2FF"
      },
      letterSpacing: {
        tight2: "-0.03em"
      }
    }
  },
  plugins: []
}
