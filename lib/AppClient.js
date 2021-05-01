"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _client2 = require("katejs-modules/lib/client");

var _AppClient = _interopRequireDefault(require("./katejs-trigger/lib/AppClient"));

var _AppClient2 = _interopRequireDefault(require("./katejs-fields/lib/AppClient"));

require("moment/locale/ru");

require("katejs/lib/client.css");

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

var _ExpenseItem = _interopRequireDefault(require("./forms/ExpenseItem"));

var _ReceiptItemMixin = _interopRequireDefault(require("./forms/ReceiptItemMixin"));

var _ProducsFlowReport = _interopRequireDefault(require("./forms/ProducsFlowReport"));

var _DebtsFlowReport = _interopRequireDefault(require("./forms/DebtsFlowReport"));

var _ProductItemMixin = _interopRequireDefault(require("./forms/ProductItemMixin"));

var _DealItem = _interopRequireDefault(require("./forms/DealItem"));

var _TaskItem = _interopRequireDefault(require("./forms/TaskItem"));

var _DealList = _interopRequireDefault(require("./forms/DealList"));

var _SaleSchemaItem = _interopRequireDefault(require("./forms/SaleSchemaItem"));

var _TaskList = _interopRequireDefault(require("./forms/TaskList"));

var _InvoiceItem = _interopRequireDefault(require("./forms/InvoiceItem"));

var _components = _interopRequireDefault(require("./components"));

var _updates = _interopRequireDefault(require("./updates"));

var _oktopad = _interopRequireDefault(require("./oktopad.svg"));

var _icons = _interopRequireDefault(require("./icons"));

var _frontEnv = _interopRequireDefault(require("./front.env.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var AppClient = function AppClient(parent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_use) {
    _inherits(Client, _use);

    var _super = _createSuper(Client);

    // static useLogger = true;
    function Client(params) {
      var _this$docsContent;

      var _this;

      _classCallCheck(this, Client);

      _this = _super.call(this, params);
      _this.constructor.components = _objectSpread(_objectSpread({}, _this.constructor.components), _components.default);
      _this.baseUrl = _frontEnv.default.apiUrl || '/api';
      _this.vars = {};

      _this.menu.unshift({
        title: 'Reports',
        icon: _icons.default.OrderDynamics,
        rule: {
          entity: 'Order',
          method: 'put'
        },
        submenu: [{
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
          form: 'ProductsFlowReport',
          title: 'Product flow'
        }, {
          form: 'DebtsFlowReport',
          title: 'Debt flow'
        }]
      });

      _this.init({
        structures: _structure.structures,
        addToMenu: true
      });

      _this.forms = _objectSpread(_objectSpread({}, _this.forms), {}, {
        NoteItem: _NoteItem.default,
        NoteList: _NoteList.default,
        OrderList: (0, _OrderList.default)(_this.forms.OrderList),
        OrderItem: (0, _OrderItem.default)(_this.forms.OrderItem),
        PaymentItem: _PaymentItem.default,
        ClientList: (0, _ClientListMixin.default)(_this.forms.ClientList),
        ClientItem: (0, _ClientItemMixin.default)(_this.forms.ClientItem),
        ProductItem: (0, _ProductItemMixin.default)(_this.forms.ProductItem),
        DealItem: (0, _DealItem.default)(_this.forms.DealItem),
        TaskItem: (0, _TaskItem.default)(_this.forms.TaskItem),
        DealList: (0, _DealList.default)(_this.forms.DealList),
        SaleSchemaItem: (0, _SaleSchemaItem.default)(_this.forms.SaleSchemaItem),
        TaskList: (0, _TaskList.default)(_this.forms.TaskList),
        InvoiceItem: (0, _InvoiceItem.default)(_this.forms.InvoiceItem),
        ProductSalesReport: _ProductSalesReport.default,
        OrdersToDeliverReport: _OrderToDeliverReport.default,
        CashFlow: _CashFlow.default,
        OrderDynamics: _OrderDynamics.default,
        Dashboard: _Dashboard.default,
        ExpenseItem: _ExpenseItem.default,
        ReceiptItem: (0, _ReceiptItemMixin.default)(_this.forms.ReceiptItem),
        ProductsFlowReport: _ProducsFlowReport.default,
        DebtsFlowReport: _DebtsFlowReport.default
      });
      _this.forms.PaymentList.doc = true;
      _this.forms.ExpenseList.doc = true;
      _this.forms.ExpenseItem.doc = true;
      _this.forms.PriceListList.doc = true;
      _this.forms.PriceListItem.doc = true;
      _this.forms.ReceiptList.doc = true;
      _this.forms.InvoiceList.doc = true;
      _this.saveAuth = true;

      (_this$docsContent = _this.docsContent).push.apply(_this$docsContent, _toConsumableArray(_updates.default));

      _this.userAuthorization = {
        usernameTitle: 'User'
      };
      _this.userHideRecovery = true;

      _this.docsAccessFilter = function (docsItem) {
        if (docsItem.entity === 'System') return true;
        if (docsItem.entity === 'Agent app') return _this.allow('Order', 'put') || _this.allow('Order', 'take');
        return _this.allow(docsItem.entity, 'put');
      }; // temp no dasboard
      // this.menu.unshift({
      //   title: 'Dashboard',
      //   form: 'Dashboard',
      //   rule: {
      //     entity: 'Order',
      //     method: 'put',
      //   },
      // });


      _this.menu.forEach(function (item) {
        if (_icons.default[item.form]) {
          // eslint-disable-next-line no-param-reassign
          item.icon = _icons.default[item.form];
        }

        if (item.submenu) {
          item.submenu.forEach(function (sitem) {
            if (_icons.default[sitem.form]) {
              // eslint-disable-next-line no-param-reassign
              sitem.icon = _icons.default[sitem.form];
            }
          });
        }
      });

      _this.menu.forEach(function (menuItem) {
        if (_this.forms[menuItem.form] && _this.forms[menuItem.form].entity) {
          // eslint-disable-next-line no-param-reassign
          menuItem.rule = {
            entity: _this.forms[menuItem.form].entity,
            method: 'put'
          };
        }

        if (menuItem.submenu) {
          menuItem.submenu.forEach(function (submenuItem) {
            if (_this.forms[submenuItem.form] && _this.forms[submenuItem.form].entity) {
              // eslint-disable-next-line no-param-reassign
              submenuItem.rule = {
                entity: _this.forms[submenuItem.form].entity,
                method: 'put'
              };
            }
          });
        }
      });

      _this.settingsParams = _structure.Settings;

      _this.menu.unshift(_this.spliceMenuItem('Deals'), _this.spliceMenuItem('Tasks'), _this.spliceMenuItem('Clients'));

      _this.spliceMenuItem('Extra field values lists'); // temp - remove from menu


      _this.spliceMenuItem('Contacts'); // temp - remove from menu


      _this.spliceMenuItem('What\'s new'); // temp


      _this.spliceMenuItem('Entity descriptions'); // temp


      _this.spliceMenuItem('Notes'); // temp


      _this.entitiesWithExtraFields = ['Deal', 'Task', 'Client']; // make submenu

      _this.initSubmenu('Payments', 'Money');

      _this.addSubmenu('Money', 'Expenses');

      _this.addSubmenu('Money', 'Cashboxs');

      _this.initSubmenu('Products', 'Products');

      _this.addSubmenu('Products', 'Price types');

      _this.addSubmenu('Products', 'Price lists');

      _this.addSubmenu('Products', 'Receipts');

      _this.initSubmenu('Settings', 'Settings', 'Basic');

      _this.addSubmenu('Settings', 'Sale schemas');

      _this.addSubmenu('Settings', 'Extra fields  lists');

      _this.addSubmenu('Settings', 'Triggers');

      _this.addSubmenu('Settings', 'Import');

      _this.addSubmenu('Settings', 'Print templates');

      _this.allowCreateInSelect = true;
      _this.schemas = {};
      _this.showUsersList = true;
      return _this;
    }

    _createClass(Client, [{
      key: "initSubmenu",
      value: function initSubmenu(nameInitial, nameTarget) {
        var submenuTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var item = this.menu.find(function (i) {
          return i.title === nameInitial;
        });
        item.submenu = [];
        item.submenu.push({
          title: submenuTitle || item.title,
          form: item.form,
          icon: item.icon,
          role: item.role
        });
        item.title = nameTarget;
        delete item.form;
      }
    }, {
      key: "addSubmenu",
      value: function addSubmenu(submenuName, itemName) {
        var itemIndex = this.menu.findIndex(function (i) {
          return i.title === itemName;
        });
        var submenu = this.menu.find(function (i) {
          return i.title === submenuName;
        });

        if (!this.menu[itemIndex].icon) {
          this.menu[itemIndex].icon = submenu.icon;
        }

        submenu.submenu.push(this.menu[itemIndex]);
        this.menu.splice(itemIndex, 1);
      }
    }, {
      key: "spliceMenuItem",
      value: function spliceMenuItem(itemTitle) {
        var index = this.menu.findIndex(function (item) {
          return item.title === itemTitle;
        });

        if (index > -1) {
          return this.menu.splice(index, 1)[0];
        }
      }
    }, {
      key: "afterUserInit",
      value: function () {
        var _afterUserInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!_get(_getPrototypeOf(Client.prototype), "afterUserInit", this)) {
                    _context.next = 3;
                    break;
                  }

                  _context.next = 3;
                  return _get(_getPrototypeOf(Client.prototype), "afterUserInit", this).call(this);

                case 3:
                  _context.next = 5;
                  return this.fetchSchemas();

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function afterUserInit() {
          return _afterUserInit.apply(this, arguments);
        }

        return afterUserInit;
      }()
    }, {
      key: "fetchSchemas",
      value: function () {
        var _fetchSchemas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _yield$this$SaleSchem, schemas;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.SaleSchema.query();

                case 2:
                  _yield$this$SaleSchem = _context2.sent;
                  schemas = _yield$this$SaleSchem.response;

                  if (schemas) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt("return");

                case 6:
                  this.schemas = schemas.reduce(function (acc, val) {
                    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, val.uuid, val));
                  }, {});

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function fetchSchemas() {
          return _fetchSchemas.apply(this, arguments);
        }

        return fetchSchemas;
      }()
    }]);

    return Client;
  }((0, _client.use)(parent, _client2.AppUser, _client2.AppDoc, _client2.AppPrint, _client2.AppSettings, _client2.AppDocs, _client2.AppImport, _AppClient.default, _AppClient2.default)), _defineProperty(_class, "title", _structure.title), _defineProperty(_class, "path", '/app'), _defineProperty(_class, "primaryColor", '#088596'), _defineProperty(_class, "logo", _oktopad.default), _temp;
};

AppClient.package = _structure.packageName;
var _default = AppClient;
exports.default = _default;