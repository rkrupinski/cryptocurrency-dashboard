const merge = require('webpack-merge');

const devConfig = require('./webpack/dev');
const prodConfig = require('./webpack/prod');
const sharedConfig = require('./webpack/shared');

const TARGET = process.env.npm_lifecycle_event;

let config = sharedConfig;

if (TARGET === 'start') {
  config = merge(config, devConfig);
}

if (TARGET === 'build' || TARGET === 'analyze') {
  config = merge(config, prodConfig);
}

module.exports = config;
