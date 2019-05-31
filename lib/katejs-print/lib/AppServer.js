"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _katejs = require("katejs");

var _Print = _interopRequireDefault(require("./entities/Print"));

var _structure = require("./structure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

      function Server(args) {
        var _this;

        _classCallCheck(this, Server);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Server).call(this, args));
        (0, _katejs.makeEntitiesFromStructures)(_this.entities, _structure.structures);
        _this.entities.Print = _Print.default;

        if (_this.publicAccessRules) {
          _this.publicAccessRules.push({
            entity: 'Print',
            method: 'print',
            access: true
          });
        }

        return _this;
      }

      return Server;
    }((0, _katejs.use)(parent))
  );
};

AppServer.package = _structure.packageName;
var _default = AppServer;
exports.default = _default;