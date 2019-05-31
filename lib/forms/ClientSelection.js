"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _ClientDebt = _interopRequireDefault(require("./ClientDebt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addCondition = function addCondition(where, field, value) {
  if (value) {
    // eslint-disable-next-line no-param-reassign
    where[field] = {
      $like: "%".concat(value, "%")
    };
  }
};

var ClientSelection =
/*#__PURE__*/
function () {
  function ClientSelection(_ref) {
    var _this = this;

    var form = _ref.form,
        replaceSelect = _ref.replaceSelect,
        changePhoneAddress = _ref.changePhoneAddress,
        openOnFocus = _ref.openOnFocus;

    _classCallCheck(this, ClientSelection);

    _defineProperty(this, "clientSelect", function (client) {
      if (client) {
        _this.content.address.value = client.address;
        _this.content.phone.value = client.phone;
      }
    });

    _defineProperty(this, "clientSelection", function () {
      _this.content.clientSelectionModal.open = true;
    });

    _defineProperty(this, "searchChange", function () {
      if (_this.timeout) clearTimeout(_this.timeout);
      _this.timeout = setTimeout(_this.search, 300);
    });

    _defineProperty(this, "search",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var where, _ref3, clients;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              where = {};
              addCondition(where, 'title', _this.content.findTitle.value);
              addCondition(where, 'phone', _this.content.findPhone.value);
              addCondition(where, 'address', _this.content.findAddress.value);
              _context.next = 6;
              return _this.app.Client.query({
                where: where,
                limit: 5
              });

            case 6:
              _ref3 = _context.sent;
              clients = _ref3.response;
              _this.content.clientSearch.value = clients;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(this, "selectClient", function (row) {
      _this.content.client.value = row;

      if (_this.content.client.onChange) {
        _this.content.client.onChange(row);
      }

      _this.content.clientSelectionModal.open = false;
    });

    _defineProperty(this, "create",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var body;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (_this.fieldValid('findTitle')) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              if (_this.fieldValid('findPhone')) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return");

            case 4:
              if (_this.fieldValid('findAddress')) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return");

            case 6:
              body = {
                title: _this.content.findTitle.value,
                phone: _this.content.findPhone.value,
                address: _this.content.findAddress.value
              };
              _context2.next = 9;
              return _this.app.Client.put({
                body: body
              });

            case 9:
              _this.search();

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    this.elements = form.elements;
    this.content = form.content;
    this.app = form.app;
    var clientInput = this.elements.get('client');
    clientInput.openOnFocus = openOnFocus;

    if (changePhoneAddress) {
      clientInput.onChange = this.clientSelect;
    }

    if (replaceSelect) {
      this.elements.set('client', {
        id: 'clientGroup',
        type: _client.Elements.GRID,
        elements: [_objectSpread({}, clientInput, {
          cols: 8
        }), {
          type: _client.Elements.BUTTON,
          title: 'Find, create',
          onClick: this.clientSelection,
          fullWidth: true,
          cols: 2
        }, {
          type: _client.Elements.GROUP,
          elements: new _ClientDebt.default({
            content: this.content,
            app: this.app
          }).elements,
          cols: 2
        }]
      });
    }

    this.elements.push({
      id: 'clientSelectionModal',
      type: _client.Elements.MODAL,
      open: false,
      title: 'Find, create client',
      maxWidth: 'md',
      elements: [{
        type: _client.Elements.GRID,
        elements: [{
          type: _client.Elements.INPUT,
          id: 'findTitle',
          title: 'Title',
          onChange: this.searchChange,
          cols: 3
        }, {
          type: _client.Elements.INPUT,
          id: 'findPhone',
          title: 'Phone',
          onChange: this.searchChange,
          cols: 3
        }, {
          type: _client.Elements.INPUT,
          id: 'findAddress',
          title: 'Address',
          onChange: this.searchChange,
          cols: 3
        }, {
          type: _client.Elements.BUTTON,
          title: 'Create',
          onClick: this.create,
          cols: 2
        }, {
          type: _client.Elements.LABEL,
          cols: 2
        }]
      }, {
        id: 'clientSearch',
        type: _client.Elements.TABLE,
        rowClick: this.selectClient,
        columns: [{
          title: 'Title',
          dataPath: 'title'
        }, {
          title: 'Phone',
          dataPath: 'phone'
        }, {
          title: 'Address',
          dataPath: 'address'
        }]
      }]
    });
  }

  _createClass(ClientSelection, [{
    key: "fieldValid",
    value: function fieldValid(field) {
      if (!this.content[field].value) {
        this.content[field].error = true;
        return false;
      }

      this.content[field].error = false;
      return true;
    }
  }]);

  return ClientSelection;
}();

exports.default = ClientSelection;