import { use } from 'katejs/lib/client';
import AppService, { serviceAdminRule } from 'katejs-service/lib/AppClient';
import { structures, title, packageName } from './structure';
import NoteItemForm from './forms/NoteItem';
import NoteListForm from './forms/NoteList';
import logo from './assistant.svg';

import env from './env.json';

const AppClient = parent => class Client extends use(parent, AppService) {
  static title = title;
  static path = '/app';
  static primaryColor = '#085d96';
  static logo = logo;
  constructor(params) {
    super(params);
    this.init({ structures, addToMenu: true });
    this.baseUrl = env.apiUrl || '/api';
    this.forms.NoteItem = NoteItemForm(this.forms.NoteItem);
    this.forms.NoteList = NoteListForm(this.forms.NoteList);
    this.menu = [
      {
        form: 'NoteList',
        title: 'Notes',
      },
      {
        form: 'RoleList',
        title: 'Roles',
        rule: { rule: serviceAdminRule },
      },
      {
        form: 'UserList',
        title: 'Users',
        rule: { rule: serviceAdminRule },
      },
    ];
    this.saveAuth = true;
  }
};
AppClient.package = packageName;
export default AppClient;
