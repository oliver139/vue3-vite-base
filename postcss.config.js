module.exports = {
  parser: require("postcss-scss"),
  plugins: [
    require("postcss-preset-env")({
      stage: 2,
      autoprefixer: { grid: true },
    }),
    require("postcss-nested"),
    require("postcss-extend-rule"),
  ]
};
