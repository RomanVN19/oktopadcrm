import moment from 'moment';
import { Elements } from 'katejs/lib/client';

const TEXT_MARGIN = 6;

const dateStyle = {
  display: 'inline',
  marginRight: TEXT_MARGIN,
  fontSize: 10,
};

const userStyle = {
  display: 'inline',
  marginRight: TEXT_MARGIN,
  fontSize: 10,
  fontWeight: 'bold',
};

const commentStyle = {
  display: 'inline',
  marginRight: TEXT_MARGIN,
};

const taskStyle = {
  display: 'inline',
  marginRight: TEXT_MARGIN,
  cursor: 'pointer',
  textDecoration: 'underline',
};

const taskDoneStyle = {
  display: 'inline',
  marginRight: TEXT_MARGIN,
  cursor: 'pointer',
  textDecoration: 'line-through',
};

const mapDate = (obj) => ({
  ...obj,
  date: obj.date? new Date(obj.date) : 0,
});

const mapHistory = (events) => (data) => {
  const element = {
    type: Elements.GROUP,
    div: true,
    elements: [
      {
        type: Elements.LABEL,
        style: dateStyle,
        title: data.date ? moment(data.date).format('DD.MM.YYYY HH:mm') : '---',
      },
    ],
  };
  // comment
  if (data.comment) {
    element.elements.push({
      type: Elements.LABEL,
      style: userStyle,
      title: (data.user && data.user.title) || 'unknown',
    });
    element.elements.push({
      type: Elements.LABEL,
      style: commentStyle,
      title: data.comment,
    });
  }
  // task
  if (data.done !== undefined) {
    element.elements.push({
      type: Elements.LABEL,
      title: 'for',
      style: commentStyle,
    });
    element.elements.push({
      type: Elements.LABEL,
      style: userStyle,
      title: `${(data.user && data.user.title) || 'unknown'}:`,
    });
    element.elements.push({
      type: Elements.LABEL,
      style: data.done ? taskDoneStyle : taskStyle,
      title: data.title,
      onClick: () => events.openTask(data.uuid),
    });
  }
  return element;
};

export default Form => class DealItem extends Form {
  constructor(args) {
    super(args);

    if (!userStyle.color) {
      userStyle.color = this.app.constructor.primaryColor;
    }

    const generatedElements = this.elements;
    const title = generatedElements.cut('title');
    const salesman = generatedElements.cut('user');
    const schema = generatedElements.cut('schema');
    const step = generatedElements.cut('stepIndex');
    const dealClosed = generatedElements.cut('dealClosed');
    generatedElements.cut('contact'); // temp remove contact
    this.elements = [
      {
        id: 'mainGrid',
        type: Elements.GRID,
        elements: [
          {
            cols: 6,
            id: 'leftGroup',
            type: Elements.GROUP,
            elements: [
              {
                type: Elements.GRID,
                elements: [
                  { ...title, cols: 6 },
                  {
                    type: Elements.LABEL,
                    title: 'by',
                    cols: 1   ,
                    style: { marginTop: 30 },
                  },
                  { ...salesman, cols: 5 },
                ],
              },
              ...generatedElements,
              {
                type: Elements.GRID,
                elements: [
                  {
                    ...step,
                    cols: 6,
                    type: Elements.SELECT,
                    selectValue: true,
                  },
                  {
                    type: Elements.LABEL,
                    title: 'at',
                    cols: 1   ,
                    style: { marginTop: 30 },
                  },
                  { ...schema, cols: 5 },
                ],
              },
              dealClosed,
              {
                type: Elements.CARD,
                id: 'extraFields',
                elements: [],
              }
            ]
          },
          {
            cols: 6,
            id: 'rightGroup',
            type: Elements.GROUP,
            elements: [
              {
                type: Elements.BUTTON,
                title: 'Add Task',
                onClick: () => this.addTask(),
              },
              {
                id: 'historyCard',
                type: Elements.CARD,
                elements: [
                  {
                    type: Elements.GROUP,
                    id: 'history',
                    elements: [],
                  },
                  {
                    type: Elements.GRID,
                    elements: [
                      {
                        id: 'commentText',
                        title: 'Comment',
                        type: Elements.INPUT,
                        cols: 8,
                        onKeyPress: (args) => this.keyPress(args),
                      },
                      {
                        type: Elements.BUTTON,
                        title: 'Do Comment',
                        onClick: () => this.postComment(),
                        cols: 4,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }
    ];

    this.elements.get('client').onChange = (value) => this.clientChange(value);

    this.actions.push({
      type: Elements.BUTTON,
      title: 'To Client',
      onClick: () => this.toClient(),
    });
  }
  async postComment() {
    const comment = this.content.commentText.value;
    this.content.commentText.value = '';
    await this.app.DealComment.put({ body: { comment, dealUuid: this.uuid } });
    this.fillHistory();
  }
  async afterInit() {
    super.afterInit();
    if (!this.uuid) {
      this.content.user.value = this.app.user;
      this.content.schema.value = this.app.vars.schema;
      this.fillSteps();
      this.save();
    }
    this.fillHistory();
  }
  async fillHistory() {
    if (!this.uuid) {
      return;
    }
    const [
      { response: comments },
      { response: tasks },
    ] = await Promise.all([
      this.app.DealComment.query({
        where: {
          dealUuid: this.uuid,
        },
      }),
      this.app.Task.query({
        where: {
          dealUuid: this.uuid,
        },
      }),
    ]);


    const history = [
      ...comments.map(mapDate),
      ...tasks.map(mapDate),
    ];
    history.sort((a, b) => b.date - a.date);
    this.content.history.elements = history.map(mapHistory({
      openTask: (uuid) => this.openTask(uuid),
    }));
  }
  addTask() {
    this.app.vars.currentDeal = {
      uuid: this.uuid,
      title: this.content.title.value,
    };
    this.app.vars.currentClient = this.content.client.value;
    this.app.open(`TaskItem`, { id: 'new' });
  }
  openTask(uuid) {
    this.app.open('TaskItem', { id: uuid });
  }
  clientChange(value) {
    if (!this.content.title.value && value && value.uuid) {
      this.content.title.value = value.title;
    }
  }
  async load() {
    await super.load();
    this.fillSteps();
  }
  fillSteps() {
    const schema = this.content.schema.value;
    if (!schema || !schema.uuid) return;
    const steps = this.app.schemas[schema.uuid].steps;
    this.content.stepIndex.options = steps.map((step, index) => ({ title: step.name, value: index }));
    const stepIndex = this.content.stepIndex.value;
    if (stepIndex === undefined || stepIndex === null) {
      this.content.stepIndex.value = 0;
    }
  }
  keyPress(event) {
    if (event.key === "Enter") {
      this.postComment();
    }
  }
  toClient() {
    const client = this.content.client.value;
    if (client && client.uuid) {
      this.save();
      this.app.open('ClientItem', { id: client.uuid });
    }
  }
}
