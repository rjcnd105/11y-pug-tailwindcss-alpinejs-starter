module.exports = {
  purge: {
    content: ["../../dist/**/*.html"],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        change: "black",
      },
    },
  },
  variants: {},
  plugins: [],
};
