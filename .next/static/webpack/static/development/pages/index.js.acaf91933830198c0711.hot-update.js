webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./src/redux/middleware.ts":
/*!*********************************!*\
  !*** ./src/redux/middleware.ts ***!
  \*********************************/
/*! exports provided: middleware, sagaMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middleware", function() { return middleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaMiddleware", function() { return sagaMiddleware; });
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");


var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
var middleware = [sagaMiddleware, redux_thunk__WEBPACK_IMPORTED_MODULE_0__["default"]];


/***/ })

})
//# sourceMappingURL=index.js.acaf91933830198c0711.hot-update.js.map