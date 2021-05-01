"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _client = require("katejs/lib/client");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SpreadPayment = /*#__PURE__*/function () {
  function SpreadPayment(_ref) {
    var _this = this;

    var form = _ref.form;

    _classCallCheck(this, SpreadPayment);

    _defineProperty(this, "open", function (client) {
      _this.content.spreadPaymentModal.title = _this.app.t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Spread payment from ", ""])), client.title);
      _this.content.spreadPaymentModal.open = true;
      _this.client = client;
    });

    _defineProperty(this, "spread", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var sum, _yield$_this$app$Orde, orders, index, sumToPay;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.log(_this.app.t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Doing spread..."]))), true);

              sum = _this.content.spreadPaymentSum.value;
              _this.content.spreadPaymentSum.value = 0;

              if (!sum) {
                _this.log(_this.app.t(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["No sum!"]))));
              }

              _context.next = 6;
              return _this.app.Order.query({
                where: {
                  clientUuid: _this.client.uuid,
                  $or: [{
                    payed: null
                  }, {
                    $literal: 'total != payed'
                  }]
                },
                order: ['date']
              });

            case 6:
              _yield$_this$app$Orde = _context.sent;
              orders = _yield$_this$app$Orde.response;
              index = 0;

            case 9:
              if (!(index < orders.length && sum > 0)) {
                _context.next = 20;
                break;
              }

              if (!orders[index].total) {
                _context.next = 17;
                break;
              }

              orders[index].payed = orders[index].payed || 0;
              sumToPay = orders[index].total - orders[index].payed;

              if (sumToPay > sum) {
                orders[index].payed += sum;

                _this.log(_this.app.t(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Spreaded ", " to order ", ""])), sum, (0, _moment.default)(orders[index].date).format('DD.MM.YYYY')));

                sum = 0;
              } else {
                sum -= sumToPay;
                orders[index].payed = orders[index].total;

                _this.log(_this.app.t(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Spreaded ", " to order ", ""])), sumToPay, (0, _moment.default)(orders[index].date).format('DD.MM.YYYY')));
              }

              if (index === orders.length - 1 && sum > 0) {
                _this.log(_this.app.t(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Rest sum ", ""])), sum));

                orders[index].payed += sum;

                _this.log(_this.app.t(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Spreaded ", " to order ", ""])), sum, (0, _moment.default)(orders[index].date).format('DD.MM.YYYY')));
              } // eslint-disable-next-line no-await-in-loop


              _context.next = 17;
              return _this.app.Order.put({
                uuid: orders[index].uuid,
                body: {
                  payed: orders[index].payed
                }
              });

            case 17:
              index += 1;
              _context.next = 9;
              break;

            case 20:
              _this.form.load();

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    this.elements = form.elements;
    this.content = form.content;
    this.app = form.app;
    this.form = form;
    this.elements.push({
      id: 'spreadPaymentModal',
      type: _client.Elements.MODAL,
      title: 'Spread payment',
      maxWidth: 'sm',
      // fullWidth: true,
      open: false,
      elements: [{
        type: _client.Elements.GRID,
        elements: [{
          id: 'spreadPaymentSum',
          type: _client.Elements.INPUT,
          title: 'Sum',
          format: (0, _client.decimalFormat)(15, 2),
          cols: 6
        }, {
          id: 'spreadPaymentDo',
          type: _client.Elements.BUTTON,
          title: 'Spread',
          onClick: this.spread,
          cols: 3
        }]
      }, {
        id: 'spreadPaymentLog',
        title: '',
        type: _client.Elements.LABEL,
        style: {
          whiteSpace: 'pre-wrap'
        }
      }]
    });
  }

  _createClass(SpreadPayment, [{
    key: "log",
    value: function log(msg, clear) {
      if (clear) {
        this.content.spreadPaymentLog.title = "".concat(msg, "\n");
      } else {
        this.content.spreadPaymentLog.title += "".concat(msg, "\n");
      }
    }
  }]);

  return SpreadPayment;
}();

exports.default = SpreadPayment;