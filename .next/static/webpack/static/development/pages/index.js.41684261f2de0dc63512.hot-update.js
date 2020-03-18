webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
/* harmony import */ var _utils_convertTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/convertTime */ "./utils/convertTime.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/irepair/Desktop/Dev/Web Dev/Projects/rona/components/Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: #f2f2f2;\n  font-size: 2rem;\n  padding: 2rem;\n  border-radius: 2rem;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StatGrid = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var StatBlock = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
function Stats(_ref) {
  var url = _ref.url;

  var _useStats = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_2__["default"])(url),
      stats = _useStats.stats;

  if (!stats) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Loading...");
  console.log(stats.lastUpdate.substring(11, 16));
  console.log(typeof stats.lastUpdate.substring(11, 19));
  return __jsx(StatGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(StatBlock, {
    className: "statBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Confirmed:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, stats.confirmed.value)), __jsx(StatBlock, {
    className: "statBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Deaths:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, stats.deaths.value)), __jsx(StatBlock, {
    className: "statBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Recovered:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, stats.recovered.value)), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Last Updated: ", stats.lastUpdate.substring(0, 10), " @ ", stats.lastUpdate.substring(11, 16)));
}

/***/ }),

/***/ "./utils/convertTime.js":
/*!******************************!*\
  !*** ./utils/convertTime.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return convertTime; });
function convertTime(urlTime) {
  var time = "16:30:00"; // your input

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

  timeValue += seconds < 10 ? ":0" + seconds : ":" + seconds; // get seconds

  timeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM
}

/***/ })

})
//# sourceMappingURL=index.js.41684261f2de0dc63512.hot-update.js.map