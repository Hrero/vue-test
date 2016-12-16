function md55(string) {
    let crypto = require('crypto');
    let md5sum = crypto.createHash('md5');
    md5sum.update(string, 'utf8');
    return md5sum.digest('hex');
}

module.exports = function (app) {
    app.post('/login', function (req, res) {
        let form = req.body;
        console.log(form);
        let password = md55(form.password + '这是个秘密');
        req.models.userinfo.count({username: form.username, password: password}, function (err, date) {
            if (date > 0) {
                req.models.userinfo.find({username: form.username, password: password}, function (err, user) {
                    if (err) {
                        console.log(err);
                    }
                    if (user[0].username == form.username && !user[0].isdelete) {
                        let userTeacher = user[0];
                        let platform = JSON.parse(userTeacher.platform);

                        for (let i in platform) {
                            if (platform[i].id == 1) {
                                delete userTeacher.password;
                                req.session.user = userTeacher;
                            }
                        }
                        if (req.session.user != undefined) {
                            if (req.session.user.username == form.username) {
                                console.log(userTeacher.name + '登陆');
                                res.send(userTeacher.name);
                            } else {
                                req.session.user = null;
                                console.log(1);
                                res.send(false);
                            }
                        }
                        else {
                            req.session.user = null;
                            console.log(2);
                            res.send(false);
                        }

                    } else {
                        console.log('已经被禁用');
                        res.send(false);
                    }
                })
            } else {
                console.log(3);
                res.send(false);
            }
        })
    });
};