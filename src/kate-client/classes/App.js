
/*
Copyright © 2018 Roman Nep <neproman@gmail.com>

This file is part of library kate-client.

Library kate-client is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Library kate-client is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with library kate-client.  If not, see <https://www.gnu.org/licenses/>.
*/

const history = Symbol('history');
const setFormParams = Symbol('setFormparams');
const appPath = Symbol('path');

export default class App {
  open = (form, params = {}) => {
    const paramsNames = Object.keys(params);
    const internalParams = {};
    let { path } = form;
    path = `${this[appPath] === '/' ? '' : this[appPath]}${path}`;
    // set available params (:param-name) in path
    paramsNames.forEach((param) => {
      if (path.indexOf(`:${param}`) > -1) {
        path = path.replace(`:${param}`, params[param]);
      } else {
        internalParams[param] = params[param];
      }
    });
    // set other params to route
    if (Object.keys(internalParams).length > 0) {
      this[setFormParams](form, internalParams);
    }
    this[history].push(path);
  }
  clearFormParams = (form) => {
    this[setFormParams](form, undefined);
  }
  constructor(params) {
    this[history] = params.history;
    this[setFormParams] = params.setFormParams;
    this[appPath] = params.path;
    this.showAlert = params.showAlert;
  }
  // eslint-disable-next-line class-methods-use-this
  async request(url, params) {
    return fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
      ...params,
    })
      .then(response => response
        .json()
        .then(json => ({ response: json }))
        .catch(() => ({ response })))
      .catch(error => ({ error }));
  }
}
