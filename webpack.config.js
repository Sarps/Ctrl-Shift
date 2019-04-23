const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  watch: true,
  output: {
    filename: 'inputjs.js',
    path: path.resolve(__dirname, 'dist')
  }
};