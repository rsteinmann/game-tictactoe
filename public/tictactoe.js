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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Map.js":
/*!*******************************!*\
  !*** ./src/components/Map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Component */ "./src/lib/Component.js");
/* harmony import */ var _MapTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapTile */ "./src/components/MapTile.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var defaultOptions = {
  mapSize: {
    x: 3,
    y: 3
  }
};

var Map =
/*#__PURE__*/
function (_Component) {
  _inherits(Map, _Component);

  function Map(instanceIndex, element) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Map);

    options = _objectSpread({}, options, {}, defaultOptions);
    return _possibleConstructorReturn(this, _getPrototypeOf(Map).call(this, instanceIndex, element, options));
  }

  _createClass(Map, [{
    key: "init",
    value: function init() {
      this.generate(this.options.mapSize.x, this.options.mapSize.y);

      _get(_getPrototypeOf(Map.prototype), "init", this).call(this);

      this.render();
      return this;
    }
  }, {
    key: "generate",
    value: function generate(x, y) {
      var map = [];
      var iX, iY;

      for (iX = 1; iX < x + 1; iX++) {
        for (iY = 1; iY < y + 1; iY++) {
          var mapTile = _lib_Component__WEBPACK_IMPORTED_MODULE_0__["register"].childShadow(this, _MapTile__WEBPACK_IMPORTED_MODULE_1__["default"], {
            pos: {
              x: iX,
              y: iY
            }
          });
          map.push(mapTile);
        }
      }

      return map;
    }
  }]);

  return Map;
}(_lib_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/MapTile.js":
/*!***********************************!*\
  !*** ./src/components/MapTile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapTile; });
/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Component */ "./src/lib/Component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var defaultOptions = {
  pos: {
    x: null,
    y: null
  },
  template: "<div id=\"map-tile-{{options.pos.x}}-{{options.pos.y}}\" class=\"map-tile\" data-module=\"{{constructor.name}}\"></div>"
};

var MapTile =
/*#__PURE__*/
function (_Components$ShadowCom) {
  _inherits(MapTile, _Components$ShadowCom);

  function MapTile(instanceIndex) {
    var _this;

    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, MapTile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MapTile).call(this, instanceIndex, element, _objectSpread({}, options, {}, defaultOptions)));
    _this.pos = _this.options.pos;
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(MapTile, [{
    key: "init",
    value: function init() {
      return this;
    }
  }]);

  return MapTile;
}(_lib_Component__WEBPACK_IMPORTED_MODULE_0__["ShadowComponent"]);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Component */ "./src/lib/Component.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Map */ "./src/components/Map.js");


/**
 * Component Collection
 */

var mainComponents = _lib_Component__WEBPACK_IMPORTED_MODULE_0__["register"].component(_components_Map__WEBPACK_IMPORTED_MODULE_1__["default"]);
mainComponents = _lib_Component__WEBPACK_IMPORTED_MODULE_0__["init"](mainComponents);
console.log('Components:', mainComponents);

/***/ }),

/***/ "./src/index.sass":
/*!************************!*\
  !*** ./src/index.sass ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lib/Component.js":
/*!******************************!*\
  !*** ./src/lib/Component.js ***!
  \******************************/
/*! exports provided: register, init, createElement, DefaultComponent, default, ShadowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowComponent", function() { return ShadowComponent; });
/* harmony import */ var _Tmpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tmpl */ "./src/lib/Tmpl.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Global component storage
 */

var instances = [];
var register = {
  component: registerComponent,
  shadow: registerShadow,
  childShadow: registerChildShadow
};
/**
 * Registers a component.
 * @param {Constructor} constructor  - Constructor of class
 * @param {Object} options - Options for component
 */

function registerComponent(constructor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var collection = [];
  document.querySelectorAll("[data-component=\"".concat(constructor.name, "\"]")).forEach(function (element) {
    var instanceIndex = instances.push({}) - 1;
    instances[instanceIndex] = new constructor(instanceIndex, element, _objectSpread({}, options, {}, defaultOptions));
    console.log('instance', instanceIndex, instances[instanceIndex]);
    collection.push(instances[instanceIndex]);
  });
  return collection;
}

function registerShadow(constructor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var instanceIndex = instances.push({}) - 1;
  instances[instanceIndex] = new constructor(instanceIndex, null, _objectSpread({}, options, {}, defaultOptions));
  return instances[instanceIndex];
}

function registerChildShadow(parent, constructor) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var instance = registerShadow(constructor, options);
  instance.parent = parent;
  parent.components.push(instance);
  return instance;
}
/**
 * Initializes a collection of compents or all instances of components stored.
 * @param {Array} components - A collection of components - default: instances
 */


function init() {
  var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : instances;
  return components.map(function (component) {
    return component.init();
  });
}
/**
 * Creates the Components element from options template string.
 * @param {Component} component - Any component that contains an `option.template` value
 * @return {NodeList} - The Nodelist generated out of the string
 */

function createElement(component) {
  var element = _Tmpl__WEBPACK_IMPORTED_MODULE_0__["parseTemplate"](component.options.template, component)[0];
  element.setAttribute('module-id', component.identifier);
  return component.element = element;
}
var defaultOptions = {
  debug: false
};
var DefaultComponent =
/*#__PURE__*/
function () {
  function DefaultComponent(instanceIndex) {
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, DefaultComponent);

    this.components = [];
    this.element = element;
    this.identifier = "".concat(this.constructor.name, "_").concat(instanceIndex);
    this.is = {};
    this.is.initialized = false;
    this.is.rendered = false;
    this.instanceIndex = instanceIndex;
    this.options = _objectSpread({}, options, {}, defaultOptions);
    this.parent = null;
    return this;
  }

  _createClass(DefaultComponent, [{
    key: "init",
    value: function init() {
      this.is.initialized = true;
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      this.is.rendered = true;
      return this;
    }
  }]);

  return DefaultComponent;
}();

var Component =
/*#__PURE__*/
function (_DefaultComponent) {
  _inherits(Component, _DefaultComponent);

  function Component(instanceIndex) {
    var _this;

    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Component);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, instanceIndex, element, options));

    _this.element.setAttribute('module-id', _this.identifier);

    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Component.prototype), "render", this).call(this);

      this.components.forEach(function (component) {
        return component.render();
      });
      return this;
    }
  }]);

  return Component;
}(DefaultComponent);


var ShadowComponent =
/*#__PURE__*/
function (_DefaultComponent2) {
  _inherits(ShadowComponent, _DefaultComponent2);

  function ShadowComponent(instanceIndex) {
    var _this2;

    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ShadowComponent);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ShadowComponent).call(this, instanceIndex, element, options));
    return _possibleConstructorReturn(_this2, _assertThisInitialized(_this2));
  }

  _createClass(ShadowComponent, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(ShadowComponent.prototype), "render", this).call(this);

      createElement(this);
      this.parent.element.appendChild(this.element);
      return this;
    }
  }]);

  return ShadowComponent;
}(DefaultComponent);

/***/ }),

/***/ "./src/lib/Tmpl.js":
/*!*************************!*\
  !*** ./src/lib/Tmpl.js ***!
  \*************************/
/*! exports provided: parseTemplate, parseHtml, toNodeList, parseTextPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTemplate", function() { return parseTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHtml", function() { return parseHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNodeList", function() { return toNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTextPlaceholder", function() { return parseTextPlaceholder; });
/**
 * Parses a string into a nodelist and replaces any text placeholders.
 * @param {string} template - The html construct as string
 * @param {object} textContext - Any object that contains placeholder values as properties
 * @return {NodeList} - The Nodelist generated out of the string
 */
function parseTemplate(template, textContext) {
  return parseHtml(parseTextPlaceholder(template, textContext));
}
/**
 * Parses a string into a NodeList.
 * @param {String} template - The html construct as string
 * @return {NodeList} - The Nodelist generated out of the string
 */

function parseHtml(template) {
  if (typeof template !== 'string') {
    console.error('parseHtml requires a string to be passed as template parameter!', template);
    return null;
  }

  var html = new DOMParser().parseFromString(template.trim(), 'text/html');
  return html.body.children;
}
/**
 * Converts an array of nodes to a NodeList.
 * @param {Array} arrayOfNodes - An array of dom nodes
 * @return {NodeList} - A NodeList
 */

function toNodeList(arrayOfNodes) {
  // console.log('arrayOfNodes', arrayOfNodes.constructor.name, arrayOfNodes);
  if (arrayOfNodes.constructor.name === 'NodeList') {
    return arrayOfNodes;
  }

  if (arrayOfNodes.constructor.name !== 'Array' && arrayOfNodes.constructor.name !== 'HTMLCollection') {
    console.warn('Passed param is not of type Array!', arrayOfNodes.constructor.name, arrayOfNodes);
    return arrayOfNodes;
  }

  var fragment = document.createDocumentFragment();
  arrayOfNodes.forEach(function (nodeElement) {
    return fragment.appendChild(nodeElement);
  });
  return fragment.childNodes;
}
/**
 * Replaces any text placeholders with real data passed as an object.
 * Placeholder may be added like this: {{ myPlaceholder.textKey }}
 * The data should contain the keys: { myPlacholder: { textKey: 'anyTextValue' }}
 * @param {string} template - A html template that contains text placeholders
 * @param {object} data - Any object that contains placeholder values as properties
 * @return {string} - The html template string with real text data
 */

function parseTextPlaceholder(template, data) {
  var regEx = new RegExp(/{{[\s]*([a-zA-Z0-9\.]*)[\s]*}}/g); // Get placeholders from template

  var placeholders = template.match(regEx); // Get real data from object by placeholders

  var replacers = placeholders.map(function (matchResult) {
    return matchResult.replace(/[{}\s]/g, '');
  }).map(function (sanitizedResult) {
    return sanitizedResult.split('.');
  }).map(function (pathArray) {
    return [data].concat(pathArray).reduce(function (obj, key) {
      return obj[key];
    });
  }); // Replace all items with real data

  placeholders.forEach(function (replaceItem, replaceIndex) {
    return template = template.replace(replaceItem, replacers[replaceIndex]);
  });
  return template;
}

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/index.sass ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/index.sass */"./src/index.sass");


/***/ })

/******/ });
//# sourceMappingURL=tictactoe.js.map