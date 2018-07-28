import Database from './database';
import Http from './http';

const trivialLogger = {
  info: (...args) => console.log(...args),
  debug: (...args) => console.log(...args),
  error: (...args) => console.error(...args),
};

export default class KateServer {
  constructor({ app, logger }) {
    this.logger = logger || trivialLogger;

    this.logger.info('Creating KateServer...');
    const { databaseParams, httpParams, entities } = app;
    this.database = new Database({ databaseParams, entities, logger: this.logger });
    this.http = new Http({ httpParams, entities, logger: this.logger, database: this.database });
  }
  run() {
    this.logger.info('starting http server...');
    this.http.listen();
    this.logger.info('... http server started at port', this.http.httpParams.port);
  }
  async syncDatabase() {
    this.logger.info('synchronizing database structure...');
    await this.database.sync();
    this.logger.info('...database structure synchronized');
  }
}
