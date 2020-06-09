module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Error; });\n/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/result */ \"antd/lib/result\");\n/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_result__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/liangzhenquan/Documents/project/my-next/pages/_error.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/*\n * @Description:\n * @Autor: liang\n * @Date: 2020-06-09 09:45:31\n * @LastEditors: liang\n * @LastEditTime: 2020-06-09 09:53:21\n */\n\nclass Error extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      status: {\n        \"404\": \"抱歉，页面找不到\",\n        \"403\": \"权限不足\"\n      }\n    });\n  }\n\n  static getInitialProps({\n    res,\n    err\n  }) {\n    const statusCode = res ? res.statusCode : err ? err.statusCode : null;\n    return {\n      statusCode\n    };\n  }\n\n  render() {\n    const {\n      statusCode\n    } = this.props;\n    const {\n      status\n    } = this.state;\n    console.log(this.props);\n\n    if (statusCode === 404) {\n      return __jsx(antd_lib_result__WEBPACK_IMPORTED_MODULE_0___default.a, {\n        status: statusCode,\n        title: statusCode,\n        subTitle: status[statusCode],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }\n      });\n    }\n\n    return __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 12\n      }\n    }, \"\\u5BA2\\u6237\\u7AEF\\u53D1\\u751F\\u9519\\u8BEF\");\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZXJyb3IuanM/NjM0MyJdLCJuYW1lcyI6WyJFcnJvciIsIlJlYWN0IiwiQ29tcG9uZW50Iiwic3RhdHVzIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsInJlbmRlciIsInByb3BzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BO0FBRWUsTUFBTUEsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLG1DQUN6QztBQUNOQyxZQUFNLEVBQUU7QUFDTixlQUFPLFVBREQ7QUFFTixlQUFPO0FBRkQ7QUFERixLQUR5QztBQUFBOztBQU9qRCxTQUFPQyxlQUFQLENBQXVCO0FBQUVDLE9BQUY7QUFBT0M7QUFBUCxHQUF2QixFQUFxQztBQUNuQyxVQUFNQyxVQUFVLEdBQUdGLEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxVQUFQLEdBQW9CRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsVUFBUCxHQUFvQixJQUFqRTtBQUNBLFdBQU87QUFBRUE7QUFBRixLQUFQO0FBQ0Q7O0FBRURDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUQ7QUFBRixRQUFpQixLQUFLRSxLQUE1QjtBQUNBLFVBQU07QUFBRU47QUFBRixRQUFhLEtBQUtPLEtBQXhCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtILEtBQWpCOztBQUNBLFFBQUlGLFVBQVUsS0FBSyxHQUFuQixFQUF3QjtBQUN0QixhQUNFO0FBQ0UsY0FBTSxFQUFFQSxVQURWO0FBRUUsYUFBSyxFQUFFQSxVQUZUO0FBR0UsZ0JBQVEsRUFBRUosTUFBTSxDQUFDSSxVQUFELENBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQU9EOztBQUNELFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFBUDtBQUNEOztBQTFCZ0QiLCJmaWxlIjoiLi9wYWdlcy9fZXJyb3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQERlc2NyaXB0aW9uOlxuICogQEF1dG9yOiBsaWFuZ1xuICogQERhdGU6IDIwMjAtMDYtMDkgMDk6NDU6MzFcbiAqIEBMYXN0RWRpdG9yczogbGlhbmdcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDYtMDkgMDk6NTM6MjFcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSBcImFudGRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc3RhdHVzOiB7XG4gICAgICBcIjQwNFwiOiBcIuaKseatie+8jOmhtemdouaJvuS4jeWIsFwiLFxuICAgICAgXCI0MDNcIjogXCLmnYPpmZDkuI3otrNcIixcbiAgICB9LFxuICB9O1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcmVzLCBlcnIgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogbnVsbDtcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZXN1bHRcbiAgICAgICAgICBzdGF0dXM9e3N0YXR1c0NvZGV9XG4gICAgICAgICAgdGl0bGU9e3N0YXR1c0NvZGV9XG4gICAgICAgICAgc3ViVGl0bGU9e3N0YXR1c1tzdGF0dXNDb2RlXX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8cD7lrqLmiLfnq6/lj5HnlJ/plJnor688L3A+O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_error.js\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/liangzhenquan/Documents/project/my-next/pages/_error.js */"./pages/_error.js");


/***/ }),

/***/ "antd/lib/result":
/*!**********************************!*\
  !*** external "antd/lib/result" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd/lib/result\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9yZXN1bHRcIj9kNTk3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFudGQvbGliL3Jlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL3Jlc3VsdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd/lib/result\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });