import { Elements, ItemForm } from 'katejs/lib/client';
import { structures } from '../structure';

const { Payment } = structures;


class PaymentItem extends ItemForm({ Payment }, { addActions: true, addElements: true }) {
  static doc = true;
  constructor(params) {
    super(params);
    this.elements.get('cashbox').openOnFocus = true;
    this.elements.get('clientpaymentsCardActions').elements.push(
      {
        type: Elements.BUTTON,
        title: 'Fill by debts',
        onClick: this.fillByDebts,
      },
    );
    const table = this.elements.get('clientpayments');
    table.columns[2].onChange = this.sumChange;
    table.onDelete = this.sumChange;
    table.columns[1].getOptions = this.getOptionsClient;
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
  getOptionsClient = async (query) => {
    const { response } = await this.app.Client.query({
      where: {
        $or: [
          { title: { $like: `%${query || ''}%` } },
          { phone: { $like: `%${query || ''}%` } },
          { address: { $like: `%${query || ''}%` } },
        ],
      },
    });
    return (response || []).map(item => ({ ...item, title: `${item.title} (${item.phone}, ${item.address})` }));
  }
}

export default PaymentItem;
