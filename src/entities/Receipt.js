import { Entity } from 'katejs';
import { structures } from '../structure';


export default class Receipt extends Entity {
  static doc = true;
  static records = ['ProductRecord', 'DebtRecord'];
  constructor(params) {
    super(params);
    this.structure = structures.Receipt;
  }
  // eslint-disable-next-line class-methods-use-this
  makeRecords(doc) {
    const records = {
    };
    if (doc.contractor) {
      records.DebtRecord = [{
        client: doc.contractor,
        sum: -doc.total,
      }];
    }
    const products = [];
    (doc.products || []).forEach((row) => {
      if (row.product.accountBalances) {
        products.push({
          product: row.product,
          amount: row.amount,
        });
      }
    });
    records.ProductRecord = products.filter(item => item.amount > 0);
    return records;
  }
}
