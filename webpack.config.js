const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'source-map',
  devServer: { contentBase: './dist', host: '0.0.0.0' },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader',   // translates CSS into CommonJS
          'sass-loader'   // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  output: { filename: '[name].[contenthash].js', path: path.resolve(__dirname, 'dist') },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: './src/index.html', favicon: './src/favicon.ico' }),
    new CopyWebpackPlugin([{ from: 'assets/**/*', to: '' }])
  ]
};
