import { Elements, Form } from 'katejs/lib/client';
import moment from 'moment';

export default class OrderReport extends Form {
  static title = 'Product sales';
  static entity = 'Order';
  constructor(args) {
    super(args);
    this.elements = [
      {
        id: 'startDate',
        type: Elements.DATE,
        title: 'Period start',
        timeFormat: false,
        value: new Date(),
      },
      {
        id: 'endDate',
        type: Elements.DATE,
        title: 'Period end',
        timeFormat: false,
        value: new Date(),
      },
      {
        id: 'formReport',
        type: Elements.BUTTON,
        title: 'Form report',
        onClick: this.formReport,
      },
      {
        id: 'data',
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
      },
    ];
  }
  formReport = async () => {
    const { startDate, endDate } = this.getValues();
    const { response } = await this.app.Order.report({
      startDate: moment(startDate).startOf('day'),
      endDate: moment(endDate).endOf('day'),
    });
    const total = {
      'products.product.title': this.app.t('Total'),
      sum: response.reduce((acc, val) => acc + val.sum, 0),
    };
    response.push(total);
    this.content.data.value = response;
  }
}
