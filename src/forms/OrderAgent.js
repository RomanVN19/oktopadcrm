import { Elements, Form, decimalFormat, getElement } from 'katejs/lib/client';
import Fields from 'katejs/lib/fields';

export default class OrderAgent extends Form {
  static title = 'Order';
  constructor(args) {
    super(args);

    if (!this.app.currentOrder) {
      this.app.open('OrdersUnassigned');
      this.elements = []; // to pass through form init
      return;
    }

    const { title, client: clientRef, comment, payment,
      phone, address, products, toPay, status } = this.app.currentOrder;
    const consist = products.map(item => `${item.product.title} x ${item.amount} `).join('; ');
    const client = (clientRef || {}).title;

    const orderAcions = [];

    if (status === 1) {
      orderAcions.push({
        type: Elements.BUTTON,
        title: 'Take order',
        onClick: this.take,
      });
    }

    if (status === 2) {
      orderAcions.push(
        {
          id: 'payment',
          type: Elements.INPUT,
          title: 'Received',
          format: decimalFormat(15, 2),
          disabled: !!payment,
          value: payment ? 0 : toPay,
        },
        {
          type: Elements.CHECKBOX,
          title: 'Card payment',
          id: 'cardPayment',
          value: false,
          onChange: this.cardPaymentChange,
        },
        {
          ...getElement({
            name: 'cashbox',
            type: Fields.REFERENCE,
            entity: 'Cashbox',
          }, this),
          title: 'Terminal',
          hidden: true,
          getOptions: this.getCashboxes,
        },
        {
          type: Elements.BUTTON,
          title: 'Money received \nOrder completed',
          onClick: this.done,
          style: { whiteSpace: 'pre-wrap' },
        },
      );
    }

    this.elements = [
      {
        title,
        type: Elements.LABEL,
      },
      {
        title: `${this.app.t('Client')} ${client}`,
        type: Elements.LABEL,
      },
      {
        type: Elements.GROUP,
        div: true,
        style: { display: 'flex' },
        elements: [
          {
            title: `${this.app.t('Phone')}: `,
            type: Elements.LABEL,
          },
          {
            title: phone,
            type: Elements.LABEL,
            tag: 'a',
            href: `tel:${phone}`,
          },
        ],
      },
      {
        title: `${this.app.t('Address')} ${address}`,
        type: Elements.LABEL,
      },
      {
        title: `${this.app.t('Consist')} ${consist}`,
        type: Elements.LABEL,
      },
      {
        title: `${this.app.t('Comment')} ${comment}`,
        type: Elements.LABEL,
      },
      {
        title: `${this.app.t('To pay')}: ${toPay || this.app.t('Paid')}`,
        type: Elements.LABEL,
      },
      {
        id: 'orderActions',
        type: Elements.GRID,
        elements: orderAcions,
      },
    ];
  }
  take = async () => {
    const result = await this.app.Order.take({ uuid: this.app.currentOrder.uuid });
    if (result.response) {
      this.app.open('OrdersMy');
    } else {
      this.app.showAlert({ type: 'warning', description: result.error.message });
    }
  }
  done = async () => {
    const result = await this.app.Order.done({
      uuid: this.app.currentOrder.uuid,
      payment: this.content.payment.value,
      cardPayment: this.content.cardPayment.value,
      cashbox: this.content.cashbox.value,
    });
    if (result.response) {
      this.app.open('OrdersMy');
    } else {
      this.app.showAlert({ type: 'warning', description: result.error.message });
    }
  }
  cardPaymentChange = (val) => {
    this.content.cashbox.hidden = !val;
  }
  getCashboxes = async (query) => {
    const where = { availableToAgent: true };
    if (query) {
      where.title = { $like: `%${query}%` };
    }
    const { response } = await this.app.Cashbox.query({ where });
    return response;
  };

}
