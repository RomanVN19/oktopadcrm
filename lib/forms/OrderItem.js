"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProductsTable = void 0;

var _client = require("katejs/lib/client");

var _ClientSelection = _interopRequireDefault(require("./ClientSelection"));

var _structure = require("../structure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Order = _structure.structures.Order;

var ProductsTable =
/*#__PURE__*/
function () {
  function ProductsTable(args) {
    var _this = this;

    _classCallCheck(this, ProductsTable);

    _defineProperty(this, "rowChange", function (row) {
      // eslint-disable-next-line no-param-reassign
      row.sum.value = (row.amount.value * row.price.value).toFixed(2);

      _this.sumChange();
    });

    _defineProperty(this, "productChange", function (row) {
      var price = row.price,
          amount = row.amount,
          product = row.product;
      price.value = product.value.price;

      if (!row.amount.value) {
        amount.value = 1;
      }

      _this.rowChange(row);
    });

    Object.assign(this, args);
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

var OrderItem =
/*#__PURE__*/
function (_ItemForm) {
  _inherits(OrderItem, _ItemForm);

  function OrderItem(params) {
    var _this2;

    _classCallCheck(this, OrderItem);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(OrderItem).call(this, params));

    _defineProperty(_assertThisInitialized(_this2), "print",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _ref2, doc, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.app.Order.get({
                uuid: _this2.uuid
              });

            case 2:
              _ref2 = _context.sent;
              doc = _ref2.response;
              data = _objectSpread({}, doc, {
                companyName: _this2.app.settings.companyName
              });

              _this2.app.print({
                template: 'Order',
                data: data
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this2.clientSelection = new _ClientSelection.default({
      form: _assertThisInitialized(_this2),
      replaceSelect: true,
      changePhoneAddress: true,
      openOnFocus: true
    });
    _this2.productsTable = new ProductsTable({
      elements: _this2.elements,
      content: _this2.content
    });

    _this2.elements.set('phone', {
      type: _client.Elements.GRID,
      elements: [_objectSpread({}, _this2.elements.get('phone'), {
        cols: 4
      }), _objectSpread({}, _this2.elements.get('address'), {
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
      }, _objectSpread({}, _this2.elements.get('payment'), {
        cols: 4
      }), _objectSpread({}, _this2.elements.get('cashbox'), {
        openOnFocus: true,
        cols: 4
      })]
    });

    _this2.elements.splice(_this2.elements.findIndex(function (item) {
      return item.id === 'payment';
    }), 1);

    _this2.elements.set('status', {
      id: 'status',
      type: _client.Elements.SELECT,
      title: 'Status',
      options: _structure.OrderStatuses,
      selectValue: true,
      value: 1,
      openOnFocus: true
    });

    _this2.elements.set('paymentToAgent', {
      type: _client.Elements.GRID,
      elements: [_objectSpread({}, _this2.elements.get('status'), {
        cols: 4
      }), _objectSpread({}, _this2.elements.get('paymentToAgent'), {
        cols: 4
      }), _objectSpread({}, _this2.elements.get('agent'), {
        cols: 4
      })]
    });

    _this2.elements.splice(_this2.elements.findIndex(function (item) {
      return item.id === 'agent';
    }), 2);

    _this2.actions.push({
      type: _client.Elements.BUTTON,
      title: 'Print',
      onClick: _this2.print
    });

    return _this2;
  }

  return OrderItem;
}((0, _client.ItemForm)({
  Order: Order
}, {
  addActions: true,
  addElements: true
}));

_defineProperty(OrderItem, "doc", true);

var _default = OrderItem; // base print template
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