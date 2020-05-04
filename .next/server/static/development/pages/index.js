module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./src/containers/invite/Invite.tsx":
/*!******************************************!*\
  !*** ./src/containers/invite/Invite.tsx ***!
  \******************************************/
/*! exports provided: Invite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invite", function() { return Invite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useInvite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useInvite */ "./src/containers/invite/hooks/useInvite.ts");
var _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/containers/invite/Invite.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Invite = () => {
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    add,
    loading,
    data,
    error,
    load
  } = Object(_hooks_useInvite__WEBPACK_IMPORTED_MODULE_1__["useInvite"])();

  const onSave = () => {
    add({
      text,
      id: Math.floor(Math.random() * 1000)
    });
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, "invite", __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "LOADING: ", JSON.stringify(loading)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "DATA: ", JSON.stringify(data)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "ERROR: ", JSON.stringify(error)), __jsx("textarea", {
    onChange: e => setText(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "button",
    onClick: onSave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Create")));
};

/***/ }),

/***/ "./src/containers/invite/hooks/useInvite.ts":
/*!**************************************************!*\
  !*** ./src/containers/invite/hooks/useInvite.ts ***!
  \**************************************************/
/*! exports provided: useInvite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInvite", function() { return useInvite; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/actions */ "./src/containers/invite/redux/actions.ts");


const useInvite = () => {
  const {
    loading,
    data,
    error
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.invites);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();

  const dispatchAction = action => dispatch(action);

  const add = payload => {
    const list = [...data, payload];
    setTimeout(() => {
      dispatchAction(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_1__["inviteFillFetching"])(list));
    }, 1000);
  };

  const load = () => {
    dispatchAction(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_1__["inviteStartFetching"])());
    setTimeout(() => {
      const payload = [{
        text: 'hi honey',
        id: 1
      }, {
        text: 'oh honey',
        id: 2
      }];
      dispatchAction(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_1__["inviteFillFetching"])(payload));
    }, 1000);
  };

  return {
    loading,
    data,
    error,
    add,
    load
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

/***/ "./src/containers/invite/redux/reducer.ts":
/*!************************************************!*\
  !*** ./src/containers/invite/redux/reducer.ts ***!
  \************************************************/
/*! exports provided: invitesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invitesReducer", function() { return invitesReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/containers/invite/redux/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: [],
  loading: false,
  error: null
};
const invitesReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_START_FETCHING"]:
      return _objectSpread({}, state, {
        loading: true,
        error: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_FILL"]:
      return _objectSpread({}, state, {
        data: action.payload,
        loading: false,
        error: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_ERROR_FETCHING"]:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_FETCH_ASYNC"]:
      return state;

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x = action;
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
const INVITE_START_FETCHING = 'INVITE_START_FETCHING';
const INVITE_FILL = 'INVITE_FILL';
const INVITE_ERROR_FETCHING = 'INVITE_ERROR_FETCHING';
const INVITE_FETCH_ASYNC = 'INVITE_FETCH_ASYNC';

/***/ }),

/***/ "./src/containers/invite/saga/index.ts":
/*!*********************************************!*\
  !*** ./src/containers/invite/saga/index.ts ***!
  \*********************************************/
/*! exports provided: watchInvites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchInvites", function() { return watchInvites; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _workers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workers */ "./src/containers/invite/saga/workers.ts");
/* harmony import */ var _redux_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/types */ "./src/containers/invite/redux/types.ts");




function* watchFetchInvite() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_redux_types__WEBPACK_IMPORTED_MODULE_2__["INVITE_FETCH_ASYNC"], _workers__WEBPACK_IMPORTED_MODULE_1__["fetchAllInvitesSaga"]);
}

function* watchInvites() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(watchFetchInvite)]);
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
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ "./src/containers/invite/redux/actions.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/containers/invite/services/index.ts");




function* fetchAllInvitesSaga() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteStartFetching"])());
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services__WEBPACK_IMPORTED_MODULE_3__["fetchAllInvites"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteFillFetching"])(result));
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["inviteErrorFetching"])(e.toString()));
  } finally {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_redux_saga_core__WEBPACK_IMPORTED_MODULE_1__["END"]);
  }
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
  return new Promise(resolve => {
    const payload = [{
      text: 'hi honey',
      id: 1
    }, {
      text: 'oh honey',
      id: 2
    }, {
      text: 'I am in your town',
      id: 3
    }];
    setTimeout(() => {
      resolve({
        payload,
        success: true,
        error: null
      });
    }, 550);
  });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_invite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/invite */ "./src/containers/invite/index.ts");
/* harmony import */ var _redux_with_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/with-redux */ "./src/redux/with-redux.tsx");
/* harmony import */ var _containers_invite_redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/invite/redux/actions */ "./src/containers/invite/redux/actions.ts");
var _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const IndexPage = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "OK"), __jsx(_containers_invite__WEBPACK_IMPORTED_MODULE_1__["Invite"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};

IndexPage.getInitialProps = async ({
  reduxStore,
  runSaga
}) => {
  const {
    dispatch
  } = reduxStore;
  dispatch(Object(_containers_invite_redux_actions__WEBPACK_IMPORTED_MODULE_3__["inviteFetchAsync"])());
  await runSaga.toPromise();
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_with_redux__WEBPACK_IMPORTED_MODULE_2__["withRedux"])(IndexPage));

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
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);


const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
const middleware = [sagaMiddleware, redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a];


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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_invite_redux_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/invite/redux/reducer */ "./src/containers/invite/redux/reducer.ts");


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  invites: _containers_invite_redux_reducer__WEBPACK_IMPORTED_MODULE_1__["invitesReducer"]
});

/***/ }),

/***/ "./src/redux/root-saga.ts":
/*!********************************!*\
  !*** ./src/redux/root-saga.ts ***!
  \********************************/
/*! exports provided: rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_invite_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/invite/saga */ "./src/containers/invite/saga/index.ts");


function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_containers_invite_saga__WEBPACK_IMPORTED_MODULE_1__["watchInvites"])()]);
}

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension/developmentOnly */ "redux-devtools-extension/developmentOnly");
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root-reducer */ "./src/redux/root-reducer.ts");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware */ "./src/redux/middleware.ts");
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root-saga */ "./src/redux/root-saga.ts");






const initializeStore = preloadedState => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_3__["rootReducer"], preloadedState, Object(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(..._middleware__WEBPACK_IMPORTED_MODULE_4__["middleware"])));
  const rootSagas = _middleware__WEBPACK_IMPORTED_MODULE_4__["sagaMiddleware"].run(_root_saga__WEBPACK_IMPORTED_MODULE_5__["rootSaga"]); // eslint-disable-next-line

  store.close = () => store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);

  return {
    store,
    rootSagas
  };
};

/***/ }),

/***/ "./src/redux/with-redux.tsx":
/*!**********************************!*\
  !*** ./src/redux/with-redux.tsx ***!
  \**********************************/
/*! exports provided: withRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRedux", function() { return withRedux; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/redux/store.ts");
var _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/redux/with-redux.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





let reduxStore;

function getOrInitializeStore(initialState) {
  if (true) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_3__["initializeStore"])(initialState);
  }

  if (!reduxStore) {
    reduxStore = Object(_store__WEBPACK_IMPORTED_MODULE_3__["initializeStore"])(initialState);
  }

  return reduxStore;
}

const withRedux = (PageComponent, {
  ssr = true
} = {}) => {
  const WithRedux = (_ref) => {
    let {
      initialReduxState
    } = _ref,
        props = _objectWithoutProperties(_ref, ["initialReduxState"]);

    const store = getOrInitializeStore(initialReduxState);
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store.store,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx(PageComponent, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    })));
  }; // Make sure people don't use this HOC on _app.js level


  if (true) {
    const isAppHoc = PageComponent === next_app__WEBPACK_IMPORTED_MODULE_2___default.a || PageComponent.prototype instanceof next_app__WEBPACK_IMPORTED_MODULE_2___default.a;

    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  } // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      const reduxStore = getOrInitializeStore(); // Provide the store to getInitialProps of pages

      context.reduxStore = reduxStore.store;
      context.runSaga = reduxStore.rootSagas;
      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {};
      return _objectSpread({}, pageProps, {
        initialReduxState: reduxStore.store.getState()
      });
    };
  }

  return WithRedux;
};

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bogdan/Downloads/next-blogdan/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension/developmentOnly":
/*!***********************************************************!*\
  !*** external "redux-devtools-extension/developmentOnly" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map