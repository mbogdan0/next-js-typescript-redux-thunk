webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/containers/invite/Invite.tsx":
/*!******************************************!*\
  !*** ./src/containers/invite/Invite.tsx ***!
  \******************************************/
/*! exports provided: Invite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invite", function() { return Invite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useInvite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useInvite */ "./src/containers/invite/useInvite.ts");
var _this = undefined,
    _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/containers/invite/Invite.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Invite = function Invite() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  var _useInvite = Object(_useInvite__WEBPACK_IMPORTED_MODULE_1__["useInvite"])(),
      add = _useInvite.add,
      loading = _useInvite.loading,
      data = _useInvite.data,
      error = _useInvite.error,
      load = _useInvite.load;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    load();
  }, []);

  var onSave = function onSave() {
    add({
      text: text,
      id: Math.floor(Math.random() * 1000)
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, "invite", __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "LOADING: ", JSON.stringify(loading)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "DATA: ", JSON.stringify(data)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "ERROR: ", JSON.stringify(error)), __jsx("textarea", {
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "button",
    onClick: onSave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Create")));
};

Invite.getInitialProps = function (_ref) {
  var reduxStore = _ref.reduxStore;
  var dispatch = reduxStore.dispatch;
  console.log('here', dispatch);
};

/***/ })

})
//# sourceMappingURL=index.js.dc76af3ef4fdb0b66096.hot-update.js.map