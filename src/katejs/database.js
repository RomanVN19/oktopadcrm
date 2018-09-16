
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

import Sequelize from 'sequelize';
import Fields from './fields';
import { model, modelGetOptions, capitalize } from './Entity';

export const SequelizeFields = {
  [Fields.STRING]: Sequelize.STRING,
  [Fields.INTEGER]: Sequelize.INTEGER,
  [Fields.REFERENCE]: Sequelize.VIRTUAL,
  [Fields.DECIMAL]: Sequelize.DECIMAL,
};

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
  entity[modelGetOptions] = { include: [], attributes: ['uuid', 'createdAt', 'updatedAt'] };

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
        entity[modelGetOptions].attributes.push(field.name);
        modelParams[field.name] = {
          type: SequelizeFields[field.type](field.length || 15, field.precision || 2),
        };
        break;
      default:
        entity[modelGetOptions].attributes.push(field.name);
        modelParams[field.name] = {
          type: SequelizeFields[field.type],
        };
    }
  });
  return { params: modelParams, options: modelOptions };
};

const makeAssociations = (entities) => {
  Object.values(entities).forEach((entity) => {
    if (entity.fields) {
      entity.fields.forEach((field) => {
        if (field.type === Fields.REFERENCE) {
          entity[model].belongsTo(entities[field.entity][model], { as: field.name });
          entity[modelGetOptions].include.push({ model: entities[field.entity][model], as: field.name, attributes: ['title', 'uuid'] });
        }
      });
    }
    if (entity.tables) {
      entity.tables.forEach((table) => {
        table.fields.forEach((field) => {
          if (field.type === Fields.REFERENCE) {
            table[model].belongsTo(entities[field.entity][model], { as: field.name });
            table[modelGetOptions].include.push({ model: entities[field.entity][model], as: field.name, attributes: ['title', 'uuid'] });
          }
        });
        entity[model].hasMany(table[model], { as: table.name });
        entity[modelGetOptions].include.push({
          model: table[model],
          as: table.name,
          include: table[modelGetOptions].include,
          attributes: table[modelGetOptions].attributes,
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
    Object.values(this.entities).forEach((entity) => {
      if (entity.fields) {
        const { params, options } = getModelParams(entity);
        // eslint-disable-next-line no-param-reassign
        entity[model] = this.sequelize.define(entity.name, params, options);
      }
      if (entity.tables) {
        entity.tables.forEach((table) => {
          const { params: tableParams, options: tableOptions } = getModelParams(table);
          // eslint-disable-next-line no-param-reassign
          table[model] = this.sequelize.define(`${entity.name}${capitalize(table.name)}`, tableParams, tableOptions);
        });
      }
    });
    makeAssociations(this.entities);
  }
  async sync() {
    await this.sequelize.sync({ alter: true });
  }
}
