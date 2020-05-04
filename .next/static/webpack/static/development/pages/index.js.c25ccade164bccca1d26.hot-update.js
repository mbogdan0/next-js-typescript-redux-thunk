webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_invite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/invite */ "./src/containers/invite/index.ts");
/* harmony import */ var _redux_with_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/with-redux */ "./src/redux/with-redux.tsx");
/* harmony import */ var _containers_invite_redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/invite/redux/actions */ "./src/containers/invite/redux/actions.ts");


var _this = undefined,
    _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var IndexPage = function IndexPage() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "OK"), __jsx(_containers_invite__WEBPACK_IMPORTED_MODULE_2__["Invite"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};

IndexPage.getInitialProps = function _callee(_ref) {
  var reduxStore, runSaga, dispatch;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          reduxStore = _ref.reduxStore, runSaga = _ref.runSaga;
          dispatch = reduxStore.dispatch;
          dispatch(Object(_containers_invite_redux_actions__WEBPACK_IMPORTED_MODULE_4__["inviteFetchAsync"])());
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(runSaga.toPromise());

        case 5:
          return _context.abrupt("return", {});

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_with_redux__WEBPACK_IMPORTED_MODULE_3__["withRedux"])(IndexPage));

/***/ })

})
//# sourceMappingURL=index.js.c25ccade164bccca1d26.hot-update.js.map