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
  var month = d.getMonth();
  var year = d.getFullYear();
  var dateStr = "".concat(pickMonth(month), " ").concat(date, ", ").concat(year);
  console.log(apiDate);
  console.log(d);
  console.log(d.toLocaleDateString());
  console.log(new Date());
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
//# sourceMappingURL=index.js.2ce4ddac715a11f8f3c6.hot-update.js.map