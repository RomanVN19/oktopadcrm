
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
