/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    colors: {
      niagara: "#3AAB97",
      zambezi: "#595959",
    },
    extend: {
      width: {
        100: "100%",
        95: "95%",
      },
      height: {
        100: "100%",
      },
      fontFamily: {
        poppins: ["Poppins"],
        raleway: ["Raleway"],
      },
    },
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
