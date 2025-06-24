
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const htmlFiles = fs.readdirSync(path.resolve(__dirname, 'src'))
  .filter(file => file.endsWith('.html'));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
     ...htmlFiles.map(filename => new HtmlWebpackPlugin({
      template: `./src/${filename}`,
      filename: filename,
    })),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: 'index.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/tailwind-course-1.html',
    //   filename: 'tailwind-course-1.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/tailwind-course-2.html',
    //   filename: 'tailwind-course-2.html',
    // }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};