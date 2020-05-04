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
/* harmony import */ var _hooks_useInvite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useInvite */ "./src/containers/invite/hooks/useInvite.ts");
var _this = undefined,
    _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/containers/invite/Invite.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Invite = function Invite() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  var _useInvite = Object(_hooks_useInvite__WEBPACK_IMPORTED_MODULE_1__["useInvite"])(),
      add = _useInvite.add,
      loading = _useInvite.loading,
      data = _useInvite.data,
      error = _useInvite.error,
      load = _useInvite.load;

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
      lineNumber: 16,
      columnNumber: 5
    }
  }, "invite", __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "LOADING: ", JSON.stringify(loading)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "DATA: ", JSON.stringify(data)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "ERROR: ", JSON.stringify(error)), __jsx("textarea", {
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "button",
    onClick: onSave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Create")));
};

/***/ }),

/***/ "./src/containers/invite/redux/actions.ts":
/*!************************************************!*\
  !*** ./src/containers/invite/redux/actions.ts ***!
  \************************************************/
/*! exports provided: inviteFetchAsync, inviteStartFetching, inviteFillFetching, inviteErrorFetching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteFetchAsync", function() { return inviteFetchAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteStartFetching", function() { return inviteStartFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteFillFetching", function() { return inviteFillFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteErrorFetching", function() { return inviteErrorFetching; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/containers/invite/redux/types.ts");

function inviteFetchAsync() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_FETCH_ASYNC"]
  };
}
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
/* harmony import */ var _containers_invite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/invite */ "./src/containers/invite/index.ts");
/* harmony import */ var _redux_with_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/with-redux */ "./src/redux/with-redux.tsx");
/* harmony import */ var _containers_invite_redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/invite/redux/actions */ "./src/containers/invite/redux/actions.ts");
var _this = undefined,
    _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





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
  }, "OK"), __jsx(_containers_invite__WEBPACK_IMPORTED_MODULE_1__["Invite"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};

IndexPage.getInitialProps = function (_ref) {
  var reduxStore = _ref.reduxStore;
  var dispatch = reduxStore.dispatch;
  dispatch(Object(_containers_invite_redux_actions__WEBPACK_IMPORTED_MODULE_3__["inviteFetchAsync"])());
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_with_redux__WEBPACK_IMPORTED_MODULE_2__["withRedux"])(IndexPage));

/***/ })

})
//# sourceMappingURL=index.js.ca392c9ab9f30733a4d7.hot-update.js.map