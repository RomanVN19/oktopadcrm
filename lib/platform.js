"use strict";

var _katejs = _interopRequireDefault(require("katejs"));

var _AppServer = _interopRequireDefault(require("./AppServer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env;

if (process.env.ENV) {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  env = require("../env.".concat(process.env.ENV.trim(), ".json"));
} else {
  // eslint-disable-next-line global-require
  env = require("../env.json");
}

var database = {
  host: process.env.DB_HOST || env.database.host,
  database: process.env.DB_DB || env.database.database,
  username: process.env.DB_USER || env.database.username,
  password: process.env.DB_PASSWORD || env.database.password
};
var http = {
  port: process.env.PORT || env.http.port
};
var platform = new _katejs.default({
  AppServer: _AppServer.default,
  http: http,
  database: database,
  env: env
});

if (process.argv.indexOf('build-client') > -1) {
  platform.createServer(); // for index title

  platform.compileClient();
} else {
  platform.compileClient();
  platform.startServer();
}