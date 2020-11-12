import { Form, Elements } from 'katejs/lib/client'

export default class DealsBoard extends Form {
  constructor(args) {
    super(args);
    this.elements = [
      {
        type: Elements.LABEL,
        title: 'Hello, world',
      },
      {
        type: 'Kanban',
      }
    ];
  }
}
