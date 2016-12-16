/**
 * Created by guosen on 2015/12/9.
 */
let mongoose = require('mongoose');
let mongodbConf = require('../http/constant');
let uri = mongodbConf.logDBUrl;
let db = mongoose.createConnection(uri);
db.once('open', function () {
    console.log('Connected to mongodb')
});

let logs = require('./logs');
module.exports = db.model('logs', logs);
