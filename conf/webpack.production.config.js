import Config from 'webpack-config';

export default new Config().extend('conf/webpack.common.config.js').merge({
  output: {
    filename: 'js/bundle.min.[hash:8].js'
  },
  optimization: {
    minimize: true
  },
  mode: 'production',
  devtool: 'source-map'
});
