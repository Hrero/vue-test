var log4js = require('log4js');
module.exports = function () {
  log4js.configure({
    appenders: [
      { type: 'console' },{
        type: 'dateFile',
        filename: 'logs/access',
        pattern:'-yyyy-MM-dd.log',
        alwaysIncludePattern: true
      }
    ],
    replaceConsole: true
  });
  var logger = log4js.getLogger();
  logger.setLevel('INFO');
}
