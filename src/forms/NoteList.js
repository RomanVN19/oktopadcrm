import { Elements } from 'katejs/lib/client';

const doneFilter = { noteDone: { $ne: 1 } };
const NoteListForm = parent => class NoteList extends parent {
  constructor(params) {
    super(params);
    this.actions.push({
      type: Elements.SWITCH,
      id: 'showAll',
      title: 'Show all',
      value: false,
      panelStyle: true,
      onChange: this.showAll,
    });
    this.filters = doneFilter;
  }
  showAll = (val) => {
    this.filters = val ? undefined : doneFilter;
    this.load();
  }
};

export default NoteListForm;
