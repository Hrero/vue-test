let global = {};

$.get("/questions/questionsCreate/getAllGrade", (data) => {
    global.gradeAll = JSON.parse(data);
});
$.get("/questions/questionsCreate/getAllBookType", (data) => {
    global.bookTypeAll = JSON.parse(data);
});
$.get("/questions/questionsCreate/getSubjectAll", (data) => {
    global.subjectAll = JSON.parse(data);
});

module.exports = global;