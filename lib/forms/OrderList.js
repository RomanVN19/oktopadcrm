"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(Form) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Form) {
    _inherits(OrderList1, _Form);

    var _super = _createSuper(OrderList1);

    // for menu filter
    function OrderList1(params) {
      var _this;

      _classCallCheck(this, OrderList1);

      _this = _super.call(this, params);

      _defineProperty(_assertThisInitialized(_this), "clientQuery", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
          var _yield$_this$app$Clie, response;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.app.Client.query({
                    where: {
                      $or: [{
                        title: {
                          $like: "%".concat(query, "%")
                        }
                      }, {
                        phone: {
                          $like: "%".concat(query, "%")
                        }
                      }, {
                        address: {
                          $like: "%".concat(query, "%")
                        }
                      }]
                    }
                  });

                case 2:
                  _yield$_this$app$Clie = _context.sent;
                  response = _yield$_this$app$Clie.response;
                  return _context.abrupt("return", (response || []).map(function (item) {
                    return _objectSpread(_objectSpread({}, item), {}, {
                      title: "".concat(item.title, " (").concat(item.phone || '', " ").concat(item.address || '', ")")
                    });
                  }));

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      _defineProperty(_assertThisInitialized(_this), "clientChange", function (val) {
        _this.filters.clientUuid = val && val.uuid || undefined;
        _this.app.ordersClientFilter = val;

        _this.load();
      });

      var list = _this.elements.get('list');

      list.columns.find(function (column) {
        return column.dataPath === 'comment';
      }).maxWidth = 400;

      _this.elements.unshift({
        type: _client.Elements.GRID,
        elements: [{
          id: 'client',
          title: 'Client (name, phone, address)',
          type: _client.Elements.SELECT,
          getOptions: _this.clientQuery,
          onChange: _this.clientChange,
          value: _this.app.ordersClientFilter,
          cols: 4
        }]
      });

      _this.filters = _this.filters || {
        clientUuid: _this.app.ordersClientFilter && _this.app.ordersClientFilter.uuid || undefined
      };
      return _this;
    }

    return OrderList1;
  }(Form), _defineProperty(_class, "entity", 'Order'), _defineProperty(_class, "doc", true), _temp;
};

exports.default = _default;