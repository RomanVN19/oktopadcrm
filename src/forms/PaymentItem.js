import { Elements, ItemForm, getElement } from 'katejs/lib/client';
import Fields from 'katejs/lib/fields';
import { wholeDay } from '../utils';
import { structures } from '../structure';

const { Payment } = structures;


class PaymentItem extends ItemForm({ Payment }, { addActions: true, addElements: true }) {
  static doc = true;
  constructor(params) {
    super(params);
    this.elements.get('clientpaymentsCardActions').elements.push(
      {
        type: Elements.BUTTON,
        title: 'Fill by debts',
        onClick: this.fillByDebts,
      },
      {
        type: Elements.BUTTON,
        title: 'Fill by agent',
        onClick: this.openModal,
      },
      {
        id: 'agentSelectModal',
        type: Elements.MODAL,
        noScroll: true,
        open: false,
        elements: [
          getElement({
            name: 'agent',
            type: Fields.REFERENCE,
            entity: 'User',
          }, this),
          {
            ...getElement({
              name: 'agentCashbox',
              type: Fields.REFERENCE,
              entity: 'Cashbox',
            }, this),
            title: 'Cashbox',
          },
          {
            type: Elements.BUTTON,
            title: 'Apply',
            onClick: this.fillByAgent,
          },
        ],
      },
    );
    const table = this.elements.get('clientpayments');
    table.columns[2].onChange = this.sumChange;
    table.onDelete = this.sumChange;
  }
  fillByDebts = async () => {
    // заполняем по остаткам расчетом на дату документа.
    const { response: debts } = await this.app.DebtRecord.balance({
      date: this.content.date.value,
    });
    const payments = debts.map(debt => ({
      client: debt.client,
      sum: (!debt || debt.sum < 0) ? 0 : debt.sum,
    })).filter(item => item.sum);
    this.content.clientpayments.value = payments;
    this.sumChange();
  }
  sumChange = () => {
    const total = this.content.clientpayments.value
      .reduce((acc, val) => (val.sum ? acc + (+val.sum) : acc), 0);
    this.content.total.value = total.toFixed(2);
  }
  openModal = () => {
    this.content.agentSelectModal.open = true;
  }
  fillByAgent = async () => {
    const { agent, date, agentCashbox } = this.getValues();
    const where = {
      paymentToAgent: true,
      date: wholeDay(date),
      cashboxUuid: agentCashbox ? agentCashbox.uuid : null,
    };
    if (agent) {
      where.agentUuid = agent.uuid;
    }
    const { response: orders } = await this.app.Order.query({
      where,
    });
    const payments = orders.map(order => ({
      client: order.client,
      sum: order.payment,
    })).filter(item => item.sum);
    this.content.clientpayments.value = payments;
    this.sumChange();
    this.content.agentSelectModal.open = false;
  }
}

export default PaymentItem;
