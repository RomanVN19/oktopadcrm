import { Elements } from 'katejs/lib/client';
import ClientDebt from './ClientDebt';
import ClientSales from './ClientSales';

export default ItemForm => class Clientitem extends ItemForm {
  constructor(args) {
    super(args);

    this.clientDebt = new ClientDebt({
      app: this.app,
      content: this.content,
      clientUuid: args.params.id,
      report: true,
    });

    this.clientSales = new ClientSales({
      app: this.app,
      content: this.content,
      clientUuid: args.params.id,
      report: true,
    });

    this.elements.push({
      type: Elements.GRID,
      elements: [
        {
          type: Elements.GROUP,
          cols: 6,
          elements: this.clientDebt.elements,
        },
        {
          type: Elements.GROUP,
          cols: 6,
          elements: this.clientSales.elements,
        },
      ],
    });
  }
}