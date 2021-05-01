"use strict";

var _katejs = require("katejs");

var _AppServer = _interopRequireDefault(require("./AppServer"));

var _translations = _interopRequireDefault(require("./translations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env;

if (process.env.ENV) {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  env = require("../env.".concat(process.env.ENV.trim(), ".json"));
} else {
  // eslint-disable-next-line global-require
  env = require("../env.json");
}

var database = env.database;
var http = {
  port: process.env.PORT || env.http.port
};
var server = new _katejs.Server({
  AppServer: _AppServer.default,
  http: http,
  database: database,
  env: env,
  translations: _translations.default
});

if (process.argv.indexOf('dbsync') > -1) {
  server.syncDatabase();
} else {
  server.run();
}