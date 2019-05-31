"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.structures = exports.packageName = void 0;

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntityDescription = {
  fields: [{
    name: 'date',
    type: _fields.default.DATEONLY
  }, {
    name: 'entity',
    type: _fields.default.STRING
  }, {
    name: 'description',
    type: _fields.default.TEXT
  }]
};
var packageName = 'katejs-docs';
exports.packageName = packageName;
var structures = {
  EntityDescription: EntityDescription
};
exports.structures = structures;