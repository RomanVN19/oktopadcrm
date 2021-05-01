"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OrderItem = require("./OrderItem");

var _client = require("katejs/lib/client");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(Form) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Form) {
    _inherits(InvoiceItem, _Form);

    var _super = _createSuper(InvoiceItem);

    function InvoiceItem(args) {
      var _this;

      _classCallCheck(this, InvoiceItem);

      _this = _super.call(this, args);
      _this.productTable = new _OrderItem.ProductsTable(_assertThisInitialized(_this));

      _this.actions.push({
        type: _client.Elements.BUTTON,
        title: 'Print',
        onClick: function onClick() {
          return _this.print();
        }
      });

      if (_this.app.allow('Order', 'put')) {
        _this.actions.push({
          type: _client.Elements.BUTTON,
          title: 'Order',
          onClick: function onClick() {
            return _this.order();
          }
        });
      }

      return _this;
    }

    _createClass(InvoiceItem, [{
      key: "afterInit",
      value: function afterInit() {
        if (_get(_getPrototypeOf(InvoiceItem.prototype), "afterInit", this)) {
          _get(_getPrototypeOf(InvoiceItem.prototype), "afterInit", this).call(this);
        }

        if (!this.uuid) {
          this.content.client.value = this.app.vars.currentClient;
          this.app.vars.currentClient = undefined;
        }
      }
    }, {
      key: "print",
      value: function () {
        var _print = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _yield$this$app$Invoi, doc, data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.save();

                case 2:
                  _context.next = 4;
                  return this.app.Invoice.get({
                    uuid: this.uuid
                  });

                case 4:
                  _yield$this$app$Invoi = _context.sent;
                  doc = _yield$this$app$Invoi.response;
                  data = _objectSpread(_objectSpread(_objectSpread({}, doc), {}, {
                    date: (0, _moment.default)(doc.date).format('DD.MM.YYYY')
                  }, this.app.settings), {}, {
                    products: doc.products.map(function (item) {
                      return _objectSpread(_objectSpread({}, item), {}, {
                        price: item.price.toFixed(2),
                        sum: item.sum.toFixed(2)
                      });
                    }),
                    total: doc.total.toFixed(2)
                  });
                  this.app.print({
                    template: 'Invoice',
                    data: data
                  });

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function print() {
          return _print.apply(this, arguments);
        }

        return print;
      }()
    }, {
      key: "close",
      value: function close() {
        window.history.back();
      }
    }, {
      key: "order",
      value: function () {
        var _order = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.save();

                case 2:
                  this.app.vars.currentInvoiceData = this.getValues();
                  this.app.open('OrderItem', {});

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function order() {
          return _order.apply(this, arguments);
        }

        return order;
      }()
    }]);

    return InvoiceItem;
  }(Form), _defineProperty(_class, "doc", true), _temp;
}; //   <!doctype html>
// <html lang="en">
//   <head>
//   <!-- Required meta tags -->
// <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//
//   <!-- Bootstrap CSS -->
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//
//   <title>Счет</title>
//   <style>
//   html, body {
//   width: 210mm;
//   height: 297mm;
// }
// </style>
// </head>
// <body>
//
// <table width="100%" style="font-family: Arial;">
//   <tr style="display: none;">
//   <td style="width: 68%; padding: 20px 0;">
//   <div style="text-align: justify; font-size: 11pt;">Внимание! Оплата данного счета означает согласие с условиями поставки товара. Счет действителен в течение 5(пяти) банковских дней, не считая дня выписки счета. Уведомление об оплате  обязательно, в противном случае НЕ ГАРАНТИРУЕТСЯ наличие товара на складе. Товар отпускается по факту прихода денег на р/с Поставщика, самовывозом, при наличии доверенности и паспорта.</div>
// </td>
// <td style="width: 32%; text-align: center; padding: 30px 0;"><img src="<!--Лого url-->" style="width: 70%;"></td>
//   </tr>
//
//   </table>
//
//
//   <table width="100%" border="2" style="border-collapse: collapse; width: 100%; font-family: Arial;" cellpadding="2" cellspacing="2">
//   <tr style="">
//   <td colspan="2" rowspan="2" style="min-height:13mm; width: 105mm;">
//   <table width="100%" border="0" cellpadding="0" cellspacing="0" style="height: 13mm;">
//   <tr>
//   <td valign="top">
//   <div>{{ companyBankName }}</div>
// </td>
// </tr>
// <tr>
// <td valign="bottom" style="height: 3mm;">
//   <div style="font-size:10pt;">Банк получателя</div>
// </td>
// </tr>
// </table>
// </td>
// <td style="min-height:7mm;height:auto; width: 25mm;">
//   <div>БИK</div>
//   </td>
//   <td rowspan="2" style="vertical-align: top; width: 60mm;">
//   <div style=" height: 7mm; line-height: 7mm; vertical-align: middle;">{{companyBankCode}}</div>
// <div>{{companyBankCorrAccount}}</div>
// </td>
// </tr>
// <tr>
// <td style="width: 25mm;">
//   <div>Сч. №</div>
// </td>
// </tr>
// <tr>
// <td style="min-height:6mm; height:auto; width: 50mm;">
//   <div>ИНН {{companyInn}}</div>
// </td>
// <td style="min-height:6mm; height:auto; width: 55mm;">
//   <div>КПП {{companyKpp}}</div>
// </td>
// <td rowspan="2" style="min-height:19mm; height:auto; vertical-align: top; width: 25mm;">
//   <div>Сч. №</div>
// </td>
// <td rowspan="2" style="min-height:19mm; height:auto; vertical-align: top; width: 60mm;">
//   <div>{{companyBankAccount}}</div>
// </td>
// </tr>
// <tr>
// <td colspan="2" style="min-height:13mm; height:auto;">
//
//   <table border="0" cellpadding="0" cellspacing="0" style="height: 13mm; width: 105mm;">
//   <tr>
//   <td valign="top">
//   <div>{{companyName}}</div>
// </td>
// </tr>
// <tr>
// <td valign="bottom" style="height: 3mm;">
//   <div style="font-size: 10pt;">Получатель</div>
//   </td>
//   </tr>
//   </table>
//
//   </td>
//   </tr>
//   </table>
//   <br/>
//
//   <div style="font-weight: bold; font-size: 25pt; padding-left:5px; font-family: Arial;">
//   Счет № {{number}} от {{date}}</div>
// <br/>
//
// <div style="background-color:#000000; width:100%; font-size:1px; height:2px;">&nbsp;</div>
//
// <table width="100%" style="font-family: Arial;">
//   <tr>
//   <td style="width: 30mm; vertical-align: top;">
//   <div style=" padding-left:2px; ">Поставщик:    </div>
// </td>
// <td>
// <div style="font-weight:bold;  padding-left:2px;">
//   {{companyName}} ИНН  {{companyInn}}, КПП {{companyKpp}}<br>
// <span style="font-weight: normal;"><!--  address --></span>          </div>
// </td>
// </tr>
// <tr>
// <td style="width: 30mm; vertical-align: top;">
//   <div style=" padding-left:2px;">Покупатель:    </div>
// </td>
// <td>
// <div style="font-weight:bold;  padding-left:2px;">
//   {{client.title}}<br><span style="font-weight: normal;"><!-- address--></span>            </div>
// </td>
// </tr>
// </table>
//
//
// <table border="2" width="100%" cellpadding="2" cellspacing="2" style="border-collapse: collapse; width: 100%; font-family: Arial;">
//   <thead>
//   <tr>
//   <th style="width:13mm; ">№</th>
//
// <th>Товары (работы, услуги)</th>
// <th style="width:20mm; ">Кол-во</th>
//   <!--        <th style="width:17mm; ">Ед.</th> -->
//   <th style="width:27mm;  ">Цена</th>
//   <th style="width:27mm;  ">Сумма</th>
//   </tr>
//   </thead>
//   <tbody >
//   {{#each products}}
// <tr>
// <td style="width:13mm; ">{{ rowNumber }}</td>
//
// <td> {{ product.title }}</td>
// <td style="width:20mm; text-align: right;">{{ amount }}</td>
// <!--        <td style="width:17mm; ">Шт.</td> -->
//   <td style="width:27mm; text-align: right; ">{{ price }}</td>
// <td style="width:27mm; text-align: right; ">{{ sum }}</td>
// </tr>
// {{/ each}}
// </tbody>
// </table>
//
// <table style="font-family: Arial;" border="0" width="100%" cellpadding="1" cellspacing="1">
//   <tr>
//   <td></td>
//   <td style="width:27mm; font-weight:bold;  text-align:right;">Итого:</td>
// <td style="width:27mm; font-weight:bold;  text-align: center; ">{{ total }}</td>
// </tr>
// <!--
// <tr>
// <td></td>
// <td style="width:27mm; font-weight:bold;  text-align:right;">Итого НДС:</td>
// <td style="width:27mm; font-weight:bold;  text-align: center; ">0.00</td>
//   </tr>
//   -->
//   <tr>
//   <td></td>
//   <td style="width:37mm; font-weight:bold;  text-align:right;">Всего к оплате:</td>
//   <td style="width:27mm; font-weight:bold;  text-align: center; ">{{ total }}</td>
//   </tr>
//   </table>
//
//   <br />
//   <div style="font-family: Arial;">
//     Всего наименований {{products.length}} на сумму {{total}} рублей.<br />
//   <!-- Ноль рублей 00 копеек --></div>
//   <br /><br />
//   <div style="background-color:#000000; width:100%; font-size:1px; height:2px;">&nbsp;</div>
//   <br/>
//   <!--
//   <div style="font-family: Arial; font-size: 10pt;">
//     1. Счет действителен в течении 5 (пяти) банковских дней, не считая дня выписки счета. В случае нарушения срока оплаты сохранение цены на товар и наличие товара на складе НЕ ГАРАНТИРУЕТСЯ.<br />
//   2. Оплата данного счета означает согласие с условиями изложенными в п.1</div>
//   <br />
//   -->
//   <br />
//   <div style="background: url('<!--url печати в png сюда-->');  background-repeat: no-repeat; padding: 30px 10px; width: 400px; height: 250px;">
//     <div>Руководитель ______________________ </div>
//   <br/>  <br /><br />
//
//   <div>Главный бухгалтер ______________________</div>
//   <br/>
//
//   <div style="width: 85mm;text-align:center;">М.П.</div>
//     <br/>
//     </div>
//     <br/>  <br /><br /><br/>  <br /><br /><br/>  <br /><br />
//
//     </body>
//     </html>


exports.default = _default;