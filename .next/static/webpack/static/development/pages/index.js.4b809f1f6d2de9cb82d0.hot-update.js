webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
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
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useInvite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useInvite */ "./src/containers/invite/useInvite.ts");


var _this = undefined,
    _jsxFileName = "/Users/bogdan/Downloads/next-blogdan/src/containers/invite/Invite.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Invite = function Invite() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  var _useInvite = Object(_useInvite__WEBPACK_IMPORTED_MODULE_2__["useInvite"])(),
      add = _useInvite.add,
      loading = _useInvite.loading,
      data = _useInvite.data,
      error = _useInvite.error,
      load = _useInvite.load;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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

Invite.getInitialProps = function (_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);
};

/***/ })

})
//# sourceMappingURL=index.js.4b809f1f6d2de9cb82d0.hot-update.js.map