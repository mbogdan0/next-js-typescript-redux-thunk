webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/containers/invite/saga/workers.ts":
/*!***********************************************!*\
  !*** ./src/containers/invite/saga/workers.ts ***!
  \***********************************************/
/*! exports provided: fetchAllInvitesSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllInvitesSaga", function() { return fetchAllInvitesSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ "./src/containers/invite/redux/actions.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/containers/invite/services/index.ts");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchAllInvitesSaga);




function fetchAllInvitesSaga() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchAllInvitesSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('here');
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteStartFetching"])());

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_3__["fetchAllInvites"]);

        case 6:
          result = _context.sent;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteFillFetching"])(result));

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteErrorFetching"])(_context.t0.toString()));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 11]]);
}

/***/ })

})
//# sourceMappingURL=index.js.3d37a0a2016d5095a2fe.hot-update.js.map