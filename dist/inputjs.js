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

/***/ "./src/Keyboard.js":
/*!*************************!*\
  !*** ./src/Keyboard.js ***!
  \*************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Keyboard =
/*#__PURE__*/
function () {
  /**
   * 
   * @param {HTMLElement} screen 
   */
  function Keyboard(screen) {
    _classCallCheck(this, Keyboard);

    this.__shiftKey = false;
    this.__ctrlKey = false;
    this.__metaKey = false;
    this.__altKey = false;
    this.onUp = null;
    screen.addEventListener(Keyboard.KEYUP, this.onKeyUp.bind(this), false);
    screen.addEventListener(Keyboard.KEYDOWN, this.onKeyDown.bind(this), false);
  }
  /**
   * Event handler for KEYBOARD.KEYDOWN event
   *
   * @param {KeyboardEvent} event
   */


  _createClass(Keyboard, [{
    key: "onKeyDown",
    value: function onKeyDown(event) {
      event.preventDefault && event.preventDefault();

      switch (event.key) {
        case Keyboard.KEY.SHIFT:
          this.__shiftKey = true;
          break;

        case Keyboard.KEY.CONTROL:
          this.__ctrlKey = true;
          break;

        case Keyboard.KEY.ALT:
          this.__altKey = true;
          break;

        case Keyboard.KEY.META:
          this.__metaKey = true;
          break;

        default:
          break;
      }
    }
    /**
     * Event handler for KEYBOARD.KEYUP event
     *
     * @param {KeyboardEvent} event
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      event.preventDefault && event.preventDefault();

      switch (event.key) {
        case Keyboard.KEY.SHIFT:
          this.__shiftKey = false;
          break;

        case Keyboard.KEY.CONTROL:
          this.__ctrlKey = false;
          break;

        case Keyboard.KEY.ALT:
          this.__altKey = false;
          break;

        case Keyboard.KEY.META:
          this.__metaKey = false;
          break;

        default:
          this.extractMeta(event);
          console.log(event);
          this.onUp && this.onUp(event);
          break;
      }
    }
    /**
     * Extract meta information from a keyup event
     *
     * @param {KeyboardEvent} event
     */

  }, {
    key: "extractMeta",
    value: function extractMeta(event) {
      this.__shiftKey = event.shiftKey;
      this.__ctrlKey = event.ctrlKey;
      this.__metaKey = event.metaKey;
      this.__altKey = event.altKey;
    }
    /**
     * Remove all event listeners
     */

  }, {
    key: "destroy",
    value: function destroy() {
      document.removeEventListener(Keyboard.KEYUP, this.onKeyboardEvent.bind(this), false);
      document.removeEventListener(Keyboard.KEYDOWN, this.onKeyboardEvent.bind(this), false);
    }
  }]);

  return Keyboard;
}();
Object.defineProperty(Keyboard, "KEYUP", {
  enumerable: true,
  writable: true,
  value: "keyup"
});
Object.defineProperty(Keyboard, "KEYDOWN", {
  enumerable: true,
  writable: true,
  value: "keydown"
});
Object.defineProperty(Keyboard, "KEY", {
  enumerable: true,
  writable: true,
  value: {
    SHIFT: "Shift",
    CONTROL: "Control",
    ALT: "Alt",
    META: "Meta"
  }
});

/***/ }),

/***/ "./src/Manager.js":
/*!************************!*\
  !*** ./src/Manager.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (6:17)\nYou may need an appropriate loader to handle this file type.\n| export class Manager {\n| \n>     static EVENT = {\n| \n|         MOUSE_CLICK: 0,");

/***/ }),

/***/ "./src/Mouse.js":
/*!**********************!*\
  !*** ./src/Mouse.js ***!
  \**********************/
/*! exports provided: Mouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mouse", function() { return Mouse; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mouse =
/*#__PURE__*/
function () {
  /**
   * 
   * @param {HTMLDivElement} screen
   */
  function Mouse(screen) {
    _classCallCheck(this, Mouse);

    this.screen = screen;
    this.target = {};
    this.onMove = null;
    this.onUp = null;
    this.onWheel = null;
    this.onDblClick = null;
    this.__inViewport = false;
    this.__button = null;
    screen.addEventListener("mousedown", this.onMouseDown.bind(this));
    screen.addEventListener("mousemove", this.onMouseMove.bind(this));
    screen.addEventListener("mouseup", this.onMouseUp.bind(this));
    screen.addEventListener("contextmenu", this.onMouseContextMenu.bind(this));
    screen.addEventListener("dblclick", this.onMouseDblClick.bind(this));
    screen.addEventListener("mouseenter", this.onMouseEnter.bind(this));
    screen.addEventListener("mouseleave", this.onMouseLeave.bind(this));
    screen.addEventListener("mousewheel", this.onMouseWheel.bind(this));
  }

  _createClass(Mouse, [{
    key: "onMouseMove",
    value: function onMouseMove(event) {
      event.preventDefault && event.preventDefault();
      this.target = {
        x: event.offsetX,
        y: -event.offsetY
      };
      this.onMove && this.onMove(event);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      event.preventDefault && event.preventDefault();
      this.__button = event.button;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      event.preventDefault && event.preventDefault();
      this.__button = null;
      this.onUp && this.onUp({
        button: event.button
      });
    }
  }, {
    key: "onMouseContextMenu",
    value: function onMouseContextMenu(event) {
      event.preventDefault && event.preventDefault();
    }
  }, {
    key: "onMouseDblClick",
    value: function onMouseDblClick(event) {
      event.preventDefault && event.preventDefault();
      this.onDblClick && this.onDblClick(event);
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(event) {
      event.preventDefault && event.preventDefault();
      this.screen.focus();
      this.__inViewport = true;
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(event) {
      event.preventDefault && event.preventDefault();
      this.screen.blur();
      this.__inViewport = false;
    }
  }, {
    key: "onMouseWheel",
    value: function onMouseWheel(event) {
      event.preventDefault && event.preventDefault();
      this.onWheel && this.onWheel(event);
    }
  }]);

  return Mouse;
}();
Object.defineProperty(Mouse, "BUTTON", {
  enumerable: true,
  writable: true,
  value: {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
  }
});

/***/ }),

/***/ "./src/Touch.js":
/*!**********************!*\
  !*** ./src/Touch.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (4:21)\nYou may need an appropriate loader to handle this file type.\n| export class Touch {\n| \n>   static TOUCH_START = \"touchstart\";\n|   static TOUCH_MOVE = \"touchmove\";\n|   static TOUCH_END = \"touchend\";");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Keyboard, Mouse, Touch, Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Manager__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _Manager__WEBPACK_IMPORTED_MODULE_0__["Manager"]; });

/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard */ "./src/Keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return _Keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"]; });

/* harmony import */ var _Touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Touch */ "./src/Touch.js");
/* harmony import */ var _Touch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Touch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return _Touch__WEBPACK_IMPORTED_MODULE_2__["Touch"]; });

/* harmony import */ var _Mouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mouse */ "./src/Mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mouse", function() { return _Mouse__WEBPACK_IMPORTED_MODULE_3__["Mouse"]; });







/***/ })

/******/ });
//# sourceMappingURL=inputjs.js.map