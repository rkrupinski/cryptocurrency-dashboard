const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    chunkFilename: '[name].js',
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'src', 'index.ejs'),
    }),
  ],
  performance: {
    hints: false,
  },
};
