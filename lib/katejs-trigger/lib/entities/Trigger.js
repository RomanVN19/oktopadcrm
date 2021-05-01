"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _default = function _default(Entity) {
  return /*#__PURE__*/function (_Entity) {
    _inherits(Trigger, _Entity);

    var _super = _createSuper(Trigger);

    function Trigger(args) {
      var _this;

      _classCallCheck(this, Trigger);

      _this = _super.call(this, args);
      _this.updateTriggers.private = true;
      return _this;
    }

    _createClass(Trigger, [{
      key: "updateTriggers",
      value: function () {
        var _updateTriggers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _yield$this$query, triggers;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.query();

                case 2:
                  _yield$this$query = _context.sent;
                  triggers = _yield$this$query.response;
                  this.triggers = triggers;

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function updateTriggers() {
          return _updateTriggers.apply(this, arguments);
        }

        return updateTriggers;
      }()
    }, {
      key: "afterPut",
      value: function afterPut() {
        this.updateTriggers();
      }
    }, {
      key: "checkTriggers",
      value: function checkTriggers(_ref) {
        var _this2 = this;

        var entity = _ref.entity,
            ctx = _ref.ctx,
            transaction = _ref.transaction,
            entityName = _ref.entityName;
        this.triggers.forEach(function (trigger) {
          if (trigger.conditionEntity === entityName) {
            _this2.processTrigger({
              entity: entity,
              ctx: ctx,
              transaction: transaction,
              trigger: trigger
            });
          }
        });
      }
    }, {
      key: "processTrigger",
      value: function () {
        var _processTrigger = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
          var entity, ctx, transaction, trigger, body;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  entity = _ref2.entity, ctx = _ref2.ctx, transaction = _ref2.transaction, trigger = _ref2.trigger;
                  _context2.prev = 1;

                  if (eval(trigger.condition)) {
                    _context2.next = 4;
                    break;
                  }

                  return _context2.abrupt("return");

                case 4:
                  body = {};
                  trigger.actionEntityFields.forEach(function (field) {
                    return body[field.field] = eval(field.value);
                  });
                  _context2.next = 8;
                  return this.app[trigger.actionEntity].put({
                    data: {
                      body: body
                    }
                  });

                case 8:
                  _context2.next = 13;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2["catch"](1);
                  console.error('Err eval trigger', _context2.t0);

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[1, 10]]);
        }));

        function processTrigger(_x) {
          return _processTrigger.apply(this, arguments);
        }

        return processTrigger;
      }()
    }]);

    return Trigger;
  }(Entity);
};

exports.default = _default;