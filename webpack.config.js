const path = require('path')

module.exports = [{
  context: __dirname,
  entry: './js/App.react.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false
    }
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false // was false
            }
          }
        ]
      }
    ]
  }
}, {
  context: __dirname,
  entry: './server.js',
  target: 'node',
  resolve: {
    extensions: ['.js', '.json']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|dist|public)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    ]
  }
}]
