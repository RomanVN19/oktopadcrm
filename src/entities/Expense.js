import { Entity } from 'katejs';
import { structures } from '../structure';


export default class Expense extends Entity {
  static doc = true;
  static records = ['MoneyRecord', 'DebtRecord'];
  constructor(params) {
    super(params);
    this.structure = structures.Expense;
  }
  // eslint-disable-next-line class-methods-use-this
  makeRecords(doc) {
    const records = {
      MoneyRecord: [{
        cashbox: doc.cashbox,
        sum: -doc.total,
      }],
    };
    if (doc.contractor) {
      records.DebtRecord = [{
        client: doc.contractor,
        sum: doc.total,
      }];
    }
    return records;
  }
}
