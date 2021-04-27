"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.kanbanStyles = void 0;

var _client = require("katejs/lib/client");

var _structure = require("../structure");

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

var kanbanStyles = {
  container: {
    justifyContent: 'none',
    overflowX: 'scroll'
  },
  columnContainer: {},
  columnHeader: {
    fontSize: '1.25rem'
  },
  column: {},
  columnDragOver: {
    background: '#b1dede'
  },
  item: {
    background: '#088596'
  },
  itemDragging: {
    background: '#064C59'
  }
};
exports.kanbanStyles = kanbanStyles;
var BOARD_COL_PREFIX = '$$col_';

var _default = function _default(Form) {
  return /*#__PURE__*/function (_Form) {
    _inherits(DealList, _Form);

    var _super = _createSuper(DealList);

    function DealList(args) {
      var _this;

      _classCallCheck(this, DealList);

      _this = _super.call(this, args);
      _this.actions = undefined;
      var schema = _this.app.vars.schema || _this.app.settings.defaultSchema;
      _this.app.vars.schema = schema;

      var schemaFilter = _objectSpread(_objectSpread({}, (0, _client.getElement)(_structure.structures.Deal.fields.find(function (item) {
        return item.name === 'schema';
      }), _assertThisInitialized(_this))), {}, {
        value: schema,
        onChange: function onChange() {
          return _this.schemaChange();
        }
      });

      var isBoard = _this.app.vars.isBoardDeals === undefined ? true : _this.app.vars.isBoardDeals;
      var isHideClosed = _this.app.vars.isHideClosedDeals === undefined ? true : _this.app.vars.isHideClosedDeals;
      var topPanel = {
        type: _client.Elements.GRID,
        elements: [{
          type: _client.Elements.BUTTON,
          title: 'New Deal',
          onClick: function onClick() {
            return _this.app.open('DealItem', {
              id: 'new'
            });
          },
          cols: 2
        }, schemaFilter, _objectSpread(_objectSpread({}, (0, _client.getElement)(_structure.structures.Deal.fields.find(function (item) {
          return item.name === 'user';
        }), _assertThisInitialized(_this))), {}, {
          value: _this.app.user,
          onChange: function onChange() {
            return _this.userChange();
          },
          disabled: !_this.app.allow('SaleSchema', 'put')
        }), {
          type: _client.Elements.LABEL,
          title: 'List',
          style: {
            textAlign: 'right',
            fontWeight: 'bolder',
            marginTop: 22
          },
          tag: 'p',
          cols: 1
        }, {
          type: _client.Elements.GROUP,
          div: true,
          style: {
            marginTop: 10
          },
          cols: 1,
          elements: [{
            type: _client.Elements.SWITCH,
            id: 'isBoard',
            value: isBoard,
            title: 'Board',
            onChange: function onChange() {
              return _this.changeView();
            }
          }]
        }, {
          type: _client.Elements.CHECKBOX,
          id: 'isHideClosed',
          value: isHideClosed,
          cols: 2,
          title: 'Hide Closed',
          onChange: function onChange() {
            return _this.hideClosedChange();
          },
          style: {
            marginLeft: 25
          }
        }]
      };

      var list = _this.elements.cut('list');

      list.columns.splice(list.columns.findIndex(function (col) {
        return col.dataPath === "contact";
      }), 1);
      var stepIndex = list.columns.find(function (col) {
        return col.dataPath === "stepIndex";
      });

      stepIndex.format = function (index) {
        return _this.stepFormat(index);
      };

      stepIndex.title = 'Step';
      var dealClosed = list.columns.find(function (col) {
        return col.dataPath === "dealClosed";
      });
      dealClosed.title = 'Closed';

      dealClosed.format = function (val) {
        return val ? '✔' : '';
      };

      list.hidden = isBoard;
      var board = {
        hidden: !isBoard,
        id: 'board',
        type: 'Kanban',
        styles: kanbanStyles,
        itemClick: function itemClick(item) {
          return _this.boardItemClick(item);
        },
        data: [],
        onDragEnd: function onDragEnd(params) {
          return _this.onDragEnd(params);
        },
        orderSaveKey: 'dealsOrder'
      };

      _this.elements.push(topPanel, list, board);

      var userColIndex = list.columns.findIndex(function (col) {
        return col.dataPath === 'user';
      });
      _this.userColumn = list.columns.splice(userColIndex, 1)[0];
      var closedColIndex = list.columns.findIndex(function (col) {
        return col.dataPath === 'dealClosed';
      });
      _this.closedColumn = list.columns.splice(closedColIndex, 1)[0];

      _this.setFilters(true);

      return _this;
    }

    _createClass(DealList, [{
      key: "schemaChange",
      value: function schemaChange() {
        this.app.vars.schema = this.content.schema.value;
        this.setFilters();
        this.load();
      }
    }, {
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
        this.filters = {
          schemaUuid: this.app.vars.schema && this.app.vars.schema.uuid
        };
        var user = this.app.user;
        var hideClosed = this.app.vars.isHideClosedDeals !== undefined ? this.app.vars.isHideClosedDeals : true;

        if (!init) {
          user = this.content.user.value;
          hideClosed = this.content.isHideClosed.value;
        }

        if (user) {
          this.filters.userUuid = user.uuid;
        }

        if (hideClosed) {
          this.filters.dealClosed = false;
        }
      }
    }, {
      key: "changeView",
      value: function changeView() {
        var isBoard = this.content.isBoard.value;
        this.content.list.hidden = isBoard;
        this.content.board.hidden = !isBoard;
        this.app.vars.isBoardDeals = isBoard;

        if (isBoard) {
          this.setBoardData(this.content.list.value);
        }
      }
    }, {
      key: "boardItemClick",
      value: function boardItemClick(item) {
        this.app.open('DealItem', {
          id: item.uuid
        });
      }
    }, {
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var data, _yield$this$app$SaleS, schema;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _get(_getPrototypeOf(DealList.prototype), "load", this).call(this);

                case 2:
                  data = _context.sent;
                  _context.next = 5;
                  return this.app.SaleSchema.get({
                    uuid: this.app.vars.schema.uuid
                  });

                case 5:
                  _yield$this$app$SaleS = _context.sent;
                  schema = _yield$this$app$SaleS.response;
                  this.schema = schema;
                  this.content.list.value = data;

                  if (this.content.isBoard.value) {
                    this.setBoardData(data);
                  }

                  return _context.abrupt("return", data);

                case 11:
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
                  data = data.map(function (item) {
                    return _objectSpread(_objectSpread({}, item), {}, {
                      id: item.uuid
                    });
                  }); // идентификаторы сделаны индексами чтобы при изменении схемы
                  // сохранялся порядок

                  columns = this.schema.steps.map(function (step, index) {
                    return _objectSpread(_objectSpread({}, step), {}, {
                      title: step.name,
                      id: "".concat(BOARD_COL_PREFIX).concat(index)
                    });
                  });
                  data.forEach(function (deal) {
                    var column = columns.find(function (column, index) {
                      return index === deal.stepIndex;
                    });

                    if (!column) {
                      column = columns[0];
                    }

                    var items = column.items || [];
                    items.push(deal);
                    column.items = items;
                  });
                  this.content.board.data = columns;

                case 4:
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
          var data, targetStepIndex;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  data = this.content.board.data;

                  if (!(params.destination.droppableId !== params.source.droppableId)) {
                    _context3.next = 6;
                    break;
                  }

                  // change step
                  targetStepIndex = +params.destination.droppableId.replace(BOARD_COL_PREFIX, '');
                  _context3.next = 5;
                  return this.app.Deal.put({
                    uuid: params.draggableId,
                    body: {
                      stepIndex: targetStepIndex
                    }
                  });

                case 5:
                  this.load();

                case 6:
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
      key: "stepFormat",
      value: function stepFormat(index) {
        return this.schema && this.schema.steps[index].name;
      }
    }, {
      key: "hideClosedChange",
      value: function hideClosedChange() {
        this.setFilters();
        this.app.vars.isHideClosedDeals = this.content.isHideClosed.value;
        var columns = this.content.list.columns;
        var closedColIndex = columns.findIndex(function (item) {
          return item.dataPath === 'dealClosed';
        });

        if (!this.content.isHideClosed.value) {
          if (closedColIndex === -1) {
            columns.push(this.closedColumn);
          }
        } else {
          if (closedColIndex !== -1) {
            columns.splice(closedColIndex, 1);
          }
        }

        this.content.list.columns = columns;
        this.load();
      }
    }]);

    return DealList;
  }(Form);
};

exports.default = _default;