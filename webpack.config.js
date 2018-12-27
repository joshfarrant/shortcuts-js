const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './docs/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/env', '@babel/preset-react'],
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          {
            loader: 'sass-loader',
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'static/images/[name].[hash:8].[ext]',
            }
          },
        ],
      }
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'docs/'),
    publicPath: '/', // '/docs/',
    filename: 'static/bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs/'), // 'public/'
    host: '0.0.0.0',
    port: 3000,
    publicPath: '/', // '/docs/',
    hotOnly: true,
    watchContentBase: true,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
