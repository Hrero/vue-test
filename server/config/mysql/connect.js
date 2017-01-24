const mysql = require('mysql');
const config = require("./mysql-config");
const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const md5sum = crypto.createHash('md5');


let connection = mysql.createConnection(config);
connection.connect();


function md5(string) {
    md5sum.update(string, 'utf8');
    return md5sum.digest('hex');
}

// 登录
router.get("/", (req, res) => {
    let params = req.body,
        password = md5(params.password + "这是个秘密"),
        sql = " SELECT us.*, role.role_id, stage.stage_id, `subject`.subject_id \
                FROM userinfo AS us, userinfo_role AS role, userinfo_stage AS stage, userinfo_subject AS subject \
                WHERE us.id = role.userinfo_id AND us.id = stage.userinfo_id AND us.id = `subject`.userinfo_id AND us.username = '" + params.userName + "'";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        if(rows.length == 0){
            res.send("输入的用户名不正确");
            return ;
        }
        for(let i=0; i<rows.length; i++){
            if(rows[i].password == password){
                if(rows[i].isdelete == 1){
                    res.send("用户已被禁用");
                    return ;
                }
                req.session.user = rows[i];
                res.send(rows[i].name);
                return ;
            }
        }
        res.send("用户名密码不正确");
    });
});

// 教材
router.get("/user", (req, res) => {
    let sql = "SELECT * FROM userinfo";
    connection.query(sql, function(err, rows, fields) {
        res.send(rows);
    });
})


module.exports = router;