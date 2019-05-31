import { Elements, Form } from 'katejs/lib/client';
import moment from 'moment';

const filterAgentOrders = Symbol('filterAgentOrders');

export default class OrdersUnassigned extends Form {
  static title = 'Unassigned orders';
  constructor(args, hideDate) {
    super(args);

    if (!this.app[filterAgentOrders]) {
      this.app[filterAgentOrders] = {
        date: new Date(),
      };
    }

    this.elements = [
      // {
      //   id: 'orders',
      //   type: Elements.TABLE,
      //   columns: [
      //     {
      //       title: 'Number',
      //       dataPath: 'number',
      //     },
      //     {
      //       title: 'Address',
      //       dataPath: 'address',
      //     },
      //     {
      //       title: 'To pay',
      //       dataPath: 'toPay',
      //     },
      //   ],
      //   rowClick: this.openOrder,
      //   value: [],
      // },
      {
        id: 'amount',
        type: Elements.LABEL,
        tag: 'h4',
        title: 'Amount',
      },
      {
        id: 'orders',
        type: Elements.GROUP,
        elements: [],
      },
    ];
    if (!hideDate) {
      this.elements.unshift({
        id: 'date',
        title: 'Date',
        type: Elements.DATE,
        timeFormat: false,
        value: this.app[filterAgentOrders].date,
        onChange: this.dateChange,
      });
    }
  }
  afterInit() {
    this.load(this.app[filterAgentOrders].date);
  }
  dateChange = (value) => {
    this.app[filterAgentOrders].date = value;
    this.load(value);
  }
  async load(date, agentUuid = null, status, sort = null) {
    const where = {
      agentUuid,
    };
    if (date) {
      where.date = {
        $lte: moment(date).endOf('day'),
        $gte: moment(date).startOf('day'),
      };
    }
    if (status) {
      where.status = status;
    }
    let orderSort;
    if (sort) {
      orderSort = [['address']];
    }
    const { response: orders } = await this.app.Order.query({ where, limit: -1, order: orderSort });

    const clients = orders.reduce((acc, order) => {
      if (order.client && acc.indexOf(order.client.uuid) === -1) {
        acc.push(order.client.uuid);
      }
      return acc;
    }, []);

    const { response: debts } =
      await this.app.DebtRecord.balance({ date: moment(date).endOf('day'), where: { clientUuid: clients } });

    orders.forEach((row) => {
      const debt = debts.find(item => item.clientUuid === (row.client && row.client.uuid));
      // eslint-disable-next-line no-param-reassign
      row.toPay = (!debt || debt.sum < 0) ? 0 : debt.sum;
    });
    orders.forEach((order) => {
      // eslint-disable-next-line no-param-reassign
      order.sameClient = orders.reduce((acc, val) =>
        (val.client.uuid === order.client.uuid && val.uuid !== order.uuid ? acc + 1 : acc), 0);
    });
    // this.content.orders.value = orders;
    this.content.orders.elements = orders.map(order => ({
      type: Elements.CARD,
      elements: [
        {
          type: Elements.GROUP,
          div: true,
          style: { display: 'flex' },
          elements: [
            {
              type: Elements.LABEL,
              title: `${this.app.t('Order')} № ${order.number}${order.sameClient ? `(+${order.sameClient})` : ''}`,
            },
            {
              type: Elements.BUTTON,
              title: 'Details',
              onClick: () => this.openOrder(order),
              style: { padding: 10, marginLeft: 10 },
            },
          ],
        },
        {
          type: Elements.LABEL,
          title: `${this.app.t('Address')} ${order.address}`,
        },
        {
          type: Elements.LABEL,
          title: order.comment || '',
        },
        {
          type: Elements.BUTTON,
          title: 'Take order',
          onClick: () => this.take(order),
          hidden: order.status !== 1,
        },
      ],
    }));
    this.content.amount.title = `${this.app.t('Amount')}: ${orders.length}`;
  }
  openOrder(order) {
    this.app.currentOrder = order;
    this.app.open('OrderAgent');
  }
  async take(order) {
    const result = await this.app.Order.take({ uuid: order.uuid });
    if (result.response) {
      this.load(this.app[filterAgentOrders].date);
    } else {
      this.app.showAlert({ type: 'warning', description: result.error.message });
    }
  }
}
