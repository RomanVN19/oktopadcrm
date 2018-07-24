
// import { listen } from './koa';
// import { sync } from './sequelize';
import Database from './database';
import Http from './http';

const Fields = {
  STRING: Symbol('string'),
  INTEGER: Symbol('integer'),
  REFERENCE: Symbol('reference'),
};

const trivialLogger = {
  info: (...args) => console.log(...args),
};

export default class KateServer {
  constructor({ app, logger }) {
    this.logger = logger || trivialLogger;

    this.logger.info('Creating KateServer...');
    const { databaseParams, httpParams, entities } = app;
    this.database = new Database({ databaseParams, entities, logger: this.logger });
    this.http = new Http({ httpParams, entities, logger: this.logger, database: this.database });
  }
  run = () => {
    this.logger.info('starting http server...');
    this.http.listen();
  }
}

export {
  Fields,
};
