let mysqlConfig = {
    //166
    // host: 'localhost',
    // user: 'root',
    // password: 'admin@XGR',
    // database: 'e-eduspace-service-web',
    // port:'3306'

    //217
    // host: '127.0.0.1',
    // user: 'root',
    // password: 'root',
    // database: 'eduspace_service_web',
    // port:'3006'

    // //本地
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'e-eduspace-service-web',
    port: '3306'
};
module.exports = {
    config: 'mysql://' + mysqlConfig.user + ':' + mysqlConfig.password + '@' + mysqlConfig.host + ':' + mysqlConfig.port + '/' + mysqlConfig.database
};