const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [ 
          MiniCssExtractPlugin.loader, 
          "css-loader",
          "sass-loader" 
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      linkType: "text/css",
    }),
    new HtmlWebpackPlugin ({
      template: "./src/index.html"
    })
  ],
  devServer: {
    open: true,
    port: 2222,
    compress: true,
  },
}