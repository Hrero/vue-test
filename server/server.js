const path = require('path');
const exec = require('child_process').exec;
const webpack = require('webpack');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const fs = require("fs");

const qiniu = require("./routes/qiniu/qiniu");   //  七牛请求配置文件
const ueditor = require('./routes/uploadImg/index');
const constant = require("./config/http/constant");
let htmlUrl = "";
// process.env.NODE_ENV = "production";
const app = express();

//req.body
app.use(bodyParser());

//req.session
app.use(session({
    secret: 'keyboard cat',
    rolling: true,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({url: constant.sessionDBUrl}),
    cookie: {secure: true, maxAge: 60 * 60 * 1000}
}));

// qiniu
app.use("/qiniu", qiniu);

// 富文本编辑器
app.use("/uploadImg", function (req, res) {
    ueditor(req, res);
});

// 日志
require('./config/log/log')();

// 路由
require("./routes/index")(app);

//webpack中间件配置，包括hotReplace
if (process.env.NODE_ENV !== 'production') {
    const wpConfig = require('./webpack.dev.js');
    const compiler = webpack(wpConfig);
    const webpackMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require('webpack-hot-middleware');
    htmlUrl = "./app.html";

    app.use(webpackMiddleware(compiler, {
        publicPath: wpConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true,
            chunks: false
        }
    }));
    app.use(webpackHotMiddleware(compiler));
} else {
    htmlUrl = "./dist/app.html";
}

//vue 路由支持
app.use(require('connect-history-api-fallback')());

//静态文件服务
app.use(express.static(path.join(__dirname, '../')));

// 加载html文件
app.use("/", function(req, res){
    fs.readFile(htmlUrl, function (err,data){
        res.end(data);
    });
});

app.listen(constant.localhostPort, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.info('server is running at %d', constant.localhostPort);
        // 自动打开页面
        /*if(process.env.NODE_ENV !== 'production'){
         exec("start http://localhost:" + constant.localhostPort);
         }*/
    }
});