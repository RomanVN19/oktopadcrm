import { use } from 'katejs/lib/client';

import { packageName, structures } from './structure';

const AppClient = parent => class Client extends use(parent) {
  constructor(params) {
    super(params);

    this.init({ structures, addToMenu: true });
  }
};
AppClient.package = packageName;
export default AppClient;
