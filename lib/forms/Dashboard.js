"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _moment = _interopRequireDefault(require("moment"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dashboard = /*#__PURE__*/function (_Form) {
  _inherits(Dashboard, _Form);

  var _super = _createSuper(Dashboard);

  function Dashboard(args) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _super.call(this, args);

    _defineProperty(_assertThisInitialized(_this), "next", function () {
      _this.date = (0, _moment.default)(_this.date).add(1, 'day');

      _this.load();
    });

    _defineProperty(_assertThisInitialized(_this), "prev", function () {
      _this.date = (0, _moment.default)(_this.date).add(-1, 'day');

      _this.load();
    });

    _this.date = new Date();
    _this.elements = [{
      type: _client.Elements.GRID,
      elements: [{
        type: _client.Elements.CARD,
        cols: 6,
        elements: [{
          type: _client.Elements.GROUP,
          div: true,
          style: {
            display: 'flex'
          },
          elements: [{
            type: _client.Elements.LABEL,
            id: 'title',
            title: (0, _moment.default)(_this.date).format('DD.MM.YYYY'),
            tag: 'h3',
            style: {
              marginRight: 50
            }
          }, {
            type: _client.Elements.BUTTON,
            title: 'Prev',
            onClick: _this.prev
          }, {
            type: _client.Elements.BUTTON,
            title: 'Next',
            onClick: _this.next
          }]
        }, {
          id: 'ordersTotalsLabel',
          type: _client.Elements.LABEL,
          title: '',
          tag: 'h5'
        }, {
          id: 'productSalesData',
          type: _client.Elements.TABLE,
          columns: [{
            title: 'Product',
            dataPath: 'products.product.title'
          }, {
            title: 'Amount',
            dataPath: 'amount'
          }, {
            title: 'Sum',
            dataPath: 'sum'
          }],
          value: []
        }]
      }]
    }];

    _this.load();

    return _this;
  }

  _createClass(Dashboard, [{
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.content.title.title = (0, _moment.default)(this.date).format('DD.MM.YYYY');
                this.loadOrdersCount();
                this.loadProductSales();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "loadOrdersCount",
    value: function () {
      var _loadOrdersCount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _yield$this$app$Order, _yield$this$app$Order2, totals;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.app.Order.query({
                  noOptions: true,
                  attributes: [[{
                    $func: {
                      fn: 'COUNT',
                      col: 'uuid'
                    }
                  }, 'amount'], [{
                    $func: {
                      fn: 'SUM',
                      col: 'total'
                    }
                  }, 'sum']],
                  where: {
                    date: (0, _utils.wholeDay)(this.date)
                  }
                });

              case 2:
                _yield$this$app$Order = _context2.sent;
                _yield$this$app$Order2 = _slicedToArray(_yield$this$app$Order.response, 1);
                totals = _yield$this$app$Order2[0];
                this.content.ordersTotalsLabel.title = "".concat(this.app.t('Orders count'), ": ").concat(totals.amount, " (").concat(totals.sum || 0, ")");

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadOrdersCount() {
        return _loadOrdersCount.apply(this, arguments);
      }

      return loadOrdersCount;
    }()
  }, {
    key: "loadProductSales",
    value: function () {
      var _loadProductSales = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _yield$this$app$Order3, data;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.app.Order.query({
                  attributes: [[{
                    $func: {
                      fn: 'SUM',
                      col: 'products.amount'
                    }
                  }, 'amount'], [{
                    $func: {
                      fn: 'SUM',
                      col: 'products.sum'
                    }
                  }, 'sum']],
                  group: [{
                    $col: 'products->product.uuid'
                  }],
                  order: [{
                    $col: 'products->product.title'
                  }],
                  where: {
                    date: (0, _utils.wholeDay)(this.date)
                  },
                  limit: -1,
                  raw: true
                });

              case 2:
                _yield$this$app$Order3 = _context3.sent;
                data = _yield$this$app$Order3.response;
                this.content.productSalesData.value = data;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadProductSales() {
        return _loadProductSales.apply(this, arguments);
      }

      return loadProductSales;
    }()
  }]);

  return Dashboard;
}(_client.Form);

exports.default = Dashboard;

_defineProperty(Dashboard, "title", 'Dashboard');