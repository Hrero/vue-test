/**
 * Created by guosen on 2015/12/9.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var logs = new Schema({
  operationType: String,
  product: String,
  objectType: String,
  objectTab: String,
  name: String,
  code: String,
  time: Number
});
module.exports = logs;