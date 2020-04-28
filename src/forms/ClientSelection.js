import { Elements } from 'katejs/lib/client';
import ClientDebt from './ClientDebt';

const addCondition = (where, field, value) => {
  if (value) {
    // eslint-disable-next-line no-param-reassign
    where[field] = { $like: `%${value || ''}%` };
  }
};

export default class ClientSelection {
  constructor({ form, replaceSelect, changePhoneAddress, openOnFocus }) {
    this.elements = form.elements;
    this.content = form.content;
    this.app = form.app;

    const clientInput = this.elements.get('client');
    clientInput.openOnFocus = openOnFocus;
    if (changePhoneAddress) {
      clientInput.onChange = this.clientSelect;
    }

    if (replaceSelect) {
      this.elements.set('client', {
        id: 'clientGroup',
        type: Elements.GRID,
        elements: [
          {
            ...clientInput,
            cols: 6,
            getOptions: this.clientQuery,
          },
          {
            type: Elements.BUTTON,
            title: 'Find, create',
            onClick: this.clientSelection,
            fullWidth: true,
            cols: 3,
          },
          {
            type: Elements.GROUP,
            elements: new ClientDebt({ content: this.content, app: this.app }).elements,
            cols: 3,
          },
        ],
      });
    }
    this.elements.push({
      id: 'clientSelectionModal',
      type: Elements.MODAL,
      open: false,
      title: 'Find, create client',
      maxWidth: 'md',
      elements: [
        {
          type: Elements.GRID,
          elements: [
            {
              type: Elements.INPUT,
              id: 'findTitle',
              title: 'Title',
              onChange: this.searchChange,
              cols: 3,
            },
            {
              type: Elements.INPUT,
              id: 'findPhone',
              title: 'Phone',
              onChange: this.searchChange,
              cols: 3,
            },
            {
              type: Elements.INPUT,
              id: 'findAddress',
              title: 'Address',
              onChange: this.searchChange,
              cols: 3,
            },
            {
              type: Elements.BUTTON,
              title: 'Create',
              onClick: this.create,
              cols: 2,
            },
            {
              type: Elements.LABEL,
              cols: 2,
            },
          ],
        },
        {
          id: 'clientSearch',
          type: Elements.TABLE,
          rowClick: this.selectClient,
          columns: [
            { title: 'Title', dataPath: 'title' },
            { title: 'Phone', dataPath: 'phone' },
            { title: 'Address', dataPath: 'address' },
          ],
        },
      ],
    });
  }
  clientSelect = (client) => {
    if (client) {
      this.content.address.value = client.address;
      this.content.phone.value = client.phone;
    }
  }
  clientSelection = () => {
    this.content.clientSelectionModal.open = true;
  }
  searchChange = () => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(this.search, 300);
  }
  search = async () => {
    const where = {};
    addCondition(where, 'title', this.content.findTitle.value);
    addCondition(where, 'phone', this.content.findPhone.value);
    addCondition(where, 'address', this.content.findAddress.value);
    const { response: clients } = await this.app.Client.query({ where, limit: 5 });
    this.content.clientSearch.value = clients;
  }
  selectClient = (row) => {
    this.content.client.value = row;
    if (this.content.client.onChange) {
      this.content.client.onChange(row);
    }
    this.content.clientSelectionModal.open = false;
  }
  fieldValid(field) {
    if (!this.content[field].value) {
      this.content[field].error = true;
      return false;
    }
    this.content[field].error = false;
    return true;
  }
  create = async () => {
    if (!this.fieldValid('findTitle')) return;
    if (!this.fieldValid('findPhone')) return;
    if (!this.fieldValid('findAddress')) return;
    const body = {
      title: this.content.findTitle.value,
      phone: this.content.findPhone.value,
      address: this.content.findAddress.value,
    };
    await this.app.Client.put({ body });
    this.search();
  }
  clientQuery = async (query) => {
    const { response } = await this.app.Client.query({
      where: {
        $or: [
          { title: { $like: `%${query || ''}%` } },
          { phone: { $like: `%${query || ''}%` } },
          { address: { $like: `%${query || ''}%` } },
        ],
      },
    });
    return (response || []).map(item => ({ ...item, title: `${item.title} (${item.phone || ''}${(item.phone && item.address) ? ',' : ''}${item.address || ''})` }));
  }
}
