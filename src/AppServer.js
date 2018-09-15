import { makeEntitiesFromStructures, use } from 'kate-platform';

import { structures, title, packageName } from './structure';

const AppServer = parent => class Server extends use(parent) {
  constructor(params) {
    super(params);
    this.entities = makeEntitiesFromStructures(structures);
    this.title = title;
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
};
AppServer.package = packageName;
export default AppServer;
