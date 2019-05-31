"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.structures = exports.packageName = exports.title = exports.Settings = exports.OrderStatuses = exports.fields = void 0;

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
  }
};
exports.fields = fields;
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
  }]
};
var OrderStatuses = [{
  title: 'New',
  value: 1
}, {
  title: 'Assigned',
  value: 2
}, {
  title: 'Completed',
  value: 9
}];
exports.OrderStatuses = OrderStatuses;
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
  }, _objectSpread({}, fields.total, {
    name: 'payment'
  }), {
    name: 'paymentToAgent',
    type: _fields.default.BOOLEAN
  }, {
    name: 'agent',
    type: _fields.default.REFERENCE,
    entity: 'User'
  }, {
    name: 'status',
    type: _fields.default.INTEGER
  }],
  tables: [{
    name: 'products',
    fields: [{
      name: 'product',
      type: _fields.default.REFERENCE,
      entity: 'Product'
    }, {
      name: 'amount',
      type: _fields.default.INTEGER
    }, {
      name: 'price',
      type: _fields.default.DECIMAL,
      length: 10,
      precision: 2
    }, fields.sum]
  }]
};
var Cashbox = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }, {
    name: 'availableToAgent',
    type: _fields.default.BOOLEAN
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
  }, fields.total, {
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
var Settings = {
  fields: [{
    name: 'companyName',
    type: _fields.default.STRING
  }]
};
exports.Settings = Settings;
var title = 'Assistant';
exports.title = title;
var packageName = 'katejs-assistant';
exports.packageName = packageName;
var structures = {
  MoneyRecord: MoneyRecord,
  DebtRecord: DebtRecord,
  Note: Note,
  Cashbox: Cashbox,
  Product: Product,
  Client: Client,
  Expense: Expense,
  Payment: Payment,
  Order: Order
};
exports.structures = structures;