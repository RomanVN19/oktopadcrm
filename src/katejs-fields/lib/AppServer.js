import { makeEntitiesFromStructures, use } from 'katejs';
import { packageName, structures } from './structure';
import EntityFieldsValuesList from './entities/EntityFieldsValuesList';


const AppServer = parent => class Server extends use(parent) {
  constructor(params) {
    super(params);

    makeEntitiesFromStructures(this.entities, structures);

    this.entities = {
      ...this.entities,
      EntityFieldsValuesList: EntityFieldsValuesList(this.entities.EntityFieldsValuesList),
    }
  }
};
AppServer.package = packageName;
export default AppServer;
