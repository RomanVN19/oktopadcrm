import { makeEntitiesFromStructures, use } from 'katejs';
import { structures, title, packageName } from './structure';

const AppServer = parent => class Server extends use(parent) {
  constructor(params) {
    super(params);
    this.title = title; // название приложения
    this.databaseParams = { // параметры СУБД
      host: 'localhost',
      database: 'k_assistant',
      username: 'root',
      password: '',
    };
    this.httpParams = { // параметры http сервера
      port: 2000,
    };
    this.entities = makeEntitiesFromStructures(structures); // создаем сущности по структуре
    // this.entites == {
    //   Project,
    //   ...
    // }
    // Можно изменять сущности через this.entities[_entity_name_]
  }
};
AppServer.package = packageName;
export default AppServer;
