"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cellStyle = exports.joinRecord = void 0;

var _client = require("katejs/lib/client");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var checkEqual = function checkEqual(val1, val2) {
  if (val1 === val2) return true;
  if (val1 && val2) return val1.uuid === val2.uuid;
  return false;
};

var joinRecord = function joinRecord(_ref) {
  var balance = _ref.balance,
      turnover = _ref.turnover,
      fields = _ref.fields,
      resources = _ref.resources,
      noDetails = _ref.noDetails;
  var data = [];
  var totals = balance.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      records: [],
      increase: 0,
      decrease: 0,
      start: item[resources[0]],
      total: 0
    });
  });
  turnover.forEach(function (record) {
    var total = totals.find(function (item) {
      return checkEqual(item[fields[0]], record[fields[0]]);
    });

    if (!total) {
      var _total;

      total = (_total = {}, _defineProperty(_total, fields[0], record[fields[0]]), _defineProperty(_total, "records", []), _defineProperty(_total, "increase", 0), _defineProperty(_total, "decrease", 0), _defineProperty(_total, "start", 0), _defineProperty(_total, "total", 0), _total);
      totals.push(total);
    }

    if (!noDetails) {
      total.records.push(record);
    }

    var res = resources[0];

    if (record[res] > 0) {
      // eslint-disable-next-line no-param-reassign
      record.increase = record[res];
      total.increase += record[res];
    }

    if (record[res] < 0) {
      // eslint-disable-next-line no-param-reassign
      record.decrease = -record[res];
      total.decrease -= record[res];
    }
  });
  totals.forEach(function (total) {
    // eslint-disable-next-line no-param-reassign
    total.total = total.start + total.increase - total.decrease;
    data.push.apply(data, [total].concat(_toConsumableArray(total.records)));
  });
  return data;
};

exports.joinRecord = joinRecord;

var cellStyle = function cellStyle(data) {
  if (data.docTitle) return {};
  return {
    fontWeight: 'bold'
  };
};

exports.cellStyle = cellStyle;

var Cashflow = /*#__PURE__*/function (_Form) {
  _inherits(Cashflow, _Form);

  var _super = _createSuper(Cashflow);

  function Cashflow(args) {
    var _this;

    _classCallCheck(this, Cashflow);

    _this = _super.call(this, args);

    _defineProperty(_assertThisInitialized(_this), "formReport", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, _yield$Promise$all, _yield$Promise$all2, balance, turnover;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              response = [];
              _this.content.data.value = response;
              _context.next = 4;
              return Promise.all([_this.app.MoneyRecord.balance({
                date: (0, _moment.default)(_this.content.periodStart.value).startOf('day')
              }), _this.app.MoneyRecord.turnover({
                where: {
                  date: {
                    $gt: (0, _moment.default)(_this.content.periodStart.value).startOf('day'),
                    $lte: (0, _moment.default)(_this.content.periodEnd.value).endOf('day')
                  }
                }
              })]);

            case 4:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              balance = _yield$Promise$all2[0].response;
              turnover = _yield$Promise$all2[1].response;
              _this.content.data.value = joinRecord({
                balance: balance,
                turnover: turnover,
                fields: ['cashbox'],
                resources: ['sum'],
                noDetails: !_this.content.details.value
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.elements = [{
      type: _client.Elements.GRID,
      elements: [{
        id: 'periodStart',
        type: _client.Elements.DATE,
        title: 'Period start',
        timeFormat: false,
        value: (0, _moment.default)().startOf('week')
      }, {
        id: 'periodEnd',
        type: _client.Elements.DATE,
        title: 'Period end',
        timeFormat: false,
        value: (0, _moment.default)().endOf('week')
      }, {
        id: 'details',
        type: _client.Elements.CHECKBOX,
        title: 'Detail to document'
      }]
    }, {
      id: 'formReport',
      type: _client.Elements.BUTTON,
      title: 'Form report',
      onClick: _this.formReport
    }, {
      id: 'data',
      type: _client.Elements.TABLE,
      cellStyle: cellStyle,
      columns: [{
        id: 'cashbox',
        title: 'Cashbox/Document',
        dataPath: '',
        format: function format(val) {
          return val.docTitle || val.cashbox && val.cashbox.title || 'None';
        }
      }, {
        title: 'Start',
        dataPath: 'sum'
      }, {
        title: 'Increase',
        dataPath: 'increase'
      }, {
        title: 'Decrease',
        dataPath: 'decrease'
      }, {
        title: 'Total',
        dataPath: 'total'
      }]
    }];
    return _this;
  }

  return Cashflow;
}(_client.Form);

exports.default = Cashflow;

_defineProperty(Cashflow, "title", 'Cash flow');

_defineProperty(Cashflow, "entity", 'Cashbox');