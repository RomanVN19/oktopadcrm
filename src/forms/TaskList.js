import { Elements, getElement } from 'katejs/lib/client';
import moment from 'moment';
import { structures } from '../structure';
import { kanbanStyles } from './DealList';

const doneStyle = {
  textDecoration: 'line-through',
};

export default Form => class TaskList extends Form {
  constructor(args) {
    super(args);
    this.actions = undefined;
    const isBoard = this.app.vars.isBoardTasks === undefined ? true : this.app.vars.isBoardTasks;
    const isHideDone = this.app.vars.isHideDoneTasks === undefined ? true : this.app.vars.isHideDoneTasks;
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
        {
          type: Elements.CHECKBOX,
          id: 'isHideDone',
          value: isHideDone,
          cols: 2,
          title: 'Hide Done',
          onChange: () => this.hideDoneChange(),
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
    const userColIndex = list.columns.findIndex(col => col.dataPath === 'user');
    this.userColumn = list.columns.splice(userColIndex, 1)[0];
    this.app.vars.currentClient = undefined;
    this.app.vars.currentDeal = undefined;
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
    };
    let user = this.app.user;
    let hideDone = this.app.vars.isHideDoneTasks === undefined ? true : this.app.vars.isHideDoneTasks;
    if (!init) {
      user = this.content.user.value;
      hideDone = this.content.isHideDone.value;
    }
    if (user) {
      this.filters.userUuid = user.uuid;
    }
    if (hideDone) {
      this.filters.done = false;
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
        if (timestamp < columns[colIndex].edge) {
          break;
        }
      }
      if (colIndex === colIndex.length) {
        colIndex--;
      }

      columns[colIndex].items.push({
        ...task,
        id: task.uuid,
        style: task.done ? doneStyle : undefined,
      });
    });
    this.content.board.data = columns;
  }
  async onDragEnd(params) {
    const data = this.content.board.data;
    const task = this.content.list.value.find(item => item.uuid === params.draggableId);
    if (params.destination.droppableId !== params.source.droppableId) {
      const targetDate = params.destination.droppableId;
      let date;
      if (targetDate === 'expired') {
        date = moment().subtract(1, 'day').toDate();
      } else if (targetDate === 'later') {
        date = moment().add(3, 'days').toDate();
      } else {
        date = moment(`${targetDate} ${moment(task.date).format('HH:mm')}`, 'YYYYMMDD HH:mm');
      }
      await this.app.Task.put({ uuid: params.draggableId, body: { date }});
      this.load();
    }
  }
  hideDoneChange() {
    this.app.vars.isHideDoneTasks = this.content.isHideDone.value;

    this.setFilters();
    this.load();
  }
}
