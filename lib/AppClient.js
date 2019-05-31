"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _AppClient = _interopRequireDefault(require("katejs-user/lib/AppClient"));

var _AppClient2 = _interopRequireDefault(require("./katejs-doc/lib/AppClient"));

var _AppClient3 = _interopRequireDefault(require("./katejs-docs/lib/AppClient"));

var _AppClient4 = _interopRequireDefault(require("./katejs-print/lib/AppClient"));

var _AppClient5 = _interopRequireDefault(require("./katejs-settings/lib/AppClient"));

var _structure = require("./structure");

var _NoteItem = _interopRequireDefault(require("./forms/NoteItem"));

var _NoteList = _interopRequireDefault(require("./forms/NoteList"));

var _ProductSalesReport = _interopRequireDefault(require("./forms/ProductSalesReport"));

var _OrderToDeliverReport = _interopRequireDefault(require("./forms/OrderToDeliverReport"));

var _OrderList = _interopRequireDefault(require("./forms/OrderList"));

var _OrderItem = _interopRequireDefault(require("./forms/OrderItem"));

var _PaymentItem = _interopRequireDefault(require("./forms/PaymentItem"));

var _CashFlow = _interopRequireDefault(require("./forms/CashFlow"));

var _OrderDynamics = _interopRequireDefault(require("./forms/OrderDynamics"));

var _ClientListMixin = _interopRequireDefault(require("./forms/ClientListMixin"));

var _ClientItemMixin = _interopRequireDefault(require("./forms/ClientItemMixin"));

var _Dashboard = _interopRequireDefault(require("./forms/Dashboard"));

var _OrdersUnassigned = _interopRequireDefault(require("./forms/OrdersUnassigned"));

var _OrdersMy = _interopRequireDefault(require("./forms/OrdersMy"));

var _OrderAgent = _interopRequireDefault(require("./forms/OrderAgent"));

var _updates = _interopRequireDefault(require("./updates"));

var _assistant = _interopRequireDefault(require("./assistant.svg"));

var _icons = _interopRequireDefault(require("./icons"));

var _frontEnv = _interopRequireDefault(require("./front.env.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AppClient = function AppClient(parent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_use) {
    _inherits(Client, _use);

    function Client(params) {
      var _this$docsContent;

      var _this;

      _classCallCheck(this, Client);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Client).call(this, params));
      _this.baseUrl = _frontEnv.default.apiUrl || '/api';

      _this.menu.unshift({
        form: 'ProductSalesReport',
        title: 'Product sales'
      }, {
        form: 'OrdersToDeliverReport',
        title: 'Orders to deliver'
      }, {
        form: 'CashFlow',
        title: 'Cash flow'
      }, {
        form: 'OrderDynamics',
        title: 'Order dynamics'
      }, {
        form: 'OrdersUnassigned',
        title: 'Unassigned orders',
        rule: {
          entity: 'Order',
          method: 'take'
        }
      }, {
        form: 'OrdersMy',
        title: 'My orders',
        rule: {
          entity: 'Order',
          method: 'take'
        }
      });

      _this.init({
        structures: _structure.structures,
        addToMenu: true
      });

      _this.forms = _objectSpread({}, _this.forms, {
        NoteItem: _NoteItem.default,
        NoteList: _NoteList.default,
        OrderList: _OrderList.default,
        OrderItem: _OrderItem.default,
        PaymentItem: _PaymentItem.default,
        ClientList: (0, _ClientListMixin.default)(_this.forms.ClientList),
        ClientItem: (0, _ClientItemMixin.default)(_this.forms.ClientItem),
        ProductSalesReport: _ProductSalesReport.default,
        OrdersToDeliverReport: _OrderToDeliverReport.default,
        CashFlow: _CashFlow.default,
        OrderDynamics: _OrderDynamics.default,
        Dashboard: _Dashboard.default,
        OrdersUnassigned: _OrdersUnassigned.default,
        OrdersMy: _OrdersMy.default,
        OrderAgent: _OrderAgent.default
      });
      _this.forms.PaymentList.doc = true;
      _this.forms.ExpenseList.doc = true;
      _this.forms.ExpenseItem.doc = true;
      _this.saveAuth = true;

      (_this$docsContent = _this.docsContent).push.apply(_this$docsContent, _toConsumableArray(_updates.default));

      _this.userRegistration = {};
      _this.userAuthorization = {
        usernameTitle: 'E-mail'
      };

      _this.docsAccessFilter = function (docsItem) {
        if (docsItem.entity === 'System') return true;
        if (docsItem.entity === 'Agent app') return _this.allow('Order', 'put') || _this.allow('Order', 'take');
        return _this.allow(docsItem.entity, 'put');
      };

      _this.menu.unshift({
        title: 'Dashboard',
        form: 'Dashboard'
      });

      _this.menu.forEach(function (item) {
        if (_icons.default[item.form]) {
          // eslint-disable-next-line no-param-reassign
          item.icon = _icons.default[item.form];
        }
      });

      _this.settingsParams = _structure.Settings;
      return _this;
    }

    return Client;
  }((0, _client.use)(parent, _AppClient.default, _AppClient2.default, _AppClient4.default, _AppClient5.default, _AppClient3.default)), _defineProperty(_class, "title", _structure.title), _defineProperty(_class, "path", '/app'), _defineProperty(_class, "primaryColor", '#085d96'), _defineProperty(_class, "logo", _assistant.default), _temp;
};

AppClient.package = _structure.packageName;
var _default = AppClient;
exports.default = _default;