import { Elements, Form } from 'katejs/lib/client';
import moment from 'moment';

export default class OrderReport extends Form {
  static title = 'Orders to deliver';
  static entity = 'Order';
  constructor(args) {
    super(args);
    this.elements = [
      {
        id: 'date',
        type: Elements.DATE,
        title: 'Date',
        timeFormat: false,
        value: new Date(),
      },
      {
        id: 'showNegative',
        type: Elements.CHECKBOX,
        title: 'Show negative sum',
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
            title: 'Order',
            dataPath: 'title',
          },
          {
            title: 'Client',
            dataPath: 'client.title',
          },
          {
            title: 'Phone',
            dataPath: 'phone',
          },
          {
            title: 'Address',
            dataPath: 'address',
          },
          {
            title: 'Sum',
            dataPath: 'total',
          },
          {
            title: 'To pay',
            dataPath: 'toPay',
          },
        ],
      },
    ];
  }
  formReport = async () => {
    const { date, showNegative } = this.getValues();
    const { response } = await this.app.Order.query({
      where: {
        date: {
          $gte: moment(date).startOf('day'),
          $lte: moment(date).endOf('day'),
        },
      },
      order: [['client', 'title']],
      limit: -1,
    });

    const clients = response.reduce((acc, order) => {
      if (order.client && acc.indexOf(order.client.uuid) === -1) {
        acc.push(order.client.uuid);
      }
      return acc;
    }, []);
    const { response: debts } =
      await this.app.DebtRecord.balance({ date: moment(date).endOf('day'), where: { clientUuid: clients } });
    response.forEach((row) => {
      const debt = debts.find(item => item.clientUuid === (row.client && row.client.uuid));
      // eslint-disable-next-line no-param-reassign
      row.toPay = (!debt || (!showNegative && debt.sum) < 0) ? 0 : debt.sum;
    });

    this.content.data.value = response;
  }
}
