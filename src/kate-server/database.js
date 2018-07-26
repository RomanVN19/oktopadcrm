import Sequelize from 'sequelize';
import { Fields, SequelizeFields } from './fields';

const getModelParams = (entity) => {
  const modelParams = {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
  };
  entity.fields.forEach((field) => {
    switch (field.type) {
      case Fields.REFERENCE:
        // do nothing
        break;
      default:
        modelParams[field.name] = {
          type: SequelizeFields[field.type],
        };
    }
  });
  return modelParams;
};

const makeAssociations = (entities) => {
  entities.forEach(entity => entity.fields.forEach((field) => {
    if (field.type === Fields.REFERENCE) {
      entity.model.belongsTo(field.entity.model, { as: field.name });
    }
  }));
};

export default class Database {
  constructor({ databaseParams, entities, logger }) {
    this.logger = logger;
    this.sequelize = new Sequelize({
      ...databaseParams,
      dialect: 'mysql',
      operatorsAliases: false,
    });
    this.entities = entities;
    this.init();
    this.createModels();
    this.sync();
  }
  async init() {
    try {
      await this.sequelize.authenticate();
      this.logger.info('...connected to database');
    } catch (e) {
      this.logger.error('...can not connect to database!');
      throw new Error('No database connection');
    }
  }
  createModels() {
    this.entities.forEach((entity) => {
      entity.model = this.sequelize.define(entity.name, getModelParams(entity));
    });
    this.entities.forEach((entity) => {
      entity.model = this.sequelize.define(entity.name, getModelParams(entity));
    });
    makeAssociations(this.entities);
  }
  async sync() {
    await this.sequelize.sync({ alter: true });
    this.logger.info('...models synced');
  }
}
