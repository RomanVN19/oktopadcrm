import { Elements, getElement } from 'katejs/lib/client';
import { structures } from '../structure';

export default Form => class DealList extends  Form {
  constructor(args) {
    super(args);
    this.actions = undefined;
    const schema = this.app.vars.schema || this.app.settings.defaultSchema;
    this.app.vars.schema = schema;
    const schemaFilter = {
      ...getElement(structures.Deal.fields.find(item => item.name === 'schema'), this),
      value: schema,
      onChange: () => this.schemaChange(),
    };
    const topPanel = {
      type: Elements.GRID,
      elements: [
        {
          type: Elements.BUTTON,
          title: 'New Deal',
          onClick: () => this.app.open('DealItem', { id: 'new' }),
          cols: 2,
        },
        schemaFilter,
        {
          ...getElement(structures.Deal.fields.find(item => item.name === 'user'), this),
          value: this.app.user,
          onChange: () => this.userChange(),
        },
        {
          type: Elements.LABEL,
          title: 'List',
          style: {
            textAlign: 'right',
            fontWeight: 'bolder',
            marginTop: 12,
          },
          tag: 'p',
          cols: 2,
        },
        {
          type: Elements.SWITCH,
          id: 'isBoard',
          value: true,
          title: 'Board',
          cols: 2,
          onChange: () => this.changeView(),
        },
      ],
    };

    const list = this.elements.cut('list');
    list.hidden = true;
    const board = {
      id: 'board',
      type: 'Kanban',
    };
    this.elements.push(topPanel, list, board);

    this.setFilters(true);
  }
  schemaChange() {
    this.app.vars.schema = this.content.schema.value;
    this.setFilters();
    this.load();
  }
  userChange() {
    this.setFilters();
    this.load();
  }
  setFilters(init) {
    this.filters = {
      schemaUuid: this.app.vars.schema && this.app.vars.schema.uuid,
    };
    let user = this.app.user;
    if (!init) {
      user = this.content.user.value;
    }
    if (user) {
      this.filters.userUuid = user.uuid;
    }
  }
  changeView() {
    const isBoard = this.content.isBoard.value;
    this.content.list.hidden = isBoard;
    this.content.board.hidden = !isBoard;
  }
}
