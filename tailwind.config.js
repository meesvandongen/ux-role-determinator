module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    },
  },
};
