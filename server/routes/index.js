const course = require("./course/index");
const questions = require("./questions/index");
const mysql = require("../config/mysql/connect");
const baseGlobal = require("../config/baseGloble/baseGloble");
const mongodb = require("../config/mongodb/logModel");
//const word = require("../../server/word");


module.exports = function (app) {
    app.use("/login", mysql);
    app.use("/mongodb", mongodb);
    // app.use("/outWord", word);
    app.use("/baseGlobal", baseGlobal);
    app.use("/course", course);
    app.use("/questions", questions);
}
