"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fields = _interopRequireDefault(require("katejs/lib/fields"));

var _structure = require("../structure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RecordMixin = function RecordMixin(Entity) {
  return (
    /*#__PURE__*/
    function (_Entity) {
      _inherits(RecordEntity, _Entity);

      function RecordEntity(params) {
        var _this$structure$field, _this$structure$field2;

        var _this;

        _classCallCheck(this, RecordEntity);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(RecordEntity).call(this, params));
        _this.recordParams = {
          fields: _toConsumableArray(_this.structure.fields),
          resources: _this.structure.resources
        };
        _this.structure.fields = _this.structure.fields || [];

        (_this$structure$field = _this.structure.fields).unshift.apply(_this$structure$field, _toConsumableArray(_structure.structures.Record.fields));

        (_this$structure$field2 = _this.structure.fields).push.apply(_this$structure$field2, _toConsumableArray(_this.structure.resources));

        return _this;
      }

      _createClass(RecordEntity, [{
        key: "put",
        value: function () {
          var _put = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(params) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", _get(_getPrototypeOf(RecordEntity.prototype), "put", this).call(this, params));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function put(_x) {
            return _put.apply(this, arguments);
          }

          return put;
        }()
      }, {
        key: "balance",
        value: function () {
          var _balance = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(_ref) {
            var _ref$data, date, whereParams, ctx, where, attributes, group;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _ref$data = _ref.data, date = _ref$data.date, whereParams = _ref$data.where, ctx = _ref.ctx;
                    where = {};

                    if (date) {
                      where.date = {
                        $lte: date
                      };
                    }

                    attributes = [];
                    this.recordParams.resources.forEach(function (resource) {
                      attributes.push([{
                        $func: {
                          fn: 'SUM',
                          col: resource.name
                        }
                      }, resource.name]);
                    });
                    group = [];
                    this.recordParams.fields.forEach(function (field) {
                      if (field.type === _fields.default.REFERENCE) {
                        group.push("".concat(field.name, "Uuid"));
                      } else {
                        group.push(field.name);
                      }
                    });
                    return _context2.abrupt("return", this.query({
                      data: {
                        where: Object.assign(where, whereParams),
                        attributes: attributes,
                        group: group,
                        limit: -1
                      },
                      ctx: ctx
                    }));

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function balance(_x2) {
            return _balance.apply(this, arguments);
          }

          return balance;
        }()
      }, {
        key: "turnover",
        value: function () {
          var _turnover = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3(params) {
            var data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    data = params.data || {};
                    data.limit = -1;
                    return _context3.abrupt("return", this.query(_objectSpread({}, params, {
                      data: data
                    })));

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function turnover(_x3) {
            return _turnover.apply(this, arguments);
          }

          return turnover;
        }()
      }]);

      return RecordEntity;
    }(Entity)
  );
};

var _default = RecordMixin;
exports.default = _default;