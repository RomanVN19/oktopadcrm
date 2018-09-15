import { App } from 'kate-client';

import { makeItemForm, makeListForm } from './client';

const makeFormsFromStructure = ({ structures, menu }) => {
  const allForms = {};
  Object.keys(structures).forEach((key) => {
    console.log('making forms for', key, structures[key]);
    allForms[`${key}Item`] = makeItemForm({ structure: structures[key], name: key });
    allForms[`${key}List`] = makeListForm({ structure: structures[key], name: key });
    if (menu) {
      menu.push({
        title: allForms[`${key}List`].title,
        form: allForms[`${key}List`],
      });
    }
  })
  return allForms;
}


export default class PlatformApp extends App {
  static package = 'katejs';
  static packages = ['katejs'];
  static path = '/';
  static title = 'KateJS';

  constructor(params){
    super(params);
    console.log('platform app constructor');
  }
  init({ structures }) {
    this.menu = [];
    this.allForms = makeFormsFromStructure({ structures, menu: this.menu });
    this.forms = [];
    this.baseUrl = '/api';
    Object.values(this.allForms).forEach(form => this.addForm(form));
    this.makeApiLinks({ entities: Object.keys(structures) });
  }
  addForm(form) {
    let found;
    this.forms.forEach((item) => {
      if (form.path.indexOf(item.path) > -1) {
        found = true;
      }
    });

    if (found) {
      this.forms.unshift(form);
    } else {
      this.forms.push(form);
    }
  }
  makeApiLinks({ entities }) {
    const app = this;
    entities.forEach((entity) => {
      this[entity] = new Proxy({}, {
        get(target, prop) {
          return data => app.request(app.baseUrl, {
            method: 'post',
            body: JSON.stringify({
              entity,
              method: prop,
              data,
            })
          });
        },
        set() {
          return true;
        },
      });
    });
  }
}
