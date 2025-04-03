const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader', // Use Babel to transpile
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/, // Process image files
        use: 'file-loader',
      },
    ],
  },
  plugins: [], // Add plugins here
  mode: 'production', // Optimize for production
};