const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/assets'), // SVGs in src/assets will be handled by inline-loader (js module)
        use: 'svg-inline-loader',
      },
      {
        test: /\.svg$/,
        exclude: path.resolve(__dirname, 'src/assets'), // SVGs not in src/assets will be handled by file-loader
        use: {
          loader: 'url-loader',
          options: {
            name: 'assets/[name].[hash].[ext]',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};