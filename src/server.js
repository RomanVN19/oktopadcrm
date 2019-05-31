import KateJSServer from 'katejs/lib/server';
import AppServer from './AppServer';

let env;
if (process.env.ENV) {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  env = require(`../env.${process.env.ENV.trim()}.json`);
} else {
  // eslint-disable-next-line global-require
  env = require('../env.json');
}
const database = {
  host: process.env.DB_HOST || env.database.host,
  database: process.env.DB_DB || env.database.database,
  username: process.env.DB_USER || env.database.username,
  password: process.env.DB_PASSWORD || env.database.password,
};
const http = {
  port: process.env.PORT || env.http.port,
};

const server = new KateJSServer({ AppServer, http, database, env });
if (process.argv.indexOf('dbsync') > -1) {
  server.syncDatabase();
} else {
  server.run();
}
