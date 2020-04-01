import Config from 'webpack-config';
import webpack from 'webpack';
import path from 'path';
import pathApp from './pathApp';

export default new Config().extend('conf/webpack.common.config.js').merge({
  output: {
    filename: 'js/bundle-[hash:8].js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(pathApp.root),
    port: 4000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api/': {
        target: 'http://school-blog.ru',
        secure: false,
        changeOrigin: true
      }
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
