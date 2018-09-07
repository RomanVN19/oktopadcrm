import { makeEntitiesFromStructures } from 'kate-platform';

import { structures } from './structure';

export default class ServerApp {
  constructor() {
    this.entities = makeEntitiesFromStructures(structures);
    this.databaseParams = {
      host: 'localhost',
      database: 'k_assistant',
      username: 'root',
      password: '',
    };
    this.httpParams = {
      port: 2000,
    };
  }
}
