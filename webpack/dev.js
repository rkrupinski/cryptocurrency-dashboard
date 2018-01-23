const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },

  devServer: {
    contentBase: resolve(__dirname, '..', 'build'),
    inline: true,
    host: '0.0.0.0',
    hot: true,
    open: true,
    publicPath: '/',
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'src', 'index.ejs'),
      title: 'Cryptocurrency dashboard',
    }),
  ],

  performance: {
    hints: false,
  },

  devtool: 'source-map',
};
