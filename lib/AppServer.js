"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _katejs = require("katejs");

var _AppServer = _interopRequireDefault(require("katejs-user/lib/AppServer"));

var _AppServer2 = _interopRequireDefault(require("./katejs-doc/lib/AppServer"));

var _AppServer3 = _interopRequireDefault(require("./katejs-docs/lib/AppServer"));

var _AppServer4 = _interopRequireDefault(require("./katejs-print/lib/AppServer"));

var _AppServer5 = _interopRequireDefault(require("./katejs-settings/lib/AppServer"));

var _structure = require("./structure");

var _Order = _interopRequireDefault(require("./entities/Order"));

var _Payment = _interopRequireDefault(require("./entities/Payment"));

var _Expense = _interopRequireDefault(require("./entities/Expense"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AppServer = function AppServer(parent) {
  return (
    /*#__PURE__*/
    function (_use) {
      _inherits(Server, _use);

      function Server(params) {
        var _this;

        _classCallCheck(this, Server);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Server).call(this, params));
        _this.title = _structure.title; // название приложения

        (0, _katejs.makeEntitiesFromStructures)(_this.entities, _structure.structures);
        _this.entities = _objectSpread({}, _this.entities, {
          Order: _Order.default,
          Payment: _Payment.default,
          Expense: _Expense.default
        });
        _this.entities.DebtRecord.record = true;
        _this.entities.MoneyRecord.record = true; // this.skipAuthorization = true;

        _this.setAuthParams({
          jwtSecret: _this.env.jwtSecret || 'default'
        });

        _this.userRegistrationRoleTitle = 'Manager';
        _this.settingsParams = _structure.Settings;
        return _this;
      }

      return Server;
    }((0, _katejs.use)(parent, _AppServer.default, _AppServer2.default, _AppServer4.default, _AppServer3.default, _AppServer5.default))
  );
};

AppServer.package = _structure.packageName;
var _default = AppServer;
exports.default = _default;