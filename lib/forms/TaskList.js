"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _moment = _interopRequireDefault(require("moment"));

var _structure = require("../structure");

var _DealList = require("./DealList");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var doneStyle = {
  textDecoration: 'line-through'
};

var _default = function _default(Form) {
  return /*#__PURE__*/function (_Form) {
    _inherits(TaskList, _Form);

    var _super = _createSuper(TaskList);

    function TaskList(args) {
      var _this;

      _classCallCheck(this, TaskList);

      _this = _super.call(this, args);
      _this.actions = undefined;
      var isBoard = _this.app.vars.isBoardTasks === undefined ? true : _this.app.vars.isBoardTasks;
      var isHideDone = _this.app.vars.isHideDoneTasks === undefined ? true : _this.app.vars.isHideDoneTasks;
      var topPanel = {
        type: _client.Elements.GRID,
        elements: [{
          type: _client.Elements.BUTTON,
          title: 'New Task',
          onClick: function onClick() {
            return _this.app.open('TaskItem', {
              id: 'new'
            });
          },
          cols: 2
        }, _objectSpread(_objectSpread({}, (0, _client.getElement)(_structure.structures.Task.fields.find(function (item) {
          return item.name === 'user';
        }), _assertThisInitialized(_this))), {}, {
          value: _this.app.user,
          onChange: function onChange() {
            return _this.userChange();
          }
        }), {
          type: _client.Elements.LABEL,
          title: 'List',
          style: {
            textAlign: 'right',
            fontWeight: 'bolder',
            marginTop: 12
          },
          tag: 'p',
          cols: 2
        }, {
          type: _client.Elements.SWITCH,
          id: 'isBoard',
          value: isBoard,
          title: 'Board',
          cols: 2,
          onChange: function onChange() {
            return _this.changeView();
          }
        }, {
          type: _client.Elements.CHECKBOX,
          id: 'isHideDone',
          value: isHideDone,
          cols: 2,
          title: 'Hide Done',
          onChange: function onChange() {
            return _this.hideDoneChange();
          }
        }]
      };

      var list = _this.elements.cut('list');

      list.hidden = isBoard;
      list.columns.splice(list.columns.findIndex(function (col) {
        return col.dataPath === 'done';
      }), 1);
      list.columns.splice(list.columns.findIndex(function (col) {
        return col.dataPath === 'contact';
      }), 1);
      var dataColumn = list.columns.find(function (col) {
        return col.dataPath === 'date';
      });

      dataColumn.format = function (val) {
        return (0, _moment.default)(val).format('DD.MM HH:mm');
      };

      list.cellStyle = function (row, column) {
        if (column.dataPath === 'title' && row.done) {
          return {
            textDecoration: 'line-through'
          };
        }
      };

      var board = {
        hidden: !isBoard,
        id: 'board',
        type: 'Kanban',
        styles: _DealList.kanbanStyles,
        itemClick: function itemClick(item) {
          return _this.boardItemClick(item);
        },
        data: [],
        onDragEnd: function onDragEnd(params) {
          return _this.onDragEnd(params);
        },
        orderSaveKey: 'tasksOrder'
      };

      _this.elements.push(topPanel, list, board);

      _this.setFilters(true);

      var userColIndex = list.columns.findIndex(function (col) {
        return col.dataPath === 'user';
      });
      _this.userColumn = list.columns.splice(userColIndex, 1)[0];
      _this.app.vars.currentClient = undefined;
      _this.app.vars.currentDeal = undefined;
      return _this;
    }

    _createClass(TaskList, [{
      key: "userChange",
      value: function userChange() {
        this.setFilters();
        var columns = this.content.list.columns;
        var userColIndex = columns.findIndex(function (item) {
          return item.dataPath === 'user';
        });

        if (!this.content.user.value) {
          if (userColIndex === -1) {
            columns.push(this.userColumn);
          }
        } else {
          if (userColIndex !== -1) {
            columns.splice(userColIndex, 1);
          }
        }

        this.content.list.columns = columns;
        this.load();
      }
    }, {
      key: "setFilters",
      value: function setFilters(init) {
        this.filters = {};
        var user = this.app.user;
        var hideDone = this.app.vars.isHideDoneTasks === undefined ? true : this.app.vars.isHideDoneTasks;

        if (!init) {
          user = this.content.user.value;
          hideDone = this.content.isHideDone.value;
        }

        if (user) {
          this.filters.userUuid = user.uuid;
        }

        if (hideDone) {
          this.filters.done = false;
        }
      }
    }, {
      key: "changeView",
      value: function changeView() {
        var isBoard = this.content.isBoard.value;
        this.content.list.hidden = isBoard;
        this.content.board.hidden = !isBoard;
        this.app.vars.isBoardTasks = isBoard;

        if (isBoard) {
          this.setBoardData(this.content.list.value);
        }
      }
    }, {
      key: "boardItemClick",
      value: function boardItemClick(item) {
        this.app.open('TaskItem', {
          id: item.uuid
        });
      }
    }, {
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _get(_getPrototypeOf(TaskList.prototype), "load", this).call(this);

                case 2:
                  data = _context.sent;

                  if (this.content.isBoard.value) {
                    this.setBoardData(data);
                  }

                  return _context.abrupt("return", data);

                case 5:
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
    }, {
      key: "setBoardData",
      value: function () {
        var _setBoardData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
          var columns;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  columns = [{
                    title: 'Expired',
                    id: 'expired',
                    items: [],
                    edge: (0, _moment.default)().startOf('day').toDate().getTime()
                  }, {
                    title: 'Today',
                    id: (0, _moment.default)().format('YYYYMMDD'),
                    items: [],
                    edge: (0, _moment.default)().endOf('day').toDate().getTime()
                  }, {
                    title: 'Tomorrow',
                    id: (0, _moment.default)().add(1, 'day').format('YYYYMMDD'),
                    items: [],
                    edge: (0, _moment.default)().add(1, 'day').endOf('day').toDate().getTime()
                  }, {
                    title: 'Day After Tomorrow',
                    id: (0, _moment.default)().add(2, 'day').format('YYYYMMDD'),
                    items: [],
                    edge: (0, _moment.default)().add(2, 'day').endOf('day').toDate().getTime()
                  }, {
                    title: 'Later',
                    id: 'later',
                    items: []
                  }];
                  data.forEach(function (task) {
                    var timestamp = (0, _moment.default)(task.date).toDate().getTime();
                    var colIndex = 0;

                    for (; colIndex < columns.length - 1; colIndex++) {
                      // except last
                      if (timestamp < columns[colIndex].edge) {
                        break;
                      }
                    }

                    if (colIndex === colIndex.length) {
                      colIndex--;
                    }

                    columns[colIndex].items.push(_objectSpread(_objectSpread({}, task), {}, {
                      id: task.uuid,
                      style: task.done ? doneStyle : undefined
                    }));
                  });
                  this.content.board.data = columns;

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function setBoardData(_x) {
          return _setBoardData.apply(this, arguments);
        }

        return setBoardData;
      }()
    }, {
      key: "onDragEnd",
      value: function () {
        var _onDragEnd = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
          var data, task, targetDate, date;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  data = this.content.board.data;
                  task = this.content.list.value.find(function (item) {
                    return item.uuid === params.draggableId;
                  });

                  if (!(params.destination.droppableId !== params.source.droppableId)) {
                    _context3.next = 8;
                    break;
                  }

                  targetDate = params.destination.droppableId;

                  if (targetDate === 'expired') {
                    date = (0, _moment.default)().subtract(1, 'day').toDate();
                  } else if (targetDate === 'later') {
                    date = (0, _moment.default)().add(3, 'days').toDate();
                  } else {
                    date = (0, _moment.default)("".concat(targetDate, " ").concat((0, _moment.default)(task.date).format('HH:mm')), 'YYYYMMDD HH:mm');
                  }

                  _context3.next = 7;
                  return this.app.Task.put({
                    uuid: params.draggableId,
                    body: {
                      date: date
                    }
                  });

                case 7:
                  this.load();

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function onDragEnd(_x2) {
          return _onDragEnd.apply(this, arguments);
        }

        return onDragEnd;
      }()
    }, {
      key: "hideDoneChange",
      value: function hideDoneChange() {
        this.app.vars.isHideDoneTasks = this.content.isHideDone.value;
        this.setFilters();
        this.load();
      }
    }]);

    return TaskList;
  }(Form);
};

exports.default = _default;