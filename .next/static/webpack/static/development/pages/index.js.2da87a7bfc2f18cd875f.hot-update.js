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

/***/ }),

/***/ "./src/containers/invite/actions.ts":
/*!******************************************!*\
  !*** ./src/containers/invite/actions.ts ***!
  \******************************************/
/*! exports provided: inviteStartFetching, inviteFillFetching, inviteErrorFetching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteStartFetching", function() { return inviteStartFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteFillFetching", function() { return inviteFillFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteErrorFetching", function() { return inviteErrorFetching; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/containers/invite/types.ts");

function inviteStartFetching() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_START_FETCHING"]
  };
}
function inviteFillFetching(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_FILL"],
    payload: data
  };
}
function inviteErrorFetching(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_ERROR_FETCHING"],
    payload: data
  };
}

/***/ }),

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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/containers/invite/types.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/containers/invite/actions.ts");




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
      dispatchAction({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["INVITE_FILL"],
        payload: list
      });
    }, 1000);
  };

  var load = function load() {
    dispatchAction(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["inviteStartFetching"])());
    setTimeout(function () {
      var payload = [{
        text: 'hi honey',
        id: 1
      }, {
        text: 'oh honey',
        id: 2
      }];
      dispatchAction(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["inviteFillFetching"])(payload));
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
//# sourceMappingURL=index.js.2da87a7bfc2f18cd875f.hot-update.js.map