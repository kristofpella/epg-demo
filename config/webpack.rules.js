const { inDev } = require('./webpack.helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    test: /\.css$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
    ],
  },
  {
    test: /\.(gif|jpeg|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/[hash][ext][query]',
    },
  },
];
