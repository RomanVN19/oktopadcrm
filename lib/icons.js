"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrdersUnassigned = function OrdersUnassigned() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M4,2H14V4H4V14H2V4C2,2.89 2.89,2 4,2M8,6H18V8H8V18H6V8C6,6.89 6.89,6 8,6M12,10H20C21.11,10 22,10.89 22,12V20C22,21.11 21.11,22 20,22H12C10.89,22 10,21.11 10,20V12C10,10.89 10.89,10 12,10M14,12V20L20,16L14,12Z"
  }));
};

var OrderList = function OrderList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M4,2A2,2 0 0,0 2,4V14H4V4H14V2H4M8,6A2,2 0 0,0 6,8V18H8V8H18V6H8M20,12V20H12V12H20M20,10H12A2,2 0 0,0 10,12V20A2,2 0 0,0 12,22H20A2,2 0 0,0 22,20V12A2,2 0 0,0 20,10Z"
  }));
};

var OrdersToDeliverReport = function OrdersToDeliverReport() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M16,6L19,10H21C22.11,10 23,10.89 23,12V15H21A3,3 0 0,1 18,18A3,3 0 0,1 15,15H9A3,3 0 0,1 6,18A3,3 0 0,1 3,15H1V12C1,10.89 1.89,10 3,10L6,6H16M10.5,7.5H6.75L4.86,10H10.5V7.5M12,7.5V10H17.14L15.25,7.5H12M6,13.5A1.5,1.5 0 0,0 4.5,15A1.5,1.5 0 0,0 6,16.5A1.5,1.5 0 0,0 7.5,15A1.5,1.5 0 0,0 6,13.5M18,13.5A1.5,1.5 0 0,0 16.5,15A1.5,1.5 0 0,0 18,16.5A1.5,1.5 0 0,0 19.5,15A1.5,1.5 0 0,0 18,13.5Z"
  }));
};

var CashFlow = function CashFlow() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M5,15H8.11L9.62,12.15L10.38,17.92L14.07,13.21L15.89,15H19V19H5V15M19,13.46H16.53L13.93,10.86L11.44,14.05L10.5,7.08L7.17,13.46H5V5H7V6H17V5H19V6L19,13.46Z"
  }));
};

var ProductList = function ProductList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M14,8H10V6H14V8M20,4V20C20,21.11 19.11,22 18,22H6C4.89,22 4,21.11 4,20V4A2,2 0 0,1 6,2H18C19.11,2 20,2.9 20,4M18,13H6V20H18V13M18,4H6V11H18V4M14,15H10V17H14V15Z"
  }));
};

var ClientList = function ClientList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M7.5,2A2,2 0 0,1 9.5,4A2,2 0 0,1 7.5,6A2,2 0 0,1 5.5,4A2,2 0 0,1 7.5,2M6,7H9A2,2 0 0,1 11,9V14.5H9.5V22H5.5V14.5H4V9A2,2 0 0,1 6,7M16.5,2A2,2 0 0,1 18.5,4A2,2 0 0,1 16.5,6A2,2 0 0,1 14.5,4A2,2 0 0,1 16.5,2M15,22V16H12L14.59,8.41C14.84,7.59 15.6,7 16.5,7C17.4,7 18.16,7.59 18.41,8.41L21,16H18V22H15Z"
  }));
};

var ProductSalesReport = function ProductSalesReport() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
  }));
};

var NoteList = function NoteList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "Frames-24px"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Outline"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M21,4h-7c-0.265,0-0.52,0.106-0.707,0.293L12,5.586l-1.293-1.293C10.52,4.106,10.265,4,10,4H3 C2.448,4,2,4.448,2,5v13c0,0.552,0.448,1,1,1h6.586l1.707,1.707C11.488,20.902,11.744,21,12,21s0.512-0.098,0.707-0.293L14.414,19 H21c0.552,0,1-0.448,1-1V5C22,4.448,21.552,4,21,4z M10,17H4V6h5.586L11,7.414v10.172l-0.293-0.293C10.52,17.106,10.265,17,10,17z M20,17h-6c-0.265,0-0.52,0.106-0.707,0.293L13,17.586V7.414L14.414,6H20V17z"
  })));
};

var CashboxList = function CashboxList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "Frames-24px"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Solid"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M20,6V5h-2v1h-2V4c0-0.552-0.448-1-1-1H9C8.448,3,8,3.448,8,4v2H6V5H4v1C2.897,6,2,6.897,2,8v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V8C22,6.897,21.103,6,20,6z M10,5h4v1h-4V5z M20,20H4V8h16V20z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M13,9h-2v1.051c-1.14,0.232-2,1.242-2,2.449c0,1.378,1.122,2.5,2.5,2.5h1c0.276,0,0.5,0.224,0.5,0.5S12.776,16,12.5,16H9v2h2v1h2v-1.051c1.14-0.232,2-1.242,2-2.449c0-1.378-1.122-2.5-2.5-2.5h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5H15v-2h-2V9z"
  }))));
};

var PaymentList = function PaymentList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "Frames-24px"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  })), /*#__PURE__*/_react.default.createElement("g", {
    id: "Solid"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M6.586,11h2.828l-2-2L14,2.415L17.586,6l-5,5h2.828l4.293-4.292c0.391-0.391,0.391-1.024,0-1.414l-5-5c-0.391-0.391-1.023-0.391-1.414,0l-8,8c-0.391,0.39-0.391,1.023,0,1.414L6.586,11z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M20,12H4c-0.552,0-1,0.448-1,1v10c0,0.552,0.448,1,1,1h16c0.552,0,1-0.448,1-1V13C21,12.448,20.552,12,20,12z M19,22H5v-8h14V22z"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    fill: "#ffffff",
    points: "11,21 13,21 13,19 15,19 15,17 13,17 13,15 11,15 11,17 9,17 9,19 11,19"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    fill: "#ffffff",
    cx: "12.5",
    cy: "7.5",
    r: "1.5"
  }))));
};

var ExpenseList = function ExpenseList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z"
  }));
};

var OrderDynamics = function OrderDynamics() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M3,13H7V23H3V13M10,14H14V23H10V14M17,9H21V23H17V9M17,1H21V5H20V3.06L11.97,11.09L8,7.12L3.4,11.72L2.34,10.66L8,5L11.97,8.97L18.94,2H17V1Z"
  }));
};

var Dashboard = function Dashboard() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H14V11H5V6M15,6H19V8H15V6M19,9V14H15V9H19M5,12H9V14H5V12M10,12H14V14H10V12Z"
  }));
};

var ReceiptList = function ReceiptList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M12,17L7,12H10V8H14V12H17L12,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"
  }));
};

var PriceListList = function PriceListList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z"
  }));
};

var PriceTypeList = function PriceTypeList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M5,9.5L7.5,14H2.5L5,9.5M3,4H7V8H3V4M5,20A2,2 0 0,0 7,18A2,2 0 0,0 5,16A2,2 0 0,0 3,18A2,2 0 0,0 5,20M9,5V7H21V5H9M9,19H21V17H9V19M9,13H21V11H9V13Z"
  }));
};

var ProductsFlowReport = function ProductsFlowReport() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M2,3H19A2,2 0 0,1 21,5V9H19V5H2V19H19V15H21V19A2,2 0 0,1 19,21H2A2,2 0 0,1 0,19V5A2,2 0 0,1 2,3M17,15V13H24V11H17V9L13,12L17,15M4,13H11V11H4V13M4,9H11V7H4V9M4,17H8V15H4V17Z"
  }));
};

var DebtsFlowReport = function DebtsFlowReport() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M16,10H22L12,0L2,10H8V14H2L12,24L22,14H16V10M14,16H17L12,21L7,16H10V8H7L12,3L17,8H14V16Z"
  }));
};

var TaskList = function TaskList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"
  }));
};

var DealList = function DealList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z"
  }));
};

var InvoiceList = function InvoiceList() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#ffffff",
    d: "M16,15H9V13H16V15M19,11H9V9H19V11M19,7H9V5H19V7M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17C23,18.11 22.11,19 21,19H7A2,2 0 0,1 5,17V3C5,1.89 5.89,1 7,1H21M7,3V17H21V3H7Z"
  }));
};

var _default = {
  OrderList: OrderList,
  OrdersMy: OrderList,
  OrdersUnassigned: OrdersUnassigned,
  CashFlow: CashFlow,
  ProductList: ProductList,
  ClientList: ClientList,
  OrdersToDeliverReport: OrdersToDeliverReport,
  ProductSalesReport: ProductSalesReport,
  NoteList: NoteList,
  CashboxList: CashboxList,
  ExpenseList: ExpenseList,
  PaymentList: PaymentList,
  OrderDynamics: OrderDynamics,
  Dashboard: Dashboard,
  ReceiptList: ReceiptList,
  PriceListList: PriceListList,
  PriceTypeList: PriceTypeList,
  ProductsFlowReport: ProductsFlowReport,
  DebtsFlowReport: DebtsFlowReport,
  TaskList: TaskList,
  DealList: DealList,
  InvoiceList: InvoiceList
};
exports.default = _default;