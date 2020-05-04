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
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _redux_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/types */ "./src/containers/invite/redux/types.ts");
/* harmony import */ var _workers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workers */ "./src/containers/invite/saga/workers.ts");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFetchInvite),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchInvites);





function watchFetchInvite() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFetchInvite$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_redux_types__WEBPACK_IMPORTED_MODULE_2__["INVITE_FETCH_ASYNC"], _workers__WEBPACK_IMPORTED_MODULE_3__["fetchAllInvitesSaga"]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function watchInvites() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchInvites$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(watchFetchInvite)]);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/***/ }),

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
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteStartFetching"])());

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_services__WEBPACK_IMPORTED_MODULE_3__["fetchAllInvites"]);

        case 5:
          result = _context.sent;
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteFillFetching"])(result));

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteErrorFetching"])(_context.t0.toString()));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

/***/ }),

/***/ "./src/containers/invite/services/index.ts":
/*!*************************************************!*\
  !*** ./src/containers/invite/services/index.ts ***!
  \*************************************************/
/*! exports provided: fetchAllInvites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllInvites", function() { return fetchAllInvites; });
function fetchAllInvites() {
  return new Promise(function (resolve) {
    var payload = [{
      text: 'hi honey',
      id: 1
    }, {
      text: 'oh honey',
      id: 2
    }, {
      text: 'I am in your town',
      id: 3
    }];
    setTimeout(function () {
      resolve({
        payload: payload,
        success: true,
        error: null
      });
    }, 550);
  });
}

/***/ })

})
//# sourceMappingURL=index.js.fe344843584d3226642e.hot-update.js.map