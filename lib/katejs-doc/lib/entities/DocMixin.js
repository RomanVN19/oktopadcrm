"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _Entity2 = require("katejs/lib/Entity");

var _structure = require("../structure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["", " \u2116", " from ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DocMixin = function DocMixin(Entity) {
  return (
    /*#__PURE__*/
    function (_Entity) {
      _inherits(DocEntity, _Entity);

      function DocEntity(params) {
        var _this$structure$field;

        var _this;

        _classCallCheck(this, DocEntity);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(DocEntity).call(this, params));
        _this.structure.fields = _this.structure.fields || [];

        (_this$structure$field = _this.structure.fields).unshift.apply(_this$structure$field, _toConsumableArray(_structure.structures.Doc.fields));

        return _this;
      }

      _createClass(DocEntity, [{
        key: "put",
        value: function () {
          var _put = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(params) {
            var date, _ref, max, maxNumber, number;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // TODO - own transaction;
                    date = params.data.body.date;

                    if (params.data.body.number) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 4;
                    return this.query({
                      ctx: params.ctx,
                      data: {
                        noOptions: true,
                        attributes: [[{
                          $func: {
                            fn: 'MAX',
                            col: 'number'
                          }
                        }, 'maxnumber']],
                        limit: -1
                      },
                      transaction: params.transaction // to find max in bulk create

                    });

                  case 4:
                    _ref = _context.sent;
                    max = _ref.response;
                    maxNumber = max[0] && +max[0].maxnumber || 0; // eslint-disable-next-line no-param-reassign

                    params.data.body.number = maxNumber + 1;

                  case 8:
                    number = params.data.body.number; // eslint-disable-next-line no-param-reassign

                    params.data.body.title = this.app.t(_templateObject(), this.app.t(this.constructor.docName), number, (0, _moment.default)(date).format('DD.MM.YYYY HH:mm'));
                    return _context.abrupt("return", _get(_getPrototypeOf(DocEntity.prototype), "put", this).call(this, params));

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function put(_x) {
            return _put.apply(this, arguments);
          }

          return put;
        }()
      }, {
        key: "afterPut",
        value: function () {
          var _afterPut = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(_ref2) {
            var _this2 = this;

            var doc, transaction, ctx, recordsRegs, clearPromises, allRecords, promises;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    doc = _ref2.entity, transaction = _ref2.transaction, ctx = _ref2.ctx;

                    if (!_get(_getPrototypeOf(DocEntity.prototype), "afterPut", this)) {
                      _context2.next = 4;
                      break;
                    }

                    _context2.next = 4;
                    return _get(_getPrototypeOf(DocEntity.prototype), "afterPut", this).call(this, doc, transaction);

                  case 4:
                    if (!(this.makeRecords && this.constructor.records)) {
                      _context2.next = 17;
                      break;
                    }

                    recordsRegs = this.constructor.records;
                    clearPromises = [];
                    recordsRegs.forEach(function (recordsReg) {
                      return clearPromises.push(_this2.app[recordsReg][_Entity2.model].destroy({
                        where: {
                          docUuid: doc.uuid
                        },
                        transaction: transaction
                      }));
                    });
                    _context2.next = 10;
                    return Promise.all(clearPromises);

                  case 10:
                    _context2.next = 12;
                    return this.makeRecords(doc, transaction, ctx);

                  case 12:
                    allRecords = _context2.sent;
                    promises = [];
                    Object.keys(allRecords).forEach(function (recordEntity) {
                      var records = allRecords[recordEntity].map(function (record) {
                        return _objectSpread({
                          date: doc.date,
                          entity: _this2.constructor.docName,
                          docUuid: doc.uuid,
                          docTitle: doc.title
                        }, record);
                      }); // need to use put to process hooks like serviceAccount
                      // promises.push(this.app[recordEntity][model].bulkCreate(records, { transaction }));

                      records.forEach(function (record) {
                        return promises.push(_this2.app[recordEntity].put({
                          data: {
                            body: record
                          },
                          transaction: transaction,
                          ctx: ctx
                        }));
                      });
                    });
                    _context2.next = 17;
                    return Promise.all(promises);

                  case 17:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function afterPut(_x2) {
            return _afterPut.apply(this, arguments);
          }

          return afterPut;
        }()
      }, {
        key: "delete",
        value: function () {
          var _delete2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3(_ref3) {
            var _this3 = this;

            var data, t, recordsRegs, clearPromises;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    data = _ref3.data, t = _ref3.transaction;

                    if (!(this.makeRecords && this.constructor.records)) {
                      _context3.next = 7;
                      break;
                    }

                    recordsRegs = this.constructor.records;
                    clearPromises = [];
                    recordsRegs.forEach(function (recordsReg) {
                      return clearPromises.push(_this3.app[recordsReg][_Entity2.model].destroy({
                        where: {
                          docUuid: data.uuid
                        },
                        transaction: t
                      }));
                    });
                    _context3.next = 7;
                    return Promise.all(clearPromises);

                  case 7:
                    return _context3.abrupt("return", _get(_getPrototypeOf(DocEntity.prototype), "delete", this).call(this, {
                      data: data,
                      transaction: t
                    }));

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function _delete(_x3) {
            return _delete2.apply(this, arguments);
          }

          return _delete;
        }()
      }]);

      return DocEntity;
    }(Entity)
  );
};

var _default = DocMixin;
exports.default = _default;