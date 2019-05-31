"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.structures = exports.packageName = void 0;

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrintTemplate = {
  fields: [{
    name: 'title',
    type: _fields.default.STRING
  }, {
    name: 'content',
    type: _fields.default.TEXT,
    skipForList: true,
    rows: 10
  }]
};
var packageName = 'katejs-print';
exports.packageName = packageName;
var structures = {
  PrintTemplate: PrintTemplate
};
exports.structures = structures;