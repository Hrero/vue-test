let global = {};

if(!global.gradeAll){
    $.get("/questions/questionsCreate/getAllGrade", (data) => {
        global.gradeAll = JSON.parse(data);
    });
}

if(!global.bookTypeAll){
    $.get("/questions/questionsCreate/getAllBookType", (data) => {
        global.bookTypeAll = JSON.parse(data);
    });
}

if(!global.subjectAll){
    $.get("/questions/questionsCreate/getSubjectAll", (data) => {
        global.subjectAll = JSON.parse(data);
    });
}

// 获取课程场景数据
if(!global.scene){
    let scene = [];
    $.get("/course/independent/getSceneByResouseTypeId",{"resourceTypeId":5}).then((data) => {
        scene = JSON.parse(data);
    });
    $.get("/course/independent/getSceneByResouseTypeId",{"resourceTypeId":6}).then((data) => {
     global.scene =  scene.concat(scene,JSON.parse(data));
    });

}
//获取课程来源
if(!global.resouseOrigin){
   $.get("/course/independent/getResouseOriginByResouseTypeId",{"id":5}).then((data)=>{
       global.resouseOrigin =  JSON.parse(data);
   });
}
module.exports = global;