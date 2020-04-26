import { Elements, Form } from 'katejs/lib/client';
import moment from 'moment';
import { wholeDay } from '../utils';

export default class Dashboard extends Form {
  static title = 'Dashboard';
  constructor(args) {
    super(args);
    this.date = new Date();
    this.elements = [
      {
        type: Elements.GRID,
        elements: [
          {
            type: Elements.CARD,
            cols: 6,
            elements: [
              {
                type: Elements.GROUP,
                div: true,
                style: { display: 'flex' },
                elements: [
                  {
                    type: Elements.LABEL,
                    id: 'title',
                    title: moment(this.date).format('DD.MM.YYYY'),
                    tag: 'h3',
                    style: { marginRight: 50 },
                  },
                  {
                    type: Elements.BUTTON,
                    title: 'Prev',
                    onClick: this.prev,
                  },
                  {
                    type: Elements.BUTTON,
                    title: 'Next',
                    onClick: this.next,
                  },
                ],
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
                    dataPath: 'products.product.title',
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
    this.load();
  }
  async load() {
    this.content.title.title = moment(this.date).format('DD.MM.YYYY');
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
      where: { date: wholeDay(this.date) },
    });
    this.content.ordersTotalsLabel.title = `${this.app.t('Orders count')}: ${totals.amount} (${totals.sum || 0})`;
  }
  async loadProductSales() {
    const { response: data } = await this.app.Order.query({
      attributes: [
        [{ $func: { fn: 'SUM', col: 'products.amount' } }, 'amount'],
        [{ $func: { fn: 'SUM', col: 'products.sum' } }, 'sum'],
      ],
      group: [{ $col: 'products->product.uuid' }],
      order: [{ $col: 'products->product.title' }],
      where: { date: wholeDay(this.date) },
      limit: -1,
      raw: true,
    });
    this.content.productSalesData.value = data;
  }
  next = () => {
    this.date = moment(this.date).add(1, 'day');
    this.load();
  }
  prev = () => {
    this.date = moment(this.date).add(-1, 'day');
    this.load();
  }
}
