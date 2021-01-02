import { Elements } from 'katejs/lib/client';

const EXTRA_FIELD = 'extraField';

const getExtraElement = (field, index) => {
  const element = {
    id: `${EXTRA_FIELD}${index}`,
    title: field.name,
    type: Elements.INPUT,
  };
  return element;
};

export default Form => class FormWithExtraFields extends Form {
  static extraFieldsApplied = true;
  constructor(args) {
    super(args);
    if (this.app.fieldsLists && this.app.fieldsLists[this.constructor.entity]) {
      const existingCard = this.elements.get('extraFields');
      const extraElementsCard = existingCard || {
        id: 'extraFields',
        type: Elements.CARD,
      };
      extraElementsCard.elements = this.app.fieldsLists[this.constructor.entity].map(getExtraElement);
      if (!existingCard) {
        this.elements.push(extraElementsCard);
      }
    }
  }
  async load() {
    const result = await super.load();
    if (this.app.fieldsLists && this.app.fieldsLists[this.constructor.entity] && this.uuid) {
      const { response } = await this.app.EntityFieldsValuesList.query({
        where: { entityUuid: this.uuid },
        limit: 1,
      });
      if (response && response.length) {
        const [ { values: extraFieldsvalues } ] = response;
        const fields = this.app.fieldsLists[this.constructor.entity];
        extraFieldsvalues.forEach((field) => {
          const index = fields.findIndex(f => f.name === field.name);
          if (index > -1) {
            this.content[`${EXTRA_FIELD}${index}`].value = field.value;
          }
        });
      }
    }
    return result;
  }
  async save() {
    await super.save();
    const formValues = this.getValues();
    const fields = this.app.fieldsLists[this.constructor.entity];
    if (fields) {
      const values = fields.map((field, index) => ({
        name: field.name,
        value: formValues[`extraField${index}`],
      }));
      this.app.EntityFieldsValuesList.save({ uuid: this.uuid, values });
    }
  }
}
