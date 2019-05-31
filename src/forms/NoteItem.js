import { Elements, getElement, getTableElement, ItemForm } from 'katejs/lib/client';
import { structures } from '../structure';

const { Note } = structures;

class NoteItem extends ItemForm({ Note }, { addActions: true }) {
  constructor(params) {
    super(params);

    this.elements.push(
      {
        id: 'grid',
        type: Elements.GRID,
        elements: [
          { cols: 8, ...getElement(Note.fields[0], this) }, // title
          { cols: 4, ...getElement(Note.fields[1], this) }, // noteDone
        ],
      },
      {
        id: 'tabs',
        type: Elements.TABS,
        elements: [
          {
            title: 'Description',
            elements: [
              getElement(Note.fields[2], this),
            ],
          },
          {
            title: 'Checklist',
            elements: [
              getTableElement(Note.tables[0], this),
            ],
          },
        ],
      },
    );

    this.elements.get('checklist').columns[0].width = 50;
  }
}

export default NoteItem;
