import { ItemForm, Elements } from 'katejs/lib/client';

import ClientSelection from './ClientSelection';

import { structures, OrderStatuses } from '../structure';

const { Order } = structures;

export class ProductsTable {
  constructor(args) {
    Object.assign(this, args);

    this.elements.get('products').columns[1].onChange = this.productChange;
    this.elements.get('products').columns[1].openOnFocus = true;
    this.elements.get('products').columns[2].onChange = this.rowChange;
    this.elements.get('products').columns[3].onChange = this.rowChange;
  }
  rowChange = (row) => {
    // eslint-disable-next-line no-param-reassign
    row.sum.value = (row.amount.value * row.price.value).toFixed(2);
    this.sumChange();
  }
  productChange = (row) => {
    const { price, amount, product } = row;
    price.value = product.value.price;
    if (!row.amount.value) {
      amount.value = 1;
    }
    this.rowChange(row);
  }
  sumChange() {
    const total = this.content.products.value
      .reduce((acc, val) => (val.sum ? acc + (+val.sum) : acc), 0);
    if (this.onSumChange) {
      this.onSumChange(total.toFixed(2));
    } else {
      this.content.total.value = total.toFixed(2);
    }
  }
}

class OrderItem extends ItemForm({ Order }, { addActions: true, addElements: true }) {
  static doc = true;
  constructor(params) {
    super(params);
    this.clientSelection = new ClientSelection({
      form: this,
      replaceSelect: true,
      changePhoneAddress: true,
      openOnFocus: true,
    });
    this.productsTable = new ProductsTable({
      elements: this.elements,
      content: this.content,
    });
    this.elements.set('phone', {
      type: Elements.GRID,
      elements: [
        { ...this.elements.get('phone'), cols: 4 },
        { ...this.elements.get('address'), cols: 8 },
      ],
    });
    this.elements.splice(this.elements.findIndex(item => item.id === 'address'), 1);

    this.elements.set('cashbox', {
      type: Elements.GRID,
      elements: [
        {
          type: Elements.LABEL,
          title: 'Apply payment',
          style: { marginTop: 28, textAlign: 'right' },
          cols: 4,
        },
        {
          ...this.elements.get('payment'),
          cols: 4,
        },
        {
          ...this.elements.get('cashbox'),
          openOnFocus: true,
          cols: 4,
        },
      ],
    });
    this.elements.splice(this.elements.findIndex(item => item.id === 'payment'), 1);
    this.elements.set('status', {
      id: 'status',
      type: Elements.SELECT,
      title: 'Status',
      options: OrderStatuses,
      selectValue: true,
      value: 1,
      openOnFocus: true,
    });

    this.elements.set('paymentToAgent', {
      type: Elements.GRID,
      elements: [
        {
          ...this.elements.get('status'),
          cols: 4,
        },
        {
          ...this.elements.get('paymentToAgent'),
          cols: 4,
        },
        {
          ...this.elements.get('agent'),
          cols: 4,
        },
      ],
    });
    this.elements.splice(this.elements.findIndex(item => item.id === 'agent'), 2);

    this.actions.push({
      type: Elements.BUTTON,
      title: 'Print',
      onClick: this.print,
    });
  }
  print = async () => {
    const { response: doc } = await this.app.Order.get({ uuid: this.uuid });
    const data = {
      ...doc,
      companyName: this.app.settings.companyName,
    };
    this.app.print({ template: 'Order', data });
  }
}

export default OrderItem;

// base print template
// < !doctype html >
//   <html lang="en">
//     <head>
//       <!-- Required meta tags -->
//     <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//           <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

//             <title>{{ Order }}</title>
//             <style>
//               html, body {
//                 width: 210mm;
//               height: 297mm;
//             }
// </style>
//   </head>
//           <body>
//             <div class="container">
//               <h3>{{ title }}</h3>
//               <p>Компания: {{ companyName }}</p>
//               <p>Клиент: {{ client.title }}</p>
//               <table class="table">
//                 <tr>
//                   <td>Товар</td>
//                   <td>Кол-во</td>
//                   <td>Цена</td>
//                   <td>Сумма</td>
//                 </tr>
//                 {{#each products}}
//                 <tr>
//                   <td>{{ product.title }}</td>
//                   <td>{{ amount }}</td>
//                   <td>{{ price }}</td>
//                   <td>{{ sum }}</td>
//                 </tr>
//                 {{/ each}}
//                 <tr>
//                   <td colspan="3">Итого</td>
//                   <td>{{ total }}</td>
//                 </tr>
//               </table>

//             </div>
//           </body>
// </html>
