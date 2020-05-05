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
    error
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
/* harmony import */ var _redux_thunk_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/thunk-actions */ "./src/containers/invite/redux/thunk-actions.ts");


const useInvite = () => {
  const {
    loading,
    data,
    error
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.invites);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();

  const add = payload => {
    dispatch(Object(_redux_thunk_actions__WEBPACK_IMPORTED_MODULE_1__["thunkAddInvite"])(payload));
  };

  const load = () => {
    dispatch(Object(_redux_thunk_actions__WEBPACK_IMPORTED_MODULE_1__["thunkFetchInvites"])());
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
  error: null,
  loadingAdd: false,
  errorAdd: null
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

    case _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_ADD_FETCHING"]:
      return _objectSpread({}, state, {
        loadingAdd: true,
        errorAdd: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_ADD_FILL"]:
      return _objectSpread({}, state, {
        loadingAdd: false,
        data: action.payload,
        errorAdd: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_ADD_ERROR"]:
      return _objectSpread({}, state, {
        loadingAdd: false,
        errorAdd: action.payload
      });

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x = action;
  }

  return state;
};

/***/ }),

/***/ "./src/containers/invite/redux/thunk-actions.ts":
/*!******************************************************!*\
  !*** ./src/containers/invite/redux/thunk-actions.ts ***!
  \******************************************************/
/*! exports provided: thunkFetchInvites, thunkAddInvite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thunkFetchInvites", function() { return thunkFetchInvites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thunkAddInvite", function() { return thunkAddInvite; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/containers/invite/redux/types.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/containers/invite/services/index.ts");


const thunkFetchInvites = () => {
  return async dispatch => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_START_FETCHING"]
    });

    try {
      const result = await Object(_services__WEBPACK_IMPORTED_MODULE_1__["fetchAllInvites"])();
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_FILL"],
        payload: result.payload
      });
    } catch (e) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_ERROR_FETCHING"],
        payload: e.toString()
      });
    }
  };
};
const thunkAddInvite = payload => {
  return async dispatch => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_ADD_FETCHING"],
      payload
    });

    try {
      const result = await Object(_services__WEBPACK_IMPORTED_MODULE_1__["fetchAddInvite"])();
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_ADD_FILL"],
        payload: result.payload
      });
    } catch (e) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["INVITE_ADD_ERROR"],
        payload: e.toString()
      });
    }
  };
};

/***/ }),

/***/ "./src/containers/invite/redux/types.ts":
/*!**********************************************!*\
  !*** ./src/containers/invite/redux/types.ts ***!
  \**********************************************/
/*! exports provided: INVITE_START_FETCHING, INVITE_FILL, INVITE_ERROR_FETCHING, INVITE_ADD_FETCHING, INVITE_ADD_FILL, INVITE_ADD_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_START_FETCHING", function() { return INVITE_START_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_FILL", function() { return INVITE_FILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_ERROR_FETCHING", function() { return INVITE_ERROR_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_ADD_FETCHING", function() { return INVITE_ADD_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_ADD_FILL", function() { return INVITE_ADD_FILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_ADD_ERROR", function() { return INVITE_ADD_ERROR; });
const INVITE_START_FETCHING = 'INVITE_START_FETCHING';
const INVITE_FILL = 'INVITE_FILL';
const INVITE_ERROR_FETCHING = 'INVITE_ERROR_FETCHING';
const INVITE_ADD_FETCHING = 'INVITE_ADD_FETCHING';
const INVITE_ADD_FILL = 'INVITE_ADD_FILL';
const INVITE_ADD_ERROR = 'INVITE_ADD_ERROR';

/***/ }),

/***/ "./src/containers/invite/services/index.ts":
/*!*************************************************!*\
  !*** ./src/containers/invite/services/index.ts ***!
  \*************************************************/
/*! exports provided: fetchAllInvites, fetchAddInvite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllInvites", function() { return fetchAllInvites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAddInvite", function() { return fetchAddInvite; });
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
function fetchAddInvite() {
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
    }, {
      text: 'aaa',
      id: 4
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
/* harmony import */ var _containers_invite_redux_thunk_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/invite/redux/thunk-actions */ "./src/containers/invite/redux/thunk-actions.ts");
var _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const IndexPage = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "OK"), __jsx(_containers_invite__WEBPACK_IMPORTED_MODULE_1__["Invite"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
};

IndexPage.getInitialProps = async ({
  reduxStore: {
    dispatch
  }
}) => {
  await dispatch(Object(_containers_invite_redux_thunk_actions__WEBPACK_IMPORTED_MODULE_3__["thunkFetchInvites"])());
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_with_redux__WEBPACK_IMPORTED_MODULE_2__["withRedux"])(IndexPage));

/***/ }),

/***/ "./src/redux/middleware.ts":
/*!*********************************!*\
  !*** ./src/redux/middleware.ts ***!
  \*********************************/
/*! exports provided: middleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middleware", function() { return middleware; });
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);

const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a];


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
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root-reducer */ "./src/redux/root-reducer.ts");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware */ "./src/redux/middleware.ts");




const initializeStore = preloadedState => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_2__["rootReducer"], preloadedState, Object(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(..._middleware__WEBPACK_IMPORTED_MODULE_3__["middleware"])));
  return store;
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/redux/store.ts");
var _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/redux/with-redux.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




let reduxStore;

function getOrInitializeStore(initialState = {}) {
  if (true) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_2__["initializeStore"])(initialState);
  }

  if (!reduxStore) {
    reduxStore = Object(_store__WEBPACK_IMPORTED_MODULE_2__["initializeStore"])(initialState);
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
      store: store,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx(PageComponent, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    })));
  }; // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      const store = getOrInitializeStore(); // eslint-disable-next-line

      context.reduxStore = store;
      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {};
      return _objectSpread({}, pageProps, {
        initialReduxState: store.getState()
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