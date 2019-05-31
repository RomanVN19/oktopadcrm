import { Entity } from 'katejs';
import { structures } from '../structure';


export default class Expense extends Entity {
  static doc = true;
  static records = ['MoneyRecord'];
  constructor(params) {
    super(params);
    this.structure = structures.Expense;
  }
  // eslint-disable-next-line class-methods-use-this
  makeRecords(doc) {
    return {
      MoneyRecord: [{
        cashbox: doc.cashbox,
        sum: -doc.total,
      }],
    };
  }
}
