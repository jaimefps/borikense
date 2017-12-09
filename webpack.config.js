/**
 * TODO - edit webpack
 */

const webpack = require('webpack')
const path = require('path')

const config = {
  context: __dirname + '/',

  entry: {
    index: './main.js',
    edit: './edit.js',
    list: './list.js'
  },

  resolve : {
    modules: ['node_modules', 'client', 'lib'],
    extensions: ['.js', '.jsx']
  },

  output: {
    path : path.join(__dirname, 'bundles'),
    filename: '[name].js',
    // for 404 page refresh, but seems useless:
    publicPath: '/',
  },

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 8000
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons.js',
      filename: 'common.js'
    })
  ],

  modules: {
    loaders: [

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        }
      },

      {
        test: /\.css?$/,
        loaders: ["style-loader", "css-loader"]
      }
      
    ]
  }

}