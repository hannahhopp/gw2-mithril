const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  mode: 'development',
  output: {
    path: path.join(__dirname, 'bin'),
    filename: 'app.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}