export const model = Symbol('model');
export const modelGetOptions = Symbol('modelGetOptions');

export const capitalize = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

const noItemResponse = (ctx) => {
  ctx.body = 'Can\'t find entity item';
  ctx.status = 404;
};

export default class Entity {
  constructor({ logger }) {
    this.logger = logger;
  }
  async get({ data, ctx }) {
    const item = await this[model].findById(data.uuid, this[modelGetOptions]);
    if (!item) {
      noItemResponse(ctx);
      return;
    }
    ctx.body = item;
  }
  async put({ data, ctx }) {
    const item = await this[model].findById(data.uuid);
    if (!item) {
      noItemResponse(ctx);
      return;
    }
    this.logger.debug('item before changes', item.get());
    await item.update(data.body);

    if (this.tables) {
      this.tables.forEach(async (table) => {
        await table[model].destroy({ where: { [`${this.name}Uuid`]: item.uuid } });
        const rows = await table[model].bulkCreate(data.body[table.name] || []);
        item[`set${capitalize(table.name)}`](rows);
      });
    }
    ctx.body = item.get();
  }
  async post({ data, ctx }) {
    const item = await this[model].create(data.body);
    if (this.tables) {
      this.tables.forEach(async (table) => {
        const rows = await table[model].bulkCreate(data.body[table.name] || []);
        item[`set${capitalize(table.name)}`](rows);
      });
    }
    ctx.body = item.get();

  }
  async delete({ data, ctx }) {
    const item = await this[model].findById(data.uuid, this[modelGetOptions]);
    if (!item) {
      noItemResponse(ctx);
      return;
    }
    await item.destroy();
    ctx.body = { ok: true };
  }
  async query({ data, ctx }) {
    this.logger.debug('attributes', this[modelGetOptions].attributes);
    ctx.body = await this[model].findAll({ ...this[modelGetOptions] });
  }
}
