const JEECG = "/jeecg";
module.exports = {
    "getAllGrade": JEECG + "/rest/baseGrade?all",//获取学年
    "getGradeCodeById": JEECG + "/rest/baseGrade/get/",
    "getSubjectAll": JEECG + "/rest/subject/all",
    "getQuestionId": JEECG + "/rest/subjectQuestion/retrieval",
    "getAllBookType": JEECG + "/rest/bookType?all",
    "getSceneByResouseTypeId": JEECG + "/rest/tSceneController/getSceneByResourceId/",//根据资源类型获取场景
    "getAllVideo": JEECG + "/rest/resourceVideo/datagrid",
    "getAllSmall": JEECG + "/rest/courseSmall/getPageBean"
}