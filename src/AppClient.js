import { use } from 'katejs/lib/client';
import AppService, { serviceAdminRule } from 'katejs-service/lib/ServiceClient';
import { structures, title, packageName } from './structure';
import NoteItemForm from './forms/NoteItem';
import NoteListForm from './forms/NoteList';

const AppClient = parent => class Client extends use(parent, AppService) {
  static title = title;
  constructor(params) {
    super(params);
    this.init({ structures, addToMenu: true });
    this.baseUrl = 'http://localhost:2000/api';
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
    this.checkSavedAuth();
  }
};
AppClient.package = packageName;
export default AppClient;
