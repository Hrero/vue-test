const path = require('path');
const webpack = require('webpack');
const global = require("../server/http/constant");
const projectRootPath = path.resolve(__dirname, '../');

let config = {
    entry: [
        path.resolve(projectRootPath, './src/index')
    ],
    output: {
        path: path.resolve(projectRootPath, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue'
        }
    },
    module: {
        loaders: [
            {
                test: require.resolve('../src/public/common/jquery'),
                loader: 'expose?jQuery!expose?$'
            },  {
                test: require.resolve('../src/baseData'),
                loader: 'expose?baseData'
            }, {
                test: /\.vue$/,
                loader: 'vue',
                exclude: /node_modules/
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.json$/,
                loader: 'json',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style!css',
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap',
                exclude: /node_modules/
            }, {
                test: /\.(woff|svg|ttf|eot|woff2)(\?.*)?$/,
                loader: "url",
                exclude: /node_modules/,
                query: {
                    limit: 10000
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: "url",
                exclude: /node_modules/,
                query: {
                    limit: 10000,
                    name: "image/[hash:8].[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}

//添加hotreplace支持
if (process.env.NODE_ENV !== 'production' && !global.type) {
    config.devtool = 'eval';
    config.entry.unshift('webpack-hot-middleware/client');
    config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
}

// 压缩文件
if(global.type){
    config.plugins.unshift(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

module.exports = config;