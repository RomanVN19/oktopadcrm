import App from './App';

export default class ServerApp extends App {
  constructor() {
    super();
    this.databaseParams = {
      host: 'localhost',
      database: 'k_assistant',
      username: 'root',
      password: '',
    };
    this.httpParams = {
      port: 2000,
    };
  }
}
