const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode : 'development',
  entry : './src/index.ts',
  devtool : 'inline-source-map',
  devServer : { contentBase : './dist' },
  module : {
    rules : [
      { test : /\.tsx?$/, use : 'ts-loader', exclude : /node_modules/},
      {
        test : /\.scss$/,
        use : [
          'style-loader', // creates style nodes from JS strings
          'css-loader',   // translates CSS into CommonJS
          'sass-loader'   // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  resolve : { extensions : [ '.tsx', '.ts', '.js' ] },
  output : { filename : 'bundle.js', path : path.resolve(__dirname, 'dist') },
  plugins : [ new HtmlWebpackPlugin({ template : './src/index.html' }) ]
};
