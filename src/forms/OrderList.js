import { ListForm, Elements } from 'katejs/lib/client';
import { structures, OrderStatuses } from '../structure';

const { Order } = structures;

export default class OrderList extends
  ListForm({ Order }, { addActions: true, addElements: true }) {
  static entity = 'Order'; // for menu filter
  static doc = true;
  constructor(params) {
    super(params);
    const list = this.elements.get('list');
    list.columns.find(column => column.dataPath === 'comment').maxWidth = 400;
    list.columns.find(column => column.dataPath === 'status').format =
      val => this.app.t((OrderStatuses.find(item => item.value === val) || {}).title || '');
    // this.spreadPayment = new SpreadPayment({ form: this });
    this.elements.unshift({
      type: Elements.GRID,
      elements: [
        {
          id: 'client',
          title: 'Client (name, phone, address)',
          type: Elements.SELECT,
          getOptions: this.clientQuery,
          onChange: this.clientChange,
          value: this.app.ordersClientFilter,
          cols: 4,
        },
      ],
    });
    list.columns.find(column => column.dataPath === 'paymentToAgent').title = 'To agent';
    list.columns.find(column => column.dataPath === 'paymentToAgent').format = val => (val ? '+' : '');

    this.filters = this.filters || { clientUuid: (this.app.ordersClientFilter && this.app.ordersClientFilter.uuid) || undefined };
  }
  clientQuery = async (query) => {
    const { response } = await this.app.Client.query({
      where: { $or: [
        { title: { $like: `%${query}%` } },
        { phone: { $like: `%${query}%` } },
        { address: { $like: `%${query}%` } },
      ] },
    });
    return (response || []).map(item => ({ ...item, title: `${item.title} (${item.phone}, ${item.address})` }));
  }
  clientChange = (val) => {
    this.filters.clientUuid = (val && val.uuid) || undefined;
    this.app.ordersClientFilter = val;
    this.load();
  }
}
