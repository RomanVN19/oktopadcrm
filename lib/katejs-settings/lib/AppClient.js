"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _AppClient = _interopRequireDefault(require("katejs-user/lib/AppClient"));

var _structure = require("./structure");

var _Settings = _interopRequireDefault(require("./forms/Settings"));

var _icons = _interopRequireDefault(require("./icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AppClient = function AppClient(parent) {
  return (
    /*#__PURE__*/
    function (_use) {
      _inherits(Client, _use);

      function Client(args) {
        var _this;

        _classCallCheck(this, Client);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Client).call(this, args));
        _this.forms.Settings = _Settings.default;

        _this.makeApiLinks({
          entities: ['Settings']
        });

        _this.menu.push({
          form: 'Settings',
          title: 'Settings',
          rule: {
            entity: 'Settings',
            method: 'put'
          },
          icon: _icons.default.Settings
        });

        return _this;
      }

      _createClass(Client, [{
        key: "afterInit",
        value: function () {
          var _afterInit = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _ref, settings;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (_get(_getPrototypeOf(Client.prototype), "afterInit", this)) _get(_getPrototypeOf(Client.prototype), "afterInit", this).call(this);
                    _context.next = 3;
                    return this.Settings.get();

                  case 3:
                    _ref = _context.sent;
                    settings = _ref.response;
                    this.settings = settings;

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
      }]);

      return Client;
    }((0, _client.use)(parent, _AppClient.default))
  );
};

AppClient.package = _structure.packageName;
var _default = AppClient;
exports.default = _default;