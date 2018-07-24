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

const App = {
  entities: [
    Project,
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
