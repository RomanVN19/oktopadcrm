"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EXTRA_FIELD = 'extraField';

var getExtraElement = function getExtraElement(field, index) {
  var element = {
    id: "".concat(EXTRA_FIELD).concat(index),
    title: field.name,
    type: _client.Elements.INPUT
  };
  return element;
};

var _default = function _default(Form) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Form) {
    _inherits(FormWithExtraFields, _Form);

    var _super = _createSuper(FormWithExtraFields);

    function FormWithExtraFields(args) {
      var _this;

      _classCallCheck(this, FormWithExtraFields);

      _this = _super.call(this, args);

      if (_this.app.fieldsLists && _this.app.fieldsLists[_this.constructor.entity]) {
        var existingCard = _this.elements.get('extraFields');

        var extraElementsCard = existingCard || {
          id: 'extraFields',
          type: _client.Elements.CARD
        };
        extraElementsCard.elements = _this.app.fieldsLists[_this.constructor.entity].map(getExtraElement);

        if (!existingCard) {
          _this.elements.push(extraElementsCard);
        }
      }

      return _this;
    }

    _createClass(FormWithExtraFields, [{
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this2 = this;

          var result, _yield$this$app$Entit, response, _response, extraFieldsvalues, fields;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _get(_getPrototypeOf(FormWithExtraFields.prototype), "load", this).call(this);

                case 2:
                  result = _context.sent;

                  if (!(this.app.fieldsLists && this.app.fieldsLists[this.constructor.entity] && this.uuid)) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 6;
                  return this.app.EntityFieldsValuesList.query({
                    where: {
                      entityUuid: this.uuid
                    },
                    limit: 1
                  });

                case 6:
                  _yield$this$app$Entit = _context.sent;
                  response = _yield$this$app$Entit.response;

                  if (response && response.length) {
                    _response = _slicedToArray(response, 1), extraFieldsvalues = _response[0].values;
                    fields = this.app.fieldsLists[this.constructor.entity];
                    extraFieldsvalues.forEach(function (field) {
                      var index = fields.findIndex(function (f) {
                        return f.name === field.name;
                      });

                      if (index > -1) {
                        _this2.content["".concat(EXTRA_FIELD).concat(index)].value = field.value;
                      }
                    });
                  }

                case 9:
                  return _context.abrupt("return", result);

                case 10:
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
      key: "save",
      value: function () {
        var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var formValues, fields, values;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _get(_getPrototypeOf(FormWithExtraFields.prototype), "save", this).call(this);

                case 2:
                  formValues = this.getValues();
                  fields = this.app.fieldsLists[this.constructor.entity];

                  if (fields) {
                    values = fields.map(function (field, index) {
                      return {
                        name: field.name,
                        value: formValues["extraField".concat(index)]
                      };
                    });
                    this.app.EntityFieldsValuesList.save({
                      uuid: this.uuid,
                      values: values
                    });
                  }

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function save() {
          return _save.apply(this, arguments);
        }

        return save;
      }()
    }]);

    return FormWithExtraFields;
  }(Form), _defineProperty(_class, "extraFieldsApplied", true), _temp;
};

exports.default = _default;