
/*
Copyright © 2018 Roman Nep <neproman@gmail.com>

This file is part of KateJS.

KateJS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

KateJS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with KateJS.  If not, see <https://www.gnu.org/licenses/>.
*/

import Database from './database';
import Http from './http';

const trivialLogger = {
  info: (...args) => console.log(...args),
  debug: (...args) => console.log(...args),
  error: (...args) => console.error(...args),
};

class AppServer {
}

export default class KateServer {
  constructor({ App, logger }) {
    this.logger = logger || trivialLogger;

    this.logger.info('Creating KateServer...');
    this.app = new (App(AppServer))();
    const { databaseParams, httpParams, entities: entitiesClasses } = this.app;
    const entities = {};
    Object.keys(entitiesClasses).forEach((name) => {
      entities[name] = new entitiesClasses[name]({ logger: this.logger });
    });

    this.database = new Database({ databaseParams, entities, logger: this.logger });
    this.http = new Http({ httpParams, entities, logger: this.logger });
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
