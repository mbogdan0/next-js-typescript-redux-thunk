webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/containers/invite/useInvite.ts":
/*!********************************************!*\
  !*** ./src/containers/invite/useInvite.ts ***!
  \********************************************/
/*! exports provided: useInvite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInvite", function() { return useInvite; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/containers/invite/actions.ts");



var useInvite = function useInvite() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.invites;
  }),
      loading = _useSelector.loading,
      data = _useSelector.data,
      error = _useSelector.error;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var dispatchAction = function dispatchAction(action) {
    return dispatch(action);
  };

  var add = function add(payload) {
    var list = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), [payload]);
    setTimeout(function () {
      dispatchAction(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["inviteFillFetching"])(list));
    }, 1000);
  };

  var load = function load() {
    dispatchAction(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["inviteStartFetching"])());
    setTimeout(function () {
      var payload = [{
        text: 'hi honey',
        id: 1
      }, {
        text: 'oh honey',
        id: 2
      }];
      dispatchAction(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["inviteFillFetching"])(payload));
    }, 1000);
  };

  return {
    loading: loading,
    data: data,
    error: error,
    add: add,
    load: load
  };
};

/***/ })

})
//# sourceMappingURL=index.js.8a978526d73473bf786a.hot-update.js.map