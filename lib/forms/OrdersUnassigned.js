"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var filterAgentOrders = Symbol('filterAgentOrders');

var OrdersUnassigned =
/*#__PURE__*/
function (_Form) {
  _inherits(OrdersUnassigned, _Form);

  function OrdersUnassigned(args, hideDate) {
    var _this;

    _classCallCheck(this, OrdersUnassigned);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrdersUnassigned).call(this, args));

    _defineProperty(_assertThisInitialized(_this), "dateChange", function (value) {
      _this.app[filterAgentOrders].date = value;

      _this.load(value);
    });

    if (!_this.app[filterAgentOrders]) {
      _this.app[filterAgentOrders] = {
        date: new Date()
      };
    }

    _this.elements = [// {
    //   id: 'orders',
    //   type: Elements.TABLE,
    //   columns: [
    //     {
    //       title: 'Number',
    //       dataPath: 'number',
    //     },
    //     {
    //       title: 'Address',
    //       dataPath: 'address',
    //     },
    //     {
    //       title: 'To pay',
    //       dataPath: 'toPay',
    //     },
    //   ],
    //   rowClick: this.openOrder,
    //   value: [],
    // },
    {
      id: 'amount',
      type: _client.Elements.LABEL,
      tag: 'h4',
      title: 'Amount'
    }, {
      id: 'orders',
      type: _client.Elements.GROUP,
      elements: []
    }];

    if (!hideDate) {
      _this.elements.unshift({
        id: 'date',
        title: 'Date',
        type: _client.Elements.DATE,
        timeFormat: false,
        value: _this.app[filterAgentOrders].date,
        onChange: _this.dateChange
      });
    }

    return _this;
  }

  _createClass(OrdersUnassigned, [{
    key: "afterInit",
    value: function afterInit() {
      this.load(this.app[filterAgentOrders].date);
    }
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(date) {
        var _this2 = this;

        var agentUuid,
            status,
            sort,
            where,
            orderSort,
            _ref,
            orders,
            clients,
            _ref2,
            debts,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                agentUuid = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                status = _args.length > 2 ? _args[2] : undefined;
                sort = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
                where = {
                  agentUuid: agentUuid
                };

                if (date) {
                  where.date = {
                    $lte: (0, _moment.default)(date).endOf('day'),
                    $gte: (0, _moment.default)(date).startOf('day')
                  };
                }

                if (status) {
                  where.status = status;
                }

                if (sort) {
                  orderSort = [['address']];
                }

                _context.next = 9;
                return this.app.Order.query({
                  where: where,
                  limit: -1,
                  order: orderSort
                });

              case 9:
                _ref = _context.sent;
                orders = _ref.response;
                clients = orders.reduce(function (acc, order) {
                  if (order.client && acc.indexOf(order.client.uuid) === -1) {
                    acc.push(order.client.uuid);
                  }

                  return acc;
                }, []);
                _context.next = 14;
                return this.app.DebtRecord.balance({
                  date: (0, _moment.default)(date).endOf('day'),
                  where: {
                    clientUuid: clients
                  }
                });

              case 14:
                _ref2 = _context.sent;
                debts = _ref2.response;
                orders.forEach(function (row) {
                  var debt = debts.find(function (item) {
                    return item.clientUuid === (row.client && row.client.uuid);
                  }); // eslint-disable-next-line no-param-reassign

                  row.toPay = !debt || debt.sum < 0 ? 0 : debt.sum;
                });
                orders.forEach(function (order) {
                  // eslint-disable-next-line no-param-reassign
                  order.sameClient = orders.reduce(function (acc, val) {
                    return val.client.uuid === order.client.uuid && val.uuid !== order.uuid ? acc + 1 : acc;
                  }, 0);
                }); // this.content.orders.value = orders;

                this.content.orders.elements = orders.map(function (order) {
                  return {
                    type: _client.Elements.CARD,
                    elements: [{
                      type: _client.Elements.GROUP,
                      div: true,
                      style: {
                        display: 'flex'
                      },
                      elements: [{
                        type: _client.Elements.LABEL,
                        title: "".concat(_this2.app.t('Order'), " \u2116 ").concat(order.number).concat(order.sameClient ? "(+".concat(order.sameClient, ")") : '')
                      }, {
                        type: _client.Elements.BUTTON,
                        title: 'Details',
                        onClick: function onClick() {
                          return _this2.openOrder(order);
                        },
                        style: {
                          padding: 10,
                          marginLeft: 10
                        }
                      }]
                    }, {
                      type: _client.Elements.LABEL,
                      title: "".concat(_this2.app.t('Address'), " ").concat(order.address)
                    }, {
                      type: _client.Elements.LABEL,
                      title: order.comment || ''
                    }, {
                      type: _client.Elements.BUTTON,
                      title: 'Take order',
                      onClick: function onClick() {
                        return _this2.take(order);
                      },
                      hidden: order.status !== 1
                    }]
                  };
                });
                this.content.amount.title = "".concat(this.app.t('Amount'), ": ").concat(orders.length);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load(_x) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "openOrder",
    value: function openOrder(order) {
      this.app.currentOrder = order;
      this.app.open('OrderAgent');
    }
  }, {
    key: "take",
    value: function () {
      var _take = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(order) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.app.Order.take({
                  uuid: order.uuid
                });

              case 2:
                result = _context2.sent;

                if (result.response) {
                  this.load(this.app[filterAgentOrders].date);
                } else {
                  this.app.showAlert({
                    type: 'warning',
                    description: result.error.message
                  });
                }

              case 4:
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

  return OrdersUnassigned;
}(_client.Form);

exports.default = OrdersUnassigned;

_defineProperty(OrdersUnassigned, "title", 'Unassigned orders');