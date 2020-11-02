import { use } from 'katejs/lib/client';

import { packageName, structures } from './structure';

import ExtraFieldsListItem from './forms/ExtraFieldsListItem';
import ExtraFieldsItemMixin from './forms/ExtraFieldsItemMixin';

const AppClient = parent => class Client extends use(parent) {
  constructor(params) {
    super(params);
    this.init({ structures, addToMenu: true });
    this.forms = {
      ...this.forms,
      ExtraFieldsListItem: ExtraFieldsListItem(this.forms.ExtraFieldsListItem),
    };

    this.entitiesWithExtraFields = [];
  }
  async afterInit() {
    if (super.afterInit) {
      await super.afterInit();
    }
    await this.updateExtraFieldsLists();
    Object.keys(this.forms).forEach((formName) => {
      if (formName.endsWith('Item') && this.entitiesWithExtraFields.indexOf(this.forms[formName].entity) > -1) {
        this.forms[formName] = ExtraFieldsItemMixin(this.forms[formName]);
      }
    });
  }
  async updateExtraFieldsLists() {
    const { response: fieldsLists } = await this.ExtraFieldsList.query();
    this.fieldsLists = fieldsLists.reduce((acc, val) => {
      acc[val.entityName] = acc[val.entityName] || [];
      acc[val.entityName] = acc[val.entityName].concat(val.fieldsList);
      return acc;
    }, {});
  }
};
AppClient.package = packageName;
export default AppClient;
