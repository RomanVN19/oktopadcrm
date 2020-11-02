import Fields from 'katejs/lib/fields';

const ExtraFieldsList = {
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
      name: 'fieldsList',
      fields: [
        {
          name: 'name',
          type: Fields.STRING,
        },
        {
          name: 'type',
          type: Fields.STRING,
        },
        {
          name: 'values',
          type: Fields.REFERENCE,
          entity: 'ExtraFieldValuesList',
        },
        {
          name: 'entityName',
          type: Fields.STRING,
        },
      ],
    },
  ],
};

const ExtraFieldValuesList = {
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

const EntityFieldsValuesList = {
  fields: [
    {
      name: 'entityUuid',
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
        {
          name: 'valueTitle',
          type: Fields.STRING,
        }
      ],
    }
  ],
};

export const FieldType = {
  'Numeric': 'Numeric',
  'String': 'String',
  'Date': 'Date',
  'Reference': 'Reference',
  'Select': 'Select',
};

export const FieldTypeOptions = Object.keys(FieldType).map(key => ({
  title: key,
  value: FieldType[key],
}));

export const structures = {
  ExtraFieldsList,
  ExtraFieldValuesList,
  EntityFieldsValuesList,
};
export const packageName = 'katejs-fields';
