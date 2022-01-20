module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      xlsm: { min: "0px", max: "450px" },
    },
    extend: {
      colors: {
        landing: "#FFD771",
        linkedin: "#2867B2",
        twitter: "#1DA1F2",
        facebook: "#4267B2",
      },
    },
  },
  plugins: [],
};
