const course = require("./course/index");
const questions = require("./questions/index");
const mysql = require("../../server/mysql/connect");
const baseGlobal = require("../../server/baseGloble/baseGloble");


module.exports = function (app) {
    app.use("/login", mysql);
    app.use("/baseGlobal", baseGlobal);
    app.use("/course", course);
    app.use("/questions", questions);
}
