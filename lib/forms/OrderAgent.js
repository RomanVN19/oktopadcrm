"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

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

var OrderAgent =
/*#__PURE__*/
function (_Form) {
  _inherits(OrderAgent, _Form);

  function OrderAgent(args) {
    var _this;

    _classCallCheck(this, OrderAgent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrderAgent).call(this, args));

    _defineProperty(_assertThisInitialized(_this), "take",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.app.Order.take({
                uuid: _this.app.currentOrder.uuid
              });

            case 2:
              result = _context.sent;

              if (result.response) {
                _this.app.open('OrdersMy');
              } else {
                _this.app.showAlert({
                  type: 'warning',
                  description: result.error.message
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "done",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.app.Order.done({
                uuid: _this.app.currentOrder.uuid,
                payment: _this.content.payment.value,
                cardPayment: _this.content.cardPayment.value,
                cashbox: _this.content.cashbox.value
              });

            case 2:
              result = _context2.sent;

              if (result.response) {
                _this.app.open('OrdersMy');
              } else {
                _this.app.showAlert({
                  type: 'warning',
                  description: result.error.message
                });
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "cardPaymentChange", function (val) {
      _this.content.cashbox.hidden = !val;
    });

    _defineProperty(_assertThisInitialized(_this), "getCashboxes",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(query) {
        var where, _ref4, response;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                where = {
                  availableToAgent: true
                };

                if (query) {
                  where.title = {
                    $like: "%".concat(query, "%")
                  };
                }

                _context3.next = 4;
                return _this.app.Cashbox.query({
                  where: where
                });

              case 4:
                _ref4 = _context3.sent;
                response = _ref4.response;
                return _context3.abrupt("return", response);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    if (!_this.app.currentOrder) {
      _this.app.open('OrdersUnassigned');

      _this.elements = []; // to pass through form init

      return _possibleConstructorReturn(_this);
    }

    var _this$app$currentOrde = _this.app.currentOrder,
        title = _this$app$currentOrde.title,
        clientRef = _this$app$currentOrde.client,
        comment = _this$app$currentOrde.comment,
        payment = _this$app$currentOrde.payment,
        phone = _this$app$currentOrde.phone,
        address = _this$app$currentOrde.address,
        products = _this$app$currentOrde.products,
        toPay = _this$app$currentOrde.toPay,
        status = _this$app$currentOrde.status;
    var consist = products.map(function (item) {
      return "".concat(item.product.title, " x ").concat(item.amount, " ");
    }).join('; ');
    var client = (clientRef || {}).title;
    var orderAcions = [];

    if (status === 1) {
      orderAcions.push({
        type: _client.Elements.BUTTON,
        title: 'Take order',
        onClick: _this.take
      });
    }

    if (status === 2) {
      orderAcions.push({
        id: 'payment',
        type: _client.Elements.INPUT,
        title: 'Received',
        format: (0, _client.decimalFormat)(15, 2),
        disabled: !!payment,
        value: payment ? 0 : toPay
      }, {
        type: _client.Elements.CHECKBOX,
        title: 'Card payment',
        id: 'cardPayment',
        value: false,
        onChange: _this.cardPaymentChange
      }, _objectSpread({}, (0, _client.getElement)({
        name: 'cashbox',
        type: _fields.default.REFERENCE,
        entity: 'Cashbox'
      }, _assertThisInitialized(_this)), {
        title: 'Terminal',
        hidden: true,
        getOptions: _this.getCashboxes
      }), {
        type: _client.Elements.BUTTON,
        title: 'Money received \nOrder completed',
        onClick: _this.done,
        style: {
          whiteSpace: 'pre-wrap'
        }
      });
    }

    _this.elements = [{
      title: title,
      type: _client.Elements.LABEL
    }, {
      title: "".concat(_this.app.t('Client'), " ").concat(client),
      type: _client.Elements.LABEL
    }, {
      type: _client.Elements.GROUP,
      div: true,
      style: {
        display: 'flex'
      },
      elements: [{
        title: "".concat(_this.app.t('Phone'), ": "),
        type: _client.Elements.LABEL
      }, {
        title: phone,
        type: _client.Elements.LABEL,
        tag: 'a',
        href: "tel:".concat(phone)
      }]
    }, {
      title: "".concat(_this.app.t('Address'), " ").concat(address),
      type: _client.Elements.LABEL
    }, {
      title: "".concat(_this.app.t('Consist'), " ").concat(consist),
      type: _client.Elements.LABEL
    }, {
      title: "".concat(_this.app.t('Comment'), " ").concat(comment),
      type: _client.Elements.LABEL
    }, {
      title: "".concat(_this.app.t('To pay'), ": ").concat(toPay || _this.app.t('Paid')),
      type: _client.Elements.LABEL
    }, {
      id: 'orderActions',
      type: _client.Elements.GRID,
      elements: orderAcions
    }];
    return _this;
  }

  return OrderAgent;
}(_client.Form);

exports.default = OrderAgent;

_defineProperty(OrderAgent, "title", 'Order');