"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

var _utils = require("../utils");

var _structure = require("../structure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Payment = _structure.structures.Payment;

var PaymentItem =
/*#__PURE__*/
function (_ItemForm) {
  _inherits(PaymentItem, _ItemForm);

  function PaymentItem(params) {
    var _this;

    _classCallCheck(this, PaymentItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaymentItem).call(this, params));

    _defineProperty(_assertThisInitialized(_this), "fillByDebts",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _ref2, debts, payments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.app.DebtRecord.balance({
                date: _this.content.date.value
              });

            case 2:
              _ref2 = _context.sent;
              debts = _ref2.response;
              payments = debts.map(function (debt) {
                return {
                  client: debt.client,
                  sum: !debt || debt.sum < 0 ? 0 : debt.sum
                };
              }).filter(function (item) {
                return item.sum;
              });
              _this.content.clientpayments.value = payments;

              _this.sumChange();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "sumChange", function () {
      var total = _this.content.clientpayments.value.reduce(function (acc, val) {
        return val.sum ? acc + +val.sum : acc;
      }, 0);

      _this.content.total.value = total.toFixed(2);
    });

    _defineProperty(_assertThisInitialized(_this), "openModal", function () {
      _this.content.agentSelectModal.open = true;
    });

    _defineProperty(_assertThisInitialized(_this), "fillByAgent",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var _this$getValues, agent, date, agentCashbox, where, _ref4, orders, payments;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$getValues = _this.getValues(), agent = _this$getValues.agent, date = _this$getValues.date, agentCashbox = _this$getValues.agentCashbox;
              where = {
                paymentToAgent: true,
                date: (0, _utils.wholeDay)(date),
                cashboxUuid: agentCashbox ? agentCashbox.uuid : null
              };

              if (agent) {
                where.agentUuid = agent.uuid;
              }

              _context2.next = 5;
              return _this.app.Order.query({
                where: where
              });

            case 5:
              _ref4 = _context2.sent;
              orders = _ref4.response;
              payments = orders.map(function (order) {
                return {
                  client: order.client,
                  sum: order.payment
                };
              }).filter(function (item) {
                return item.sum;
              });
              _this.content.clientpayments.value = payments;

              _this.sumChange();

              _this.content.agentSelectModal.open = false;

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _this.elements.get('clientpaymentsCardActions').elements.push({
      type: _client.Elements.BUTTON,
      title: 'Fill by debts',
      onClick: _this.fillByDebts
    }, {
      type: _client.Elements.BUTTON,
      title: 'Fill by agent',
      onClick: _this.openModal
    }, {
      id: 'agentSelectModal',
      type: _client.Elements.MODAL,
      noScroll: true,
      open: false,
      elements: [(0, _client.getElement)({
        name: 'agent',
        type: _fields.default.REFERENCE,
        entity: 'User'
      }, _assertThisInitialized(_this)), _objectSpread({}, (0, _client.getElement)({
        name: 'agentCashbox',
        type: _fields.default.REFERENCE,
        entity: 'Cashbox'
      }, _assertThisInitialized(_this)), {
        title: 'Cashbox'
      }), {
        type: _client.Elements.BUTTON,
        title: 'Apply',
        onClick: _this.fillByAgent
      }]
    });

    var table = _this.elements.get('clientpayments');

    table.columns[2].onChange = _this.sumChange;
    table.onDelete = _this.sumChange;
    return _this;
  }

  return PaymentItem;
}((0, _client.ItemForm)({
  Payment: Payment
}, {
  addActions: true,
  addElements: true
}));

_defineProperty(PaymentItem, "doc", true);

var _default = PaymentItem;
exports.default = _default;