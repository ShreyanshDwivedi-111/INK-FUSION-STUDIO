/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Gudea: ["Gudea", "sans-serif"],
        Mestizo: ["Mestizo", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        PlayfairDisplay: ["Playfair Display", "sans-serif"],
      },
      colors: {
        // secondary: "#DDD0C8",
        // secondary: "#fff6f0",
        // secondary: "#fff3ec",
        secondary: "#f3f2f2",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
