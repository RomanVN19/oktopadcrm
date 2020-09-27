import { Elements, Form } from 'katejs/lib/client';
import moment from 'moment';

export default class OrderDynamics extends Form {
  static title = 'Order dynamics';
  static entity = 'Order';
  constructor(args) {
    super(args);
    this.elements = [
      {
        id: 'periodStart',
        type: Elements.DATE,
        title: 'Period start',
        timeFormat: false,
        value: moment().startOf('week'),
      },
      {
        id: 'periodEnd',
        type: Elements.DATE,
        title: 'Period end',
        timeFormat: false,
        value: moment().endOf('week'),
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
            id: 'date',
            title: 'Date',
            dataPath: 'day',
            format: val => moment(val).format('DD.MM.YYYY'),
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
    const where = {
      date: {
        $gt: moment(this.content.periodStart.value).startOf('day'),
        $lte: moment(this.content.periodEnd.value).endOf('day'),
      },
    };
    const { response: data } = await this.app.Order.query({
      noOptions: true,
      attributes: [
        [{ $func: { fn: 'DATE', col: 'date' } }, 'day'],
        [{ $func: { fn: 'COUNT', col: 'uuid' } }, 'amount'],
        [{ $func: { fn: 'SUM', col: 'total' } }, 'sum'],
      ],
      group: [{ $col: 'day' }],
      order: [{ $col: 'day' }],
      where,
    });
    this.content.data.value = data;
  }
}
