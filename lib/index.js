"use strict";

var _client = _interopRequireDefault(require("katejs/lib/client"));

var _AppClient = _interopRequireDefault(require("./AppClient"));

var _translations = _interopRequireDefault(require("./translations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _client.default)({
  AppClient: _AppClient.default,
  translations: _translations.default
});