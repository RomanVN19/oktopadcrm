import { use } from 'kate-platform/client';

const AppClient = parent => class Client extends use(parent) {
  constructor(params) {
    super(params);
    console.log('app1 constructor');
  }
};

AppClient.package = 'app1';
export default AppClient;
