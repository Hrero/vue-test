var path = require('path');
var webpack = require('webpack');
var port = require("./src/config/index.js");
var global = require("./src/config/httpConfig.js");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "http://"+global.globalUrl+":"+global.globalPort+"/dist/",
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        loader:'style!css'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap', exclude: /node_modules/ },
      { test:/\.(png|woff|svg|ttf|eot)$/,loader:'url-loader?limit=10000'}//限制大小小于10k的
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: port
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
