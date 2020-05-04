webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/containers/invite/saga/index.ts":
/*!*********************************************!*\
  !*** ./src/containers/invite/saga/index.ts ***!
  \*********************************************/
/*! exports provided: watchInvites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchInvites", function() { return watchInvites; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core */ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _workers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workers */ "./src/containers/invite/saga/workers.ts");
/* harmony import */ var _redux_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/types */ "./src/containers/invite/redux/types.ts");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(test),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFetchInvite),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchInvites);






function test() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function test$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(_redux_saga_core__WEBPACK_IMPORTED_MODULE_1__["END"]);
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_redux_saga_core__WEBPACK_IMPORTED_MODULE_1__["END"]);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function watchFetchInvite() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFetchInvite$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_redux_types__WEBPACK_IMPORTED_MODULE_4__["INVITE_FETCH_ASYNC"], _workers__WEBPACK_IMPORTED_MODULE_3__["fetchAllInvitesSaga"]);

        case 2:
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])('B', test);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function watchInvites() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchInvites$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(watchFetchInvite)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/***/ })

})
//# sourceMappingURL=index.js.ea7892af0f8f300f9a7e.hot-update.js.map