var express = require('express');
var router = express.Router();

const commonService = require('../../config/http/commonServer');
const global = require('../../config/http/constant');
const http_url = require('../../config/http/http_client');
const base = require("../../utils/base");


//上课形式
router.get('/courseCategoriesGetAll', function (req, res) {
    let options = http_url.getUrl(global.globalUrl, global.globalPort, base.courseCategoriesGetAll, "GET");
    commonService.request(options, function (data) {
        res.send(data);
    });
});
//上课类型
router.post('/retrival', function (req, res) {
    let options = http_url.getUrl(global.globalUrl, global.globalPort, base.retrival , "POST");
    commonService.request(options, function (data) {
        res.send(data);
    });
});
//获取学年
router.get('/getAllGrade', function (req, res) {
    let options = http_url.getUrl(global.globalUrl, global.globalPort, base.getAllGrade, "GET");
    commonService.request(options, function (data) {
        res.send(data);
    });
});
//根据学年获得学科
router.get('/getSubjectByGradeCode', function (req, res) {
    let params = req.query;
    let options = http_url.getUrl(global.globalUrl, global.globalPort, base.getSubjectByGradeCode + params.subjectCode, "GET");
    commonService.request(options, function (data) {
        res.send(data);
    });
});
//根据“学年”、“学科”获取“教材”
router.get('/getBookType', function (req, res) {
    let params = req.query;
    let options = http_url.getUrl(global.globalUrl, global.globalPort, base.getBookType + params.subjectCode + "/" + params.gradeCode, "GET");
    commonService.request(options, function (data) {
        res.send(data);
    });
});
//获取课程场景
router.get("/getSceneByResouseTypeId",function(req,res){
    var id = req.query.id;
    var options = http_url.getUrl(global.globalUrl,global.globalPort,base.getSceneByResouseTypeId + id,"get");
    commonService.request(options,function(data){
        res.send(data);
    });
})
//获取课程来源
router.get("/getResouseOriginByResouseTypeId",function (req,res) {
    var id = req.query.id;
    var options = http_url.getUrl(global.globalUrl,global.globalPort,base.getResouseOriginByResouseTypeId+ id,"GET");
    commonService.request(options,function (data) {
        res.send(data);
    })
})
//教材数
router.post("/getAllKnowlege",function (req,res) {
    var params = req.body;
    var options = http_url.getUrl(global.globalUrl,global.globalPort,base.getAllKnowlege,"POST");
    commonService.request(options,function (data) {
        res.send(data);
    }, params)
})
// 获取试卷详情
router.post("/getQuestionById",function (req,res) {
    var params = req.body;
    var options = http_url.getUrl(global.globalUrl,global.globalPort,base.getQuestionById + params.subject + '/' + arams.id,"GET");
    commonService.request(options,function (data) {
        res.send(data);
    })
})
// 获取omml
router.post("/getOmml",function (req,res) {
    var params = req.body;
    var options = http_url.getUrl(global.globalUrl,global.globalPort,base.getOmml,"POST");
    commonService.request(options,function (data) {
        res.send(data);
    }, params)
})


module.exports = router;