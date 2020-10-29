import Fields from 'katejs/lib/fields';

const ExtraFields = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    {
      name: 'entityName',
      type: Fields.STRING,
    },
  ],
  tables: [
    {
      name: 'fields',
      fields: [
        {
          name: 'name',
          type: Fields.STRING,
        },
        {
          name: 'type',
          type: Fields.INTEGER,
        },
        {
          name: 'values',
          type: Fields.REFERENCE,
          entity: 'ExtraFieldValues',
        },
      ],
    },
  ],
};

const ExtraFieldValues = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
  tables: [
    {
      name: 'values',
      fields: [
        {
          name: 'value',
          type: Fields.STRING,
        },
      ],
    }
  ],
};

const EntityFieldsValues = {
  fields: [
    {
      name: 'entityId',
      type: Fields.STRING,
    },
  ],
  tables: [
    {
      name: 'values',
      fields: [
        {
          name: 'name',
          type: Fields.STRING,
        },
        {
          name: 'value',
          type: Fields.STRING,
        },
      ],
    }
  ],
};

export const structures = {
  ExtraFields,
  ExtraFieldValues,
};
export const packageName = 'katejs-fields';
