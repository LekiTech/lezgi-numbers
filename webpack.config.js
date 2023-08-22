const path = require('path');
module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: 'lezgi-numbers.js',
    library: 'LezgiNumbers',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
};
