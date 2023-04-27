/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\r\n  constructor(id, make, model, year) {\r\n    this.id = id;\r\n    this.make = make;\r\n    this.model = model;\r\n    this.year = year;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\r\n\r\nconsole.log(\"Hello World\");\r\n//DOM slectiom forms\r\nconst carForm = document.querySelector(\"#submitForm\");\r\nconst carMakeInput = document.querySelector(\"#makeInput\");\r\nconst carModelInput = document.querySelector(\"#modelInput\");\r\nconst carYearInput = document.querySelector(\"#yearInput\");\r\nconst carMakeP = document.querySelector(\"#car-make\");\r\nconst carModelP = document.querySelector(\"#car-model\");\r\nconst carYearP = document.querySelector(\"#car-year\");\r\nconst removeButton = document.querySelector(\".removeBtn\");\r\nconst wishListUl = document.querySelector(\"#wishListContainer > ul\");\r\n// TODO\r\n//Test the remove method\r\nconst testWishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n//Adding cars to the state (more info behind the scene)\r\ntestWishlist.add(\"Subaru\", \"Legacy\", 2009);\r\ntestWishlist.add(\"Ford\", \"F-150\", 2010);\r\ntestWishlist.add(\"Chevy\", \"Impala\", 1967);\r\nconsole.log(testWishlist);\r\ntestWishlist.remove(2);\r\n\r\nfunction showCarDetails(car) {\r\n  carMakeP.textContent = car.make;\r\n  carModelP.textContent = car.model;\r\n  carYearP.textContent = car.year;\r\n  //Enable the button\r\n  removeButton.disabled = false;\r\n  removeButton.addEventListener(\"click\", removeCar);\r\n  //Storing the current car's id inside the button\r\n  removeButton.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\n//Generic DOM update function\r\nfunction updateDOMList() {\r\n  //Reset everything in the ul\r\n  wishListUl.textContent = \" \";\r\n  //Iteration over the cars\r\n  testWishlist.list.forEach((car, index, arr) => {\r\n    //create the list item\r\n    const newLi = document.createElement(\"li\");\r\n    const newP = document.createElement(\"p\");\r\n    newP.textContent = `${car.make} ${car.model}`;\r\n\r\n    //Add a click event to the list item\r\n    newLi.addEventListener(\"click\", () => {\r\n      showCarDetails(car);\r\n    });\r\n\r\n    //Append Everything!\r\n    newLi.appendChild(newP);\r\n    wishListUl.appendChild(newLi);\r\n  });\r\n}\r\n\r\n//the callback function for a submit event\r\nfunction addCar(event) {\r\n  event.preventDefault();\r\n  //Rewrite with destructuring {}\r\n  const tempMakeVal = carMakeInput.value;\r\n  // const { value : tempMakeValue } = carMakeInput;\r\n  const tempModelVal = carModelInput.value;\r\n  const tempYearVal = carYearInput.value;\r\n  //this updated our internal state\r\n  testWishlist.add(tempMakeVal, tempModelVal, tempYearVal);\r\n  //We need to make sure that the display is up to date with our internal state\r\nupdateDOMList();\r\n}\r\n\r\n//add an event to the \"add\" button\r\ncarForm.addEventListener(\"submit\", addCar);\r\n\r\nfunction removeCar() {\r\n    //Retrieving the current car id off of the removeButton ele\r\n  const carId = Number(removeButton.getAttribute(\"data-carId\"));\r\n  //Updated the internal state variable\r\n  testWishlist.remove(carId);\r\n  //Keep our display in sync with the internal state\r\n  updateDOMList();\r\n  carMakeP.textContent = \"\";\r\n  carModelP.textContent = \"\";\r\n  carYearP.textContent = \"\";\r\n  //Disable the remove button\r\n  removeButton.disabled = true;\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\r\n\r\n//List of Cars:\r\n//[Car()\r\n\r\nclass Wishlist {\r\n  constructor() {\r\n    this.list = [];\r\n    this.nextID = 0;\r\n  }\r\n  add(make, model, year) {\r\n    const tempCar = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextID, make, model, year);\r\n    this.list.push(tempCar);\r\n    //this.list = [...this.list, tempCar];\r\n  }\r\n\r\n  remove(carId) {\r\n    //Filter and Splice at the correct index\r\n    //Splice wants 2 pieces of info to work correctly\r\n        //1. The index in the array\r\n        //2. How many items to remove\r\n        const index = this.list.findIndex((ele) => {\r\n            return ele.id == carId;\r\n        });\r\n        this.list.splice(index, 1);\r\n        \r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;