var path = require('path');
var webpack = require('webpack');
var global = require("./server/httpConfig.js");

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "http://"+global.globalUrl+":"+global.globalPort+"/dist/",
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        loader: 'expose?jQuery!expose?$'
      },
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
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap', exclude: /node_modules/ },
      { test:/\.(woff|svg|ttf|eot|woff2)$/,loader:'url-loader?limit=20000'},//限制大小小于10k的
      { test:/\.(png|jpg|gif)$/,loader:'url-loader?name=image/[hash:8].[name].[ext]' }
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
    proxy:  {
      '/jeecg': {
        target: 'http://'+global.globalUrl+':'+global.globalPort,
        pathRewrite: {'^/jeecg' : 'jeecg'}
      },
      '/login': {
        target: 'http://'+global.globalUrl+':3000',
        pathRewrite: {'^/login' : '/login'}
      }
    }
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
