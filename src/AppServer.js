import { makeEntitiesFromStructures, use, Fields } from 'katejs';
import AppUser from 'katejs-user/lib/AppServer';
import AppDoc from 'katejs-doc/lib/AppServer';
import AppDocs from 'katejs-docs/lib/AppServer';
import AppPrint from 'katejs-print/lib/AppServer';
import AppSettings from 'katejs-settings/lib/AppServer';
import { structures, title, packageName, Settings } from './structure';

import Order from './entities/Order';
import Payment from './entities/Payment';
import Expense from './entities/Expense';

const AppServer = parent => class Server extends
  use(parent, AppUser, AppDoc, AppPrint, AppDocs, AppSettings) {
  constructor(params) {
    super(params);
    this.title = title; // название приложения
    makeEntitiesFromStructures(this.entities, structures);
    this.entities = {
      ...this.entities,
      Order,
      Payment,
      Expense,
    };
    this.entities.DebtRecord.record = true;
    this.entities.MoneyRecord.record = true;
    // this.skipAuthorization = true;
    this.setAuthParams({ jwtSecret: this.env.jwtSecret || 'default' });
    this.userRegistrationRoleTitle = 'Manager';

    this.settingsParams = Settings;
  }
};
AppServer.package = packageName;
export default AppServer;
