
export default Entity => class DealComment extends Entity {
  async beforePut({ savedEntity, body, transaction, ctx }) {
    if (super.beforePut) {
      await super.beforePut({ savedEntity, body, transaction, ctx })
    }
    if (savedEntity) {
      throw new Error('cant change comment');
    }
    body.date = new Date();
    body.user = ctx.state.user;
  }
}
