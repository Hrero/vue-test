const MongoClient = require('mongodb').MongoClient,
    express = require("express"),
    router = express.Router(),
    assert = require('assert'),
    url = require('../http/constant').logDBUrl;
let DB = null;

// 连接mongodb
MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    DB = db;
    console.log("Connected to mongodb");
});

// 插入内容
router.post("/add", (req, res) => {
    let params = req.body;
    let col = DB.collection("logs");
    col.insert([params], {w:1}, function(err, result) {
        assert.equal(null, err);
        res.send(err || "添加成功");
    });
});

// 查询
router.post("/find", (req, res) => {
    let params = req.body;
    let col = DB.collection("logs");
    // 修改
    col.findAndModify({"operationType": "创建"}, [["operationType", 1]], {$set: {"operationType": "创建（修改后）"}}, (err, doc) => {
        res.send(err || doc);
    })
    // 查找
    col.find({"objectType": /试/}).toArray(function(err, docs) {
        res.send(err || docs);

    });
    // 删除
    // col.findAndRemove({"time": "333333333"}, [["time", 3]], (err, doc) => {
    //     res.send(err || doc);
    // })
   // findOne
   //  col.findOne({"time": "333333333"}, (err, docs) => {
   //      res.send(err || docs);
   //  });
});

module.exports = router;
