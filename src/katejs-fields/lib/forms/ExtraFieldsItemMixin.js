import { Elements } from 'katejs/lib/client';

const getExtraElement = (field, index) => {
  console.log('got field', field);
  const element = {
    id: `extraField${index}`,
    title: field.name,
    type: Elements.INPUT,
  };
  return element;
};

export default Form => class FormWithEctraFields extends Form {
  constructor(args) {
    super(args);
    if (this.app.fieldsLists && this.app.fieldsLists[this.constructor.entity]) {
      const extraElementsCard = {
        id: 'extraFields',
        type: Elements.CARD,
        elements: this.app.fieldsLists[this.constructor.entity].map(getExtraElement),
      };
      this.elements.push(extraElementsCard);
    }
  }
  async load() {
    const result = await super.load();
    if (this.uuid) {
      const { response: extraFieldsvalues } = await this.app.EntityFieldsValuesList.query({
        where: { entityUuid: this.uuid },
      });
    }
    return result;
  }
  async save() {
    await super.save();
    const values = this.getValues();
    const fields = this.app.fieldsLists[this.constructor.entity];
    if (fields) {
      const values = fields.map((field, index) => ({
        name: field.name,
        value: values[`extraField${index}`],
      }));
      console.log('got vals', values);
    }
  }
}
