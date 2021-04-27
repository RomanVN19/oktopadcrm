"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.structures = exports.packageName = exports.title = exports.Settings = exports.tables = exports.fields = void 0;

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fields = {
  client: {
    name: 'client',
    type: _fields.default.REFERENCE,
    entity: 'Client',
    attributes: ['uuid', 'title', 'phone', 'address']
  },
  sum: {
    name: 'sum',
    type: _fields.default.DECIMAL,
    length: 10,
    precision: 2
  },
  total: {
    name: 'total',
    type: _fields.default.DECIMAL,
    length: 10,
    precision: 2
  },
  contractor: {
    name: 'contractor',
    type: _fields.default.REFERENCE,
    entity: 'Client'
  },
  amount: {
    name: 'amount',
    type: _fields.default.DECIMAL,
    length: 10,
    precision: 2
  },
  user: {
    name: 'user',
    type: _fields.default.REFERENCE,
    entity: 'User'
  },
  contact: {
    name: 'contact',
    type: _fields.default.REFERENCE,
    entity: 'Contact'
  }
};
exports.fields = fields;
var tables = {
  products: {
    name: 'products',
    fields: [{
      name: 'product',
      type: _fields.default.REFERENCE,
      entity: 'Product',
      attributes: ['uuid', 'title', 'accountBalances']
    }, fields.amount, {
      name: 'price',
      type: _fields.default.DECIMAL,
      length: 10,
      precision: 2
    }, fields.sum]
  }
};
exports.tables = tables;
var Note = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }, {
    name: 'noteDone',
    type: _fields.default.BOOLEAN
  }, {
    name: 'description',
    type: _fields.default.TEXT
  }],
  tables: [{
    name: 'checklist',
    fields: [{
      name: 'done',
      type: _fields.default.BOOLEAN
    }, {
      name: 'description',
      type: _fields.default.STRING
    }]
  }]
};
var Client = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }, {
    name: 'phone',
    type: _fields.default.STRING
  }, {
    name: 'address',
    type: _fields.default.STRING
  }]
};
var Product = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }, {
    name: 'price',
    type: _fields.default.DECIMAL,
    length: 10,
    precision: 2
  }, {
    name: 'accountBalances',
    type: _fields.default.BOOLEAN,
    skipForList: true
  }]
};
var Order = {
  fields: [fields.client, {
    name: 'phone',
    type: _fields.default.STRING
  }, {
    name: 'address',
    type: _fields.default.STRING
  }, fields.total, {
    name: 'comment',
    type: _fields.default.STRING
  }, {
    name: 'cashbox',
    type: _fields.default.REFERENCE,
    entity: 'Cashbox',
    skipForList: true
  }, _objectSpread(_objectSpread({}, fields.total), {}, {
    name: 'payment'
  })],
  tables: [tables.products]
};
var Invoice = {
  fields: [fields.client, fields.total, {
    name: 'comment',
    type: _fields.default.STRING
  }],
  tables: [tables.products]
};
var Cashbox = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }]
};
var Payment = {
  fields: [{
    name: 'cashbox',
    type: _fields.default.REFERENCE,
    entity: 'Cashbox'
  }, fields.total, {
    name: 'comment',
    type: _fields.default.STRING
  }],
  tables: [{
    name: 'clientpayments',
    fields: [fields.client, fields.sum]
  }]
};
var Expense = {
  fields: [{
    name: 'cashbox',
    type: _fields.default.REFERENCE,
    entity: 'Cashbox'
  }, fields.contractor, fields.total, {
    name: 'comment',
    type: _fields.default.STRING
  }]
};
var DebtRecord = {
  skipForForm: true,
  fields: [fields.client],
  resources: [fields.sum]
};
var MoneyRecord = {
  skipForForm: true,
  fields: [{
    name: 'cashbox',
    type: _fields.default.REFERENCE,
    entity: 'Cashbox'
  }],
  resources: [fields.sum]
};
var ProductRecord = {
  skipForForm: true,
  fields: [{
    name: 'product',
    type: _fields.default.REFERENCE,
    entity: 'Product'
  }],
  resources: [fields.amount]
};
var PriceType = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }]
};
var PriceList = {
  fields: [{
    name: 'priceType',
    type: _fields.default.REFERENCE,
    entity: 'PriceType'
  }],
  tables: [{
    name: 'products',
    fields: [{
      name: 'product',
      type: _fields.default.REFERENCE,
      entity: 'Product'
    }, {
      name: 'price',
      type: _fields.default.DECIMAL,
      length: 10,
      precision: 2
    }]
  }]
};
var Receipt = {
  fields: [fields.contractor, fields.total, {
    name: 'priceType',
    type: _fields.default.REFERENCE,
    entity: 'PriceType'
  }],
  tables: [tables.products]
};
var SaleSchema = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }],
  tables: [{
    name: 'steps',
    fields: [{
      name: 'name',
      type: _fields.default.STRING
    }]
  }]
};
var Deal = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }, fields.client, fields.contact, fields.user, {
    name: 'schema',
    type: _fields.default.REFERENCE,
    entity: 'SaleSchema'
  }, {
    name: 'stepIndex',
    // index from sale schema
    type: _fields.default.INTEGER
  }, {
    name: 'dealClosed',
    type: _fields.default.BOOLEAN
  }]
};
var DealComment = {
  skipForForm: true,
  fields: [{
    name: 'deal',
    type: _fields.default.REFERENCE,
    entity: 'Deal'
  }, {
    name: 'date',
    type: _fields.default.DATE
  }, {
    name: 'user',
    type: _fields.default.REFERENCE,
    entity: 'User'
  }, {
    name: 'comment',
    type: _fields.default.STRING
  }]
};
var Task = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }, {
    name: 'date',
    type: _fields.default.DATE
  }, {
    name: 'done',
    type: _fields.default.BOOLEAN
  }, fields.client, fields.contact, {
    name: 'deal',
    type: _fields.default.REFERENCE,
    entity: 'Deal'
  }, fields.user]
};
var Contact = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }, fields.client]
};
var Settings = {
  fields: [{
    name: 'defaultSchema',
    type: _fields.default.REFERENCE,
    entity: 'SaleSchema'
  }, {
    name: 'companyName',
    type: _fields.default.STRING
  }, {
    name: 'companyInn',
    type: _fields.default.STRING
  }, {
    name: 'companyKpp',
    type: _fields.default.STRING
  }, {
    name: 'companyBankName',
    type: _fields.default.STRING
  }, {
    name: 'companyBankCode',
    type: _fields.default.STRING
  }, {
    name: 'companyBankCorrAccount',
    type: _fields.default.STRING
  }, {
    name: 'companyBankAccount',
    type: _fields.default.STRING
  }]
};
exports.Settings = Settings;
var title = 'Oktopad CRM';
exports.title = title;
var packageName = 'oktopad-crm';
exports.packageName = packageName;
var structures = {
  DealComment: DealComment,
  Contact: Contact,
  SaleSchema: SaleSchema,
  Deal: Deal,
  Task: Task,
  ProductRecord: ProductRecord,
  MoneyRecord: MoneyRecord,
  DebtRecord: DebtRecord,
  Note: Note,
  Cashbox: Cashbox,
  PriceType: PriceType,
  PriceList: PriceList,
  Product: Product,
  Receipt: Receipt,
  Expense: Expense,
  Payment: Payment,
  Client: Client,
  Invoice: Invoice,
  Order: Order
};
exports.structures = structures;