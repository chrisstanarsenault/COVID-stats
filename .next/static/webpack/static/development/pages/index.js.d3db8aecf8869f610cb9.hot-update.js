webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/convertTime.js":
/*!******************************!*\
  !*** ./utils/convertTime.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return convertTime; });
function convertTime(apiTime) {
  var time = apiTime; // your input

  time = time.split(':'); // convert to array
  // fetch

  var hours = Number(time[0]);
  var minutes = Number(time[1]);
  var seconds = Number(time[2]); // calculate

  var timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = "" + hours;
  } else if (hours > 12) {
    timeValue = "" + (hours - 12);
  } else if (hours == 0) {
    timeValue = "12";
  }

  timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
  // timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds

  timeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM

  return timeValue;
}

/***/ })

})
//# sourceMappingURL=index.js.d3db8aecf8869f610cb9.hot-update.js.map