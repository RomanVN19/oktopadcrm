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
