const port = require("../server/http/constant.js").localhostPort;
const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT|| port,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT ||3030,
}, environment);