const MongoClient = require('mongodb').MongoClient,
    express = require("express"),
    router = express.Router(),
    assert = require('assert'),
    url = require('../http/constant').logDBUrl;
let DB = null;


MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    DB = db;
    console.log("Connected to mongodb");
});

router.post("/add", (req, res) => {
    let params = req.body;
    let col = DB.collection("logs");
    col.insert([params], {w:1}, function(err, result) {
        assert.equal(null, err);
        res.send(err || "添加成功");
    });
});

module.exports = router;
