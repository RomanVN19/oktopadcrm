"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("katejs/lib/client");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductCard = /*#__PURE__*/function () {
  function ProductCard(args) {
    var _this = this;

    _classCallCheck(this, ProductCard);

    _defineProperty(this, "rowClick", function (row) {
      _this.app.open("".concat(row.entity, "Item"), {
        id: row.docUuid
      });
    });

    Object.assign(this, args);
    this.elements = [{
      id: 'pcTitle',
      title: 'Product card',
      type: _client.Elements.LABEL,
      tag: 'h3'
    }, {
      id: 'pcRest',
      type: _client.Elements.LABEL,
      title: 'Rest: ',
      tag: 'h5'
    }, {
      id: 'pcTable',
      type: _client.Elements.TABLE,
      columns: [{
        title: 'Document',
        dataPath: 'document'
      }, {
        title: 'Increase',
        dataPath: 'increase'
      }, {
        title: 'Decrease',
        dataPath: 'decrease'
      }],
      rowClick: this.rowClick
    }];

    if (this.productUuid) {
      this.query();
    }
  }

  _createClass(ProductCard, [{
    key: "query",
    value: function () {
      var _query = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$this$app$Produ, data, rest;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.app.ProductRecord.turnover({
                  where: {
                    productUuid: this.productUuid
                  }
                });

              case 2:
                _yield$this$app$Produ = _context.sent;
                data = _yield$this$app$Produ.response;
                rest = data.reduce(function (acc, val) {
                  return acc + val.amount;
                }, 0);
                this.content.pcRest.title = this.app.t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Rest: ", ""])), rest);
                this.content.pcTable.value = data.map(function (item) {
                  return {
                    document: item.docTitle,
                    increase: item.amount > 0 ? item.amount : '',
                    decrease: item.amount < 0 ? 0 - item.amount : '',
                    docUuid: item.docUuid,
                    entity: item.entity
                  };
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function query() {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }]);

  return ProductCard;
}();

exports.default = ProductCard;