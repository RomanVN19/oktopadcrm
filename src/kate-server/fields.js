import Sequelize from 'sequelize';

export const Fields = {
  STRING: Symbol('string'),
  INTEGER: Symbol('integer'),
  REFERENCE: Symbol('reference'),
};

export const SequelizeFields = {
  [Fields.STRING]: Sequelize.STRING,
  [Fields.INTEGER]: Sequelize.INTEGER,
};
