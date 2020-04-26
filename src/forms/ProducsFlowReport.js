import { Elements, Form } from 'katejs/lib/client';
import moment from 'moment';

import { joinRecord, cellStyle } from './CashFlow';

export default class ProductsFlowReport extends Form {
  static title = 'Product flow';
  static entity = 'Order';
  constructor(args) {
    super(args);
    this.elements = [
      {
        type: Elements.GRID,
        elements: [
          {
            id: 'startDate',
            type: Elements.DATE,
            title: 'Period start',
            timeFormat: false,
            value: moment().startOf('week'),
          },
          {
            id: 'endDate',
            type: Elements.DATE,
            title: 'Period end',
            timeFormat: false,
            value: moment().endOf('week'),
          },
          {
            id: 'details',
            type: Elements.CHECKBOX,
            title: 'Detail to document',
          },
        ]
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
        cellStyle,
        columns: [
          {
            title: 'Product/Document',
            dataPath: '',
            format: val => (val.docTitle || (val.product && val.product.title)) || 'None',
          },
          {
            title: 'Start',
            dataPath: 'start',
          },
          {
            title: 'Increase',
            dataPath: 'increase',
          },
          {
            title: 'Decrease',
            dataPath: 'decrease',
          },
          {
            title: 'Total',
            dataPath: 'total',
          },
        ],
      },
    ];
  }
  formReport = async () => {
    const { startDate, endDate } = this.getValues();
    this.content.data.value = [];

    const [{ response: balance }, { response: turnover }] = await Promise.all([
      this.app.ProductRecord.balance({
        date: moment(startDate).startOf('day'),
      }),
      this.app.ProductRecord.turnover({
        where: {
          date: {
            $gt: moment(startDate).startOf('day'),
            $lte: moment(endDate).endOf('day'),
          },
        },
      }),
    ]);
    const response = joinRecord({ balance, turnover, fields: ['product'], resources: ['amount'], noDetails: !this.content.details.value });
    this.content.data.value = response;
  }
}
