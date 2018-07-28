import KatePlatform from 'kate-platform';

import App from './App';

const platform = new KatePlatform({ app: App });
platform.compileClient();
// platform.syncDatabase();
platform.startServer();
