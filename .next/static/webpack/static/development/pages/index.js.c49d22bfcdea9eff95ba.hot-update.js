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
  // let d = new Date(apiDate);
  var d = apiDate; // let date = d.getDate();

  var date = d.substring(0, 4);
  var month = d.getMonth();
  var year = d.getFullYear();
  var dateStr = "".concat(pickMonth(month), " ").concat(date, ", ").concat(year);
  console.log("1: ", apiDate);
  console.log("2: ", d);
  console.log("3: ", d.toLocaleDateString());
  console.log("4: ", new Date());
  return dateStr;
}
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function pickMonth(monthNum) {
  for (var i = 0; i < months.length - 1; i++) {
    if (monthNum === i) {
      return months[i];
    }
  }
}

/***/ })

})
//# sourceMappingURL=index.js.c49d22bfcdea9eff95ba.hot-update.js.map