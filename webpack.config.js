const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/demo/index.tsx'),
  output: {
    filename: 'index.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src/demo/public'),
    inline: true,
    hot: true,
  },
};
