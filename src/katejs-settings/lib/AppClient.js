import { use } from 'katejs/lib/client';
import AppUser from 'katejs-user/lib/AppClient';
import { packageName } from './structure';
import Settings from './forms/Settings';
import icons from './icons';


const AppClient = parent => class Client extends use(parent, AppUser) {
  constructor(args) {
    super(args);
    this.forms.Settings = Settings;
    this.makeApiLinks({ entities: ['Settings'] });
    this.menu.push({
      form: 'Settings',
      title: 'Settings',
      rule: {
        entity: 'Settings',
        method: 'put',
      },
      icon: icons.Settings,
    });
  }
  async afterInit() {
    if (super.afterInit) super.afterInit();
    const { response: settings } = await this.Settings.get();
    this.settings = settings;
  }
};

AppClient.package = packageName;
export default AppClient;