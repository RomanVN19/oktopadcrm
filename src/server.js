import KateJS from 'katejs';
import AppServer from './AppServer';

const platform = new KateJS({ AppServer });
platform.compileClient();
// platform.syncDatabase(); // run once when structure changes
platform.startServer();
