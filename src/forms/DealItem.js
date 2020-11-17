import { Elements } from 'katejs/lib/client';

export default Form => class DealItem extends Form {
  constructor(args) {
    super(args);
    const generatedElements = this.elements;
    generatedElements.cut = function (id) {
      const item = this.splice(this.findIndex(i => i.id === id), 1)[0];
      return item;
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
                id: 'historyCard',
                type: Elements.CARD,
                elements: [
                  {
                    type: Elements.GROUP,
                    id: 'history',
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
  postComment() {
    const comment = this.content.commentText.value;
    this.app.DealComment.put({ body: { comment, dealUuid: this.uuid } });
  }
}
