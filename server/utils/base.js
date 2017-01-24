const jeecg = "/jeecg";
module.exports = {
    'courseCategoriesGetAll': jeecg + "/rest/courseCategories/getAll", //上课形式
    "retrival": jeecg + "/rest/categoryTypeController/retrival",//上课类型/jeecg/rest/categoryTypeController/retrival
    "getAllGrade": jeecg + "/rest/baseGrade?all",//获取学年
    "getSubjectByGradeCode": jeecg + '/rest/course/getGrade/',//根据学年获得学科
    "getBookType": jeecg + "/rest/bookType/get/", //根据“学年”、“学科”获取“教材”
    "insertSectionPaper": jeecg + "/rest/courseIndependent/insertSectionPaper",
    "getGradeId": jeecg + "/rest/baseGrade/get/",
    "getSceneByResouseTypeId" : jeecg + '/rest/tSceneController/getSceneByResourceId/',//根据资源获取课程场景
    "getResouseOriginByResouseTypeId" : jeecg + "/rest/rtResourceOriginController/getSceneByResourceId/", //根据资源类型获取来源属性,
    "getSubjectAll": jeecg + "/rest/subject/all",
    "getQuestionId": jeecg + "/rest/subjectQuestion/retrieval",
    "getAllBookType": jeecg + "/rest/bookType?all",
    "getAllKnowlege" : jeecg + '/rest/bookKnowledgeManager/retrieval',
    "getQuestionById":'/jeecg/rest/questionManager/get/',
    "getOmml": "/jeecg/rest/papers/getOmml"
}