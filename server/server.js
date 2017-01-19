const path = require('path');
const exec = require('child_process').exec;
const webpack = require('webpack');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const qiniu = require("../server/qiniu/qiniu");   //  七牛请求配置文件
const global = require('./http/constant');
const constent = require("./http/constant");
const ueditor = require('../server/wangEditor/index');
const constant = require("../server/http/constant");
const app = express();

//req.body
app.use(bodyParser());

//req.session
app.use(session({
    secret: 'keyboard cat',
    rolling: true,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({url: constent.sessionDBUrl}),
    cookie: {secure: true},
    cookie: {maxAge: 60 * 60 * 1000}
}));

// qiniu
app.use("/qiniu", qiniu);

// 富文本编辑器
app.use("/upload", function (req, res) {
    ueditor(req, res);
});

// 日志
require('./log/log')();

// 路由
require("../src/routes/index")(app);

//webpack中间件配置，包括hotReplace
if (!global.type) {
    const wpConfig = require('./webpack.dev.js');
    const compiler = webpack(wpConfig);
    const webpackMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require('webpack-hot-middleware');

    app.use(webpackMiddleware(compiler, {
        publicPath: wpConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true,
            chunks: false
        }
    }));
    app.use(webpackHotMiddleware(compiler));
}

//vue 路由支持
app.use(require('connect-history-api-fallback')());

//静态文件服务
app.use(express.static(path.join(__dirname, '../')));

app.listen(constant.localhostPort, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.info('server is running at %d', constant.localhostPort);
        // 自动打开页面
        /*if(!global.type){
            exec("start http://localhost:" + constant.localhostPort);
        }*/
    }
})