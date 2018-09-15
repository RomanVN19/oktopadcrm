import Fields from 'kate-platform/fields';

const Project = {
  name: 'project',
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
};

const User = {
  name: 'user',
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    {
      name: 'salary',
      type: Fields.DECIMAL,
      length: 5,
      precision: 2,
    },
  ],
};

const Task = {
  name: 'task',
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    {
      name: 'project',
      type: Fields.REFERENCE,
      entity: 'Project',
    },
  ],
  tables: [
    {
      name: 'users',
      fields: [
        {
          name: 'title',
          type: Fields.STRING,
        },
        {
          name: 'user',
          type: Fields.REFERENCE,
          entity: 'User',
        },
      ],
    },
  ],
};

const Command = {
  name: 'command',
};

export const title = 'Assistant';
export const packageName = 'assistant';
export const structures = {
  Project,
  Task,
  User,
  Command,
};
