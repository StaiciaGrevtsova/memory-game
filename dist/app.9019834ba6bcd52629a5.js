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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_cardImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/cardImages */ \"./store/cardImages.js\");\n/* harmony import */ var _views_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/cards */ \"./views/cards.js\");\n/* harmony import */ var _views_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/modal */ \"./views/modal.js\");\n/* harmony import */ var _component_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/game */ \"./component/game.js\");\n/* harmony import */ var _lib_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/timer */ \"./lib/timer.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  initGame().then();\n  var startMessage = document.querySelector('#start-message');\n  var startButton = document.querySelector('#start');\n  var field = _views_cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fieldContainer;\n  var cardClass = '.card';\n  var buttonId = '#play';\n  var popup = _views_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].popupContainer; //set timer\n\n  var timerElem = document.querySelector('#timer');\n  var defaultTimer = 60;\n  var timer = setTimer(timerElem, defaultTimer); //handlers\n\n  function initGame() {\n    return _initGame.apply(this, arguments);\n  }\n\n  function _initGame() {\n    _initGame = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _store_cardImages__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\n            case 2:\n              _views_cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderCards(_store_cardImages__WEBPACK_IMPORTED_MODULE_1__[\"default\"].imagesList);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _initGame.apply(this, arguments);\n  }\n\n  function setTimer(elem, time) {\n    _lib_timer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].clearTimer(timerElem);\n    return new _lib_timer__WEBPACK_IMPORTED_MODULE_5__[\"default\"](elem, time);\n  }\n\n  function checkTime() {\n    var timeIsOver = setInterval(function () {\n      if (timer.time === 0) {\n        _views_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].openModal('fail');\n        clearInterval(timeIsOver);\n      }\n    }, 1000);\n  }\n\n  function startGame() {\n    timer = setTimer(timerElem, defaultTimer);\n    timer.build();\n    checkTime();\n  }\n\n  function checkFinishGame() {\n    var successCards = _toConsumableArray(_views_cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"].successCards).length;\n\n    return successCards === _store_cardImages__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cardCount;\n  } //events\n\n\n  startButton.addEventListener('click', function (e) {\n    startMessage.classList.add('start-message--disable');\n    field.classList.remove('field--disable');\n    startGame();\n  });\n  field.addEventListener('click', function (e) {\n    var elem = e.target;\n\n    if (!elem.closest(cardClass)) {\n      return;\n    }\n\n    _component_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].openCard([elem.closest(cardClass)]);\n    var openingCardCount = _component_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].openingCardsCount();\n\n    var _game$openingCardList = _slicedToArray(_component_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].openingCardList, 2),\n        openingCardFirst = _game$openingCardList[0],\n        openingCardSecond = _game$openingCardList[1];\n\n    _component_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].compareCardPair(openingCardFirst, openingCardSecond);\n\n    if (openingCardCount === 2 && !_component_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].compareCardPair(openingCardFirst, openingCardSecond)) {\n      setTimeout(function () {\n        _component_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].closeCard([openingCardFirst, openingCardSecond]);\n      }, 800);\n    }\n\n    var finish = checkFinishGame();\n\n    if (finish) {\n      timer.stop();\n      setTimeout(function () {\n        _views_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].openModal('success');\n      }, 500);\n    }\n  });\n  popup.addEventListener('click', function (e) {\n    var elem = e.target;\n\n    if (!elem.closest(buttonId)) {\n      return;\n    }\n\n    _views_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].closeModal();\n    initGame().then(function () {\n      startGame();\n    });\n  });\n});\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./component/game.js":
/*!***************************!*\
  !*** ./component/game.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/cards */ \"./views/cards.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.openingList = [];\n  }\n\n  _createClass(Game, [{\n    key: \"openCard\",\n    value: function openCard(cards) {\n      cards.forEach(function (card) {\n        if (card.classList.contains('success')) {\n          return;\n        }\n\n        card.classList.add('is-flipped');\n      });\n    }\n  }, {\n    key: \"closeCard\",\n    value: function closeCard(cards) {\n      cards.forEach(function (card) {\n        card.classList.remove('is-flipped');\n        card.classList.remove('fail');\n      });\n    } //считаем количество открытых карточек\n\n  }, {\n    key: \"openingCardsCount\",\n    value: function openingCardsCount() {\n      if (!this.openingCardList || !this.openingCardList.length) {\n        return 0;\n      }\n\n      return this.openingCardList.length;\n    } //сравниваем 2 карточки\n\n  }, {\n    key: \"compareCardPair\",\n    value: function compareCardPair(cardFirst, cardSecond) {\n      if (!cardFirst || !cardSecond) return;\n      var imageFirst = _views_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getImage(cardFirst);\n      var imageSecond = _views_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getImage(cardSecond);\n\n      if (imageFirst === imageSecond) {\n        _views_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"].markSuccess([cardFirst, cardSecond]);\n        return true;\n      }\n\n      _views_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"].markFail([cardFirst, cardSecond]);\n      return false;\n    }\n  }, {\n    key: \"openingCardList\",\n    get: function get() {\n      this.openingList = document.querySelectorAll('.is-flipped:not(.success):not(.fail)');\n      return this.openingList;\n    }\n  }]);\n\n  return Game;\n}();\n\nvar game = new Game();\n/* harmony default export */ __webpack_exports__[\"default\"] = (game);\n\n//# sourceURL=webpack:///./component/game.js?");

/***/ }),

/***/ "./data/index.json":
/*!*************************!*\
  !*** ./data/index.json ***!
  \*************************/
/*! exports provided: icons, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"icons\\\":[\\\"🐶\\\",\\\"🐱\\\",\\\"⏳\\\",\\\"🔪\\\",\\\"🏺\\\",\\\"🎀\\\",\\\"🎁\\\",\\\"🧸\\\",\\\"📚\\\",\\\"🪑\\\",\\\"🧲\\\",\\\"👠\\\",\\\"👑\\\",\\\"👕\\\",\\\"💗\\\",\\\"🌹\\\",\\\"🏡\\\",\\\"🍎\\\",\\\"🍒\\\",\\\"🍄\\\",\\\"🍿\\\",\\\"🥕\\\",\\\"🧀\\\"]}\");\n\n//# sourceURL=webpack:///./data/index.json?");

/***/ }),

/***/ "./lib/timer.js":
/*!**********************!*\
  !*** ./lib/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Timer = /*#__PURE__*/function () {\n  function Timer(elem, time) {\n    _classCallCheck(this, Timer);\n\n    this.time = time;\n    this.options = {\n      elem: elem,\n      isStopped: false\n    };\n  } // Build elements\n\n\n  _createClass(Timer, [{\n    key: \"build\",\n    value: function build() {\n      var timeElement = this.options.elem; // Minute element\n\n      var minuteElement = document.createElement('span');\n      minuteElement.className = 'minute';\n      this.minuteElement = timeElement.appendChild(minuteElement); // Second element\n\n      var secondElement = document.createElement('span');\n      secondElement.className = 'second';\n      this.secondElement = timeElement.appendChild(secondElement); // Initial time\n\n      this.initTimer(); // Invoke timer\n\n      this.startTimer();\n    }\n  }, {\n    key: \"initTimer\",\n    value: function initTimer() {\n      var minute = Math.floor(this.time / 60);\n      var second = this.time % 60;\n      this.minuteElement.innerHTML = minute <= 9 ? \"0\".concat(minute, \":\") : \"\".concat(minute, \":\");\n      this.secondElement.innerHTML = second <= 9 ? \"0\".concat(second) : second;\n    }\n  }, {\n    key: \"startTimer\",\n    value: function startTimer() {\n      var _self = this;\n\n      var timerInterval = setInterval(function () {\n        if (!_self.options.isStopped) {\n          _self.time--;\n\n          if (_self.time === 0) {\n            clearInterval(timerInterval);\n            return _self.stop();\n          }\n\n          _self.initTimer();\n        }\n      }, 1000);\n    } // Stop\n\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.options.isStopped = true;\n      this.initTimer(this.time);\n    }\n  }], [{\n    key: \"clearTimer\",\n    value: function clearTimer(elem) {\n      elem.innerHTML = '';\n    }\n  }]);\n\n  return Timer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n//# sourceURL=webpack:///./lib/timer.js?");

/***/ }),

/***/ "./store/cardImages.js":
/*!*****************************!*\
  !*** ./store/cardImages.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./data/index.json\");\nvar _data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data */ \"./data/index.json\", 1);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Images = /*#__PURE__*/function () {\n  function Images(images, count) {\n    _classCallCheck(this, Images);\n\n    this.original = images.icons;\n    this.cardCount = count;\n    this.list = [];\n  }\n\n  _createClass(Images, [{\n    key: \"init\",\n    value: function init() {\n      this.list = this.generateRandomImages(this.original, this.cardCount);\n    }\n  }, {\n    key: \"shuffleImages\",\n    value: function shuffleImages(array) {\n      for (var i = array.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        var _ref = [array[j], array[i]];\n        array[i] = _ref[0];\n        array[j] = _ref[1];\n      }\n\n      return array;\n    }\n  }, {\n    key: \"generateRandomImages\",\n    value: function generateRandomImages(array, n) {\n      var shuffledAllImages = this.shuffleImages(array);\n      var getFirstElements = shuffledAllImages.slice(0, n / 2);\n      var generatedArray = Array.prototype.concat(getFirstElements, getFirstElements);\n      generatedArray = this.shuffleImages(generatedArray);\n      return generatedArray;\n    }\n  }, {\n    key: \"imagesList\",\n    get: function get() {\n      return this.list;\n    }\n  }]);\n\n  return Images;\n}();\n\nvar images = new Images(_data__WEBPACK_IMPORTED_MODULE_0__, 12);\n/* harmony default export */ __webpack_exports__[\"default\"] = (images);\n\n//# sourceURL=webpack:///./store/cardImages.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "./views/cards.js":
/*!************************!*\
  !*** ./views/cards.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CardsUI = /*#__PURE__*/function () {\n  function CardsUI() {\n    _classCallCheck(this, CardsUI);\n\n    this.container = document.querySelector('#field');\n    this.failed = [];\n    this.success = [];\n  }\n\n  _createClass(CardsUI, [{\n    key: \"renderCards\",\n    value: function renderCards(cards) {\n      this.clearField();\n\n      if (!cards || !cards.length) {\n        this.showErrorMsg();\n        return;\n      }\n\n      var fragment = '';\n      cards.forEach(function (cardIcon) {\n        var template = CardsUI.cardTemplate(cardIcon);\n        fragment += template;\n      });\n      this.container.insertAdjacentHTML('afterbegin', fragment);\n    }\n  }, {\n    key: \"clearField\",\n    value: function clearField() {\n      this.container.innerHTML = '';\n    }\n  }, {\n    key: \"showErrorMsg\",\n    value: function showErrorMsg() {\n      var template = CardsUI.errorMsgTemplate();\n      this.container.insertAdjacentHTML('afterbegin', template);\n    }\n  }, {\n    key: \"markSuccess\",\n    value: function markSuccess(cards) {\n      cards.forEach(function (item) {\n        item.classList.add('success');\n      });\n    }\n  }, {\n    key: \"markFail\",\n    value: function markFail(cards) {\n      cards.forEach(function (item) {\n        item.classList.add('fail');\n      });\n    }\n  }, {\n    key: \"getImage\",\n    value: function getImage(card) {\n      if (!card) {\n        return;\n      }\n\n      return card.querySelector('.card__image').innerHTML.trim();\n    } //template\n\n  }, {\n    key: \"fieldContainer\",\n    get: function get() {\n      return this.container;\n    }\n  }, {\n    key: \"failedCards\",\n    get: function get() {\n      this.failed = document.querySelectorAll('.fail');\n      return this.failed;\n    }\n  }, {\n    key: \"successCards\",\n    get: function get() {\n      this.success = document.querySelectorAll('.success');\n      return this.success;\n    }\n  }], [{\n    key: \"errorMsgTemplate\",\n    value: function errorMsgTemplate() {\n      return \"<div class=\\\"error-message\\\">\\u041F\\u0440\\u043E\\u0438\\u0437\\u043E\\u0448\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0433\\u0435\\u043D\\u0435\\u0440\\u0430\\u0446\\u0438\\u0438 \\u0438\\u0433\\u0440\\u043E\\u0432\\u044B\\u0445 \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u0435\\u043A</div>\";\n    }\n  }, {\n    key: \"cardTemplate\",\n    value: function cardTemplate(icon) {\n      return \"\\n    <div class=\\\"card\\\">\\n      <div class=\\\"card__inner\\\">\\n        <div class=\\\"card__back\\\"></div>\\n        <div class=\\\"card__image\\\">\\n          \".concat(icon, \"\\n        </div>\\n      </div>\\n    </div>\\n    \");\n    }\n  }]);\n\n  return CardsUI;\n}();\n\nvar cardsUI = new CardsUI();\n/* harmony default export */ __webpack_exports__[\"default\"] = (cardsUI);\n\n//# sourceURL=webpack:///./views/cards.js?");

/***/ }),

/***/ "./views/modal.js":
/*!************************!*\
  !*** ./views/modal.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ModalUI = /*#__PURE__*/function () {\n  function ModalUI() {\n    _classCallCheck(this, ModalUI);\n\n    this.overlay = document.querySelector('.popup-overlay');\n    this.popup = document.querySelector('.popup__wrapper');\n  }\n\n  _createClass(ModalUI, [{\n    key: \"renderModal\",\n    value: function renderModal(status, button) {\n      this.clearModal();\n      var text = this.renderLetters(status);\n      var fragment = '';\n      var template = ModalUI.modalTemplate(status, text, button);\n      fragment += template;\n      this.popup.insertAdjacentHTML('afterbegin', fragment);\n    }\n  }, {\n    key: \"renderLetters\",\n    value: function renderLetters(text) {\n      var statusLetters = text.split('');\n      var fragment = '';\n      statusLetters.forEach(function (letter) {\n        var template = ModalUI.lettersTemplate(letter);\n        fragment += template;\n      });\n      return fragment;\n    }\n  }, {\n    key: \"clearModal\",\n    value: function clearModal() {\n      this.popup.innerHTML = '';\n    }\n  }, {\n    key: \"openModal\",\n    value: function openModal(status) {\n      if (!this.overlay || !this.popup) {\n        return;\n      }\n\n      this.overlay.style.opacity = '1';\n\n      if (status === 'success') {\n        this.renderModal('Win', 'Play again');\n      } else {\n        this.renderModal('Lose', 'Try again');\n      }\n\n      this.popup.style.transform = 'scale(1)';\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal() {\n      this.overlay.style.opacity = '0';\n      this.popup.style.transform = 'scale(0)';\n    }\n  }, {\n    key: \"popupContainer\",\n    get: function get() {\n      return this.popup;\n    }\n  }], [{\n    key: \"lettersTemplate\",\n    value: function lettersTemplate(letter) {\n      return \"\\n    <span>\".concat(letter, \"</span>\\n    \");\n    }\n  }, {\n    key: \"modalTemplate\",\n    value: function modalTemplate(status, text, buttonText) {\n      return \"\\n    <div class=\\\"popup\\\">\\n      <div class=\\\"popup__text\\\">\\n        \".concat(text, \"\\n      </div>\\n      <div class=\\\"popup__btn\\\">\\n        <button id=\\\"play\\\" class=\\\"button--\").concat(status, \"\\\">\").concat(buttonText, \"</button>\\n      </div>\\n    </div>\\n    \");\n    }\n  }]);\n\n  return ModalUI;\n}();\n\nvar modalUI = new ModalUI();\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalUI);\n\n//# sourceURL=webpack:///./views/modal.js?");

/***/ })

/******/ });