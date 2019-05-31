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

var fields = _structure.structures.Doc.fields;

var DocForm = function DocForm(ItemForm) {
  return (
    /*#__PURE__*/
    function (_ItemForm) {
      _inherits(DocItem, _ItemForm);

      function DocItem(params) {
        var _this;

        _classCallCheck(this, DocItem);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(DocItem).call(this, params));

        _this.elements.unshift({
          type: _client.Elements.GRID,
          elements: [(0, _client.getElement)(fields[0], _assertThisInitialized(_this)), (0, _client.getElement)(fields[1], _assertThisInitialized(_this))]
        });

        if (!_this.uuid) {
          _this.elements.get('date').value = new Date();
        }

        return _this;
      }

      return DocItem;
    }(ItemForm)
  );
};

var _default = DocForm;
exports.default = _default;