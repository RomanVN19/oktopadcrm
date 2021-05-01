"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _katejs = require("katejs");

var _structure = require("../structure");

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

var Order = /*#__PURE__*/function (_Entity) {
  _inherits(Order, _Entity);

  var _super = _createSuper(Order);

  function Order(params) {
    var _this;

    _classCallCheck(this, Order);

    _this = _super.call(this, params);
    _this.structure = _structure.structures.Order;
    return _this;
  }

  _createClass(Order, [{
    key: "report",
    value: function () {
      var _report = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var ctx, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ctx = _ref.ctx, data = _ref.data;
                return _context.abrupt("return", this.query({
                  ctx: ctx,
                  data: {
                    limit: -1,
                    where: {
                      date: {
                        $gte: data.startDate,
                        $lte: data.endDate
                      }
                    },
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
                    raw: true
                  }
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function report(_x) {
        return _report.apply(this, arguments);
      }

      return report;
    }() // eslint-disable-next-line class-methods-use-this

  }, {
    key: "makeRecords",
    value: function makeRecords(doc) {
      var allRecords = {};

      if (doc.client && doc.total) {
        var records = [{
          client: doc.client,
          sum: doc.total
        }];

        if (doc.payment) {
          records.push({
            client: doc.client,
            sum: -doc.payment
          });
        }

        allRecords.DebtRecord = records;
      }

      if (doc.payment) {
        var _records = [{
          cashbox: doc.cashbox,
          sum: doc.payment
        }];
        allRecords.MoneyRecord = _records;
      }

      var products = [];
      (doc.products || []).forEach(function (row) {
        if (row.product.accountBalances) {
          products.push({
            product: row.product,
            amount: -row.amount
          });
        }
      });
      allRecords.ProductRecord = products.filter(function (item) {
        return item.amount < 0;
      });
      return allRecords;
    }
  }, {
    key: "take",
    value: function () {
      var _take = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
        var ctx, uuid, _yield$this$get, order;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ctx = _ref2.ctx, uuid = _ref2.data.uuid;
                _context2.next = 3;
                return this.get({
                  ctx: ctx,
                  data: {
                    uuid: uuid
                  }
                });

              case 3:
                _yield$this$get = _context2.sent;
                order = _yield$this$get.response;

                if (!(order.status !== 1)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", {
                  error: {
                    status: 400,
                    message: 'Order alredy taken'
                  }
                });

              case 7:
                return _context2.abrupt("return", this.put({
                  ctx: ctx,
                  data: {
                    uuid: uuid,
                    body: {
                      status: 2,
                      // assigned
                      agent: {
                        uuid: ctx.state.user.uuid
                      }
                    }
                  }
                }));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function take(_x2) {
        return _take.apply(this, arguments);
      }

      return take;
    }()
  }]);

  return Order;
}(_katejs.Entity);

exports.default = Order;

_defineProperty(Order, "doc", true);

_defineProperty(Order, "records", ['DebtRecord', 'MoneyRecord', 'ProductRecord']);