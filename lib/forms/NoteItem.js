"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _structure = require("../structure");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Note = _structure.structures.Note;

var NoteItem =
/*#__PURE__*/
function (_ItemForm) {
  _inherits(NoteItem, _ItemForm);

  function NoteItem(params) {
    var _this;

    _classCallCheck(this, NoteItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoteItem).call(this, params));

    _this.elements.push({
      id: 'grid',
      type: _client.Elements.GRID,
      elements: [_objectSpread({
        cols: 8
      }, (0, _client.getElement)(Note.fields[0], _assertThisInitialized(_this))), // title
      _objectSpread({
        cols: 4
      }, (0, _client.getElement)(Note.fields[1], _assertThisInitialized(_this)))]
    }, {
      id: 'tabs',
      type: _client.Elements.TABS,
      elements: [{
        title: 'Description',
        elements: [(0, _client.getElement)(Note.fields[2], _assertThisInitialized(_this))]
      }, {
        title: 'Checklist',
        elements: [(0, _client.getTableElement)(Note.tables[0], _assertThisInitialized(_this))]
      }]
    });

    _this.elements.get('checklist').columns[0].width = 50;
    return _this;
  }

  return NoteItem;
}((0, _client.ItemForm)({
  Note: Note
}, {
  addActions: true
}));

var _default = NoteItem;
exports.default = _default;