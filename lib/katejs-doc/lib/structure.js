"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.structures = exports.packageName = void 0;

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Doc = {
  fields: [{
    name: 'number',
    type: _fields.default.INTEGER
  }, {
    name: 'date',
    type: _fields.default.DATE
  }, {
    name: 'title',
    type: _fields.default.STRING,
    skipForForm: true
  }]
};
var Record = {
  fields: [{
    name: 'date',
    type: _fields.default.DATE
  }, {
    name: 'entity',
    type: _fields.default.STRING
  }, {
    name: 'docUuid',
    type: _fields.default.STRING
  }, {
    name: 'docTitle',
    type: _fields.default.STRING
  }]
};
var packageName = 'katejs-doc';
exports.packageName = packageName;
var structures = {
  Doc: Doc,
  Record: Record
};
exports.structures = structures;