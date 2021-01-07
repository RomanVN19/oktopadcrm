import { Server as KateJSServer } from 'katejs';
import AppServer from './AppServer';
import translations from './translations';

let env;
if (process.env.ENV) {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  env = require(`../env.${process.env.ENV.trim()}.json`);
} else {
  // eslint-disable-next-line global-require
  env = require('../env.json');
}
const database = env.database;

const http = {
  port: process.env.PORT || env.http.port,
};

const server = new KateJSServer({ AppServer, http, database, env, translations });
if (process.argv.indexOf('dbsync') > -1) {
  server.syncDatabase();
} else {
  server.run();
}
