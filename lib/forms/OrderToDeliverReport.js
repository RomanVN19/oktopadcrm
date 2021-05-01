"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OrderReport = /*#__PURE__*/function (_Form) {
  _inherits(OrderReport, _Form);

  var _super = _createSuper(OrderReport);

  function OrderReport(args) {
    var _this;

    _classCallCheck(this, OrderReport);

    _this = _super.call(this, args);

    _defineProperty(_assertThisInitialized(_this), "formReport", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$getValues, date, showNegative, _yield$_this$app$Orde, response, clients, _yield$_this$app$Debt, debts;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$getValues = _this.getValues(), date = _this$getValues.date, showNegative = _this$getValues.showNegative;
              _context.next = 3;
              return _this.app.Order.query({
                where: {
                  date: {
                    $gte: (0, _moment.default)(date).startOf('day'),
                    $lte: (0, _moment.default)(date).endOf('day')
                  }
                },
                order: [['client', 'title']],
                limit: -1
              });

            case 3:
              _yield$_this$app$Orde = _context.sent;
              response = _yield$_this$app$Orde.response;
              clients = response.reduce(function (acc, order) {
                if (order.client && acc.indexOf(order.client.uuid) === -1) {
                  acc.push(order.client.uuid);
                }

                return acc;
              }, []);
              _context.next = 8;
              return _this.app.DebtRecord.balance({
                date: (0, _moment.default)(date).endOf('day'),
                where: {
                  clientUuid: clients
                }
              });

            case 8:
              _yield$_this$app$Debt = _context.sent;
              debts = _yield$_this$app$Debt.response;
              response.forEach(function (row) {
                var debt = debts.find(function (item) {
                  return item.clientUuid === (row.client && row.client.uuid);
                }); // eslint-disable-next-line no-param-reassign

                row.toPay = !debt || (!showNegative && debt.sum) < 0 ? 0 : debt.sum;
              });
              _this.content.data.value = response;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.elements = [{
      id: 'date',
      type: _client.Elements.DATE,
      title: 'Date',
      timeFormat: false,
      value: new Date()
    }, {
      id: 'showNegative',
      type: _client.Elements.CHECKBOX,
      title: 'Show negative sum'
    }, {
      id: 'formReport',
      type: _client.Elements.BUTTON,
      title: 'Form report',
      onClick: _this.formReport
    }, {
      id: 'data',
      type: _client.Elements.TABLE,
      columns: [{
        title: 'Order',
        dataPath: 'title'
      }, {
        title: 'Client',
        dataPath: 'client.title'
      }, {
        title: 'Phone',
        dataPath: 'phone'
      }, {
        title: 'Address',
        dataPath: 'address'
      }, {
        title: 'Sum',
        dataPath: 'total'
      }, {
        title: 'To pay',
        dataPath: 'toPay'
      }]
    }];
    return _this;
  }

  return OrderReport;
}(_client.Form);

exports.default = OrderReport;

_defineProperty(OrderReport, "title", 'Orders to deliver');

_defineProperty(OrderReport, "entity", 'Order');