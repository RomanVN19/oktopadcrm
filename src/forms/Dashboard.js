import { Elements, Form } from 'katejs/lib/client';
import { wholeDay } from '../utils';

export default class Dashboard extends Form {
  static title = 'Dashboard';
  constructor(args) {
    super(args);
    this.elements = [
      {
        type: Elements.GRID,
        elements: [
          {
            type: Elements.CARD,
            cols: 6,
            elements: [
              {
                type: Elements.LABEL,
                title: 'Today',
                tag: 'h3',
              },
              {
                id: 'ordersTotalsLabel',
                type: Elements.LABEL,
                title: '',
                tag: 'h5',
              },
              {
                id: 'productSalesData',
                type: Elements.TABLE,
                columns: [
                  {
                    title: 'Product',
                    dataPath: 'products.0.product.title',
                  },
                  {
                    title: 'Amount',
                    dataPath: 'amount',
                  },
                  {
                    title: 'Sum',
                    dataPath: 'sum',
                  },
                ],
                value: [],
              },
            ],
          },
        ],
      },
    ];

    this.loadOrdersCount();
    this.loadProductSales();
  }
  async loadOrdersCount() {
    const { response: [totals] } = await this.app.Order.query({
      noOptions: true,
      attributes: [
        [{ $func: { fn: 'COUNT', col: 'uuid' } }, 'amount'],
        [{ $func: { fn: 'SUM', col: 'total' } }, 'sum'],
      ],
      where: { date: wholeDay(new Date()) },
    });
    this.content.ordersTotalsLabel.title = `${this.app.t('Orders count')}: ${totals.amount} (${totals.sum})`;
  }
  async loadProductSales() {
    const { response: data } = await this.app.Order.query({
      attributes: [
        [{ $func: { fn: 'SUM', col: 'products.amount' } }, 'amount'],
        [{ $func: { fn: 'SUM', col: 'products.sum' } }, 'sum'],
      ],
      group: [{ $col: 'products->product.uuid' }],
      order: [{ $col: 'products->product.title' }],
      where: { date: wholeDay(new Date()) },
      limit: -1,
    });
    this.content.productSalesData.value = data;
  }
}
