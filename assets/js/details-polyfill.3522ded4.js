(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-polyfill"],{

/***/ "./src/scripts/details-polyfill.js":
/*!*****************************************!*\
  !*** ./src/scripts/details-polyfill.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar body = document.body;\n\nvar detailsTagSupported = function detailsTagSupported() {\n  var el = document.createElement('details');\n  if (!('open' in el)) return false;\n\n  el.innerHTML = '<summary>a</summary>b';\n  body.appendChild(el);\n\n  var diff = el.offsetHeight;\n  el.open = true;\n  var result = diff != el.offsetHeight;\n\n  body.removeChild(el);\n  return result;\n};\n\nvar detailsPolyfill = exports.detailsPolyfill = function detailsPolyfill(detailsElements) {\n  if (!detailsTagSupported()) {\n    body.classList.add('no-details');\n\n    detailsElements.forEach(function (detailsElement) {\n      var summaryElement = detailsElement.querySelector('summary');\n\n      summaryElement.addEventListener('click', function () {\n        if (detailsElement.getAttribute('open')) {\n          detailsElement.open = false;\n          detailsElement.removeAttribute('open');\n        } else {\n          detailsElement.open = true;\n          detailsElement.setAttribute('open', 'open');\n        }\n      });\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/scripts/details-polyfill.js?");

/***/ })

}]);