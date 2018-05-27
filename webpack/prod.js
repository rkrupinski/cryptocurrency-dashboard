const { resolve } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[chunkhash].[name].js',
    chunkFilename: '[chunkhash].[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: resolve(__dirname, '..'),
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..' ,'src', 'index.ejs'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    ...process.env.ANALYZE_BUNDLE ?
        [ new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)() ] :
        [],
  ],
};
