"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _client = require("katejs/lib/client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TEXT_MARGIN = 6;
var dateStyle = {
  display: 'inline',
  marginRight: TEXT_MARGIN,
  fontSize: 10
};
var userStyle = {
  display: 'inline',
  marginRight: TEXT_MARGIN,
  fontSize: 10,
  fontWeight: 'bold'
};
var commentStyle = {
  display: 'inline',
  marginRight: TEXT_MARGIN
};
var taskStyle = {
  display: 'inline',
  marginRight: TEXT_MARGIN,
  cursor: 'pointer',
  textDecoration: 'underline'
};
var taskDoneStyle = {
  display: 'inline',
  marginRight: TEXT_MARGIN,
  cursor: 'pointer',
  textDecoration: 'line-through'
};

var mapDate = function mapDate(obj) {
  return _objectSpread(_objectSpread({}, obj), {}, {
    date: obj.date ? new Date(obj.date) : 0
  });
};

var mapHistory = function mapHistory(events) {
  return function (data) {
    var element = {
      type: _client.Elements.GROUP,
      div: true,
      elements: [{
        type: _client.Elements.LABEL,
        style: dateStyle,
        title: data.date ? (0, _moment.default)(data.date).format('DD.MM.YYYY HH:mm') : '---'
      }]
    }; // comment

    if (data.comment) {
      element.elements.push({
        type: _client.Elements.LABEL,
        style: userStyle,
        title: data.user && data.user.title || 'unknown'
      });
      element.elements.push({
        type: _client.Elements.LABEL,
        style: commentStyle,
        title: data.comment
      });
    } // task


    if (data.done !== undefined) {
      element.elements.push({
        type: _client.Elements.LABEL,
        title: 'for',
        style: commentStyle
      });
      element.elements.push({
        type: _client.Elements.LABEL,
        style: userStyle,
        title: "".concat(data.user && data.user.title || 'unknown', ":")
      });
      element.elements.push({
        type: _client.Elements.LABEL,
        style: data.done ? taskDoneStyle : taskStyle,
        title: data.title,
        onClick: function onClick() {
          return events.openTask(data.uuid);
        }
      });
    }

    return element;
  };
};

var _default = function _default(Form) {
  return /*#__PURE__*/function (_Form) {
    _inherits(DealItem, _Form);

    var _super = _createSuper(DealItem);

    function DealItem(args) {
      var _this;

      _classCallCheck(this, DealItem);

      _this = _super.call(this, args);

      if (!userStyle.color) {
        userStyle.color = _this.app.constructor.primaryColor;
      }

      var generatedElements = _this.elements;
      var title = generatedElements.cut('title');
      var salesman = generatedElements.cut('user');
      var schema = generatedElements.cut('schema');
      var step = generatedElements.cut('stepIndex');
      var dealClosed = generatedElements.cut('dealClosed');
      generatedElements.cut('contact'); // temp remove contact

      _this.elements = [{
        id: 'mainGrid',
        type: _client.Elements.GRID,
        elements: [{
          cols: 6,
          id: 'leftGroup',
          type: _client.Elements.GROUP,
          elements: [{
            type: _client.Elements.GRID,
            elements: [_objectSpread(_objectSpread({}, title), {}, {
              cols: 6
            }), {
              type: _client.Elements.LABEL,
              title: 'by',
              cols: 1,
              style: {
                marginTop: 30
              }
            }, _objectSpread(_objectSpread({}, salesman), {}, {
              cols: 5
            })]
          }].concat(_toConsumableArray(generatedElements), [{
            type: _client.Elements.GRID,
            elements: [_objectSpread(_objectSpread({}, step), {}, {
              cols: 6,
              type: _client.Elements.SELECT,
              selectValue: true
            }), {
              type: _client.Elements.LABEL,
              title: 'at',
              cols: 1,
              style: {
                marginTop: 30
              }
            }, _objectSpread(_objectSpread({}, schema), {}, {
              cols: 5
            })]
          }, dealClosed, {
            type: _client.Elements.CARD,
            id: 'extraFields',
            elements: []
          }])
        }, {
          cols: 6,
          id: 'rightGroup',
          type: _client.Elements.GROUP,
          elements: [{
            type: _client.Elements.BUTTON,
            title: 'Add Task',
            onClick: function onClick() {
              return _this.addTask();
            }
          }, {
            id: 'historyCard',
            type: _client.Elements.CARD,
            elements: [{
              type: _client.Elements.GROUP,
              id: 'history',
              elements: []
            }, {
              type: _client.Elements.GRID,
              elements: [{
                id: 'commentText',
                title: 'Comment',
                type: _client.Elements.INPUT,
                cols: 8,
                onKeyPress: function onKeyPress(args) {
                  return _this.keyPress(args);
                }
              }, {
                type: _client.Elements.BUTTON,
                title: 'Do Comment',
                onClick: function onClick() {
                  return _this.postComment();
                },
                cols: 4
              }]
            }]
          }]
        }]
      }];

      _this.elements.get('client').onChange = function (value) {
        return _this.clientChange(value);
      };

      _this.actions.push({
        type: _client.Elements.BUTTON,
        title: 'To Client',
        onClick: function onClick() {
          return _this.toClient();
        }
      });

      return _this;
    }

    _createClass(DealItem, [{
      key: "postComment",
      value: function () {
        var _postComment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var comment;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  comment = this.content.commentText.value;
                  this.content.commentText.value = '';
                  _context.next = 4;
                  return this.app.DealComment.put({
                    body: {
                      comment: comment,
                      dealUuid: this.uuid
                    }
                  });

                case 4:
                  this.fillHistory();

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function postComment() {
          return _postComment.apply(this, arguments);
        }

        return postComment;
      }()
    }, {
      key: "afterInit",
      value: function () {
        var _afterInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _get(_getPrototypeOf(DealItem.prototype), "afterInit", this).call(this);

                  if (!this.uuid) {
                    this.content.user.value = this.app.user;
                    this.content.schema.value = this.app.vars.schema;
                    this.fillSteps();
                    this.save();
                  }

                  this.fillHistory();

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function afterInit() {
          return _afterInit.apply(this, arguments);
        }

        return afterInit;
      }()
    }, {
      key: "fillHistory",
      value: function () {
        var _fillHistory = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var _this2 = this;

          var _yield$Promise$all, _yield$Promise$all2, comments, tasks, history;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (this.uuid) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return");

                case 2:
                  _context3.next = 4;
                  return Promise.all([this.app.DealComment.query({
                    where: {
                      dealUuid: this.uuid
                    }
                  }), this.app.Task.query({
                    where: {
                      dealUuid: this.uuid
                    }
                  })]);

                case 4:
                  _yield$Promise$all = _context3.sent;
                  _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                  comments = _yield$Promise$all2[0].response;
                  tasks = _yield$Promise$all2[1].response;
                  history = [].concat(_toConsumableArray(comments.map(mapDate)), _toConsumableArray(tasks.map(mapDate)));
                  history.sort(function (a, b) {
                    return b.date - a.date;
                  });
                  this.content.history.elements = history.map(mapHistory({
                    openTask: function openTask(uuid) {
                      return _this2.openTask(uuid);
                    }
                  }));

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function fillHistory() {
          return _fillHistory.apply(this, arguments);
        }

        return fillHistory;
      }()
    }, {
      key: "addTask",
      value: function addTask() {
        this.app.vars.currentDeal = {
          uuid: this.uuid,
          title: this.content.title.value
        };
        this.app.vars.currentClient = this.content.client.value;
        this.app.open("TaskItem", {
          id: 'new'
        });
      }
    }, {
      key: "openTask",
      value: function openTask(uuid) {
        this.app.open('TaskItem', {
          id: uuid
        });
      }
    }, {
      key: "clientChange",
      value: function clientChange(value) {
        if (!this.content.title.value && value && value.uuid) {
          this.content.title.value = value.title;
        }
      }
    }, {
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _get(_getPrototypeOf(DealItem.prototype), "load", this).call(this);

                case 2:
                  this.fillSteps();

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function load() {
          return _load.apply(this, arguments);
        }

        return load;
      }()
    }, {
      key: "fillSteps",
      value: function fillSteps() {
        var schema = this.content.schema.value;
        if (!schema || !schema.uuid) return;
        var steps = this.app.schemas[schema.uuid].steps;
        this.content.stepIndex.options = steps.map(function (step, index) {
          return {
            title: step.name,
            value: index
          };
        });
        var stepIndex = this.content.stepIndex.value;

        if (stepIndex === undefined || stepIndex === null) {
          this.content.stepIndex.value = 0;
        }
      }
    }, {
      key: "keyPress",
      value: function keyPress(event) {
        if (event.key === "Enter") {
          this.postComment();
        }
      }
    }, {
      key: "toClient",
      value: function toClient() {
        var client = this.content.client.value;

        if (client && client.uuid) {
          this.save();
          this.app.open('ClientItem', {
            id: client.uuid
          });
        }
      }
    }]);

    return DealItem;
  }(Form);
};

exports.default = _default;