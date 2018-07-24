import Koa from 'koa';
import Router from 'koa-router';

// const app = new Koa();
// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}`);
// });
//
// const router = new Router();
// router.get('/', async (ctx) => {
//   ctx.body = '<body>Hello, world <a href="/project">Projects</a></body>';
// });
// router.get('/project', async (ctx) => {
//   ctx.body = 'This is projects';
// });
//
// app.use(router.routes());
//
// const listen = () => {
//   app.listen(2000);
//   console.log('... started');
// };
//
// export {
//   listen,
// }

export default class Http {
  constructor({ httpParams, logger }) {
    this.app = new Koa();
    this.logger = logger;
    this.httpParams = httpParams;
    this.app.use(async (ctx, next) => {
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      logger.info(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}`);
    });

    this.router = new Router();
    this.router.get('/', async (ctx) => {
      ctx.body = '<body>Hello, world <a href="/project">Projects</a></body>';
    });

    this.app.use(this.router.routes());
  }
  listen() {
    this.app.listen(this.httpParams.port);
    this.logger.info('... http server started at', this.httpParams.port);
  }
}
