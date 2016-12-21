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

module.exports = global;