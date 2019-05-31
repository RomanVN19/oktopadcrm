"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DocListForm = function DocListForm(ItemForm) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_ItemForm) {
    _inherits(DocList, _ItemForm);

    function DocList(params) {
      var _this;

      _classCallCheck(this, DocList);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DocList).call(this, params));

      _defineProperty(_assertThisInitialized(_this), "openPeriodDialog", function () {
        _this.content.periodDialog.open = true;
      });

      _defineProperty(_assertThisInitialized(_this), "closePeriodDialog", function () {
        _this.content.periodDialog.open = false;
      });

      _defineProperty(_assertThisInitialized(_this), "applyPeriodFilter", function () {
        var start = _this.content.periodStart.value;
        var end = _this.content.periodEnd.value;
        _this.filters = _this.filters || {};
        if (start || end) _this.filters.date = {};

        if (start) {
          _this.filters.date.$gte = (0, _moment.default)(start).startOf('day').format();
        }

        if (end) {
          _this.filters.date.$lte = (0, _moment.default)(end).endOf('day').format();
        }

        _this.load();

        _this.closePeriodDialog();

        _this.app.docPeriodFilters[_this.constructor.entity] = _this.filters.date;
        _this.content.periodButton.title = _this.getActionPeriodTitle();
      });

      var list = _this.elements.get('list');

      list.columns.unshift({
        title: 'Title',
        dataPath: 'title'
      }); // list.columns.unshift(
      //   {
      //     title: 'Number',
      //     dataPath: 'number',
      //   },
      //   {
      //     title: 'Date',
      //     dataPath: 'date',
      //     format: val => val && moment(val).format('DD.MM.YYYY HH:mm'),
      //   },
      // );

      _this.elements.push({
        id: 'periodDialog',
        type: _client.Elements.MODAL,
        maxWidth: 'md',
        noScroll: true,
        open: false,
        elements: [{
          type: _client.Elements.MODAL_ACTIONS,
          elements: [{
            type: _client.Elements.BUTTON,
            title: 'Apply',
            onClick: _this.applyPeriodFilter
          }, {
            type: _client.Elements.BUTTON,
            title: 'Cancel',
            onClick: _this.closePeriodDialog
          }]
        }, {
          type: _client.Elements.GRID,
          elements: [{
            type: _client.Elements.DATE,
            id: 'periodStart',
            title: 'Period start',
            timeFormat: false,
            cols: 6
          }, {
            type: _client.Elements.DATE,
            id: 'periodEnd',
            title: 'Period end',
            timeFormat: false,
            cols: 6
          }]
        }, {
          type: _client.Elements.GRID,
          elements: [{
            type: _client.Elements.BUTTON,
            title: 'Yesterday',
            fullWidth: true,
            cols: 4,
            onClick: function onClick() {
              return _this.setPeriod(-1, 'day');
            }
          }, {
            type: _client.Elements.BUTTON,
            title: 'Today',
            fullWidth: true,
            cols: 4,
            onClick: function onClick() {
              return _this.setPeriod(0, 'day');
            }
          }, {
            type: _client.Elements.BUTTON,
            title: 'Tomorrow',
            cols: 4,
            fullWidth: true,
            onClick: function onClick() {
              return _this.setPeriod(1, 'day');
            }
          }]
        }, {
          type: _client.Elements.GRID,
          elements: [{
            type: _client.Elements.BUTTON,
            title: 'Prev week',
            fullWidth: true,
            cols: 4,
            onClick: function onClick() {
              return _this.setPeriod(-1, 'week');
            }
          }, {
            type: _client.Elements.BUTTON,
            title: 'This week',
            fullWidth: true,
            cols: 4,
            onClick: function onClick() {
              return _this.setPeriod(0, 'week');
            }
          }, {
            type: _client.Elements.BUTTON,
            title: 'Next week',
            cols: 4,
            fullWidth: true,
            onClick: function onClick() {
              return _this.setPeriod(1, 'week');
            }
          }]
        }]
      });

      _this.order = [['date', 'DESC']];
      _this.filters = _this.filters || {};

      if (_this.app.docPeriodFilters[_this.constructor.entity]) {
        _this.filters.date = _this.app.docPeriodFilters[_this.constructor.entity];
      }

      _this.actions.push({
        id: 'periodButton',
        type: _client.Elements.BUTTON,
        title: _this.filters && _this.filters.date ? _this.getActionPeriodTitle() : 'Period',
        onClick: _this.openPeriodDialog
      });

      return _this;
    }

    _createClass(DocList, [{
      key: "setPeriod",
      value: function setPeriod(delta, period) {
        this.content.periodStart.value = (0, _moment.default)().add(delta, period).startOf(period);
        this.content.periodEnd.value = (0, _moment.default)().add(delta, period).endOf(period);
      }
    }, {
      key: "getActionPeriodTitle",
      value: function getActionPeriodTitle() {
        return "".concat(this.app.t('Period'), " ").concat((0, _moment.default)(this.filters.date.$gte).format('DD.MM'), " - ").concat((0, _moment.default)(this.filters.date.$lte).format('DD.MM'));
      }
    }]);

    return DocList;
  }(ItemForm), _temp;
};

var _default = DocListForm;
exports.default = _default;