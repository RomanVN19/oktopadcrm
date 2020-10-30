import { use } from 'katejs/lib/client';

import { packageName, structures } from './structure';

import ExtraFieldsListItem from './forms/ExtraFieldsListItem';

const AppClient = parent => class Client extends use(parent) {
  constructor(params) {
    super(params);
    this.init({ structures, addToMenu: true });
    this.forms = {
      ...this.forms,
      ExtraFieldsListItem: ExtraFieldsListItem(this.forms.ExtraFieldsListItem),
    };
  }
};
AppClient.package = packageName;
export default AppClient;
