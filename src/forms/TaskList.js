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
    const columns = [
      {
        title: 'Expired',
        id: 'expired',
        items: [],
        edge: moment().startOf('day').toDate().getTime(),
      },
      {
        title: 'Today',
        id: moment().format('YYYYMMDD'),
        items: [],
        edge: moment().endOf('day').toDate().getTime(),
      },
      {
        title: 'Tomorrow',
        id: moment().add(1, 'day').format('YYYYMMDD'),
        items: [],
        edge: moment().add(1, 'day').endOf('day').toDate().getTime(),
      },
      {
        title: 'Day After Tomorrow',
        id: moment().add(2, 'day').format('YYYYMMDD'),
        items: [],
        edge: moment().add(2, 'day').endOf('day').toDate().getTime(),
      },
      {
        title: 'Later',
        id: 'later',
        items: [],
      },
    ];
    data.forEach((task) => {
      const timestamp = moment(task.date).toDate().getTime();
      let colIndex = 0;
      for(; colIndex < columns.length - 1; colIndex++) { // except last
        console.log('for', colIndex);
        if (timestamp < columns[colIndex].edge) {
          break;
        }
      }
      if (colIndex === colIndex.length) {
        colIndex--;
      }
      console.log('got index', colIndex);
      columns[colIndex].items.push({ ...task, id: task.uuid });
    });
    this.content.board.data = columns;
  }
}
