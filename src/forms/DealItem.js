import moment from 'moment';
import { Elements } from 'katejs/lib/client';


const dateStyle = {
  display: 'inline',
  marginRight: 10,
  fontSize: 10,
};

const userStyle = {
  display: 'inline',
  marginRight: 10,
  fontSize: 10,
  fontWeight: 'bold',
};

const commentStyle = {
  display: 'inline',
};

const mapDate = (obj) => ({
  ...obj,
  date: new Date(obj.date),
});

const mapHistory = (data) => {
  const element = {
    type: Elements.GROUP,
    div: true,
    elements: [
      {
        type: Elements.LABEL,
        style: dateStyle,
        title: moment(data.date).format('DD.MM.YYYY HH:mm'),
      },
    ],
  };
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
  return element;
};

export default Form => class DealItem extends Form {
  constructor(args) {
    super(args);

    if (!userStyle.color) {
      userStyle.color = this.app.constructor.primaryColor;
    }

    const generatedElements = this.elements;
    generatedElements.cut = function (id) {
      return this.splice(this.findIndex(i => i.id === id), 1)[0];
    };
    const title = generatedElements.cut('title');
    const salesman = generatedElements.cut('salesman');
    const schema = generatedElements.cut('schema');
    const step = generatedElements.cut('step');
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
                  { ...step, cols: 6 },
                  {
                    type: Elements.LABEL,
                    title: 'at',
                    cols: 1   ,
                    style: { marginTop: 30 },
                  },
                  { ...schema, cols: 5 },
                ],
              },
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
    //
  }
  async postComment() {
    const comment = this.content.commentText.value;
    this.content.commentText.value = '';
    await this.app.DealComment.put({ body: { comment, dealUuid: this.uuid } });
    this.fillHistory();
  }
  async afterInit() {
    super.afterInit();
    this.fillHistory();
  }
  async fillHistory() {
    if (!this.uuid) {
      return;
    }
    const { response: comments } = await this.app.DealComment.query({
      where: {
        dealUuid: this.uuid,
      },
    });
    const history = [
      ...comments.map(mapDate),
    ];
    history.sort((a, b) => b.date - a.date);
    this.content.history.elements = history.map(mapHistory);
  }
  async save() {
    await super.save();
    const url = `${window.location.pathname}?id=${this.uuid}`;
    window.history.replaceState(window.history.state, undefined, url);
  }
  addTask() {
    this.app.vars.currentDeal = {
      uuid: this.uuid,
      title: this.content.title.value,
    };
    this.app.open(`TaskItem`, { id: 'new' });
  }
}
