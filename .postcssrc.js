// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 12
    })
  ]
  // "plugins": {
  //   "postcss-import": {},
  //   "postcss-url": {},
  //   // to edit target browsers: use "browserslist" field in package.json
  //   "autoprefixer": {}
  // }
}
