const path          = require('path');
const webpackConfig = require('./webpack.config.js');

module.exports = {
  sections: [
    {
      name:       'Elements',
      components: './src/components/elements/**/index.js',
    },
    {
      name:       'Templates',
      components: './src/components/templates/**/index.js',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, './src/utils/StyleguideWrapper.js'),
  },
  require: [
    'babel-polyfill',
  ],
  webpackConfig,
  exampleMode:    'expand',
  usageMode:      'expand',
  pagePerSection: true,
};
