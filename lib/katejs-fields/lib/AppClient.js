"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _structure = require("./structure");

var _ExtraFieldsListItem = _interopRequireDefault(require("./forms/ExtraFieldsListItem"));

var _ExtraFieldsItemMixin = _interopRequireDefault(require("./forms/ExtraFieldsItemMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var AppClient = function AppClient(parent) {
  return /*#__PURE__*/function (_use) {
    _inherits(Client, _use);

    var _super = _createSuper(Client);

    function Client(params) {
      var _this;

      _classCallCheck(this, Client);

      _this = _super.call(this, params);

      _this.init({
        structures: _structure.structures,
        addToMenu: true
      });

      _this.forms = _objectSpread(_objectSpread({}, _this.forms), {}, {
        ExtraFieldsListItem: (0, _ExtraFieldsListItem.default)(_this.forms.ExtraFieldsListItem)
      });
      _this.entitiesWithExtraFields = [];

      var extraFieldsList = _this.menu.find(function (item) {
        return item.form === 'ExtraFieldsListList';
      });

      extraFieldsList.title = 'Extra fields  lists'; // двойной пробел для перевода только меню

      return _this;
    }

    _createClass(Client, [{
      key: "afterInit",
      value: function () {
        var _afterInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!_get(_getPrototypeOf(Client.prototype), "afterInit", this)) {
                    _context.next = 3;
                    break;
                  }

                  _context.next = 3;
                  return _get(_getPrototypeOf(Client.prototype), "afterInit", this).call(this);

                case 3:
                  if (this.successAuth) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 6;
                  return this.updateExtraFieldsLists();

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function afterInit() {
          return _afterInit.apply(this, arguments);
        }

        return afterInit;
      }()
    }, {
      key: "afterUserInit",
      value: function () {
        var _afterUserInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!_get(_getPrototypeOf(Client.prototype), "afterUserInit", this).call(this)) {
                    _context2.next = 3;
                    break;
                  }

                  _context2.next = 3;
                  return _get(_getPrototypeOf(Client.prototype), "afterUserInit", this).call(this);

                case 3:
                  _context2.next = 5;
                  return this.updateExtraFieldsLists();

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function afterUserInit() {
          return _afterUserInit.apply(this, arguments);
        }

        return afterUserInit;
      }()
    }, {
      key: "updateExtraFieldsLists",
      value: function () {
        var _updateExtraFieldsLists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var _this2 = this;

          var _yield$this$ExtraFiel, fieldsLists;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.ExtraFieldsList.query();

                case 2:
                  _yield$this$ExtraFiel = _context3.sent;
                  fieldsLists = _yield$this$ExtraFiel.response;

                  if (fieldsLists) {
                    _context3.next = 6;
                    break;
                  }

                  return _context3.abrupt("return");

                case 6:
                  this.fieldsLists = fieldsLists.reduce(function (acc, val) {
                    acc[val.entityName] = acc[val.entityName] || [];
                    acc[val.entityName] = acc[val.entityName].concat(val.fieldsList);
                    return acc;
                  }, {});
                  Object.keys(this.forms).forEach(function (formName) {
                    if (formName.endsWith('Item') && _this2.entitiesWithExtraFields.indexOf(_this2.forms[formName].entity) > -1 && !_this2.forms[formName].extraFieldsApplied) {
                      _this2.forms[formName] = (0, _ExtraFieldsItemMixin.default)(_this2.forms[formName]);
                    }
                  });

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function updateExtraFieldsLists() {
          return _updateExtraFieldsLists.apply(this, arguments);
        }

        return updateExtraFieldsLists;
      }()
    }]);

    return Client;
  }((0, _client.use)(parent));
};

AppClient.package = _structure.packageName;
var _default = AppClient;
exports.default = _default;