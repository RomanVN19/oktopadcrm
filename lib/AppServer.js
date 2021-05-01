"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _katejs = require("katejs");

var _katejsModules = require("katejs-modules");

var _AppServer = _interopRequireDefault(require("./katejs-trigger/lib/AppServer"));

var _AppServer2 = _interopRequireDefault(require("./katejs-fields/lib/AppServer"));

var _structure = require("./structure");

var _Order = _interopRequireDefault(require("./entities/Order"));

var _Payment = _interopRequireDefault(require("./entities/Payment"));

var _Expense = _interopRequireDefault(require("./entities/Expense"));

var _Receipt = _interopRequireDefault(require("./entities/Receipt"));

var _DealComment = _interopRequireDefault(require("./entities/DealComment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AppServer = function AppServer(parent) {
  return /*#__PURE__*/function (_use) {
    _inherits(Server, _use);

    var _super = _createSuper(Server);

    function Server(params) {
      var _this;

      _classCallCheck(this, Server);

      _this = _super.call(this, params);
      _this.title = _structure.title; // название приложения

      (0, _katejs.makeEntitiesFromStructures)(_this.entities, _structure.structures);
      _this.entities = _objectSpread(_objectSpread({}, _this.entities), {}, {
        Order: _Order.default,
        Payment: _Payment.default,
        Expense: _Expense.default,
        Receipt: _Receipt.default,
        DealComment: (0, _DealComment.default)(_this.entities.DealComment)
      });
      _this.entities.DebtRecord.record = true;
      _this.entities.MoneyRecord.record = true;
      _this.entities.ProductRecord.record = true;
      _this.entities.PriceList.doc = true;
      _this.entities.Invoice.doc = true; // this.skipAuthorization = true;

      _this.setAuthParams({
        jwtSecret: _this.env.jwtSecret || 'default'
      });

      _this.userRegistrationRoleTitle = 'Manager';
      _this.settingsParams = _structure.Settings;
      _this.showUsersList = true;
      return _this;
    }

    return Server;
  }((0, _katejs.use)(parent, _katejsModules.AppUser, _katejsModules.AppDoc, _katejsModules.AppPrint, _katejsModules.AppDocs, _katejsModules.AppSettings, _katejsModules.AppImport, _AppServer.default, _AppServer2.default));
};

AppServer.package = _structure.packageName;
var _default = AppServer;
exports.default = _default;