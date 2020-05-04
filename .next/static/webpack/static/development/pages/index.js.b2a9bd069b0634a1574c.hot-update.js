webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_invite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/invite */ "./src/containers/invite/index.ts");
/* harmony import */ var _redux_with_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/with-redux */ "./src/redux/with-redux.tsx");
/* harmony import */ var _containers_invite_redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/invite/redux/actions */ "./src/containers/invite/redux/actions.ts");


var _this = undefined,
    _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





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
  }, "OK"), __jsx(_containers_invite__WEBPACK_IMPORTED_MODULE_2__["Invite"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};

IndexPage.getInitialProps = function _callee(_ref) {
  var reduxStore, runSaga, dispatch;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          reduxStore = _ref.reduxStore, runSaga = _ref.runSaga;
          dispatch = reduxStore.dispatch;
          console.log(runSaga);
          dispatch(Object(_containers_invite_redux_actions__WEBPACK_IMPORTED_MODULE_4__["inviteFetchAsync"])());
          return _context.abrupt("return", {});

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_with_redux__WEBPACK_IMPORTED_MODULE_3__["withRedux"])(IndexPage));

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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension/developmentOnly */ "./node_modules/redux-devtools-extension/developmentOnly.js");
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root-reducer */ "./src/redux/root-reducer.ts");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware */ "./src/redux/middleware.ts");
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root-saga */ "./src/redux/root-saga.ts");






var initializeStore = function initializeStore(preloadedState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_3__["rootReducer"], preloadedState, Object(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_middleware__WEBPACK_IMPORTED_MODULE_4__["middleware"]))));
  var rootSagas = _middleware__WEBPACK_IMPORTED_MODULE_4__["sagaMiddleware"].run(_root_saga__WEBPACK_IMPORTED_MODULE_5__["rootSaga"]);
  return {
    store: store,
    rootSagas: rootSagas
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/redux/store.ts");





var _this = undefined,
    _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/redux/with-redux.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var reduxStore;

function getOrInitializeStore(initialState) {
  if (false) {}

  if (!reduxStore) {
    reduxStore = Object(_store__WEBPACK_IMPORTED_MODULE_7__["initializeStore"])(initialState);
  }

  return reduxStore;
}

var withRedux = function withRedux(PageComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? true : _ref$ssr;

  var WithRedux = function WithRedux(_ref2) {
    var initialReduxState = _ref2.initialReduxState,
        props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["initialReduxState"]);

    var store = getOrInitializeStore(initialReduxState);
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
      store: store.store,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx(PageComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    })));
  }; // Make sure people don't use this HOC on _app.js level


  if (true) {
    var isAppHoc = PageComponent === next_app__WEBPACK_IMPORTED_MODULE_6___default.a || PageComponent.prototype instanceof next_app__WEBPACK_IMPORTED_MODULE_6___default.a;

    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  } // Set the correct displayName in development


  if (true) {
    var displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = "withRedux(".concat(displayName, ")");
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = function _callee(context) {
      var reduxStore, pageProps;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              reduxStore = getOrInitializeStore(); // Provide the store to getInitialProps of pages

              context.reduxStore = reduxStore.store;
              context.runSaga = reduxStore.rootSagas;

              if (!(typeof PageComponent.getInitialProps === 'function')) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(PageComponent.getInitialProps(context));

            case 6:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 9:
              _context.t0 = {};

            case 10:
              pageProps = _context.t0;
              return _context.abrupt("return", _objectSpread({}, pageProps, {
                initialReduxState: reduxStore.getState()
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };
  }

  return WithRedux;
};

/***/ })

})
//# sourceMappingURL=index.js.b2a9bd069b0634a1574c.hot-update.js.map