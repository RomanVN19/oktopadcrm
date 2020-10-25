import { makeEntitiesFromStructures, use } from 'katejs';
import { AppDoc, AppDocs, AppPrint, AppSettings, AppImport, AppUser } from 'katejs-modules';
import AppTrigger from './katejs-trigger/lib/AppServer';

import { structures, title, packageName, Settings } from './structure';

import Order from './entities/Order';
import Payment from './entities/Payment';
import Expense from './entities/Expense';
import Receipt from './entities/Receipt';

const AppServer = parent => class Server extends
  use(parent, AppUser, AppDoc, AppPrint, AppDocs, AppSettings, AppImport, AppTrigger) {
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
    };
    this.entities.DebtRecord.record = true;
    this.entities.MoneyRecord.record = true;
    this.entities.ProductRecord.record = true;
    this.entities.PriceList.doc = true;
    // this.skipAuthorization = true;
    this.setAuthParams({ jwtSecret: this.env.jwtSecret || 'default' });
    this.userRegistrationRoleTitle = 'Manager';

    this.settingsParams = Settings;
  }
};
AppServer.package = packageName;
export default AppServer;
