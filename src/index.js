import KatePlatform from 'kate-platform';

import AppServer from './AppServer';

const platform = new KatePlatform({ AppServer });
platform.compileClient();
// platform.syncDatabase();
platform.startServer();
