webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/convertDate.js":
/*!******************************!*\
  !*** ./utils/convertDate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return convertDate; });
function convertDate(apiDate) {
  var d = new Date(apiDate);
  var date = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var dateStr = date + "/" + month + "/" + year;
  console.log(dateStr);
}

/***/ })

})
//# sourceMappingURL=index.js.099f5411b711f417d02d.hot-update.js.map