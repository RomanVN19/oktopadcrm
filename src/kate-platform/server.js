export const db = Symbol('db');

export class Entity {
  constructor({ structure }) {
    Object.assign(this, structure);
  }
  get(params) {
    console.log('get func');
  }
  put(params) {
    console.log('put func');
  }
  post(params) {
    console.log('post func');
  }
  delete(params) {
    console.log('delete func');
  }
  query(params) {
    console.log('query func');
  }
}

export const makeEntitiesFromStructures = (structures) => {
  const entities = {};
  Object.keys(structures).forEach((name) => {
    entities[name] = new Entity({ structure: structures[name] });
  });
  return entities;
};
