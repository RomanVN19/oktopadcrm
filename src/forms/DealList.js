import { Elements, getElement } from 'katejs/lib/client';
import { structures } from '../structure';

const kanbanStyles = {
  container: {
    justifyContent: 'none',
    overflowX: 'scroll',
  },
  columnContainer: {},
  columnHeader: { fontSize: '1.25rem' },
  column: {},
  columnDragOver: { background: '#b1dede' },
  item: { background: '#088596' },
  itemDragging: { background: '#064C59'},
};


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
    const isBoard = this.app.vars.isBoardDeals === undefined ? true : this.app.vars.isBoardDeals;
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
          value: isBoard,
          title: 'Board',
          cols: 2,
          onChange: () => this.changeView(),
        },
      ],
    };

    const list = this.elements.cut('list');
    list.hidden = isBoard;
    const board = {
      hidden: !isBoard,
      id: 'board',
      type: 'Kanban',
      styles: kanbanStyles,
      itemClick: (item) => this.boardItemClick(item),
      data: [],
      onDragEnd: (params) => this.onDragEnd(params),
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
    this.app.vars.isBoardDeals = isBoard;
    if (isBoard) {
      this.setBoardData(this.content.list.value);
    }
  }
  boardItemClick(item) {
    this.app.open('DealItem', { id: item.uuid });
  }
  async load() {
    const data = await super.load();
    if (this.content.isBoard.value) {
      this.setBoardData(data);
    }
    return data;
  }
  async setBoardData(data) {
    const { response: schema } = await this.app.SaleSchema.get({ uuid: this.app.vars.schema.uuid });
    data = data.map(item => ({ ...item, id: item.uuid }));
    const columns = schema.steps.map(step => ({ ...step, title: step.name, id: step.uuid }));
    data.forEach(deal => {
      let column = columns.find(column => column.name === deal.step);
      if (!column) {
        column = columns[0];
      }
      const items = column.items || [];
      items.push(deal);
      column.items = items;
    });
    this.content.board.data = columns;
  }
  onDragEnd(params) {
    console.log('dragend', params);
  }
}
