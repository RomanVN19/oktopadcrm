
export default Entity => class EntityFieldsValuesList extends Entity {
  async save({ data, ctx }) {
    const { response } = await this.query({ ctx, data: { where: { entityUuid: data.uuid }, limit: 1} });
    let dataUuid = undefined;
    if (response.length) {
      dataUuid = response[0].uuid;
    }
    await this.put({ ctx, data: { uuid: dataUuid, body: { entityUuid: data.uuid, values: data.values } } });
    return { response: 'ok' };
  }
}
