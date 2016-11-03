var global = require("./httpConfig.js");
var port3000 = require("./port3000.js");
var public = require("./public.js");

var portArr = [port3000,public];
var portObj = {};
for(var i=0; i<portArr.length; i++){
    var item = portArr[i];
    for(let key in item){
        var path = item[key];
        item[key] = {};
        if(key == "/login"){
            global.globalPort = "3000";
        } else {
            global.globalPort = "8080";
        }
        item[key].target = "http://"+global.globalUrl+":"+global.globalPort;
        item[key].changeOrigin = true;
        item[key].pathRewrite = {};
        item[key].pathRewrite["^"+key] = path;
        portObj[key] = item[key];
    }
}
module.exports = portObj;