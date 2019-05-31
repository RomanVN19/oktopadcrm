import { Entity } from 'katejs';
import { structures } from '../structure';


export default class Payment extends Entity {
  static doc = true;
  static records = ['DebtRecord', 'MoneyRecord'];
  constructor(params) {
    super(params);
    this.structure = structures.Payment;
  }
  // eslint-disable-next-line class-methods-use-this
  makeRecords(doc) {
    const records = [];
    (doc.clientpayments || []).forEach((row) => {
      records.push({
        client: row.client,
        sum: -row.sum,
      });
    });
    return {
      DebtRecord: records.filter(item => !!item.sum),
      MoneyRecord: [{
        cashbox: doc.cashbox,
        sum: doc.total,
      }],
    };
  }
}
