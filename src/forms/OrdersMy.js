// import { Elements } from 'katejs/lib/client';
import OrdersUnassigned from './OrdersUnassigned';

export default class OrdersMy extends OrdersUnassigned {
  static title = 'My orders';
  constructor(args) {
    super(args, true);
  }
  afterInit() {
    this.load(null, this.app.user.uuid, 2, true); // only assigned
  }
}
