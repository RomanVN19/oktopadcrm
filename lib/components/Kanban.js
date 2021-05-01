"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var testItems = [{
  id: '11',
  title: "First task"
}, {
  id: '12',
  title: "Second task"
}, {
  id: '13',
  title: "Third task"
}, {
  id: '14',
  title: "Fourth task"
}, {
  id: '15',
  title: "Fifth task"
}];
var testData = [{
  id: 'id1',
  title: 'col 1',
  items: testItems
}, {
  id: 'id2',
  title: 'col 2'
}];

var _onDragEnd = function onDragEnd(result, columns, setColumns, props) {
  if (!result.destination) return;
  var source = result.source,
      destination = result.destination;
  var newColumns;

  if (source.droppableId !== destination.droppableId) {
    var sourceColumn = columns.find(function (item) {
      return item.id === source.droppableId;
    });
    var destColumn = columns.find(function (item) {
      return item.id === destination.droppableId;
    });
    var sourceItems = sourceColumn.items || [];
    var destItems = destColumn.items || [];
    sourceColumn.items = sourceItems;
    destColumn.items = destItems;

    var _sourceItems$splice = sourceItems.splice(source.index, 1),
        _sourceItems$splice2 = _slicedToArray(_sourceItems$splice, 1),
        removed = _sourceItems$splice2[0];

    destItems.splice(destination.index, 0, removed);
    newColumns = columns.slice();
    setColumns(newColumns);

    if (props.onDragEnd) {
      props.onDragEnd(result);
    }
  } else {
    var column = columns.find(function (item) {
      return item.id === source.droppableId;
    });
    var copiedItems = column.items;

    var _copiedItems$splice = copiedItems.splice(source.index, 1),
        _copiedItems$splice2 = _slicedToArray(_copiedItems$splice, 1),
        _removed = _copiedItems$splice2[0];

    copiedItems.splice(destination.index, 0, _removed);
    newColumns = columns.slice();
    setColumns(newColumns);
  }

  if (props.orderSaveKey) {
    saveOrder(newColumns, props.orderSaveKey);
  }
};

var saveOrder = function saveOrder(data, key) {
  var order = data.reduce(function (acc, col) {
    var colOrder = (col.items || []).reduce(function (accItems, item, index) {
      accItems[item.id] = index;
      return accItems;
    }, {});
    acc[col.id] = colOrder;
    return acc;
  }, {});
  localStorage.setItem(key, JSON.stringify(order));
};

var restoreOrder = function restoreOrder(columns, key) {
  var order;

  try {
    order = JSON.parse(localStorage.getItem(key));
  } catch (_unused) {}

  if (!order) {
    return;
  }

  columns.forEach(function (column) {
    var colsData = order[column.id];

    if (colsData) {
      (column.items || []).forEach(function (item) {
        var itemOrder = colsData[item.id];

        if (itemOrder !== undefined) {
          item.order = itemOrder;
        } else {
          item.order = Number.MAX_SAFE_INTEGER;
        }
      });
      (column.items || []).sort(function (a, b) {
        return a.order - b.order;
      });
    }
  });
};

var Kanban = /*#__PURE__*/function (_Component) {
  _inherits(Kanban, _Component);

  var _super = _createSuper(Kanban);

  function Kanban(props) {
    var _this;

    _classCallCheck(this, Kanban);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setColumns", function (columns) {
      _this.setState({
        columns: columns
      });
    });

    _this.state = {
      columns: _this.props.data || []
    };

    var userStyles = _objectSpread({
      container: {},
      columnContainer: {},
      columnHeader: {},
      column: {},
      columnDragOver: {},
      item: {},
      itemDragging: {}
    }, _this.props.styles || {});

    _this.styles = {
      container: _objectSpread({
        display: "flex",
        justifyContent: "center",
        height: "100%"
      }, userStyles.container),
      columnContainer: _objectSpread({
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }, userStyles.columnContainer),
      columnHeader: _objectSpread({}, userStyles.columnHeader),
      column: _objectSpread({
        background: 'lightgrey',
        padding: 4,
        width: 250,
        minHeight: 500
      }, userStyles.column),
      columnDragOver: _objectSpread({
        background: 'lightblue',
        padding: 4,
        width: 250,
        minHeight: 500
      }, userStyles.columnDragOver),
      item: _objectSpread({
        userSelect: "none",
        padding: 16,
        margin: "0 0 8px 0",
        minHeight: "50px",
        backgroundColor: "#456C86",
        color: "white"
      }, userStyles.item),
      itemDragging: _objectSpread({
        userSelect: "none",
        padding: 16,
        margin: "0 0 8px 0",
        minHeight: "50px",
        backgroundColor: "#263B4A",
        color: "white"
      }, userStyles.itemDragging)
    };
    return _this;
  }

  _createClass(Kanban, [{
    key: "itemClick",
    value: function itemClick(item) {
      if (this.props.itemClick) {
        this.props.itemClick(item);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.data !== nextProps.data) {
        var columns = nextProps.data.slice();
        restoreOrder(columns, nextProps.orderSaveKey);
        this.setState({
          columns: nextProps.data
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var setColumns = this.setColumns;
      var columns = this.state.columns;
      var t = this.props.t;
      return /*#__PURE__*/_react.default.createElement("div", {
        style: this.styles.container
      }, /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.DragDropContext, {
        onDragEnd: function onDragEnd(result) {
          return _onDragEnd(result, columns, setColumns, _this2.props);
        }
      }, columns.map(function (column) {
        return /*#__PURE__*/_react.default.createElement("div", {
          style: _this2.styles.columnContainer,
          key: column.id
        }, /*#__PURE__*/_react.default.createElement("h2", {
          style: _this2.styles.columnHeader
        }, t(column.title)), /*#__PURE__*/_react.default.createElement("div", {
          style: {
            margin: 8
          }
        }, /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Droppable, {
          droppableId: column.id,
          key: column.id
        }, function (provided, snapshot) {
          return /*#__PURE__*/_react.default.createElement("div", _extends({}, provided.droppableProps, {
            ref: provided.innerRef,
            style: snapshot.isDraggingOver ? _this2.styles.columnDragOver : _this2.styles.column
          }), (column.items || []).map(function (item, index) {
            return /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Draggable, {
              key: item.id,
              draggableId: item.id,
              index: index
            }, function (provided, snapshot) {
              return /*#__PURE__*/_react.default.createElement("div", _extends({
                ref: provided.innerRef
              }, provided.draggableProps, provided.dragHandleProps, {
                style: _objectSpread(_objectSpread(_objectSpread({}, snapshot.isDragging ? _this2.styles.itemDragging : _this2.styles.item), provided.draggableProps.style), item.style || {}),
                onClick: function onClick() {
                  return _this2.itemClick(item);
                }
              }), item.title);
            });
          }), provided.placeholder);
        })));
      })));
    }
  }]);

  return Kanban;
}(_react.Component);

exports.default = Kanban;