import { ItemForm } from 'katejs/lib/client';
import { structures } from '../structure';

const { Expense } = structures;


class ExpenseItem extends ItemForm({ Expense }, { addActions: true, addElements: true }) {
  static doc = true;
  constructor(params) {
    super(params);
    this.elements.get('cashbox').openOnFocus = true;
  }
}

export default ExpenseItem;
