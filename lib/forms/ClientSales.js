"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ClientSales = /*#__PURE__*/function () {
  function ClientSales(params) {
    var _this = this;

    _classCallCheck(this, ClientSales);

    _defineProperty(this, "showModal", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.content.clientSalesModal.open = true;

              _this.exec();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object.assign(this, params);
    var style = {};
    var reportElements = [{
      id: 'clientSalesTitle',
      type: _client.Elements.LABEL,
      title: 'Clients sales',
      tag: 'h4'
    }, {
      id: 'clientSalesOrders',
      type: _client.Elements.LABEL,
      title: 'Sales count'
    }, {
      id: 'clientSalesOrdersSum',
      type: _client.Elements.LABEL,
      title: 'Sales sum'
    }, {
      id: 'clientSalesOrdersAverage',
      type: _client.Elements.LABEL,
      title: 'Sales average sum'
    }, {
      id: 'clientSalesData',
      type: _client.Elements.TABLE,
      style: style,
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
    }];

    if (this.report) {
      this.elements = reportElements;
      this.exec(this.clientUuid);
    } else {
      this.elements = [{
        type: _client.Elements.BUTTON,
        title: 'Client sales',
        onClick: this.showModal
      }, {
        id: 'clientSalesModal',
        type: _client.Elements.MODAL,
        maxWidth: 'md',
        open: false,
        elements: reportElements
      }];
    }
  }

  _createClass(ClientSales, [{
    key: "exec",
    value: function () {
      var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(clientUuid) {
        var _yield$this$app$Order, data, _yield$this$app$Order2, _yield$this$app$Order3, totals;

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
                    clientUuid: clientUuid
                  },
                  limit: -1,
                  raw: true
                });

              case 2:
                _yield$this$app$Order = _context2.sent;
                data = _yield$this$app$Order.response;
                this.content.clientSalesData.value = data;
                _context2.next = 7;
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
                    clientUuid: clientUuid
                  }
                });

              case 7:
                _yield$this$app$Order2 = _context2.sent;
                _yield$this$app$Order3 = _slicedToArray(_yield$this$app$Order2.response, 1);
                totals = _yield$this$app$Order3[0];
                this.content.clientSalesOrders.title = "".concat(this.app.t('Sales count'), ": ").concat(totals.amount);
                this.content.clientSalesOrdersSum.title = "".concat(this.app.t('Sales sum'), ": ").concat(totals.sum);
                this.content.clientSalesOrdersAverage.title = "".concat(this.app.t('Sales average sum'), ": ").concat(totals.amount > 0 ? (totals.sum / totals.amount).toFixed(2) : 0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function exec(_x) {
        return _exec.apply(this, arguments);
      }

      return exec;
    }()
  }]);

  return ClientSales;
}();

exports.default = ClientSales;