webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/containers/invite/saga/workers.ts":
/*!***********************************************!*\
  !*** ./src/containers/invite/saga/workers.ts ***!
  \***********************************************/
/*! exports provided: fetchAllInvites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllInvites", function() { return fetchAllInvites; });
function fetchAllInvites() {
  console.log('here!!');
  return new Promise(function (resolve) {
    var payload = [{
      text: 'hi honey',
      id: 1
    }, {
      text: 'oh honey',
      id: 2
    }, {
      text: 'I am in your town',
      id: 3
    }];
    setTimeout(function () {
      resolve({
        payload: payload,
        success: true,
        error: null
      });
    }, 550);
  });
}

/***/ })

})
//# sourceMappingURL=index.js.97ef68c972a8428473c3.hot-update.js.map