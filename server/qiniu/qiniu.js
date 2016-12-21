const express = require('express');
const router = express.Router();
const fs = require('fs');
const utility = require('utility');
const qiniu = require('qiniu');
const qnConf = require('./qiniu-conf');

router.post('/qiniu/notify', function (req, res) {
    let body = req.body;
    console.log(JSON.stringify(body))
    res.end();
});

function md55(string) {
    let crypto = require('crypto');
    let md5sum = crypto.createHash('md5');
    md5sum.update(string, 'utf8');
    return md5sum.digest('hex');
}

router.get('/token/mp4', function (req, res) {
    qiniu.conf.ACCESS_KEY = qnConf.ACCESS_KEY;
    qiniu.conf.SECRET_KEY = qnConf.SECRET_KEY;
    let scope = qnConf.hxScope;
    let uptokenQn = new qiniu.rs.PutPolicy(scope);
    let token = uptokenQn.token();
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
        res.json({
            uptoken: token
        });
    }
});

router.get('/deleteRadioId', function (req, res) {
    qiniu.conf.ACCESS_KEY = qnConf.ACCESS_KEY;
    qiniu.conf.SECRET_KEY = qnConf.SECRET_KEY;

    //构建bucketmanager对象
    let client = new qiniu.rs.Client();

    //你要测试的空间， 并且这个key在你空间中存在
    bucket = qnConf.audioAnalyzeScope;
    key = req.query.file;
    console.log(key);

    //删除资源
    client.remove(bucket, key, function (err, ret) {
        if (!err) {
            // ok
            res.send("成功")
        } else {
            res.send(err)
        }
    });
});
router.get('/deleteVideoId', function (req, res) {
    qiniu.conf.ACCESS_KEY = qnConf.ACCESS_KEY;
    qiniu.conf.SECRET_KEY = qnConf.SECRET_KEY;

    //构建bucketmanager对象
    let client = new qiniu.rs.Client();

    //你要测试的空间， 并且这个key在你空间中存在
    bucket = qnConf.hxScope;
    key = req.query.file;
    console.log(key);

    //删除资源
    client.remove(bucket, key, function (err, ret) {
        if (!err) {
            // ok
            res.send("成功");
        } else {
            res.send(err);
        }
    });
});
router.get('/deleteFileId', function (req, res) {
    qiniu.conf.ACCESS_KEY = qnConf.ACCESS_KEY;
    qiniu.conf.SECRET_KEY = qnConf.SECRET_KEY;

    //构建bucketmanager对象
    let client = new qiniu.rs.Client();

    //你要测试的空间， 并且这个key在你空间中存在
    bucket = qnConf.hxScope;
    key = req.query.file;
    console.log(key);

    //删除资源
    client.remove(bucket, key, function (err, ret) {
        if (!err) {
            // ok
            res.send("成功");
        } else {
            res.send(err);
        }
    });
});

//音频解析token
router.get('/token/audioAnalyzePath', function (req, res) {
    qiniu.conf.ACCESS_KEY = qnConf.ACCESS_KEY;
    qiniu.conf.SECRET_KEY = qnConf.SECRET_KEY;
    let scope = qnConf.audioAnalyzeScope;
    let uptokenQn = new qiniu.rs.PutPolicy(scope);
    let token = uptokenQn.token();
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
        res.json({
            uptoken: token
        });
    }
});

//听力语音token
router.get('/token/audioListenPath', function (req, res) {
    qiniu.conf.ACCESS_KEY = qnConf.ACCESS_KEY;
    qiniu.conf.SECRET_KEY = qnConf.SECRET_KEY;
    let scope = qnConf.audioListenScope;
    let uptokenQn = new qiniu.rs.PutPolicy(scope);
    console.log('qiniu-token:');
    let token = uptokenQn.token();
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
        console.log(token);
        res.json({
            uptoken: token
        });
    }
});

//课件token
router.get('/token/courseware', function (req, res) {
    qiniu.conf.ACCESS_KEY = qnConf.ACCESS_KEY;
    qiniu.conf.SECRET_KEY = qnConf.SECRET_KEY;
    let scope = qnConf.courseware;
    let uptokenQn = new qiniu.rs.PutPolicy(scope);
    console.log('qiniu-token:');
    let token = uptokenQn.token();
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
        console.log(token);
        res.json({
            uptoken: token
        });
    }
});

router.get('/formatAfterUpload', function (req, res) {
    let key = req.query['key'];
    qiniu.conf.ACCESS_KEY = qnConf.ACCESS_KEY;
    qiniu.conf.SECRET_KEY = qnConf.SECRET_KEY;
    let scope = qnConf.hxScope;
    let n = key.length;
    let entry = scope + ":" + key.substring(0, n - 3) + 'mp4';//将avi和mp4的后缀名都改成mp4
    let encodedEntryURI = utility.base64encode(entry, true);
    let persistentOps = "avthumb/mp4/ab/160k/ar/44100/acodec/libfaac/r/30/vb/5400k/vcodec/libx264/s/1920x1080/autoscale/1/strpmeta/0|saveas/" + encodedEntryURI;
    let persistentNotifyUrl = "http://218.240.38.106/media/qiniu/notify";
    let pipeline = "hxsvideo";
    qiniu.fop.pfop(scope, key, persistentOps, {
        pipeline: pipeline,
        notifyURL: persistentNotifyUrl,
        force: 1
    }, function (err, result) {
        if (err) {
            console.log(err);
            res.send(false);
        } else {
            res.send(result);
        }
    })
})

module.exports = router;
/*module.exports = function (req, res) {
 // a simple TeX-input example
 var mjAPI = require("mathjax-node/lib/mj-single.js");
 mjAPI.config({
 MathJax: {
 // traditional MathJax configuration
 }
 });
 mjAPI.start();

 var yourMath = '(a+b)^{\\frac mn} = \\sqrt[n]{(a+b)^m}';

 mjAPI.typeset({
 math: yourMath,
 format: "TeX", // "inline-TeX", "MathML"
 mml: true, //  svg:true,
 }, function (data) {
 if (!data.errors) {
 res.send(data.mml);
 console.log(data.mml)
 }
 });
 }*/
/*
 var officegen = require('officegen');
 var fs = require('fs');
 var path = require('path');
 var docx = officegen('docx');
 var async = require('async');

 /!*<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>x</mi><mo>=</mo><mrow class="MJX-TeXAtom-ORD"><mfrac><mrow><mo>&#x2212;<!-- − --></mo><mi>b</mi><mo>&#x00B1;<!-- ± --></mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>&#x2212;<!-- − --></mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow><mo>.</mo></math>*!/

 /!**
 * 导出word
 *!/
 exports.exportWord = function (req, res) {
 console.log('exportWord-------------');
 docx.on('finalize', function (written) {
 console.log('Finish to create Word file.\nTotal bytes created: ' + written + '\n');
 });


 docx.on('error', function (err) {
 console.log(err);
 });


 var pObj = docx.createP({align: 'center'});// 创建行 设置居中
 pObj.addText('血液透析（滤过）治疗知情同意书', {bold: true, font_face: 'Arial', font_size: 18});// 添加文字 设置字体样式 加粗 大小


 var pObj = docx.createP();
 pObj.addText('<?xml version="1.0"?><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"> <mstyle displaystyle="true" scriptlevel="0"> <mrow class="MJX-TeXAtom-ORD"> <msup><mi>x</mi><mn>2</mn></msup></mrow> </mstyle> </math>');


 var out = fs.createWriteStream('out.docx');// 文件写入
 out.on('error', function (err) {
 console.log(err);
 });


 var result = docx.generate(out);// 服务端生成word


 res.writeHead(200, {

 // 注意这里的type设置，导出不同文件type值不同application/vnd.openxmlformats-officedocument.presentationml.presentation
 "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

 'Content-disposition': 'attachment; filename=out.docx'

 });
 docx.generate(res);// 客户端导出word


 }
 */
