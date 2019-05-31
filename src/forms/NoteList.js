import { Elements, ListForm } from 'katejs/lib/client';
import { structures } from '../structure';

const doneFilter = { noteDone: false };

const { Note } = structures;

class NoteList extends ListForm({ Note }, { addActions: true, addElements: true }) {
  static entity = 'Note'; // for menu filter
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
    this.elements.get('list').columns.find(col => col.dataPath === 'noteDone').format
      = val => (val ? '✔' : '');
  }
  showAll = (val) => {
    this.filters = val ? undefined : doneFilter;
    this.load();
  }
}

export default NoteList;
