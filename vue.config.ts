module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test-8/'
    : '/',
  chainWebpack: (config) => {
    // Svg
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
