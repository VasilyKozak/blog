import Config from 'webpack-config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import pathApp from './pathApp';

export default new Config().merge({
  entry: 'src/index.jsx',
  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
    modules: ['node_modules', 'src'].map(p => path.resolve(p)),
    alias: pathApp.alias
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: pathApp.appPath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: "[name]__[local]___[hash:base64:5]",
                }
              }
            },
            { loader: 'postcss-loader', options: { config: { path: path.join(process.cwd(), 'postcss.config.js') } } }
          ]
        }),
      }
    ]
  },

  devtool: 'eval-source-map',

  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin({
      path: '/public'
    })
  ]
});
