import { Elements } from 'katejs/lib/client';
import { FieldTypeOptions } from '../structure';

export default Form => class ExtraFieldsItem extends Form {
  constructor(args) {
    super(args);
    const fieldsTable = this.elements.get('fieldsList');
    const fieldType = fieldsTable.columns.find(column => column.dataPath === 'type');
    console.log('extra', fieldType);
    fieldType.type = Elements.SELECT;
    fieldType.options = FieldTypeOptions;
    fieldType.selectValue = true;
  }
}
