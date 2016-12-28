const course = require("./course/index");
const questions = require("./questions/index");
const mysql = require("../../server/mysql/connect");


module.exports = function (app) {
    app.use("/course", course);
    app.use("/questions", questions);
    app.use("/login", mysql);
}
