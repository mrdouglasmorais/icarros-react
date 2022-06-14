const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge( common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }, {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  // externals: {
  //   react: 'React',
  //   axios: 'axios',
  //   'react-dom': 'ReactDOM',
  //   'react-router-dom': 'ReactRouterDOM', 
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.prod.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main-bundle-[hash].css'
    })
  ]
})