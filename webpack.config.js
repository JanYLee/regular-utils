const path = require('path');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development', // development, production
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: distPath,
  },
  devServer: {
    port: 3000,
    progress: true,
    contentBase: distPath
  }
}