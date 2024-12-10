// webpack.config.js
const path = require('path');

module.exports = {
  entry: './playground/main.js', // Entry file for TypeScript
  output: {
    filename: 'model_viewer.js', // Output file
    path: path.resolve(__dirname, 'bundles1'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolves both TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Applies to TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map', // Generates a source map for easier debugging
  mode: 'development', // Use "development" for non-minified output
};
