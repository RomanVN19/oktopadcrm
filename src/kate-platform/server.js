import Entity from './Entity';

export const makeEntityFromStructure = structure =>
  class EntityFromStructure extends Entity {
    constructor(params) {
      super(params);
      Object.assign(this, structure);
    }
  };

export const makeEntitiesFromStructures = (structures) => {
  const entities = {};
  Object.keys(structures).forEach((name) => {
    entities[name] = makeEntityFromStructure(structures[name]);
  });
  return entities;
};
