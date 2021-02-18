import { ProductsTable } from './OrderItem';
import { Elements } from 'katejs/lib/client';
import moment from 'moment';

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
      date: moment(doc.date).format('DD.MM.YYYY'),
      ...this.app.settings,
      products: doc.products.map(item => ({
        ...item,
        price: item.price.toFixed(2),
        sum: item.sum.toFixed(2),
      })),
      total: doc.total.toFixed(2),
    };
    this.app.print({ template: 'Invoice', data });
  }
}

//   <!doctype html>
// <html lang="en">
//   <head>
//   <!-- Required meta tags -->
// <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//
//   <!-- Bootstrap CSS -->
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//
//   <title>Счет</title>
//   <style>
//   html, body {
//   width: 210mm;
//   height: 297mm;
// }
// </style>
// </head>
// <body>
//
// <table width="100%" style="font-family: Arial;">
//   <tr style="display: none;">
//   <td style="width: 68%; padding: 20px 0;">
//   <div style="text-align: justify; font-size: 11pt;">Внимание! Оплата данного счета означает согласие с условиями поставки товара. Счет действителен в течение 5(пяти) банковских дней, не считая дня выписки счета. Уведомление об оплате  обязательно, в противном случае НЕ ГАРАНТИРУЕТСЯ наличие товара на складе. Товар отпускается по факту прихода денег на р/с Поставщика, самовывозом, при наличии доверенности и паспорта.</div>
// </td>
// <td style="width: 32%; text-align: center; padding: 30px 0;"><img src="<!--Лого url-->" style="width: 70%;"></td>
//   </tr>
//
//   </table>
//
//
//   <table width="100%" border="2" style="border-collapse: collapse; width: 100%; font-family: Arial;" cellpadding="2" cellspacing="2">
//   <tr style="">
//   <td colspan="2" rowspan="2" style="min-height:13mm; width: 105mm;">
//   <table width="100%" border="0" cellpadding="0" cellspacing="0" style="height: 13mm;">
//   <tr>
//   <td valign="top">
//   <div>{{ companyBankName }}</div>
// </td>
// </tr>
// <tr>
// <td valign="bottom" style="height: 3mm;">
//   <div style="font-size:10pt;">Банк получателя</div>
// </td>
// </tr>
// </table>
// </td>
// <td style="min-height:7mm;height:auto; width: 25mm;">
//   <div>БИK</div>
//   </td>
//   <td rowspan="2" style="vertical-align: top; width: 60mm;">
//   <div style=" height: 7mm; line-height: 7mm; vertical-align: middle;">{{companyBankCode}}</div>
// <div>{{companyBankCorrAccount}}</div>
// </td>
// </tr>
// <tr>
// <td style="width: 25mm;">
//   <div>Сч. №</div>
// </td>
// </tr>
// <tr>
// <td style="min-height:6mm; height:auto; width: 50mm;">
//   <div>ИНН {{companyInn}}</div>
// </td>
// <td style="min-height:6mm; height:auto; width: 55mm;">
//   <div>КПП {{companyKpp}}</div>
// </td>
// <td rowspan="2" style="min-height:19mm; height:auto; vertical-align: top; width: 25mm;">
//   <div>Сч. №</div>
// </td>
// <td rowspan="2" style="min-height:19mm; height:auto; vertical-align: top; width: 60mm;">
//   <div>{{companyBankAccount}}</div>
// </td>
// </tr>
// <tr>
// <td colspan="2" style="min-height:13mm; height:auto;">
//
//   <table border="0" cellpadding="0" cellspacing="0" style="height: 13mm; width: 105mm;">
//   <tr>
//   <td valign="top">
//   <div>{{companyName}}</div>
// </td>
// </tr>
// <tr>
// <td valign="bottom" style="height: 3mm;">
//   <div style="font-size: 10pt;">Получатель</div>
//   </td>
//   </tr>
//   </table>
//
//   </td>
//   </tr>
//   </table>
//   <br/>
//
//   <div style="font-weight: bold; font-size: 25pt; padding-left:5px; font-family: Arial;">
//   Счет № {{number}} от {{date}}</div>
// <br/>
//
// <div style="background-color:#000000; width:100%; font-size:1px; height:2px;">&nbsp;</div>
//
// <table width="100%" style="font-family: Arial;">
//   <tr>
//   <td style="width: 30mm; vertical-align: top;">
//   <div style=" padding-left:2px; ">Поставщик:    </div>
// </td>
// <td>
// <div style="font-weight:bold;  padding-left:2px;">
//   {{companyName}} ИНН  {{companyInn}}, КПП {{companyKpp}}<br>
// <span style="font-weight: normal;"><!--  address --></span>          </div>
// </td>
// </tr>
// <tr>
// <td style="width: 30mm; vertical-align: top;">
//   <div style=" padding-left:2px;">Покупатель:    </div>
// </td>
// <td>
// <div style="font-weight:bold;  padding-left:2px;">
//   {{client.title}}<br><span style="font-weight: normal;"><!-- address--></span>            </div>
// </td>
// </tr>
// </table>
//
//
// <table border="2" width="100%" cellpadding="2" cellspacing="2" style="border-collapse: collapse; width: 100%; font-family: Arial;">
//   <thead>
//   <tr>
//   <th style="width:13mm; ">№</th>
//
// <th>Товары (работы, услуги)</th>
// <th style="width:20mm; ">Кол-во</th>
//   <!--        <th style="width:17mm; ">Ед.</th> -->
//   <th style="width:27mm;  ">Цена</th>
//   <th style="width:27mm;  ">Сумма</th>
//   </tr>
//   </thead>
//   <tbody >
//   {{#each products}}
// <tr>
// <td style="width:13mm; ">{{ rowNumber }}</td>
//
// <td> {{ product.title }}</td>
// <td style="width:20mm; text-align: right;">{{ amount }}</td>
// <!--        <td style="width:17mm; ">Шт.</td> -->
//   <td style="width:27mm; text-align: right; ">{{ price }}</td>
// <td style="width:27mm; text-align: right; ">{{ sum }}</td>
// </tr>
// {{/ each}}
// </tbody>
// </table>
//
// <table style="font-family: Arial;" border="0" width="100%" cellpadding="1" cellspacing="1">
//   <tr>
//   <td></td>
//   <td style="width:27mm; font-weight:bold;  text-align:right;">Итого:</td>
// <td style="width:27mm; font-weight:bold;  text-align: center; ">{{ total }}</td>
// </tr>
// <!--
// <tr>
// <td></td>
// <td style="width:27mm; font-weight:bold;  text-align:right;">Итого НДС:</td>
// <td style="width:27mm; font-weight:bold;  text-align: center; ">0.00</td>
//   </tr>
//   -->
//   <tr>
//   <td></td>
//   <td style="width:37mm; font-weight:bold;  text-align:right;">Всего к оплате:</td>
//   <td style="width:27mm; font-weight:bold;  text-align: center; ">{{ total }}</td>
//   </tr>
//   </table>
//
//   <br />
//   <div style="font-family: Arial;">
//     Всего наименований {{products.length}} на сумму {{total}} рублей.<br />
//   <!-- Ноль рублей 00 копеек --></div>
//   <br /><br />
//   <div style="background-color:#000000; width:100%; font-size:1px; height:2px;">&nbsp;</div>
//   <br/>
//   <!--
//   <div style="font-family: Arial; font-size: 10pt;">
//     1. Счет действителен в течении 5 (пяти) банковских дней, не считая дня выписки счета. В случае нарушения срока оплаты сохранение цены на товар и наличие товара на складе НЕ ГАРАНТИРУЕТСЯ.<br />
//   2. Оплата данного счета означает согласие с условиями изложенными в п.1</div>
//   <br />
//   -->
//   <br />
//   <div style="background: url('<!--url печати в png сюда-->');  background-repeat: no-repeat; padding: 30px 10px; width: 400px; height: 250px;">
//     <div>Руководитель ______________________ </div>
//   <br/>  <br /><br />
//
//   <div>Главный бухгалтер ______________________</div>
//   <br/>
//
//   <div style="width: 85mm;text-align:center;">М.П.</div>
//     <br/>
//     </div>
//     <br/>  <br /><br /><br/>  <br /><br /><br/>  <br /><br />
//
//     </body>
//     </html>
