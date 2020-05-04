webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_invite_Invite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/invite/Invite */ "./src/containers/invite/Invite.tsx");
/* harmony import */ var _redux_with_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/with-redux */ "./src/redux/with-redux.tsx");
var _this = undefined,
    _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var IndexPage = function IndexPage() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "OK"), __jsx(_containers_invite_Invite__WEBPACK_IMPORTED_MODULE_1__["Invite"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
};

IndexPage.getInitialProps = function (_ref) {
  var reduxStore = _ref.reduxStore;
  // Tick the time once, so we'll have a
  // valid time before first render
  var dispatch = reduxStore.dispatch;
  dispatch({
    type: 'TICK',
    light: true,
    lastUpdate: Date.now()
  });
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_with_redux__WEBPACK_IMPORTED_MODULE_2__["withRedux"])(IndexPage));

/***/ })

})
//# sourceMappingURL=index.js.ce1762fb3c4c1f113d1f.hot-update.js.map