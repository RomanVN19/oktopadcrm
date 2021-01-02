import { Elements, getElement } from 'katejs/lib/client';
import moment from 'moment';
import { structures } from '../structure';
import { kanbanStyles } from './DealList';

export default Form => class TaskList extends Form {
  constructor(args) {
    super(args);
    this.actions = undefined;
    const isBoard = this.app.vars.isBoardTasks === undefined ? true : this.app.vars.isBoardTasks;
    const topPanel = {
      type: Elements.GRID,
      elements: [
        {
          type: Elements.BUTTON,
          title: 'New Task',
          onClick: () => this.app.open('TaskItem', { id: 'new' }),
          cols: 2,
        },
        {
          ...getElement(structures.Task.fields.find(item => item.name === 'user'), this),
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
    list.columns.splice(list.columns.findIndex(col => col.dataPath === 'done'), 1);
    list.columns.splice(list.columns.findIndex(col => col.dataPath === 'contact'), 1);
    const dataColumn = list.columns.find(col => col.dataPath === 'date');
    dataColumn.format = (val) => moment(val).format('DD.MM HH:mm');
    list.cellStyle = (row, column) => {
      if (column.dataPath === 'title' && row.done) {
        return {
          textDecoration: 'line-through',
        };
      }
    };

    const board = {
      hidden: !isBoard,
      id: 'board',
      type: 'Kanban',
      styles: kanbanStyles,
      itemClick: (item) => this.boardItemClick(item),
      data: [],
      onDragEnd: (params) => this.onDragEnd(params),
      orderSaveKey: 'tasksOrder',
    };
    this.elements.push(topPanel, list, board);

    this.setFilters(true);
  }
  userChange() {
    this.setFilters();
    this.load();
  }
  setFilters(init) {
    this.filters = {
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
    this.app.vars.isBoardTasks = isBoard;
    if (isBoard) {
      this.setBoardData(this.content.list.value);
    }
  }
  boardItemClick(item) {
    this.app.open('TaskItem', { id: item.uuid });
  }
  async load() {
    const data = await super.load();
    if (this.content.isBoard.value) {
      this.setBoardData(data);
    }
    return data;
  }
  async setBoardData(data) {
  }
}
