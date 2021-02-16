import { ProductsTable } from './OrderItem';
import { Elements } from 'katejs/lib/client';

export default Form => class InvoiceItem extends Form {
  static doc = true;
  constructor(args) {
    super(args);
    this.productTable = new ProductsTable(this);
    this.actions.push({
      type: Elements.BUTTON,
      title: 'Print',
      onClick: this.print,
    });
  }
  print = async () => {
    const { response: doc } = await this.app.Invoice.get({ uuid: this.uuid });
    const data = {
      ...doc,
      companyName: this.app.settings.companyName,
    };
    this.app.print({ template: 'Invoice', data });
  }
}
