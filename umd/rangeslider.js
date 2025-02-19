(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactRangeslider"] = factory(require("react"));
	else
		root["ReactRangeslider"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Rangeslider = __webpack_require__(2);

	var _Rangeslider2 = _interopRequireDefault(_Rangeslider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Rangeslider2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _resizeObserverPolyfill = __webpack_require__(16);

	var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

	var _utils = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-debugger: "warn" */


	/**
	 * Predefined constants
	 * @type {Object}
	 */
	var constants = {
	  orientation: {
	    horizontal: {
	      dimension: 'width',
	      direction: 'left',
	      reverseDirection: 'right',
	      coordinate: 'x'
	    },
	    vertical: {
	      dimension: 'height',
	      direction: 'top',
	      reverseDirection: 'bottom',
	      coordinate: 'y'
	    }
	  }
	};

	var Slider = function (_Component) {
	  _inherits(Slider, _Component);

	  function Slider(props, context) {
	    _classCallCheck(this, Slider);

	    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));

	    _this.handleFormat = function (value) {
	      var format = _this.props.format;

	      return format ? format(value) : value;
	    };

	    _this.handleUpdate = function () {
	      if (!_this.slider) {
	        // for shallow rendering
	        return;
	      }
	      var orientation = _this.props.orientation;

	      var dimension = (0, _utils.capitalize)(constants.orientation[orientation].dimension);
	      var sliderPos = _this.slider['offset' + dimension];
	      var handlePos = _this.handle['offset' + dimension];

	      _this.setState({
	        limit: sliderPos - handlePos,
	        grab: handlePos / 2
	      });
	    };

	    _this.handleStart = function (e) {
	      var onChangeStart = _this.props.onChangeStart;

	      document.addEventListener('mousemove', _this.handleDrag);
	      document.addEventListener('mouseup', _this.handleEnd);
	      _this.setState({
	        active: true
	      }, function () {
	        onChangeStart && onChangeStart(e);
	      });
	    };

	    _this.handleDrag = function (e) {
	      e.stopPropagation();
	      var onChange = _this.props.onChange;
	      var _e$target = e.target,
	          className = _e$target.className,
	          classList = _e$target.classList,
	          dataset = _e$target.dataset;

	      if (!onChange || className === 'rangeslider__labels') return;

	      var value = _this.position(e);

	      if (classList && classList.contains('rangeslider__label-item') && dataset.value) {
	        value = parseFloat(dataset.value);
	      }

	      onChange && onChange(value, e);
	    };

	    _this.handleEnd = function (e) {
	      var onChangeComplete = _this.props.onChangeComplete;

	      _this.setState({
	        active: false
	      }, function () {
	        onChangeComplete && onChangeComplete(e);
	      });
	      document.removeEventListener('mousemove', _this.handleDrag);
	      document.removeEventListener('mouseup', _this.handleEnd);
	    };

	    _this.handleKeyDown = function (e) {
	      e.preventDefault();
	      var keyCode = e.keyCode;
	      var _this$props = _this.props,
	          value = _this$props.value,
	          min = _this$props.min,
	          max = _this$props.max,
	          step = _this$props.step,
	          onChange = _this$props.onChange;

	      var sliderValue = void 0;

	      switch (keyCode) {
	        case 38:
	        case 39:
	          sliderValue = value + step > max ? max : value + step;
	          onChange && onChange(sliderValue, e);
	          break;
	        case 37:
	        case 40:
	          sliderValue = value - step < min ? min : value - step;
	          onChange && onChange(sliderValue, e);
	          break;
	      }
	    };

	    _this.getPositionFromValue = function (value) {
	      var limit = _this.state.limit;
	      var _this$props2 = _this.props,
	          min = _this$props2.min,
	          max = _this$props2.max;

	      var diffMaxMin = max - min;
	      var diffValMin = value - min;
	      var percentage = diffValMin / diffMaxMin;
	      var pos = Math.round(percentage * limit);

	      return pos;
	    };

	    _this.getValueFromPosition = function (pos) {
	      var limit = _this.state.limit;
	      var _this$props3 = _this.props,
	          orientation = _this$props3.orientation,
	          min = _this$props3.min,
	          max = _this$props3.max,
	          step = _this$props3.step;

	      var percentage = (0, _utils.clamp)(pos, 0, limit) / (limit || 1);
	      var baseVal = step * Math.round(percentage * (max - min) / step);
	      var value = orientation === 'horizontal' ? baseVal + min : max - baseVal;

	      return (0, _utils.clamp)(value, min, max);
	    };

	    _this.position = function (e) {
	      var grab = _this.state.grab;
	      var _this$props4 = _this.props,
	          orientation = _this$props4.orientation,
	          reverse = _this$props4.reverse;


	      var node = _this.slider;
	      var coordinateStyle = constants.orientation[orientation].coordinate;
	      var directionStyle = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
	      var clientCoordinateStyle = 'client' + (0, _utils.capitalize)(coordinateStyle);
	      var coordinate = !e.touches ? e[clientCoordinateStyle] : e.touches[0][clientCoordinateStyle];
	      var direction = node.getBoundingClientRect()[directionStyle];
	      var pos = reverse ? direction - coordinate - grab : coordinate - direction - grab;
	      var value = _this.getValueFromPosition(pos);

	      return value;
	    };

	    _this.coordinates = function (pos) {
	      var _this$state = _this.state,
	          limit = _this$state.limit,
	          grab = _this$state.grab;
	      var orientation = _this.props.orientation;

	      var value = _this.getValueFromPosition(pos);
	      var position = _this.getPositionFromValue(value);
	      var handlePos = orientation === 'horizontal' ? position + grab : position;
	      var fillPos = orientation === 'horizontal' ? handlePos : limit - handlePos;

	      return {
	        fill: fillPos,
	        handle: handlePos,
	        label: handlePos
	      };
	    };

	    _this.renderLabels = function (labels) {
	      return _react2.default.createElement(
	        'ul',
	        {
	          ref: function ref(sl) {
	            _this.labels = sl;
	          },
	          className: (0, _classnames2.default)('rangeslider__labels')
	        },
	        labels
	      );
	    };

	    _this.state = {
	      active: false,
	      limit: 0,
	      grab: 0
	    };
	    return _this;
	  }

	  _createClass(Slider, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleUpdate();
	      var resizeObserver = new _resizeObserverPolyfill2.default(this.handleUpdate);
	      resizeObserver.observe(this.slider);
	    }

	    /**
	     * Format label/tooltip value
	     * @param  {Number} - value
	     * @return {Formatted Number}
	     */


	    /**
	     * Update slider state on change
	     * @return {void}
	     */


	    /**
	     * Attach event listeners to mousemove/mouseup events
	     * @return {void}
	     */


	    /**
	     * Handle drag/mousemove event
	     * @param  {Object} e - Event object
	     * @return {void}
	     */


	    /**
	     * Detach event listeners to mousemove/mouseup events
	     * @return {void}
	     */


	    /**
	     * Support for key events on the slider handle
	     * @param  {Object} e - Event object
	     * @return {void}
	     */


	    /**
	     * Calculate position of slider based on its value
	     * @param  {number} value - Current value of slider
	     * @return {position} pos - Calculated position of slider based on value
	     */


	    /**
	     * Translate position of slider to slider value
	     * @param  {number} pos - Current position/coordinates of slider
	     * @return {number} value - Slider value
	     */


	    /**
	     * Calculate position of slider based on value
	     * @param  {Object} e - Event object
	     * @return {number} value - Slider value
	     */


	    /**
	     * Grab coordinates of slider
	     * @param  {Object} pos - Position object
	     * @return {Object} - Slider fill/handle coordinates
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          value = _props.value,
	          orientation = _props.orientation,
	          className = _props.className,
	          tooltip = _props.tooltip,
	          reverse = _props.reverse,
	          labels = _props.labels,
	          min = _props.min,
	          max = _props.max,
	          handleLabel = _props.handleLabel;
	      var active = this.state.active;

	      var dimension = constants.orientation[orientation].dimension;
	      var direction = reverse ? constants.orientation[orientation].reverseDirection : constants.orientation[orientation].direction;
	      var position = this.getPositionFromValue(value);
	      var coords = this.coordinates(position);
	      var fillStyle = _defineProperty({}, dimension, coords.fill + 'px');
	      var handleStyle = _defineProperty({}, direction, coords.handle + 'px');
	      var showTooltip = tooltip && active;

	      var labelItems = [];
	      var labelKeys = Object.keys(labels);

	      if (labelKeys.length > 0) {
	        labelKeys = labelKeys.sort(function (a, b) {
	          return reverse ? a - b : b - a;
	        });

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = labelKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;

	            var labelPosition = this.getPositionFromValue(key);
	            var labelCoords = this.coordinates(labelPosition);
	            var labelStyle = _defineProperty({}, direction, labelCoords.label + 'px');

	            labelItems.push(_react2.default.createElement(
	              'li',
	              {
	                key: key,
	                className: (0, _classnames2.default)('rangeslider__label-item'),
	                'data-value': key,
	                onMouseDown: this.handleDrag,
	                onTouchStart: this.handleStart,
	                onTouchEnd: this.handleEnd,
	                style: labelStyle
	              },
	              this.props.labels[key]
	            ));
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }

	      return _react2.default.createElement(
	        'div',
	        {
	          ref: function ref(s) {
	            _this2.slider = s;
	          },
	          className: (0, _classnames2.default)('rangeslider', 'rangeslider-' + orientation, { 'rangeslider-reverse': reverse }, className),
	          onMouseDown: this.handleDrag,
	          onMouseUp: this.handleEnd,
	          onTouchStart: this.handleStart,
	          onTouchEnd: this.handleEnd,
	          'aria-valuemin': min,
	          'aria-valuemax': max,
	          'aria-valuenow': value,
	          'aria-orientation': orientation
	        },
	        _react2.default.createElement('div', { className: 'rangeslider__fill', style: fillStyle }),
	        _react2.default.createElement(
	          'div',
	          {
	            ref: function ref(sh) {
	              _this2.handle = sh;
	            },
	            className: 'rangeslider__handle',
	            onMouseDown: this.handleStart,
	            onTouchMove: this.handleDrag,
	            onTouchEnd: this.handleEnd,
	            onKeyDown: this.handleKeyDown,
	            style: handleStyle,
	            tabIndex: 0
	          },
	          showTooltip ? _react2.default.createElement(
	            'div',
	            {
	              ref: function ref(st) {
	                _this2.tooltip = st;
	              },
	              className: 'rangeslider__handle-tooltip'
	            },
	            _react2.default.createElement(
	              'span',
	              null,
	              this.handleFormat(value)
	            )
	          ) : null,
	          _react2.default.createElement(
	            'div',
	            { className: 'rangeslider__handle-label' },
	            handleLabel
	          )
	        ),
	        labels ? this.renderLabels(labelItems) : null
	      );
	    }
	  }]);

	  return Slider;
	}(_react.Component);

	Slider.propTypes = {
	  min: _propTypes2.default.number,
	  max: _propTypes2.default.number,
	  step: _propTypes2.default.number,
	  value: _propTypes2.default.number,
	  orientation: _propTypes2.default.string,
	  tooltip: _propTypes2.default.bool,
	  reverse: _propTypes2.default.bool,
	  labels: _propTypes2.default.object,
	  handleLabel: _propTypes2.default.string,
	  format: _propTypes2.default.func,
	  onChangeStart: _propTypes2.default.func,
	  onChange: _propTypes2.default.func,
	  onChangeComplete: _propTypes2.default.func
	};
	Slider.defaultProps = {
	  min: 0,
	  max: 100,
	  step: 1,
	  value: 0,
	  orientation: 'horizontal',
	  tooltip: true,
	  reverse: false,
	  labels: {},
	  handleLabel: ''
	};
	exports.default = Slider;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2018 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString === Object.prototype.toString) {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					} else {
						classes.push(arg.toString());
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = __webpack_require__(7);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(10)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(15)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(8);
	} else {
	  module.exports = __webpack_require__(9);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
	exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
	exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(7);
	var assign = __webpack_require__(11);

	var ReactPropTypesSecret = __webpack_require__(12);
	var has = __webpack_require__(13);
	var checkPropTypes = __webpack_require__(14);

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(12);
	  var loggedTypeFailures = {};
	  var has = __webpack_require__(13);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(12);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ResizeObserver = factory());
	}(this, (function () { 'use strict';

	    /**
	     * A collection of shims that provide minimal functionality of the ES6 collections.
	     *
	     * These implementations are not meant to be used outside of the ResizeObserver
	     * modules as they cover only a limited range of use cases.
	     */
	    /* eslint-disable require-jsdoc, valid-jsdoc */
	    var MapShim = (function () {
	        if (typeof Map !== 'undefined') {
	            return Map;
	        }
	        /**
	         * Returns index in provided array that matches the specified key.
	         *
	         * @param {Array<Array>} arr
	         * @param {*} key
	         * @returns {number}
	         */
	        function getIndex(arr, key) {
	            var result = -1;
	            arr.some(function (entry, index) {
	                if (entry[0] === key) {
	                    result = index;
	                    return true;
	                }
	                return false;
	            });
	            return result;
	        }
	        return /** @class */ (function () {
	            function class_1() {
	                this.__entries__ = [];
	            }
	            Object.defineProperty(class_1.prototype, "size", {
	                /**
	                 * @returns {boolean}
	                 */
	                get: function () {
	                    return this.__entries__.length;
	                },
	                enumerable: true,
	                configurable: true
	            });
	            /**
	             * @param {*} key
	             * @returns {*}
	             */
	            class_1.prototype.get = function (key) {
	                var index = getIndex(this.__entries__, key);
	                var entry = this.__entries__[index];
	                return entry && entry[1];
	            };
	            /**
	             * @param {*} key
	             * @param {*} value
	             * @returns {void}
	             */
	            class_1.prototype.set = function (key, value) {
	                var index = getIndex(this.__entries__, key);
	                if (~index) {
	                    this.__entries__[index][1] = value;
	                }
	                else {
	                    this.__entries__.push([key, value]);
	                }
	            };
	            /**
	             * @param {*} key
	             * @returns {void}
	             */
	            class_1.prototype.delete = function (key) {
	                var entries = this.__entries__;
	                var index = getIndex(entries, key);
	                if (~index) {
	                    entries.splice(index, 1);
	                }
	            };
	            /**
	             * @param {*} key
	             * @returns {void}
	             */
	            class_1.prototype.has = function (key) {
	                return !!~getIndex(this.__entries__, key);
	            };
	            /**
	             * @returns {void}
	             */
	            class_1.prototype.clear = function () {
	                this.__entries__.splice(0);
	            };
	            /**
	             * @param {Function} callback
	             * @param {*} [ctx=null]
	             * @returns {void}
	             */
	            class_1.prototype.forEach = function (callback, ctx) {
	                if (ctx === void 0) { ctx = null; }
	                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
	                    var entry = _a[_i];
	                    callback.call(ctx, entry[1], entry[0]);
	                }
	            };
	            return class_1;
	        }());
	    })();

	    /**
	     * Detects whether window and document objects are available in current environment.
	     */
	    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

	    // Returns global object of a current environment.
	    var global$1 = (function () {
	        if (typeof global !== 'undefined' && global.Math === Math) {
	            return global;
	        }
	        if (typeof self !== 'undefined' && self.Math === Math) {
	            return self;
	        }
	        if (typeof window !== 'undefined' && window.Math === Math) {
	            return window;
	        }
	        // eslint-disable-next-line no-new-func
	        return Function('return this')();
	    })();

	    /**
	     * A shim for the requestAnimationFrame which falls back to the setTimeout if
	     * first one is not supported.
	     *
	     * @returns {number} Requests' identifier.
	     */
	    var requestAnimationFrame$1 = (function () {
	        if (typeof requestAnimationFrame === 'function') {
	            // It's required to use a bounded function because IE sometimes throws
	            // an "Invalid calling object" error if rAF is invoked without the global
	            // object on the left hand side.
	            return requestAnimationFrame.bind(global$1);
	        }
	        return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
	    })();

	    // Defines minimum timeout before adding a trailing call.
	    var trailingTimeout = 2;
	    /**
	     * Creates a wrapper function which ensures that provided callback will be
	     * invoked only once during the specified delay period.
	     *
	     * @param {Function} callback - Function to be invoked after the delay period.
	     * @param {number} delay - Delay after which to invoke callback.
	     * @returns {Function}
	     */
	    function throttle (callback, delay) {
	        var leadingCall = false, trailingCall = false, lastCallTime = 0;
	        /**
	         * Invokes the original callback function and schedules new invocation if
	         * the "proxy" was called during current request.
	         *
	         * @returns {void}
	         */
	        function resolvePending() {
	            if (leadingCall) {
	                leadingCall = false;
	                callback();
	            }
	            if (trailingCall) {
	                proxy();
	            }
	        }
	        /**
	         * Callback invoked after the specified delay. It will further postpone
	         * invocation of the original function delegating it to the
	         * requestAnimationFrame.
	         *
	         * @returns {void}
	         */
	        function timeoutCallback() {
	            requestAnimationFrame$1(resolvePending);
	        }
	        /**
	         * Schedules invocation of the original function.
	         *
	         * @returns {void}
	         */
	        function proxy() {
	            var timeStamp = Date.now();
	            if (leadingCall) {
	                // Reject immediately following calls.
	                if (timeStamp - lastCallTime < trailingTimeout) {
	                    return;
	                }
	                // Schedule new call to be in invoked when the pending one is resolved.
	                // This is important for "transitions" which never actually start
	                // immediately so there is a chance that we might miss one if change
	                // happens amids the pending invocation.
	                trailingCall = true;
	            }
	            else {
	                leadingCall = true;
	                trailingCall = false;
	                setTimeout(timeoutCallback, delay);
	            }
	            lastCallTime = timeStamp;
	        }
	        return proxy;
	    }

	    // Minimum delay before invoking the update of observers.
	    var REFRESH_DELAY = 20;
	    // A list of substrings of CSS properties used to find transition events that
	    // might affect dimensions of observed elements.
	    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
	    // Check if MutationObserver is available.
	    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
	    /**
	     * Singleton controller class which handles updates of ResizeObserver instances.
	     */
	    var ResizeObserverController = /** @class */ (function () {
	        /**
	         * Creates a new instance of ResizeObserverController.
	         *
	         * @private
	         */
	        function ResizeObserverController() {
	            /**
	             * Indicates whether DOM listeners have been added.
	             *
	             * @private {boolean}
	             */
	            this.connected_ = false;
	            /**
	             * Tells that controller has subscribed for Mutation Events.
	             *
	             * @private {boolean}
	             */
	            this.mutationEventsAdded_ = false;
	            /**
	             * Keeps reference to the instance of MutationObserver.
	             *
	             * @private {MutationObserver}
	             */
	            this.mutationsObserver_ = null;
	            /**
	             * A list of connected observers.
	             *
	             * @private {Array<ResizeObserverSPI>}
	             */
	            this.observers_ = [];
	            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
	            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
	        }
	        /**
	         * Adds observer to observers list.
	         *
	         * @param {ResizeObserverSPI} observer - Observer to be added.
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.addObserver = function (observer) {
	            if (!~this.observers_.indexOf(observer)) {
	                this.observers_.push(observer);
	            }
	            // Add listeners if they haven't been added yet.
	            if (!this.connected_) {
	                this.connect_();
	            }
	        };
	        /**
	         * Removes observer from observers list.
	         *
	         * @param {ResizeObserverSPI} observer - Observer to be removed.
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.removeObserver = function (observer) {
	            var observers = this.observers_;
	            var index = observers.indexOf(observer);
	            // Remove observer if it's present in registry.
	            if (~index) {
	                observers.splice(index, 1);
	            }
	            // Remove listeners if controller has no connected observers.
	            if (!observers.length && this.connected_) {
	                this.disconnect_();
	            }
	        };
	        /**
	         * Invokes the update of observers. It will continue running updates insofar
	         * it detects changes.
	         *
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.refresh = function () {
	            var changesDetected = this.updateObservers_();
	            // Continue running updates if changes have been detected as there might
	            // be future ones caused by CSS transitions.
	            if (changesDetected) {
	                this.refresh();
	            }
	        };
	        /**
	         * Updates every observer from observers list and notifies them of queued
	         * entries.
	         *
	         * @private
	         * @returns {boolean} Returns "true" if any observer has detected changes in
	         *      dimensions of it's elements.
	         */
	        ResizeObserverController.prototype.updateObservers_ = function () {
	            // Collect observers that have active observations.
	            var activeObservers = this.observers_.filter(function (observer) {
	                return observer.gatherActive(), observer.hasActive();
	            });
	            // Deliver notifications in a separate cycle in order to avoid any
	            // collisions between observers, e.g. when multiple instances of
	            // ResizeObserver are tracking the same element and the callback of one
	            // of them changes content dimensions of the observed target. Sometimes
	            // this may result in notifications being blocked for the rest of observers.
	            activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
	            return activeObservers.length > 0;
	        };
	        /**
	         * Initializes DOM listeners.
	         *
	         * @private
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.connect_ = function () {
	            // Do nothing if running in a non-browser environment or if listeners
	            // have been already added.
	            if (!isBrowser || this.connected_) {
	                return;
	            }
	            // Subscription to the "Transitionend" event is used as a workaround for
	            // delayed transitions. This way it's possible to capture at least the
	            // final state of an element.
	            document.addEventListener('transitionend', this.onTransitionEnd_);
	            window.addEventListener('resize', this.refresh);
	            if (mutationObserverSupported) {
	                this.mutationsObserver_ = new MutationObserver(this.refresh);
	                this.mutationsObserver_.observe(document, {
	                    attributes: true,
	                    childList: true,
	                    characterData: true,
	                    subtree: true
	                });
	            }
	            else {
	                document.addEventListener('DOMSubtreeModified', this.refresh);
	                this.mutationEventsAdded_ = true;
	            }
	            this.connected_ = true;
	        };
	        /**
	         * Removes DOM listeners.
	         *
	         * @private
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.disconnect_ = function () {
	            // Do nothing if running in a non-browser environment or if listeners
	            // have been already removed.
	            if (!isBrowser || !this.connected_) {
	                return;
	            }
	            document.removeEventListener('transitionend', this.onTransitionEnd_);
	            window.removeEventListener('resize', this.refresh);
	            if (this.mutationsObserver_) {
	                this.mutationsObserver_.disconnect();
	            }
	            if (this.mutationEventsAdded_) {
	                document.removeEventListener('DOMSubtreeModified', this.refresh);
	            }
	            this.mutationsObserver_ = null;
	            this.mutationEventsAdded_ = false;
	            this.connected_ = false;
	        };
	        /**
	         * "Transitionend" event handler.
	         *
	         * @private
	         * @param {TransitionEvent} event
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
	            var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
	            // Detect whether transition may affect dimensions of an element.
	            var isReflowProperty = transitionKeys.some(function (key) {
	                return !!~propertyName.indexOf(key);
	            });
	            if (isReflowProperty) {
	                this.refresh();
	            }
	        };
	        /**
	         * Returns instance of the ResizeObserverController.
	         *
	         * @returns {ResizeObserverController}
	         */
	        ResizeObserverController.getInstance = function () {
	            if (!this.instance_) {
	                this.instance_ = new ResizeObserverController();
	            }
	            return this.instance_;
	        };
	        /**
	         * Holds reference to the controller's instance.
	         *
	         * @private {ResizeObserverController}
	         */
	        ResizeObserverController.instance_ = null;
	        return ResizeObserverController;
	    }());

	    /**
	     * Defines non-writable/enumerable properties of the provided target object.
	     *
	     * @param {Object} target - Object for which to define properties.
	     * @param {Object} props - Properties to be defined.
	     * @returns {Object} Target object.
	     */
	    var defineConfigurable = (function (target, props) {
	        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
	            var key = _a[_i];
	            Object.defineProperty(target, key, {
	                value: props[key],
	                enumerable: false,
	                writable: false,
	                configurable: true
	            });
	        }
	        return target;
	    });

	    /**
	     * Returns the global object associated with provided element.
	     *
	     * @param {Object} target
	     * @returns {Object}
	     */
	    var getWindowOf = (function (target) {
	        // Assume that the element is an instance of Node, which means that it
	        // has the "ownerDocument" property from which we can retrieve a
	        // corresponding global object.
	        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
	        // Return the local global object if it's not possible extract one from
	        // provided element.
	        return ownerGlobal || global$1;
	    });

	    // Placeholder of an empty content rectangle.
	    var emptyRect = createRectInit(0, 0, 0, 0);
	    /**
	     * Converts provided string to a number.
	     *
	     * @param {number|string} value
	     * @returns {number}
	     */
	    function toFloat(value) {
	        return parseFloat(value) || 0;
	    }
	    /**
	     * Extracts borders size from provided styles.
	     *
	     * @param {CSSStyleDeclaration} styles
	     * @param {...string} positions - Borders positions (top, right, ...)
	     * @returns {number}
	     */
	    function getBordersSize(styles) {
	        var positions = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            positions[_i - 1] = arguments[_i];
	        }
	        return positions.reduce(function (size, position) {
	            var value = styles['border-' + position + '-width'];
	            return size + toFloat(value);
	        }, 0);
	    }
	    /**
	     * Extracts paddings sizes from provided styles.
	     *
	     * @param {CSSStyleDeclaration} styles
	     * @returns {Object} Paddings box.
	     */
	    function getPaddings(styles) {
	        var positions = ['top', 'right', 'bottom', 'left'];
	        var paddings = {};
	        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
	            var position = positions_1[_i];
	            var value = styles['padding-' + position];
	            paddings[position] = toFloat(value);
	        }
	        return paddings;
	    }
	    /**
	     * Calculates content rectangle of provided SVG element.
	     *
	     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
	     *      to be calculated.
	     * @returns {DOMRectInit}
	     */
	    function getSVGContentRect(target) {
	        var bbox = target.getBBox();
	        return createRectInit(0, 0, bbox.width, bbox.height);
	    }
	    /**
	     * Calculates content rectangle of provided HTMLElement.
	     *
	     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
	     * @returns {DOMRectInit}
	     */
	    function getHTMLElementContentRect(target) {
	        // Client width & height properties can't be
	        // used exclusively as they provide rounded values.
	        var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
	        // By this condition we can catch all non-replaced inline, hidden and
	        // detached elements. Though elements with width & height properties less
	        // than 0.5 will be discarded as well.
	        //
	        // Without it we would need to implement separate methods for each of
	        // those cases and it's not possible to perform a precise and performance
	        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
	        // gives wrong results for elements with width & height less than 0.5.
	        if (!clientWidth && !clientHeight) {
	            return emptyRect;
	        }
	        var styles = getWindowOf(target).getComputedStyle(target);
	        var paddings = getPaddings(styles);
	        var horizPad = paddings.left + paddings.right;
	        var vertPad = paddings.top + paddings.bottom;
	        // Computed styles of width & height are being used because they are the
	        // only dimensions available to JS that contain non-rounded values. It could
	        // be possible to utilize the getBoundingClientRect if only it's data wasn't
	        // affected by CSS transformations let alone paddings, borders and scroll bars.
	        var width = toFloat(styles.width), height = toFloat(styles.height);
	        // Width & height include paddings and borders when the 'border-box' box
	        // model is applied (except for IE).
	        if (styles.boxSizing === 'border-box') {
	            // Following conditions are required to handle Internet Explorer which
	            // doesn't include paddings and borders to computed CSS dimensions.
	            //
	            // We can say that if CSS dimensions + paddings are equal to the "client"
	            // properties then it's either IE, and thus we don't need to subtract
	            // anything, or an element merely doesn't have paddings/borders styles.
	            if (Math.round(width + horizPad) !== clientWidth) {
	                width -= getBordersSize(styles, 'left', 'right') + horizPad;
	            }
	            if (Math.round(height + vertPad) !== clientHeight) {
	                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
	            }
	        }
	        // Following steps can't be applied to the document's root element as its
	        // client[Width/Height] properties represent viewport area of the window.
	        // Besides, it's as well not necessary as the <html> itself neither has
	        // rendered scroll bars nor it can be clipped.
	        if (!isDocumentElement(target)) {
	            // In some browsers (only in Firefox, actually) CSS width & height
	            // include scroll bars size which can be removed at this step as scroll
	            // bars are the only difference between rounded dimensions + paddings
	            // and "client" properties, though that is not always true in Chrome.
	            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
	            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
	            // Chrome has a rather weird rounding of "client" properties.
	            // E.g. for an element with content width of 314.2px it sometimes gives
	            // the client width of 315px and for the width of 314.7px it may give
	            // 314px. And it doesn't happen all the time. So just ignore this delta
	            // as a non-relevant.
	            if (Math.abs(vertScrollbar) !== 1) {
	                width -= vertScrollbar;
	            }
	            if (Math.abs(horizScrollbar) !== 1) {
	                height -= horizScrollbar;
	            }
	        }
	        return createRectInit(paddings.left, paddings.top, width, height);
	    }
	    /**
	     * Checks whether provided element is an instance of the SVGGraphicsElement.
	     *
	     * @param {Element} target - Element to be checked.
	     * @returns {boolean}
	     */
	    var isSVGGraphicsElement = (function () {
	        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
	        // interface.
	        if (typeof SVGGraphicsElement !== 'undefined') {
	            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
	        }
	        // If it's so, then check that element is at least an instance of the
	        // SVGElement and that it has the "getBBox" method.
	        // eslint-disable-next-line no-extra-parens
	        return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
	            typeof target.getBBox === 'function'); };
	    })();
	    /**
	     * Checks whether provided element is a document element (<html>).
	     *
	     * @param {Element} target - Element to be checked.
	     * @returns {boolean}
	     */
	    function isDocumentElement(target) {
	        return target === getWindowOf(target).document.documentElement;
	    }
	    /**
	     * Calculates an appropriate content rectangle for provided html or svg element.
	     *
	     * @param {Element} target - Element content rectangle of which needs to be calculated.
	     * @returns {DOMRectInit}
	     */
	    function getContentRect(target) {
	        if (!isBrowser) {
	            return emptyRect;
	        }
	        if (isSVGGraphicsElement(target)) {
	            return getSVGContentRect(target);
	        }
	        return getHTMLElementContentRect(target);
	    }
	    /**
	     * Creates rectangle with an interface of the DOMRectReadOnly.
	     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
	     *
	     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
	     * @returns {DOMRectReadOnly}
	     */
	    function createReadOnlyRect(_a) {
	        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
	        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
	        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
	        var rect = Object.create(Constr.prototype);
	        // Rectangle's properties are not writable and non-enumerable.
	        defineConfigurable(rect, {
	            x: x, y: y, width: width, height: height,
	            top: y,
	            right: x + width,
	            bottom: height + y,
	            left: x
	        });
	        return rect;
	    }
	    /**
	     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
	     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
	     *
	     * @param {number} x - X coordinate.
	     * @param {number} y - Y coordinate.
	     * @param {number} width - Rectangle's width.
	     * @param {number} height - Rectangle's height.
	     * @returns {DOMRectInit}
	     */
	    function createRectInit(x, y, width, height) {
	        return { x: x, y: y, width: width, height: height };
	    }

	    /**
	     * Class that is responsible for computations of the content rectangle of
	     * provided DOM element and for keeping track of it's changes.
	     */
	    var ResizeObservation = /** @class */ (function () {
	        /**
	         * Creates an instance of ResizeObservation.
	         *
	         * @param {Element} target - Element to be observed.
	         */
	        function ResizeObservation(target) {
	            /**
	             * Broadcasted width of content rectangle.
	             *
	             * @type {number}
	             */
	            this.broadcastWidth = 0;
	            /**
	             * Broadcasted height of content rectangle.
	             *
	             * @type {number}
	             */
	            this.broadcastHeight = 0;
	            /**
	             * Reference to the last observed content rectangle.
	             *
	             * @private {DOMRectInit}
	             */
	            this.contentRect_ = createRectInit(0, 0, 0, 0);
	            this.target = target;
	        }
	        /**
	         * Updates content rectangle and tells whether it's width or height properties
	         * have changed since the last broadcast.
	         *
	         * @returns {boolean}
	         */
	        ResizeObservation.prototype.isActive = function () {
	            var rect = getContentRect(this.target);
	            this.contentRect_ = rect;
	            return (rect.width !== this.broadcastWidth ||
	                rect.height !== this.broadcastHeight);
	        };
	        /**
	         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
	         * from the corresponding properties of the last observed content rectangle.
	         *
	         * @returns {DOMRectInit} Last observed content rectangle.
	         */
	        ResizeObservation.prototype.broadcastRect = function () {
	            var rect = this.contentRect_;
	            this.broadcastWidth = rect.width;
	            this.broadcastHeight = rect.height;
	            return rect;
	        };
	        return ResizeObservation;
	    }());

	    var ResizeObserverEntry = /** @class */ (function () {
	        /**
	         * Creates an instance of ResizeObserverEntry.
	         *
	         * @param {Element} target - Element that is being observed.
	         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
	         */
	        function ResizeObserverEntry(target, rectInit) {
	            var contentRect = createReadOnlyRect(rectInit);
	            // According to the specification following properties are not writable
	            // and are also not enumerable in the native implementation.
	            //
	            // Property accessors are not being used as they'd require to define a
	            // private WeakMap storage which may cause memory leaks in browsers that
	            // don't support this type of collections.
	            defineConfigurable(this, { target: target, contentRect: contentRect });
	        }
	        return ResizeObserverEntry;
	    }());

	    var ResizeObserverSPI = /** @class */ (function () {
	        /**
	         * Creates a new instance of ResizeObserver.
	         *
	         * @param {ResizeObserverCallback} callback - Callback function that is invoked
	         *      when one of the observed elements changes it's content dimensions.
	         * @param {ResizeObserverController} controller - Controller instance which
	         *      is responsible for the updates of observer.
	         * @param {ResizeObserver} callbackCtx - Reference to the public
	         *      ResizeObserver instance which will be passed to callback function.
	         */
	        function ResizeObserverSPI(callback, controller, callbackCtx) {
	            /**
	             * Collection of resize observations that have detected changes in dimensions
	             * of elements.
	             *
	             * @private {Array<ResizeObservation>}
	             */
	            this.activeObservations_ = [];
	            /**
	             * Registry of the ResizeObservation instances.
	             *
	             * @private {Map<Element, ResizeObservation>}
	             */
	            this.observations_ = new MapShim();
	            if (typeof callback !== 'function') {
	                throw new TypeError('The callback provided as parameter 1 is not a function.');
	            }
	            this.callback_ = callback;
	            this.controller_ = controller;
	            this.callbackCtx_ = callbackCtx;
	        }
	        /**
	         * Starts observing provided element.
	         *
	         * @param {Element} target - Element to be observed.
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.observe = function (target) {
	            if (!arguments.length) {
	                throw new TypeError('1 argument required, but only 0 present.');
	            }
	            // Do nothing if current environment doesn't have the Element interface.
	            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
	                return;
	            }
	            if (!(target instanceof getWindowOf(target).Element)) {
	                throw new TypeError('parameter 1 is not of type "Element".');
	            }
	            var observations = this.observations_;
	            // Do nothing if element is already being observed.
	            if (observations.has(target)) {
	                return;
	            }
	            observations.set(target, new ResizeObservation(target));
	            this.controller_.addObserver(this);
	            // Force the update of observations.
	            this.controller_.refresh();
	        };
	        /**
	         * Stops observing provided element.
	         *
	         * @param {Element} target - Element to stop observing.
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.unobserve = function (target) {
	            if (!arguments.length) {
	                throw new TypeError('1 argument required, but only 0 present.');
	            }
	            // Do nothing if current environment doesn't have the Element interface.
	            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
	                return;
	            }
	            if (!(target instanceof getWindowOf(target).Element)) {
	                throw new TypeError('parameter 1 is not of type "Element".');
	            }
	            var observations = this.observations_;
	            // Do nothing if element is not being observed.
	            if (!observations.has(target)) {
	                return;
	            }
	            observations.delete(target);
	            if (!observations.size) {
	                this.controller_.removeObserver(this);
	            }
	        };
	        /**
	         * Stops observing all elements.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.disconnect = function () {
	            this.clearActive();
	            this.observations_.clear();
	            this.controller_.removeObserver(this);
	        };
	        /**
	         * Collects observation instances the associated element of which has changed
	         * it's content rectangle.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.gatherActive = function () {
	            var _this = this;
	            this.clearActive();
	            this.observations_.forEach(function (observation) {
	                if (observation.isActive()) {
	                    _this.activeObservations_.push(observation);
	                }
	            });
	        };
	        /**
	         * Invokes initial callback function with a list of ResizeObserverEntry
	         * instances collected from active resize observations.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.broadcastActive = function () {
	            // Do nothing if observer doesn't have active observations.
	            if (!this.hasActive()) {
	                return;
	            }
	            var ctx = this.callbackCtx_;
	            // Create ResizeObserverEntry instance for every active observation.
	            var entries = this.activeObservations_.map(function (observation) {
	                return new ResizeObserverEntry(observation.target, observation.broadcastRect());
	            });
	            this.callback_.call(ctx, entries, ctx);
	            this.clearActive();
	        };
	        /**
	         * Clears the collection of active observations.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.clearActive = function () {
	            this.activeObservations_.splice(0);
	        };
	        /**
	         * Tells whether observer has active observations.
	         *
	         * @returns {boolean}
	         */
	        ResizeObserverSPI.prototype.hasActive = function () {
	            return this.activeObservations_.length > 0;
	        };
	        return ResizeObserverSPI;
	    }());

	    // Registry of internal observers. If WeakMap is not available use current shim
	    // for the Map collection as it has all required methods and because WeakMap
	    // can't be fully polyfilled anyway.
	    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
	    /**
	     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
	     * exposing only those methods and properties that are defined in the spec.
	     */
	    var ResizeObserver = /** @class */ (function () {
	        /**
	         * Creates a new instance of ResizeObserver.
	         *
	         * @param {ResizeObserverCallback} callback - Callback that is invoked when
	         *      dimensions of the observed elements change.
	         */
	        function ResizeObserver(callback) {
	            if (!(this instanceof ResizeObserver)) {
	                throw new TypeError('Cannot call a class as a function.');
	            }
	            if (!arguments.length) {
	                throw new TypeError('1 argument required, but only 0 present.');
	            }
	            var controller = ResizeObserverController.getInstance();
	            var observer = new ResizeObserverSPI(callback, controller, this);
	            observers.set(this, observer);
	        }
	        return ResizeObserver;
	    }());
	    // Expose public methods of ResizeObserver.
	    [
	        'observe',
	        'unobserve',
	        'disconnect'
	    ].forEach(function (method) {
	        ResizeObserver.prototype[method] = function () {
	            var _a;
	            return (_a = observers.get(this))[method].apply(_a, arguments);
	        };
	    });

	    var index = (function () {
	        // Export existing implementation if available.
	        if (typeof global$1.ResizeObserver !== 'undefined') {
	            return global$1.ResizeObserver;
	        }
	        return ResizeObserver;
	    })();

	    return index;

	})));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.capitalize = capitalize;
	exports.clamp = clamp;
	/**
	 * Capitalize first letter of string
	 * @private
	 * @param  {string} - String
	 * @return {string} - String with first letter capitalized
	 */
	function capitalize(str) {
	  return str.charAt(0).toUpperCase() + str.substr(1);
	}

	/**
	 * Clamp position between a range
	 * @param  {number} - Value to be clamped
	 * @param  {number} - Minimum value in range
	 * @param  {number} - Maximum value in range
	 * @return {number} - Clamped value
	 */
	function clamp(value, min, max) {
	  return Math.min(Math.max(value, min), max);
	}

/***/ })
/******/ ])
});
;