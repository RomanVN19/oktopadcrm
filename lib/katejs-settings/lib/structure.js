"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packageName = exports.structures = void 0;

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Settings = {
  fields: [{
    name: 'user',
    type: _fields.default.REFERENCE,
    entity: 'User'
  }, {
    name: 'date',
    type: _fields.default.DATE
  }]
};
var structures = {
  Settings: Settings
};
exports.structures = structures;
var packageName = 'katejs-settings';
exports.packageName = packageName;