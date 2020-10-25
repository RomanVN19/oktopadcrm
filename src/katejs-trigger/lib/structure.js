import Fields from 'katejs/lib/fields';

const Trigger = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    {
      name: 'conditionEntity',
      type: Fields.STRING,
    },
    {
      name: 'condition',
      type: Fields.STRING,
    },
    {
      name: 'actionEntity',
      type: Fields.STRING,
    },
    {
      name: 'actionEntityUuid',
      type: Fields.STRING,
    }
  ],
  tables: [
    {
      name: 'actionEntityFields',
      fields: [
        {
          name: 'field',
          type: Fields.STRING,
        },
        {
          name: 'value',
          type: Fields.STRING,
        }
      ],
    },
  ],
};

export const structures = {
  Trigger,
};
export const packageName = 'katejs-trigger';
