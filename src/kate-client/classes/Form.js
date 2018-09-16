
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

import { createContent } from 'kate-form';
import { Elements } from '../index';

const setData = Symbol('setData');
const title = Symbol('title');
const getData = Symbol('getData');
// const createContent = Symbol('createContent');
// const createElement = Symbol('createElement');

export default class Form {
  static checkIdPresence(data, path) {
    (data || []).forEach((item) => {
      if (!item.id) {
        console.error('Missing id of ', item, ' in ', path); // eslint-disable-line no-console
      }
    });
  }
  constructor(params) {
    this[setData] = params.setData;
    this[title] = params.title;
    this[getData] = params.getData;
    this.getValues = params.getValues;
    this.setValues = params.setValues;
    this.app = params.app;
    this.content = createContent(this[getData], this[setData]);
  }

  init = (form) => {
    Form.checkIdPresence(form.actions, 'form actions');
    Form.checkIdPresence(form.content, 'form content');
    this[setData]('', {
      id: 'form',
      type: Elements.CARD,
      elements: [
        {
          type: Elements.CARD_ACTIONS,
          elements: form.actions,
        },
        ...form.elements,
      ],
      title: this[title],
    });
  }
}
