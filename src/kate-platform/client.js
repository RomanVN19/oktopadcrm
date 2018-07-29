import KateClient, { Elements, Form, App } from 'kate-client';
import Fields from './Fields';

const capitalize = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

const makeTitle = string => `${capitalize(string)}s`;

const elementsByFields = {
  [Fields.STRING]: Elements.INPUT,
}

const makeItemForm = entity =>
  class ItemForm extends Form {
    static title = capitalize(entity.name)
    static path = `/${entity.name}/:id`;
    constructor(sys, params) {
      super(sys);

      this.init({
        actions: [
          {
            id: '0',
            type: Elements.BUTTON,
            title: 'OK',
            onClick: this.ok,
          },
          {
            id: '1',
            type: Elements.BUTTON,
            title: 'Save',
            onClick: this.save,
          },
          {
            id: '2',
            type: Elements.BUTTON,
            title: 'Load',
            onClick: this.load,
          },
          {
            id: '3',
            type: Elements.BUTTON,
            title: 'Close',
            onClick: this.close,
          },
        ],
        elements: entity.fields.map(field => ({
          id: field.name,
          title: capitalize(field.name),
          type: elementsByFields[field.type],
        })),
      });
      if (params.id && params.id !== 'new') {
        this.uuid = params.id;
        this.load();
      }
    }
    load = async () => {
      const result = await this.app.request(`${this.app.baseUrl}/${entity.name}/${this.uuid}`);
      if (result.response) {
        this.setValues(result.response);
      }
    }
    save = async () => {
      const data = this.getValues();

      const result = await this.app.request(`${this.app.baseUrl}/${entity.name}/${this.uuid ? this.uuid : ''}`, {
        method: this.uuid ? 'PUT' : 'POST',
        body: JSON.stringify(data),
      });
      if (result.response) {
        this.uuid = result.response.uuid;
        this.app.showAlert({ type: 'success', title: 'Saved!' });
      }
    }
    close = () => {
      this.app.open(entity.formList);
    }
    ok = async () => {
      await this.save();
      this.close();
    }
  };

const makeListForm = entity =>
  class ListForm extends Form {
    static title = makeTitle(entity.name)
    static path = `/${entity.name}`;
    constructor(sys) {
      super(sys);

      this.entity = entity.name;

      this.init({
        actions: [
          {
            id: 'new',
            type: Elements.BUTTON,
            title: 'New',
            onClick: this.newItem,
          },
        ],
        elements: [
          {
            id: 'list',
            type: Elements.TABLE,
            rowClick: this.editRow,
            columns: [
              { title: 'Name', dataPath: 'title' },
            ],
            value: [],
          },
        ],
      });
      this.load();
    }
    load = async () => {
      const result = await this.app.request(`${this.app.baseUrl}/${this.entity}`);
      this.content.list.value = result.response;
    }
    newItem = () => {
      this.app.open(entity.formItem, { id: 'new' });
    }
    editRow = (row) => {
      this.app.open(entity.formItem, { id: row.uuid });
    }
  };

const makeClientApp = (app) => {
  return class ClientApp extends App {
    static path = '/';
    static title = app.title;
    constructor(sys) {
      super(sys);

      this.forms = [];
      app.entities.forEach((entity) => {
        entity.forms = entity.forms || [];
        entity.formItem = makeItemForm(entity);
        entity.formList = makeListForm(entity);
        entity.forms.push(entity.formList);
        entity.forms.push(entity.formItem);
        this.forms.push(entity.formItem); // !item first
        this.forms.push(entity.formList);
      });
      this.menu = app.entities.map(entity => ({
        title: entity.formList.title,
        form: entity.formList,
      }));

      this.baseUrl = '/api';
    }
  };
};

const KatePlatformClient = ({ app }) => {
  KateClient({ app: makeClientApp(app) });
};

export default KatePlatformClient;
