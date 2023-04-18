module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: ".75rem",
    },
    extend: {
      fontFamily: {
        azeret: ['"Azeret Mono"'],
      },
      colors: {
        transparent: "transparent",
        qreen: "#62DB54", // 綠色
        black: {
          primary: "#1C1C1C", // 黑色, 主要背景
          secondary: "#2D2D2D", //深灰色, 次要背景
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
