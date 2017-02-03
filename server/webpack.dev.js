const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const projectRootPath = path.resolve(__dirname, '../');
// process.env.NODE_ENV = "production";

let config = {
    entry: [
        path.resolve(projectRootPath, './src/index')
    ],
    output: {
        path: path.resolve(projectRootPath, './dist'),
        filename: 'js/build.js',
        publicPath: '/dist/',
        chunkFilename: "js/[name].build.js?[chunkhash]"
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
                test: require.resolve('../src/external/jquery.min'),
                loader: 'expose?jQuery!expose?$'
            },  {
                test: require.resolve('../src/vue/baseData'),
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
            },  {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract( "style", "css!sass"),
                exclude: /node_modules/
            },{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract( "style", "css"),
                exclude: /node_modules/,
            }, {
                test: /\.(woff|svg|ttf|eot|woff2)(\?.*)?$/,
                loader: "url",
                exclude: /node_modules/,
                query: {
                    limit: 10000,
                    name: "font/[name].[hash:8].[ext]"
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: "url",
                exclude: /node_modules/,
                query: {
                    limit: 10000,
                    name: "image/[name].[hash:8].[ext]"
                }
            }
        ]
    },
    vue: {
        loaders: {
            sass: ExtractTextPlugin.extract('vue-style', 'css!sass'),
            css: ExtractTextPlugin.extract('vue-style', 'css')
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: './app.html',
            filename: "app.html",
            inject: false
        }),
        new ExtractTextPlugin("css/styles.css")
    ]
}

//添加hotreplace支持
if (process.env.NODE_ENV !== 'production') {
    config.devtool = 'eval';
    config.entry.unshift('webpack-hot-middleware/client');
    config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
} else {
    config.plugins.unshift(
        // 压缩文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}


module.exports = config;