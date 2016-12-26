let global = {};

$.when(
    $.get("/questions/questionsCreate/getAllGrade"),
    $.get("/questions/questionsCreate/getSubjectAll"),
    $.get("/questions/questionsCreate/getSceneByResouseTypeId?id=5"),
    $.get("/questions/questionsCreate/getSceneByResouseTypeId?id=6")
).done((grade, subject, resouse5, resouse6) => {
    let resouse = JSON.parse(resouse5[0]);
    global.gradeAll = JSON.parse(grade[0]);
    global.subjectAll = JSON.parse(subject[0]);
    global.resouseAll = resouse.concat(JSON.parse(resouse6[0]));
    window.baseData = global;
});
