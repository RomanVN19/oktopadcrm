import { use } from 'katejs/lib/client';
import AppUser from 'katejs-user/lib/AppClient';
import AppDoc from 'katejs-doc/lib/AppClient';
import AppDocs from 'katejs-docs/lib/AppClient';
import AppPrint from 'katejs-print/lib/AppClient';
import AppSettings from 'katejs-settings/lib/AppClient';

import { structures, title, packageName, Settings } from './structure';

import NoteItem from './forms/NoteItem';
import NoteList from './forms/NoteList';
import ProductSalesReport from './forms/ProductSalesReport';
import OrdersToDeliverReport from './forms/OrderToDeliverReport';
import OrderList from './forms/OrderList';
import OrderItem from './forms/OrderItem';
import PaymentItem from './forms/PaymentItem';
import CashFlow from './forms/CashFlow';
import OrderDynamics from './forms/OrderDynamics';
import ClientListMixin from './forms/ClientListMixin';
import ClientItemMixin from './forms/ClientItemMixin';
import Dashboard from './forms/Dashboard';

// agent app
import OrdersUnassigned from './forms/OrdersUnassigned';
import OrdersMy from './forms/OrdersMy';
import OrderAgent from './forms/OrderAgent';

import updates from './updates';
import logo from './assistant.svg';
import icons from './icons';

import env from './front.env.json';

const AppClient = parent => class Client extends
  use(parent, AppUser, AppDoc, AppPrint, AppSettings, AppDocs) {
  static title = title;
  static path = '/app';
  static primaryColor = '#085d96';
  static logo = logo;
  constructor(params) {
    super(params);
    this.baseUrl = env.apiUrl || '/api';

    this.menu.unshift(
      {
        form: 'ProductSalesReport',
        title: 'Product sales',
      },
      {
        form: 'OrdersToDeliverReport',
        title: 'Orders to deliver',
      },
      {
        form: 'CashFlow',
        title: 'Cash flow',
      },
      {
        form: 'OrderDynamics',
        title: 'Order dynamics',
      },
      {
        form: 'OrdersUnassigned',
        title: 'Unassigned orders',
        rule: {
          entity: 'Order',
          method: 'take',
        },
      },
      {
        form: 'OrdersMy',
        title: 'My orders',
        rule: {
          entity: 'Order',
          method: 'take',
        },
      },
    );

    this.init({ structures, addToMenu: true });
    this.forms = {
      ...this.forms,
      NoteItem,
      NoteList,
      OrderList,
      OrderItem,
      PaymentItem,
      ClientList: ClientListMixin(this.forms.ClientList),
      ClientItem: ClientItemMixin(this.forms.ClientItem),

      ProductSalesReport,
      OrdersToDeliverReport,
      CashFlow,
      OrderDynamics,
      Dashboard,

      OrdersUnassigned,
      OrdersMy,
      OrderAgent,
    };

    this.forms.PaymentList.doc = true;
    this.forms.ExpenseList.doc = true;
    this.forms.ExpenseItem.doc = true;

    this.saveAuth = true;
    this.docsContent.push(...updates);

    this.userRegistration = {};
    this.userAuthorization = {
      usernameTitle: 'E-mail',
    };

    this.docsAccessFilter = (docsItem) => {
      if (docsItem.entity === 'System') return true;
      if (docsItem.entity === 'Agent app') return this.allow('Order', 'put') || this.allow('Order', 'take');
      return this.allow(docsItem.entity, 'put');
    };

    this.menu.unshift({
      title: 'Dashboard',
      form: 'Dashboard',
    });

    this.menu.forEach((item) => {
      if (icons[item.form]) {
        // eslint-disable-next-line no-param-reassign
        item.icon = icons[item.form];
      }
    });

    this.settingsParams = Settings;
  }
};
AppClient.package = packageName;
export default AppClient;
