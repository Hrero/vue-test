const express = require('express');
const router = express.Router();
const axios = require("axios");
const commonServer = require("../http/commonServer");
const global = require('../http/constant');
const http_url = require('../http/http_client');
const base = require("../../src/utils/base");

let httpUrl = http_url.getUrl(global.globalUrl, global.globalPort, null, null);
let baseObj = {};
let baseUrl = [
    {
        // 场景5
        name: "scene5",
        url: base.getSceneByResouseTypeId,
        type: "GET",
        params: {
            id: 5
        }
    }, {
        // 场景6
        name: "scene6",
        url: base.getSceneByResouseTypeId,
        type: "GET",
        params: {
            id: 6
        }
    }, {
        // 学年
        name: "gradeCode",
        url: base.getAllGrade,
        type: "GET"
    }, {
        // 学科
        name: "subjectCode",
        url: base.getAllGrade,
        type: "GET"
    }
];
// node获取数据
for (let i = 0; i < baseUrl.length; i++) {
    if (baseUrl[i].type == "GET") {
        let params = baseUrl[i].params;
        for (let key in params) {
            baseUrl[i].url += params[key];
        }
        delete baseUrl[i].params;
    }
    axionsHttp(baseUrl[i].url, baseUrl[i].name, baseUrl[i].type, baseUrl[i].params || null, function (data, str) {
        if(JSON.parse(data)){
            baseObj[str] = JSON.parse(data);
        } else {
            baseObj[str] = data;
        }
    })
}

function axionsHttp(url, str, type, params, callback) {
    httpUrl.path = url;
    httpUrl.method = type;
    commonServer.request(httpUrl, function (data) {
        callback(data, str);
    }, params);
}

// 直接从node中获取数据
router.get('/getData', function (req, res) {
    res.send(baseObj);
});

// 从后端获取数据
router.get('/updateData', function (req, res) {
    baseObj = {};
    for (let i = 0; i < baseUrl.length; i++) {
        if (baseUrl[i].type == "GET") {
            let params = baseUrl[i].params;
            for (let key in params) {
                baseUrl[i].url += params[key];
            }
            delete baseUrl[i].params;
        }
        axionsHttp(baseUrl[i].url, baseUrl[i].name, baseUrl[i].type, baseUrl[i].params || null, function (data, str) {
            baseObj[str] = data;
            let list = Object.keys(baseObj);
            if (list.length == baseUrl.length) {
                res.send(baseObj);
            }
        })
    }
});

module.exports = router;