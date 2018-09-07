import Sequelize from 'sequelize';
import Fields from './fields';

export const SequelizeFields = {
  [Fields.STRING]: Sequelize.STRING,
  [Fields.INTEGER]: Sequelize.INTEGER,
  [Fields.REFERENCE]: Sequelize.VIRTUAL,
  [Fields.DECIMAL]: Sequelize.DECIMAL,
};

const capitalize = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

const getModelParams = (entity) => {
  const modelParams = {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
  };
  const modelOptions = {
    getterMethods: {
    },
    setterMethods: {
    },
  };

  // eslint-disable-next-line no-param-reassign
  entity.modelGetOptions = { include: [], attributes: ['uuid', 'createdAt', 'updatedAt'] };

  entity.fields.forEach((field) => {
    switch (field.type) {
      case Fields.REFERENCE:
        modelOptions.setterMethods[field.name] = function setter(value) {
          if (value && !this.getDataValue(field.name)) {
            this.setDataValue(`${field.name}Uuid`, value.uuid);
          }
        };
        break;
      case Fields.DECIMAL:
        entity.modelGetOptions.attributes.push(field.name);
        modelParams[field.name] = {
          type: SequelizeFields[field.type](field.length || 15, field.precision || 2),
        };
        break;
      default:
        entity.modelGetOptions.attributes.push(field.name);
        modelParams[field.name] = {
          type: SequelizeFields[field.type],
        };
    }
  });
  return { params: modelParams, options: modelOptions };
};

const makeAssociations = (entities) => {
  entities.forEach((entity) => {
    entity.fields.forEach((field) => {
      if (field.type === Fields.REFERENCE) {
        entity.model.belongsTo(field.entity.model, { as: field.name });
        entity.modelGetOptions.include.push({ model: field.entity.model, as: field.name, attributes: ['title', 'uuid'] });
      }
    });
    if (entity.tables) {
      entity.tables.forEach((table) => {
        table.fields.forEach((field) => {
          if (field.type === Fields.REFERENCE) {
            table.model.belongsTo(field.entity.model, { as: field.name });
            table.modelGetOptions.include.push({ model: field.entity.model, as: field.name, attributes: ['title', 'uuid'] });
          }
        });
        entity.model.hasMany(table.model, { as: table.name });
        entity.modelGetOptions.include.push({
          model: table.model,
          as: table.name,
          include: table.modelGetOptions.include,
          attributes: table.modelGetOptions.attributes,
        });
      });
    }
  });
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
      const { params, options } = getModelParams(entity);
      // eslint-disable-next-line no-param-reassign
      entity.model = this.sequelize.define(entity.name, params, options);
      if (entity.tables) {
        entity.tables.forEach((table) => {
          const { params: tableParams, options: tableOptions } = getModelParams(table);
          // eslint-disable-next-line no-param-reassign
          table.model = this.sequelize.define(`${entity.name}${capitalize(table.name)}`, tableParams, tableOptions);
        });
      }
    });
    makeAssociations(this.entities);
  }
  async sync() {
    await this.sequelize.sync({ alter: true });
  }
}
