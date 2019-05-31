"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

function _templateObject() {
  var data = _taggedTemplateLiteral(["Clients debt ", ": ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ClientDebt =
/*#__PURE__*/
function () {
  function ClientDebt(params) {
    var _this = this;

    _classCallCheck(this, ClientDebt);

    _defineProperty(this, "showModal",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.content.clientDebtModal.open = true;

              _this.exec();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(this, "rowClick", function (row) {
      if (_this.report) {
        _this.app.open("".concat(row.entity, "Item"), {
          id: row.docUuid
        });
      }
    });

    Object.assign(this, params);
    var style = {};
    if (this.report) style.maxHeight = 200;
    var reportElements = [{
      id: 'clientDebtTitle',
      type: _client.Elements.LABEL,
      title: 'Clients debt ',
      tag: 'h4'
    }, {
      id: 'clientDebtData',
      type: _client.Elements.TABLE,
      style: style,
      rowClick: this.rowClick,
      columns: [{
        title: 'Document',
        dataPath: 'docTitle'
      }, {
        title: 'Sale',
        dataPath: '',
        format: function format(val) {
          return val.sale || (val.sum > 0 ? val.sum : '');
        }
      }, {
        title: 'Payment',
        dataPath: '',
        format: function format(val) {
          return val.payment || (val.sum < 0 ? -val.sum : '');
        }
      }],
      value: []
    }];

    if (this.report) {
      this.elements = reportElements;
      this.exec(this.clientUuid);
    } else {
      this.elements = [{
        type: _client.Elements.BUTTON,
        title: 'Client debt',
        onClick: this.showModal
      }, {
        id: 'clientDebtModal',
        type: _client.Elements.MODAL,
        maxWidth: 'md',
        open: false,
        elements: reportElements
      }];
    }
  }

  _createClass(ClientDebt, [{
    key: "exec",
    value: function () {
      var _exec = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(clientUuid) {
        var _ref2, data, totals;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.app.DebtRecord.turnover({
                  where: {
                    clientUuid: clientUuid || this.content.client.value.uuid
                  },
                  order: ['date']
                });

              case 2:
                _ref2 = _context2.sent;
                data = _ref2.response;
                totals = data.reduce(function (acc, val) {
                  acc[2] += val.sum;
                  acc[0] += val.sum > 0 ? val.sum : 0;
                  acc[1] += val.sum < 0 ? -val.sum : 0;
                  return acc;
                }, [0, 0, 0]);
                data.push({
                  docTitle: this.app.t('Total'),
                  sale: totals[0],
                  payment: totals[1]
                });
                this.content.clientDebtData.value = data;
                this.content.clientDebtTitle.title = this.app.t(_templateObject(), this.report ? '' : this.content.client.value.title, totals[2]);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function exec(_x) {
        return _exec.apply(this, arguments);
      }

      return exec;
    }()
  }]);

  return ClientDebt;
}();

exports.default = ClientDebt;