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

  var date = d.substring(8, 10); // let month = d.getMonth();

  var month = parseInt(d.substring(5, 7)); // let year = d.getFullYear();

  var year = d.substring(0, 4);
  var dateStr = "".concat(pickMonth(month), " ").concat(date, ", ").concat(year);
  return dateStr;
}
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function pickMonth(monthNum) {
  for (var i = 0; i < months.length - 1; i++) {
    if (monthNum === i) {
      return months[i - 1];
    }
  }
}

/***/ })

})
//# sourceMappingURL=index.js.bfcecbc18bd8938d631e.hot-update.js.map