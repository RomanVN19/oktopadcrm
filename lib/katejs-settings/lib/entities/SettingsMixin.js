"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = function _default(Entity) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (
    /*#__PURE__*/
    function (_Entity) {
      _inherits(Settings, _Entity);

      function Settings(args) {
        var _this;

        _classCallCheck(this, Settings);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Settings).call(this, args));
        _this.structure.fields = [].concat(_toConsumableArray(_this.structure.fields), _toConsumableArray(params.fields || []));
        return _this;
      }

      _createClass(Settings, [{
        key: "set",
        value: function () {
          var _set = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(_ref) {
            var ctx, data, uuid, _ref2, existingSettings;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    ctx = _ref.ctx, data = _ref.data;
                    _context.next = 3;
                    return this.query({
                      ctx: ctx,
                      data: {
                        limit: 1,
                        order: [['date', 'DESC']]
                      }
                    });

                  case 3:
                    _ref2 = _context.sent;
                    existingSettings = _ref2.response;

                    if (existingSettings && existingSettings[0]) {
                      // eslint-disable-next-line prefer-destructuring
                      uuid = existingSettings[0].uuid;
                    }

                    return _context.abrupt("return", this.put({
                      ctx: ctx,
                      data: {
                        uuid: uuid,
                        body: data
                      }
                    }));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function set(_x) {
            return _set.apply(this, arguments);
          }

          return set;
        }()
      }, {
        key: "get",
        value: function () {
          var _get = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(_ref3) {
            var ctx, _ref4, existingSettings;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    ctx = _ref3.ctx;
                    _context2.next = 3;
                    return this.query({
                      ctx: ctx,
                      data: {
                        limit: 1,
                        order: [['date', 'DESC']]
                      }
                    });

                  case 3:
                    _ref4 = _context2.sent;
                    existingSettings = _ref4.response;

                    if (!(existingSettings && existingSettings[0])) {
                      _context2.next = 7;
                      break;
                    }

                    return _context2.abrupt("return", {
                      response: existingSettings[0]
                    });

                  case 7:
                    return _context2.abrupt("return", {
                      response: {}
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function get(_x2) {
            return _get.apply(this, arguments);
          }

          return get;
        }()
      }]);

      return Settings;
    }(Entity)
  );
};

exports.default = _default;