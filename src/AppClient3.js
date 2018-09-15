import { use } from 'kate-platform/client';
import App2 from './AppClient2';
import App1 from './AppClient1';

const AppClient = parent => class Client extends use(parent, App2, App1) {
  constructor(params) {
    super(params);
    console.log('app3 constructor');
  }
};

AppClient.package = 'app3';
export default AppClient;
