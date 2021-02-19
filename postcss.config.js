module.exports = {
  plugins: [
    require('postcss-nested'),
    require(`tailwindcss`)(`./src/styles/tailwind.config.js`),
    require(`autoprefixer`)
  ],
};
