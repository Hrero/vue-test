var express = require('express');
var router = express.Router();

const commonService = require('../../../server/http/commonServer');
const global = require('../../../server/http/constant');
const http_url = require('../../../server/http/http_client');
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
//
router.get("/getSceneByResouseTypeId",function(req,res){
    var resourceTypeId=req.query['resourceTypeId'];
    var options = http_url.getUrl(global.globalUrl,global.globalPort,base.getSceneByResouseTypeId+resourceTypeId,"get");
    commonService.request(options,function(data){
        res.send(data);
    });
})

module.exports = router;