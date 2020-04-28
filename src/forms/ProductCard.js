import { Elements } from 'katejs/lib/client';

export default class ProductCard {
  constructor(args) {
    Object.assign(this, args);
    this.elements = [
      {
        id: 'pcTitle',
        title: 'Product card',
        type: Elements.LABEL,
        tag: 'h3',
      },
      {
        id: 'pcRest',
        type: Elements.LABEL,
        title: 'Rest: ',
        tag: 'h5',
      },
      {
        id: 'pcTable',
        type: Elements.TABLE,
        columns: [
          { title: 'Document', dataPath: 'document' },
          { title: 'Increase', dataPath: 'increase' },
          { title: 'Decrease', dataPath: 'decrease' },
        ],
        rowClick: this.rowClick,
      },
    ];
    if (this.productUuid) {
      this.query();
    }
  }
  async query() {
    const { response: data } = await this.app.ProductRecord.turnover({
      where: { productUuid: this.productUuid },
    });
    const rest = data.reduce((acc, val) => acc + val.amount, 0);
    this.content.pcRest.title = this.app.t`Rest: ${rest}`;

    this.content.pcTable.value = data.map(item => ({
      document: item.docTitle,
      increase: item.amount > 0 ? item.amount : '',
      decrease: item.amount < 0 ? 0 - item.amount : '',
      docUuid: item.docUuid,
      entity: item.entity,
    }));
  }
  rowClick = (row) => {
    this.app.open(`${row.entity}Item`, { id: row.docUuid });
  }
}
