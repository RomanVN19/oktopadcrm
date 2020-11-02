import { Elements } from 'katejs/lib/client';
import { FieldTypeOptions } from '../structure';

export default Form => class ExtraFieldsItem extends Form {
  constructor(args) {
    super(args);
    const fieldsTable = this.elements.get('fieldsList');
    const fieldType = fieldsTable.columns.find(column => column.dataPath === 'type');
    fieldType.type = Elements.SELECT;
    fieldType.options = FieldTypeOptions;
    fieldType.selectValue = true;
    this.elements.set('entityName', {
      ...this.elements.get('entityName'),
      type: Elements.SELECT,
      selectValue: true,
      options: this.app.entitiesWithExtraFields.map(entity => ({
        title: entity,
        value: entity,
      })),
    });

    // temporary disable extra
    fieldsTable.columns.splice(2,3);
  }
  async save() {
    await super.save();
    this.app.updateExtraFieldsLists();
  }
}
