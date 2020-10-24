import Fields from 'katejs/lib/fields';

export const fields = {
  client: {
    name: 'client',
    type: Fields.REFERENCE,
    entity: 'Client',
    attributes: ['uuid', 'title', 'phone', 'address'],
  },
  sum: {
    name: 'sum',
    type: Fields.DECIMAL,
    length: 10,
    precision: 2,
  },
  total: {
    name: 'total',
    type: Fields.DECIMAL,
    length: 10,
    precision: 2,
  },
  contractor: {
    name: 'contractor',
    type: Fields.REFERENCE,
    entity: 'Client',
  },
  amount: {
    name: 'amount',
    type: Fields.DECIMAL,
    length: 10,
    precision: 2,
  },
  salesman: {
    name: 'salesman',
    type: Fields.REFERENCE,
    entity: 'User',
  }
};

export const tables = {
  products: {
    name: 'products',
    fields: [
      {
        name: 'product',
        type: Fields.REFERENCE,
        entity: 'Product',
        attributes: ['uuid', 'title', 'accountBalances'],
      },
      fields.amount,
      {
        name: 'price',
        type: Fields.DECIMAL,
        length: 10,
        precision: 2,
      },
      fields.sum,
    ],
  },
};

const Note = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    {
      name: 'noteDone',
      type: Fields.BOOLEAN,
    },
    {
      name: 'description',
      type: Fields.TEXT,
    },
  ],
  tables: [
    {
      name: 'checklist',
      fields: [
        {
          name: 'done',
          type: Fields.BOOLEAN,
        },
        {
          name: 'description',
          type: Fields.STRING,
        },
      ],
    },
  ],
};

const Client = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    {
      name: 'phone',
      type: Fields.STRING,
    },
    {
      name: 'address',
      type: Fields.STRING,
    },
  ],
};

const Product = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    {
      name: 'price',
      type: Fields.DECIMAL,
      length: 10,
      precision: 2,
    },
    {
      name: 'accountBalances',
      type: Fields.BOOLEAN,
      skipForList: true,
    },
  ],
};


const Order = {
  fields: [
    fields.client,
    {
      name: 'phone',
      type: Fields.STRING,
    },
    {
      name: 'address',
      type: Fields.STRING,
    },
    fields.total,
    {
      name: 'comment',
      type: Fields.STRING,
    },
    {
      name: 'cashbox',
      type: Fields.REFERENCE,
      entity: 'Cashbox',
      skipForList: true,
    },
    {
      ...fields.total,
      name: 'payment',
    },
  ],
  tables: [
    tables.products,
  ],
};

const Cashbox = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
};

const Payment = {
  fields: [
    {
      name: 'cashbox',
      type: Fields.REFERENCE,
      entity: 'Cashbox',
    },
    fields.total,
    {
      name: 'comment',
      type: Fields.STRING,
    },
  ],
  tables: [
    {
      name: 'clientpayments',
      fields: [
        fields.client,
        fields.sum,
      ],
    },
  ],
};

const Expense = {
  fields: [
    {
      name: 'cashbox',
      type: Fields.REFERENCE,
      entity: 'Cashbox',
    },
    fields.contractor,
    fields.total,
    {
      name: 'comment',
      type: Fields.STRING,
    },
  ],
};

const DebtRecord = {
  skipForForm: true,
  fields: [
    fields.client,
  ],
  resources: [
    fields.sum,
  ],
};

const MoneyRecord = {
  skipForForm: true,
  fields: [
    {
      name: 'cashbox',
      type: Fields.REFERENCE,
      entity: 'Cashbox',
    },
  ],
  resources: [
    fields.sum,
  ],
};

const ProductRecord = {
  skipForForm: true,
  fields: [
    {
      name: 'product',
      type: Fields.REFERENCE,
      entity: 'Product',
    },
  ],
  resources: [
    fields.amount,
  ],
};

const PriceType = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
};

const PriceList = {
  fields: [
    {
      name: 'priceType',
      type: Fields.REFERENCE,
      entity: 'PriceType',
    },
  ],
  tables: [
    {
      name: 'products',
      fields: [
        {
          name: 'product',
          type: Fields.REFERENCE,
          entity: 'Product',
        },
        {
          name: 'price',
          type: Fields.DECIMAL,
          length: 10,
          precision: 2,
        },
      ],
    },
  ],
};

const Receipt = {
  fields: [
    fields.contractor,
    fields.total,
    {
      name: 'priceType',
      type: Fields.REFERENCE,
      entity: 'PriceType',
    },
  ],
  tables: [
    tables.products,
  ],
};

export const Settings = {
  fields: [
    {
      name: 'companyName',
      type: Fields.STRING,
    },
    {
      name: 'dealStartStatus',
      type: Fields.REFERENCE,
      entity: 'DealStatus',
    }
  ],
};

const DealStatus = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
  tables: [
    {
      name: 'nexts',
      fields: [
        {
          name: 'status',
          type: Fields.REFERENCE,
          entity: 'DealStatus',
        },
      ],
    }
  ]
};

const Deal = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    fields.client,
    fields.salesman,
  ],
};

const Task = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
    fields.client,
    {
      name: 'deal',
      type: Fields.REFERENCE,
      entity: 'Deal',
    },
    fields.salesman,
  ],
};

export const title = 'Assistant';
export const packageName = 'katejs-assistant';
export const structures = {
  DealStatus,
  Deal,
  Task,
  ProductRecord,
  MoneyRecord,
  DebtRecord,
  Note,
  Cashbox,
  PriceType,
  PriceList,
  Product,
  Receipt,
  Expense,
  Payment,
  Client,
  Order,
};
