const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./webpack.paths.js');

module.exports = {
  resolve: {
    modules: [paths.root, 'node_modules'],
    alias: Object.assign({}, paths),
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, 'src/index')],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'prop-types',
      'redux',
      'redux-saga',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
      {
        test: /\.scss|\.css$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? {
              loader: 'style-loader',
              query: {
                sourceMap: true,
              },
            }
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              localIdentName: '[folder]-[local]-[hash:6]',
            },
          },
          {
            loader: 'postcss-loader',
            query: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /.svg$/,
        loader: 'svg-inline-loader',
        query: {
          removeSVGTagAttrs: false,
        },
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]',
              outputPath: process.env.NODE_ENV === 'production' ? '/static/images/' : '',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },
};
