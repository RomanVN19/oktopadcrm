"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _structure = require("./structure");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

        _this.init({
          structures: _structure.structures,
          addToMenu: true
        });

        _this.makeApiLinks({
          entities: ['Print']
        });

        return _this;
      }

      _createClass(Client, [{
        key: "print",
        value: function () {
          var _print = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(_ref) {
            var template, data, _ref2, response, win;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    template = _ref.template, data = _ref.data;
                    _context.next = 3;
                    return this.Print.print({
                      template: template,
                      data: data
                    });

                  case 3:
                    _ref2 = _context.sent;
                    response = _ref2.response;

                    if (response) {
                      win = window.open('', 'Print');
                      win.document.write(response.data);
                    }

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function print(_x) {
            return _print.apply(this, arguments);
          }

          return print;
        }()
      }]);

      return Client;
    }((0, _client.use)(parent))
  );
};

AppClient.package = _structure.packageName;
var _default = AppClient;
exports.default = _default;