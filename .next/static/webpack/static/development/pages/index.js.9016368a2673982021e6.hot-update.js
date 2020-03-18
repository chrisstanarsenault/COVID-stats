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

  var month = d.substring(5, 7); // let year = d.getFullYear();

  var year = d.substring(0, 4);
  var dateStr = "".concat(pickMonth(month), " ").concat(date, ", ").concat(year);
  console.log("1: ", apiDate);
  console.log("2: ", d);
  console.log("date: ", date);
  console.log("month: ", month); // console.log("3: ", d.toLocaleDateString())

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
//# sourceMappingURL=index.js.9016368a2673982021e6.hot-update.js.map