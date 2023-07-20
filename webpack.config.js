const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: './javascript/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv()
  ],
  resolve: {
    fallback: {
      fs: false, // Exclude 'fs' module
      path: require.resolve('path-browserify'), // Use 'path-browserify' as a polyfill for 'path'
    },
  },
};