import { ProductsTable } from './OrderItem';

export default Itemform => class ReceiptItem extends Itemform {
  static doc = true;
  constructor(args) {
    super(args);
    this.ProductTable = new ProductsTable(this);
  }
};
