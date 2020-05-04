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
false,

/***/ "./src/containers/invite/hooks/useInvite.ts":
/*!**************************************************!*\
  !*** ./src/containers/invite/hooks/useInvite.ts ***!
  \**************************************************/
/*! exports provided: useInvite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInvite", function() { return useInvite; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ "./src/containers/invite/redux/actions.ts");



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
      dispatchAction(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteFillFetching"])(list));
    }, 1000);
  };

  var load = function load() {
    dispatchAction(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteStartFetching"])());
    setTimeout(function () {
      var payload = [{
        text: 'hi honey',
        id: 1
      }, {
        text: 'oh honey',
        id: 2
      }];
      dispatchAction(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteFillFetching"])(payload));
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

/***/ }),

/***/ "./src/containers/invite/index.ts":
/*!****************************************!*\
  !*** ./src/containers/invite/index.ts ***!
  \****************************************/
/*! exports provided: Invite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invite */ "./src/containers/invite/Invite.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Invite", function() { return _Invite__WEBPACK_IMPORTED_MODULE_0__["Invite"]; });



/***/ }),

/***/ "./src/containers/invite/reducer.ts":
false,

/***/ "./src/containers/invite/redux/actions.ts":
/*!************************************************!*\
  !*** ./src/containers/invite/redux/actions.ts ***!
  \************************************************/
/*! exports provided: inviteStartFetching, inviteFillFetching, inviteErrorFetching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteStartFetching", function() { return inviteStartFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteFillFetching", function() { return inviteFillFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteErrorFetching", function() { return inviteErrorFetching; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/containers/invite/redux/types.ts");

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

/***/ "./src/containers/invite/redux/reducer.ts":
/*!************************************************!*\
  !*** ./src/containers/invite/redux/reducer.ts ***!
  \************************************************/
/*! exports provided: invitesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invitesReducer", function() { return invitesReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/containers/invite/redux/types.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  data: [],
  loading: false,
  error: null
};
var invitesReducer = function invitesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["INVITE_START_FETCHING"]:
      return _objectSpread({}, state, {
        loading: true,
        error: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["INVITE_FILL"]:
      return _objectSpread({}, state, {
        data: action.payload,
        loading: false,
        error: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["INVITE_ERROR_FETCHING"]:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["INVITE_FETCH_ASYNC"]:
      return state;

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      var x = action;
  }

  return state;
};

/***/ }),

/***/ "./src/containers/invite/redux/types.ts":
/*!**********************************************!*\
  !*** ./src/containers/invite/redux/types.ts ***!
  \**********************************************/
/*! exports provided: INVITE_START_FETCHING, INVITE_FILL, INVITE_ERROR_FETCHING, INVITE_FETCH_ASYNC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_START_FETCHING", function() { return INVITE_START_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_FILL", function() { return INVITE_FILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_ERROR_FETCHING", function() { return INVITE_ERROR_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_FETCH_ASYNC", function() { return INVITE_FETCH_ASYNC; });
var INVITE_START_FETCHING = 'INVITE_START_FETCHING';
var INVITE_FILL = 'INVITE_FILL';
var INVITE_ERROR_FETCHING = 'INVITE_ERROR_FETCHING';
var INVITE_FETCH_ASYNC = 'INVITE_FETCH_ASYNC';

/***/ }),

/***/ "./src/containers/invite/types.ts":
false,

/***/ "./src/containers/invite/useInvite.ts":
false,

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
/* harmony import */ var _containers_invite_redux_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/invite/redux/types */ "./src/containers/invite/redux/types.ts");
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
  // Tick the time once, so we'll have a
  // valid time before first render
  var dispatch = reduxStore.dispatch;
  dispatch({
    type: _containers_invite_redux_types__WEBPACK_IMPORTED_MODULE_3__["INVITE_FILL"],
    payload: [{
      text: 'hi honey',
      id: 1
    }, {
      text: 'oh honey',
      id: 2
    }]
  });
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_with_redux__WEBPACK_IMPORTED_MODULE_2__["withRedux"])(IndexPage));

/***/ }),

/***/ "./src/redux/root-reducer.ts":
/*!***********************************!*\
  !*** ./src/redux/root-reducer.ts ***!
  \***********************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _containers_invite_redux_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/invite/redux/reducer */ "./src/containers/invite/redux/reducer.ts");


var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  invites: _containers_invite_redux_reducer__WEBPACK_IMPORTED_MODULE_1__["invitesReducer"]
});

/***/ })

})
//# sourceMappingURL=index.js.f2dcde2328ec796bcd0c.hot-update.js.map