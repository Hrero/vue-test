var express = require('express');
var router = express.Router();

const commonService = require('../../../server/http/commonServer');
const global = require('../../../server/http/constant');
const http_url = require('../../../server/http/http_client');
const questionsCreate = require("../../utils/questionsCreate");


//获取学年
router.get('/getAllGrade', function (req, res) {
    let options = http_url.getUrl(global.globalUrl, global.globalPort, questionsCreate.getAllGrade, "GET");
    commonService.request(options, function (data) {
        res.send(data);
    });
});
//获取 code 获取 学年
router.get('/getGradeCodeById', function (req, res) {
    let id = req.query.id;
    let options = http_url.getUrl(global.globalUrl, global.globalPort, questionsCreate.getGradeCodeById + id, "GET");
    commonService.request(options, function (data) {
        res.send(data);
    });
});
//获取 学科
router.get('/getSubjectAll', function (req, res) {
    let options = http_url.getUrl(global.globalUrl, global.globalPort, questionsCreate.getSubjectAll, "GET");
    commonService.request(options, function (data) {
        res.send(data);
    });
});
//获取 试题类型
router.post("/getQuestionId", (req, res) => {
    let params = req.body;
    let options = http_url.getUrl(global.globalUrl, global.globalPort, questionsCreate.getQuestionId, "POST");
    commonService.request(options, function (data) {
        res.send(data);
    },params);
});
//获取教材
router.get('/getAllBookType', function (req, res) {
    let options = http_url.getUrl(global.globalUrl, global.globalPort, questionsCreate.getAllBookType, "GET");
    commonService.request(options, function (data) {
        res.send(data);
    });
});


module.exports = router;