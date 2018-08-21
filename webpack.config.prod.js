const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('./webpack.config.js');

module.exports = Object.assign({}, config, {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[name].[hash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        RECAPTCHA_SITEKEY: JSON.stringify(process.env.RECAPTCHA_SITEKEY),
        API_KEY: JSON.stringify(process.env.API_KEY),
        API_ENDPOINT: JSON.stringify(process.env.API_ENDPOINT),
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css',
      chunkFilename: 'static/css/[name].[hash].css',
    }),
    new BundleAnalyzerPlugin(),
  ],
});
