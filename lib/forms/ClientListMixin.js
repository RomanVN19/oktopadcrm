"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(ListForm) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_ListForm) {
    _inherits(ClientList, _ListForm);

    function ClientList(args) {
      var _this;

      _classCallCheck(this, ClientList);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ClientList).call(this, args));

      _defineProperty(_assertThisInitialized(_this), "clientChange", function () {
        if (_this.changeTimeout) clearTimeout(_this.changeTimeout);
        _this.changeTimeout = setTimeout(_this.search, 400);
      });

      _defineProperty(_assertThisInitialized(_this), "search", function () {
        var query = _this.content.client.value;
        _this.filters = {
          $or: [{
            title: {
              $like: "%".concat(query, "%")
            }
          }, {
            phone: {
              $like: "%".concat(query, "%")
            }
          }, {
            address: {
              $like: "%".concat(query, "%")
            }
          }]
        };

        _this.load();
      });

      _this.elements.unshift({
        type: _client.Elements.GRID,
        elements: [{
          id: 'client',
          title: 'Search (name, phone, address)',
          type: _client.Elements.INPUT,
          onChange: _this.clientChange,
          cols: 4
        }]
      });

      return _this;
    }

    return ClientList;
  }(ListForm), _temp;
};

exports.default = _default;