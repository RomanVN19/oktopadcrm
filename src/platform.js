import KateJS from 'katejs';
import AppServer from './AppServer';

const platform = new KateJS({ AppServer });
if (process.argv.indexOf('build-client') > -1) {
  platform.compileClient();
} else {
  platform.compileClient();
  platform.startServer();
}
