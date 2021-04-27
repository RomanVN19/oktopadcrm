"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _structure = require("../structure");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var Payment = _structure.structures.Payment;

var PaymentItem = /*#__PURE__*/function (_ItemForm) {
  _inherits(PaymentItem, _ItemForm);

  var _super = _createSuper(PaymentItem);

  function PaymentItem(params) {
    var _this;

    _classCallCheck(this, PaymentItem);

    _this = _super.call(this, params);

    _defineProperty(_assertThisInitialized(_this), "fillByDebts", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _yield$_this$app$Debt, debts, payments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.app.DebtRecord.balance({
                date: _this.content.date.value
              });

            case 2:
              _yield$_this$app$Debt = _context.sent;
              debts = _yield$_this$app$Debt.response;
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

    _defineProperty(_assertThisInitialized(_this), "getOptionsClient", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(query) {
        var _yield$_this$app$Clie, response;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.app.Client.query({
                  where: {
                    $or: [{
                      title: {
                        $like: "%".concat(query || '', "%")
                      }
                    }, {
                      phone: {
                        $like: "%".concat(query || '', "%")
                      }
                    }, {
                      address: {
                        $like: "%".concat(query || '', "%")
                      }
                    }]
                  }
                });

              case 2:
                _yield$_this$app$Clie = _context2.sent;
                response = _yield$_this$app$Clie.response;
                return _context2.abrupt("return", (response || []).map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    title: "".concat(item.title, " (").concat(item.phone || '', " ").concat(item.address || '', ")")
                  });
                }));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _this.elements.get('cashbox').openOnFocus = true;

    _this.elements.get('clientpaymentsCardActions').elements.push({
      type: _client.Elements.BUTTON,
      title: 'Fill by debts',
      onClick: _this.fillByDebts
    });

    var table = _this.elements.get('clientpayments');

    table.columns[2].onChange = _this.sumChange;
    table.onDelete = _this.sumChange;
    table.columns[1].getOptions = _this.getOptionsClient;
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