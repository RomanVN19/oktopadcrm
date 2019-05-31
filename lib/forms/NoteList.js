"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _structure = require("../structure");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doneFilter = {
  noteDone: false
};
var Note = _structure.structures.Note;

var NoteList =
/*#__PURE__*/
function (_ListForm) {
  _inherits(NoteList, _ListForm);

  // for menu filter
  function NoteList(params) {
    var _this;

    _classCallCheck(this, NoteList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoteList).call(this, params));

    _defineProperty(_assertThisInitialized(_this), "showAll", function (val) {
      _this.filters = val ? undefined : doneFilter;

      _this.load();
    });

    _this.actions.push({
      type: _client.Elements.SWITCH,
      id: 'showAll',
      title: 'Show all',
      value: false,
      panelStyle: true,
      onChange: _this.showAll
    });

    _this.filters = doneFilter;

    _this.elements.get('list').columns.find(function (col) {
      return col.dataPath === 'noteDone';
    }).format = function (val) {
      return val ? '✔' : '';
    };

    return _this;
  }

  return NoteList;
}((0, _client.ListForm)({
  Note: Note
}, {
  addActions: true,
  addElements: true
}));

_defineProperty(NoteList, "entity", 'Note');

var _default = NoteList;
exports.default = _default;