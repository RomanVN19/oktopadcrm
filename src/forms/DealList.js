import { Elements, getElement } from 'katejs/lib/client';
import { structures } from '../structure';

export default Form => class DealList extends  Form {
  constructor(args) {
    super(args);
    this.actions = undefined;
    const schema = this.app.vars.schema || this.app.settings.defaultSchema;
    this.app.vars.schema = schema;
    const schemaFilter = {
      ...getElement(structures.Deal.fields.find(item => item.name === 'schema'), this),
      value: schema,
      onChange: () => this.schemaChange(),
    };
    const topPanel = {
      type: Elements.GRID,
      elements: [
        {
          type: Elements.BUTTON,
          title: 'New Deal',
          onClick: () => this.app.open('DealItem', { id: 'new' }),
        },
        schemaFilter,
      ],
    };
    this.elements.unshift(topPanel);
    this.setFilters();
  }
  schemaChange() {
    this.app.vars.schema = this.content.schema.value;
    this.setFilters();
    this.load();
  }
  setFilters() {
    this.filters = {
      schemaUuid: this.app.vars.schema && this.app.vars.schema.uuid,
    }
  }
}
