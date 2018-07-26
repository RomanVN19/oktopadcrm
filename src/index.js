import KateServer, { Fields } from 'kate-server';

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
      entity: Project,
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
          entity: User,
        },
      ],
    },
  ],
};


const App = {
  entities: [
    Project,
    Task,
    User,
  ],
  databaseParams: {
    host: 'localhost',
    database: 'k_assistant',
    username: 'root',
    password: '',
  },
  httpParams: {
    port: 2000,
  },
};

const server = new KateServer({ app: App });
server.run();
