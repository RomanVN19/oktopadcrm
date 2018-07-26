import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';

const apiUrl = '/api';

const noEntityResponse = (ctx) => {
  ctx.body = 'Can\'t find entity';
  ctx.status = 404;
};

const noItemResponse = (ctx) => {
  ctx.body = 'Can\'t find entity item';
  ctx.status = 404;
};

export default class Http {
  constructor({ httpParams, logger, entities }) {
    this.app = new Koa();
    this.logger = logger;
    this.httpParams = httpParams;
    this.entities = entities;
    this.app.use(async (ctx, next) => {
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      logger.info(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}`);
    });
    this.app.use(BodyParser());

    this.router = new Router();
    this.router.get('/', async (ctx) => {
      ctx.body = '<body>Hello, world!</body>';
    });
    this.router.post(`${apiUrl}/:entity/`, this.post);
    this.router.put(`${apiUrl}/:entity/:uuid`, this.put);
    this.router.get(`${apiUrl}/:entity/:uuid`, this.get);

    this.app.use(this.router.routes());
  }
  listen() {
    this.app.listen(this.httpParams.port);
    this.logger.info('... http server started at', this.httpParams.port);
  }
  post = async (ctx) => {
    this.logger.debug('Create request', ctx.params, ctx.request.body);
    const entity = this.entities.find(item => item.name === ctx.params.entity);
    if (!entity) {
      noEntityResponse(ctx);
      return;
    }
    ctx.body = await entity.model.create(ctx.request.body);
  }
  put = async (ctx) => {
    this.logger.debug('Change request', ctx.params, ctx.request.body);
    const entity = this.entities.find(item => item.name === ctx.params.entity);
    if (!entity) {
      noEntityResponse(ctx);
      return;
    }
    const item = await entity.model.findById(ctx.params.uuid);
    if (!item) {
      noItemResponse(ctx);
      return;
    }
    this.logger.debug('item before changes', item.get());
    ctx.body = await item.update(ctx.request.body);
  }
  get = async (ctx) => {
    this.logger.debug('GET request', ctx.params, ctx.request.body);
    const entity = this.entities.find(item => item.name === ctx.params.entity);
    if (!entity) {
      noEntityResponse(ctx);
      return;
    }
    const item = await entity.model.findById(ctx.params.uuid);
    if (!item) {
      noItemResponse(ctx);
      return;
    }
    ctx.body = item;
  }
}
