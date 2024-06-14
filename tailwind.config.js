module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
    pseudo: {
      before: "before",
      after: "after",
    },
  },
  variants: {
    extend: {
      before: ["hover", "focus"],
      after: ["hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-pseudo-elements")],
};
