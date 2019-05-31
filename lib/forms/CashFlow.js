"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      resources = _ref.resources;
  var data = [];
  var totals = balance.map(function (item) {
    return _objectSpread({}, item, {
      records: [],
      increase: 0,
      decrease: 0
    });
  });
  turnover.forEach(function (record) {
    var total = totals.find(function (item) {
      return checkEqual(item[fields[0]], record[fields[0]]);
    });

    if (!total) {
      var _total;

      total = (_total = {}, _defineProperty(_total, resources[0], 0), _defineProperty(_total, fields[0], record[fields[0]]), _defineProperty(_total, "records", []), _defineProperty(_total, "increase", 0), _defineProperty(_total, "decrease", 0), _defineProperty(_total, "sum", 0), _total);
      totals.push(total);
    }

    total.records.push(record);

    if (record.sum > 0) {
      // eslint-disable-next-line no-param-reassign
      record.increase = record.sum;
      total.increase += record.sum;
    }

    if (record.sum < 0) {
      // eslint-disable-next-line no-param-reassign
      record.decrease = -record.sum;
      total.decrease -= record.sum;
    }
  });
  totals.forEach(function (total) {
    // eslint-disable-next-line no-param-reassign
    total.total = total.sum + total.increase - total.decrease;
    data.push.apply(data, [total].concat(_toConsumableArray(total.records)));
  });
  return data;
};

var cellStyle = function cellStyle(data) {
  if (data.docTitle) return {};
  return {
    fontWeight: 'bold'
  };
};

var Cashflow =
/*#__PURE__*/
function (_Form) {
  _inherits(Cashflow, _Form);

  function Cashflow(args) {
    var _this;

    _classCallCheck(this, Cashflow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cashflow).call(this, args));

    _defineProperty(_assertThisInitialized(_this), "formReport",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var response, _ref3, _ref4, balance, turnover;

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
              _ref3 = _context.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              balance = _ref4[0].response;
              turnover = _ref4[1].response;
              _this.content.data.value = joinRecord({
                balance: balance,
                turnover: turnover,
                fields: ['cashbox'],
                resources: ['sum']
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.elements = [{
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