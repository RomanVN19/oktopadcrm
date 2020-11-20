import { Elements } from 'katejs/lib/client';

export default Form => class TaskItem extends Form {
  constructor(args) {
    super(args);
    this.elements.cut = function (id) {
      return this.splice(this.findIndex(i => i.id === id), 1)[0];
    };

    const topRow = {
      type: Elements.GRID,
      elements: [
        {
          ...this.elements.cut('title'),
          cols: 9,
        },
        {
          ...this.elements.cut('done'),
          cols: 3,
        },
      ],
    };
    this.elements.unshift(topRow);
    this.actions.find(item => item.id === '__Close').onClick = () => this.close();
    this.actions.find(item => item.id === '__OK').onClick = () => this.ok();
  }
  afterInit() {
    if (super.afterInit) {
      super.afterInit();
    }
    if (!this.uuid) {
      console.log('after init', this.app.vars.currentDeal);
      this.content.deal.value = this.app.vars.currentDeal;
    }
  }
  close() {
    window.history.back();
  }
  async ok() {
    await this.save();
    this.close();
  }
}
