
export default Form => class SaleSchemaItem extends Form {
  async save() {
    await super.save();
    this.app.fetchSchemas();
  }
}
