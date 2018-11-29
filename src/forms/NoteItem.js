import { Elements, getElement, getTableElement } from 'katejs/lib/client';

import { structures } from '../structure';

const { Note } = structures;

const NoteItemForm = parent => class NoteItem extends parent {
  constructor(params) {
    super(params);
    const tableCardElement = getTableElement(Note.tables[0], this);
    tableCardElement.elements.find(item => item.type === Elements.TABLE_EDITABLE)
      .columns[0].width = 50;

    const confirmDialog = this.elements.find(item => item.type === Elements.MODAL);

    this.elements = [
      confirmDialog,
      {
        id: 'grid',
        type: Elements.GRID,
        elements: [
          { cols: 8, ...getElement(Note.fields[0], this) },
          { cols: 4, ...getElement(Note.fields[1], this) },
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
              tableCardElement,
            ],
          },
        ],
      },
    ];
  }
};

export default NoteItemForm;
