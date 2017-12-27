const { resolve } = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    resolve(__dirname, '..', 'src', 'index.tsx'),
  ],

  resolve: {
    alias: {
      '@src': resolve(__dirname, '..', 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [
      resolve(__dirname, '..', 'src'),
      'node_modules',
    ],
    plugins: [
      new TsConfigPathsPlugin(),
    ],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          'awesome-typescript-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              emitErrors: true,
              typeCheck: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader/useable',
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
};
