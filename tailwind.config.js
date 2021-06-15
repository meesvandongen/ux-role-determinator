module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
