"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _utils = require("../utils");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dashboard =
/*#__PURE__*/
function (_Form) {
  _inherits(Dashboard, _Form);

  function Dashboard(args) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this, args));
    _this.elements = [{
      type: _client.Elements.GRID,
      elements: [{
        type: _client.Elements.CARD,
        cols: 6,
        elements: [{
          type: _client.Elements.LABEL,
          title: 'Today',
          tag: 'h3'
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
            dataPath: 'products.0.product.title'
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

    _this.loadOrdersCount();

    _this.loadProductSales();

    return _this;
  }

  _createClass(Dashboard, [{
    key: "loadOrdersCount",
    value: function () {
      var _loadOrdersCount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _ref, _ref$response, totals;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
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
                    date: (0, _utils.wholeDay)(new Date())
                  }
                });

              case 2:
                _ref = _context.sent;
                _ref$response = _slicedToArray(_ref.response, 1);
                totals = _ref$response[0];
                this.content.ordersTotalsLabel.title = "".concat(this.app.t('Orders count'), ": ").concat(totals.amount, " (").concat(totals.sum, ")");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadOrdersCount() {
        return _loadOrdersCount.apply(this, arguments);
      }

      return loadOrdersCount;
    }()
  }, {
    key: "loadProductSales",
    value: function () {
      var _loadProductSales = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _ref2, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
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
                    date: (0, _utils.wholeDay)(new Date())
                  },
                  limit: -1
                });

              case 2:
                _ref2 = _context2.sent;
                data = _ref2.response;
                this.content.productSalesData.value = data;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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