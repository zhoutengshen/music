module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/SSREnter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _taggedTemplateLiteral; });\nfunction _taggedTemplateLiteral(strings, raw) {\n  if (!raw) {\n    raw = strings.slice(0);\n  }\n\n  return Object.freeze(Object.defineProperties(strings, {\n    raw: {\n      value: Object.freeze(raw)\n    }\n  }));\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js?");

/***/ }),

/***/ "./src/components/RecommendList/Item/index.jsx":
/*!*****************************************************!*\
  !*** ./src/components/RecommendList/Item/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/components/RecommendList/Item/style.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"D:\\\\\\u684C\\u9762\\\\learning\\\\music\\\\src\\\\components\\\\RecommendList\\\\Item\\\\index.jsx\";\n\n\n\n\nconst Item = props => {\n  const picUrl = props.picUrl,\n        title = props.title,\n        count = props.count;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"img-wraper\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"count\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"icon iconfont iconerji\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: undefined\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"num\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11\n    },\n    __self: undefined\n  }, count)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"img\",\n    src: picUrl,\n    alt: \"\\u56FE\\u7247\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13\n    },\n    __self: undefined\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"title\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: undefined\n  }, title));\n};\n\nItem.propTypes = {\n  picUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  count: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Item));\n\n//# sourceURL=webpack:///./src/components/RecommendList/Item/index.jsx?");

/***/ }),

/***/ "./src/components/RecommendList/Item/style.js":
/*!****************************************************!*\
  !*** ./src/components/RecommendList/Item/style.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ItemWraper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style__ItemWraper\",\n  componentId: \"sc-225uyy-0\"\n})([\"display:flex;flex-direction:column;padding-top:.8rem;height:15rem;box-sizing:border-box;overflow:hidden;&>.img-wraper{position:relative;width:100%;height:12rem;border-radius:\", \";overflow:hidden;&>.count{position:absolute;top:0;left:0;width:100%;box-sizing:border-box;padding-right:.4rem;line-height:1.6rem;text-align:end;background:linear-gradient(rgba(0,0,0,0.4),rgba(255,255,255,0));color:\", \";&>.icon{font-size:1.2rem;padding:0 .4rem;}&>.num{font-size:1.2rem;}}&>.img{width:100%;height:100%;}}&>.title{font-size:1.2rem;line-height:1.5rem;height:3rem;padding:0 .4rem;color:\", \";}\"], ({\n  theme\n}) => theme.shape.borderRadius, ({\n  theme\n}) => theme.palette.primary.contrastText, ({\n  theme\n}) => theme.palette.text.primary);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemWraper);\n\n//# sourceURL=webpack:///./src/components/RecommendList/Item/style.js?");

/***/ }),

/***/ "./src/components/RecommendList/index.jsx":
/*!************************************************!*\
  !*** ./src/components/RecommendList/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./src/components/RecommendList/style.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item */ \"./src/components/RecommendList/Item/index.jsx\");\nvar _jsxFileName = \"D:\\\\\\u684C\\u9762\\\\learning\\\\music\\\\src\\\\components\\\\RecommendList\\\\index.jsx\";\n\n\n\n\n\nconst List = props => {\n  const recommends = props.recommends;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: undefined\n  }, recommends.map(recommend => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object.assign({}, recommend, {\n    key: recommend.id,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11\n    },\n    __self: undefined\n  }))));\n};\n\nList.propTypes = {\n  recommends: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(List));\n\n//# sourceURL=webpack:///./src/components/RecommendList/index.jsx?");

/***/ }),

/***/ "./src/components/RecommendList/style.js":
/*!***********************************************!*\
  !*** ./src/components/RecommendList/style.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ListWraper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style__ListWraper\",\n  componentId: \"sc-1p4mjb8-0\"\n})([\"display:flex;width:100%;justify-content:space-around;flex-wrap:wrap;&>div{width:32%;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListWraper);\n\n//# sourceURL=webpack:///./src/components/RecommendList/style.js?");

/***/ }),

/***/ "./src/components/Slider/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Slider/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"swiper\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./src/components/Slider/style.js\");\nvar _jsxFileName = \"D:\\\\\\u684C\\u9762\\\\learning\\\\music\\\\src\\\\components\\\\Slider\\\\index.jsx\";\n\n\n\n\n\nclass Slider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  componentDidMount() {\n    //不要绑定.swiper-container,避免在一个页面内使用多个Slider时产生bug\n    const swiperContainer = this.swiperContainer,\n          swiperPagination = this.swiperPagination;\n    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_1___default.a(swiperContainer, {\n      autoplay: {\n        disableOnInteraction: false\n      },\n      //可选选项，自动滑动\n      loop: true,\n      loopAdditionalSlides: 3,\n      pagination: {\n        el: swiperPagination\n      }\n    });\n  }\n\n  render() {\n    const imgUrls = this.props.imgUrls;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__[\"SliderContainer\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"swiper-container\",\n      ref: el => this.swiperContainer = el,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"swiper-wrapper\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29\n      },\n      __self: this\n    }, imgUrls.map((imgUrl, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      style: {\n        width: '100%',\n        height: '100%'\n      },\n      src: imgUrl,\n      key: index,\n      alt: \"\\u8F6E\\u64AD\",\n      className: \"swiper-slide\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31\n      },\n      __self: this\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"swiper-pagination\",\n      ref: el => this.swiperPagination = el,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34\n      },\n      __self: this\n    })));\n  }\n\n}\n\nSlider.defaultProps = {\n  imgUrls: []\n};\nSlider.propTypes = {\n  imgUrls: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\n//# sourceURL=webpack:///./src/components/Slider/index.jsx?");

/***/ }),

/***/ "./src/components/Slider/style.js":
/*!****************************************!*\
  !*** ./src/components/Slider/style.js ***!
  \****************************************/
/*! exports provided: SliderContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderContainer\", function() { return SliderContainer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style__SliderContainer\",\n  componentId: \"sc-12t208l-0\"\n})([\"position:relative;.swiper-container{position:relative;margin:0 .4rem;height:16rem;border-radius:\", \";--swiper-theme-color:\", \";--swiper-pagination-color:\", \";}&::before{content:\\\"\\\";position:absolute;display:block;height:60%;width:100%;background:\", \";}\"], ({\n  theme\n}) => theme.shape.borderRadius, ({\n  theme\n}) => theme.palette.primary.main, ({\n  theme\n}) => theme.palette.primary.contrastText, ({\n  theme\n}) => theme.palette.primary.main);\n\n//# sourceURL=webpack:///./src/components/Slider/style.js?");

/***/ }),

/***/ "./src/hoc/themeHoc.js":
/*!*****************************!*\
  !*** ./src/hoc/themeHoc.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_learning_music_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(D_learning_music_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nconst mapStateToProps = (stateProps, ownProps) => {\n  return _objectSpread({\n    theme: stateProps.theme\n  }, ownProps);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component => {\n  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Component);\n});\n\n//# sourceURL=webpack:///./src/hoc/themeHoc.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_learning_music_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var views_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! views/Home */ \"./src/views/Home/index.jsx\");\n/* harmony import */ var views_Recommend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! views/Recommend */ \"./src/views/Recommend/index.jsx\");\n/* harmony import */ var views_Rank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! views/Rank */ \"./src/views/Rank/index.jsx\");\n/* harmony import */ var views_Singers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! views/Singers */ \"./src/views/Singers/index.jsx\");\n/* harmony import */ var views_Error_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! views/Error/route */ \"./src/views/Error/route/index.js\");\n\nvar _jsxFileName = \"D:\\\\\\u684C\\u9762\\\\learning\\\\music\\\\src\\\\routes\\\\index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(D_learning_music_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nlet routesConfigs = [{\n  path: \"/\",\n  component: views_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  routes: [{\n    path: \"/\",\n    exact: true,\n    render: () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Redirect\"], {\n      to: \"/recommend\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17\n      },\n      __self: undefined\n    })\n  }, {\n    path: \"/recommend\",\n    component: views_Recommend__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }, {\n    path: \"/singers\",\n    component: views_Singers__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }, {\n    path: \"/rank\",\n    component: views_Rank__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }]\n}]; //为每个子路由添加404页面\n\nconst routesWith404PageConfigs = (routesConfigs = []) => {\n  const newRoutesConfigs = routesConfigs.map(item => {\n    if (item.routes) {\n      const newItemRoutes = routesWith404PageConfigs([...item.routes]);\n      return _objectSpread({}, item, {\n        routes: [...newItemRoutes, views_Error_route__WEBPACK_IMPORTED_MODULE_7__[\"default\"]]\n      });\n    }\n\n    return _objectSpread({}, item);\n  });\n  return newRoutesConfigs;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routesWith404PageConfigs(routesConfigs));\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/server/SSREnter.js":
/*!********************************!*\
  !*** ./src/server/SSREnter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! routes */ \"./src/routes/index.js\");\n/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! style */ \"./src/style.js\");\n/* harmony import */ var hoc_themeHoc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hoc/themeHoc */ \"./src/hoc/themeHoc.js\");\n/* harmony import */ var stores__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stores */ \"./src/stores/index.js\");\nvar _jsxFileName = \"D:\\\\\\u684C\\u9762\\\\learning\\\\music\\\\src\\\\server\\\\SSREnter.js\";\n\n\n\n\n\n\n\n\n\n\nconst WithThemeApp = Object(hoc_themeHoc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(props => {\n  const theme = props.theme,\n        children = props.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: theme,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14\n    },\n    __self: undefined\n  }, children);\n});\n\nconst App = ({\n  sheet = {},\n  store = stores__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n}, location = \"/\") => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"StyleSheetManager\"], {\n    sheet: sheet.instance,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(style__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24\n    },\n    __self: undefined\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WithThemeApp, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: true,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26\n    },\n    __self: undefined\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/server/SSREnter.js?");

/***/ }),

/***/ "./src/stores/index.js":
/*!*****************************!*\
  !*** ./src/stores/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./src/stores/reducers/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst defaultState = {};\nconst composeEnhancer = redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], defaultState, composeEnhancer(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/stores/index.js?");

/***/ }),

/***/ "./src/stores/reducers/index.js":
/*!**************************************!*\
  !*** ./src/stores/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ \"./src/stores/reducers/theme/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  theme: _theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/stores/reducers/index.js?");

/***/ }),

/***/ "./src/stores/reducers/theme/index.js":
/*!********************************************!*\
  !*** ./src/stores/reducers/theme/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_learning_music_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme */ \"./src/theme/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(D_learning_music_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nconst DEFALUT_THEME_ACTION = Symbol();\n\nconst themeReducer = (state = _objectSpread({}, theme__WEBPACK_IMPORTED_MODULE_1__[\"defalutTheme\"]), action) => {\n  if (action.type === DEFALUT_THEME_ACTION) {\n    return _objectSpread({}, theme__WEBPACK_IMPORTED_MODULE_1__[\"defalutTheme\"]);\n  } else {\n    return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (themeReducer);\n\n//# sourceURL=webpack:///./src/stores/reducers/theme/index.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_learning_music_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject() {\n  const data = Object(D_learning_music_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\\nhtml,body{\\n\\t/**\\n\\trem\\u5E03\\u5C40=\\u300B1px === 0.1rem\\n\\t */\\n\\tfont-size:\", \"px;\\n}\\n\"]);\n\n  _templateObject = function () {\n    return data;\n  };\n\n  return data;\n}\n\n\nconst baseWidth = 375; // const width = document ? document.documentElement.getBoundingClientRect() : 375;\n\nconst width = 375;\nconst baseFontSize = width / baseWidth * 10 / 10000 * 10000;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), baseFontSize));\n\n//# sourceURL=webpack:///./src/style.js?");

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: defalutTheme, daHongTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defalutTheme\", function() { return defalutTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"daHongTheme\", function() { return daHongTheme; });\nconst defalutTheme = {\n  \"palette\": {\n    \"common\": {\n      \"black\": \"#000\",\n      \"white\": \"#fff\"\n    },\n    \"primary\": {\n      \"main\": \"#1976d2\",\n      \"light\": \"rgb(71, 145, 219)\",\n      \"dark\": \"rgb(17, 82, 147)\",\n      \"contrastText\": \"#fff\"\n    },\n    \"secondary\": {\n      \"main\": \"rgb(220, 0, 78)\",\n      \"light\": \"rgb(227, 51, 113)\",\n      \"dark\": \"rgb(154, 0, 54)\",\n      \"contrastText\": \"#fff\"\n    },\n    \"error\": {\n      \"light\": \"#e57373\",\n      \"main\": \"#f44336\",\n      \"dark\": \"#d32f2f\",\n      \"contrastText\": \"#fff\"\n    },\n    \"text\": {\n      \"primary\": \"rgba(0, 0, 0, 0.87)\",\n      \"secondary\": \"rgba(0, 0, 0, 0.54)\",\n      \"disabled\": \"rgba(0, 0, 0, 0.38)\",\n      \"hint\": \"rgba(0, 0, 0, 0.38)\"\n    },\n    \"background\": {\n      \"paper\": \"#fff\",\n      \"default\": \"#fff\",\n      \"level2\": \"#f5f5f5\",\n      \"level1\": \"#fff\"\n    },\n    \"action\": {\n      \"active\": \"rgba(0, 0, 0, 0.54)\",\n      \"hover\": \"rgba(0, 0, 0, 0.08)\",\n      \"hoverOpacity\": 0.08,\n      \"selected\": \"rgba(0, 0, 0, 0.14)\",\n      \"disabled\": \"rgba(0, 0, 0, 0.26)\",\n      \"disabledBackground\": \"rgba(0, 0, 0, 0.12)\"\n    }\n  },\n  \"shadows\": [\"none\", \"0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)\", \"0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)\", \"0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)\", \"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)\", \"0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)\", \"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)\", \"0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)\", \"0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)\", \"0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)\", \"0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)\", \"0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)\", \"0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)\", \"0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)\", \"0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)\", \"0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)\", \"0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)\", \"0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)\", \"0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)\", \"0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)\", \"0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)\", \"0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)\", \"0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)\", \"0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)\", \"0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)\"],\n  \"typography\": {\n    \"htmlFontSize\": 16,\n    \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n    \"fontSize\": 14,\n    \"fontWeightLight\": 300,\n    \"fontWeightRegular\": 400,\n    \"fontWeightMedium\": 500,\n    \"fontWeightBold\": 700,\n    \"h1\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 300,\n      \"fontSize\": \"6rem\",\n      \"lineHeight\": 1,\n      \"letterSpacing\": \"-0.01562em\"\n    },\n    \"h2\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 300,\n      \"fontSize\": \"3.75rem\",\n      \"lineHeight\": 1,\n      \"letterSpacing\": \"-0.00833em\"\n    },\n    \"h3\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 400,\n      \"fontSize\": \"3rem\",\n      \"lineHeight\": 1.04,\n      \"letterSpacing\": \"0em\"\n    },\n    \"h4\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 400,\n      \"fontSize\": \"2.125rem\",\n      \"lineHeight\": 1.17,\n      \"letterSpacing\": \"0.00735em\"\n    },\n    \"h5\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 400,\n      \"fontSize\": \"1.5rem\",\n      \"lineHeight\": 1.33,\n      \"letterSpacing\": \"0em\"\n    },\n    \"h6\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 500,\n      \"fontSize\": \"1.25rem\",\n      \"lineHeight\": 1.6,\n      \"letterSpacing\": \"0.0075em\"\n    },\n    \"subtitle1\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 400,\n      \"fontSize\": \"1rem\",\n      \"lineHeight\": 1.75,\n      \"letterSpacing\": \"0.00938em\"\n    },\n    \"subtitle2\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 500,\n      \"fontSize\": \"0.875rem\",\n      \"lineHeight\": 1.57,\n      \"letterSpacing\": \"0.00714em\"\n    },\n    \"body1\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 400,\n      \"fontSize\": \"1rem\",\n      \"lineHeight\": 1.5,\n      \"letterSpacing\": \"0.00938em\"\n    },\n    \"body2\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 400,\n      \"fontSize\": \"0.875rem\",\n      \"lineHeight\": 1.43,\n      \"letterSpacing\": \"0.01071em\"\n    },\n    \"button\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 500,\n      \"fontSize\": \"0.875rem\",\n      \"lineHeight\": 1.75,\n      \"letterSpacing\": \"0.02857em\",\n      \"textTransform\": \"uppercase\"\n    },\n    \"caption\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 400,\n      \"fontSize\": \"0.75rem\",\n      \"lineHeight\": 1.66,\n      \"letterSpacing\": \"0.03333em\"\n    },\n    \"overline\": {\n      \"fontFamily\": \"\\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif\",\n      \"fontWeight\": 400,\n      \"fontSize\": \"0.75rem\",\n      \"lineHeight\": 2.66,\n      \"letterSpacing\": \"0.08333em\",\n      \"textTransform\": \"uppercase\"\n    }\n  },\n  \"shape\": {\n    \"borderRadius\": '.4rem'\n  },\n  \"transitions\": {\n    \"easing\": {\n      \"easeInOut\": \"cubic-bezier(0.4, 0, 0.2, 1)\",\n      \"easeOut\": \"cubic-bezier(0.0, 0, 0.2, 1)\",\n      \"easeIn\": \"cubic-bezier(0.4, 0, 1, 1)\",\n      \"sharp\": \"cubic-bezier(0.4, 0, 0.6, 1)\"\n    },\n    \"duration\": {\n      \"shortest\": 150,\n      \"shorter\": 200,\n      \"short\": 250,\n      \"standard\": 300,\n      \"complex\": 375,\n      \"enteringScreen\": 225,\n      \"leavingScreen\": 195\n    }\n  },\n  \"zIndex\": {\n    \"mobileStepper\": 1000,\n    \"appBar\": 1100,\n    \"drawer\": 1200,\n    \"modal\": 1300,\n    \"snackbar\": 1400,\n    \"tooltip\": 1500\n  },\n  \"nprogress\": {\n    \"color\": \"#000\"\n  }\n};\nconst daHongTheme = {};\n\n//# sourceURL=webpack:///./src/theme/index.js?");

/***/ }),

/***/ "./src/views/Error/404Page/index.jsx":
/*!*******************************************!*\
  !*** ./src/views/Error/404Page/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"D:\\\\\\u684C\\u9762\\\\learning\\\\music\\\\src\\\\views\\\\Error\\\\404Page\\\\index.jsx\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: undefined\n  }, \"404Page\");\n});\n\n//# sourceURL=webpack:///./src/views/Error/404Page/index.jsx?");

/***/ }),

/***/ "./src/views/Error/route/index.js":
/*!****************************************!*\
  !*** ./src/views/Error/route/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var views_Error_404Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! views/Error/404Page */ \"./src/views/Error/404Page/index.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  path: \"*\",\n  component: views_Error_404Page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/views/Error/route/index.js?");

/***/ }),

/***/ "./src/views/Home/index.jsx":
/*!**********************************!*\
  !*** ./src/views/Home/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var views_Home_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! views/Home/style */ \"./src/views/Home/style.js\");\nvar _jsxFileName = \"D:\\\\\\u684C\\u9762\\\\learning\\\\music\\\\src\\\\views\\\\Home\\\\index.jsx\";\n\n\n\n\n\nconst Home = props => {\n  const route = props.route,\n        theme = props.theme;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(views_Home_style__WEBPACK_IMPORTED_MODULE_3__[\"TopBar\"], {\n    props: theme,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"iconfont iconcaidan\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: undefined\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: undefined\n  }, \"\\u6211\\u7684\\u97F3\\u4E50\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"iconfont iconsearch\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11\n    },\n    __self: undefined\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(views_Home_style__WEBPACK_IMPORTED_MODULE_3__[\"Tab\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(views_Home_style__WEBPACK_IMPORTED_MODULE_3__[\"TabItem\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeClassName: \"selected\",\n    to: \"/recommend\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14\n    },\n    __self: undefined\n  }, \"\\u63A8\\u8350\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(views_Home_style__WEBPACK_IMPORTED_MODULE_3__[\"TabItem\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeClassName: \"selected\",\n    to: \"/singers\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: undefined\n  }, \"\\u6B4C\\u624B\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(views_Home_style__WEBPACK_IMPORTED_MODULE_3__[\"TabItem\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeClassName: \"selected\",\n    to: \"/rank\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }, \"\\u6392\\u884C\\u699C\"))), Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(route.routes));\n}; //React.memo props 发生变化的是否更新\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Home));\n\n//# sourceURL=webpack:///./src/views/Home/index.jsx?");

/***/ }),

/***/ "./src/views/Home/style.js":
/*!*********************************!*\
  !*** ./src/views/Home/style.js ***!
  \*********************************/
/*! exports provided: TopBar, Tab, TabItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TopBar\", function() { return TopBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tab\", function() { return Tab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TabItem\", function() { return TabItem; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TopBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style__TopBar\",\n  componentId: \"wseuus-0\"\n})([\"display:flex;flex-direction:row;justify-content:space-between;padding:0.4rem 0.8rem;background:\", \";&>span{line-height:4rem;color:\", \";font-size:1.6rem;&.iconfont{font-size:2.5rem;}}\"], ({\n  theme\n}) => theme.palette['primary'].main, ({\n  theme\n}) => theme.palette['primary'].contrastText);\nconst Tab = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({\n  displayName: \"style__Tab\",\n  componentId: \"wseuus-1\"\n})([\"display:flex;width:100%;background:\", \";flex-direction:row;justify-content:space-around;\"], ({\n  theme\n}) => theme.palette['primary'].main);\nconst TabItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style__TabItem\",\n  componentId: \"wseuus-2\"\n})([\"a{position:relative;box-sizing:border-box;line-height:4rem;font-size:1.5rem;text-decoration:none;font-weight:100;padding:0  2rem  .4rem  2rem;color:\", \";&.selected{font-weight:700;border-bottom:.2rem solid #fff;}}\"], ({\n  theme\n}) => theme.palette.primary.contrastText);\n\n//# sourceURL=webpack:///./src/views/Home/style.js?");

/***/ }),

/***/ "./src/views/Rank/index.jsx":
/*!**********************************!*\
  !*** ./src/views/Rank/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"D:\\\\\\u684C\\u9762\\\\learning\\\\music\\\\src\\\\views\\\\Rank\\\\index.jsx\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: undefined\n  }, \"Rank\");\n});\n\n//# sourceURL=webpack:///./src/views/Rank/index.jsx?");

/***/ }),

/***/ "./src/views/Recommend/index.jsx":
/*!***************************************!*\
  !*** ./src/views/Recommend/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Slider */ \"./src/components/Slider/index.jsx\");\n/* harmony import */ var components_RecommendList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/RecommendList */ \"./src/components/RecommendList/index.jsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./src/views/Recommend/style.js\");\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock */ \"./src/views/Recommend/mock.js\");\nvar _jsxFileName = \"D:\\\\\\u684C\\u9762\\\\learning\\\\music\\\\src\\\\views\\\\Recommend\\\\index.jsx\";\n\n\n\n\n\n\nconst Recommend = props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8\n    },\n    __self: undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    imgUrls: _mock__WEBPACK_IMPORTED_MODULE_4__[\"bannerList\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: undefined\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_RecommendList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    recommends: _mock__WEBPACK_IMPORTED_MODULE_4__[\"recommends\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: undefined\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Recommend));\n\n//# sourceURL=webpack:///./src/views/Recommend/index.jsx?");

/***/ }),

/***/ "./src/views/Recommend/mock.js":
/*!*************************************!*\
  !*** ./src/views/Recommend/mock.js ***!
  \*************************************/
/*! exports provided: bannerList, recommends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bannerList\", function() { return bannerList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recommends\", function() { return recommends; });\nconst bannerList = [\"http://p1.music.126.net/gc4jzp-V47fMSe6bscPz-g==/109951164374385649.jpg\", \"http://p1.music.126.net/z8IWO16Jf9CkN8pXBHxdfQ==/109951164374401115.jpg\", \"http://p1.music.126.net/LPiWGU-gMQU4ZUQJUSNkGA==/109951164375631909.jpg\", \"http://p1.music.126.net/LPiWGU-gMQU4ZUQJUSNkGA==/109951164375631909.jpg\"];\nconst recommends = [{\n  id: 1,\n  picUrl: \"https://p2.music.126.net/b9diiSRYH0bRIzRTuVAFxg==/109951164375925444.jpg?param=300x300\",\n  title: \"[VIP专享] 一周新歌推荐\",\n  count: 0\n}, {\n  id: 2,\n  picUrl: \"https://p2.music.126.net/C75An6rGEd2jlMuDb8b8zw==/109951164341829310.jpg?param=300x300\",\n  title: \"[乡村音乐]田纳西州的音乐之路\",\n  count: 0\n}, {\n  id: 3,\n  picUrl: \"https://p2.music.126.net/Ae9bUFr1StHITxgeCD5R7A==/109951164313053030.jpg?param=300x300\",\n  title: \"中国电音厂牌SOY SAUCE LABEL\",\n  count: 0\n}, {\n  id: 4,\n  picUrl: \"https://p2.music.126.net/sTaabfUXK7_p3Mmg40HHIg==/109951164287544903.jpg?param=300x300\",\n  title: \"流汗吧健身少女\",\n  count: 0\n}, {\n  id: 7,\n  picUrl: \"https://p2.music.126.net/Zn7nmGUzlMZomUy3Puqjig==/109951164243122162.jpg?param=300x300\",\n  title: \"纯音乐图书馆✦简单干净钢琴旋律\",\n  count: 0\n}, {\n  id: 15,\n  picUrl: \"https://p2.music.126.net/b9diiSRYH0bRIzRTuVAFxg==/109951164375925444.jpg?param=300x300\",\n  title: \"电音~入耳抖腿日常必备的电子歌单\",\n  count: 0\n}, {\n  id: 6,\n  picUrl: \"https://p2.music.126.net/dhsPY1ZVdnPxtZ1zsXJafQ==/109951164201872230.jpg?param=300x300\",\n  title: \"精选Uplifting Trance丨史诗氛围的电子交响\",\n  count: 0\n}, {\n  id: 41,\n  picUrl: \"https://p2.music.126.net/b9diiSRYH0bRIzRTuVAFxg==/109951164375925444.jpg?param=300x300\",\n  title: \"[VIP专享] 一周新歌推荐\",\n  count: 0\n}, {\n  id: 24,\n  picUrl: \"https://p2.music.126.net/C75An6rGEd2jlMuDb8b8zw==/109951164341829310.jpg?param=300x300\",\n  title: \"[乡村音乐]田纳西州的音乐之路\",\n  count: 0\n}, {\n  id: 43,\n  picUrl: \"https://p2.music.126.net/Ae9bUFr1StHITxgeCD5R7A==/109951164313053030.jpg?param=300x300\",\n  title: \"中国电音厂牌SOY SAUCE LABEL\",\n  count: 0\n}, {\n  id: 44,\n  picUrl: \"https://p2.music.126.net/sTaabfUXK7_p3Mmg40HHIg==/109951164287544903.jpg?param=300x300\",\n  title: \"流汗吧健身少女\",\n  count: 0\n}, {\n  id: 74,\n  picUrl: \"https://p2.music.126.net/Zn7nmGUzlMZomUy3Puqjig==/109951164243122162.jpg?param=300x300\",\n  title: \"纯音乐图书馆✦简单干净钢琴旋律\",\n  count: 0\n}, {\n  id: 5,\n  picUrl: \"https://p2.music.126.net/b9diiSRYH0bRIzRTuVAFxg==/109951164375925444.jpg?param=300x300\",\n  title: \"电音~入耳抖腿日常必备的电子歌单\",\n  count: 0\n}, {\n  id: 64,\n  picUrl: \"https://p2.music.126.net/dhsPY1ZVdnPxtZ1zsXJafQ==/109951164201872230.jpg?param=300x300\",\n  title: \"精选Uplifting Trance丨史诗氛围的电子交响\",\n  count: 0\n}, {\n  id: 641,\n  picUrl: \"https://p2.music.126.net/dhsPY1ZVdnPxtZ1zsXJafQ==/109951164201872230.jpg?param=300x300\",\n  title: \"精选Uplifting Trance丨史诗氛围的电子交响\",\n  count: 0\n}, {\n  id: 1231,\n  picUrl: \"https://p2.music.126.net/b9diiSRYH0bRIzRTuVAFxg==/109951164375925444.jpg?param=300x300\",\n  title: \"[VIP专享] 一周新歌推荐\",\n  count: 0\n}, {\n  id: 12352,\n  picUrl: \"https://p2.music.126.net/C75An6rGEd2jlMuDb8b8zw==/109951164341829310.jpg?param=300x300\",\n  title: \"[乡村音乐]田纳西州的音乐之路\",\n  count: 0\n}, {\n  id: 31235,\n  picUrl: \"https://p2.music.126.net/Ae9bUFr1StHITxgeCD5R7A==/109951164313053030.jpg?param=300x300\",\n  title: \"中国电音厂牌SOY SAUCE LABEL\",\n  count: 0\n}, {\n  id: 41235,\n  picUrl: \"https://p2.music.126.net/sTaabfUXK7_p3Mmg40HHIg==/109951164287544903.jpg?param=300x300\",\n  title: \"流汗吧健身少女\",\n  count: 0\n}, {\n  id: 12357,\n  picUrl: \"https://p2.music.126.net/Zn7nmGUzlMZomUy3Puqjig==/109951164243122162.jpg?param=300x300\",\n  title: \"纯音乐图书馆✦简单干净钢琴旋律\",\n  count: 0\n}, {\n  id: 1135,\n  picUrl: \"https://p2.music.126.net/b9diiSRYH0bRIzRTuVAFxg==/109951164375925444.jpg?param=300x300\",\n  title: \"电音~入耳抖腿日常必备的电子歌单\",\n  count: 0\n}, {\n  id: 24356,\n  picUrl: \"https://p2.music.126.net/dhsPY1ZVdnPxtZ1zsXJafQ==/109951164201872230.jpg?param=300x300\",\n  title: \"精选Uplifting Trance丨史诗氛围的电子交响\",\n  count: 0\n}, {\n  id: 42351,\n  picUrl: \"https://p2.music.126.net/b9diiSRYH0bRIzRTuVAFxg==/109951164375925444.jpg?param=300x300\",\n  title: \"[VIP专享] 一周新歌推荐\",\n  count: 0\n}, {\n  id: 6342324,\n  picUrl: \"https://p2.music.126.net/C75An6rGEd2jlMuDb8b8zw==/109951164341829310.jpg?param=300x300\",\n  title: \"[乡村音乐]田纳西州的音乐之路\",\n  count: 0\n}, {\n  id: 4123453,\n  picUrl: \"https://p2.music.126.net/Ae9bUFr1StHITxgeCD5R7A==/109951164313053030.jpg?param=300x300\",\n  title: \"中国电音厂牌SOY SAUCE LABEL\",\n  count: 0\n}, {\n  id: 443,\n  picUrl: \"https://p2.music.126.net/sTaabfUXK7_p3Mmg40HHIg==/109951164287544903.jpg?param=300x300\",\n  title: \"流汗吧健身少女\",\n  count: 0\n}, {\n  id: 174,\n  picUrl: \"https://p2.music.126.net/Zn7nmGUzlMZomUy3Puqjig==/109951164243122162.jpg?param=300x300\",\n  title: \"纯音乐图书馆✦简单干净钢琴旋律\",\n  count: 0\n}, {\n  id: 32135,\n  picUrl: \"https://p2.music.126.net/b9diiSRYH0bRIzRTuVAFxg==/109951164375925444.jpg?param=300x300\",\n  title: \"电音~入耳抖腿日常必备的电子歌单\",\n  count: 0\n}, {\n  id: 6124,\n  picUrl: \"https://p2.music.126.net/dhsPY1ZVdnPxtZ1zsXJafQ==/109951164201872230.jpg?param=300x300\",\n  title: \"精选Uplifting Trance丨史诗氛围的电子交响\",\n  count: 0\n}, {\n  id: 64121,\n  picUrl: \"https://p2.music.126.net/dhsPY1ZVdnPxtZ1zsXJafQ==/109951164201872230.jpg?param=300x300\",\n  title: \"精选Uplifting Trance丨史诗氛围的电子交响\",\n  count: 0\n}];\n\n//# sourceURL=webpack:///./src/views/Recommend/mock.js?");

/***/ }),

/***/ "./src/views/Recommend/style.js":
/*!**************************************!*\
  !*** ./src/views/Recommend/style.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style\",\n  componentId: \"sc-18tn12c-0\"\n})([\"\"]));\n\n//# sourceURL=webpack:///./src/views/Recommend/style.js?");

/***/ }),

/***/ "./src/views/Singers/index.jsx":
/*!*************************************!*\
  !*** ./src/views/Singers/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"D:\\\\\\u684C\\u9762\\\\learning\\\\music\\\\src\\\\views\\\\Singers\\\\index.jsx\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4\n    },\n    __self: undefined\n  }, \"Singers\");\n});\n\n//# sourceURL=webpack:///./src/views/Singers/index.jsx?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swiper\");\n\n//# sourceURL=webpack:///external_%22swiper%22?");

/***/ })

/******/ });