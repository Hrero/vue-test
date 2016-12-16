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
                test: require.resolve('jquery'),
                loader: 'expose?jQuery!expose?$'
            }, {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['typecheck', 'syntax-flow', 'transform-flow-strip-types', 'transform-runtime']
                }
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            },
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap', exclude: /node_modules/},
            {test: /\.(woff|svg|ttf|eot|woff2)(\?.*)?$/, loader: 'url?limit=10000'},//限制大小小于10k的
            {test: /\.(png|jpg|gif)$/, loader: 'url?limit=10000?name=image/[hash:8].[name].[ext]'}
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

module.exports = config;