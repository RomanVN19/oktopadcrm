"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dateStyle = {
  fontWeight: 'bold',
  fontSize: 'larger'
};
var entityStyle = {
  fontWeight: 'bold'
};
var contentStyle = {
  whiteSpace: 'pre-wrap'
};

var WhatsNew =
/*#__PURE__*/
function (_Form) {
  _inherits(WhatsNew, _Form);

  function WhatsNew(args) {
    var _this;

    _classCallCheck(this, WhatsNew);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WhatsNew).call(this, args));
    _this.elements = [{
      id: 'byDates',
      type: _client.Elements.GROUP,
      elements: []
    }];

    _this.load();

    return _this;
  }

  _createClass(WhatsNew, [{
    key: "load",
    value: function () {
      var _load = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var _ref, response, data, elements, currentDate, currentEntity, currentContent, addContent, content, index, element;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.app.EntityDescription.query({
                  order: [['date', 'DESC'], ['entity']],
                  limit: -1
                });

              case 2:
                _ref = _context.sent;
                response = _ref.response;
                data = this.app.docsContent;

                if (response) {
                  data = this.app.docsContent.concat(response);
                }

                data.sort(function (_ref2, _ref3) {
                  var b = _ref2.date;
                  var a = _ref3.date;
                  return a > b ? 1 : a < b ? -1 : 0;
                });
                elements = [];
                currentDate = '';
                currentEntity = '';
                currentContent = '';

                addContent = function addContent() {
                  if (currentContent) {
                    elements.push({
                      type: _client.Elements.LABEL,
                      style: contentStyle,
                      title: currentContent
                    });
                  }

                  currentContent = '';
                };

                if (this.app.docsAccessFilter) {
                  content = data.filter(function (item) {
                    return _this2.app.docsAccessFilter(item);
                  });
                } else {
                  content = data;
                }

                for (index = 0; index < content.length; index += 1) {
                  element = content[index];

                  if (currentDate !== element.date) {
                    addContent();
                    currentDate = element.date;
                    elements.push({
                      type: _client.Elements.LABEL,
                      style: dateStyle,
                      title: element.date
                    });
                  }

                  if (currentEntity !== element.entity) {
                    addContent();
                    currentEntity = element.entity;
                    elements.push({
                      type: _client.Elements.LABEL,
                      style: entityStyle,
                      title: element.entity
                    });
                  }

                  currentContent += "".concat(element.description, "\n");
                }

                addContent();
                this.content.byDates.elements = elements;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }]);

  return WhatsNew;
}(_client.Form);

exports.default = WhatsNew;

_defineProperty(WhatsNew, "title", 'What\'s new');