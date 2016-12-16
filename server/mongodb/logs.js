/**
 * Created by guosen on 2015/12/9.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let logs = new Schema({
    operationType: String,
    product: String,
    objectType: String,
    objectTab: String,
    name: String,
    code: String,
    time: Number
});
module.exports = logs;