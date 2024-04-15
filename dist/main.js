/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 458:
/***/ ((module) => {

module.exports = {
  moreFunctions1: function moreFunctions1() {
    console.log("Hey, I'm a function!");
  },
  moreFunctions2: function moreFunctions2() {
    console.log("Hey, I'm a function!");
  },
  moreFunctions3: function moreFunctions3() {
    console.log("Hey, I'm a function!");
  },
  moreFunctions4: function moreFunctions4() {
    console.log("Hey, I'm a function!");
  },
  moreFunctions5: function moreFunctions5() {
    console.log("Hey, I'm a function!");
  },
  moreFunctions6: function moreFunctions6() {
    console.log("Hey, I'm a function!");
  },
  moreFunctions7: function moreFunctions7() {
    console.log("Hey, I'm a function!");
  }
};

/***/ }),

/***/ 934:
/***/ ((module) => {

module.exports = {
  justAFunction1: function justAFunction1() {
    console.log('Do something!');
  },
  justAFunction2: function justAFunction2() {
    console.log('Do something!');
  },
  justAFunction3: function justAFunction3() {
    console.log('Do something!');
  },
  justAFunction4: function justAFunction4() {
    console.log('Do something!');
  },
  justAFunction5: function justAFunction5() {
    console.log('Do something!');
  },
  justAFunction6: function justAFunction6() {
    console.log('Do something!');
  },
  justAFunction7: function justAFunction7() {
    console.log('Do something!');
  },
  justAFunction8: function justAFunction8() {
    console.log('Do something!');
  },
  justAFunction9: function justAFunction9() {
    console.log('Do something!');
  },
  justAFunction10: function justAFunction10() {
    console.log('Do something!');
  },
  justAFunction11: function justAFunction11() {
    console.log('Do something!');
  },
  justAFunction12: function justAFunction12() {
    console.log('Do something!');
  },
  justAFunction13: function justAFunction13() {
    console.log('Do something!');
  },
  justAFunction14: function justAFunction14() {
    console.log('Do something!');
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

var file1 = __webpack_require__(934);
var file2 = __webpack_require__(458);
file1.justAFunction1();
file2.moreFunctions1();
})();

/******/ })()
;