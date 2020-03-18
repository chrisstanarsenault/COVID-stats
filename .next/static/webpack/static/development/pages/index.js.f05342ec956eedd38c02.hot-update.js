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
  // let year = d.getFullYear();
  // let dateStr = `${pickMonth(month)} ${date}, ${year}`;

  console.log("1: ", apiDate);
  console.log("2: ", d);
  console.log("date: ", date); // console.log("3: ", d.toLocaleDateString())

  console.log("4: ", new Date()); // return dateStr
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
//# sourceMappingURL=index.js.f05342ec956eedd38c02.hot-update.js.map