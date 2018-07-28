import KateClient, { Elements, Form, App } from 'kate-client';

const capitalize = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

const makeTitle = string => `${capitalize(string)}s`;

const makeListForm = entity =>
  class ListForm extends Form {
    static title = makeTitle(entity.name)
    static path = `/${entity.name}`;
    constructor(sys) {
      super(sys);

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
      // this.load();
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
        entity.formList = makeListForm(entity);
        entity.forms = entity.forms || [];
        entity.forms.push(entity.formList);
        this.forms.push(entity.formList);
      });
      this.menu = app.entities.map(entity => ({
        title: entity.formList.title,
        form: entity.formList,
      }));
    }
  };
};

const KatePlatformClient = ({ app }) => {
  KateClient({ app: makeClientApp(app) });
};

export default KatePlatformClient;
