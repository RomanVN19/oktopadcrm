import { makeEntitiesFromStructures, use } from 'katejs';
import { packageName, structures } from './structure';


const AppServer = parent => class Server extends use(parent) {
  constructor(params) {
    super(params);

    makeEntitiesFromStructures(this.entities, structures);

    this.entities = {
      ...this.entities,
    }
  }
};
AppServer.package = packageName;
export default AppServer;
