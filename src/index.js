import KateServer, { Fields } from 'kate-server';

const Project = {
  name: 'projects',
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
};

const Task = {
  name: 'tasks',
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
};


const App = {
  entities: [
    Project,
    Task,
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
