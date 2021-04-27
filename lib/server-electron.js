"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServer = getServer;

require("@babel/polyfill");

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

var database = {
  host: process.env.DB_HOST || env.database.host,
  database: process.env.DB_DB || env.database.database,
  username: process.env.DB_USER || env.database.username,
  password: process.env.DB_PASSWORD || env.database.password,
  storage: process.env.DB_STORAGE || env.database.storage
};

if (env.database.dialect) {
  database.dialect = env.database.dialect;
}

var http = {
  port: process.env.PORT || env.http.port
};

function getServer(dataFile) {
  database.storage = dataFile;
  return new _katejs.Server({
    AppServer: _AppServer.default,
    http: http,
    database: database,
    env: env,
    translations: _translations.default
  });
}