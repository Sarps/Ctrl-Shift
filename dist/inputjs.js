var InputJS =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] /Users/SARPONG/Projects/InputJS/src/index.js: \nAs of v7.0.0-beta.55, we've removed Babel's Stage presets.\nPlease consider reading our blog post on this decision at\nhttps://babeljs.io/blog/2018/07/27/removing-babels-stage-presets\nfor more details. TL;DR is that it's more beneficial in the\n  long run to explicitly add which proposals to use.\n\nFor a more automatic migration, we have updated babel-upgrade,\nhttps://github.com/babel/babel-upgrade to do this for you with\n\"npx babel-upgrade\".\n\nIf you want the same configuration as before:\n\n{\n  \"plugins\": [\n    // Stage 2\n    [\"@babel/plugin-proposal-decorators\", { \"legacy\": true }],\n    \"@babel/plugin-proposal-function-sent\",\n    \"@babel/plugin-proposal-export-namespace-from\",\n    \"@babel/plugin-proposal-numeric-separator\",\n    \"@babel/plugin-proposal-throw-expressions\",\n\n    // Stage 3\n    \"@babel/plugin-syntax-dynamic-import\",\n    \"@babel/plugin-syntax-import-meta\",\n    [\"@babel/plugin-proposal-class-properties\", { \"loose\": false }],\n    \"@babel/plugin-proposal-json-strings\"\n  ]\n}\n\nIf you're using the same configuration across many separate projects,\nkeep in mind that you can also create your own custom presets with\nwhichever plugins and presets you're looking to use.\n\nmodule.exports = function() {\n  return {\n    plugins: [\n      require(\"@babel/plugin-syntax-dynamic-import\"),\n      [require(\"@babel/plugin-proposal-decorators\"), { \"legacy\": true }],\n      [require(\"@babel/plugin-proposal-class-properties\"), { \"loose\": false }],\n    ],\n    presets: [\n      // ...\n    ],\n  };\n};\n (While processing: \"/Users/SARPONG/Projects/InputJS/node_modules/@babel/preset-stage-2/lib/index.js\")\n    at _default (/Users/SARPONG/Projects/InputJS/node_modules/@babel/preset-stage-2/lib/index.js:9:9)\n    at loadDescriptor (/Users/SARPONG/Projects/InputJS/node_modules/@babel/core/lib/config/full.js:165:14)\n    at cachedFunction (/Users/SARPONG/Projects/InputJS/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at loadPresetDescriptor (/Users/SARPONG/Projects/InputJS/node_modules/@babel/core/lib/config/full.js:235:63)\n    at config.presets.reduce (/Users/SARPONG/Projects/InputJS/node_modules/@babel/core/lib/config/full.js:77:21)\n    at Array.reduce (<anonymous>)\n    at recurseDescriptors (/Users/SARPONG/Projects/InputJS/node_modules/@babel/core/lib/config/full.js:74:38)\n    at loadFullConfig (/Users/SARPONG/Projects/InputJS/node_modules/@babel/core/lib/config/full.js:108:6)\n    at process.nextTick (/Users/SARPONG/Projects/InputJS/node_modules/@babel/core/lib/transform.js:28:33)\n    at processTicksAndRejections (internal/process/next_tick.js:74:9)");

/***/ })

/******/ });
//# sourceMappingURL=inputjs.js.map