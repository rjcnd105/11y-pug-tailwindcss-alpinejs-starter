const htmlmin = require("html-minifier");
const esbuild = require("esbuild")

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  if(!process.env.ELEVENTY_PRODUCTION){
    eleventyConfig.addWatchTarget("./_tmp/style.css");
    eleventyConfig.addPassthroughCopy({'./_tmp/style.css': './style.css'});

    eleventyConfig.addWatchTarget("./_tmp/index.js");
    eleventyConfig.addPassthroughCopy({'./_tmp/index.js': './index.js'});
  }
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/alpine.js": "./alpine.js",
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: 'src',
      output: process.env.ELEVENTY_PRODUCTION ? 'dist' : '_site',
    },
    passthroughFileCopy: true,
  };
};
