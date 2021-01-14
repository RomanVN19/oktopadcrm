import { Elements, getElement } from 'katejs/lib/client';
import { structures } from '../structure';

export const kanbanStyles = {
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

const BOARD_COL_PREFIX = '$$col_';

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
    const isHideClosed = this.app.vars.isHideClosedDeals === undefined ? true : this.app.vars.isHideClosedDeals;
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
          disabled: !this.app.allow('SaleSchema', 'put'),
        },
        {
          type: Elements.LABEL,
          title: 'List',
          style: {
            textAlign: 'right',
            fontWeight: 'bolder',
            marginTop: 22,
          },
          tag: 'p',
          cols: 1,
        },
        {
          type: Elements.GROUP,
          div: true,
          style: {
            marginTop: 10,
          },
          cols: 1,
          elements: [
            {
              type: Elements.SWITCH,
              id: 'isBoard',
              value: isBoard,
              title: 'Board',
              onChange: () => this.changeView(),
            },
          ],
        },
        {
          type: Elements.CHECKBOX,
          id: 'isHideClosed',
          value: isHideClosed,
          cols: 2,
          title: 'Hide Closed',
          onChange: () => this.hideClosedChange(),
          style: {
            marginLeft: 25,
          },
        },
      ],
    };

    const list = this.elements.cut('list');
    list.columns.splice(list.columns.findIndex(col => col.dataPath === "contact"), 1);
    const stepIndex = list.columns.find(col => col.dataPath === "stepIndex");
    stepIndex.format = (index) => this.stepFormat(index);
    stepIndex.title = 'Step';
    const dealClosed = list.columns.find(col => col.dataPath === "dealClosed");
    dealClosed.title = 'Closed';
    dealClosed.format = (val) => val ? '✔' : '';
    list.hidden = isBoard;
    const board = {
      hidden: !isBoard,
      id: 'board',
      type: 'Kanban',
      styles: kanbanStyles,
      itemClick: (item) => this.boardItemClick(item),
      data: [],
      onDragEnd: (params) => this.onDragEnd(params),
      orderSaveKey: 'dealsOrder',
    };
    this.elements.push(topPanel, list, board);
    const userColIndex = list.columns.findIndex(col => col.dataPath === 'user');
    this.userColumn = list.columns.splice(userColIndex, 1)[0];
    const closedColIndex = list.columns.findIndex(col => col.dataPath === 'dealClosed');
    this.closedColumn =  list.columns.splice(closedColIndex, 1)[0];
    this.setFilters(true);
  }
  schemaChange() {
    this.app.vars.schema = this.content.schema.value;
    this.setFilters();
    this.load();
  }
  userChange() {
    this.setFilters();
    const columns = this.content.list.columns;
    const userColIndex = columns.findIndex(item => item.dataPath === 'user');
    if (!this.content.user.value) {
      if (userColIndex === -1) {
        columns.push(this.userColumn);
      }
    } else {
      if (userColIndex !== -1) {
        columns.splice(userColIndex, 1);
      }
    }
    this.content.list.columns = columns;
    this.load();
  }
  setFilters(init) {
    this.filters = {
      schemaUuid: this.app.vars.schema && this.app.vars.schema.uuid,
    };
    let user = this.app.user;
    let hideClosed = this.app.vars.isHideClosedDeals !== undefined ? this.app.vars.isHideClosedDeals : true;
    if (!init) {
      user = this.content.user.value;
      hideClosed = this.content.isHideClosed.value;
    }
    if (user) {
      this.filters.userUuid = user.uuid;
    }
    if (hideClosed) {
      this.filters.dealClosed = false;
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
    const { response: schema } = await this.app.SaleSchema.get({ uuid: this.app.vars.schema.uuid });
    this.schema = schema;
    this.content.list.value = data;
    if (this.content.isBoard.value) {
      this.setBoardData(data);
    }
    return data;
  }
  async setBoardData(data) {
    data = data.map(item => ({ ...item, id: item.uuid }));
    // идентификаторы сделаны индексами чтобы при изменении схемы
    // сохранялся порядок
    const columns = this.schema.steps.map((step, index) => ({ ...step, title: step.name, id: `${BOARD_COL_PREFIX}${index}` }));
    data.forEach(deal => {
      let column = columns.find((column, index) => index === deal.stepIndex);
      if (!column) {
        column = columns[0];
      }
      const items = column.items || [];
      items.push(deal);
      column.items = items;
    });
    this.content.board.data = columns;
  }
  async onDragEnd(params) {
    const data = this.content.board.data;
    if (params.destination.droppableId !== params.source.droppableId) {
      // change step
      const targetStepIndex = +params.destination.droppableId.replace(BOARD_COL_PREFIX, '');
      await this.app.Deal.put({ uuid: params.draggableId, body: { stepIndex: targetStepIndex }});
      this.load();
    }
  }
  stepFormat(index) {
    return this.schema && this.schema.steps[index].name;
  }
  hideClosedChange() {
    this.setFilters();
    this.app.vars.isHideClosedDeals = this.content.isHideClosed.value;
    const columns = this.content.list.columns;
    const closedColIndex = columns.findIndex(item => item.dataPath === 'dealClosed');
    if (!this.content.isHideClosed.value) {
      if (closedColIndex === -1) {
        columns.push(this.closedColumn);
      }
    } else {
      if (closedColIndex !== -1) {
        columns.splice(closedColIndex, 1);
      }
    }
    this.content.list.columns = columns;
    this.load();
  }
}
