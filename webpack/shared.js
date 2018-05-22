const { resolve } = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
      new TsconfigPathsPlugin(),
    ],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'ts-loader',
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
              forceIsolatedModules: true,
              typeCheck: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
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
