webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension/developmentOnly */ "./node_modules/redux-devtools-extension/developmentOnly.js");
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-reducer */ "./src/redux/root-reducer.ts");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleware */ "./src/redux/middleware.ts");
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root-saga */ "./src/redux/root-saga.ts");







var initializeStore = function initializeStore(preloadedState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_4__["rootReducer"], preloadedState, Object(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_middleware__WEBPACK_IMPORTED_MODULE_5__["middleware"]))));
  var rootSagas = _middleware__WEBPACK_IMPORTED_MODULE_5__["sagaMiddleware"].run(_root_saga__WEBPACK_IMPORTED_MODULE_6__["rootSaga"]); // eslint-disable-next-line

  store.close = function () {
    return store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_3__["END"]);
  };

  return {
    store: store,
    rootSagas: rootSagas
  };
};

/***/ })

})
//# sourceMappingURL=index.js.2617af18b1fda20ae954.hot-update.js.map