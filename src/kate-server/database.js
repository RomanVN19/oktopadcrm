import Sequelize from 'sequelize';

// const sequelize = new Sequelize({
//   host: 'localhost',
//   dialect: 'mysql',
//   database: 'k_assistant',
//   username: 'root',
//   password: '',
//   operatorsAliases: false,
// });
//
// const Test = sequelize.define('test', {
//   firstName: {
//     type: Sequelize.STRING,
//   },
//   lastName: {
//     type: Sequelize.STRING,
//   },
// });
//
//
// const createModels = (entities) => {
//
// }
//
// const sync = async () => {
//   await sequelize.sync({ alter: true });
//   console.log('...models synced');
// };

export default class Database {
  constructor({ databaseParams, entities, logger }) {
    this.logger = logger;
    this.sequelize = new Sequelize({
      ...databaseParams,
      dialect: 'mysql',
      operatorsAliases: false,
    });
    this.entities = entities;
    // TODO: test connection
    this.logger.info('...database initialized');
  }
}
