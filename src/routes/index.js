const course = require("./course/index");
const questions = require("./questions/index");
const mysql = require("../../server/mysql/connect");
const baseGlobal = require("../../server/baseGloble/baseGloble");
const mongodb = require("../../server/mongodb/logModel");
//const word = require("../../server/word");


module.exports = function (app) {
    app.use("/login", mysql);
    app.use("/mongodb", mongodb);
    // app.use("/outWord", word);
    app.use("/baseGlobal", baseGlobal);
    app.use("/course", course);
    app.use("/questions", questions);
}
