"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProductsTable = void 0;

var _client = require("katejs/lib/client");

var _ClientSelection = _interopRequireDefault(require("./ClientSelection"));

var _structure = require("../structure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductsTable = /*#__PURE__*/function () {
  function ProductsTable(args) {
    var _this = this;

    _classCallCheck(this, ProductsTable);

    _defineProperty(this, "rowChange", function (row) {
      // eslint-disable-next-line no-param-reassign
      row.sum.value = (row.amount.value * row.price.value).toFixed(2);

      _this.sumChange();
    });

    _defineProperty(this, "productChange", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(row) {
        var price, amount, product, priceTypeContent, priceType, where, _yield$_this$app$Pric, prices;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                price = row.price, amount = row.amount, product = row.product;

                if (product.value) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                priceTypeContent = _this.content.priceType;
                priceType = priceTypeContent && priceTypeContent.value;
                where = {
                  '$products.productUuid$': product.value.uuid
                }; // use selected price type, otherwise use pricelist without price type

                where.priceTypeUuid = priceType && priceType.uuid || null;
                _context.next = 9;
                return _this.app.PriceList.query({
                  where: where,
                  order: [['date', 'DESC']],
                  limit: 1
                });

              case 9:
                _yield$_this$app$Pric = _context.sent;
                prices = _yield$_this$app$Pric.response;

                if (prices.length && prices[0].products.length) {
                  price.value = prices[0].products[0].price;
                } else {
                  price.value = product.value.price;
                }

                if (!row.amount.value) {
                  amount.value = 1;
                }

                _this.rowChange(row);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    this.elements = args.elements;
    this.content = args.content;
    this.app = args.app;
    this.elements.get('products').columns[1].onChange = this.productChange;
    this.elements.get('products').columns[1].openOnFocus = true;
    this.elements.get('products').columns[2].onChange = this.rowChange;
    this.elements.get('products').columns[3].onChange = this.rowChange;
  }

  _createClass(ProductsTable, [{
    key: "sumChange",
    value: function sumChange() {
      var total = this.content.products.value.reduce(function (acc, val) {
        return val.sum ? acc + +val.sum : acc;
      }, 0);

      if (this.onSumChange) {
        this.onSumChange(total.toFixed(2));
      } else {
        this.content.total.value = total.toFixed(2);
      }
    }
  }]);

  return ProductsTable;
}();

exports.ProductsTable = ProductsTable;

var OrderItemMixin = function OrderItemMixin(Form) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Form) {
    _inherits(OrderItem, _Form);

    var _super = _createSuper(OrderItem);

    function OrderItem(params) {
      var _this2;

      _classCallCheck(this, OrderItem);

      _this2 = _super.call(this, params);

      _defineProperty(_assertThisInitialized(_this2), "print", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _yield$_this2$app$Ord, doc, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.app.Order.get({
                  uuid: _this2.uuid
                });

              case 2:
                _yield$_this2$app$Ord = _context2.sent;
                doc = _yield$_this2$app$Ord.response;
                data = _objectSpread(_objectSpread({}, doc), {}, {
                  companyName: _this2.app.settings.companyName
                });

                _this2.app.print({
                  template: 'Order',
                  data: data
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));

      _this2.clientSelection = new _ClientSelection.default({
        form: _assertThisInitialized(_this2),
        replaceSelect: true,
        changePhoneAddress: true,
        openOnFocus: true
      });
      _this2.productsTable = new ProductsTable(_assertThisInitialized(_this2));

      _this2.elements.set('phone', {
        type: _client.Elements.GRID,
        elements: [_objectSpread(_objectSpread({}, _this2.elements.get('phone')), {}, {
          cols: 4
        }), _objectSpread(_objectSpread({}, _this2.elements.get('address')), {}, {
          cols: 8
        })]
      });

      _this2.elements.splice(_this2.elements.findIndex(function (item) {
        return item.id === 'address';
      }), 1);

      _this2.elements.set('cashbox', {
        type: _client.Elements.GRID,
        elements: [{
          type: _client.Elements.LABEL,
          title: 'Apply payment',
          style: {
            marginTop: 28,
            textAlign: 'right'
          },
          cols: 4
        }, _objectSpread(_objectSpread({}, _this2.elements.get('payment')), {}, {
          cols: 4
        }), _objectSpread(_objectSpread({}, _this2.elements.get('cashbox')), {}, {
          openOnFocus: true,
          cols: 4
        })]
      });

      _this2.elements.splice(_this2.elements.findIndex(function (item) {
        return item.id === 'payment';
      }), 1);

      _this2.actions.push({
        type: _client.Elements.BUTTON,
        title: 'Print',
        onClick: _this2.print
      });

      return _this2;
    }

    _createClass(OrderItem, [{
      key: "afterInit",
      value: function afterInit() {
        if (_get(_getPrototypeOf(OrderItem.prototype), "afterInit", this)) {
          _get(_getPrototypeOf(OrderItem.prototype), "afterInit", this).call(this);
        }

        if (!this.uuid && this.app.vars.currentInvoiceData) {
          var data = this.app.vars.currentInvoiceData;
          this.content.client.value = data.client;
          this.content.comment.value = data.comment;
          this.content.products.value = data.products;
          this.app.vars.currentInvoiceData = undefined;
          this.productsTable.sumChange();
        }
      }
    }]);

    return OrderItem;
  }(Form), _defineProperty(_class, "doc", true), _temp;
};

var _default = OrderItemMixin; // base print template
// < !doctype html >
//   <html lang="en">
//     <head>
//       <!-- Required meta tags -->
//     <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//           <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//             <title>{{ Order }}</title>
//             <style>
//               html, body {
//                 width: 210mm;
//               height: 297mm;
//             }
// </style>
//   </head>
//           <body>
//             <div class="container">
//               <h3>{{ title }}</h3>
//               <p>Компания: {{ companyName }}</p>
//               <p>Клиент: {{ client.title }}</p>
//               <table class="table">
//                 <tr>
//                   <td>Товар</td>
//                   <td>Кол-во</td>
//                   <td>Цена</td>
//                   <td>Сумма</td>
//                 </tr>
//                 {{#each products}}
//                 <tr>
//                   <td>{{ product.title }}</td>
//                   <td>{{ amount }}</td>
//                   <td>{{ price }}</td>
//                   <td>{{ sum }}</td>
//                 </tr>
//                 {{/ each}}
//                 <tr>
//                   <td colspan="3">Итого</td>
//                   <td>{{ total }}</td>
//                 </tr>
//               </table>
//             </div>
//           </body>
// </html>

exports.default = _default;