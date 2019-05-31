import moment from 'moment';
import { Elements, decimalFormat } from 'katejs/lib/client';


export default class SpreadPayment {
  constructor({ form }) {
    this.elements = form.elements;
    this.content = form.content;
    this.app = form.app;
    this.form = form;

    this.elements.push({
      id: 'spreadPaymentModal',
      type: Elements.MODAL,
      title: 'Spread payment',
      maxWidth: 'sm',
      // fullWidth: true,
      open: false,
      elements: [
        {
          type: Elements.GRID,
          elements: [
            {
              id: 'spreadPaymentSum',
              type: Elements.INPUT,
              title: 'Sum',
              format: decimalFormat(15, 2),
              cols: 6,
            },
            {
              id: 'spreadPaymentDo',
              type: Elements.BUTTON,
              title: 'Spread',
              onClick: this.spread,
              cols: 3,
            },
          ],
        },
        {
          id: 'spreadPaymentLog',
          title: '',
          type: Elements.LABEL,
          style: { whiteSpace: 'pre-wrap' },
        },
      ],
    });
  }
  open = (client) => {
    this.content.spreadPaymentModal.title = this.app.t`Spread payment from ${client.title}`;
    this.content.spreadPaymentModal.open = true;
    this.client = client;
  }
  log(msg, clear) {
    if (clear) {
      this.content.spreadPaymentLog.title = `${msg}\n`;
    } else {
      this.content.spreadPaymentLog.title += `${msg}\n`;
    }
  }
  spread = async () => {
    this.log(this.app.t`Doing spread...`, true);
    let sum = this.content.spreadPaymentSum.value;
    this.content.spreadPaymentSum.value = 0;
    if (!sum) {
      this.log(this.app.t`No sum!`);
    }
    const { response: orders } = await this.app.Order.query({
      where: {
        clientUuid: this.client.uuid,
        $or: [
          { payed: null },
          { $literal: 'total != payed' },
        ],
      },
      order: ['date'],
    });
    for (let index = 0; index < orders.length && sum > 0; index += 1) {
      if (orders[index].total) {
        orders[index].payed = orders[index].payed || 0;
        const sumToPay = orders[index].total - orders[index].payed;
        if (sumToPay > sum) {
          orders[index].payed += sum;
          this.log(this.app.t`Spreaded ${sum} to order ${moment(orders[index].date).format('DD.MM.YYYY')}`);
          sum = 0;
        } else {
          sum -= sumToPay;
          orders[index].payed = orders[index].total;
          this.log(this.app.t`Spreaded ${sumToPay} to order ${moment(orders[index].date).format('DD.MM.YYYY')}`);
        }
        if (index === orders.length - 1 && sum > 0) {
          this.log(this.app.t`Rest sum ${sum}`);
          orders[index].payed += sum;
          this.log(this.app.t`Spreaded ${sum} to order ${moment(orders[index].date).format('DD.MM.YYYY')}`);
        }
        // eslint-disable-next-line no-await-in-loop
        await this.app.Order.put({
          uuid: orders[index].uuid,
          body: {
            payed: orders[index].payed,
          },
        });
      }
    }
    this.form.load();
  }
}
