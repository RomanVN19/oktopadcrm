"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _moment = _interopRequireDefault(require("moment"));

var _CashFlow = require("./CashFlow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DebtsFlowReport = /*#__PURE__*/function (_Form) {
  _inherits(DebtsFlowReport, _Form);

  var _super = _createSuper(DebtsFlowReport);

  function DebtsFlowReport(args) {
    var _this;

    _classCallCheck(this, DebtsFlowReport);

    _this = _super.call(this, args);

    _defineProperty(_assertThisInitialized(_this), "formReport", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$getValues, startDate, endDate, _yield$Promise$all, _yield$Promise$all2, balance, turnover, response;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$getValues = _this.getValues(), startDate = _this$getValues.startDate, endDate = _this$getValues.endDate;
              _this.content.data.value = [];
              _context.next = 4;
              return Promise.all([_this.app.DebtRecord.balance({
                date: (0, _moment.default)(startDate).startOf('day')
              }), _this.app.DebtRecord.turnover({
                where: {
                  date: {
                    $gt: (0, _moment.default)(startDate).startOf('day'),
                    $lte: (0, _moment.default)(endDate).endOf('day')
                  }
                }
              })]);

            case 4:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              balance = _yield$Promise$all2[0].response;
              turnover = _yield$Promise$all2[1].response;
              response = (0, _CashFlow.joinRecord)({
                balance: balance,
                turnover: turnover,
                fields: ['client'],
                resources: ['sum'],
                noDetails: !_this.content.details.value
              });
              _this.content.data.value = response;

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.elements = [{
      type: _client.Elements.GRID,
      elements: [{
        id: 'startDate',
        type: _client.Elements.DATE,
        title: 'Period start',
        timeFormat: false,
        value: (0, _moment.default)().startOf('week')
      }, {
        id: 'endDate',
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
      cellStyle: _CashFlow.cellStyle,
      columns: [{
        title: 'Client/Document',
        dataPath: '',
        format: function format(val) {
          return val.docTitle || val.client && val.client.title || 'None';
        }
      }, {
        title: 'Start',
        dataPath: 'start'
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

  return DebtsFlowReport;
}(_client.Form);

exports.default = DebtsFlowReport;

_defineProperty(DebtsFlowReport, "title", 'Client debts');

_defineProperty(DebtsFlowReport, "entity", 'Order');