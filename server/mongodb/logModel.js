/**
 * Created by guosen on 2015/12/9.
 */
var mongoose = require('mongoose');
var mongodbConf = require('../http/constant');
var uri = mongodbConf.logDBUrl;
var db = mongoose.createConnection(uri);
db.once('open', function () {
    console.log('Connected to mongodb')
});

var logs = require('./logs')
module.exports = db.model('logs',logs);
