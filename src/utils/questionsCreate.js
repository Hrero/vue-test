const JEECG = "/jeecg";
module.exports = {
    "getAllGrade": JEECG + "/rest/baseGrade?all",//获取学年
    "getGradeCodeById": JEECG + "/rest/baseGrade/get/",
    "getSubjectAll": JEECG + "/rest/subject/all",
    "getQuestionId": JEECG + "/rest/subjectQuestion/retrieval"
}