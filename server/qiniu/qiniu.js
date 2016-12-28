const express = require('express');
const router = express.Router();
const fs = require('fs');
const utility = require('utility');
const qiniu = require('qiniu');
const qnConf = require('./qiniu-conf');
qiniu.conf.ACCESS_KEY = qnConf.ACCESS_KEY;
qiniu.conf.SECRET_KEY = qnConf.SECRET_KEY;

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
    let scope = qnConf.courseware;
    let uptokenQn = new qiniu.rs.PutPolicy(scope);
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