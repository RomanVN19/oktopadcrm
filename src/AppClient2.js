import { use } from 'katejs/client';
import App1 from './AppClient1';

const AppClient = parent => class Client extends use(parent, App1) {
  constructor(params) {
    super(params);
    console.log('app2 constructor');
  }
};

AppClient.package = 'app2';
export default AppClient;
