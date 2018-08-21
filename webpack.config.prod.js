const path = require('path');
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const paths = require('./webpack.paths.js');
const config = require('./webpack.config.js');

module.exports = Object.assign({}, config, {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[name].[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css',
      chunkFilename: 'static/css/[name].[hash].css',
    }),
    new DotenvPlugin({
      path: path.resolve(paths.root, `.env.${process.env.NODE_ENV}`),
    }),
    new BundleAnalyzerPlugin(),
  ],
});
