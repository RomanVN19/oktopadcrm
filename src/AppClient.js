import { use } from 'katejs/client';

import { structures, title, packageName } from './structure';
import App2 from './AppClient2';
import App3 from './AppClient3';

const AppClient = parent => class Client extends use(parent, App2, App3) {
  static title = title;
  constructor(params) {
    super(params);
    console.log('assistant constructor', Client.packages);
    this.init({ structures });
    // this.allForms = {
    //   ProjectList,
    //   ProjectItem,
    //   ..
    // }
    // теперь можно модифицировать классы форм
    // через this.allForms[_form_name_]
  }
};
AppClient.package = packageName;
export default AppClient;
