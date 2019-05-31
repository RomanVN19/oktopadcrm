"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _katejs = require("katejs");

var _structure = require("../structure");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Payment =
/*#__PURE__*/
function (_Entity) {
  _inherits(Payment, _Entity);

  function Payment(params) {
    var _this;

    _classCallCheck(this, Payment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Payment).call(this, params));
    _this.structure = _structure.structures.Payment;
    return _this;
  } // eslint-disable-next-line class-methods-use-this


  _createClass(Payment, [{
    key: "makeRecords",
    value: function makeRecords(doc) {
      var records = [];
      (doc.clientpayments || []).forEach(function (row) {
        records.push({
          client: row.client,
          sum: -row.sum
        });
      });
      return {
        DebtRecord: records.filter(function (item) {
          return !!item.sum;
        }),
        MoneyRecord: [{
          cashbox: doc.cashbox,
          sum: doc.total
        }]
      };
    }
  }]);

  return Payment;
}(_katejs.Entity);

exports.default = Payment;

_defineProperty(Payment, "doc", true);

_defineProperty(Payment, "records", ['DebtRecord', 'MoneyRecord']);