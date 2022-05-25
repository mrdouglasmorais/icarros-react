const path = require('path');
const { ClearWebpackPlugin } = require('clear-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main-bundle-[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '@':  path.join(__dirname, 'src')
    }
  },
  plugins: [
    new ClearWebpackPlugin()
  ]
}