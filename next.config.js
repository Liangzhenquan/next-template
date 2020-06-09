/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-06-08 11:12:37
 * @LastEditors: liang
 * @LastEditTime: 2020-06-08 18:14:31
 */
const fs = require("fs");
const withLess = require("@zeit/next-less");
// const withCss = require("@zeit/next-less");
module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    importLoaders: 1,
  },
  distDir: "build",
  webpack(config) {
    const alias = {
      "@": fs.realpathSync(process.cwd()),
    };
    Object.assign(config.resolve.alias, alias, config.resolve.alias);

    return config;
  },
});
