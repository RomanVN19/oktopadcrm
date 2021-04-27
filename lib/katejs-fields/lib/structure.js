"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packageName = exports.structures = exports.FieldTypeOptions = exports.FieldType = void 0;

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExtraFieldsList = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }, {
    name: 'entityName',
    type: _fields.default.STRING
  }],
  tables: [{
    name: 'fieldsList',
    fields: [{
      name: 'name',
      type: _fields.default.STRING
    }, {
      name: 'type',
      type: _fields.default.STRING
    }, {
      name: 'values',
      type: _fields.default.REFERENCE,
      entity: 'ExtraFieldValuesList'
    }, {
      name: 'entityName',
      type: _fields.default.STRING
    }]
  }]
};
var ExtraFieldValuesList = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }],
  tables: [{
    name: 'values',
    fields: [{
      name: 'value',
      type: _fields.default.STRING
    }]
  }]
};
var EntityFieldsValuesList = {
  skipForForm: true,
  fields: [{
    name: 'entityUuid',
    type: _fields.default.STRING
  }],
  tables: [{
    name: 'values',
    fields: [{
      name: 'name',
      type: _fields.default.STRING
    }, {
      name: 'value',
      type: _fields.default.STRING
    }, {
      name: 'valueTitle',
      type: _fields.default.STRING
    }]
  }]
};
var FieldType = {
  'Numeric': 'Numeric',
  'String': 'String',
  'Date': 'Date',
  'Reference': 'Reference',
  'Select': 'Select'
};
exports.FieldType = FieldType;
var FieldTypeOptions = Object.keys(FieldType).map(function (key) {
  return {
    title: key,
    value: FieldType[key]
  };
});
exports.FieldTypeOptions = FieldTypeOptions;
var structures = {
  ExtraFieldsList: ExtraFieldsList,
  ExtraFieldValuesList: ExtraFieldValuesList,
  EntityFieldsValuesList: EntityFieldsValuesList
};
exports.structures = structures;
var packageName = 'katejs-fields';
exports.packageName = packageName;