"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packageName = exports.structures = void 0;

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trigger = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }, {
    name: 'conditionEntity',
    type: _fields.default.STRING
  }, {
    name: 'condition',
    type: _fields.default.STRING
  }, {
    name: 'actionEntity',
    type: _fields.default.STRING
  }, {
    name: 'actionEntityUuid',
    type: _fields.default.STRING
  }],
  tables: [{
    name: 'actionEntityFields',
    fields: [{
      name: 'field',
      type: _fields.default.STRING
    }, {
      name: 'value',
      type: _fields.default.STRING
    }]
  }]
};
var structures = {
  Trigger: Trigger
};
exports.structures = structures;
var packageName = 'katejs-trigger';
exports.packageName = packageName;