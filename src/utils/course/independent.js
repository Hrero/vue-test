var jeecg = "/jeecg";
module.exports = {
    'courseCategoriesGetAll': jeecg + "/rest/courseCategories/getAll", //上课形式
    "retrival": jeecg + "/rest/categoryTypeController/retrival",//上课类型
    "getAllGrade": jeecg + "/rest/baseGrade?all",//获取学年
    "getSubjectByGradeCode": jeecg + '/rest/course/getGrade/',//根据学年获得学科
}