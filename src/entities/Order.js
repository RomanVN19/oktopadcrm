import { Entity } from 'katejs';
import { structures } from '../structure';


export default class Order extends Entity {
  static doc = true;
  static records = ['DebtRecord', 'MoneyRecord', 'ProductRecord'];
  constructor(params) {
    super(params);
    this.structure = structures.Order;
  }
  async report({ ctx, data }) {
    return this.query({ ctx,
      data: {
        limit: -1,
        where: {
          date: { $gte: data.startDate, $lte: data.endDate },
        },
        attributes: [
          [{ $func: { fn: 'SUM', col: 'products.amount' } }, 'amount'],
          [{ $func: { fn: 'SUM', col: 'products.sum' } }, 'sum'],
        ],
        group: [{ $col: 'products->product.uuid' }],
        order: [{ $col: 'products->product.title' }],
        raw: true,
      },
    });
  }
  // eslint-disable-next-line class-methods-use-this
  makeRecords(doc) {
    const allRecords = {};
    if (doc.client && doc.total) {
      const records = [{
        client: doc.client,
        sum: doc.total,
      }];
      if (doc.payment) {
        records.push({
          client: doc.client,
          sum: -doc.payment,
        });
      }
      allRecords.DebtRecord = records;
    }
    if (doc.payment) {
      const records = [{
        cashbox: doc.cashbox,
        sum: doc.payment,
      }];
      allRecords.MoneyRecord = records;
    }
    const products = [];
    (doc.products || []).forEach((row) => {
      if (row.product.accountBalances) {
        products.push({
          product: row.product,
          amount: -row.amount,
        });
      }
    });
    allRecords.ProductRecord = products.filter(item => item.amount < 0);

    return allRecords;
  }
  async take({ ctx, data: { uuid } }) {
    const { response: order } = await this.get({ ctx, data: { uuid } });
    if (order.status !== 1) return { error: { status: 400, message: 'Order alredy taken' } };
    return this.put({
      ctx,
      data: {
        uuid,
        body: {
          status: 2, // assigned
          agent: { uuid: ctx.state.user.uuid },
        },
      },
    });
  }
}
