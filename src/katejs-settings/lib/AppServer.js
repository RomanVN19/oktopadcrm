import { use, makeEntitiesFromStructures } from 'katejs';
import AppUser from 'katejs-user/lib/AppServer';
import { packageName, structures } from './structure';

import SettingsMixin from './entities/SettingsMixin';

const AppServer = parent => class Server extends use(parent, AppUser) {
  constructor(params) {
    super(params);
    makeEntitiesFromStructures(this.entities, structures);
    // GET required user, so it shoulud be allowed, otherwise it will cause error
    // while token expired
    // this.publicAccessRules.push({
    //   entity: 'Settings',
    //   method: '__get',
    //   access: true,
    // });
  }
  beforeInit() {
    if (super.beforeInit) super.beforeInit();
    // add settings fields from app
    this.entities.Settings = SettingsMixin(this.entities.Settings, this.settingsParams);
  }
};
AppServer.package = packageName;
export default AppServer;
