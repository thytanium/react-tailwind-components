const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'example/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'example/public'),
    publicPath: '/static/',
    inline: true,
    hot: true,
  },
};
