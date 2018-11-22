import Fields from 'katejs/lib/fields';

const Note = {
  name: 'note',
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    {
      name: 'noteDone',
      type: Fields.BOOLEAN,
    },
    {
      name: 'description',
      type: Fields.TEXT,
    },
  ],
  tables: [
    {
      name: 'checklist',
      fields: [
        {
          name: 'done',
          type: Fields.BOOLEAN,
        },
        {
          name: 'description',
          type: Fields.STRING,
        },
      ],
    },
  ],
};


export const title = 'Assistant';
export const packageName = 'katejs-assistant';
export const structures = {
  Note,
};
