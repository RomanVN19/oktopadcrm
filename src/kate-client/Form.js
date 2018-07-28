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
