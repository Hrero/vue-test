const course = require("./course/index");
const questions = require("./questions/index");


module.exports = function (app) {
    app.use("/course", course);
    app.use("/questions", questions);
}
