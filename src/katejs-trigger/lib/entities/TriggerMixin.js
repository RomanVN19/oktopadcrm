
export default Entity => class EntityWithTriggers extends Entity {
  async afterPut({ entity, transaction, ctx }) {
    if (super.afterPut) {
      await super.afterPut({ entity, transaction, ctx });
    }
    this.app.Trigger.checkTriggers({ entity, transaction, ctx, entityName: this.constructor.entity });
  }
}
