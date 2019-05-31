"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wholeDay = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
var wholeDay = function wholeDay(date) {
  return {
    $gte: (0, _moment.default)(date).startOf('day').format(),
    $lte: (0, _moment.default)(date).endOf('day').format()
  };
};

exports.wholeDay = wholeDay;