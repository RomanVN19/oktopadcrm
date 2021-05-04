import { makeEntitiesFromStructures, use } from 'katejs';
import { AppDoc, AppDocs, AppPrint, AppSettings, AppImport, AppUser } from 'katejs-modules';
import AppTrigger from './katejs-trigger/lib/AppServer';
import AppFields from './katejs-fields/lib/AppServer';

import SchoolModule from './modules/school/Server';

import { structures, title, packageName, Settings } from './structure';

import Order from './entities/Order';
import Payment from './entities/Payment';
import Expense from './entities/Expense';
import Receipt from './entities/Receipt';
import DealComment from './entities/DealComment';
import SettingsMixin from './entities/SettingsMixin';

const modules = {
  school: SchoolModule,
};

const AppServer = parent => class Server extends
  use(parent, AppUser, AppDoc, AppPrint, AppDocs, AppSettings, AppImport, AppTrigger, AppFields) {
  constructor(params) {
    super(params);
    this.title = title; // название приложения
    makeEntitiesFromStructures(this.entities, structures);
    this.entities = {
      ...this.entities,
      Order,
      Payment,
      Expense,
      Receipt,
      DealComment: DealComment(this.entities.DealComment),
    };
    this.entities.DebtRecord.record = true;
    this.entities.MoneyRecord.record = true;
    this.entities.ProductRecord.record = true;
    this.entities.PriceList.doc = true;
    this.entities.Invoice.doc = true;
    // this.skipAuthorization = true;
    this.setAuthParams({ jwtSecret: this.env.jwtSecret || 'default' });
    this.userRegistrationRoleTitle = 'Manager';

    this.settingsParams = Settings;

    this.showUsersList = true;
  }
  beforeInit() {
    if (super.beforeInit) super.beforeInit();
    this.entities.Settings = SettingsMixin(this.entities.Settings);

    (this.env.modules || []).forEach((module) => modules[module](this));
  }
};
AppServer.package = packageName;
export default AppServer;
