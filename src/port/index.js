var global = require("./httpConfig.js");
var login = require("./login.js");
var login2 = require("./login2.js");

var portArr = [login,login2];
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