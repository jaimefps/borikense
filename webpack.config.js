const webpack = require('webpack')
const path = require('path')

const config = {
  context: __dirname + '/',

  entry: {
    index: './client/index.js',
  },

  resolve : {
    modules: ['node_modules', 'client', 'lib'],
    extensions: ['.js', '.jsx']
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 8000
  },

  module: {
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
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
      
    ]
  }

}

module.exports = config;