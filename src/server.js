import KateJSServer from 'katejs/lib/server';
import AppServer from './AppServer';

const server = new KateJSServer({ AppServer });
if (process.argv.indexOf('dbsync') > -1) {
  server.syncDatabase();
} else {
  server.start();
}
