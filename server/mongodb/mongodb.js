var orm = require('orm');
var mysqlConfig = require('./mysql-config');


module.exports = function (app) {
  orm.settings.set('connection.pool', true);
  app.use(orm.express(mysqlConfig.config, {
    define: function (db, models, next) {
      models.subject = db.define("subjects", {
        name: String,
        code: String,
        isdelete: Boolean
      }, {
        cache: false
        // autoSave:true
      });

      models.stage = db.define("stages", {
        name: String,
        code: String,
        isdelete: Boolean
      }, {
        cache: false
        //autoSave:true
      });
      models.userinfo = db.define("userinfo", {
        name: String,
        username: String,
        password: String,
        platform: String,
        isdelete: Boolean
      }, {
        autoFetch: true,
        cache: false
        //  autoSave:true
      });

      models.role = db.define('role', {
        name: String,
        isdelete: Boolean
      }, {
        cache: false
        // autoSave:true
      })
      models.userinfo.hasMany('stage', models.stage);
      models.userinfo.hasMany('subject', models.subject);
      models.userinfo.hasMany('role', models.role);
      models.subject.sync();
      models.stage.sync();
      models.role.sync();
      models.userinfo.sync();
      //return next();
      next();
    }
  }));
}