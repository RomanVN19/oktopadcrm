import { Elements } from 'katejs/lib/client';

export default class ClientSales {
  constructor(params) {
    Object.assign(this, params);

    const style = {};
    const reportElements = [
      {
        id: 'clientSalesTitle',
        type: Elements.LABEL,
        title: 'Clients sales',
        tag: 'h4',
      },
      {
        id: 'clientSalesOrders',
        type: Elements.LABEL,
        title: 'Orders count',
      },
      {
        id: 'clientSalesOrdersSum',
        type: Elements.LABEL,
        title: 'Orders sum',
      },
      {
        id: 'clientSalesOrdersAverage',
        type: Elements.LABEL,
        title: 'Orders average sum',
      },
      {
        id: 'clientSalesData',
        type: Elements.TABLE,
        style,
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
        value: [],
      },
    ];

    if (this.report) {
      this.elements = reportElements;
      this.exec(this.clientUuid);
    } else {
      this.elements = [
        {
          type: Elements.BUTTON,
          title: 'Client sales',
          onClick: this.showModal,
        },
        {
          id: 'clientSalesModal',
          type: Elements.MODAL,
          maxWidth: 'md',
          open: false,
          elements: reportElements,
        },
      ];
    }
  }
  async exec(clientUuid) {
    const { response: data } = await this.app.Order.query({
      attributes: [
        [{ $func: { fn: 'SUM', col: 'products.amount' } }, 'amount'],
        [{ $func: { fn: 'SUM', col: 'products.sum' } }, 'sum'],
      ],
      group: [{ $col: 'products->product.uuid' }],
      order: [{ $col: 'products->product.title' }],
      where: { clientUuid },
      limit: -1,
      raw: true,
    });

    this.content.clientSalesData.value = data;

    const { response: [totals] } = await this.app.Order.query({
      noOptions: true,
      attributes: [
        [{ $func: { fn: 'COUNT', col: 'uuid' } }, 'amount'],
        [{ $func: { fn: 'SUM', col: 'total' } }, 'sum'],
      ],
      where: { clientUuid },
    });
    this.content.clientSalesOrders.title = `${this.app.t('Orders count')}: ${totals.amount}`;
    this.content.clientSalesOrdersSum.title = `${this.app.t('Orders sum')}: ${totals.sum}`;
    this.content.clientSalesOrdersAverage.title = `${this.app.t('Orders average sum')}: ${totals.amount > 0 ? (totals.sum / totals.amount).toFixed(2) : 0}`;
  }
  showModal = async () => {
    this.content.clientSalesModal.open = true;
    this.exec();
  }
}
