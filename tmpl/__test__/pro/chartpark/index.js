//#norequires=true;
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.Chartx = factory());
}(this, function () { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n.default || n;
	}

	var interopRequireDefault = createCommonjsModule(function (module) {
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	}

	module.exports = _interopRequireDefault;
	});

	unwrapExports(interopRequireDefault);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck = _classCallCheck;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass = _createClass;

	function createCommonjsModule$1(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _typeof_1 = createCommonjsModule$1(function (module) {
	function _typeof(obj) {
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var getPrototypeOf = createCommonjsModule$1(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	});

	var setPrototypeOf = createCommonjsModule$1(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	var inherits = _inherits;

	var _ = {};
	var breaker = {};
	var ArrayProto = Array.prototype,
	    ObjProto = Object.prototype;
	 // Create quick reference variables for speed access to core prototypes.

	var push = ArrayProto.push,
	    slice = ArrayProto.slice,
	    concat = ArrayProto.concat,
	    toString = ObjProto.toString,
	    hasOwnProperty = ObjProto.hasOwnProperty; // All **ECMAScript 5** native function implementations that we hope to use
	// are declared here.

	var nativeForEach = ArrayProto.forEach,
	    nativeMap = ArrayProto.map,
	    nativeFilter = ArrayProto.filter,
	    nativeEvery = ArrayProto.every,
	    nativeSome = ArrayProto.some,
	    nativeIndexOf = ArrayProto.indexOf,
	    nativeIsArray = Array.isArray,
	    nativeKeys = Object.keys;

	var shallowProperty = function shallowProperty(key) {
	  return function (obj) {
	    return obj == null ? void 0 : obj[key];
	  };
	};

	var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	var getLength = shallowProperty('length');

	var isArrayLike = function isArrayLike(collection) {
	  var length = getLength(collection);
	  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	};

	_.values = function (obj) {
	  var keys = _.keys(obj);

	  var length = keys.length;
	  var values = new Array(length);

	  for (var i = 0; i < length; i++) {
	    values[i] = obj[keys[i]];
	  }

	  return values;
	};

	_.keys = nativeKeys || function (obj) {
	  if (obj !== Object(obj)) throw new TypeError('Invalid object');
	  var keys = [];

	  for (var key in obj) {
	    if (_.has(obj, key)) keys.push(key);
	  }

	  return keys;
	};

	_.has = function (obj, key) {
	  return hasOwnProperty.call(obj, key);
	};

	var each = _.each = _.forEach = function (obj, iterator, context) {
	  if (obj == null) return;

	  if (nativeForEach && obj.forEach === nativeForEach) {
	    obj.forEach(iterator, context);
	  } else if (obj.length === +obj.length) {
	    for (var i = 0, length = obj.length; i < length; i++) {
	      if (iterator.call(context, obj[i], i, obj) === breaker) return;
	    }
	  } else {
	    var keys = _.keys(obj);

	    for (var i = 0, length = keys.length; i < length; i++) {
	      if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
	    }
	  }
	};

	_.compact = function (array) {
	  return _.filter(array, _.identity);
	};

	_.filter = _.select = function (obj, iterator, context) {
	  var results = [];
	  if (obj == null) return results;
	  if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
	  each(obj, function (value, index, list) {
	    if (iterator.call(context, value, index, list)) results.push(value);
	  });
	  return results;
	};

	each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (name) {
	  _['is' + name] = function (obj) {
	    return toString.call(obj) == '[object ' + name + ']';
	  };
	}); //if (!_.isArguments(arguments)) {

	_.isArguments = function (obj) {
	  return !!(obj && _.has(obj, 'callee'));
	}; //}


	{
	  _.isFunction = function (obj) {
	    return typeof obj === 'function';
	  };
	}

	_.isFinite = function (obj) {
	  return isFinite(obj) && !isNaN(parseFloat(obj));
	};

	_.isNaN = function (obj) {
	  return _.isNumber(obj) && obj != +obj;
	};

	_.isBoolean = function (obj) {
	  return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
	};

	_.isNull = function (obj) {
	  return obj === null;
	};

	_.isEmpty = function (obj) {
	  if (obj == null) return true;
	  if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;

	  for (var key in obj) {
	    if (_.has(obj, key)) return false;
	  }

	  return true;
	};

	_.isElement = function (obj) {
	  return !!(obj && obj.nodeType === 1);
	};

	_.isArray = nativeIsArray || function (obj) {
	  return toString.call(obj) == '[object Array]';
	};

	_.isObject = function (obj) {
	  return obj === Object(obj);
	};

	_.identity = function (value) {
	  return value;
	};

	_.indexOf = function (array, item, isSorted) {
	  if (array == null) return -1;
	  var i = 0,
	      length = array.length;

	  if (isSorted) {
	    if (typeof isSorted == 'number') {
	      i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
	    } else {
	      i = _.sortedIndex(array, item);
	      return array[i] === item ? i : -1;
	    }
	  }

	  if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);

	  for (; i < length; i++) {
	    if (array[i] === item) return i;
	  }

	  return -1;
	};

	_.isWindow = function (obj) {
	  return obj != null && obj == obj.window;
	}; // Internal implementation of a recursive `flatten` function.


	var flatten = function flatten(input, shallow, output) {
	  if (shallow && _.every(input, _.isArray)) {
	    return concat.apply(output, input);
	  }

	  each(input, function (value) {
	    if (_.isArray(value) || _.isArguments(value)) {
	      shallow ? push.apply(output, value) : flatten(value, shallow, output);
	    } else {
	      output.push(value);
	    }
	  });
	  return output;
	}; // Flatten out an array, either recursively (by default), or just one level.


	_.flatten = function (array, shallow) {
	  return flatten(array, shallow, []);
	};

	_.every = _.all = function (obj, iterator, context) {
	  iterator || (iterator = _.identity);
	  var result = true;
	  if (obj == null) return result;
	  if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
	  each(obj, function (value, index, list) {
	    if (!(result = result && iterator.call(context, value, index, list))) return breaker;
	  });
	  return !!result;
	}; // Return the minimum element (or element-based computation).


	_.min = function (obj, iterator, context) {
	  if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	    return Math.min.apply(Math, obj);
	  }

	  if (!iterator && _.isEmpty(obj)) return Infinity;
	  var result = {
	    computed: Infinity,
	    value: Infinity
	  };
	  each(obj, function (value, index, list) {
	    var computed = iterator ? iterator.call(context, value, index, list) : value;
	    computed < result.computed && (result = {
	      value: value,
	      computed: computed
	    });
	  });
	  return result.value;
	}; // Return the maximum element or (element-based computation).
	// Can't optimize arrays of integers longer than 65,535 elements.
	// See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)


	_.max = function (obj, iterator, context) {
	  if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	    return Math.max.apply(Math, obj);
	  }

	  if (!iterator && _.isEmpty(obj)) return -Infinity;
	  var result = {
	    computed: -Infinity,
	    value: -Infinity
	  };
	  each(obj, function (value, index, list) {
	    var computed = iterator ? iterator.call(context, value, index, list) : value;
	    computed > result.computed && (result = {
	      value: value,
	      computed: computed
	    });
	  });
	  return result.value;
	}; // Return the first value which passes a truth test. Aliased as `detect`.


	_.find = _.detect = function (obj, iterator, context) {
	  var result;
	  any(obj, function (value, index, list) {
	    if (iterator.call(context, value, index, list)) {
	      result = value;
	      return true;
	    }
	  });
	  return result;
	}; // Determine if at least one element in the object matches a truth test.
	// Delegates to **ECMAScript 5**'s native `some` if available.
	// Aliased as `any`.


	var any = _.some = _.any = function (obj, iterator, context) {
	  iterator || (iterator = _.identity);
	  var result = false;
	  if (obj == null) return result;
	  if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
	  each(obj, function (value, index, list) {
	    if (result || (result = iterator.call(context, value, index, list))) return breaker;
	  });
	  return !!result;
	}; // Return a version of the array that does not contain the specified value(s).


	_.without = function (array) {
	  return _.difference(array, slice.call(arguments, 1));
	}; // Take the difference between one array and a number of other arrays.
	// Only the elements present in just the first array will remain.


	_.difference = function (array) {
	  var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
	  return _.filter(array, function (value) {
	    return !_.contains(rest, value);
	  });
	}; // Produce a duplicate-free version of the array. If the array has already
	// been sorted, you have the option of using a faster algorithm.
	// Aliased as `unique`.


	_.uniq = _.unique = function (array, isSorted, iterator, context) {
	  if (_.isFunction(isSorted)) {
	    context = iterator;
	    iterator = isSorted;
	    isSorted = false;
	  }

	  var initial = iterator ? _.map(array, iterator, context) : array;
	  var results = [];
	  var seen = [];
	  each(initial, function (value, index) {
	    if (isSorted ? !index || seen[seen.length - 1] !== value : !_.contains(seen, value)) {
	      seen.push(value);
	      results.push(array[index]);
	    }
	  });
	  return results;
	}; // Return the results of applying the iterator to each element.
	// Delegates to **ECMAScript 5**'s native `map` if available.


	_.map = _.collect = function (obj, iterator, context) {
	  var results = [];
	  if (obj == null) return results;
	  if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
	  each(obj, function (value, index, list) {
	    results.push(iterator.call(context, value, index, list));
	  });
	  return results;
	}; // Determine if the array or object contains a given value (using `===`).
	// Aliased as `include`.


	_.contains = _.include = function (obj, target) {
	  if (obj == null) return false;
	  if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
	  return any(obj, function (value) {
	    return value === target;
	  });
	}; // Convenience version of a common use case of `map`: fetching a property.


	_.pluck = function (obj, key) {
	  return _.map(obj, function (value) {
	    return value[key];
	  });
	}; // Return a random integer between min and max (inclusive).


	_.random = function (min, max) {
	  if (max == null) {
	    max = min;
	    min = 0;
	  }

	  return min + Math.floor(Math.random() * (max - min + 1));
	}; // Shuffle a collection.


	_.shuffle = function (obj) {
	  return _.sample(obj, Infinity);
	};

	_.sample = function (obj, n, guard) {
	  if (n == null || guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    return obj[_.random(obj.length - 1)];
	  }

	  var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
	  var length = getLength(sample);
	  n = Math.max(Math.min(n, length), 0);
	  var last = length - 1;

	  for (var index = 0; index < n; index++) {
	    var rand = _.random(index, last);

	    var temp = sample[index];
	    sample[index] = sample[rand];
	    sample[rand] = temp;
	  }

	  return sample.slice(0, n);
	};
	/**
	*
	*如果是深度extend，第一个参数就设置为true
	*/


	_.extend = function () {
	  var options,
	      name,
	      src,
	      copy,
	      target = arguments[0] || {},
	      i = 1,
	      length = arguments.length,
	      deep = false;

	  if (typeof target === "boolean") {
	    deep = target;
	    target = arguments[1] || {};
	    i = 2;
	  }

	  if (_typeof_1(target) !== "object" && !_.isFunction(target)) {
	    target = {};
	  }

	  if (length === i) {
	    target = this;
	    --i;
	  }

	  for (; i < length; i++) {
	    if ((options = arguments[i]) != null) {
	      for (name in options) {
	        src = target[name];
	        copy = options[name];

	        if (target === copy || copy === undefined) {
	          continue;
	        }

	        if (deep && copy && _.isObject(copy) && copy.constructor === Object) {
	          target[name] = _.extend(deep, src, copy);
	        } else {
	          target[name] = copy;
	        }
	      }
	    }
	  }

	  return target;
	};

	_.clone = function (obj) {
	  if (!_.isObject(obj)) return obj;
	  return _.isArray(obj) ? obj.slice() : _.extend(true, {}, obj);
	}; //********补存一些数学常用方法,暂放在这里文件下,后期多了单独成立一个类库  */
	// compute euclidian modulo of m % n
	// https://en.wikipedia.org/wiki/Modulo_operation


	_.euclideanModulo = function (n, m) {
	  return (n % m + m) % m;
	};

	_.DEG2RAD = Math.PI / 180;
	_.RAD2DEG = 180 / Math.PI;

	_.degToRad = function (degrees) {
	  return degrees * _.DEG2RAD;
	};

	_.radToDeg = function (radians) {
	  return radians * _.RAD2DEG;
	};

	var RESOLUTION = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

	var addOrRmoveEventHand = function addOrRmoveEventHand(domHand, ieHand) {
	  if (document[domHand]) {
	    var eventDomFn = function eventDomFn(el, type, fn) {
	      if (el.length) {
	        for (var i = 0; i < el.length; i++) {
	          eventDomFn(el[i], type, fn);
	        }
	      } else {
	        el[domHand](type, fn, false);
	      }
	    };
	    return eventDomFn;
	  } else {
	    var eventFn = function eventFn(el, type, fn) {
	      if (el.length) {
	        for (var i = 0; i < el.length; i++) {
	          eventFn(el[i], type, fn);
	        }
	      } else {
	        el[ieHand]("on" + type, function () {
	          return fn.call(el, window.event);
	        });
	      }
	    };
	    return eventFn;
	  }
	};

	var $ = {
	  // dom操作相关代码
	  query: function query(el) {
	    if (_.isString(el)) {
	      return document.getElementById(el);
	    }

	    if (el.nodeType == 1) {
	      //则为一个element本身
	      return el;
	    }

	    if (el.length) {
	      return el[0];
	    }

	    return null;
	  },
	  offset: function offset(el) {
	    var box = el.getBoundingClientRect(),
	        doc = el.ownerDocument,
	        body = doc.body,
	        docElem = doc.documentElement,
	        // for ie  
	    clientTop = docElem.clientTop || body.clientTop || 0,
	        clientLeft = docElem.clientLeft || body.clientLeft || 0,
	        // In Internet Explorer 7 getBoundingClientRect property is treated as physical, 
	    // while others are logical. Make all logical, like in IE8. 
	    zoom = 1;

	    if (body.getBoundingClientRect) {
	      var bound = body.getBoundingClientRect();
	      zoom = (bound.right - bound.left) / body.clientWidth;
	    }

	    if (zoom > 1) {
	      clientTop = 0;
	      clientLeft = 0;
	    }

	    var top = box.top / zoom + (window.pageYOffset || docElem && docElem.scrollTop / zoom || body.scrollTop / zoom) - clientTop,
	        left = box.left / zoom + (window.pageXOffset || docElem && docElem.scrollLeft / zoom || body.scrollLeft / zoom) - clientLeft;
	    return {
	      top: top,
	      left: left
	    };
	  },
	  addEvent: addOrRmoveEventHand("addEventListener", "attachEvent"),
	  removeEvent: addOrRmoveEventHand("removeEventListener", "detachEvent"),
	  pageX: function pageX(e) {
	    if (e.pageX) return e.pageX;else if (e.clientX) return e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);else return null;
	  },
	  pageY: function pageY(e) {
	    if (e.pageY) return e.pageY;else if (e.clientY) return e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);else return null;
	  },

	  /**
	   * 创建dom
	   * @param {string} id dom id 待用
	   * @param {string} type : dom type， such as canvas, div etc.
	   */
	  createCanvas: function createCanvas(_width, _height, id) {
	    var canvas = document.createElement("canvas");
	    canvas.style.position = 'absolute';
	    canvas.style.width = _width + 'px';
	    canvas.style.height = _height + 'px';
	    canvas.style.left = 0;
	    canvas.style.top = 0;
	    canvas.setAttribute('width', _width * RESOLUTION);
	    canvas.setAttribute('height', _height * RESOLUTION);
	    canvas.setAttribute('id', id);
	    return canvas;
	  },
	  createView: function createView(_width, _height, id) {
	    var view = document.createElement("div");
	    view.className = "canvax-view";
	    view.style.cssText += "position:relative;width:100%;height:100%;";
	    var stageView = document.createElement("div");
	    stageView.style.cssText += "position:absolute;width:" + _width + "px;height:" + _height + "px;"; //用来存放一些dom元素

	    var domView = document.createElement("div");
	    domView.style.cssText += "position:absolute;width:" + _width + "px;height:" + _height + "px;";
	    view.appendChild(stageView);
	    view.appendChild(domView);
	    return {
	      view: view,
	      stageView: stageView,
	      domView: domView
	    };
	  } //dom相关代码结束

	};

	/**
	 * Canvax
	 *
	 * @author 释剑 (李涛, litao.lt@alibaba-inc.com 
	*/
	var Utils = {
	  mainFrameRate: 60,
	  //默认主帧率
	  now: 0,

	  /*给文本检测高宽专用*/
	  _pixelCtx: null,
	  __emptyFunc: function __emptyFunc() {},
	  //retina 屏幕优化
	  _devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
	  _UID: 0,
	  //该值为向上的自增长整数值
	  getUID: function getUID() {
	    return this._UID++;
	  },
	  createId: function createId(name) {
	    //if end with a digit, then append an undersBase before appending
	    var charCode = name.charCodeAt(name.length - 1);
	    if (charCode >= 48 && charCode <= 57) name += "_";
	    return name + Utils.getUID();
	  },
	  canvasSupport: function canvasSupport() {
	    return !!document.createElement('canvas').getContext;
	  },
	  initElement: function initElement(canvas) {
	    if (window.FlashCanvas && FlashCanvas.initElement) {
	      FlashCanvas.initElement(canvas);
	    }
	    return canvas;
	  },

	  /**
	   * 按照css的顺序，返回一个[上,右,下,左]
	   */
	  getCssOrderArr: function getCssOrderArr(r) {
	    var r1;
	    var r2;
	    var r3;
	    var r4;

	    if (typeof r === 'number') {
	      r1 = r2 = r3 = r4 = r;
	    } else if (r instanceof Array) {
	      if (r.length === 1) {
	        r1 = r2 = r3 = r4 = r[0];
	      } else if (r.length === 2) {
	        r1 = r3 = r[0];
	        r2 = r4 = r[1];
	      } else if (r.length === 3) {
	        r1 = r[0];
	        r2 = r4 = r[1];
	        r3 = r[2];
	      } else {
	        r1 = r[0];
	        r2 = r[1];
	        r3 = r[2];
	        r4 = r[3];
	      }
	    } else {
	      r1 = r2 = r3 = r4 = 0;
	    }

	    return [r1, r2, r3, r4];
	  },
	  isWebGLSupported: function isWebGLSupported() {
	    var contextOptions = {
	      stencil: true
	    };

	    try {
	      if (!window.WebGLRenderingContext) //不存在直接return
	        {
	          return false;
	        }

	      var canvas = document.createElement('canvas'),
	          gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);
	      return !!(gl && gl.getContextAttributes().stencil); //还要确实检测是否支持webGL模式
	    } catch (e) {
	      return false;
	    }
	  },
	  checkOpt: function checkOpt(opt) {
	    if (!opt) {
	      opt = {
	        context: {}
	      };
	    } else {
	      if (!opt.context) {
	        opt.context = {};
	      }
	    }

	    return opt;
	  }
	};
	Utils._pixelCtx = Utils.initElement($.createCanvas(1, 1, "_pixelCanvas")).getContext('2d');

	/**
	 * Canvax
	 *
	 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	 *
	 * canvas 上委托的事件管理
	 */

	var Event = function Event(evt) {
	  var eventType = "CanvaxEvent";

	  if (_.isString(evt)) {
	    eventType = evt;
	  }

	  if (_.isObject(evt) && evt.type) {
	    eventType = evt.type;

	    _.extend(this, evt);
	  }
	  this.target = null;
	  this.currentTarget = null;
	  this.type = eventType;
	  this.point = null;
	  var me = this;
	  this._stopPropagation = false; //默认不阻止事件冒泡

	  this.stopPropagation = function () {
	    me._stopPropagation = true;

	    if (_.isObject(evt)) {
	      evt._stopPropagation = true;
	    }
	  };

	  this._preventDefault = false; //是否组织事件冒泡

	  this.preventDefault = function () {
	    me._preventDefault = true;

	    if (_.isObject(evt)) {
	      evt._preventDefault = true;
	    }
	  };
	};

	/**
	 * Canvax
	 *
	 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	 *
	 * canvas 上委托的事件管理
	 */
	var _mouseEvents = 'mousedown mouseup mouseover mousemove mouseout click dblclick wheel keydown keypress keyup';
	var types = {
	  _types: _mouseEvents.split(/,| /),
	  register: function register(evts) {
	    if (!evts) {
	      return;
	    }

	    if (_.isString(evts)) {
	      evts = evts.split(/,| /);
	    }
	    this._types = _mouseEvents.split(/,| /).concat(evts);
	  },
	  get: function get() {
	    return this._types;
	  }
	};

	/**
	 * Canvax
	 *
	 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	 *
	 * 事件管理类
	 */
	/**
	 * 构造函数.
	 * @name EventDispatcher
	 * @class EventDispatcher类是可调度事件的类的基类，它允许显示列表上的任何对象都是一个事件目标。
	 */

	var Manager = function Manager() {
	  //事件映射表，格式为：{type1:[listener1, listener2], type2:[listener3, listener4]}
	  this._eventMap = {};
	};

	Manager.prototype = {
	  /**
	   * 判断events里面是否有用户交互事件
	   */
	  _setEventEnable: function _setEventEnable() {
	    if (this.children) return; //容器的_eventEnabled不受注册的用户交互事件影响

	    var hasInteractionEvent = false;

	    for (var t in this._eventMap) {
	      if (_.indexOf(types.get(), t) > -1) {
	        hasInteractionEvent = true;
	      }
	    }
	    this._eventEnabled = hasInteractionEvent;
	  },

	  /*
	   * 注册事件侦听器对象，以使侦听器能够接收事件通知。
	   */
	  _addEventListener: function _addEventListener(_type, listener) {
	    if (typeof listener != "function") {
	      //listener必须是个function呐亲
	      return false;
	    }

	    var addResult = true;
	    var self = this;
	    var types = _type;

	    if (_.isString(_type)) {
	      types = _type.split(/,| /);
	    }

	    _.each(types, function (type) {
	      var map = self._eventMap[type];

	      if (!map) {
	        map = self._eventMap[type] = [];
	        map.push(listener); //self._eventEnabled = true;

	        self._setEventEnable();

	        return true;
	      }

	      if (_.indexOf(map, listener) == -1) {
	        map.push(listener); //self._eventEnabled = true;

	        self._setEventEnable();

	        return true;
	      }

	      addResult = false;
	    });

	    return addResult;
	  },

	  /**
	   * 删除事件侦听器。
	   */
	  _removeEventListener: function _removeEventListener(type, listener) {
	    if (arguments.length == 1) return this.removeEventListenerByType(type);
	    var map = this._eventMap[type];

	    if (!map) {
	      return false;
	    }

	    for (var i = 0; i < map.length; i++) {
	      var li = map[i];

	      if (li === listener) {
	        map.splice(i, 1);

	        if (map.length == 0) {
	          delete this._eventMap[type];

	          this._setEventEnable(); //如果这个如果这个时候child没有任何事件侦听

	          /*
	          if(_.isEmpty(this._eventMap)){
	              //那么该元素不再接受事件的检测
	              this._eventEnabled = false;
	          }
	          */

	        }

	        return true;
	      }
	    }

	    return false;
	  },

	  /**
	   * 删除指定类型的所有事件侦听器。
	   */
	  _removeEventListenerByType: function _removeEventListenerByType(type) {
	    var map = this._eventMap[type];

	    if (!map) {
	      delete this._eventMap[type];

	      this._setEventEnable(); //如果这个如果这个时候child没有任何事件侦听

	      /*
	      if(_.isEmpty(this._eventMap)){
	          //那么该元素不再接受事件的检测
	          this._eventEnabled = false;
	      }
	      */


	      return true;
	    }

	    return false;
	  },

	  /**
	   * 删除所有事件侦听器。
	   */
	  _removeAllEventListeners: function _removeAllEventListeners() {
	    this._eventMap = {};
	    this._eventEnabled = false;
	  },

	  /**
	  * 派发事件，调用事件侦听器。
	  */
	  _dispatchEvent: function _dispatchEvent(e) {
	    var map = this._eventMap[e.type];

	    if (map) {
	      if (!e.target) e.target = this;
	      if (!e.currentTarget) e.currentTarget = this;
	      map = map.slice();

	      for (var i = 0; i < map.length; i++) {
	        var listener = map[i];

	        if (typeof listener == "function") {
	          listener.call(this, e);
	        }
	      }
	    }

	    if (!e._stopPropagation) {
	      //向上冒泡
	      if (this.parent) {
	        e.currentTarget = this.parent;

	        this.parent._dispatchEvent(e);
	      }
	    }

	    return true;
	  },

	  /**
	     * 检查是否为指定事件类型注册了任何侦听器。
	     */
	  _hasEventListener: function _hasEventListener(type) {
	    var map = this._eventMap[type];
	    return map != null && map.length > 0;
	  }
	};

	var Dispatcher =
	/*#__PURE__*/
	function (_Manager) {
	  inherits(Dispatcher, _Manager);

	  function Dispatcher() {
	    classCallCheck(this, Dispatcher);

	    return possibleConstructorReturn(this, getPrototypeOf(Dispatcher).call(this));
	  }

	  createClass(Dispatcher, [{
	    key: "on",
	    value: function on(type, listener) {
	      this._addEventListener(type, listener);

	      return this;
	    }
	  }, {
	    key: "addEventListener",
	    value: function addEventListener(type, listener) {
	      this._addEventListener(type, listener);

	      return this;
	    }
	  }, {
	    key: "un",
	    value: function un(type, listener) {
	      this._removeEventListener(type, listener);

	      return this;
	    }
	  }, {
	    key: "removeEventListener",
	    value: function removeEventListener(type, listener) {
	      this._removeEventListener(type, listener);

	      return this;
	    }
	  }, {
	    key: "removeEventListenerByType",
	    value: function removeEventListenerByType(type) {
	      this._removeEventListenerByType(type);

	      return this;
	    }
	  }, {
	    key: "removeAllEventListeners",
	    value: function removeAllEventListeners() {
	      this._removeAllEventListeners();

	      return this;
	    } //params 要传给evt的eventhandler处理函数的参数，会被merge到Canvax event中

	  }, {
	    key: "fire",
	    value: function fire(eventType, params) {
	      //{currentTarget,point,target,type,_stopPropagation}
	      var e = new Event(eventType);

	      if (params) {
	        for (var p in params) {
	          if (p != "type") {
	            e[p] = params[p];
	          }
	        }
	      }
	      var me = this;

	      _.each(eventType.split(" "), function (eType) {
	        //然后，currentTarget要修正为自己
	        e.currentTarget = me;
	        me.dispatchEvent(e);
	      });

	      return this;
	    }
	  }, {
	    key: "dispatchEvent",
	    value: function dispatchEvent(evt) {
	      //this instanceof DisplayObjectContainer ==> this.children
	      //TODO: 这里import DisplayObjectContainer 的话，在displayObject里面的import EventDispatcher from "../event/EventDispatcher";
	      //会得到一个undefined，感觉是成了一个循环依赖的问题，所以这里换用简单的判断来判断自己是一个容易，拥有children
	      if (this.children && evt.point) {
	        var target = this.getObjectsUnderPoint(evt.point, 1)[0];

	        if (target) {
	          target.dispatchEvent(evt);
	        }

	        return;
	      }

	      if (this.context && evt.type == "mouseover") {
	        //记录dispatchEvent之前的心跳
	        var preHeartBeat = this._heartBeatNum;
	        var pregAlpha = this.context.$model.globalAlpha;

	        this._dispatchEvent(evt);

	        if (preHeartBeat != this._heartBeatNum) {
	          this._hoverClass = true;

	          if (this.hoverClone) {
	            var canvax = this.getStage().parent; //然后clone一份obj，添加到_bufferStage 中

	            var activShape = this.clone(true);
	            activShape._transform = this.getConcatenatedMatrix();

	            canvax._bufferStage.addChildAt(activShape, 0); //然后把自己隐藏了
	            //用一个临时变量_globalAlpha 来存储自己之前的alpha


	            this._globalAlpha = pregAlpha;
	            this.context.globalAlpha = 0;
	          }
	        }

	        return;
	      }

	      this._dispatchEvent(evt);

	      if (this.context && evt.type == "mouseout") {
	        if (this._hoverClass && this.hoverClone) {
	          //说明刚刚over的时候有添加样式
	          var canvax = this.getStage().parent;
	          this._hoverClass = false;

	          canvax._bufferStage.removeChildById(this.id);

	          if (this._globalAlpha) {
	            this.context.globalAlpha = this._globalAlpha;
	            delete this._globalAlpha;
	          }
	        }
	      }

	      return this;
	    }
	  }, {
	    key: "hasEvent",
	    value: function hasEvent(type) {
	      return this._hasEventListener(type);
	    }
	  }, {
	    key: "hasEventListener",
	    value: function hasEventListener(type) {
	      return this._hasEventListener(type);
	    }
	  }, {
	    key: "hover",
	    value: function hover(overFun, outFun) {
	      this.on("mouseover", overFun);
	      this.on("mouseout", outFun);
	      return this;
	    }
	  }, {
	    key: "once",
	    value: function once(type, listener) {
	      var me = this;

	      var onceHandle = function onceHandle() {
	        listener.apply(me, arguments);
	        this.un(type, onceHandle);
	      };

	      this.on(type, onceHandle);
	      return this;
	    }
	  }]);

	  return Dispatcher;
	}(Manager);

	/**
	 * Canvax
	 *
	 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	 *
	 */
	var _hammerEventTypes = ["pan", "panstart", "panmove", "panend", "pancancel", "panleft", "panright", "panup", "pandown", "press", "pressup", "swipe", "swipeleft", "swiperight", "swipeup", "swipedown", "tap"];

	var Handler = function Handler(canvax, opt) {
	  this.canvax = canvax;
	  this.curPoints = [{
	    x: 0,
	    y: 0
	  }]; //X,Y 的 point 集合, 在touch下面则为 touch的集合，只是这个touch被添加了对应的x，y
	  //当前激活的点对应的obj，在touch下可以是个数组,和上面的 curPoints 对应

	  this.curPointsTarget = [];
	  this._touching = false; //正在拖动，前提是_touching=true

	  this._draging = false; //当前的鼠标状态

	  this._cursor = "default";
	  this.target = this.canvax.view; //mouse体统中不需要配置drag,touch中会用到第三方的touch库，每个库的事件名称可能不一样，
	  //就要这里配置，默认实现的是hammerjs的,所以默认可以在项目里引入hammerjs http://hammerjs.github.io/

	  this.drag = {
	    start: "panstart",
	    move: "panmove",
	    end: "panend"
	  };

	  _.extend(true, this, opt);
	}; //这样的好处是document.compareDocumentPosition只会在定义的时候执行一次。


	var contains = document && document.compareDocumentPosition ? function (parent, child) {
	  if (!child) {
	    return false;
	  }
	  return !!(parent.compareDocumentPosition(child) & 16);
	} : function (parent, child) {
	  if (!child) {
	    return false;
	  }

	  return child !== child && (parent.contains ? parent.contains(child) : true);
	};
	Handler.prototype = {
	  init: function init() {
	    //依次添加上浏览器的自带事件侦听
	    var me = this;

	    if (me.target.nodeType == undefined) {
	      //如果target.nodeType没有的话， 说明该target为一个jQuery对象 or kissy 对象or hammer对象
	      //即为第三方库，那么就要对接第三方库的事件系统。默认实现hammer的大部分事件系统
	      types.register(_hammerEventTypes);
	    }

	    $.addEvent(me.target, "contextmenu", function (e) {
	      if (e && e.preventDefault) {
	        e.preventDefault();
	      } else {
	        window.event.returnValue = false;
	      }
	    });

	    _.each(types.get(), function (type) {
	      //不再关心浏览器环境是否 'ontouchstart' in window 
	      //而是直接只管传给事件模块的是一个原生dom还是 jq对象 or hammer对象等
	      if (me.target.nodeType == 1) {
	        $.addEvent(me.target, type, function (e) {
	          me.__mouseHandler(e);
	        });
	      } else {
	        me.target.on(type, function (e) {
	          me.__libHandler(e);
	        });
	      }
	    });
	  },

	  /*
	  * 原生事件系统------------------------------------------------begin
	  * 鼠标事件处理函数
	  **/
	  __mouseHandler: function __mouseHandler(e) {
	    var me = this;
	    var root = me.canvax;
	    root.updateViewOffset();
	    me.curPoints = [{
	      x: $.pageX(e) - root.viewOffset.left,
	      y: $.pageY(e) - root.viewOffset.top
	    }]; //理论上来说，这里拿到point了后，就要计算这个point对应的target来push到curPointsTarget里，
	    //但是因为在drag的时候其实是可以不用计算对应target的。
	    //所以放在了下面的me.__getcurPointsTarget( e , curMousePoint );常规mousemove中执行

	    var curMousePoint = me.curPoints[0];
	    var curMouseTarget = me.curPointsTarget[0];

	    if ( //这几个事件触发过来，是一定需要检测 curMouseTarget 的
	    _.indexOf(['mousedown', 'mouseover', 'click'], e.type) > -1 && !curMouseTarget) {
	      if (!curMouseTarget) {
	        var obj = root.getObjectsUnderPoint(curMousePoint, 1)[0];

	        if (obj) {
	          me.curPointsTarget = [obj];
	        }
	      }
	      curMouseTarget = me.curPointsTarget[0];
	    }
	    //mousedown的时候 如果 curMouseTarget.dragEnabled 为true。就要开始准备drag了

	    if (e.type == "mousedown") {
	      //如果curTarget 的数组为空或者第一个为false ，，，
	      if (curMouseTarget && curMouseTarget.dragEnabled) {
	        //鼠标事件已经摸到了一个
	        me._touching = true;
	      }
	    }

	    if (e.type == "mouseup" || e.type == "mouseout" && !contains(root.view, e.toElement || e.relatedTarget)) {
	      if (me._draging == true) {
	        //说明刚刚在拖动
	        me._dragEnd(e, curMouseTarget, 0);

	        curMouseTarget.fire("dragend");
	      }
	      me._draging = false;
	      me._touching = false;
	    }

	    if (e.type == "mouseout") {
	      if (!contains(root.view, e.toElement || e.relatedTarget)) {
	        me.__getcurPointsTarget(e, curMousePoint, true);
	      }
	    } else if (e.type == "mousemove") {
	      //|| e.type == "mousedown" ){
	      //拖动过程中就不在做其他的mouseover检测，drag优先
	      if (me._touching && e.type == "mousemove" && curMouseTarget) {
	        //说明正在拖动啊
	        if (!me._draging) {
	          //begin drag
	          curMouseTarget.fire("dragstart"); //有可能该child没有hover style

	          if (!curMouseTarget._globalAlpha) {
	            curMouseTarget._globalAlpha = curMouseTarget.context.$model.globalAlpha;
	          }

	          curMouseTarget.context.globalAlpha = 0; //然后克隆一个副本到activeStage

	          var cloneObject = me._clone2hoverStage(curMouseTarget, 0);

	          cloneObject.context.globalAlpha = curMouseTarget._globalAlpha;
	        } else {
	          //drag move ing
	          me._dragIngHander(e, curMouseTarget, 0);
	        }
	        me._draging = true;
	      } else {
	        //常规mousemove检测
	        //move事件中，需要不停的搜索target，这个开销挺大，
	        //后续可以优化，加上和帧率相当的延迟处理
	        me.__getcurPointsTarget(e, curMousePoint);
	      }
	    } else {
	      //其他的事件就直接在target上面派发事件
	      var child = curMouseTarget;

	      if (!child) {
	        child = root;
	      }

	      me.__dispatchEventInChilds(e, [child]);

	      me._cursorHander(child);
	    }

	    if (root.preventDefault || e._preventDefault) {
	      //阻止默认浏览器动作(W3C) 
	      if (e && e.preventDefault) {
	        e.preventDefault();
	      } else {
	        window.event.returnValue = false;
	      }
	    }
	  },
	  //notInRootView 真正的mouseout,鼠标已经不在图表的节点内了
	  __getcurPointsTarget: function __getcurPointsTarget(e, point, notInRootView) {
	    var me = this;
	    var root = me.canvax;
	    var oldObj = me.curPointsTarget[0];

	    if (oldObj && !oldObj.context) {
	      oldObj = null;
	    }
	    var e = new Event(e);

	    if (e.type == "mousemove" && oldObj && oldObj._hoverClass && oldObj.hoverClone && oldObj.pointChkPriority && oldObj.getChildInPoint(point)) {
	      //小优化,鼠标move的时候。计算频率太大，所以。做此优化
	      //如果有target存在，而且当前元素正在hoverStage中，而且当前鼠标还在target内,就没必要取检测整个displayList了
	      //开发派发常规mousemove事件
	      e.target = e.currentTarget = oldObj;
	      e.point = oldObj.globalToLocal(point);
	      oldObj.dispatchEvent(e);
	      return;
	    }
	    var obj = notInRootView ? null : root.getObjectsUnderPoint(point, 1)[0];

	    if (oldObj && oldObj != obj || e.type == "mouseout") {
	      if (oldObj && oldObj.context) {
	        me.curPointsTarget[0] = null;
	        e.type = "mouseout";
	        e.toTarget = obj;
	        e.target = e.currentTarget = oldObj;
	        e.point = oldObj.globalToLocal(point);
	        oldObj.dispatchEvent(e);
	      }
	    }

	    if (obj && oldObj != obj) {
	      me.curPointsTarget[0] = obj;
	      e.type = "mouseover";
	      e.fromTarget = oldObj;
	      e.target = e.currentTarget = obj;
	      e.point = obj.globalToLocal(point);
	      obj.dispatchEvent(e);
	    }

	    if (e.type == "mousemove" && obj) {
	      e.target = e.currentTarget = oldObj;
	      e.point = oldObj.globalToLocal(point);
	      oldObj.dispatchEvent(e);
	    }

	    me._cursorHander(obj, oldObj);
	  },
	  _cursorHander: function _cursorHander(obj, oldObj) {
	    if (!obj && !oldObj) {
	      this._setCursor("default");
	    }

	    if (obj && oldObj != obj && obj.context) {
	      this._setCursor(obj.context.$model.cursor);
	    }
	  },
	  _setCursor: function _setCursor(cursor) {
	    if (this._cursor == cursor) {
	      //如果两次要设置的鼠标状态是一样的
	      return;
	    }
	    this.canvax.view.style.cursor = cursor;
	    this._cursor = cursor;
	  },

	  /*
	  * 原生事件系统------------------------------------------------end
	  */

	  /*
	   *第三方库的事件系统------------------------------------------------begin
	   *触屏事件处理函数
	   * */
	  __libHandler: function __libHandler(e) {
	    var me = this;
	    var root = me.canvax;
	    root.updateViewOffset(); // touch 下的 curPointsTarget 从touches中来
	    //获取canvax坐标系统里面的坐标

	    me.curPoints = me.__getCanvaxPointInTouchs(e);

	    if (!me._draging) {
	      //如果在draging的话，target已经是选中了的，可以不用 检测了
	      me.curPointsTarget = me.__getChildInTouchs(me.curPoints);
	    }

	    if (me.curPointsTarget.length > 0) {
	      //drag开始
	      if (e.type == me.drag.start) {
	        //dragstart的时候touch已经准备好了target， curPointsTarget 里面只要有一个是有效的
	        //就认为drags开始
	        _.each(me.curPointsTarget, function (child, i) {
	          if (child && child.dragEnabled) {
	            //只要有一个元素就认为正在准备drag了
	            me._draging = true; //有可能该child没有hover style

	            if (!child._globalAlpha) {
	              child._globalAlpha = child.context.$model.globalAlpha;
	            }

	            me._clone2hoverStage(child, i); //先把本尊给隐藏了


	            child.context.globalAlpha = 0;
	            child.fire("dragstart");
	            return false;
	          }
	        });
	      }

	      if (e.type == me.drag.move) {
	        if (me._draging) {
	          _.each(me.curPointsTarget, function (child, i) {
	            if (child && child.dragEnabled) {
	              me._dragIngHander(e, child, i);
	            }
	          });
	        }
	      }

	      if (e.type == me.drag.end) {
	        if (me._draging) {
	          _.each(me.curPointsTarget, function (child, i) {
	            if (child && child.dragEnabled) {
	              me._dragEnd(e, child, 0);

	              child.fire("dragend");
	            }
	          });

	          me._draging = false;
	        }
	      }

	      me.__dispatchEventInChilds(e, me.curPointsTarget);
	    } else {
	      //如果当前没有一个target，就把事件派发到canvax上面
	      me.__dispatchEventInChilds(e, [root]);
	    }
	  },
	  //从touchs中获取到对应touch , 在上面添加上canvax坐标系统的x，y
	  __getCanvaxPointInTouchs: function __getCanvaxPointInTouchs(e) {
	    var me = this;
	    var root = me.canvax;
	    var curTouchs = [];

	    _.each(e.point, function (touch) {
	      curTouchs.push({
	        x: $.pageX(touch) - root.viewOffset.left,
	        y: $.pageY(touch) - root.viewOffset.top
	      });
	    });

	    return curTouchs;
	  },
	  __getChildInTouchs: function __getChildInTouchs(touchs) {
	    var me = this;
	    var root = me.canvax;
	    var touchesTarget = [];

	    _.each(touchs, function (touch) {
	      touchesTarget.push(root.getObjectsUnderPoint(touch, 1)[0]);
	    });

	    return touchesTarget;
	  },

	  /*
	  *第三方库的事件系统------------------------------------------------end
	  */

	  /*
	   *@param {array} childs 
	   * */
	  __dispatchEventInChilds: function __dispatchEventInChilds(e, childs) {
	    if (!childs && !("length" in childs)) {
	      return false;
	    }

	    var me = this;

	    _.each(childs, function (child, i) {
	      if (child) {
	        var ce = new Event(e); //ce.target = ce.currentTarget = child || this;

	        ce.stagePoint = me.curPoints[i];
	        ce.point = child.globalToLocal(ce.stagePoint);
	        child.dispatchEvent(ce);
	      }
	    });
	  },
	  //克隆一个元素到hover stage中去
	  _clone2hoverStage: function _clone2hoverStage(target, i) {
	    var me = this;
	    var root = me.canvax;

	    var _dragDuplicate = root._bufferStage.getChildById(target.id);

	    if (!_dragDuplicate) {
	      _dragDuplicate = target.clone(true);
	      _dragDuplicate._transform = target.getConcatenatedMatrix();
	      /**
	       *TODO: 因为后续可能会有手动添加的 元素到_bufferStage 里面来
	       *比如tips
	       *这类手动添加进来的肯定是因为需要显示在最外层的。在hover元素之上。
	       *所有自动添加的hover元素都默认添加在_bufferStage的最底层
	       **/

	      root._bufferStage.addChildAt(_dragDuplicate, 0);
	    }

	    _dragDuplicate.context.globalAlpha = target._globalAlpha;
	    target._dragPoint = target.globalToLocal(me.curPoints[i]);
	    return _dragDuplicate;
	  },
	  //drag 中 的处理函数
	  _dragIngHander: function _dragIngHander(e, target, i) {
	    var me = this;
	    var root = me.canvax;

	    var _point = target.globalToLocal(me.curPoints[i]); //要对应的修改本尊的位置，但是要告诉引擎不要watch这个时候的变化


	    target._noHeart = true;
	    var _moveStage = target.moveing;
	    target.moveing = true;
	    target.context.x += _point.x - target._dragPoint.x;
	    target.context.y += _point.y - target._dragPoint.y;
	    target.fire("draging");
	    target.moveing = _moveStage;
	    target._noHeart = false; //同步完毕本尊的位置
	    //这里只能直接修改_transform 。 不能用下面的修改x，y的方式。

	    var _dragDuplicate = root._bufferStage.getChildById(target.id);

	    _dragDuplicate._transform = target.getConcatenatedMatrix(); //worldTransform在renderer的时候计算

	    _dragDuplicate.worldTransform = null; //setWorldTransform都统一在render中执行，这里注释掉
	    //_dragDuplicate.setWorldTransform();
	    //直接修改的_transform不会出发心跳上报， 渲染引擎不制动这个stage需要绘制。
	    //所以要手动出发心跳包

	    _dragDuplicate.heartBeat();
	  },
	  //drag结束的处理函数
	  //TODO: dragend的还需要处理end的点是否还在元素上面，要恢复hover状态
	  _dragEnd: function _dragEnd(e, target, i) {
	    var me = this;
	    var root = me.canvax; //_dragDuplicate 复制在_bufferStage 中的副本

	    var _dragDuplicate = root._bufferStage.getChildById(target.id);

	    _dragDuplicate && _dragDuplicate.destroy();
	    target.context.globalAlpha = target._globalAlpha;
	  }
	};

	var event = {
	  Event: Event,
	  Dispatcher: Dispatcher,
	  Handler: Handler,
	  Manager: Manager,
	  types: types
	};

	/**
	 * Canvax
	 *
	 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	 *
	 * | a | c | tx|
	 * | b | d | ty|
	 * | 0 | 0 | 1 |
	 *
	 * @class
	 * @memberof PIXI
	 *
	 *
	 * Matrix 矩阵库 用于整个系统的几何变换计算
	 */
	var Matrix = function Matrix(a, b, c, d, tx, ty) {
	  this.a = a != undefined ? a : 1;
	  this.b = b != undefined ? b : 0;
	  this.c = c != undefined ? c : 0;
	  this.d = d != undefined ? d : 1;
	  this.tx = tx != undefined ? tx : 0;
	  this.ty = ty != undefined ? ty : 0;
	  this.array = null;
	};

	Matrix.prototype = {
	  concat: function concat(mtx) {
	    var a = this.a;
	    var c = this.c;
	    var tx = this.tx;
	    this.a = a * mtx.a + this.b * mtx.c;
	    this.b = a * mtx.b + this.b * mtx.d;
	    this.c = c * mtx.a + this.d * mtx.c;
	    this.d = c * mtx.b + this.d * mtx.d;
	    this.tx = tx * mtx.a + this.ty * mtx.c + mtx.tx;
	    this.ty = tx * mtx.b + this.ty * mtx.d + mtx.ty;
	    return this;
	  },
	  concatTransform: function concatTransform(x, y, scaleX, scaleY, rotation) {
	    var cos = 1;
	    var sin = 0;

	    if (rotation % 360) {
	      var r = rotation * Math.PI / 180;
	      cos = Math.cos(r);
	      sin = Math.sin(r);
	    }

	    this.concat(new Matrix(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y));
	    return this;
	  },
	  rotate: function rotate(angle) {
	    //目前已经提供对顺时针逆时针两个方向旋转的支持
	    var cos = Math.cos(angle);
	    var sin = Math.sin(angle);
	    var a = this.a;
	    var c = this.c;
	    var tx = this.tx;

	    if (angle > 0) {
	      this.a = a * cos - this.b * sin;
	      this.b = a * sin + this.b * cos;
	      this.c = c * cos - this.d * sin;
	      this.d = c * sin + this.d * cos;
	      this.tx = tx * cos - this.ty * sin;
	      this.ty = tx * sin + this.ty * cos;
	    } else {
	      var st = Math.sin(Math.abs(angle));
	      var ct = Math.cos(Math.abs(angle));
	      this.a = a * ct + this.b * st;
	      this.b = -a * st + this.b * ct;
	      this.c = c * ct + this.d * st;
	      this.d = -c * st + ct * this.d;
	      this.tx = ct * tx + st * this.ty;
	      this.ty = ct * this.ty - st * tx;
	    }

	    return this;
	  },
	  scale: function scale(sx, sy) {
	    this.a *= sx;
	    this.d *= sy;
	    this.tx *= sx;
	    this.ty *= sy;
	    return this;
	  },
	  translate: function translate(dx, dy) {
	    this.tx += dx;
	    this.ty += dy;
	    return this;
	  },
	  identity: function identity() {
	    //初始化
	    this.a = this.d = 1;
	    this.b = this.c = this.tx = this.ty = 0;
	    return this;
	  },
	  invert: function invert() {
	    //逆向矩阵
	    var a = this.a;
	    var b = this.b;
	    var c = this.c;
	    var d = this.d;
	    var tx = this.tx;
	    var i = a * d - b * c;
	    this.a = d / i;
	    this.b = -b / i;
	    this.c = -c / i;
	    this.d = a / i;
	    this.tx = (c * this.ty - d * tx) / i;
	    this.ty = -(a * this.ty - b * tx) / i;
	    return this;
	  },
	  clone: function clone() {
	    return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
	  },
	  toArray: function toArray(transpose, out) {
	    if (arguments.length == 0) {
	      //canvas2d 中不会有任何的参数传入
	      if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c) || isNaN(this.d) || isNaN(this.tx) || isNaN(this.ty)) {
	        //不是一个合格的矩阵
	        return null;
	      }
	      return [this.a, this.b, this.c, this.d, this.tx, this.ty];
	    } //webgl的glsl需要用的时候，需要传入transpose 来转换为一个3*3完整矩阵


	    if (!this.array) {
	      this.array = new Float32Array(9);
	    }

	    var array = out || this.array;

	    if (transpose) {
	      array[0] = this.a;
	      array[1] = this.b;
	      array[2] = 0;
	      array[3] = this.c;
	      array[4] = this.d;
	      array[5] = 0;
	      array[6] = this.tx;
	      array[7] = this.ty;
	      array[8] = 1;
	    } else {
	      array[0] = this.a;
	      array[1] = this.c;
	      array[2] = this.tx;
	      array[3] = this.b;
	      array[4] = this.d;
	      array[5] = this.ty;
	      array[6] = 0;
	      array[7] = 0;
	      array[8] = 1;
	    }

	    return array;
	  },

	  /**
	   * 矩阵左乘向量
	   */
	  mulVector: function mulVector(v) {
	    var aa = this.a,
	        ac = this.c,
	        atx = this.tx;
	    var ab = this.b,
	        ad = this.d,
	        aty = this.ty;
	    var out = [0, 0];
	    out[0] = v[0] * aa + v[1] * ac + atx;
	    out[1] = v[0] * ab + v[1] * ad + aty;
	    return out;
	  }
	};

	/**
	 * Point
	 *
	 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	 */
	var Point =
	/*#__PURE__*/
	function () {
	  function Point() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	    classCallCheck(this, Point);

	    if (arguments.length == 1 && _typeof_1(arguments[0]) == 'object') {
	      var arg = arguments[0];

	      if ("x" in arg && "y" in arg) {
	        this.x = arg.x * 1;
	        this.y = arg.y * 1;
	      } else {
	        var i = 0;

	        for (var p in arg) {
	          if (i == 0) {
	            this.x = arg[p] * 1;
	          } else {
	            this.y = arg[p] * 1;
	            break;
	          }

	          i++;
	        }
	      }
	    } else {
	      this.x = x * 1;
	      this.y = y * 1;
	    }
	  }

	  createClass(Point, [{
	    key: "toArray",
	    value: function toArray() {
	      return [this.x, this.y];
	    }
	  }]);

	  return Point;
	}();

	var Tween = createCommonjsModule$1(function (module, exports) {
	/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */


	var _Group = function () {
		this._tweens = {};
		this._tweensAddedDuringUpdate = {};
	};

	_Group.prototype = {
		getAll: function () {

			return Object.keys(this._tweens).map(function (tweenId) {
				return this._tweens[tweenId];
			}.bind(this));

		},

		removeAll: function () {

			this._tweens = {};

		},

		add: function (tween) {

			this._tweens[tween.getId()] = tween;
			this._tweensAddedDuringUpdate[tween.getId()] = tween;

		},

		remove: function (tween) {

			delete this._tweens[tween.getId()];
			delete this._tweensAddedDuringUpdate[tween.getId()];

		},

		update: function (time, preserve) {

			var tweenIds = Object.keys(this._tweens);

			if (tweenIds.length === 0) {
				return false;
			}

			time = time !== undefined ? time : TWEEN.now();

			// Tweens are updated in "batches". If you add a new tween during an update, then the
			// new tween will be updated in the next batch.
			// If you remove a tween during an update, it may or may not be updated. However,
			// if the removed tween was added during the current batch, then it will not be updated.
			while (tweenIds.length > 0) {
				this._tweensAddedDuringUpdate = {};

				for (var i = 0; i < tweenIds.length; i++) {

					var tween = this._tweens[tweenIds[i]];

					if (tween && tween.update(time) === false) {
						tween._isPlaying = false;

						if (!preserve) {
							delete this._tweens[tweenIds[i]];
						}
					}
				}

				tweenIds = Object.keys(this._tweensAddedDuringUpdate);
			}

			return true;

		}
	};

	var TWEEN = new _Group();

	TWEEN.Group = _Group;
	TWEEN._nextId = 0;
	TWEEN.nextId = function () {
		return TWEEN._nextId++;
	};


	// Include a performance.now polyfill.
	// In node.js, use process.hrtime.
	if (typeof (window) === 'undefined' && typeof (process) !== 'undefined') {
		TWEEN.now = function () {
			var time = process.hrtime();

			// Convert [seconds, nanoseconds] to milliseconds.
			return time[0] * 1000 + time[1] / 1000000;
		};
	}
	// In a browser, use window.performance.now if it is available.
	else if (typeof (window) !== 'undefined' &&
	         window.performance !== undefined &&
			 window.performance.now !== undefined) {
		// This must be bound, because directly assigning this function
		// leads to an invocation exception in Chrome.
		TWEEN.now = window.performance.now.bind(window.performance);
	}
	// Use Date.now if it is available.
	else if (Date.now !== undefined) {
		TWEEN.now = Date.now;
	}
	// Otherwise, use 'new Date().getTime()'.
	else {
		TWEEN.now = function () {
			return new Date().getTime();
		};
	}


	TWEEN.Tween = function (object, group) {
		this._object = object;
		this._valuesStart = {};
		this._valuesEnd = {};
		this._valuesStartRepeat = {};
		this._duration = 1000;
		this._repeat = 0;
		this._repeatDelayTime = undefined;
		this._yoyo = false;
		this._isPlaying = false;
		this._reversed = false;
		this._delayTime = 0;
		this._startTime = null;
		this._easingFunction = TWEEN.Easing.Linear.None;
		this._interpolationFunction = TWEEN.Interpolation.Linear;
		this._chainedTweens = [];
		this._onStartCallback = null;
		this._onStartCallbackFired = false;
		this._onUpdateCallback = null;
		this._onCompleteCallback = null;
		this._onStopCallback = null;
		this._group = group || TWEEN;
		this._id = TWEEN.nextId();

	};

	TWEEN.Tween.prototype = {
		getId: function getId() {
			return this._id;
		},

		isPlaying: function isPlaying() {
			return this._isPlaying;
		},

		to: function to(properties, duration) {

			this._valuesEnd = properties;

			if (duration !== undefined) {
				this._duration = duration;
			}

			return this;

		},

		start: function start(time) {

			this._group.add(this);

			this._isPlaying = true;

			this._onStartCallbackFired = false;

			this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
			this._startTime += this._delayTime;

			for (var property in this._valuesEnd) {

				// Check if an Array was provided as property value
				if (this._valuesEnd[property] instanceof Array) {

					if (this._valuesEnd[property].length === 0) {
						continue;
					}

					// Create a local copy of the Array with the start value at the front
					this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

				}

				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (this._object[property] === undefined) {
					continue;
				}

				// Save the starting value.
				this._valuesStart[property] = this._object[property];

				if ((this._valuesStart[property] instanceof Array) === false) {
					this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}

				this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

			}

			return this;

		},

		stop: function stop() {

			if (!this._isPlaying) {
				return this;
			}

			this._group.remove(this);
			this._isPlaying = false;

			if (this._onStopCallback !== null) {
				this._onStopCallback(this._object);
			}

			this.stopChainedTweens();
			return this;

		},

		end: function end() {

			this.update(this._startTime + this._duration);
			return this;

		},

		stopChainedTweens: function stopChainedTweens() {

			for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
				this._chainedTweens[i].stop();
			}

		},

		group: function group(group) {
			this._group = group;
			return this;
		},

		delay: function delay(amount) {

			this._delayTime = amount;
			return this;

		},

		repeat: function repeat(times) {

			this._repeat = times;
			return this;

		},

		repeatDelay: function repeatDelay(amount) {

			this._repeatDelayTime = amount;
			return this;

		},

		yoyo: function yoyo(yy) {

			this._yoyo = yy;
			return this;

		},

		easing: function easing(eas) {

			this._easingFunction = eas;
			return this;

		},

		interpolation: function interpolation(inter) {

			this._interpolationFunction = inter;
			return this;

		},

		chain: function chain() {

			this._chainedTweens = arguments;
			return this;

		},

		onStart: function onStart(callback) {

			this._onStartCallback = callback;
			return this;

		},

		onUpdate: function onUpdate(callback) {

			this._onUpdateCallback = callback;
			return this;

		},

		onComplete: function onComplete(callback) {

			this._onCompleteCallback = callback;
			return this;

		},

		onStop: function onStop(callback) {

			this._onStopCallback = callback;
			return this;

		},

		update: function update(time) {

			var property;
			var elapsed;
			var value;

			if (time < this._startTime) {
				return true;
			}

			if (this._onStartCallbackFired === false) {

				if (this._onStartCallback !== null) {
					this._onStartCallback(this._object);
				}

				this._onStartCallbackFired = true;
			}

			elapsed = (time - this._startTime) / this._duration;
			elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

			value = this._easingFunction(elapsed);

			for (property in this._valuesEnd) {

				// Don't update properties that do not exist in the source object
				if (this._valuesStart[property] === undefined) {
					continue;
				}

				var start = this._valuesStart[property] || 0;
				var end = this._valuesEnd[property];

				if (end instanceof Array) {

					this._object[property] = this._interpolationFunction(end, value);

				} else {

					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {

						if (end.charAt(0) === '+' || end.charAt(0) === '-') {
							end = start + parseFloat(end);
						} else {
							end = parseFloat(end);
						}
					}

					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						this._object[property] = start + (end - start) * value;
					}

				}

			}

			if (this._onUpdateCallback !== null) {
				this._onUpdateCallback(this._object);
			}

			if (elapsed === 1) {

				if (this._repeat > 0) {

					if (isFinite(this._repeat)) {
						this._repeat--;
					}

					// Reassign starting values, restart by making startTime = now
					for (property in this._valuesStartRepeat) {

						if (typeof (this._valuesEnd[property]) === 'string') {
							this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
						}

						if (this._yoyo) {
							var tmp = this._valuesStartRepeat[property];

							this._valuesStartRepeat[property] = this._valuesEnd[property];
							this._valuesEnd[property] = tmp;
						}

						this._valuesStart[property] = this._valuesStartRepeat[property];

					}

					if (this._yoyo) {
						this._reversed = !this._reversed;
					}

					if (this._repeatDelayTime !== undefined) {
						this._startTime = time + this._repeatDelayTime;
					} else {
						this._startTime = time + this._delayTime;
					}

					return true;

				} else {

					if (this._onCompleteCallback !== null) {

						this._onCompleteCallback(this._object);
					}

					for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						this._chainedTweens[i].start(this._startTime + this._duration);
					}

					return false;

				}

			}

			return true;

		}
	};


	TWEEN.Easing = {

		Linear: {

			None: function (k) {

				return k;

			}

		},

		Quadratic: {

			In: function (k) {

				return k * k;

			},

			Out: function (k) {

				return k * (2 - k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}

				return - 0.5 * (--k * (k - 2) - 1);

			}

		},

		Cubic: {

			In: function (k) {

				return k * k * k;

			},

			Out: function (k) {

				return --k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k + 2);

			}

		},

		Quartic: {

			In: function (k) {

				return k * k * k * k;

			},

			Out: function (k) {

				return 1 - (--k * k * k * k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}

				return - 0.5 * ((k -= 2) * k * k * k - 2);

			}

		},

		Quintic: {

			In: function (k) {

				return k * k * k * k * k;

			},

			Out: function (k) {

				return --k * k * k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k * k * k + 2);

			}

		},

		Sinusoidal: {

			In: function (k) {

				return 1 - Math.cos(k * Math.PI / 2);

			},

			Out: function (k) {

				return Math.sin(k * Math.PI / 2);

			},

			InOut: function (k) {

				return 0.5 * (1 - Math.cos(Math.PI * k));

			}

		},

		Exponential: {

			In: function (k) {

				return k === 0 ? 0 : Math.pow(1024, k - 1);

			},

			Out: function (k) {

				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}

				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

			}

		},

		Circular: {

			In: function (k) {

				return 1 - Math.sqrt(1 - k * k);

			},

			Out: function (k) {

				return Math.sqrt(1 - (--k * k));

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}

				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

			}

		},

		Elastic: {

			In: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

			},

			Out: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				k *= 2;

				if (k < 1) {
					return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
				}

				return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

			}

		},

		Back: {

			In: function (k) {

				var s = 1.70158;

				return k * k * ((s + 1) * k - s);

			},

			Out: function (k) {

				var s = 1.70158;

				return --k * k * ((s + 1) * k + s) + 1;

			},

			InOut: function (k) {

				var s = 1.70158 * 1.525;

				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}

				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

			}

		},

		Bounce: {

			In: function (k) {

				return 1 - TWEEN.Easing.Bounce.Out(1 - k);

			},

			Out: function (k) {

				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}

			},

			InOut: function (k) {

				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}

				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

			}

		}

	};

	TWEEN.Interpolation = {

		Linear: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;

			if (k < 0) {
				return fn(v[0], v[1], f);
			}

			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}

			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

		},

		Bezier: function (v, k) {

			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;

			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}

			return b;

		},

		CatmullRom: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;

			if (v[0] === v[m]) {

				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}

				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

			} else {

				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}

				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}

				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

			}

		},

		Utils: {

			Linear: function (p0, p1, t) {

				return (p1 - p0) * t + p0;

			},

			Bernstein: function (n, i) {

				var fc = TWEEN.Interpolation.Utils.Factorial;

				return fc(n) / fc(i) / fc(n - i);

			},

			Factorial: (function () {

				var a = [1];

				return function (n) {

					var s = 1;

					if (a[n]) {
						return a[n];
					}

					for (var i = n; i > 1; i--) {
						s *= i;
					}

					a[n] = s;
					return s;

				};

			})(),

			CatmullRom: function (p0, p1, p2, p3, t) {

				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;

				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

			}

		}

	};

	// UMD (Universal Module Definition)
	(function (root) {

		{

			// Node.js
			module.exports = TWEEN;

		}

	})();
	});

	/**
	 * 设置 AnimationFrame begin
	 */

	var lastTime = 0;
	var _globalAnimationEnabled = true;
	var requestAnimationFrame, cancelAnimationFrame;

	if (typeof window !== 'undefined') {
	  requestAnimationFrame = window.requestAnimationFrame;
	  cancelAnimationFrame = window.cancelAnimationFrame;
	  var vendors = ['ms', 'moz', 'webkit', 'o'];

	  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	    requestAnimationFrame = window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	    cancelAnimationFrame = window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	  }
	}

	if (!requestAnimationFrame) {
	  requestAnimationFrame = function requestAnimationFrame(callback, element) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = setTimeout(function () {
	      callback(currTime + timeToCall);
	    }, timeToCall);
	    lastTime = currTime + timeToCall;
	    return id;
	  };
	}

	if (!cancelAnimationFrame) {
	  cancelAnimationFrame = function cancelAnimationFrame(id) {
	    clearTimeout(id);
	  };
	}

	var _taskList = []; //[{ id : task: }...]

	var _requestAid = null;

	function enabledAnimationFrame() {
	  if (!_requestAid) {
	    _requestAid = requestAnimationFrame(function () {
	      //console.log("frame__" + _taskList.length);
	      //if ( Tween.getAll().length ) {
	      Tween.update(); //tween自己会做length判断
	      //};

	      var currTaskList = _taskList;
	      _taskList = [];
	      _requestAid = null;

	      while (currTaskList.length > 0) {
	        currTaskList.shift().task();
	      }
	    });
	  }
	  return _requestAid;
	}
	/*
	 * @param task 要加入到渲染帧队列中的任务
	 * @result frameid
	 */

	function registFrame($frame) {
	  if (!$frame) {
	    return;
	  }

	  _taskList.push($frame);

	  return enabledAnimationFrame();
	}
	/*
	 *  @param task 要从渲染帧队列中删除的任务
	 */

	function destroyFrame($frame) {
	  var d_result = false;

	  for (var i = 0, l = _taskList.length; i < l; i++) {
	    if (_taskList[i].id === $frame.id) {
	      d_result = true;

	      _taskList.splice(i, 1);

	      i--;
	      l--;
	    }
	  }

	  if (_taskList.length == 0) {
	    cancelAnimationFrame(_requestAid);
	    _requestAid = null;
	  }
	  return d_result;
	}
	/* 
	 * @param opt {from , to , onUpdate , onComplete , ......}
	 * @result tween
	 */

	function registTween(options) {
	  var opt = _.extend({
	    from: null,
	    to: null,
	    duration: 500,
	    onStart: function onStart() {},
	    onUpdate: function onUpdate() {},
	    onComplete: function onComplete() {},
	    onStop: function onStop() {},
	    repeat: 0,
	    delay: 0,
	    easing: 'Linear.None',
	    desc: '' //动画描述，方便查找bug

	  }, options);

	  if (!getAnimationEnabled()) {
	    //如果全局动画被禁用，那么下面两项强制设置为0
	    //TODO:其实应该直接执行回调函数的
	    opt.duration = 0;
	    opt.delay = 0;
	  }
	  var tween = {};
	  var tid = "tween_" + Utils.getUID();
	  opt.id && (tid = tid + "_" + opt.id);

	  if (opt.from && opt.to) {
	    var animate = function animate() {
	      if (tween._isCompleteed || tween._isStoped) {
	        tween = null;
	        return;
	      }
	      registFrame({
	        id: tid,
	        task: animate,
	        desc: opt.desc,
	        tween: tween
	      });
	    };

	    tween = new Tween.Tween(opt.from).to(opt.to, opt.duration).onStart(function () {
	      //opt.onStart.apply( this )
	      opt.onStart(opt.from);
	    }).onUpdate(function () {
	      //opt.onUpdate.apply( this );
	      opt.onUpdate(opt.from);
	    }).onComplete(function () {
	      destroyFrame({
	        id: tid
	      });
	      tween._isCompleteed = true; //opt.onComplete.apply( this , [this] ); //执行用户的conComplete

	      opt.onComplete(opt.from);
	    }).onStop(function () {
	      destroyFrame({
	        id: tid
	      });
	      tween._isStoped = true; //opt.onStop.apply( this , [this] );

	      opt.onStop(opt.from);
	    }).repeat(opt.repeat).delay(opt.delay).easing(Tween.Easing[opt.easing.split(".")[0]][opt.easing.split(".")[1]]);
	    tween.id = tid;
	    tween.start();
	    animate();
	  }
	  return tween;
	}
	/*
	 * @param tween
	 * @result void(0)
	 */

	function destroyTween(tween, msg) {
	  tween.stop();
	}

	function setAnimationEnabled(bool) {
	  _globalAnimationEnabled = bool;
	}

	function getAnimationEnabled() {
	  return _globalAnimationEnabled;
	}

	var AnimationFrame = {
	  setAnimationEnabled: setAnimationEnabled,
	  getAnimationEnabled: getAnimationEnabled,
	  registFrame: registFrame,
	  destroyFrame: destroyFrame,
	  registTween: registTween,
	  destroyTween: destroyTween,
	  Tween: Tween,
	  taskList: _taskList
	};

	function Observe(scope) {
	  var stopRepeatAssign = true;
	  var pmodel = {},
	      //要返回的对象
	  accessores = {},
	      //内部用于转换的对象
	  _Publics = ["$watch", "$model"],
	      //公共属性，不需要get set 化的
	  model = {}; //这是pmodel上的$model属性

	  var Publics = _Publics;

	  function loop(name, val) {
	    if (_.indexOf(_Publics, name) === -1) {
	      //非 _Publics 中的值，都要先设置好对应的val到model上
	      model[name] = val;
	    }

	    var valueType = _typeof_1(val);

	    if (_.indexOf(Publics, name) > -1) {
	      return;
	    }

	    if (valueType === "function") {
	      Publics.push(name); //函数无需要转换，也可以做为公共属性存在
	    } else {
	      var accessor = function accessor(neo) {
	        //创建监控属性或数组，自变量，由用户触发其改变
	        var value = model[name],
	            preValue = value,
	            complexValue;

	        if (arguments.length) {
	          //写操作
	          //set 的 值的 类型
	          var neoType = _typeof_1(neo);

	          if (stopRepeatAssign) {
	            return; //阻止重复赋值
	          }

	          if (value !== neo) {
	            if (neo && neoType === "object" && !(neo instanceof Array) && !neo.addColorStop // neo instanceof CanvasGradient
	            ) {
	                value = neo.$model ? neo : Observe(neo);
	                complexValue = value.$model;
	              } else {
	              //如果是其他数据类型
	              value = neo;
	            }

	            model[name] = complexValue ? complexValue : value; //更新$model中的值

	            if (valueType != neoType) {
	              //如果set的值类型已经改变，
	              //那么也要把对应的valueType修改为对应的neoType
	              valueType = neoType;
	            }

	            if (pmodel.$watch) {
	              pmodel.$watch.call(pmodel, name, value, preValue);
	            }
	          }
	        } else {
	          //读操作
	          //读的时候，发现value是个obj，而且还没有defineProperty
	          //那么就临时defineProperty一次
	          if (value && valueType === "object" && !(value instanceof Array) && !value.$model && !value.addColorStop) {
	            value = Observe(value);
	            value.$watch = pmodel.$watch; //accessor.value = value;

	            model[name] = value;
	          }
	          return value;
	        }
	      }; //accessor.value = val;


	      accessores[name] = {
	        set: accessor,
	        get: accessor,
	        enumerable: true
	      };
	    }
	  }

	  for (var i in scope) {
	    loop(i, scope[i]);
	  }
	  pmodel = defineProperties(pmodel, accessores, Publics); //生成一个空的ViewModel

	  _.forEach(Publics, function (name) {
	    if (scope[name]) {
	      //然后为函数等不被监控的属性赋值
	      if (typeof scope[name] == "function") {
	        pmodel[name] = function () {
	          scope[name].apply(this, arguments);
	        };
	      } else {
	        pmodel[name] = scope[name];
	      }
	    }
	  });

	  pmodel.$model = model;

	  pmodel.hasOwnProperty = function (name) {
	    return name in pmodel.$model;
	  };

	  stopRepeatAssign = false;
	  return pmodel;
	}
	var defineProperty = Object.defineProperty; //如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
	//标准浏览器使用__defineGetter__, __defineSetter__实现

	try {
	  defineProperty({}, "_", {
	    value: "x"
	  });
	  var defineProperties = Object.defineProperties;
	} catch (e) {
	  if ("__defineGetter__" in Object) {
	    defineProperty = function defineProperty(obj, prop, desc) {
	      if ('value' in desc) {
	        obj[prop] = desc.value;
	      }

	      if ('get' in desc) {
	        obj.__defineGetter__(prop, desc.get);
	      }

	      if ('set' in desc) {
	        obj.__defineSetter__(prop, desc.set);
	      }

	      return obj;
	    };

	    defineProperties = function defineProperties(obj, descs) {
	      for (var prop in descs) {
	        if (descs.hasOwnProperty(prop)) {
	          defineProperty(obj, prop, descs[prop]);
	        }
	      }

	      return obj;
	    };
	  }
	}

	var RENDERER_TYPE = {
	  UNKNOWN: 0,
	  WEBGL: 1,
	  CANVAS: 2
	};
	var SHAPES = {
	  POLY: 0,
	  RECT: 1,
	  CIRC: 2,
	  ELIP: 3
	};

	var TRANSFORM_PROPS = ["x", "y", "scaleX", "scaleY", "rotation", "scaleOrigin", "rotateOrigin"]; //所有和样式相关的属性
	//appha 有 自己的 处理方式

	var STYLE_PROPS = ["lineWidth", "strokeAlpha", "strokeStyle", "fillStyle", "fillAlpha", "globalAlpha"];

	/**
	 * 线段包含判断
	 * @points [0,0,0,0]
	 */
	var _isInsideLine = function _isInsideLine(points, x, y, lineWidth) {
	  var x0 = points[0];
	  var y0 = points[1];
	  var x1 = points[2];
	  var y1 = points[3];

	  var _l = Math.max(lineWidth, 3);

	  var _a = 0;
	  var _b = x0;

	  if (y > y0 + _l && y > y1 + _l || y < y0 - _l && y < y1 - _l || x > x0 + _l && x > x1 + _l || x < x0 - _l && x < x1 - _l) {
	    return false;
	  }

	  if (x0 !== x1) {
	    _a = (y0 - y1) / (x0 - x1);
	    _b = (x0 * y1 - x1 * y0) / (x0 - x1);
	  } else {
	    return Math.abs(x - x0) <= _l / 2;
	  }

	  var _s = (_a * x - y + _b) * (_a * x - y + _b) / (_a * _a + 1);

	  return _s <= _l / 2 * _l / 2;
	};

	function insideLine(data, x, y, line) {
	  var points = data.shape.points;
	  var lineWidth = data.lineWidth;
	  var insideCatch = false;

	  for (var i = 0; i < points.length; ++i) {
	    insideCatch = _isInsideLine(points.slice(i, i + 4), x, y, lineWidth);

	    if (insideCatch) {
	      break;
	    }
	    i += 1;
	  }
	  return insideCatch;
	}

	var settings = {
	  //设备分辨率
	  RESOLUTION: typeof window !== 'undefined' ? window.devicePixelRatio : 1,

	  /**
	   * Target frames per millisecond.
	   */
	  TARGET_FPMS: 0.06,

	  /**
	   * If set to true WebGL will attempt make textures mimpaped by default.
	   * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
	   */
	  MIPMAP_TEXTURES: true,

	  /**
	   * Default filter resolution.
	   */
	  FILTER_RESOLUTION: 1,
	  // TODO: maybe change to SPRITE.BATCH_SIZE: 2000
	  // TODO: maybe add PARTICLE.BATCH_SIZE: 15000

	  /**
	   * The default sprite batch size.
	   *
	   * The default aims to balance desktop and mobile devices.
	   */
	  SPRITE_BATCH_SIZE: 4096,

	  /**
	   * The prefix that denotes a URL is for a retina asset.
	   */
	  RETINA_PREFIX: /@(.+)x/,
	  RENDER_OPTIONS: {
	    view: null,
	    antialias: true,
	    forceFXAA: false,
	    autoResize: false,
	    transparent: true,
	    backgroundColor: 0x000000,
	    clearBeforeRender: true,
	    preserveDrawingBuffer: false,
	    roundPixels: false
	  },
	  TRANSFORM_MODE: 0,
	  GC_MODE: 0,
	  GC_MAX_IDLE: 60 * 60,
	  GC_MAX_CHECK_COUNT: 60 * 10,
	  WRAP_MODE: 0,
	  SCALE_MODE: 0,
	  PRECISION: 'mediump'
	};

	var DisplayObject =
	/*#__PURE__*/
	function (_event$Dispatcher) {
	  inherits(DisplayObject, _event$Dispatcher);

	  function DisplayObject(opt) {
	    var _this;

	    classCallCheck(this, DisplayObject);

	    _this = possibleConstructorReturn(this, getPrototypeOf(DisplayObject).call(this, opt)); //相对父级元素的矩阵

	    _this._transform = null;
	    _this.worldTransform = null; //_transform如果有修改，则_transformChange为true，renderer的时候worldTransform

	    _this._transformChange = false; //心跳次数

	    _this._heartBeatNum = 0; //元素对应的stage元素

	    _this.stage = null; //元素的父元素

	    _this.parent = null;
	    _this.xyToInt = "xyToInt" in opt ? opt.xyToInt : true; //是否对xy坐标统一int处理，默认为true，但是有的时候可以由外界用户手动指定是否需要计算为int，因为有的时候不计算比较好，比如，进度图表中，再sector的两端添加两个圆来做圆角的进度条的时候，圆circle不做int计算，才能和sector更好的衔接

	    _this.moveing = false; //如果元素在最轨道运动中的时候，最好把这个设置为true，这样能保证轨迹的丝搬顺滑，否则因为xyToInt的原因，会有跳跃

	    _this.clip = null; //裁剪的图形对象
	    //创建好context

	    _this.context = _this._createContext(opt);
	    _this.type = opt.type || "DisplayObject";
	    _this.id = opt.id || Utils.createId(_this.type);
	    _this._trackList = []; //一个元素可以追踪另外元素的变动

	    _this.init.apply(assertThisInitialized(_this), arguments); //所有属性准备好了后，先要计算一次this._updateTransform()得到_tansform


	    _this._updateTransform();

	    _this._tweens = [];

	    var me = assertThisInitialized(_this);

	    _this.on("destroy", function () {
	      me.cleanAnimates();
	    });

	    return _this;
	  }

	  createClass(DisplayObject, [{
	    key: "init",
	    value: function init() {}
	  }, {
	    key: "clipTo",
	    value: function clipTo(node) {
	      this.clip = node;
	      node.isClip = true;
	    }
	  }, {
	    key: "_createContext",
	    value: function _createContext(opt) {
	      var self = this;
	      var optCtx = opt.context || {};
	      var _contextATTRS = {
	        width: optCtx.width || 0,
	        height: optCtx.height || 0,
	        x: optCtx.x || 0,
	        y: optCtx.y || 0,
	        scaleX: optCtx.scaleX || 1,
	        scaleY: optCtx.scaleY || 1,
	        scaleOrigin: optCtx.scaleOrigin || {
	          x: 0,
	          y: 0
	        },
	        rotation: optCtx.rotation || 0,
	        rotateOrigin: optCtx.rotateOrigin || {
	          x: 0,
	          y: 0
	        },
	        visible: optCtx.visible || true,
	        globalAlpha: optCtx.globalAlpha || 1 //样式部分迁移到shape中

	      }; //平凡的clone数据非常的耗时，还是走回原来的路
	      //var _contextATTRS = _.extend( true , _.clone(CONTEXT_DEFAULT), opt.context );

	      _.extend(true, _contextATTRS, opt.context); //有些引擎内部设置context属性的时候是不用上报心跳的，比如做热点检测的时候


	      self._notWatch = false; //不需要发心跳信息

	      self._noHeart = false; //_contextATTRS.$owner = self;

	      _contextATTRS.$watch = function (name, value, preValue) {
	        //下面的这些属性变化，都会需要重新组织矩阵属性 _transform 
	        var obj = self; //this.$owner;

	        if (!obj.context) {
	          //如果这个obj的context已经不存在了，那么就什么都不处理，
	          //TODO:后续还要把自己给destroy 并且要把在 动画队列里面的动画也干掉
	          return;
	        }

	        if (name == "globalGalpha") {
	          obj._globalAlphaChange = true;
	        }

	        if (_.indexOf(TRANSFORM_PROPS, name) > -1) {
	          obj._updateTransform();

	          obj._transformChange = true;
	        }

	        if (obj._notWatch) {
	          return;
	        }

	        if (obj.$watch) {
	          //执行的内部$watch的时候必须把_notWatch 设置为true，否则会死循环调用
	          obj._notWatch = true;
	          obj.$watch(name, value, preValue);
	          obj._notWatch = false;
	        }

	        if (obj._noHeart) {
	          return;
	        }
	        obj.heartBeat({
	          convertType: "context",
	          shape: obj,
	          name: name,
	          value: value,
	          preValue: preValue
	        });
	      }; //执行init之前，应该就根据参数，把context组织好线


	      return Observe(_contextATTRS);
	    } //TODO:track目前还没测试过,需要的时候再测试

	  }, {
	    key: "track",
	    value: function track(el) {
	      if (_.indexOf(this._trackList, el) == -1) {
	        this._trackList.push(el);
	      }
	    }
	  }, {
	    key: "untrack",
	    value: function untrack(el) {
	      var ind = _.indexOf(this._trackList, el);

	      if (ind > -1) {
	        this._trackList.splice(ind, 1);
	      }
	    }
	    /* @myself 是否生成自己的镜像 
	     * 克隆又两种，一种是镜像，另外一种是绝对意义上面的新个体
	     * 默认为绝对意义上面的新个体，新对象id不能相同
	     * 镜像基本上是框架内部在实现  镜像的id相同 主要用来把自己画到另外的stage里面，比如
	     * mouseover和mouseout的时候调用*/

	  }, {
	    key: "clone",
	    value: function clone(myself) {
	      var conf = {
	        id: this.id,
	        context: _.clone(this.context.$model),
	        isClone: true
	      };
	      var newObj;

	      if (this.type == 'text') {
	        newObj = new this.constructor(this.text, conf);
	      } else {
	        newObj = new this.constructor(conf);
	      }

	      newObj.id = conf.id;

	      if (this.children) {
	        newObj.children = this.children;
	      }

	      if (this.graphics) {
	        newObj.graphics = this.graphics.clone();
	      }

	      if (!myself) {
	        newObj.id = Utils.createId(newObj.type);
	      }
	      return newObj;
	    }
	  }, {
	    key: "heartBeat",
	    value: function heartBeat(opt) {
	      //stage存在，才说self代表的display已经被添加到了displayList中，绘图引擎需要知道其改变后
	      //的属性，所以，通知到stage.displayAttrHasChange
	      var stage = this.getStage();

	      if (stage) {
	        this._heartBeatNum++;
	        stage.heartBeat && stage.heartBeat(opt);
	      }
	    }
	  }, {
	    key: "getCurrentWidth",
	    value: function getCurrentWidth() {
	      return Math.abs(this.context.$model.width * this.context.$model.scaleX);
	    }
	  }, {
	    key: "getCurrentHeight",
	    value: function getCurrentHeight() {
	      return Math.abs(this.context.$model.height * this.context.$model.scaleY);
	    }
	  }, {
	    key: "getStage",
	    value: function getStage() {
	      if (this.stage) {
	        return this.stage;
	      }
	      var p = this;

	      if (p.type != "stage") {
	        while (p.parent) {
	          p = p.parent;

	          if (p.type == "stage") {
	            break;
	          }
	        }

	        if (p.type !== "stage") {
	          //如果得到的顶点display 的type不是Stage,也就是说不是stage元素
	          //那么只能说明这个p所代表的顶端display 还没有添加到displayList中，也就是没有没添加到
	          //stage舞台的childen队列中，不在引擎渲染范围内
	          return false;
	        }
	      } //一直回溯到顶层object， 即是stage， stage的parent为null


	      this.stage = p;
	      return p;
	    }
	  }, {
	    key: "localToGlobal",
	    value: function localToGlobal(point, container) {
	      !point && (point = new Point(0, 0));
	      var cm = this.getConcatenatedMatrix(container);
	      if (cm == null) return Point(0, 0);
	      var m = new Matrix(1, 0, 0, 1, point.x, point.y);
	      m.concat(cm);
	      return new Point(m.tx, m.ty); //{x:m.tx, y:m.ty};
	    }
	  }, {
	    key: "globalToLocal",
	    value: function globalToLocal(point, container) {
	      !point && (point = new Point(0, 0));

	      if (this.type == "stage") {
	        return point;
	      }

	      var cm = this.getConcatenatedMatrix(container);
	      if (cm == null) return new Point(0, 0); //{x:0, y:0};

	      cm.invert(); //let originPos = cm.mulVector( [ point.x, point.y ] );
	      //return new Point( originPos[0], originPos[1] );

	      var m = new Matrix(1, 0, 0, 1, point.x, point.y);
	      m.concat(cm);
	      return new Point(m.tx, m.ty); //{x:m.tx, y:m.ty};
	    }
	  }, {
	    key: "localToTarget",
	    value: function localToTarget(point, target) {
	      var p = localToGlobal(point);
	      return target.globalToLocal(p);
	    }
	  }, {
	    key: "getConcatenatedMatrix",
	    value: function getConcatenatedMatrix(container) {
	      var cm = new Matrix();

	      for (var o = this; o != null; o = o.parent) {
	        cm.concat(o._transform);

	        if (!o.parent || container && o.parent && o.parent == container || o.parent && o.parent.type == "stage") {
	          //if( o.type == "stage" || (o.parent && container && o.parent.type == container.type ) ) {
	          return cm; //break;
	        }
	      }

	      return cm;
	    }
	    /*
	     *设置元素的是否响应事件检测
	     *@bool  Boolean 类型
	     */

	  }, {
	    key: "setEventEnable",
	    value: function setEventEnable(bool) {
	      if (_.isBoolean(bool)) {
	        this._eventEnabled = bool;
	        return true;
	      }
	      return false;
	    }
	    /*
	     *查询自己在parent的队列中的位置
	     */

	  }, {
	    key: "getIndex",
	    value: function getIndex() {
	      if (!this.parent) {
	        return;
	      }
	      return _.indexOf(this.parent.children, this);
	    }
	    /*
	     *元素在z轴方向向下移动
	     *@num 移动的层级
	     */

	  }, {
	    key: "toBack",
	    value: function toBack(num) {
	      if (!this.parent) {
	        return;
	      }

	      var fromIndex = this.getIndex();
	      var toIndex = 0;

	      if (_.isNumber(num)) {
	        if (num == 0) {
	          //原地不动
	          return;
	        }
	        toIndex = fromIndex - num;
	      }

	      var me = this.parent.children.splice(fromIndex, 1)[0];

	      if (toIndex < 0) {
	        toIndex = 0;
	      }
	      this.parent.addChildAt(me, toIndex);
	    }
	    /*
	     *元素在z轴方向向上移动
	     *@num 移动的层数量 默认到顶端
	     */

	  }, {
	    key: "toFront",
	    value: function toFront(num) {
	      if (!this.parent) {
	        return;
	      }

	      var fromIndex = this.getIndex();
	      var pcl = this.parent.children.length;
	      var toIndex = pcl;

	      if (_.isNumber(num)) {
	        if (num == 0) {
	          //原地不动
	          return;
	        }

	        toIndex = fromIndex + num + 1;
	      }

	      var me = this.parent.children.splice(fromIndex, 1)[0];

	      if (toIndex > pcl) {
	        toIndex = pcl;
	      }

	      this.parent.addChildAt(me, toIndex - 1);
	    }
	  }, {
	    key: "_updateTransform",
	    value: function _updateTransform() {
	      var _transform = new Matrix();

	      _transform.identity();

	      var context = this.context; //是否需要scale

	      if (context.scaleX !== 1 || context.scaleY !== 1) {
	        //如果有缩放
	        //缩放的原点坐标
	        var origin = new Point(context.scaleOrigin);

	        _transform.translate(-origin.x, -origin.y);

	        _transform.scale(context.scaleX, context.scaleY);

	        _transform.translate(origin.x, origin.y);
	      }
	      var rotation = context.rotation;

	      if (rotation) {
	        //如果有旋转
	        //旋转的原点坐标
	        var origin = new Point(context.rotateOrigin);

	        _transform.translate(-origin.x, -origin.y);

	        _transform.rotate(rotation % 360 * Math.PI / 180);

	        _transform.translate(origin.x, origin.y);
	      }

	      var x, y;

	      if (this.xyToInt && !this.moveing) {
	        //当这个元素在做轨迹运动的时候，比如drag，animation如果实时的调整这个x ， y
	        //那么该元素的轨迹会有跳跃的情况发生。所以加个条件过滤，
	        var x = parseInt(context.x);
	        var y = parseInt(context.y);

	        if (parseInt(context.lineWidth, 10) % 2 == 1 && context.strokeStyle) {
	          x += 0.5;
	          y += 0.5;
	        }
	      } else {
	        x = context.x;
	        y = context.y;
	      }

	      if (x != 0 || y != 0) {
	        _transform.translate(x, y);
	      }
	      this._transform = _transform;
	      return _transform;
	    } //获取全局的世界坐标系内的矩阵
	    //世界坐标是从上而下的，所以只要和parent的直接坐标相乘就好了

	  }, {
	    key: "setWorldTransform",
	    value: function setWorldTransform() {
	      var cm = new Matrix();
	      cm.concat(this._transform);
	      this.parent && cm.concat(this.parent.worldTransform);
	      this.worldTransform = cm;
	      return this.worldTransform;
	    } //显示对象的选取检测处理函数

	  }, {
	    key: "getChildInPoint",
	    value: function getChildInPoint(point) {
	      var result = false; //检测的结果
	      //第一步，吧glob的point转换到对应的obj的层级内的坐标系统
	      //if( this.type != "stage" && this.parent && this.parent.type != "stage" ) {
	      //    point = this.parent.globalToLocal( point );
	      //};
	      //var m = new Matrix( Settings.RESOLUTION, 0, 0, Settings.RESOLUTION, point.x , point.y);
	      //m.concat( this.worldTransform );

	      var x = point.x;
	      var y = point.y; //对鼠标的坐标也做相同的变换

	      if (this.worldTransform) {
	        var inverseMatrix = this.worldTransform.clone().invert();
	        var originPos = [x * settings.RESOLUTION, y * settings.RESOLUTION];
	        originPos = inverseMatrix.mulVector(originPos);
	        x = originPos[0];
	        y = originPos[1];
	      }

	      if (this.graphics) {
	        result = this.containsPoint({
	          x: x,
	          y: y
	        });
	      }

	      if (this.type == "text") {
	        //文本框的先单独处理
	        var _rect = this.getRect();

	        if (!_rect.width || !_rect.height) {
	          return false;
	        }

	        if (x >= _rect.x && x <= _rect.x + _rect.width && (_rect.height >= 0 && y >= _rect.y && y <= _rect.y + _rect.height || _rect.height < 0 && y <= _rect.y && y >= _rect.y + _rect.height)) {
	          //那么就在这个元素的矩形范围内
	          result = true;
	        } else {
	          //如果连矩形内都不是，那么肯定的，这个不是我们要找的shap
	          result = false;
	        }
	        return result;
	      }
	      return result;
	    }
	  }, {
	    key: "containsPoint",
	    value: function containsPoint(point) {
	      var inside = false;

	      for (var i = 0; i < this.graphics.graphicsData.length; ++i) {
	        var data = this.graphics.graphicsData[i];

	        if (data.shape) {
	          //先检测fill， fill的检测概率大些。
	          //像circle,ellipse这样的shape 就直接把lineWidth算在fill里面计算就好了，所以他们是没有insideLine的
	          if (data.hasFill() && data.shape.contains(point.x, point.y)) {
	            inside = true;

	            if (inside) {
	              break;
	            }
	          } //circle,ellipse等就没有points


	          if (data.hasLine() && data.shape.points) {
	            //然后检测是否和描边碰撞
	            inside = insideLine(data, point.x, point.y);

	            if (inside) {
	              break;
	            }
	          }
	        }
	      }

	      return inside;
	    }
	    /*
	    * animate
	    * @param toContent 要动画变形到的属性集合
	    * @param options tween 动画参数
	    */

	  }, {
	    key: "animate",
	    value: function animate(toContent, options, context) {
	      if (!context) {
	        context = this.context;
	      }

	      if (!context) {
	        //这个时候如果还是找不到context说明这个 el 已经被destroy了
	        return;
	      }
	      var to = toContent;
	      var from = null;

	      for (var p in to) {
	        if (_.isObject(to[p])) {
	          //options必须传递一份copy出去，比如到下一个animate
	          this.animate(to[p], _.extend({}, options), context[p]); //如果是个object

	          continue;
	        }

	        if (isNaN(to[p]) && to[p] !== '' && to[p] !== null) {
	          //undefined已经被isNaN过滤了
	          //只有number才能继续走下去执行tween，而非number则直接赋值完事，
	          //TODO:不能用_.isNumber 因为 '1212' 这样的其实可以计算
	          context[p] = to[p];
	          delete to[p];
	          continue;
	        }

	        if (!from) {
	          from = {};
	        }
	        from[p] = context[p];
	      }

	      if (!from) {
	        //这里很重要，不能删除。 
	        //比如line.animate({start:{x:0,y:0}} , {duration:500});
	        //那么递归到start的时候  from 的值依然为null
	        //如果这个时候继续执行的话，会有很严重的bug
	        //line.context.start 会 被赋值了 line对象上的所有属性，严重的bug
	        return;
	      }
	      !options && (options = {});
	      options.from = from;
	      options.to = to;
	      var self = this;

	      var upFun = function upFun() {};

	      if (options.onUpdate) {
	        upFun = options.onUpdate;
	      }
	      var tween;

	      options.onUpdate = function (status) {
	        //如果context不存在说明该obj已经被destroy了，那么要把他的tween给destroy
	        if (!context && tween) {
	          AnimationFrame.destroyTween(tween);
	          tween = null;
	          return;
	        }

	        for (var p in status) {
	          context[p] = status[p];
	        }
	        upFun.apply(self, [status]);
	      };

	      var compFun = function compFun() {};

	      if (options.onComplete) {
	        compFun = options.onComplete;
	      }

	      options.onComplete = function (status) {
	        compFun.apply(self, arguments);

	        self._removeTween(tween);
	      };

	      options.onStop = function () {
	        self._removeTween(tween);
	      };

	      options.desc = "tweenType:DisplayObject.animate__id:" + this.id + "__objectType:" + this.type;
	      tween = AnimationFrame.registTween(options);

	      this._tweens.push(tween);

	      return tween;
	    }
	  }, {
	    key: "_removeTween",
	    value: function _removeTween(tween) {
	      for (var i = 0; i < this._tweens.length; i++) {
	        if (tween == this._tweens[i]) {
	          this._tweens.splice(i, 1);

	          break;
	        }
	      }
	    }
	  }, {
	    key: "removeAnimate",
	    value: function removeAnimate(animate) {
	      animate.stop();

	      this._removeTween(animate);
	    } //清楚所有的动画

	  }, {
	    key: "cleanAnimates",
	    value: function cleanAnimates() {
	      this._cleanAnimates();
	    } //清楚所有的动画

	  }, {
	    key: "_cleanAnimates",
	    value: function _cleanAnimates() {
	      while (this._tweens.length) {
	        this._tweens.shift().stop();
	      }
	    } //从树中删除

	  }, {
	    key: "remove",
	    value: function remove() {
	      if (this.parent) {
	        this.parent.removeChild(this);
	        this.parent = null;
	      }
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this._destroy();
	    } //元素的自我销毁

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.remove();
	      this.fire("destroy"); //把自己从父节点中删除了后做自我清除，释放内存

	      this.context = null;
	      delete this.context;
	    }
	  }]);

	  return DisplayObject;
	}(event.Dispatcher);

	var DisplayObjectContainer =
	/*#__PURE__*/
	function (_DisplayObject) {
	  inherits(DisplayObjectContainer, _DisplayObject);

	  function DisplayObjectContainer(opt) {
	    var _this;

	    classCallCheck(this, DisplayObjectContainer);

	    _this = possibleConstructorReturn(this, getPrototypeOf(DisplayObjectContainer).call(this, opt));
	    _this.children = [];
	    _this.mouseChildren = []; //所有的容器默认支持event 检测，因为 可能有里面的shape是eventEnable是true的
	    //如果用户有强制的需求让容器下的所有元素都 不可检测，可以调用
	    //DisplayObjectContainer的 setEventEnable() 方法

	    _this._eventEnabled = true;
	    return _this;
	  }

	  createClass(DisplayObjectContainer, [{
	    key: "addChild",
	    value: function addChild(child, index) {
	      if (!child) {
	        return;
	      }

	      if (this.getChildIndex(child) != -1) {
	        child.parent = this;
	        return child;
	      }

	      if (child.parent) {
	        child.parent.removeChild(child);
	      }

	      if (index === undefined) {
	        index = this.children.length;
	      }
	      this.children.splice(index, 0, child);
	      child.parent = this;

	      if (this.heartBeat) {
	        this.heartBeat({
	          convertType: "children",
	          target: child,
	          src: this
	        });
	      }

	      if (this._afterAddChild) {
	        this._afterAddChild(child);
	      }
	      return child;
	    }
	  }, {
	    key: "addChildAt",
	    value: function addChildAt(child, index) {
	      return this.addChild(child, index);
	    }
	  }, {
	    key: "removeChild",
	    value: function removeChild(child) {
	      return this.removeChildAt(_.indexOf(this.children, child));
	    }
	  }, {
	    key: "removeChildAt",
	    value: function removeChildAt(index) {
	      if (index < 0 || index > this.children.length - 1) {
	        return false;
	      }
	      var child = this.children[index];

	      if (child != null) {
	        child.parent = null;
	      }
	      this.children.splice(index, 1);

	      if (this.heartBeat) {
	        this.heartBeat({
	          convertType: "children",
	          target: child,
	          src: this
	        });
	      }

	      if (this._afterDelChild) {
	        this._afterDelChild(child, index);
	      }

	      return child;
	    }
	  }, {
	    key: "removeChildById",
	    value: function removeChildById(id) {
	      for (var i = 0, len = this.children.length; i < len; i++) {
	        if (this.children[i].id == id) {
	          return this.removeChildAt(i);
	        }
	      }

	      return false;
	    }
	  }, {
	    key: "removeAllChildren",
	    value: function removeAllChildren() {
	      while (this.children.length > 0) {
	        this.removeChildAt(0);
	      }
	    } //集合类的自我销毁

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      /*
	      if( this.parent ){
	          this.parent.removeChild(this);
	          this.parent = null;
	      };
	      this.fire("destroy");
	      */
	      //依次销毁所有子元素
	      for (var i = 0, l = this.children.length; i < l; i++) {
	        this.getChildAt(i).destroy();
	        i--;
	        l--;
	      }

	      this._destroy();
	    } //集合类的自我销毁

	  }, {
	    key: "cleanAnimates",
	    value: function cleanAnimates() {
	      //依次销毁所有子元素
	      for (var i = 0, l = this.children.length; i < l; i++) {
	        this.getChildAt(i).cleanAnimates();
	      }

	      this._cleanAnimates();
	    }
	    /*
	     *@id 元素的id
	     *@boolen 是否深度查询，默认就在第一层子元素中查询
	     **/

	  }, {
	    key: "getChildById",
	    value: function getChildById(id, boolen) {
	      if (!boolen) {
	        for (var i = 0, len = this.children.length; i < len; i++) {
	          if (this.children[i].id == id) {
	            return this.children[i];
	          }
	        }
	      } else {
	        //深度查询
	        //TODO:暂时未实现
	        return null;
	      }

	      return null;
	    }
	  }, {
	    key: "getChildAt",
	    value: function getChildAt(index) {
	      if (index < 0 || index > this.children.length - 1) return null;
	      return this.children[index];
	    }
	  }, {
	    key: "getChildIndex",
	    value: function getChildIndex(child) {
	      return _.indexOf(this.children, child);
	    }
	  }, {
	    key: "setChildIndex",
	    value: function setChildIndex(child, index) {
	      if (child.parent != this) return;

	      var oldIndex = _.indexOf(this.children, child);

	      if (index == oldIndex) return;
	      this.children.splice(oldIndex, 1);
	      this.children.splice(index, 0, child);
	    }
	  }, {
	    key: "getNumChildren",
	    value: function getNumChildren() {
	      return this.children.length;
	    } //获取x,y点上的所有object  num 需要返回的obj数量

	  }, {
	    key: "getObjectsUnderPoint",
	    value: function getObjectsUnderPoint(point, num) {
	      var result = [];

	      for (var i = this.children.length - 1; i >= 0; i--) {
	        var child = this.children[i];

	        if (child == null || !child.context.$model.visible) {
	          //不管是集合还是非集合，如果不显示的都不接受点击检测
	          continue;
	        }

	        if (child instanceof DisplayObjectContainer) {
	          if (!child._eventEnabled) {
	            //容易一般默认 _eventEnabled == true; 但是如果被设置成了false
	            //如果容器设置了不接受事件检测，那么下面所有的元素都不接受事件检测
	            continue;
	          }

	          if (child.mouseChildren && child.getNumChildren() > 0) {
	            var objs = child.getObjectsUnderPoint(point);

	            if (objs.length > 0) {
	              result = result.concat(objs);
	            }
	          }
	        } else {
	          if (!child._eventEnabled && !child.dragEnabled) {
	            continue;
	          }

	          if (child.getChildInPoint(point)) {
	            result.push(child);

	            if (num != undefined && !isNaN(num)) {
	              if (result.length == num) {
	                return result;
	              }
	            }
	          }
	        }
	      }

	      return result;
	    }
	  }]);

	  return DisplayObjectContainer;
	}(DisplayObject);

	var Stage =
	/*#__PURE__*/
	function (_DisplayObjectContain) {
	  inherits(Stage, _DisplayObjectContain);

	  function Stage(opt) {
	    var _this;

	    classCallCheck(this, Stage);

	    opt.type = "stage";
	    _this = possibleConstructorReturn(this, getPrototypeOf(Stage).call(this, opt));
	    _this.canvas = null;
	    _this.ctx = null; //渲染的时候由renderer决定,这里不做初始值
	    //stage正在渲染中

	    _this.stageRending = false;
	    _this._isReady = false;
	    return _this;
	  } //由canvax的afterAddChild 回调


	  createClass(Stage, [{
	    key: "initStage",
	    value: function initStage(canvas, width, height) {
	      var self = this;
	      self.canvas = canvas;
	      var model = self.context;
	      model.width = width;
	      model.height = height;
	      model.scaleX = Utils._devicePixelRatio;
	      model.scaleY = Utils._devicePixelRatio;
	      self._isReady = true;
	    }
	  }, {
	    key: "heartBeat",
	    value: function heartBeat(opt) {
	      //shape , name , value , preValue 
	      //displayList中某个属性改变了
	      if (!this._isReady) {
	        //在stage还没初始化完毕的情况下，无需做任何处理
	        return;
	      }
	      opt || (opt = {}); //如果opt为空，说明就是无条件刷新

	      opt.stage = this; //TODO临时先这么处理

	      this.parent && this.parent.heartBeat(opt);
	    }
	  }]);

	  return Stage;
	}(DisplayObjectContainer);

	var SystemRenderer =
	/*#__PURE__*/
	function () {
	  function SystemRenderer() {
	    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RENDERER_TYPE.UNKNOWN;
	    var app = arguments.length > 1 ? arguments[1] : undefined;
	    var options = arguments.length > 2 ? arguments[2] : undefined;

	    classCallCheck(this, SystemRenderer);

	    this.type = type; //2canvas,1webgl

	    this.app = app;

	    if (options) {
	      for (var i in settings.RENDER_OPTIONS) {
	        if (typeof options[i] === 'undefined') {
	          options[i] = settings.RENDER_OPTIONS[i];
	        }
	      }
	    } else {
	      options = settings.RENDER_OPTIONS;
	    }

	    this.options = options;
	    this.requestAid = null;
	    this._heartBeat = false; //心跳，默认为false，即false的时候引擎处于静默状态 true则启动渲染

	    this._preRenderTime = 0;
	  } //如果引擎处于静默状态的话，就会启动


	  createClass(SystemRenderer, [{
	    key: "startEnter",
	    value: function startEnter() {
	      var self = this;

	      if (!self.requestAid) {
	        self.requestAid = AnimationFrame.registFrame({
	          id: "enterFrame",
	          //同时肯定只有一个enterFrame的task
	          task: function task() {
	            self.enterFrame.apply(self);
	          }
	        });
	      }
	    }
	  }, {
	    key: "enterFrame",
	    value: function enterFrame() {
	      var self = this; //不管怎么样，enterFrame执行了就要把
	      //requestAid null 掉

	      self.requestAid = null;
	      Utils.now = new Date().getTime();

	      if (self._heartBeat) {
	        //var _begin = new Date().getTime();
	        this.app.children.length && self.render(this.app); //var _end = new Date().getTime();
	        //$(document.body).append( "<br />render："+ (_end - _begin) );

	        self._heartBeat = false; //渲染完了，打上最新时间挫

	        self._preRenderTime = new Date().getTime();
	      }
	    }
	  }, {
	    key: "_convertCanvax",
	    value: function _convertCanvax(opt) {
	      var me = this;

	      _.each(me.app.children, function (stage) {
	        stage.context[opt.name] = opt.value;
	      });
	    }
	  }, {
	    key: "heartBeat",
	    value: function heartBeat(opt) {
	      //displayList中某个属性改变了
	      var self = this;

	      if (opt) {
	        //心跳包有两种，一种是某元素的可视属性改变了。一种是children有变动
	        //分别对应convertType  为 context  and children
	        if (opt.convertType == "context") {
	          var stage = opt.stage;
	          var shape = opt.shape;
	          var name = opt.name;
	          var value = opt.value;
	          var preValue = opt.preValue;

	          if (shape.type == "canvax") {
	            self._convertCanvax(opt);
	          } else {
	            if (!self.app.convertStages[stage.id]) {
	              self.app.convertStages[stage.id] = {
	                stage: stage,
	                convertShapes: {}
	              };
	            }

	            if (shape) {
	              if (!self.app.convertStages[stage.id].convertShapes[shape.id]) {
	                self.app.convertStages[stage.id].convertShapes[shape.id] = {
	                  shape: shape,
	                  convertType: opt.convertType
	                };
	              } else {
	                //如果已经上报了该 shape 的心跳。
	                return;
	              }
	            }
	          }
	        }

	        if (opt.convertType == "children") {
	          //元素结构变化，比如addchild removeChild等
	          var target = opt.target;
	          var stage = opt.src.getStage();

	          if (stage || target.type == "stage") {
	            //如果操作的目标元素是Stage
	            stage = stage || target;

	            if (!self.app.convertStages[stage.id]) {
	              self.app.convertStages[stage.id] = {
	                stage: stage,
	                convertShapes: {}
	              };
	            }
	          }
	        }

	        if (!opt.convertType) {
	          //无条件要求刷新
	          var stage = opt.stage;

	          if (!self.app.convertStages[stage.id]) {
	            self.app.convertStages[stage.id] = {
	              stage: stage,
	              convertShapes: {}
	            };
	          }
	        }
	      } else {
	        //无条件要求全部刷新，一般用在resize等。
	        _.each(self.app.children, function (stage, i) {
	          self.app.convertStages[stage.id] = {
	            stage: stage,
	            convertShapes: {}
	          };
	        });
	      }

	      if (!self._heartBeat) {
	        //如果发现引擎在静默状态，那么就唤醒引擎
	        self._heartBeat = true;
	        self.startEnter();
	      } else {
	        //否则智慧继续确认心跳
	        self._heartBeat = true;
	      }
	    }
	  }]);

	  return SystemRenderer;
	}();

	var CanvasGraphicsRenderer =
	/*#__PURE__*/
	function () {
	  function CanvasGraphicsRenderer(renderer) {
	    classCallCheck(this, CanvasGraphicsRenderer);

	    this.renderer = renderer;
	  }
	  /**
	  * @param displayObject
	  * @stage 也可以displayObject.getStage()获取。
	  */


	  createClass(CanvasGraphicsRenderer, [{
	    key: "render",
	    value: function render(displayObject, stage, globalAlpha, isClip) {
	      var renderer = this.renderer;
	      var graphicsData = displayObject.graphics.graphicsData;
	      var ctx = stage.ctx;

	      for (var i = 0; i < graphicsData.length; i++) {
	        var data = graphicsData[i];
	        var shape = data.shape;
	        var fillStyle = data.fillStyle;
	        var strokeStyle = data.strokeStyle;
	        var fill = data.hasFill() && data.fillAlpha && !isClip;
	        var line = data.hasLine() && data.strokeAlpha && !isClip;
	        ctx.lineWidth = data.lineWidth;

	        if (data.type === SHAPES.POLY) {
	          //只第一次需要beginPath()
	          ctx.beginPath();
	          this.renderPolygon(shape.points, shape.closed, ctx, isClip);

	          if (fill) {
	            ctx.globalAlpha = data.fillAlpha * globalAlpha;
	            ctx.fillStyle = fillStyle;
	            ctx.fill();
	          }

	          if (line) {
	            ctx.globalAlpha = data.strokeAlpha * globalAlpha;
	            ctx.strokeStyle = strokeStyle;
	            ctx.stroke();
	          }
	        } else if (data.type === SHAPES.RECT) {
	          if (isClip) {
	            //ctx.beginPath();
	            //rect本身已经是个close的path
	            ctx.rect(shape.x, shape.y, shape.width, shape.height); //ctx.closePath();
	          }

	          if (fill) {
	            ctx.globalAlpha = data.fillAlpha * globalAlpha;
	            ctx.fillStyle = fillStyle;
	            ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
	          }

	          if (line) {
	            ctx.globalAlpha = data.strokeAlpha * globalAlpha;
	            ctx.strokeStyle = strokeStyle;
	            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
	          }
	        } else if (data.type === SHAPES.CIRC) {
	          // TODO - 这里应该可以不需要走graphics，而直接设置好radius
	          ctx.beginPath();
	          ctx.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
	          ctx.closePath();

	          if (fill) {
	            ctx.globalAlpha = data.fillAlpha * globalAlpha;
	            ctx.fillStyle = fillStyle;
	            ctx.fill();
	          }

	          if (line) {
	            ctx.globalAlpha = data.strokeAlpha * globalAlpha;
	            ctx.strokeStyle = strokeStyle;
	            ctx.stroke();
	          }
	        } else if (data.type === SHAPES.ELIP) {
	          var w = shape.width * 2;
	          var h = shape.height * 2;
	          var x = shape.x - w / 2;
	          var y = shape.y - h / 2;
	          ctx.beginPath();
	          var kappa = 0.5522848;
	          var ox = w / 2 * kappa; // control point offset horizontal

	          var oy = h / 2 * kappa; // control point offset vertical

	          var xe = x + w; // x-end

	          var ye = y + h; // y-end

	          var xm = x + w / 2; // x-middle

	          var ym = y + h / 2; // y-middle

	          ctx.moveTo(x, ym);
	          ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	          ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	          ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	          ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	          ctx.closePath();

	          if (fill) {
	            ctx.globalAlpha = data.fillAlpha * globalAlpha;
	            ctx.fillStyle = fillStyle;
	            ctx.fill();
	          }

	          if (line) {
	            ctx.globalAlpha = data.strokeAlpha * globalAlpha;
	            ctx.strokeStyle = strokeStyle;
	            ctx.stroke();
	          }
	        }
	      }
	    }
	  }, {
	    key: "renderPolygon",
	    value: function renderPolygon(points, close, ctx, isClip) {
	      ctx.moveTo(points[0], points[1]);

	      for (var j = 1; j < points.length / 2; ++j) {
	        ctx.lineTo(points[j * 2], points[j * 2 + 1]);
	      }

	      if (close || isClip) {
	        ctx.closePath();
	      }
	    }
	  }]);

	  return CanvasGraphicsRenderer;
	}();

	var CanvasRenderer =
	/*#__PURE__*/
	function (_SystemRenderer) {
	  inherits(CanvasRenderer, _SystemRenderer);

	  function CanvasRenderer(app) {
	    var _this;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    classCallCheck(this, CanvasRenderer);

	    _this = possibleConstructorReturn(this, getPrototypeOf(CanvasRenderer).call(this, RENDERER_TYPE.CANVAS, app, options));
	    _this.CGR = new CanvasGraphicsRenderer(assertThisInitialized(_this));
	    return _this;
	  }

	  createClass(CanvasRenderer, [{
	    key: "render",
	    value: function render(app) {
	      var me = this;
	      me.app = app;

	      _.each(_.values(app.convertStages), function (convertStage) {
	        me.renderStage(convertStage.stage);
	      });

	      app.convertStages = {};
	    }
	  }, {
	    key: "renderStage",
	    value: function renderStage(stage) {
	      if (!stage.ctx) {
	        stage.ctx = stage.canvas.getContext("2d");
	      }

	      stage.stageRending = true;
	      stage.setWorldTransform();

	      this._clear(stage);

	      this._render(stage, stage, stage.context.globalAlpha);

	      stage.stageRending = false;
	    }
	  }, {
	    key: "_render",
	    value: function _render(stage, displayObject, globalAlpha) {
	      var ctx = stage.ctx;

	      if (!ctx) {
	        return;
	      }
	      var $MC = displayObject.context.$model;

	      if (!displayObject.worldTransform) {
	        //第一次在舞台中渲染
	        displayObject.fire("render");
	      }

	      if (!displayObject.worldTransform || displayObject._transformChange || displayObject.parent && displayObject.parent._transformChange) {
	        displayObject.setWorldTransform();
	        displayObject.fire("transform");
	        displayObject._transformChange = true;
	      }
	      globalAlpha *= $MC.globalAlpha;

	      if (!$MC.visible || displayObject.isClip) {
	        return;
	      }
	      var worldMatrixArr = displayObject.worldTransform.toArray();

	      if (worldMatrixArr) {
	        ctx.setTransform.apply(ctx, worldMatrixArr);
	      } else {
	        //如果这个displayObject的世界矩阵有问题，那么就不绘制了
	        return;
	      }
	      var isClipSave = false;

	      if (displayObject.clip && displayObject.clip.graphics) {
	        //如果这个对象有一个裁剪路径对象，那么就绘制这个裁剪路径
	        var _clip = displayObject.clip;
	        ctx.save();
	        isClipSave = true;

	        if (!_clip.worldTransform || _clip._transformChange || _clip.parent._transformChange) {
	          _clip.setWorldTransform();

	          _clip._transformChange = true;
	        }
	        ctx.setTransform.apply(ctx, _clip.worldTransform.toArray()); //如果 graphicsData.length==0 的情况下才需要执行_draw来组织graphics数据

	        if (!_clip.graphics.graphicsData.length) {
	          //当渲染器开始渲染app的时候，app下面的所有displayObject都已经准备好了对应的世界矩阵
	          _clip._draw(_clip.graphics); //_draw会完成绘制准备好 graphicsData

	        }
	        this.CGR.render(_clip, stage, globalAlpha, isClipSave);
	        _clip._transformChange = false;
	        ctx.clip();
	      }

	      if (displayObject.graphics) {
	        //如果 graphicsData.length==0 的情况下才需要执行_draw来组织 graphics 数据
	        if (!displayObject.graphics.graphicsData.length) {
	          //当渲染器开始渲染app的时候，app下面的所有displayObject都已经准备好了对应的世界矩阵
	          displayObject._draw(displayObject.graphics); //_draw会完成绘制准备好 graphicsData

	        }
	        //事件检测的时候需要用到graphics.graphicsData

	        if (!!globalAlpha) {
	          //默认要设置为实线
	          ctx.setLineDash([]); //然后如果发现这个描边非实线的话，就设置为虚线

	          if ($MC.lineType && $MC.lineType != 'solid') {
	            ctx.setLineDash($MC.lineDash);
	          }
	          this.CGR.render(displayObject, stage, globalAlpha);
	        }
	      }

	      if (displayObject.type == "text") {
	        //如果是文本
	        displayObject.render(ctx, globalAlpha);
	      }

	      if (displayObject.children) {
	        for (var i = 0, len = displayObject.children.length; i < len; i++) {
	          this._render(stage, displayObject.children[i], globalAlpha);
	        }
	      }
	      displayObject._transformChange = false;

	      if (isClipSave) {
	        //如果这个对象有裁剪对象， 则要恢复，裁剪之前的环境
	        ctx.restore();
	      }
	    }
	  }, {
	    key: "_clear",
	    value: function _clear(stage) {
	      var ctx = stage.ctx;
	      ctx.setTransform.apply(ctx, stage.worldTransform.toArray());
	      ctx.clearRect(0, 0, this.app.width, this.app.height);
	    }
	  }]);

	  return CanvasRenderer;
	}(SystemRenderer);

	function autoRenderer(app, options) {
	  return new CanvasRenderer(app, options);
	  /*
	     if (app.webGL && utils.isWebGLSupported())
	     {
	         return new WebGLRenderer( app , options);
	     };
	     return new CanvasRenderer( app , options);
	     */
	}

	var Application =
	/*#__PURE__*/
	function (_DisplayObjectContain) {
	  inherits(Application, _DisplayObjectContain);

	  function Application(opt) {
	    var _this;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    classCallCheck(this, Application);

	    opt.type = "canvax";
	    _this = possibleConstructorReturn(this, getPrototypeOf(Application).call(this, opt));
	    _this._cid = new Date().getTime() + "_" + Math.floor(Math.random() * 100);
	    _this.el = $.query(opt.el);
	    _this.width = parseInt("width" in opt || _this.el.offsetWidth, 10);
	    _this.height = parseInt("height" in opt || _this.el.offsetHeight, 10);
	    var viewObj = $.createView(_this.width, _this.height, _this._cid);
	    _this.view = viewObj.view;
	    _this.stageView = viewObj.stageView;
	    _this.domView = viewObj.domView;
	    _this.el.innerHTML = "";

	    _this.el.appendChild(_this.view);

	    _this.viewOffset = $.offset(_this.view);
	    _this.lastGetRO = 0; //最后一次获取 viewOffset 的时间

	    _this.webGL = opt.webGL;
	    _this.renderer = autoRenderer(assertThisInitialized(_this), options);
	    _this.event = null; //该属性在systenRender里面操作，每帧由心跳上报的 需要重绘的stages 列表

	    _this.convertStages = {};
	    _this.context.$model.width = _this.width;
	    _this.context.$model.height = _this.height; //然后创建一个用于绘制激活 shape 的 stage 到activation

	    _this._bufferStage = null;

	    _this._creatHoverStage(); //设置一个默认的matrix做为app的世界根节点坐标


	    _this.worldTransform = new Matrix().identity();
	    return _this;
	  }

	  createClass(Application, [{
	    key: "registEvent",
	    value: function registEvent(opt) {
	      //初始化事件委托到root元素上面
	      this.event = new event.Handler(this, opt);
	      this.event.init();
	      return this.event;
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      for (var i = 0, l = this.children.length; i < l; i++) {
	        var stage = this.children[i];
	        stage.destroy();
	        stage.canvas = null;
	        stage.ctx = null;
	        stage = null;
	        i--, l--;
	      }

	      try {
	        this.view.removeChild(this.stageView);
	        this.view.removeChild(this.domView);
	        this.el.removeChild(this.view);
	      } catch (e) {}
	      this.el.innerHTML = "";
	      this.event = null;
	      this._bufferStage = null;
	    }
	  }, {
	    key: "resize",
	    value: function resize(opt) {
	      //重新设置坐标系统 高宽 等。
	      this.width = parseInt(opt && "width" in opt || this.el.offsetWidth, 10);
	      this.height = parseInt(opt && "height" in opt || this.el.offsetHeight, 10); //this.view  width height都一直设置为100%
	      //this.view.style.width  = this.width +"px";
	      //this.view.style.height = this.height+"px";

	      this.viewOffset = $.offset(this.view);
	      this.context.$model.width = this.width;
	      this.context.$model.height = this.height;
	      var me = this;

	      var reSizeCanvas = function reSizeCanvas(canvas) {
	        canvas.style.width = me.width + "px";
	        canvas.style.height = me.height + "px";
	        canvas.setAttribute("width", me.width * Utils._devicePixelRatio);
	        canvas.setAttribute("height", me.height * Utils._devicePixelRatio);
	      };

	      _.each(this.children, function (s, i) {
	        s.context.$model.width = me.width;
	        s.context.$model.height = me.height;
	        reSizeCanvas(s.canvas);
	      });

	      this.stageView.style.width = this.width + "px";
	      this.stageView.style.height = this.height + "px";
	      this.domView.style.width = this.width + "px";
	      this.domView.style.height = this.height + "px";
	      this.heartBeat();
	    }
	  }, {
	    key: "getHoverStage",
	    value: function getHoverStage() {
	      return this._bufferStage;
	    }
	  }, {
	    key: "_creatHoverStage",
	    value: function _creatHoverStage() {
	      //TODO:创建stage的时候一定要传入width height  两个参数
	      this._bufferStage = new Stage({
	        id: "activCanvas" + new Date().getTime(),
	        context: {
	          width: this.context.$model.width,
	          height: this.context.$model.height
	        }
	      }); //该stage不参与事件检测

	      this._bufferStage._eventEnabled = false;
	      this.addChild(this._bufferStage);
	    }
	  }, {
	    key: "updateViewOffset",
	    value: function updateViewOffset() {
	      var now = new Date().getTime();

	      if (now - this.lastGetRO > 1000) {
	        this.viewOffset = $.offset(this.view);
	        this.lastGetRO = now;
	      }
	    }
	  }, {
	    key: "_afterAddChild",
	    value: function _afterAddChild(stage, index) {
	      var canvas;

	      if (!stage.canvas) {
	        canvas = $.createCanvas(this.context.$model.width, this.context.$model.height, stage.id);
	      } else {
	        canvas = stage.canvas;
	      }

	      if (this.children.length == 1) {
	        this.stageView.appendChild(canvas);
	      } else if (this.children.length > 1) {
	        if (index === undefined) {
	          //如果没有指定位置，那么就放到 _bufferStage 的下面。
	          this.stageView.insertBefore(canvas, this._bufferStage.canvas);
	        } else {
	          //如果有指定的位置，那么就指定的位置来
	          if (index >= this.children.length - 1) {
	            this.stageView.appendChild(canvas);
	          } else {
	            this.stageView.insertBefore(canvas, this.children[index].canvas);
	          }
	        }
	      }
	      Utils.initElement(canvas);
	      stage.initStage(canvas, this.context.$model.width, this.context.$model.height);
	    }
	  }, {
	    key: "_afterDelChild",
	    value: function _afterDelChild(stage) {
	      try {
	        this.stageView.removeChild(stage.canvas);
	      } catch (error) {}
	    }
	  }, {
	    key: "heartBeat",
	    value: function heartBeat(opt) {
	      if (this.children.length > 0) {
	        this.renderer.heartBeat(opt);
	      }
	    }
	  }, {
	    key: "toDataURL",
	    value: function toDataURL() {
	      var canvas = $.createCanvas(this.width, this.height, "curr_base64_canvas");
	      var ctx = canvas.getContext("2d");

	      _.each(this.children, function (stage) {
	        ctx.drawImage(stage.canvas, 0, 0);
	      });

	      return canvas.toDataURL();
	    }
	  }]);

	  return Application;
	}(DisplayObjectContainer);

	var Sprite =
	/*#__PURE__*/
	function (_DisplayObjectContain) {
	  inherits(Sprite, _DisplayObjectContain);

	  function Sprite(opt) {
	    classCallCheck(this, Sprite);

	    opt = Utils.checkOpt(opt);
	    opt.type = "sprite";
	    return possibleConstructorReturn(this, getPrototypeOf(Sprite).call(this, opt));
	  }

	  return Sprite;
	}(DisplayObjectContainer);

	var GraphicsData =
	/*#__PURE__*/
	function () {
	  function GraphicsData(lineWidth, strokeStyle, strokeAlpha, fillStyle, fillAlpha, shape) {
	    classCallCheck(this, GraphicsData);

	    this.lineWidth = lineWidth;
	    this.strokeStyle = strokeStyle;
	    this.strokeAlpha = strokeAlpha;
	    this.fillStyle = fillStyle;
	    this.fillAlpha = fillAlpha;
	    this.shape = shape;
	    this.type = shape.type;
	    this.holes = []; //这两个可以被后续修改， 具有一票否决权
	    //比如polygon的 虚线描边。必须在fill的poly上面设置line为false

	    this.fill = true;
	    this.line = true;
	  }

	  createClass(GraphicsData, [{
	    key: "clone",
	    value: function clone() {
	      var cloneGraphicsData = new GraphicsData(this.lineWidth, this.strokeStyle, this.strokeAlpha, this.fillStyle, this.fillAlpha, this.shape);
	      cloneGraphicsData.fill = this.fill;
	      cloneGraphicsData.line = this.line;
	      return cloneGraphicsData;
	    }
	  }, {
	    key: "addHole",
	    value: function addHole(shape) {
	      this.holes.push(shape);
	    } //从宿主graphics中同步最新的style属性

	  }, {
	    key: "synsStyle",
	    value: function synsStyle(style) {
	      //console.log("line:"+this.line+"__fill:"+this.fill)
	      //从shape中把绘图需要的style属性同步过来
	      if (this.line) {
	        this.lineWidth = style.lineWidth;
	        this.strokeStyle = style.strokeStyle;
	        this.strokeAlpha = style.strokeAlpha;
	      }

	      if (this.fill) {
	        this.fillStyle = style.fillStyle;
	        this.fillAlpha = style.fillAlpha;
	      }
	    }
	  }, {
	    key: "hasFill",
	    value: function hasFill() {
	      return this.fillStyle && this.fill && this.shape.closed !== undefined && this.shape.closed;
	    }
	  }, {
	    key: "hasLine",
	    value: function hasLine() {
	      return this.strokeStyle && this.lineWidth && this.line;
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.shape = null;
	      this.holes = null;
	    }
	  }]);

	  return GraphicsData;
	}();

	var arcToSegmentsCache = {},
	    segmentToBezierCache = {},
	    boundsOfCurveCache = {},
	    _join = Array.prototype.join;
	/* Adapted from http://dxr.mozilla.org/mozilla-central/source/content/svg/content/src/nsSVGPathDataParser.cpp
	 * by Andrea Bogazzi code is under MPL. if you don't have a copy of the license you can take it here
	 * http://mozilla.org/MPL/2.0/
	 */

	function arcToSegments(toX, toY, rx, ry, large, sweep, rotateX) {
	  var argsString = _join.call(arguments);

	  if (arcToSegmentsCache[argsString]) {
	    return arcToSegmentsCache[argsString];
	  }

	  var PI = Math.PI,
	      th = rotateX * PI / 180,
	      sinTh = Math.sin(th),
	      cosTh = Math.cos(th),
	      fromX = 0,
	      fromY = 0;
	  rx = Math.abs(rx);
	  ry = Math.abs(ry);
	  var px = -cosTh * toX * 0.5 - sinTh * toY * 0.5,
	      py = -cosTh * toY * 0.5 + sinTh * toX * 0.5,
	      rx2 = rx * rx,
	      ry2 = ry * ry,
	      py2 = py * py,
	      px2 = px * px,
	      pl = rx2 * ry2 - rx2 * py2 - ry2 * px2,
	      root = 0;

	  if (pl < 0) {
	    var s = Math.sqrt(1 - pl / (rx2 * ry2));
	    rx *= s;
	    ry *= s;
	  } else {
	    root = (large === sweep ? -1.0 : 1.0) * Math.sqrt(pl / (rx2 * py2 + ry2 * px2));
	  }

	  var cx = root * rx * py / ry,
	      cy = -root * ry * px / rx,
	      cx1 = cosTh * cx - sinTh * cy + toX * 0.5,
	      cy1 = sinTh * cx + cosTh * cy + toY * 0.5,
	      mTheta = calcVectorAngle(1, 0, (px - cx) / rx, (py - cy) / ry),
	      dtheta = calcVectorAngle((px - cx) / rx, (py - cy) / ry, (-px - cx) / rx, (-py - cy) / ry);

	  if (sweep === 0 && dtheta > 0) {
	    dtheta -= 2 * PI;
	  } else if (sweep === 1 && dtheta < 0) {
	    dtheta += 2 * PI;
	  } // Convert into cubic bezier segments <= 90deg


	  var segments = Math.ceil(Math.abs(dtheta / PI * 2)),
	      result = [],
	      mDelta = dtheta / segments,
	      mT = 8 / 3 * Math.sin(mDelta / 4) * Math.sin(mDelta / 4) / Math.sin(mDelta / 2),
	      th3 = mTheta + mDelta;

	  for (var i = 0; i < segments; i++) {
	    result[i] = segmentToBezier(mTheta, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY);
	    fromX = result[i][4];
	    fromY = result[i][5];
	    mTheta = th3;
	    th3 += mDelta;
	  }

	  arcToSegmentsCache[argsString] = result;
	  return result;
	}

	function segmentToBezier(th2, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY) {
	  var argsString2 = _join.call(arguments);

	  if (segmentToBezierCache[argsString2]) {
	    return segmentToBezierCache[argsString2];
	  }

	  var costh2 = Math.cos(th2),
	      sinth2 = Math.sin(th2),
	      costh3 = Math.cos(th3),
	      sinth3 = Math.sin(th3),
	      toX = cosTh * rx * costh3 - sinTh * ry * sinth3 + cx1,
	      toY = sinTh * rx * costh3 + cosTh * ry * sinth3 + cy1,
	      cp1X = fromX + mT * (-cosTh * rx * sinth2 - sinTh * ry * costh2),
	      cp1Y = fromY + mT * (-sinTh * rx * sinth2 + cosTh * ry * costh2),
	      cp2X = toX + mT * (cosTh * rx * sinth3 + sinTh * ry * costh3),
	      cp2Y = toY + mT * (sinTh * rx * sinth3 - cosTh * ry * costh3);
	  segmentToBezierCache[argsString2] = [cp1X, cp1Y, cp2X, cp2Y, toX, toY];
	  return segmentToBezierCache[argsString2];
	}
	/*
	 * Private
	 */


	function calcVectorAngle(ux, uy, vx, vy) {
	  var ta = Math.atan2(uy, ux),
	      tb = Math.atan2(vy, vx);

	  if (tb >= ta) {
	    return tb - ta;
	  } else {
	    return 2 * Math.PI - (ta - tb);
	  }
	}
	/**
	 * Draws arc
	 * @param {graphics} graphics
	 * @param {Number} fx
	 * @param {Number} fy
	 * @param {Array} coords
	 */


	var drawArc = function drawArc(graphics, fx, fy, coords) {
	  var rx = coords[0],
	      ry = coords[1],
	      rot = coords[2],
	      large = coords[3],
	      sweep = coords[4],
	      tx = coords[5],
	      ty = coords[6],
	      segs = [[], [], [], []],
	      segsNorm = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);

	  for (var i = 0, len = segsNorm.length; i < len; i++) {
	    segs[i][0] = segsNorm[i][0] + fx;
	    segs[i][1] = segsNorm[i][1] + fy;
	    segs[i][2] = segsNorm[i][2] + fx;
	    segs[i][3] = segsNorm[i][3] + fy;
	    segs[i][4] = segsNorm[i][4] + fx;
	    segs[i][5] = segsNorm[i][5] + fy;
	    graphics.bezierCurveTo.apply(graphics, segs[i]);
	  }
	};
	/**
	 * Calculate bounding box of a elliptic-arc
	 * @param {Number} fx start point of arc
	 * @param {Number} fy
	 * @param {Number} rx horizontal radius
	 * @param {Number} ry vertical radius
	 * @param {Number} rot angle of horizontal axe
	 * @param {Number} large 1 or 0, whatever the arc is the big or the small on the 2 points
	 * @param {Number} sweep 1 or 0, 1 clockwise or counterclockwise direction
	 * @param {Number} tx end point of arc
	 * @param {Number} ty
	 */


	var getBoundsOfArc = function getBoundsOfArc(fx, fy, rx, ry, rot, large, sweep, tx, ty) {
	  var fromX = 0,
	      fromY = 0,
	      bound,
	      bounds = [],
	      segs = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);

	  for (var i = 0, len = segs.length; i < len; i++) {
	    bound = getBoundsOfCurve(fromX, fromY, segs[i][0], segs[i][1], segs[i][2], segs[i][3], segs[i][4], segs[i][5]);
	    bounds.push({
	      x: bound[0].x + fx,
	      y: bound[0].y + fy
	    });
	    bounds.push({
	      x: bound[1].x + fx,
	      y: bound[1].y + fy
	    });
	    fromX = segs[i][4];
	    fromY = segs[i][5];
	  }

	  return bounds;
	};
	/**
	 * Calculate bounding box of a beziercurve
	 * @param {Number} x0 starting point
	 * @param {Number} y0
	 * @param {Number} x1 first control point
	 * @param {Number} y1
	 * @param {Number} x2 secondo control point
	 * @param {Number} y2
	 * @param {Number} x3 end of beizer
	 * @param {Number} y3
	 */
	// taken from http://jsbin.com/ivomiq/56/edit  no credits available for that.


	function getBoundsOfCurve(x0, y0, x1, y1, x2, y2, x3, y3) {
	  var argsString = _join.call(arguments);

	  if (boundsOfCurveCache[argsString]) {
	    return boundsOfCurveCache[argsString];
	  }

	  var sqrt = Math.sqrt,
	      min = Math.min,
	      max = Math.max,
	      abs = Math.abs,
	      tvalues = [],
	      bounds = [[], []],
	      a,
	      b,
	      c,
	      t,
	      t1,
	      t2,
	      b2ac,
	      sqrtb2ac;
	  b = 6 * x0 - 12 * x1 + 6 * x2;
	  a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
	  c = 3 * x1 - 3 * x0;

	  for (var i = 0; i < 2; ++i) {
	    if (i > 0) {
	      b = 6 * y0 - 12 * y1 + 6 * y2;
	      a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
	      c = 3 * y1 - 3 * y0;
	    }

	    if (abs(a) < 1e-12) {
	      if (abs(b) < 1e-12) {
	        continue;
	      }

	      t = -c / b;

	      if (0 < t && t < 1) {
	        tvalues.push(t);
	      }

	      continue;
	    }

	    b2ac = b * b - 4 * c * a;

	    if (b2ac < 0) {
	      continue;
	    }

	    sqrtb2ac = sqrt(b2ac);
	    t1 = (-b + sqrtb2ac) / (2 * a);

	    if (0 < t1 && t1 < 1) {
	      tvalues.push(t1);
	    }

	    t2 = (-b - sqrtb2ac) / (2 * a);

	    if (0 < t2 && t2 < 1) {
	      tvalues.push(t2);
	    }
	  }

	  var x,
	      y,
	      j = tvalues.length,
	      jlen = j,
	      mt;

	  while (j--) {
	    t = tvalues[j];
	    mt = 1 - t;
	    x = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
	    bounds[0][j] = x;
	    y = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
	    bounds[1][j] = y;
	  }

	  bounds[0][jlen] = x0;
	  bounds[1][jlen] = y0;
	  bounds[0][jlen + 1] = x3;
	  bounds[1][jlen + 1] = y3;
	  var result = [{
	    x: min.apply(null, bounds[0]),
	    y: min.apply(null, bounds[1])
	  }, {
	    x: max.apply(null, bounds[0]),
	    y: max.apply(null, bounds[1])
	  }];
	  boundsOfCurveCache[argsString] = result;
	  return result;
	}

	var Arc = {
	  drawArc: drawArc,
	  getBoundsOfCurve: getBoundsOfCurve,
	  getBoundsOfArc: getBoundsOfArc
	};

	var Rectangle =
	/*#__PURE__*/
	function () {
	  function Rectangle() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	    classCallCheck(this, Rectangle);

	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.type = SHAPES.RECT;
	    this.closed = true;
	  }

	  createClass(Rectangle, [{
	    key: "clone",
	    value: function clone() {
	      return new Rectangle(this.x, this.y, this.width, this.height);
	    }
	  }, {
	    key: "copy",
	    value: function copy(rectangle) {
	      this.x = rectangle.x;
	      this.y = rectangle.y;
	      this.width = rectangle.width;
	      this.height = rectangle.height;
	      return this;
	    }
	  }, {
	    key: "contains",
	    value: function contains(x, y) {
	      /*
	      if (this.width <= 0 || this.height <= 0)
	      {
	          return false;
	      }
	      */
	      if (this.height * y < 0 || this.width * x < 0) {
	        return false;
	      }

	      if (x >= this.x && x <= this.x + this.width && (this.height >= 0 && y >= this.y && y <= this.y + this.height || this.height < 0 && y <= this.y && y >= this.y + this.height)) {
	        return true;
	      }

	      return false; //当x和 width , y和height都 为正或者都未负数的情况下，才可能在范围内
	    }
	  }]);

	  return Rectangle;
	}();

	var Circle =
	/*#__PURE__*/
	function () {
	  function Circle() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	    classCallCheck(this, Circle);

	    this.x = x;
	    this.y = y;
	    this.radius = radius;
	    this.type = SHAPES.CIRC;
	    this.closed = true;
	  }

	  createClass(Circle, [{
	    key: "clone",
	    value: function clone() {
	      return new Circle(this.x, this.y, this.radius);
	    }
	  }, {
	    key: "contains",
	    value: function contains(x, y) {
	      if (this.radius <= 0) {
	        return false;
	      }

	      var r2 = this.radius * this.radius;
	      var dx = this.x - x;
	      var dy = this.y - y;
	      dx *= dx;
	      dy *= dy;
	      return dx + dy <= r2;
	    }
	  }, {
	    key: "getBounds",
	    value: function getBounds() {
	      return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
	    }
	  }]);

	  return Circle;
	}();

	var Ellipse =
	/*#__PURE__*/
	function () {
	  function Ellipse() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	    classCallCheck(this, Ellipse);

	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.type = SHAPES.ELIP;
	    this.closed = true;
	  }

	  createClass(Ellipse, [{
	    key: "clone",
	    value: function clone() {
	      return new Ellipse(this.x, this.y, this.width, this.height);
	    }
	  }, {
	    key: "contains",
	    value: function contains(x, y) {
	      if (this.width <= 0 || this.height <= 0) {
	        return false;
	      }

	      var normx = (x - this.x) / this.width;
	      var normy = (y - this.y) / this.height;
	      normx *= normx;
	      normy *= normy;
	      return normx + normy <= 1;
	    }
	  }, {
	    key: "getBounds",
	    value: function getBounds() {
	      return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
	    }
	  }]);

	  return Ellipse;
	}();

	var Polygon =
	/*#__PURE__*/
	function () {
	  function Polygon() {
	    for (var _len = arguments.length, points = new Array(_len), _key = 0; _key < _len; _key++) {
	      points[_key] = arguments[_key];
	    }

	    classCallCheck(this, Polygon);

	    var point_0 = points[0];

	    if (Array.isArray(point_0)) {
	      points = point_0;
	    }

	    if (point_0 && "x" in point_0 && "y" in point_0) {
	      var p = [];

	      for (var i = 0, il = points.length; i < il; i++) {
	        p.push(points[i].x, points[i].y);
	      }

	      points = p;
	    }

	    this.closed = true;
	    this.points = points;
	    this.type = SHAPES.POLY;
	  }

	  createClass(Polygon, [{
	    key: "clone",
	    value: function clone() {
	      return new Polygon(this.points.slice());
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      var points = this.points;

	      if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
	        points.push(points[0], points[1]);
	      }

	      this.closed = true;
	    }
	  }, {
	    key: "contains",
	    value: function contains(x, y) {
	      return this._isInsidePolygon_WindingNumber(x, y);
	    }
	    /**
	     * 多边形包含判断 Nonzero Winding Number Rule
	     */

	  }, {
	    key: "_isInsidePolygon_WindingNumber",
	    value: function _isInsidePolygon_WindingNumber(x, y) {
	      var points = this.points;
	      var wn = 0;

	      for (var shiftP, shift = points[1] > y, i = 3; i < points.length; i += 2) {
	        shiftP = shift;
	        shift = points[i] > y;

	        if (shiftP != shift) {
	          var n = (shiftP ? 1 : 0) - (shift ? 1 : 0);

	          if (n * ((points[i - 3] - x) * (points[i - 0] - y) - (points[i - 2] - y) * (points[i - 1] - x)) > 0) {
	            wn += n;
	          }
	        }
	      }
	      return wn;
	    }
	  }]);

	  return Polygon;
	}();

	function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
	  var path = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];
	  var n = 20;
	  var dt = 0;
	  var dt2 = 0;
	  var dt3 = 0;
	  var t2 = 0;
	  var t3 = 0;
	  path.push(fromX, fromY);

	  for (var i = 1, j = 0; i <= n; ++i) {
	    j = i / n;
	    dt = 1 - j;
	    dt2 = dt * dt;
	    dt3 = dt2 * dt;
	    t2 = j * j;
	    t3 = t2 * j;
	    path.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
	  }

	  return path;
	}

	var Graphics =
	/*#__PURE__*/
	function () {
	  function Graphics(shape) {
	    classCallCheck(this, Graphics);

	    this.lineWidth = 1;
	    this.strokeStyle = null;
	    this.strokeAlpha = 1;
	    this.fillStyle = null;
	    this.fillAlpha = 1; //比如path m 0 0 l 0 0 m 1 1 l 1 1
	    //就会有两条graphicsData数据产生

	    this.graphicsData = [];
	    this.currentPath = null;
	    this.dirty = 0; //用于检测图形对象是否已更改。 如果这是设置为true，那么图形对象将被重新计算。

	    this.clearDirty = 0; //用于检测我们是否清除了图形webGL数据

	    this._webGL = {};
	    this.worldAlpha = 1;
	    this.tint = 0xFFFFFF; //目标对象附加颜色

	    this.Bound = {
	      x: 0,
	      y: 0,
	      width: 0,
	      height: 0
	    };
	  }

	  createClass(Graphics, [{
	    key: "setStyle",
	    value: function setStyle(context) {
	      //从 shape 中把绘图需要的style属性同步过来
	      var model = context.$model;
	      this.lineWidth = model.lineWidth;
	      this.strokeStyle = model.strokeStyle;
	      this.strokeAlpha = model.strokeAlpha * model.globalAlpha;
	      this.fillStyle = model.fillStyle;
	      this.fillAlpha = model.fillAlpha * model.globalAlpha;
	      var g = this; //一般都是先设置好style的，所以 ， 当后面再次设置新的style的时候
	      //会把所有的data都修改
	      //TODO: 后面需要修改, 能精准的确定是修改 graphicsData 中的哪个data

	      if (this.graphicsData.length) {
	        _.each(this.graphicsData, function (gd, i) {
	          gd.synsStyle(g);
	        });
	      }
	    }
	  }, {
	    key: "clone",
	    value: function clone() {
	      var clone = new Graphics();
	      clone.dirty = 0; // copy graphics data

	      for (var i = 0; i < this.graphicsData.length; ++i) {
	        clone.graphicsData.push(this.graphicsData[i].clone());
	      }

	      clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];
	      return clone;
	    }
	  }, {
	    key: "moveTo",
	    value: function moveTo(x, y) {
	      var shape = new Polygon([x, y]);
	      shape.closed = false;
	      this.drawShape(shape);
	      return this;
	    }
	  }, {
	    key: "lineTo",
	    value: function lineTo(x, y) {
	      if (this.currentPath) {
	        this.currentPath.shape.points.push(x, y);
	        this.dirty++;
	      } else {
	        this.moveTo(0, 0);
	      }

	      return this;
	    }
	  }, {
	    key: "quadraticCurveTo",
	    value: function quadraticCurveTo(cpX, cpY, toX, toY) {
	      if (this.currentPath) {
	        if (this.currentPath.shape.points.length === 0) {
	          this.currentPath.shape.points = [0, 0];
	        }
	      } else {
	        this.moveTo(0, 0);
	      }

	      var n = 20;
	      var points = this.currentPath.shape.points;
	      var xa = 0;
	      var ya = 0;

	      if (points.length === 0) {
	        this.moveTo(0, 0);
	      }

	      var fromX = points[points.length - 2];
	      var fromY = points[points.length - 1];

	      for (var i = 1; i <= n; ++i) {
	        var j = i / n;
	        xa = fromX + (cpX - fromX) * j;
	        ya = fromY + (cpY - fromY) * j;
	        points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
	      }

	      this.dirty++;
	      return this;
	    }
	  }, {
	    key: "bezierCurveTo",
	    value: function bezierCurveTo$1(cpX, cpY, cpX2, cpY2, toX, toY) {
	      if (this.currentPath) {
	        if (this.currentPath.shape.points.length === 0) {
	          this.currentPath.shape.points = [0, 0];
	        }
	      } else {
	        this.moveTo(0, 0);
	      }

	      var points = this.currentPath.shape.points;
	      var fromX = points[points.length - 2];
	      var fromY = points[points.length - 1];
	      points.length -= 2;

	      bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, points);

	      this.dirty++;
	      return this;
	    }
	  }, {
	    key: "arcTo",
	    value: function arcTo(x1, y1, x2, y2, radius) {
	      if (this.currentPath) {
	        if (this.currentPath.shape.points.length === 0) {
	          this.currentPath.shape.points.push(x1, y1);
	        }
	      } else {
	        this.moveTo(x1, y1);
	      }

	      var points = this.currentPath.shape.points;
	      var fromX = points[points.length - 2];
	      var fromY = points[points.length - 1];
	      var a1 = fromY - y1;
	      var b1 = fromX - x1;
	      var a2 = y2 - y1;
	      var b2 = x2 - x1;
	      var mm = Math.abs(a1 * b2 - b1 * a2);

	      if (mm < 1.0e-8 || radius === 0) {
	        if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
	          points.push(x1, y1);
	        }
	      } else {
	        var dd = a1 * a1 + b1 * b1;
	        var cc = a2 * a2 + b2 * b2;
	        var tt = a1 * a2 + b1 * b2;
	        var k1 = radius * Math.sqrt(dd) / mm;
	        var k2 = radius * Math.sqrt(cc) / mm;
	        var j1 = k1 * tt / dd;
	        var j2 = k2 * tt / cc;
	        var cx = k1 * b2 + k2 * b1;
	        var cy = k1 * a2 + k2 * a1;
	        var px = b1 * (k2 + j1);
	        var py = a1 * (k2 + j1);
	        var qx = b2 * (k1 + j2);
	        var qy = a2 * (k1 + j2);
	        var startAngle = Math.atan2(py - cy, px - cx);
	        var endAngle = Math.atan2(qy - cy, qx - cx);
	        this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
	      }

	      this.dirty++;
	      return this;
	    }
	  }, {
	    key: "arc",
	    value: function arc(cx, cy, radius, startAngle, endAngle) {
	      var anticlockwise = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

	      if (startAngle === endAngle) {
	        return this;
	      }

	      if (!anticlockwise && endAngle <= startAngle) {
	        endAngle += Math.PI * 2;
	      } else if (anticlockwise && startAngle <= endAngle) {
	        startAngle += Math.PI * 2;
	      }

	      var sweep = endAngle - startAngle;
	      var segs = Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * 48;

	      if (sweep === 0) {
	        return this;
	      }

	      var startX = cx + Math.cos(startAngle) * radius;
	      var startY = cy + Math.sin(startAngle) * radius; // If the currentPath exists, take its points. Otherwise call `moveTo` to start a path.

	      var points = this.currentPath ? this.currentPath.shape.points : null;

	      if (points) {
	        if (points[points.length - 2] !== startX || points[points.length - 1] !== startY) {
	          points.push(startX, startY);
	        }
	      } else {
	        this.moveTo(startX, startY);
	        points = this.currentPath.shape.points;
	      }

	      var theta = sweep / (segs * 2);
	      var theta2 = theta * 2;
	      var cTheta = Math.cos(theta);
	      var sTheta = Math.sin(theta);
	      var segMinus = segs - 1;
	      var remainder = segMinus % 1 / segMinus;

	      for (var i = 0; i <= segMinus; ++i) {
	        var real = i + remainder * i;
	        var angle = theta + startAngle + theta2 * real;
	        var c = Math.cos(angle);
	        var s = -Math.sin(angle);
	        points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
	      }

	      this.dirty++;
	      return this;
	    }
	  }, {
	    key: "drawRect",
	    value: function drawRect(x, y, width, height) {
	      this.drawShape(new Rectangle(x, y, width, height));
	      return this;
	    }
	  }, {
	    key: "drawCircle",
	    value: function drawCircle(x, y, radius) {
	      this.drawShape(new Circle(x, y, radius));
	      return this;
	    }
	  }, {
	    key: "drawEllipse",
	    value: function drawEllipse(x, y, width, height) {
	      this.drawShape(new Ellipse(x, y, width, height));
	      return this;
	    }
	  }, {
	    key: "drawPolygon",
	    value: function drawPolygon(path) {
	      // prevents an argument assignment deopt
	      // see section 3.1: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
	      var points = path;
	      var closed = true;

	      if (points instanceof Polygon) {
	        closed = points.closed;
	        points = points.points;
	      }

	      if (!Array.isArray(points)) {
	        // prevents an argument leak deopt
	        // see section 3.2: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
	        points = new Array(arguments.length);

	        for (var i = 0; i < points.length; ++i) {
	          points[i] = arguments[i]; // eslint-disable-line prefer-rest-params
	        }
	      }

	      var shape = new Polygon(points);
	      shape.closed = closed;
	      this.drawShape(shape);
	      return this;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      if (this.graphicsData.length > 0) {
	        this.dirty++;
	        this.clearDirty++;
	        this.graphicsData.length = 0;
	      }

	      this.currentPath = null;
	      return this;
	    }
	  }, {
	    key: "drawShape",
	    value: function drawShape(shape) {
	      if (this.currentPath) {
	        if (this.currentPath.shape.points.length <= 2) {
	          this.graphicsData.pop();
	        }
	      } //this.currentPath = null;


	      this.beginPath();
	      var data = new GraphicsData(this.lineWidth, this.strokeStyle, this.strokeAlpha, this.fillStyle, this.fillAlpha, shape);
	      this.graphicsData.push(data);

	      if (data.type === SHAPES.POLY) {
	        data.shape.closed = data.shape.closed;
	        this.currentPath = data;
	      }

	      this.dirty++;
	      return data;
	    }
	  }, {
	    key: "beginPath",
	    value: function beginPath() {
	      this.currentPath = null;
	    }
	  }, {
	    key: "closePath",
	    value: function closePath() {
	      var currentPath = this.currentPath;

	      if (currentPath && currentPath.shape) {
	        currentPath.shape.close();
	      }

	      return this;
	    }
	    /**
	    * Update the bounds of the object
	    *
	    */

	  }, {
	    key: "updateLocalBounds",
	    value: function updateLocalBounds() {
	      var minX = Infinity;
	      var maxX = -Infinity;
	      var minY = Infinity;
	      var maxY = -Infinity;

	      if (this.graphicsData.length) {
	        var shape = 0;
	        var x = 0;
	        var y = 0;
	        var w = 0;
	        var h = 0;

	        for (var i = 0; i < this.graphicsData.length; i++) {
	          var data = this.graphicsData[i];
	          var type = data.type;
	          var lineWidth = data.lineWidth;
	          shape = data.shape;

	          if (type === SHAPES.RECT || type === SHAPES.RREC) {
	            x = shape.x - lineWidth / 2;
	            y = shape.y - lineWidth / 2;
	            w = shape.width + lineWidth;
	            h = shape.height + lineWidth;
	            minX = x < minX ? x : minX;
	            maxX = x + w > maxX ? x + w : maxX;
	            minY = y < minY ? y : minY;
	            maxY = y + h > maxY ? y + h : maxY;
	          } else if (type === SHAPES.CIRC) {
	            x = shape.x;
	            y = shape.y;
	            w = shape.radius + lineWidth / 2;
	            h = shape.radius + lineWidth / 2;
	            minX = x - w < minX ? x - w : minX;
	            maxX = x + w > maxX ? x + w : maxX;
	            minY = y - h < minY ? y - h : minY;
	            maxY = y + h > maxY ? y + h : maxY;
	          } else if (type === SHAPES.ELIP) {
	            x = shape.x;
	            y = shape.y;
	            w = shape.width + lineWidth / 2;
	            h = shape.height + lineWidth / 2;
	            minX = x - w < minX ? x - w : minX;
	            maxX = x + w > maxX ? x + w : maxX;
	            minY = y - h < minY ? y - h : minY;
	            maxY = y + h > maxY ? y + h : maxY;
	          } else {
	            // POLY
	            var points = shape.points;
	            var x2 = 0;
	            var y2 = 0;
	            var dx = 0;
	            var dy = 0;
	            var rw = 0;
	            var rh = 0;
	            var cx = 0;
	            var cy = 0;

	            for (var j = 0; j + 2 < points.length; j += 2) {
	              x = points[j];
	              y = points[j + 1];
	              x2 = points[j + 2];
	              y2 = points[j + 3];
	              dx = Math.abs(x2 - x);
	              dy = Math.abs(y2 - y);
	              h = lineWidth;
	              w = Math.sqrt(dx * dx + dy * dy);

	              if (w < 1e-9) {
	                continue;
	              }

	              rw = (h / w * dy + dx) / 2;
	              rh = (h / w * dx + dy) / 2;
	              cx = (x2 + x) / 2;
	              cy = (y2 + y) / 2;
	              minX = cx - rw < minX ? cx - rw : minX;
	              maxX = cx + rw > maxX ? cx + rw : maxX;
	              minY = cy - rh < minY ? cy - rh : minY;
	              maxY = cy + rh > maxY ? cy + rh : maxY;
	            }
	          }
	        }
	      } else {
	        minX = 0;
	        maxX = 0;
	        minY = 0;
	        maxY = 0;
	      }

	      this.Bound = {
	        x: minX,
	        y: minY,
	        width: maxX - minX,
	        height: maxY - minY
	      };
	      return this;
	    }
	  }, {
	    key: "getBound",
	    value: function getBound() {
	      return this.updateLocalBounds().Bound;
	    }
	  }, {
	    key: "destroy",
	    value: function destroy(options) {
	      for (var i = 0; i < this.graphicsData.length; ++i) {
	        this.graphicsData[i].destroy();
	      }

	      for (var id in this._webGL) {
	        for (var j = 0; j < this._webGL[id].data.length; ++j) {
	          this._webGL[id].data[j].destroy();
	        }
	      }

	      this.graphicsData = null;
	      this.currentPath = null;
	      this._webGL = null;
	    }
	  }]);

	  return Graphics;
	}();

	var Shape =
	/*#__PURE__*/
	function (_DisplayObject) {
	  inherits(Shape, _DisplayObject);

	  function Shape(opt) {
	    var _this;

	    classCallCheck(this, Shape);

	    opt = Utils.checkOpt(opt);
	    var styleContext = {
	      cursor: opt.context.cursor || "default",
	      fillAlpha: opt.context.fillAlpha || 1,
	      //context2d里没有，自定义
	      fillStyle: opt.context.fillStyle || null,
	      //"#000000",
	      lineCap: opt.context.lineCap || "round",
	      //默认都是直角
	      lineJoin: opt.context.lineJoin || "round",
	      //这两个目前webgl里面没实现
	      miterLimit: opt.context.miterLimit || null,
	      //miterLimit 属性设置或返回最大斜接长度,只有当 lineJoin 属性为 "miter" 时，miterLimit 才有效。
	      strokeAlpha: opt.context.strokeAlpha || 1,
	      //context2d里没有，自定义
	      strokeStyle: opt.context.strokeStyle || null,
	      lineType: opt.context.lineType || "solid",
	      //context2d里没有，自定义线条的type，默认为实线
	      lineDash: opt.context.lineDash || [6, 3],
	      lineWidth: opt.context.lineWidth || null
	    };

	    var _context = _.extend(true, styleContext, opt.context);

	    opt.context = _context;

	    if (opt.id === undefined && opt.type !== undefined) {
	      opt.id = Utils.createId(opt.type);
	    }
	    _this = possibleConstructorReturn(this, getPrototypeOf(Shape).call(this, opt)); //over的时候如果有修改样式，就为true

	    _this._hoverClass = false;
	    _this.hoverClone = true; //是否开启在hover的时候clone一份到active stage 中 

	    _this.pointChkPriority = true; //在鼠标mouseover到该节点，然后mousemove的时候，是否优先检测该节点

	    _this._eventEnabled = false; //是否响应事件交互,在添加了事件侦听后会自动设置为true

	    _this.dragEnabled = opt.dragEnabled || false; //"dragEnabled" in opt ? opt.dragEnabled : false;   //是否启用元素的拖拽
	    //拖拽drag的时候显示在activShape的副本

	    _this._dragDuplicate = null;
	    _this.type = _this.type || "shape"; //处理所有的图形一些共有的属性配置,把除开id,context之外的所有属性，全部挂载到this上面

	    _this.initCompProperty(opt); //如果该元素是clone而来，则不需要绘制


	    if (!_this.isClone) {
	      //如果是clone对象的话就直接
	      _this.graphics = new Graphics();

	      _this._draw(_this.graphics);
	    } else {
	      _this.graphics = null;
	    }

	    return _this;
	  }

	  createClass(Shape, [{
	    key: "_draw",
	    value: function _draw(graphics) {
	      if (graphics.graphicsData.length == 0) {
	        //先设置好当前graphics的style
	        graphics.setStyle(this.context);
	        this.draw(graphics);
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw() {}
	  }, {
	    key: "clearGraphicsData",
	    value: function clearGraphicsData() {
	      this.graphics.clear();
	    }
	  }, {
	    key: "$watch",
	    value: function $watch(name, value, preValue) {
	      if (_.indexOf(STYLE_PROPS, name) > -1) {
	        this.graphics.setStyle(this.context);
	      }

	      this.watch(name, value, preValue);
	    }
	  }, {
	    key: "initCompProperty",
	    value: function initCompProperty(opt) {
	      for (var i in opt) {
	        if (i != "id" && i != "context") {
	          this[i] = opt[i];
	        }
	      }
	    }
	  }, {
	    key: "getBound",
	    value: function getBound() {
	      return this.graphics.updateLocalBounds().Bound;
	    }
	  }]);

	  return Shape;
	}(DisplayObject);

	var Text =
	/*#__PURE__*/
	function (_DisplayObject) {
	  inherits(Text, _DisplayObject);

	  function Text(text, opt) {
	    var _this;

	    classCallCheck(this, Text);

	    opt.type = "text";

	    if (text === null || text === undefined) {
	      text = "";
	    }
	    opt.context = _.extend({
	      font: "",
	      fontSize: 13,
	      //字体大小默认13
	      fontWeight: "normal",
	      fontFamily: "微软雅黑,sans-serif",
	      textBaseline: "top",
	      textAlign: "left",
	      textDecoration: null,
	      fillStyle: 'blank',
	      strokeStyle: null,
	      lineWidth: 0,
	      lineHeight: 1.2,
	      backgroundColor: null,
	      textBackgroundColor: null
	    }, opt.context);
	    _this = possibleConstructorReturn(this, getPrototypeOf(Text).call(this, opt));
	    _this._reNewline = /\r?\n/;
	    _this.fontProperts = ["fontStyle", "fontVariant", "fontWeight", "fontSize", "fontFamily"];
	    _this.context.font = _this._getFontDeclaration();
	    _this.text = text.toString();
	    _this.context.width = _this.getTextWidth();
	    _this.context.height = _this.getTextHeight();
	    return _this;
	  }

	  createClass(Text, [{
	    key: "$watch",
	    value: function $watch(name, value, preValue) {
	      //context属性有变化的监听函数
	      if (_.indexOf(this.fontProperts, name) >= 0) {
	        this.context[name] = value; //如果修改的是font的某个内容，就重新组装一遍font的值，
	        //然后通知引擎这次对context的修改上报心跳

	        this.context.font = this._getFontDeclaration();
	        this.context.width = this.getTextWidth();
	        this.context.height = this.getTextHeight();
	      }
	    }
	  }, {
	    key: "_setContextStyle",
	    value: function _setContextStyle(ctx, style, globalAlpha) {
	      // 简单判断不做严格类型检测
	      for (var p in style) {
	        if (p != "textBaseline" && p in ctx) {
	          if (style[p] || _.isNumber(style[p])) {
	            if (p == "globalAlpha") {
	              //透明度要从父节点继承
	              //ctx[p] = style[p] * globalAlpha; //render里面已经做过相乘了，不需要重新*
	              ctx.globalAlpha = globalAlpha;
	            } else {
	              ctx[p] = style[p];
	            }
	          }
	        }
	      }
	      return;
	    }
	  }, {
	    key: "render",
	    value: function render(ctx, globalAlpha) {
	      this._renderText(ctx, this._getTextLines(), globalAlpha);
	    }
	  }, {
	    key: "resetText",
	    value: function resetText(text) {
	      this.text = text.toString();
	      this.heartBeat();
	    }
	  }, {
	    key: "getTextWidth",
	    value: function getTextWidth() {
	      var width = 0;

	      if (Utils._pixelCtx) {
	        Utils._pixelCtx.save();

	        Utils._pixelCtx.font = this.context.$model.font;
	        width = this._getTextWidth(Utils._pixelCtx, this._getTextLines());

	        Utils._pixelCtx.restore();
	      }
	      return width;
	    }
	  }, {
	    key: "getTextHeight",
	    value: function getTextHeight() {
	      return this._getTextHeight(Utils._pixelCtx, this._getTextLines());
	    }
	  }, {
	    key: "_getTextLines",
	    value: function _getTextLines() {
	      return this.text.split(this._reNewline);
	    }
	  }, {
	    key: "_renderText",
	    value: function _renderText(ctx, textLines, globalAlpha) {
	      if (!ctx) return;
	      ctx.save();

	      this._setContextStyle(ctx, this.context.$model, globalAlpha);

	      this._renderTextStroke(ctx, textLines);

	      this._renderTextFill(ctx, textLines);

	      ctx.restore();
	    }
	  }, {
	    key: "_getFontDeclaration",
	    value: function _getFontDeclaration() {
	      var self = this;
	      var fontArr = [];

	      _.each(this.fontProperts, function (p) {
	        var fontP = self.context[p];

	        if (p == "fontSize") {
	          fontP = parseFloat(fontP) + "px";
	        }

	        fontP && fontArr.push(fontP);
	      });

	      return fontArr.join(' ');
	    }
	  }, {
	    key: "_renderTextFill",
	    value: function _renderTextFill(ctx, textLines) {
	      if (!this.context.$model.fillStyle) return;
	      this._boundaries = [];
	      var lineHeights = 0;

	      for (var i = 0, len = textLines.length; i < len; i++) {
	        var heightOfLine = this._getHeightOfLine(ctx, i, textLines);

	        lineHeights += heightOfLine;

	        this._renderTextLine('fillText', ctx, textLines[i], 0, //this._getLeftOffset(),
	        this._getTopOffset() + lineHeights, i);
	      }
	    }
	  }, {
	    key: "_renderTextStroke",
	    value: function _renderTextStroke(ctx, textLines) {
	      if (!ctx) return;
	      if (!this.context.$model.strokeStyle || !this.context.$model.lineWidth) return;
	      var lineHeights = 0;
	      ctx.save();

	      if (this.strokeDashArray) {
	        if (1 & this.strokeDashArray.length) {
	          this.strokeDashArray.push.apply(this.strokeDashArray, this.strokeDashArray);
	        }

	        supportsLineDash && ctx.setLineDash(this.strokeDashArray);
	      }

	      ctx.beginPath();

	      for (var i = 0, len = textLines.length; i < len; i++) {
	        var heightOfLine = this._getHeightOfLine(ctx, i, textLines);

	        lineHeights += heightOfLine;

	        this._renderTextLine('strokeText', ctx, textLines[i], 0, //this._getLeftOffset(),
	        this._getTopOffset() + lineHeights, i);
	      }

	      ctx.closePath();
	      ctx.restore();
	    }
	  }, {
	    key: "_renderTextLine",
	    value: function _renderTextLine(method, ctx, line, left, top, lineIndex) {
	      top -= this._getHeightOfLine() / 4;

	      if (this.context.$model.textAlign !== 'justify') {
	        this._renderChars(method, ctx, line, left, top, lineIndex);

	        return;
	      }
	      var lineWidth = ctx.measureText(line).width;
	      var totalWidth = this.context.$model.width;

	      if (totalWidth > lineWidth) {
	        var words = line.split(/\s+/);
	        var wordsWidth = ctx.measureText(line.replace(/\s+/g, '')).width;
	        var widthDiff = totalWidth - wordsWidth;
	        var numSpaces = words.length - 1;
	        var spaceWidth = widthDiff / numSpaces;
	        var leftOffset = 0;

	        for (var i = 0, len = words.length; i < len; i++) {
	          this._renderChars(method, ctx, words[i], left + leftOffset, top, lineIndex);

	          leftOffset += ctx.measureText(words[i]).width + spaceWidth;
	        }
	      } else {
	        this._renderChars(method, ctx, line, left, top, lineIndex);
	      }
	    }
	  }, {
	    key: "_renderChars",
	    value: function _renderChars(method, ctx, chars, left, top) {
	      ctx[method](chars, 0, top);
	    }
	  }, {
	    key: "_getHeightOfLine",
	    value: function _getHeightOfLine() {
	      return this.context.$model.fontSize * this.context.$model.lineHeight;
	    }
	  }, {
	    key: "_getTextWidth",
	    value: function _getTextWidth(ctx, textLines) {
	      var maxWidth = ctx.measureText(textLines[0] || '|').width;

	      for (var i = 1, len = textLines.length; i < len; i++) {
	        var currentLineWidth = ctx.measureText(textLines[i]).width;

	        if (currentLineWidth > maxWidth) {
	          maxWidth = currentLineWidth;
	        }
	      }

	      return maxWidth;
	    }
	  }, {
	    key: "_getTextHeight",
	    value: function _getTextHeight(ctx, textLines) {
	      return this.context.$model.fontSize * textLines.length * this.context.$model.lineHeight;
	    }
	    /**
	     * @private
	     * @return {Number} Top offset
	     */

	  }, {
	    key: "_getTopOffset",
	    value: function _getTopOffset() {
	      var t = 0;

	      switch (this.context.$model.textBaseline) {
	        case "top":
	          t = 0;
	          break;

	        case "middle":
	          t = -this.context.$model.height / 2;
	          break;

	        case "bottom":
	          t = -this.context.$model.height;
	          break;
	      }

	      return t;
	    }
	  }, {
	    key: "getRect",
	    value: function getRect() {
	      var c = this.context;
	      var x = 0;
	      var y = 0; //更具textAlign 和 textBaseline 重新矫正 xy

	      if (c.textAlign == "center") {
	        x = -c.width / 2;
	      }

	      if (c.textAlign == "right") {
	        x = -c.width;
	      }

	      if (c.textBaseline == "middle") {
	        y = -c.height / 2;
	      }

	      if (c.textBaseline == "bottom") {
	        y = -c.height;
	      }
	      return {
	        x: x,
	        y: y,
	        width: c.width,
	        height: c.height
	      };
	    }
	  }]);

	  return Text;
	}(DisplayObject);

	/**
	 * Canvax
	 *
	 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	 *
	 * 向量操作类
	 * */

	function Vector(x, y) {
	  var vx = 0,
	      vy = 0;

	  if (arguments.length == 1 && _.isObject(x)) {
	    var arg = arguments[0];

	    if (_.isArray(arg)) {
	      vx = arg[0];
	      vy = arg[1];
	    } else if (arg.hasOwnProperty("x") && arg.hasOwnProperty("y")) {
	      vx = arg.x;
	      vy = arg.y;
	    }
	  }

	  this._axes = [vx, vy];
	}
	Vector.prototype = {
	  distance: function distance(v) {
	    var x = this._axes[0] - v._axes[0];
	    var y = this._axes[1] - v._axes[1];
	    return Math.sqrt(x * x + y * y);
	  }
	};

	/**
	 * Canvax
	 *
	 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	 *
	 * 处理为平滑线条
	 */
	/**
	 * @inner
	 */

	function interpolate(p0, p1, p2, p3, t, t2, t3) {
	  var v0 = (p2 - p0) * 0.25;
	  var v1 = (p3 - p1) * 0.25;
	  return (2 * (p1 - p2) + v0 + v1) * t3 + (-3 * (p1 - p2) - 2 * v0 - v1) * t2 + v0 * t + p1;
	}
	/**
	 * 多线段平滑曲线 
	 * opt ==> points , isLoop
	 */


	function SmoothSpline (opt) {
	  var points = opt.points;
	  var isLoop = opt.isLoop;
	  var smoothFilter = opt.smoothFilter;
	  var len = points.length;

	  if (len == 1) {
	    return points;
	  }

	  var ret = [];
	  var distance = 0;
	  var preVertor = new Vector(points[0]);
	  var iVtor = null;

	  for (var i = 1; i < len; i++) {
	    iVtor = new Vector(points[i]);
	    distance += preVertor.distance(iVtor);
	    preVertor = iVtor;
	  }

	  preVertor = null;
	  iVtor = null; //基本上等于曲率

	  var segs = distance / 6;
	  segs = segs < len ? len : segs;

	  for (var i = 0; i < segs; i++) {
	    var pos = i / (segs - 1) * (isLoop ? len : len - 1);
	    var idx = Math.floor(pos);
	    var w = pos - idx;
	    var p0;
	    var p1 = points[idx % len];
	    var p2;
	    var p3;

	    if (!isLoop) {
	      p0 = points[idx === 0 ? idx : idx - 1];
	      p2 = points[idx > len - 2 ? len - 1 : idx + 1];
	      p3 = points[idx > len - 3 ? len - 1 : idx + 2];
	    } else {
	      p0 = points[(idx - 1 + len) % len];
	      p2 = points[(idx + 1) % len];
	      p3 = points[(idx + 2) % len];
	    }

	    var w2 = w * w;
	    var w3 = w * w2;
	    var rp = [interpolate(p0[0], p1[0], p2[0], p3[0], w, w2, w3), interpolate(p0[1], p1[1], p2[1], p3[1], w, w2, w3)];
	    _.isFunction(smoothFilter) && smoothFilter(rp);
	    ret.push(rp);
	  }

	  return ret;
	}

	/**
	 * Canvax
	 *
	 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
	 *
	 * 数学 类
	 *
	 **/
	var _cache = {
	  sin: {},
	  //sin缓存
	  cos: {} //cos缓存

	};

	var _radians = Math.PI / 180;
	/**
	 * @param angle 弧度（角度）参数
	 * @param isDegrees angle参数是否为角度计算，默认为false，angle为以弧度计量的角度
	 */


	function sin(angle, isDegrees) {
	  angle = (isDegrees ? angle * _radians : angle).toFixed(4);

	  if (typeof _cache.sin[angle] == 'undefined') {
	    _cache.sin[angle] = Math.sin(angle);
	  }

	  return _cache.sin[angle];
	}
	/**
	 * @param radians 弧度参数
	 */


	function cos(angle, isDegrees) {
	  angle = (isDegrees ? angle * _radians : angle).toFixed(4);

	  if (typeof _cache.cos[angle] == 'undefined') {
	    _cache.cos[angle] = Math.cos(angle);
	  }

	  return _cache.cos[angle];
	}
	/**
	 * 角度转弧度
	 * @param {Object} angle
	 */


	function degreeToRadian(angle) {
	  return angle * _radians;
	}
	/**
	 * 弧度转角度
	 * @param {Object} angle
	 */


	function radianToDegree(angle) {
	  return angle / _radians;
	}
	/*
	 * 校验角度到360度内
	 * @param {angle} number
	 */


	function degreeTo360(angle) {
	  var reAng = (360 + angle % 360) % 360; //Math.abs(360 + Math.ceil( angle ) % 360) % 360;

	  if (reAng == 0 && angle !== 0) {
	    reAng = 360;
	  }

	  return reAng;
	}

	function getIsgonPointList(n, r) {
	  var pointList = [];
	  var dStep = 2 * Math.PI / n;
	  var beginDeg = -Math.PI / 2;
	  var deg = beginDeg;

	  for (var i = 0, end = n; i < end; i++) {
	    pointList.push([r * Math.cos(deg), r * Math.sin(deg)]);
	    deg += dStep;
	  }
	  return pointList;
	}

	function getSmoothPointList(pList, smoothFilter) {
	  //smoothFilter -- 比如在折线图中。会传一个smoothFilter过来做point的纠正。
	  //让y不能超过底部的原点
	  var List = [];
	  var Len = pList.length;
	  var _currList = [];

	  _.each(pList, function (point, i) {
	    if (isNotValibPoint(point)) {
	      //undefined , [ number, null] 等结构
	      if (_currList.length) {
	        List = List.concat(_getSmoothGroupPointList(_currList, smoothFilter));
	        _currList = [];
	      }

	      List.push(point);
	    } else {
	      //有效的point 都push 进_currList 准备做曲线设置
	      _currList.push(point);
	    }

	    if (i == Len - 1) {
	      if (_currList.length) {
	        List = List.concat(_getSmoothGroupPointList(_currList, smoothFilter));
	        _currList = [];
	      }
	    }
	  });

	  return List;
	}

	function _getSmoothGroupPointList(pList, smoothFilter) {
	  var obj = {
	    points: pList
	  };

	  if (_.isFunction(smoothFilter)) {
	    obj.smoothFilter = smoothFilter;
	  }

	  var currL = SmoothSpline(obj);

	  if (pList && pList.length > 0) {
	    currL.push(pList[pList.length - 1]);
	  }
	  return currL;
	}

	function isNotValibPoint(point) {
	  var res = !point || _.isArray(point) && point.length >= 2 && (!_.isNumber(point[0]) || !_.isNumber(point[1])) || "x" in point && !_.isNumber(point.x) || "y" in point && !_.isNumber(point.y);
	  return res;
	}

	function isValibPoint(point) {
	  return !isNotValibPoint(point);
	}

	var myMath = {
	  PI: Math.PI,
	  sin: sin,
	  cos: cos,
	  degreeToRadian: degreeToRadian,
	  radianToDegree: radianToDegree,
	  degreeTo360: degreeTo360,
	  getIsgonPointList: getIsgonPointList,
	  getSmoothPointList: getSmoothPointList,
	  isNotValibPoint: isNotValibPoint,
	  isValibPoint: isValibPoint
	};

	var BrokenLine =
	/*#__PURE__*/
	function (_Shape) {
	  inherits(BrokenLine, _Shape);

	  function BrokenLine(opt) {
	    var _this;

	    classCallCheck(this, BrokenLine);

	    opt = Utils.checkOpt(opt);

	    var _context = _.extend(true, {
	      lineType: null,
	      smooth: false,
	      pointList: [],
	      //{Array}  // 必须，各个顶角坐标
	      smoothFilter: Utils.__emptyFunc
	    }, opt.context);

	    if (!opt.isClone && _context.smooth) {
	      _context.pointList = myMath.getSmoothPointList(_context.pointList, _context.smoothFilter);
	    }
	    opt.context = _context;
	    opt.type = "brokenline";
	    _this = possibleConstructorReturn(this, getPrototypeOf(BrokenLine).call(this, opt)); //保存好原始值

	    _this._pointList = _context.pointList;
	    return _this;
	  }

	  createClass(BrokenLine, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      if (name == "pointList" || name == "smooth" || name == "lineType") {
	        if (name == "pointList" && this.context.smooth) {
	          this.context.pointList = myMath.getSmoothPointList(value, this.context.smoothFilter);
	          this._pointList = value;
	        }

	        if (name == "smooth") {
	          //如果是smooth的切换
	          if (value) {
	            //从原始中拿数据重新生成
	            this.context.pointList = myMath.getSmoothPointList(this._pointList, this.context.smoothFilter);
	          } else {
	            this.context.pointList = this._pointList;
	          }
	        }
	        this.graphics.clear();
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(graphics) {
	      var context = this.context;
	      var pointList = context.pointList;
	      var beginPath = false;

	      for (var i = 0, l = pointList.length; i < l; i++) {
	        var point = pointList[i];

	        if (myMath.isValibPoint(point)) {
	          if (!beginPath) {
	            graphics.moveTo(point[0], point[1]);
	          } else {
	            graphics.lineTo(point[0], point[1]);
	          }
	          beginPath = true;
	        } else {
	          beginPath = false;
	        }
	      }

	      return this;
	    }
	  }]);

	  return BrokenLine;
	}(Shape);

	var Circle$1 =
	/*#__PURE__*/
	function (_Shape) {
	  inherits(Circle, _Shape);

	  function Circle(opt) {
	    classCallCheck(this, Circle);

	    opt = _.extend(true, {
	      type: "circle",
	      xyToInt: false,
	      context: {
	        r: 0
	      }
	    }, Utils.checkOpt(opt));
	    return possibleConstructorReturn(this, getPrototypeOf(Circle).call(this, opt));
	  }

	  createClass(Circle, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      if (name == "r") {
	        this.graphics.clear();
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(graphics) {
	      var r = this.context.$model.r;

	      if (r < 0) {
	        r = 0;
	      }
	      graphics.drawCircle(0, 0, r);
	    }
	  }]);

	  return Circle;
	}(Shape);

	var Path =
	/*#__PURE__*/
	function (_Shape) {
	  inherits(Path, _Shape);

	  function Path(opt) {
	    classCallCheck(this, Path);

	    var _context = _.extend(true, {
	      pointList: [],
	      //从下面的path中计算得到的边界点的集合
	      path: "" //字符串 必须，路径。例如:M 0 0 L 0 10 L 10 10 Z (一个三角形)
	      //M = moveto
	      //L = lineto
	      //H = horizontal lineto
	      //V = vertical lineto
	      //C = curveto
	      //S = smooth curveto
	      //Q = quadratic Belzier curve
	      //T = smooth quadratic Belzier curveto
	      //Z = closepath

	    }, opt.context);

	    opt.context = _context;
	    opt.__parsePathData = null;
	    opt.type = "path";
	    return possibleConstructorReturn(this, getPrototypeOf(Path).call(this, opt));
	  }

	  createClass(Path, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      if (name == "path") {
	        //如果path有变动，需要自动计算新的pointList
	        this.graphics.clear();
	      }
	    }
	  }, {
	    key: "_parsePathData",
	    value: function _parsePathData(data) {
	      if (this.__parsePathData) {
	        return this.__parsePathData;
	      }

	      if (!data) {
	        return [];
	      }

	      this.__parsePathData = [];

	      var paths = _.compact(data.replace(/[Mm]/g, "\\r$&").split('\\r'));

	      var me = this;

	      _.each(paths, function (pathStr) {
	        me.__parsePathData.push(me._parseChildPathData(pathStr));
	      });

	      return this.__parsePathData;
	    }
	  }, {
	    key: "_parseChildPathData",
	    value: function _parseChildPathData(data) {
	      // command string
	      var cs = data; // command chars

	      var cc = ['m', 'M', 'l', 'L', 'v', 'V', 'h', 'H', 'z', 'Z', 'c', 'C', 'q', 'Q', 't', 'T', 's', 'S', 'a', 'A'];
	      cs = cs.replace(/  /g, ' ');
	      cs = cs.replace(/ /g, ','); //cs = cs.replace(/(.)-/g, "$1,-");

	      cs = cs.replace(/(\d)-/g, '$1,-');
	      cs = cs.replace(/,,/g, ',');
	      var n; // create pipes so that we can split the data

	      for (n = 0; n < cc.length; n++) {
	        cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
	      } // create array


	      var arr = cs.split('|');
	      var ca = []; // init context point

	      var cpx = 0;
	      var cpy = 0;

	      for (n = 1; n < arr.length; n++) {
	        var str = arr[n];
	        var c = str.charAt(0);
	        str = str.slice(1);
	        str = str.replace(new RegExp('e,-', 'g'), 'e-'); //有的时候，比如“22，-22” 数据可能会经常的被写成22-22，那么需要手动修改
	        //str = str.replace(new RegExp('-', 'g'), ',-');
	        //str = str.replace(/(.)-/g, "$1,-")

	        var p = str.split(',');

	        if (p.length > 0 && p[0] === '') {
	          p.shift();
	        }

	        for (var i = 0; i < p.length; i++) {
	          p[i] = parseFloat(p[i]);
	        }

	        while (p.length > 0) {
	          if (isNaN(p[0])) {
	            break;
	          }

	          var cmd = null;
	          var points = [];
	          var ctlPtx;
	          var ctlPty;
	          var prevCmd;
	          var rx;
	          var ry;
	          var psi;
	          var fa;
	          var fs;
	          var x1 = cpx;
	          var y1 = cpy; // convert l, H, h, V, and v to L

	          switch (c) {
	            case 'l':
	              cpx += p.shift();
	              cpy += p.shift();
	              cmd = 'L';
	              points.push(cpx, cpy);
	              break;

	            case 'L':
	              cpx = p.shift();
	              cpy = p.shift();
	              points.push(cpx, cpy);
	              break;

	            case 'm':
	              cpx += p.shift();
	              cpy += p.shift();
	              cmd = 'M';
	              points.push(cpx, cpy);
	              c = 'l';
	              break;

	            case 'M':
	              cpx = p.shift();
	              cpy = p.shift();
	              cmd = 'M';
	              points.push(cpx, cpy);
	              c = 'L';
	              break;

	            case 'h':
	              cpx += p.shift();
	              cmd = 'L';
	              points.push(cpx, cpy);
	              break;

	            case 'H':
	              cpx = p.shift();
	              cmd = 'L';
	              points.push(cpx, cpy);
	              break;

	            case 'v':
	              cpy += p.shift();
	              cmd = 'L';
	              points.push(cpx, cpy);
	              break;

	            case 'V':
	              cpy = p.shift();
	              cmd = 'L';
	              points.push(cpx, cpy);
	              break;

	            case 'C':
	              points.push(p.shift(), p.shift(), p.shift(), p.shift());
	              cpx = p.shift();
	              cpy = p.shift();
	              points.push(cpx, cpy);
	              break;

	            case 'c':
	              points.push(cpx + p.shift(), cpy + p.shift(), cpx + p.shift(), cpy + p.shift());
	              cpx += p.shift();
	              cpy += p.shift();
	              cmd = 'C';
	              points.push(cpx, cpy);
	              break;

	            case 'S':
	              ctlPtx = cpx;
	              ctlPty = cpy;
	              prevCmd = ca[ca.length - 1];

	              if (prevCmd.command === 'C') {
	                ctlPtx = cpx + (cpx - prevCmd.points[2]);
	                ctlPty = cpy + (cpy - prevCmd.points[3]);
	              }

	              points.push(ctlPtx, ctlPty, p.shift(), p.shift());
	              cpx = p.shift();
	              cpy = p.shift();
	              cmd = 'C';
	              points.push(cpx, cpy);
	              break;

	            case 's':
	              ctlPtx = cpx, ctlPty = cpy;
	              prevCmd = ca[ca.length - 1];

	              if (prevCmd.command === 'C') {
	                ctlPtx = cpx + (cpx - prevCmd.points[2]);
	                ctlPty = cpy + (cpy - prevCmd.points[3]);
	              }

	              points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
	              cpx += p.shift();
	              cpy += p.shift();
	              cmd = 'C';
	              points.push(cpx, cpy);
	              break;

	            case 'Q':
	              points.push(p.shift(), p.shift());
	              cpx = p.shift();
	              cpy = p.shift();
	              points.push(cpx, cpy);
	              break;

	            case 'q':
	              points.push(cpx + p.shift(), cpy + p.shift());
	              cpx += p.shift();
	              cpy += p.shift();
	              cmd = 'Q';
	              points.push(cpx, cpy);
	              break;

	            case 'T':
	              ctlPtx = cpx, ctlPty = cpy;
	              prevCmd = ca[ca.length - 1];

	              if (prevCmd.command === 'Q') {
	                ctlPtx = cpx + (cpx - prevCmd.points[0]);
	                ctlPty = cpy + (cpy - prevCmd.points[1]);
	              }

	              cpx = p.shift();
	              cpy = p.shift();
	              cmd = 'Q';
	              points.push(ctlPtx, ctlPty, cpx, cpy);
	              break;

	            case 't':
	              ctlPtx = cpx, ctlPty = cpy;
	              prevCmd = ca[ca.length - 1];

	              if (prevCmd.command === 'Q') {
	                ctlPtx = cpx + (cpx - prevCmd.points[0]);
	                ctlPty = cpy + (cpy - prevCmd.points[1]);
	              }

	              cpx += p.shift();
	              cpy += p.shift();
	              cmd = 'Q';
	              points.push(ctlPtx, ctlPty, cpx, cpy);
	              break;

	            case 'A':
	              rx = p.shift(); //x半径

	              ry = p.shift(); //y半径

	              psi = p.shift(); //旋转角度

	              fa = p.shift(); //角度大小 

	              fs = p.shift(); //时针方向

	              x1 = cpx, y1 = cpy;
	              cpx = p.shift(), cpy = p.shift();
	              cmd = 'A';
	              points = [rx, ry, psi, fa, fs, cpx, cpy, x1, y1];
	              break;

	            case 'a':
	              rx = p.shift();
	              ry = p.shift();
	              psi = p.shift();
	              fa = p.shift();
	              fs = p.shift();
	              x1 = cpx, y1 = cpy;
	              cpx += p.shift();
	              cpy += p.shift();
	              cmd = 'A';
	              points = [rx, ry, psi, fa, fs, cpx, cpy, x1, y1];
	              break;
	          }

	          ca.push({
	            command: cmd || c,
	            points: points
	          });
	        }

	        if (c === 'z' || c === 'Z') {
	          ca.push({
	            command: 'z',
	            points: []
	          });
	        }
	      }
	      return ca;
	    } //重新根的path绘制 graphics

	  }, {
	    key: "draw",
	    value: function draw(graphics) {
	      //graphics.beginPath();
	      this.__parsePathData = null;
	      this.context.$model.pointList = [];

	      var pathArray = this._parsePathData(this.context.$model.path);

	      for (var g = 0, gl = pathArray.length; g < gl; g++) {
	        for (var i = 0, l = pathArray[g].length; i < l; i++) {
	          var c = pathArray[g][i].command,
	              p = pathArray[g][i].points;

	          switch (c) {
	            case 'L':
	              graphics.lineTo(p[0], p[1]);
	              break;

	            case 'M':
	              graphics.moveTo(p[0], p[1]);
	              break;

	            case 'C':
	              graphics.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
	              break;

	            case 'Q':
	              graphics.quadraticCurveTo(p[0], p[1], p[2], p[3]);
	              break;

	            case 'A':
	              //前面6个元素用来放path的A 6个参数，path A命令详见
	              Arc.drawArc(graphics, p[7], p[8], p);
	              break;

	            case 'z':
	              graphics.closePath();
	              break;
	          }
	        }
	      }
	      return this;
	    }
	  }]);

	  return Path;
	}(Shape);

	var Droplet =
	/*#__PURE__*/
	function (_Path) {
	  inherits(Droplet, _Path);

	  function Droplet(opt) {
	    var _this;

	    classCallCheck(this, Droplet);

	    opt = _.extend(true, {
	      type: "droplet",
	      context: {
	        hr: 0,
	        //{number},  // 必须，水滴横宽（中心到水平边缘最宽处距离）
	        vr: 0 //{number},  // 必须，水滴纵高（中心到尖端距离）

	      }
	    }, Utils.checkOpt(opt));

	    var my = _this = possibleConstructorReturn(this, getPrototypeOf(Droplet).call(this, opt));

	    _this.context.$model.path = _this.createPath();
	    return _this;
	  }

	  createClass(Droplet, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      if (name == "hr" || name == "vr") {
	        this.context.$model.path = this.createPath();
	      }
	    }
	  }, {
	    key: "createPath",
	    value: function createPath() {
	      var model = this.context.$model;
	      var ps = "M 0 " + model.hr + " C " + model.hr + " " + model.hr + " " + model.hr * 3 / 2 + " " + -model.hr / 3 + " 0 " + -model.vr;
	      ps += " C " + -model.hr * 3 / 2 + " " + -model.hr / 3 + " " + -model.hr + " " + model.hr + " 0 " + model.hr + "z";
	      return ps;
	    }
	  }]);

	  return Droplet;
	}(Path);

	var Ellipse$1 =
	/*#__PURE__*/
	function (_Shape) {
	  inherits(Ellipse, _Shape);

	  function Ellipse(opt) {
	    classCallCheck(this, Ellipse);

	    opt = _.extend(true, {
	      type: "ellipse",
	      context: {
	        hr: 0,
	        //{number},  // 必须，水滴横宽（中心到水平边缘最宽处距离）
	        vr: 0 //{number},  // 必须，水滴纵高（中心到尖端距离）

	      }
	    }, Utils.checkOpt(opt));
	    return possibleConstructorReturn(this, getPrototypeOf(Ellipse).call(this, opt));
	  }

	  createClass(Ellipse, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      if (name == "hr" || name == "vr") {
	        this.graphics.clear();
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(graphics) {
	      graphics.drawEllipse(0, 0, this.context.$model.hr * 2, this.context.$model.vr * 2);
	    }
	  }]);

	  return Ellipse;
	}(Shape);

	var Polygon$1 =
	/*#__PURE__*/
	function (_Shape) {
	  inherits(Polygon, _Shape);

	  function Polygon(opt) {
	    classCallCheck(this, Polygon);

	    var _context = _.extend(true, {
	      lineType: null,
	      smooth: false,
	      pointList: [],
	      //{Array}  // 必须，各个顶角坐标
	      smoothFilter: Utils.__emptyFunc
	    }, opt.context);

	    if (!opt.isClone) {
	      var start = _context.pointList[0];

	      var end = _context.pointList.slice(-1)[0];

	      if (_context.smooth) {
	        _context.pointList.unshift(end);

	        _context.pointList = myMath.getSmoothPointList(_context.pointList);
	      }
	    }
	    opt.context = _context;
	    opt.type = "polygon";
	    return possibleConstructorReturn(this, getPrototypeOf(Polygon).call(this, opt));
	  }

	  createClass(Polygon, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      //调用parent的setGraphics
	      if (name == "pointList" || name == "smooth" || name == "lineType") {
	        this.graphics.clear();
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(graphics) {
	      //graphics.beginPath();
	      var context = this.context;
	      var pointList = context.pointList;

	      if (pointList.length < 2) {
	        //少于2个点就不画了~
	        return;
	      }
	      graphics.moveTo(pointList[0][0], pointList[0][1]);

	      for (var i = 1, l = pointList.length; i < l; i++) {
	        graphics.lineTo(pointList[i][0], pointList[i][1]);
	      }
	      graphics.closePath();
	      return;
	    }
	  }]);

	  return Polygon;
	}(Shape);

	var Isogon =
	/*#__PURE__*/
	function (_Polygon) {
	  inherits(Isogon, _Polygon);

	  function Isogon(opt) {
	    classCallCheck(this, Isogon);

	    var _context = _.extend(true, {
	      pointList: [],
	      //从下面的r和n计算得到的边界值的集合
	      r: 0,
	      //{number},  // 必须，正n边形外接圆半径
	      n: 0 //{number},  // 必须，指明正几边形

	    }, opt.context);

	    _context.pointList = myMath.getIsgonPointList(_context.n, _context.r);
	    opt.context = _context;
	    opt.type = "isogon";
	    return possibleConstructorReturn(this, getPrototypeOf(Isogon).call(this, opt));
	  }

	  createClass(Isogon, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      if (name == "r" || name == "n") {
	        //如果path有变动，需要自动计算新的pointList
	        this.context.$model.pointList = myMath.getIsgonPointList(this.context.$model.n, this.context.$model.r);
	      }

	      if (name == "pointList" || name == "smooth" || name == "lineType") {
	        this.graphics.clear();
	      }
	    }
	  }]);

	  return Isogon;
	}(Polygon$1);

	var Line =
	/*#__PURE__*/
	function (_Shape) {
	  inherits(Line, _Shape);

	  function Line(opt) {
	    classCallCheck(this, Line);

	    var _context = _.extend(true, {
	      start: {
	        x: 0,
	        // 必须，起点横坐标
	        y: 0 // 必须，起点纵坐标

	      },
	      end: {
	        x: 0,
	        // 必须，终点横坐标
	        y: 0 // 必须，终点纵坐标

	      }
	    }, opt.context);

	    opt.context = _context;
	    opt.type = "line";
	    return possibleConstructorReturn(this, getPrototypeOf(Line).call(this, opt));
	  }

	  createClass(Line, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      //并不清楚是start.x 还是end.x， 当然，这并不重要
	      if (name == "x" || name == "y") {
	        this.graphics.clear();
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(graphics) {
	      var model = this.context.$model;
	      graphics.moveTo(model.start.x, model.start.y);
	      graphics.lineTo(model.end.x, model.end.y);
	      return this;
	    }
	  }]);

	  return Line;
	}(Shape);

	var Rect =
	/*#__PURE__*/
	function (_Shape) {
	  inherits(Rect, _Shape);

	  function Rect(opt) {
	    classCallCheck(this, Rect);

	    var _context = _.extend(true, {
	      width: 0,
	      height: 0,
	      radius: []
	    }, opt.context);

	    opt.context = _context;
	    opt.type = "rect";
	    return possibleConstructorReturn(this, getPrototypeOf(Rect).call(this, opt));
	  }

	  createClass(Rect, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      if (name == "width" || name == "height" || name == "radius") {
	        this.graphics.clear();
	      }
	    }
	    /**
	     * 绘制圆角矩形
	     */

	  }, {
	    key: "_buildRadiusPath",
	    value: function _buildRadiusPath(graphics) {
	      var model = this.context.$model; //左上、右上、右下、左下角的半径依次为r1、r2、r3、r4
	      //r缩写为1         相当于 [1, 1, 1, 1]
	      //r缩写为[1]       相当于 [1, 1, 1, 1]
	      //r缩写为[1, 2]    相当于 [1, 2, 1, 2]
	      //r缩写为[1, 2, 3] 相当于 [1, 2, 3, 2]

	      var x = 0;
	      var y = 0;
	      var width = model.width;
	      var height = model.height;
	      var r = Utils.getCssOrderArr(model.radius);
	      var G = graphics;
	      var sy = 1;

	      if (height >= 0) {
	        sy = -1;
	      }

	      G.moveTo(parseInt(x + r[0]), parseInt(height));
	      G.lineTo(parseInt(x + width - r[1]), parseInt(height));
	      r[1] !== 0 && G.quadraticCurveTo(x + width, height, parseInt(x + width), parseInt(height + r[1] * sy));
	      G.lineTo(parseInt(x + width), parseInt(y - r[2] * sy));
	      r[2] !== 0 && G.quadraticCurveTo(x + width, y, parseInt(x + width - r[2]), parseInt(y));
	      G.lineTo(parseInt(x + r[3]), parseInt(y));
	      r[3] !== 0 && G.quadraticCurveTo(x, y, parseInt(x), parseInt(y - r[3] * sy));
	      G.lineTo(parseInt(x), parseInt(y + height + r[0] * sy));
	      r[0] !== 0 && G.quadraticCurveTo(x, y + height, parseInt(x + r[0]), parseInt(y + height));
	    }
	  }, {
	    key: "draw",
	    value: function draw(graphics) {
	      var model = this.context.$model;

	      if (!model.radius.length) {
	        graphics.drawRect(0, 0, model.width, model.height);
	      } else {
	        this._buildRadiusPath(graphics);
	      }

	      graphics.closePath();
	      return;
	    }
	  }]);

	  return Rect;
	}(Shape);

	var Sector =
	/*#__PURE__*/
	function (_Shape) {
	  inherits(Sector, _Shape);

	  function Sector(opt) {
	    classCallCheck(this, Sector);

	    var _context = _.extend(true, {
	      pointList: [],
	      //边界点的集合,私有，从下面的属性计算的来
	      r0: 0,
	      // 默认为0，内圆半径指定后将出现内弧，同时扇边长度 = r - r0
	      r: 0,
	      //{number},  // 必须，外圆半径
	      startAngle: 0,
	      //{number},  // 必须，起始角度[0, 360)
	      endAngle: 0,
	      //{number},  // 必须，结束角度(0, 360]
	      clockwise: false //是否顺时针，默认为false(顺时针)

	    }, opt.context);

	    opt.context = _context;
	    opt.regAngle = [];
	    opt.isRing = false; //是否为一个圆环

	    opt.type = "sector";
	    return possibleConstructorReturn(this, getPrototypeOf(Sector).call(this, opt));
	  }

	  createClass(Sector, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      if (name == "r0" || name == "r" || name == "startAngle" || name == "endAngle" || name == "clockwise") {
	        //因为这里的graphs不一样。
	        this.isRing = false; //是否为一个圆环，这里也要开始初始化一下

	        this.graphics.clear();
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(graphics) {
	      var model = this.context.$model; // 形内半径[0,r)

	      var r0 = typeof model.r0 == 'undefined' ? 0 : model.r0;
	      var r = model.r; // 扇形外半径(0,r]

	      var startAngle = myMath.degreeTo360(model.startAngle); // 起始角度[0,360)

	      var endAngle = myMath.degreeTo360(model.endAngle); // 结束角度(0,360]

	      if (model.startAngle != model.endAngle && Math.abs(model.startAngle - model.endAngle) % 360 == 0) {
	        //if( startAngle == endAngle && model.startAngle != model.endAngle ) {
	        //如果两个角度相等，那么就认为是个圆环了
	        this.isRing = true;
	        startAngle = 0;
	        endAngle = 360;
	      }

	      startAngle = myMath.degreeToRadian(startAngle);
	      endAngle = myMath.degreeToRadian(endAngle); //处理下极小夹角的情况
	      //if( endAngle - startAngle < 0.025 ){
	      //    startAngle -= 0.003
	      //}

	      var G = graphics; //G.beginPath();

	      if (this.isRing) {
	        if (model.r0 == 0) {
	          //圆
	          G.drawCircle(0, 0, model.r);
	        } else {
	          //圆环
	          if (model.fillStyle && model.fillAlpha) {
	            G.beginPath();
	            G.arc(0, 0, r, startAngle, endAngle, model.clockwise);

	            if (model.r0 == 0) {
	              G.lineTo(0, 0);
	            } else {
	              G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
	            }

	            G.closePath();
	            G.currentPath.lineWidth = 0;
	            G.currentPath.strokeStyle = null;
	            G.currentPath.strokeAlpha = 0;
	            G.currentPath.line = false;
	          }

	          if (model.lineWidth && model.strokeStyle && model.strokeAlpha) {
	            G.beginPath();
	            G.arc(0, 0, r, startAngle, endAngle, model.clockwise);
	            G.closePath();
	            G.currentPath.fillStyle = null;
	            G.currentPath.fill = false;
	            G.beginPath();
	            G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
	            G.closePath();
	            G.currentPath.fillStyle = null;
	            G.currentPath.fill = false;
	          }
	        }
	      } else {
	        //正常的扇形状
	        G.beginPath();
	        G.arc(0, 0, r, startAngle, endAngle, model.clockwise);

	        if (model.r0 == 0) {
	          G.lineTo(0, 0);
	        } else {
	          G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
	        }

	        G.closePath();
	      } //G.closePath();

	    }
	  }]);

	  return Sector;
	}(Shape);

	var Line$1 =
	/*#__PURE__*/
	function (_Shape) {
	  inherits(Line, _Shape);

	  function Line(opt) {
	    classCallCheck(this, Line);

	    var _context = _.extend(true, {
	      control: {
	        x: 0,
	        // 必须，起点横坐标
	        y: 0 // 必须，起点纵坐标

	      },
	      point: {
	        x: 0,
	        // 必须，终点横坐标
	        y: 0 // 必须，终点纵坐标

	      },
	      angle: null,
	      // control的存在，也就是为了计算出来这个angle
	      theta: 30,
	      // 箭头夹角
	      headlen: 6,
	      // 斜边长度
	      lineWidth: 1,
	      strokeStyle: '#666',
	      fillStyle: null
	    }, opt.context);

	    opt.context = _context;
	    opt.type = "arrow";
	    return possibleConstructorReturn(this, getPrototypeOf(Line).call(this, opt));
	  }

	  createClass(Line, [{
	    key: "watch",
	    value: function watch(name, value, preValue) {
	      //并不清楚是start.x 还是end.x， 当然，这并不重要
	      if (name == "x" || name == "y" || name == "theta" || name == "headlen" || name == "angle") {
	        this.graphics.clear();
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(graphics) {
	      var model = this.context.$model;
	      var fromX = model.control.x;
	      var fromY = model.control.y;
	      var toX = model.point.x;
	      var toY = model.point.y; // 计算各角度和对应的P2,P3坐标 

	      var angle = model.angle != null ? model.angle - 180 : Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
	          angle1 = (angle + model.theta) * Math.PI / 180,
	          angle2 = (angle - model.theta) * Math.PI / 180,
	          topX = model.headlen * Math.cos(angle1),
	          topY = model.headlen * Math.sin(angle1),
	          botX = model.headlen * Math.cos(angle2),
	          botY = model.headlen * Math.sin(angle2);
	      var arrowX = toX + topX;
	      var arrowY = toY + topY;
	      graphics.moveTo(arrowX, arrowY);
	      graphics.lineTo(toX, toY);
	      graphics.lineTo(toX + botX, toY + botY);

	      if (model.fillStyle) {
	        graphics.lineTo(arrowX, arrowY);
	        graphics.closePath();
	      }
	      return this;
	    }
	  }]);

	  return Line;
	}(Shape);

	var Canvax = {
	  version: "2.0.67",
	  _: _,
	  $: $,
	  event: event,
	  //这三个共享给 chartx用
	  App: Application
	};
	Canvax.Display = {
	  DisplayObject: DisplayObject,
	  DisplayObjectContainer: DisplayObjectContainer,
	  Stage: Stage,
	  Sprite: Sprite,
	  Shape: Shape,
	  Point: Point,
	  Text: Text
	};
	Canvax.Shapes = {
	  BrokenLine: BrokenLine,
	  Circle: Circle$1,
	  Droplet: Droplet,
	  Ellipse: Ellipse$1,
	  Isogon: Isogon,
	  Line: Line,
	  Path: Path,
	  Polygon: Polygon$1,
	  Rect: Rect,
	  Sector: Sector,
	  Arrow: Line$1
	};
	Canvax.AnimationFrame = AnimationFrame;
	Canvax.utils = Utils;

	var index_es = /*#__PURE__*/Object.freeze({
		default: Canvax
	});

	var _canvax = getCjsExportFromNamespace(index_es);

	var parse = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;



	var _default = {
	  _eval: function _eval(code, target, paramName, paramValue) {
	    return paramName ? new Function(paramName, code + "; return ".concat(target, ";"))(paramValue) : new Function(code + "; return ".concat(target, ";"))();
	  },
	  parse: function parse(code, range, data, variablesFromComponent) {
	    try {
	      var isVariablesDefined = range && range.length && range.length === 2 && range[1] > range[0]; // 若未定义

	      if (!isVariablesDefined) {
	        return this._eval(code, 'options');
	      }

	      var variablesInCode = this._eval(code, 'variables');

	      if (typeof variablesInCode === 'function') {
	        variablesInCode = variablesInCode(data) || {};
	      }

	      var variables = {};

	      if (variablesFromComponent !== undefined) {
	        variables = typeof variablesFromComponent === 'function' ? variablesFromComponent(data) : variablesFromComponent;
	      }

	      variables = _canvax._.extend(true, {}, variablesInCode, variables);
	      var codeWithoutVariables = code.slice(0, range[0]) + code.slice(range[1]);
	      return this._eval(codeWithoutVariables, 'options', 'variables', variables);
	    } catch (e) {
	      console.log('parse error');
	      return {};
	    }
	  }
	};
	exports["default"] = _default;
	});

	unwrapExports(parse);

	var global$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _canvax$$1 = interopRequireDefault(_canvax);

	var _parse = interopRequireDefault(parse);

	//图表皮肤
	var _ = _canvax$$1["default"]._,
	    $ = _canvax$$1["default"].$,
	    AnimationFrame = _canvax$$1["default"].AnimationFrame;
	var globalTheme = ["#ff8533", "#73ace6", "#82d982", "#e673ac", "#cd6bed", "#8282d9", "#c0e650", "#e6ac73", "#6bcded", "#73e6ac", "#ed6bcd", "#9966cc"];
	var components = {
	  /*
	  modules:{
	      coord : {
	          empty : ..,
	          rect  : ..,
	          ...
	      },
	      graphs : {
	          //empty : .., //一般只有coord才会有empty
	          bar   : ..,
	          ...
	      }
	  },
	  get: function( name, type ){}
	  */
	};
	var _default = {
	  create: function create(el, _data, _opt) {
	    var chart = null;
	    var me = this;
	    var data = JSON.parse(JSON.stringify(_data, function (k, v) {
	      if (v === undefined) {
	        return null;
	      }

	      return v;
	    })); //data = JSON.parse( JSON.stringify(_data) );

	    var opt = _.clone(_opt);

	    var _destroy = function _destroy() {
	      me.instances[chart.id] = null;
	      delete me.instances[chart.id];
	    }; //这个el如果之前有绘制过图表，那么就要在instances中找到图表实例，然后销毁


	    var chart_id = $.query(el).getAttribute("chart_id");

	    if (chart_id != undefined) {
	      var _chart = me.instances[chart_id];

	      if (_chart) {
	        _chart.destroy();

	        _chart.off && _chart.off("destroy", _destroy);
	      }
	      delete me.instances[chart_id];
	    }

	    var componentModules = me._getComponentModules(); //如果用户没有配置coord，说明这个图表是一个默认目标系的图表，比如标签云


	    var Chart = me._getComponentModule('chart'); //try {


	    chart = new Chart(el, data, opt, componentModules);

	    if (chart) {
	      chart.draw();
	      me.instances[chart.id] = chart;
	      chart.on("destroy", _destroy);
	    }
	    //    throw "Chatx Error：" + err
	    //};

	    return chart;
	  },
	  setGlobalTheme: function setGlobalTheme(colors) {
	    globalTheme = colors;
	  },
	  getGlobalTheme: function getGlobalTheme() {
	    return globalTheme;
	  },
	  parse: _parse["default"],
	  instances: {},
	  getChart: function getChart(chartId) {
	    return this.instances[chartId];
	  },
	  resize: function resize() {
	    //调用全局的这个resize方法，会把当前所有的 chart instances 都执行一遍resize
	    for (var c in this.instances) {
	      this.instances[c].resize();
	    }
	  },
	  //第二个参数是用户要用来覆盖chartpark中的配置的options
	  getOptionsOld: function getOptionsOld(chartPark_cid) {
	    var JsonSerialize = {
	      prefix: '[[JSON_FUN_PREFIX_',
	      suffix: '_JSON_FUN_SUFFIX]]'
	    };

	    var parse$$1 = function parse$$1(string) {
	      return JSON.parse(string, function (key, value) {
	        if (typeof value === 'string' && value.indexOf(JsonSerialize.suffix) > 0 && value.indexOf(JsonSerialize.prefix) == 0) {
	          return new Function('return ' + value.replace(JsonSerialize.prefix, '').replace(JsonSerialize.suffix, ''))();
	        }
	        return value;
	      }) || {};
	    };

	    return parse$$1(decodeURIComponent(this.options[chartPark_cid] || '%7B%7D'));
	  },
	  getOptionsNew: function getOptionsNew(chartPark_cid, data, variables) {
	    var chartConfig = this.options[chartPark_cid];
	    var code = decodeURIComponent(chartConfig.code);
	    var range = chartConfig.range;
	    return _parse["default"].parse(code, range, data, variables);
	  },

	  /** 
	   * 获取图表配置并解析
	   * 
	   * @param {int} chartPark_cid  chartpark图表id
	   * @param {Object} userOptions 用户自定义图表options，若无chartPark_cid时默认使用该配置，否则使用该配置覆盖原chartpark中的图表配置
	   * @param {Array} data 绘制图表使用的数据
	   * @param {Object | Function} variables 用于覆盖chartpark图表配置的变量，为Function时，其返回值必须为Object
	   * @returns {Object} 正常情况返回图表配置，否则返回{}
	  */
	  getOptions: function getOptions(chartPark_cid, userOptions, data, variables) {
	    if (!this.options[chartPark_cid]) {
	      return userOptions || {};
	    }
	    var chartConfig = this.options[chartPark_cid];
	    var optionsFromChartPark = typeof chartConfig === 'string' ? this.getOptionsOld(chartPark_cid) : this.getOptionsNew(chartPark_cid, data || [], variables || {});

	    if (userOptions) {
	      optionsFromChartPark = _.extend(true, optionsFromChartPark, userOptions);
	    }
	    return optionsFromChartPark;
	  },
	  calculateOptions: function calculateOptions(chartPark_cid, data, variables) {
	    return this.getOptions(chartPark_cid, undefined, data, variables);
	  },
	  _getComponentModules: function _getComponentModules() {
	    var comps = components;

	    if (!comps.modules) {
	      comps.modules = {};
	    }

	    if (!comps.get) {
	      comps.get = function (name, type) {
	        if (!type) {
	          type = "empty";
	        }
	        name = name.toLowerCase();
	        type = type.toLowerCase();
	        var _module = comps.modules[name];

	        if (_module && _module[type]) {
	          return _module[type];
	        }
	      };
	    }
	    return comps;
	  },

	  /**
	   * @param {compModule} 要注册进去的模块名称
	   * @param {name} 要获取的comp名称
	   * @param {type} 模块子类型 graphs.bar
	   */
	  registerComponent: function registerComponent(compModule, name) {
	    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "empty";

	    var comps = this._getComponentModules().modules;

	    name = name.toLowerCase();
	    type = type.toLowerCase();
	    var _comp = comps[name];

	    if (!_comp) {
	      _comp = comps[name] = {};
	    }

	    if (!_comp[type]) {
	      _comp[type] = compModule;
	    }
	    return comps;
	  },

	  /**
	   * 
	   * @param {name} 要获取的comp名称
	   * @param { type } 后面可以传传两个参数 
	   */
	  _getComponentModule: function _getComponentModule(name) {
	    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'empty';
	    name = name.toLowerCase();
	    type = type.toLowerCase();

	    var _comp = this._getComponentModules().modules[name];

	    return _comp ? _comp[type] : undefined;
	  },
	  setAnimationEnabled: function setAnimationEnabled(bool) {
	    return AnimationFrame.setAnimationEnabled(bool);
	  },
	  getAnimationEnabled: function getAnimationEnabled(bool) {
	    return AnimationFrame.getAnimationEnabled();
	  },
	  //所有布局算法
	  layout: {},
	  registerLayout: function registerLayout(name, algorithm) {
	    this.layout[name] = algorithm;
	  },
	  props: {},
	  getProps: function getProps() {
	    //计算全量的 props 属性用来提供智能提示 begin
	    //这部分代码没必要部署到 打包的环境， 只是chartpark需要用来做智能提示， 自动化测试
	    var allProps = {};

	    var allModules = this._getComponentModules().modules;

	    var _loop = function _loop(n) {
	      if (n == 'chart') return "continue";
	      allProps[n] = {
	        detail: n,
	        propertys: {} //typeMap: {}

	      };

	      var _graphNames = void 0;

	      if (n == 'graphs') {
	        _graphNames = _.map(allModules.graphs, function (val, key) {
	          return key;
	        });
	        allProps.graphs.documentation = "可选的graphs类型有：\n" + _graphNames.join('\n');
	      }
	      var allConstructorProps = {}; //整个原型链路上面的 defaultProps

	      var protoModule = null;

	      for (var mn in allModules[n]) {
	        if (protoModule) break;
	        protoModule = allModules[n][mn].prototype;
	      }

	      function _setProps(m) {
	        var constructorModule = m.constructor.__proto__; //m.constructor;

	        if (!constructorModule._isComponentRoot) {
	          _setProps(constructorModule.prototype);
	        }

	        if (constructorModule.defaultProps && _.isFunction(constructorModule.defaultProps)) {
	          var _dprops = constructorModule.defaultProps();

	          _.extend(allConstructorProps, _dprops);
	        }
	      }

	      _setProps(protoModule);

	      allProps[n].propertys = _.extend(allConstructorProps, allProps[n].propertys);

	      var _loop2 = function _loop2(_mn) {
	        var module = allModules[n][_mn];
	        var moduleProps = module.defaultProps ? module.defaultProps() : {}; //处理props上面所有的 _props 依赖 begin

	        function setChildProps(p) {
	          if (p._props) {
	            var _propsIsArray = _.isArray(p._props);

	            for (var k in p._props) {
	              if (!_propsIsArray) {
	                p[k] = {
	                  detail: k,
	                  propertys: {}
	                };
	              }
	              var _module = p._props[k];

	              if (_module.defaultProps) {
	                (function () {
	                  var _setProps = function _setProps(m) {
	                    if (m.__proto__.__proto__) {
	                      _setProps(m.__proto__);
	                    }

	                    if (m.defaultProps && _.isFunction(m.defaultProps)) {
	                      var _dprops = m.defaultProps();

	                      if (_dprops._props) {
	                        //如果子元素还有 _props 依赖， 那么就继续处理
	                        setChildProps(_dprops);
	                      }
	                      _dprops && _.extend(allConstructorProps, _dprops);
	                    }
	                  };

	                  var _moduleProps = _module.defaultProps(); //先把ta原型上面的所有属性都添加到 _moduleProps 


	                  var allConstructorProps = {};

	                  _setProps(_module.__proto__);

	                  _moduleProps = _.extend(allConstructorProps, _moduleProps);

	                  if (_propsIsArray) {
	                    _.extend(p, _moduleProps);
	                  } else {
	                    p[k].propertys = _moduleProps;
	                    setChildProps(p[k].propertys);
	                  }
	                })();
	              }
	            }
	          }
	        }
	        setChildProps(moduleProps); //处理props上面所有的 _props 依赖 end
	        //这里不能用下面的 extend 方法，

	        moduleProps = _.extend({}, allConstructorProps, moduleProps); //如果原型上面是有type 属性的，那么说明，自己是type分类路由的一个分支，放到typeMap下面

	        if (allConstructorProps.type) {
	          if (!allProps[n].typeMap) allProps[n].typeMap = {};

	          if (n == 'graphs') {
	            moduleProps.type.values = _graphNames;
	            moduleProps.type.documentation = "可选的graphs类型有：\n" + _graphNames.join('\n');
	          }
	          allProps[n].typeMap[_mn] = moduleProps;
	        } else {
	          _.extend(allProps[n].propertys, moduleProps);
	        }
	      };

	      for (var _mn in allModules[n]) {
	        _loop2(_mn);
	      }
	    };

	    for (var n in allModules) {
	      var _ret = _loop(n);

	      if (_ret === "continue") continue;
	    }
	    this.props = allProps; //计算全量的 props 属性用来提供智能提示 begin

	    return this.props;
	  },
	  //兼容有的地方已经用了Chartx.Canvax
	  canvax: _canvax$$1["default"]
	};
	exports["default"] = _default;
	});

	var global$2 = unwrapExports(global$1);

	function _classCallCheck$1(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck$1 = _classCallCheck$1;

	function _defineProperties$1(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass$1(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$1(Constructor, staticProps);
	  return Constructor;
	}

	var createClass$1 = _createClass$1;

	var _typeof_1$1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _assertThisInitialized$1(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized$1 = _assertThisInitialized$1;

	function _possibleConstructorReturn$1(self, call) {
	  if (call && (_typeof_1$1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized$1(self);
	}

	var possibleConstructorReturn$1 = _possibleConstructorReturn$1;

	var getPrototypeOf$1 = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	});

	var setPrototypeOf$1 = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	function _inherits$1(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf$1(subClass, superClass);
	}

	var inherits$1 = _inherits$1;

	var dataFrame = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = _default;



	/**
	* 把原始的数据
	* field1 field2 field3
	*   1      2      3
	*   2      3      4
	* 这样的数据格式转换为内部的
	* [{field:'field1',index:0,data:[1,2]} ......]
	* 这样的结构化数据格式。
	*/
	//如果应用传入的数据是[{name:name, sex:sex ...} , ...] 这样的数据，就自动转换为chartx需要的矩阵格式数据
	function parse2MatrixData(list) {
	  if (list === undefined || list === null) {
	    list = [];
	  }

	  if (list.length > 0 && !_canvax._.isArray(list[0])) {
	    var newArr = [];
	    var fields = [];
	    var fieldNum = 0;

	    for (var i = 0, l = list.length; i < l; i++) {
	      var row = list[i];

	      if (i == 0) {
	        for (var f in row) {
	          fields.push(f);
	        }
	        newArr.push(fields);
	        fieldNum = fields.length;
	      }
	      var _rowData = [];

	      for (var ii = 0; ii < fieldNum; ii++) {
	        _rowData.push(row[fields[ii]]);
	      }
	      newArr.push(_rowData);
	    }
	    return newArr;
	  } else {
	    return list;
	  }
	}

	function parse2JsonData(list) {
	  var newArr = list; //检测第一个数据是否为一个array, 否就是传入了一个json格式的数据

	  if (list.length > 0 && _canvax._.isArray(list[0])) {
	    newArr = [];
	    var fields = list[0];
	    var fl = fields.length;

	    for (var i = 1, l = list.length; i < l; i++) {
	      var obj = {};

	      for (var fi = 0; fi < fl; fi++) {
	        obj[fields[fi]] = list[i][fi];
	      }
	      newArr.push(obj);
	    }
	    return newArr;
	  }
	}

	function _default(dataOrg, opt) {
	  var dataFrame = {
	    //数据框架集合
	    length: 0,
	    org: [],
	    //最原始的数据，一定是个行列式，因为如果发现是json格式数据，会自动转换为行列式
	    jsonOrg: [],
	    //原始数据的json格式
	    data: [],
	    //最原始的数据转化后的数据格式(range取段过后的数据)：[o,o,o] o={field:'val1',index:0,data:[1,2,3]}
	    getRowDataAt: _getRowDataAt,
	    getRowDataOf: _getRowDataOf,
	    getFieldData: _getFieldData,
	    getDataOrg: getDataOrg,
	    resetData: _resetData,
	    fields: [],
	    range: {
	      start: 0,
	      end: 0
	    },
	    filters: {} //数据过滤器，在range的基础上

	  };

	  function _initHandle(dataOrg) {
	    //数据做一份拷贝，避免污染源数据
	    dataOrg = JSON.parse(JSON.stringify(dataOrg, function (k, v) {
	      if (v === undefined) {
	        return null;
	      }
	      return v;
	    }));

	    if (!dataOrg || dataOrg.length == 0) {
	      return dataFrame;
	    }

	    if (dataOrg.length > 0 && !_canvax._.isArray(dataOrg[0])) {
	      dataFrame.jsonOrg = dataOrg;
	      dataOrg = parse2MatrixData(dataOrg);
	      dataFrame.org = dataOrg;
	    } else {
	      dataFrame.org = dataOrg;
	      dataFrame.jsonOrg = parse2JsonData(dataOrg);
	    }

	    dataFrame.range.end = dataOrg.length - 1 - 1; //然后检查opts中是否有dataZoom.range

	    if (opt) {
	      //兼容下dataZoom 和 datazoom 的大小写配置
	      var _datazoom = opt.dataZoom || opt.datazoom;

	      _datazoom && _datazoom.range && _canvax._.extend(dataFrame.range, _datazoom.range);
	    }

	    if (dataOrg.length && dataOrg[0].length && !~dataOrg[0].indexOf("__index__")) {
	      //如果数据中没有用户自己设置的__index__，那么就主动添加一个__index__，来记录元数据中的index
	      for (var i = 0, l = dataOrg.length; i < l; i++) {
	        if (!i) {
	          dataOrg[0].push("__index__");
	        } else {
	          dataOrg[i].push(i - 1);
	          dataFrame.jsonOrg[i - 1]["__index__"] = i - 1;
	        }
	      }
	    }
	    dataFrame.fields = dataOrg[0] ? dataOrg[0] : []; //所有的字段集合;

	    return dataFrame;
	  }

	  function _resetData(dataOrg) {
	    if (dataOrg) {
	      //重置一些数据
	      dataFrame.org = [];
	      dataFrame.jsonOrg = [];
	      dataFrame.fields = [];
	      dataFrame.data = [];

	      var preRange = _canvax._.extend(true, {}, dataFrame.range);

	      var preLen = dataFrame.length; //设置数据之前的数据长度

	      _initHandle(dataOrg);

	      dataFrame.data = _getDataAndSetDataLen(); //如果之前是有数据的情况，一些当前状态恢复到dataFrame里去 begin

	      if (preLen !== 0) {
	        if (opt && opt.dataZoom && opt.dataZoom.range) {
	          //如果有配置过dataZoom.range， 那么就要回复最近一次的range
	          _canvax._.extend(true, dataFrame.range, preRange);

	          if (dataFrame.range.end > dataFrame.length - 1) {
	            dataFrame.range.end = dataFrame.length - 1;
	          }

	          if (dataFrame.range.start > dataFrame.length - 1 || dataFrame.range.start > dataFrame.range.end) {
	            dataFrame.range.start = 0;
	          }
	        } //一些当前状态恢复到dataFrame里去 end  

	      }
	    } else {
	      //就算没有dataOrg，但是data还是要重新构建一边的，因为可能dataFrame上面的其他状态被外界改变了
	      //比如datazoom修改了dataFrame.range
	      dataFrame.data = _getDataAndSetDataLen();
	    }
	  }

	  function _getDataAndSetDataLen() {
	    var total = []; //已经处理成[o,o,o]   o={field:'val1',index:0,data:[1,2,3]}

	    for (var a = 0, al = dataFrame.fields.length; a < al; a++) {
	      var o = {};
	      o.field = dataFrame.fields[a];
	      o.index = a;
	      o.data = [];
	      total.push(o);
	    }

	    var rows = _getValidRows(function (rowData) {
	      _canvax._.each(dataFrame.fields, function (_field) {
	        var _val = rowData[_field]; //如果是可以转换为number的数据就尽量转换为number

	        if (!isNaN(_val) && _val !== "" && _val !== null) {
	          _val = Number(_val);
	        }

	        var gData = _canvax._.find(total, function (g) {
	          return g.field == _field;
	        });

	        gData && gData.data.push(_val);
	      });
	    }); //到这里保证了data一定是行列式


	    dataFrame.length = rows.length;
	    return total;
	  }

	  function _getValidRows(callback) {
	    var validRowDatas = [];

	    _canvax._.each(dataFrame.jsonOrg.slice(dataFrame.range.start, dataFrame.range.end + 1), function (rowData) {
	      var validRowData = true;

	      if (_canvax._.keys(dataFrame.filters).length) {
	        _canvax._.each(dataFrame.filters, function (filter) {
	          if (_canvax._.isFunction(filter) && !filter(rowData)) {
	            validRowData = false;
	            return false;
	          }
	        });
	      }

	      if (validRowData) {
	        callback && callback(rowData);
	        validRowDatas.push(rowData);
	      }
	    });

	    return validRowDatas;
	  }

	  function getDataOrg($field, format, totalList, lev) {
	    if (!lev) lev = 0;

	    var arr = totalList || _getDataAndSetDataLen();

	    if (!arr) {
	      return;
	    }

	    if (!format) {
	      format = function format(e) {
	        return e;
	      };
	    }

	    function _format(d) {
	      for (var i = 0, l = d.length; i < l; i++) {
	        d[i] = format(d[i]);
	      }
	      return d;
	    }

	    if (!_canvax._.isArray($field)) {
	      $field = [$field];
	    }

	    var newData = [];

	    for (var i = 0, l = $field.length; i < l; i++) {

	      if (_canvax._.isArray($field[i])) {
	        newData.push(getDataOrg($field[i], format, totalList, lev + 1));
	      } else {
	        var _fieldData = newData;

	        if (!lev) {
	          _fieldData = [];
	        }

	        for (var ii = 0, iil = arr.length; ii < iil; ii++) {
	          if ($field[i] == arr[ii].field) {

	            _fieldData.push(_format(arr[ii].data));

	            break;
	          }
	        }

	        if (!lev) {
	          newData.push(_fieldData);
	        }
	      }
	    }

	    return newData;
	  }
	  /*
	   * 获取某一行数据,当前dataFrame.data中
	  */

	  function _getRowDataAt(index) {
	    var o = {};
	    var data = dataFrame.data;

	    for (var a = 0; a < data.length; a++) {
	      o[data[a].field] = data[a].data[index];
	    }
	    return o;
	  }
	  /**
	   * obj => {uv: 100, pv: 10 ...}
	   */


	  function _getRowDataOf(obj) {
	    !obj && (obj = {});
	    var arr = [];
	    var expCount = 0;

	    for (var p in obj) {
	      expCount++;
	    }

	    if (expCount) {
	      var _loop = function _loop(i) {
	        var matchNum = 0;

	        _canvax._.each(dataFrame.data, function (fd) {
	          if (fd.field in obj && fd.data[i] == obj[fd.field]) {
	            matchNum++;
	          }
	        });

	        if (matchNum == expCount) {
	          //说明这条数据是完全和查询
	          arr.push(_getRowDataAt(i));
	        }
	      };

	      for (var i = dataFrame.range.start; i <= dataFrame.range.end; i++) {
	        _loop(i);
	      }
	    }
	    return arr;
	  }

	  function _getFieldData(field) {
	    var list = [];

	    var _f = _canvax._.find(dataFrame.data, function (obj) {
	      return obj.field == field;
	    });

	    _f && (list = _f.data);
	    return list;
	  }

	  _initHandle(dataOrg);

	  dataFrame.data = _getDataAndSetDataLen();
	  return dataFrame;
	}
	});

	unwrapExports(dataFrame);

	var chart = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _global = interopRequireDefault(global$1);

	var _canvax$$1 = interopRequireDefault(_canvax);

	var _dataFrame = interopRequireDefault(dataFrame);

	var _ = _canvax$$1["default"]._,
	    $ = _canvax$$1["default"].$,
	    event = _canvax$$1["default"].event;
	var _padding = 20;

	var Chart =
	/*#__PURE__*/
	function (_event$Dispatcher) {
	  (0, _inherits2["default"])(Chart, _event$Dispatcher);

	  function Chart(node, data, opt, componentModules) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, Chart);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Chart).call(this));
	    _this.componentModules = componentModules;
	    _this._node = node;
	    _this._data = data;
	    _this._opt = opt;
	    _this.dataFrame = _this.initData(data, opt);
	    _this.el = $.query(node); //chart 在页面里面的容器节点，也就是要把这个chart放在哪个节点里

	    _this.width = parseInt(_this.el.offsetWidth); //图表区域宽

	    _this.height = parseInt(_this.el.offsetHeight); //图表区域高
	    //legend如果在top，就会把图表的padding.top修改，减去legend的height

	    _this.padding = null; //Canvax实例

	    _this.canvax = new _canvax$$1["default"].App({
	      el: _this.el,
	      webGL: false
	    });

	    _this.canvax.registEvent();

	    _this.id = "chartx_" + _this.canvax.id;

	    _this.el.setAttribute("chart_id", _this.id);

	    _this.el.setAttribute("chartx_version", "2.0"); //设置stage ---------------------------------------------------------begin


	    _this.stage = new _canvax$$1["default"].Display.Stage({
	      id: "main-chart-stage"
	    });

	    _this.canvax.addChild(_this.stage); //设置stage ---------------------------------------------------------end
	    //构件好coord 和 graphs 的根容器


	    _this.setCoord_Graphs_Sp(); //这三类组件是优先级最高的组件，所有的组件的模块化和绘制，都要一次在这三个完成后实现


	    _this.__highModules = ["theme", "coord", "graphs"]; //组件管理机制,所有的组件都绘制在这个地方

	    _this.components = [];
	    _this.inited = false;

	    _this.init();

	    return _this;
	  }

	  (0, _createClass2["default"])(Chart, [{
	    key: "init",
	    value: function init() {
	      var _this2 = this;

	      var me = this; //init全部用 this._opt

	      var opt = this._opt; //padding数据也要重置为起始值

	      this.padding = this._getPadding(); //先依次init 处理 "theme", "coord", "graphs" 三个优先级最高的模块

	      _.each(this.__highModules, function (compName) {
	        if (!opt[compName]) return;

	        var comps = _.flatten([opt[compName]]); //them是一个数组的组件。so特殊处理


	        if (compName == "theme") {
	          comps = [comps];
	        }

	        _.each(comps, function (comp) {
	          if ( //没有type的coord和没有field(or keyField)的graphs，都无效，不要创建该组件
	          //关系图中是keyField
	          compName == "coord" && !comp.type || compName == "graphs" && !comp.field && !comp.keyField && !comp.adcode && !comp.geoJson && !comp.geoJsonUrl //地图的话只要有个adcode就可以了
	          ) return;
	          var compModule = me.componentModules.get(compName, comp.type);

	          if (compModule) {
	            var _comp = new compModule(comp, me);

	            me.components.push(_comp);
	          }
	        });
	      }); //PS: theme 组件优先级最高，在registerComponents之前已经加载过


	      var _loop = function _loop(_p) {
	        //非coord graphs theme，其实后面也可以统一的
	        if (_.indexOf(_this2.__highModules, _p) == -1) {
	          var comps = _this2._opt[_p]; //所有的组件都按照数组方式处理，这里，组件里面就不需要再这样处理了

	          if (!_.isArray(comps)) {
	            comps = [comps];
	          }

	          _.each(comps, function (comp) {
	            var compModule = me.componentModules.get(_p, comp.type);

	            if (compModule) {
	              var _comp = new compModule(comp, me);

	              me.components.push(_comp);
	            }
	          });
	        }
	      };

	      for (var _p in this._opt) {
	        _loop(_p);
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(opt) {
	      var me = this;
	      !opt && (opt = {});

	      var _coord = this.getComponent({
	        name: 'coord'
	      });

	      if (_coord && _coord.horizontal) {
	        this._drawBeginHorizontal();
	      }
	      var width = this.width - this.padding.left - this.padding.right;
	      var height = this.height - this.padding.top - this.padding.bottom;
	      var origin = {
	        x: this.padding.left,
	        y: this.padding.top
	      };

	      if (_coord) {
	        //先绘制好坐标系统
	        _coord.draw(opt);

	        width = _coord.width;
	        height = _coord.height;
	        origin = _coord.origin;
	      }

	      if (this.dataFrame.length == 0) {
	        //如果没有数据，不需要绘制graphs
	        me.fire("complete");
	        return;
	      }

	      var _graphs = this.getComponents({
	        name: 'graphs'
	      });

	      var graphsCount = _graphs.length;
	      var completeNum = 0;
	      opt = _.extend(opt, {
	        width: width,
	        height: height,
	        origin: origin
	      });

	      _.each(_graphs, function (_g) {
	        _g.on("complete", function (g) {
	          completeNum++;

	          if (completeNum == graphsCount) {
	            me.fire("complete");
	          }
	          _g.inited = true;
	        });

	        _g.draw(opt);
	      }); //绘制除开coord graphs 以外的所有组件


	      for (var i = 0, l = this.components.length; i < l; i++) {
	        var p = this.components[i];

	        if (_.indexOf(this.__highModules, p.name) == -1) {
	          p.draw(opt);
	        }
	      }

	      this._bindEvent();

	      if (_coord && _coord.horizontal) {
	        this._drawEndHorizontal();
	      }
	    }
	  }, {
	    key: "_drawBeginHorizontal",
	    value: function _drawBeginHorizontal() {
	      //横向了之后， 要把4个padding值轮换一下
	      //top,right 对调 ， bottom,left 对调
	      var padding = this.padding;
	      var num = padding.top;
	      padding.top = padding.right;
	      padding.right = padding.bottom;
	      padding.bottom = padding.left;
	      padding.left = num;
	    } //绘制完毕后的横向处理

	  }, {
	    key: "_drawEndHorizontal",
	    value: function _drawEndHorizontal() {
	      var ctx = this.graphsSprite.context;
	      ctx.x += (this.width - this.height) / 2;
	      ctx.y += (this.height - this.width) / 2;
	      ctx.rotation = 90;
	      ctx.rotateOrigin = {
	        x: this.height / 2,
	        y: this.width / 2
	      };

	      this._horizontalGraphsText();
	    }
	  }, {
	    key: "_horizontalGraphsText",
	    value: function _horizontalGraphsText() {
	      var me = this;

	      function _horizontalText(el) {
	        if (el.children) {
	          _.each(el.children, function (_el) {
	            _horizontalText(_el);
	          });
	        }

	        if (el.type == "text" && !el.__horizontal) {
	          var ctx = el.context;
	          var w = ctx.width;
	          var h = ctx.height;
	          ctx.rotation = ctx.rotation - 90;
	          el.__horizontal = true;
	        }
	      }

	      _.each(me.getComponents({
	        name: 'graphs'
	      }), function (_graphs) {
	        _horizontalText(_graphs.sprite);
	      });
	    }
	  }, {
	    key: "_getPadding",
	    value: function _getPadding() {
	      var paddingVal = _padding;

	      if (this._opt.coord && "padding" in this._opt.coord) {
	        if (!_.isObject(this._opt.coord.padding)) {
	          paddingVal = this._opt.coord.padding;
	        }
	      }
	      var paddingObj = {
	        top: paddingVal,
	        right: paddingVal,
	        bottom: paddingVal,
	        left: paddingVal
	      };

	      if (this._opt.coord && "padding" in this._opt.coord) {
	        if (_.isObject(this._opt.coord.padding)) {
	          paddingObj = _.extend(paddingObj, this._opt.coord.padding);
	        }
	      }
	      return paddingObj;
	    } //ind 如果有就获取对应索引的具体颜色值

	  }, {
	    key: "getTheme",
	    value: function getTheme(ind) {
	      var colors = _global["default"].getGlobalTheme();

	      var _theme = this.getComponent({
	        name: 'theme'
	      });

	      if (_theme) {
	        colors = _theme.get();
	      }

	      if (ind != undefined) {
	        return colors[ind % colors.length] || "#ccc";
	      }
	      return colors;
	    }
	  }, {
	    key: "setCoord_Graphs_Sp",
	    value: function setCoord_Graphs_Sp() {
	      //坐标系存放的容器
	      this.coordSprite = new _canvax$$1["default"].Display.Sprite({
	        id: 'coordSprite'
	      });
	      this.stage.addChild(this.coordSprite); //graphs管理

	      this.graphsSprite = new _canvax$$1["default"].Display.Sprite({
	        id: 'graphsSprite'
	      });
	      this.stage.addChild(this.graphsSprite);
	    }
	    /*
	     * chart的销毁
	     */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.clean();

	      if (this.el) {
	        this.el.removeAttribute("chart_id");
	        this.el.removeAttribute("chartx_version");
	        this.canvax.destroy();
	        this.el = null;
	      }
	      this._destroy && this._destroy();
	      this.fire("destroy");
	    }
	    /*
	     * 清除整个图表
	     **/

	  }, {
	    key: "clean",
	    value: function clean() {
	      //保留所有的stage，stage下面得元素全部 destroy 掉
	      for (var i = 0, l = this.canvax.children.length; i < l; i++) {
	        var stage = this.canvax.getChildAt(i);

	        for (var s = 0, sl = stage.children.length; s < sl; s++) {
	          stage.getChildAt(s).destroy();
	          s--;
	          sl--;
	        }
	      }
	      //所以要重新设置一遍准备好。

	      this.setCoord_Graphs_Sp();
	      this.components = []; //组件清空

	      this.canvax.domView.innerHTML = ""; //清空事件的当前状态

	      if (this.canvax.event) {
	        this.canvax.event.curPointsTarget = [];
	      }
	    }
	    /**
	     * 容器的尺寸改变重新绘制
	     */

	  }, {
	    key: "resize",
	    value: function resize() {
	      var _w = parseInt(this.el.offsetWidth);

	      var _h = parseInt(this.el.offsetHeight);

	      if (_w == this.width && _h == this.height) return;
	      this.width = _w;
	      this.height = _h;
	      this.canvax.resize();
	      this.inited = false;
	      this.clean();
	      this.init();
	      this.draw({
	        resize: true
	      });
	      this.inited = true;
	    }
	    /**
	     * reset 其实就是重新绘制整个图表，不再做详细的拆分opts中有哪些变化，来做对应的细致的变化，简单粗暴的全部重新创立
	     * opt 必须全量options，不在支持局部opt传递，所以对opt的处理不再支持extend
	     */

	  }, {
	    key: "reset",
	    value: function reset(opt, data) {
	      opt && (this._opt = opt);
	      /* 不能 extend opt 
	      !opt && (opt={});
	      _.extend(this._opt, opt);
	      */

	      data && (this._data = data);
	      this.dataFrame = this.initData(this._data, opt);
	      this.clean();
	      this.init();
	      this.draw();
	    }
	    /*
	     * 只响应数据的变化，不涉及配置变化
	     * 
	     * @trigger 一般是触发这个data reset的一些场景数据，
	     * 比如如果是 datazoom 触发的， 就会有 trigger数据{ name:'datazoom', left:1,right:1 }
	     */

	  }, {
	    key: "resetData",
	    value: function resetData(data, trigger) {
	      var me = this;
	      this._data = data;
	      var preDataLenth = this.dataFrame.org.length;
	      this.dataFrame.resetData(data);
	      var graphsList = this.getComponents({
	        name: 'graphs'
	      });
	      var allGraphsHasResetData = true;

	      _.each(graphsList, function (_g) {
	        if (!_g.resetData && allGraphsHasResetData) {
	          allGraphsHasResetData = false;
	          return false;
	        }
	      });

	      if (!preDataLenth || !allGraphsHasResetData) {
	        //如果之前的数据为空， 那么我们应该这里就直接重绘吧
	        //如果有其中一个graphs没实现resetData 也 重绘
	        this.clean();
	        this.init();
	        this.draw(this._opt);
	        return;
	      }

	      var _coord = this.getComponent({
	        name: 'coord'
	      });

	      if (_coord) {
	        _coord.resetData(this.dataFrame, trigger);
	      }

	      _.each(graphsList, function (_g) {
	        _g.resetData(me.dataFrame, trigger);
	      });

	      this.componentsReset(trigger);

	      if (_coord && _coord.horizontal) {
	        this._horizontalGraphsText();
	      }
	      this.fire("resetData");
	    }
	  }, {
	    key: "initData",
	    value: function initData() {
	      return _dataFrame["default"].apply(this, arguments);
	    }
	  }, {
	    key: "componentsReset",
	    value: function componentsReset(trigger) {
	      var me = this;

	      _.each(this.components, function (p, i) {
	        //theme coord graphs额外处理
	        if (_.indexOf(me.__highModules, p.name) != -1) {
	          return;
	        }

	        if (trigger && trigger.comp && trigger.comp.__cid == p.__cid) {
	          //如果这次reset就是由自己触发的，那么自己这个components不需要reset，负责观察就好
	          return;
	        }
	        p.reset && p.reset(me[p.type] || {}, me.dataFrame);
	      });
	    }
	  }, {
	    key: "getComponentById",
	    value: function getComponentById(id) {
	      var comp;

	      _.each(this.components, function (c) {
	        if (c.id && c.id == id) {
	          comp = c;
	          return false;
	        }
	      });

	      return comp;
	    }
	  }, {
	    key: "getComponent",
	    value: function getComponent(opt) {
	      return this.getComponents(opt)[0];
	    }
	  }, {
	    key: "getComponents",
	    value: function getComponents(opt, components) {
	      var arr = [];
	      var expCount = 0;

	      if (!components) {
	        components = this.components;
	      }

	      for (var p in opt) {
	        expCount++;
	      }

	      if (!expCount) {
	        return components;
	      }

	      _.each(components, function (comp) {
	        var i = 0;

	        for (var _p2 in opt) {
	          if (JSON.stringify(comp[_p2]) == JSON.stringify(opt[_p2])) {
	            i++;
	          }
	        }

	        if (expCount == i) {
	          arr.push(comp);
	        }
	      });

	      return arr;
	    } //从graphs里面去根据opt做一一对比，比对成功为true
	    //count为要查询的数量， 如果为1，则

	  }, {
	    key: "getGraph",
	    value: function getGraph(opt) {
	      var graphs = this.getGraphs(opt);
	      return graphs[0];
	    }
	  }, {
	    key: "getGraphs",
	    value: function getGraphs(opt) {
	      return this.getComponents(opt, this.getComponents({
	        name: 'graphs'
	      }));
	    } //获取graphs根据id

	  }, {
	    key: "getGraphById",
	    value: function getGraphById(id) {
	      var _g;

	      _.each(this.getComponents({
	        name: 'graphs'
	      }), function (g) {
	        if (g.id == id) {
	          _g = g;
	          return false;
	        }
	      });

	      return _g;
	    } //从coord里面去根据opt做一一对比，比对成功为true
	    //目前没有多个坐标系的图表，所以不需要 getCoords 

	  }, {
	    key: "getCoord",
	    value: function getCoord(opt) {
	      return this.getComponent(_.extend(true, {
	        name: 'coord'
	      }, opt));
	    } //只有field为多组数据的时候才需要legend，给到legend组件来调用

	  }, {
	    key: "getLegendData",
	    value: function getLegendData() {
	      var me = this;
	      var data = []; //这里涌来兼容pie等的图例，其实后续可以考虑后面所有的graphs都提供一个getLegendData的方法
	      //那么就可以统一用这个方法， 下面的代码就可以去掉了

	      _.each(this.getComponents({
	        name: 'graphs'
	      }), function (_g) {
	        _.each(_g.getLegendData(), function (item) {
	          if (_.find(data, function (d) {
	            return d.name == item.name;
	          })) return;

	          var legendItem = _.extend(true, {}, item);

	          legendItem.color = item.fillStyle || item.color || item.style;
	          data.push(legendItem);
	        });
	      });

	      if (data.length) {
	        return data;
	      }

	      var _coord = me.getComponent({
	        name: 'coord'
	      });

	      _.each(_.flatten(_coord.fieldsMap), function (map, i) {
	        //因为yAxis上面是可以单独自己配置field的，所以，这部分要过滤出 legend data
	        var isGraphsField = false;

	        _.each(me._opt.graphs, function (gopt) {
	          if (_.indexOf(_.flatten([gopt.field]), map.field) > -1) {
	            isGraphsField = true;
	            return false;
	          }
	        });

	        if (isGraphsField) {
	          data.push({
	            enabled: map.enabled,
	            name: map.field,
	            field: map.field,
	            ind: map.ind,
	            color: map.color,
	            yAxis: map.yAxis
	          });
	        }
	      });

	      return data;
	    }
	  }, {
	    key: "show",
	    value: function show(field, trigger) {

	      var _coord = this.getComponent({
	        name: 'coord'
	      });

	      _coord && _coord.show(field, trigger);

	      _.each(this.getComponents({
	        name: 'graphs'
	      }), function (_g) {
	        _g.show(field, trigger);
	      });

	      this.componentsReset(trigger);
	    }
	  }, {
	    key: "hide",
	    value: function hide(field, trigger) {
	      var me = this;

	      var _coord = me.getComponent({
	        name: 'coord'
	      });

	      _coord && _coord.hide(field, trigger);

	      _.each(this.getComponents({
	        name: 'graphs'
	      }), function (_g) {
	        _g.hide(field, trigger);
	      });

	      this.componentsReset(trigger);
	    }
	  }, {
	    key: "_bindEvent",
	    value: function _bindEvent() {
	      var me = this;
	      if (this.__bindEvented) return;
	      this.on(event.types.get(), function (e) {
	        //触发每个graphs级别的事件，
	        //用户交互事件先执行，还可以修改e的内容修改tips内容
	        if (e.eventInfo) {
	          _.each(this.getGraphs(), function (graph) {
	            graph.triggerEvent(e);
	          });
	        }

	        var _tips = me.getComponent({
	          name: 'tips'
	        });

	        var _coord = me.getComponent({
	          name: 'coord'
	        });

	        if (_tips) {
	          me._setGraphsTipsInfo.apply(me, [e]);

	          if (e.type == "mouseover" || e.type == "mousedown") {
	            _tips.show(e);

	            me._tipsPointerAtAllGraphs(e);
	          }

	          if (e.type == "mousemove") {
	            _tips.move(e);

	            me._tipsPointerAtAllGraphs(e);
	          }

	          if (e.type == "mouseout" && !(e.toTarget && _coord && _coord.induce && _coord.induce.containsPoint(_coord.induce.globalToLocal(e.target.localToGlobal(e.point))))) {
	            _tips.hide(e);

	            me._tipsPointerHideAtAllGraphs(e);
	          }
	        }
	      }); //一个项目只需要bind一次

	      this.__bindEvented = true;
	    } //默认的基本tipsinfo处理，极坐标和笛卡尔坐标系统会覆盖

	  }, {
	    key: "_setGraphsTipsInfo",
	    value: function _setGraphsTipsInfo(e) {
	      if (!e.eventInfo) {
	        e.eventInfo = {};
	      }

	      var _coord = this.getComponent({
	        name: 'coord'
	      });

	      if (_coord) {
	        e.eventInfo = _coord.getTipsInfoHandler(e);
	      }

	      if (!("tipsEnabled" in e.eventInfo)) {
	        e.eventInfo.tipsEnabled = true; //默认都开始tips
	      }
	      //比如鼠标移动到多柱子组合的具体某根bar上面，e.eventInfo.nodes = [ {bardata} ] 就有了这个bar的数据
	      //那么tips就只显示这个bardata的数据

	      if (!e.eventInfo.nodes || !e.eventInfo.nodes.length) {
	        var nodes = [];
	        var iNode = e.eventInfo.iNode;

	        _.each(this.getComponents({
	          name: 'graphs'
	        }), function (_g) {
	          if (_g.getNodesAt) {
	            nodes = nodes.concat(_g.getNodesAt(iNode, e));
	          }
	        });

	        e.eventInfo.nodes = nodes;
	      }
	    } //把这个point拿来给每一个graphs执行一次测试，给graphs上面的shape触发激活样式

	  }, {
	    key: "_tipsPointerAtAllGraphs",
	    value: function _tipsPointerAtAllGraphs(e) {
	      _.each(this.getComponents({
	        name: 'graphs'
	      }), function (_g) {
	        _g.tipsPointerOf(e);
	      });
	    }
	  }, {
	    key: "_tipsPointerHideAtAllGraphs",
	    value: function _tipsPointerHideAtAllGraphs(e) {
	      _.each(this.getComponents({
	        name: 'graphs'
	      }), function (_g) {
	        _g.tipsPointerHideOf(e);
	      });
	    }
	  }]);
	  return Chart;
	}(event.Dispatcher);

	_global["default"].registerComponent(Chart, 'chart');

	var _default = Chart;
	exports["default"] = _default;
	});

	unwrapExports(chart);

	var tools = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.numAddSymbol = numAddSymbol;
	exports.getDisMinATArr = getDisMinATArr;
	exports.getPath = getPath;
	exports.getDefaultProps = getDefaultProps;



	/**
	 * 数字千分位加','号
	 * @param  {[Number]} $n [数字]
	 * @param  {[type]} $s [千分位上的符号]
	 * @return {[String]}    [根据$s提供的值 对千分位进行分隔 并且小数点上自动加上'.'号  组合成字符串]
	 */
	function numAddSymbol($n, $s) {
	  var s = Number($n);
	  var symbol = $s ? $s : ',';

	  if (!s) {
	    return String($n);
	  }

	  if (s >= 1000) {
	    var num = parseInt(s / 1000);
	    return String($n.toString().replace(num, num + symbol));
	  } else {
	    return String($n);
	  }
	} //在一个数组中 返回比对$arr中的值离$n最近的值的索引


	function getDisMinATArr($n, $arr) {
	  var index = 0;
	  var n = Math.abs($n - $arr[0]);

	  for (var a = 1, al = $arr.length; a < al; a++) {
	    if (n > Math.abs($n - $arr[a])) {
	      n = Math.abs($n - $arr[a]);
	      index = a;
	    }
	  }

	  return index;
	}
	/**
	* 获取一个path路径
	* @param  {[Array]} $arr    [数组]
	* @return {[String]}        [path字符串]
	*/


	function getPath($arr) {
	  var M = 'M',
	      L = 'L',
	      Z = 'z';
	  var s = '';
	  var start = {
	    x: 0,
	    y: 0
	  };

	  if (_canvax._.isArray($arr[0])) {
	    start.x = $arr[0][0];
	    start.y = $arr[0][1];
	    s = M + $arr[0][0] + ' ' + $arr[0][1];
	  } else {
	    start = $arr[0];
	    s = M + $arr[0].x + ' ' + $arr[0].y;
	  }

	  for (var a = 1, al = $arr.length; a < al; a++) {
	    var x = 0,
	        y = 0,
	        item = $arr[a];

	    if (_canvax._.isArray(item)) {
	      x = item[0];
	      y = item[1];
	    } else {
	      x = item.x;
	      y = item.y;
	    } //s += ' ' + L + x + ' ' + y


	    if (x == start.x && y == start.y) {
	      s += ' ' + Z;
	    } else {
	      s += ' ' + L + x + ' ' + y;
	    }
	  } // s += ' ' + Z


	  return s;
	}

	function getDefaultProps(dProps) {
	  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  for (var p in dProps) {
	    if (!!p.indexOf("_")) {
	      if (!dProps[p] || !dProps[p].propertys) {
	        //如果这个属性没有子属性了，那么就说明这个已经是叶子节点了
	        if (_canvax._.isObject(dProps[p]) && !_canvax._.isFunction(dProps[p]) && !_canvax._.isArray(dProps[p])) {
	          target[p] = dProps[p]["default"];
	        } else {
	          target[p] = dProps[p];
	        }
	      } else {
	        target[p] = {};
	        getDefaultProps(dProps[p].propertys, target[p]);
	      }
	    }
	  }

	  return target;
	}
	});

	unwrapExports(tools);
	var tools_1 = tools.numAddSymbol;
	var tools_2 = tools.getDisMinATArr;
	var tools_3 = tools.getPath;
	var tools_4 = tools.getDefaultProps;

	var component = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _global = interopRequireDefault(global$1);

	var _canvax$$1 = interopRequireDefault(_canvax);



	var event = _canvax$$1["default"].event,
	    _ = _canvax$$1["default"]._;

	var Component =
	/*#__PURE__*/
	function (_event$Dispatcher) {
	  (0, _inherits2["default"])(Component, _event$Dispatcher);
	  (0, _createClass2["default"])(Component, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        enabled: {
	          detail: '是否开启该组件',
	          "default": false
	        }
	      };
	    }
	  }, {
	    key: "registerComponent",
	    value: function registerComponent(compModule, name, type) {
	      return _global["default"].registerComponent(compModule, name, type);
	    } //global.getProps 中会用到

	  }, {
	    key: "_isComponentRoot",
	    value: function _isComponentRoot() {
	      return true;
	    }
	  }]);

	  function Component(opt, app) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, Component);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Component).call(this, opt, app));

	    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Component.defaultProps()), opt);

	    _this.name = "component"; //组件名称

	    _this.type = null; //组件子类型，比如 Graphs组件下面的bar,line,scat等
	    //this.enabled = false; //是否加载该组件

	    _this._opt = opt;
	    _this.app = app; //这个组件挂在哪个app上面（图表）

	    _this.width = 0;
	    _this.height = 0; //height 不包含margin

	    _this.pos = {
	      x: 0,
	      y: 0
	    };
	    _this.margin = {
	      top: 0,
	      right: 0,
	      bottom: 0,
	      left: 0
	    };
	    _this.__cid = _canvax$$1["default"].utils.createId("comp_");
	    return _this;
	  }

	  (0, _createClass2["default"])(Component, [{
	    key: "init",
	    value: function init(opt, data) {}
	  }, {
	    key: "draw",
	    value: function draw() {} //组件的销毁

	  }, {
	    key: "destroy",
	    value: function destroy() {}
	  }, {
	    key: "reset",
	    value: function reset() {} // resetData(){
	    //     console.log( ( this.type || '' ) + '暂无resetData的实现' );
	    // }

	  }, {
	    key: "setPosition",
	    value: function setPosition(pos) {
	      !pos && (pos = this.pos);
	      pos.x && (this.sprite.context.x = pos.x);
	      pos.y && (this.sprite.context.y = pos.y);
	    }
	  }, {
	    key: "layout",
	    value: function layout() {}
	  }]);
	  return Component;
	}(event.Dispatcher);

	exports["default"] = Component;
	});

	unwrapExports(component);

	var coord = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _component = interopRequireDefault(component);

	var _canvax$$1 = interopRequireDefault(_canvax);



	var _ = _canvax$$1["default"]._;

	var coordBase =
	/*#__PURE__*/
	function (_Component) {
	  (0, _inherits2["default"])(coordBase, _Component);
	  (0, _createClass2["default"])(coordBase, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        type: {
	          detail: '坐标系组件',
	          documentation: "坐标系组件，可选值有'rect'（二维直角坐标系）,'polar'（二维极坐标系）,'box'（三维直角坐标系） ",
	          insertText: "type: ",
	          "default": "",
	          values: ["rect", "polar", "box", "polar3d"]
	        },
	        width: {
	          detail: '坐标系width',
	          "default": 0
	        },
	        height: {
	          detail: '坐标系height',
	          "default": 0
	        },
	        origin: {
	          detail: '坐标系原点',
	          propertys: {
	            x: {
	              detail: '原点x位置',
	              "default": 0
	            },
	            y: {
	              detail: '原点x位置',
	              "default": 0
	            }
	          }
	        }
	      };
	    }
	  }]);

	  function coordBase(opt, app) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, coordBase);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(coordBase).call(this, opt, app));

	    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(coordBase.defaultProps()));

	    _this.name = "coord";
	    _this._opt = opt;
	    _this.app = app;
	    _this.dataFrame = _this.app.dataFrame;
	    _this.sprite = new _canvax$$1["default"].Display.Sprite({
	      name: "coord_" + opt.type
	    });

	    _this.app.coordSprite.addChild(_this.sprite);
	    /*
	    吧原始的field转换为对应结构的显示树
	    ["uv"] --> [
	        {field:'uv',enabled:true ,yAxis: yAxisleft }
	        ...
	    ]
	    */


	    _this.fieldsMap = null;
	    _this.induce = null;
	    _this._axiss = []; //所有轴的集合

	    return _this;
	  } //和原始field结构保持一致，但是对应的field换成 {field: , enabled:...}结构


	  (0, _createClass2["default"])(coordBase, [{
	    key: "setFieldsMap",
	    value: function setFieldsMap(axisExp) {
	      var me = this;
	      var fieldInd = 0;
	      var axisType = axisExp.type || "yAxis";
	      var fieldsArr = [];

	      _.each(this.getAxiss(axisExp), function (_axis) {
	        if (_axis.field) {
	          fieldsArr = fieldsArr.concat(_axis.field);
	        }
	      });

	      function _set(fields) {
	        if (_.isString(fields)) {
	          fields = [fields];
	        }

	        var clone_fields = _.clone(fields);

	        for (var i = 0, l = fields.length; i < l; i++) {
	          if (_.isString(fields[i])) {
	            clone_fields[i] = {
	              field: fields[i],
	              enabled: true,
	              //yAxis : me.getAxis({type:'yAxis', field:fields[i] }),
	              color: me.app.getTheme(fieldInd),
	              ind: fieldInd++
	            };
	            clone_fields[i][axisType] = me.getAxis({
	              type: axisType,
	              field: fields[i]
	            });
	          }

	          if (_.isArray(fields[i])) {
	            clone_fields[i] = _set(fields[i], fieldInd);
	          }
	        }
	        return clone_fields;
	      }
	      return _set(fieldsArr);
	    } //设置 fieldsMap 中对应field 的 enabled状态

	  }, {
	    key: "setFieldEnabled",
	    value: function setFieldEnabled(field) {
	      var me = this;

	      function set(maps) {
	        _.each(maps, function (map) {
	          if (_.isArray(map)) {
	            set(map);
	          } else if (map.field && map.field == field) {
	            map.enabled = !map.enabled;
	          }
	        });
	      }

	      set(me.fieldsMap);
	    }
	  }, {
	    key: "getFieldMapOf",
	    value: function getFieldMapOf(field) {
	      var me = this;
	      var fieldMap = null;

	      function get(maps) {
	        _.each(maps, function (map) {
	          if (_.isArray(map)) {
	            get(map);
	          } else if (map.field && map.field == field) {
	            fieldMap = map;
	            return false;
	          }
	        });
	      }

	      get(me.fieldsMap);
	      return fieldMap;
	    } //从 fieldsMap 中过滤筛选出来一个一一对应的 enabled为true的对象结构
	    //这个方法还必须要返回的数据里描述出来多y轴的结构。否则外面拿到数据后并不好处理那个数据对应哪个轴

	  }, {
	    key: "getEnabledFieldsOf",
	    value: function getEnabledFieldsOf(axis) {
	      var enabledFields = [];
	      var axisType = axis ? axis.type : "yAxis";

	      _.each(this.fieldsMap, function (bamboo) {
	        if (_.isArray(bamboo)) {
	          //多节竹子，堆叠
	          var fields = []; //设置完fields后，返回这个group属于left还是right的axis

	          _.each(bamboo, function (obj) {
	            if (obj[axisType] === axis && obj.field && obj.enabled) {
	              fields.push(obj.field);
	            }
	          });

	          fields.length && enabledFields.push(fields);
	        } else {
	          //单节棍
	          if (bamboo[axisType] === axis && bamboo.field && bamboo.enabled) {
	            enabledFields.push(bamboo.field);
	          }
	        }
	      });

	      return enabledFields;
	    } //如果有传参数 fields 进来，那么就把这个指定的 fields 过滤掉 enabled==false的field
	    //只留下enabled的field 结构

	  }, {
	    key: "filterEnabledFields",
	    value: function filterEnabledFields(fields) {
	      var me = this;
	      var arr = [];
	      if (!_.isArray(fields)) fields = [fields];

	      _.each(fields, function (f) {
	        if (!_.isArray(f)) {
	          if (me.getFieldMapOf(f).enabled) {
	            arr.push(f);
	          }
	        } else {
	          //如果这个是个纵向数据，说明就是堆叠配置
	          var varr = [];

	          _.each(f, function (v_f) {
	            if (me.getFieldMapOf(v_f).enabled) {
	              varr.push(v_f);
	            }
	          });

	          if (varr.length) {
	            arr.push(varr);
	          }
	        }
	      });

	      return arr;
	    }
	  }, {
	    key: "getAxisDataFrame",
	    value: function getAxisDataFrame(fields) {
	      return {
	        field: fields,
	        org: this.dataFrame.getDataOrg(fields, function (val) {
	          if (val === undefined || val === null || val == "") {
	            return val;
	          }

	          return isNaN(Number(val)) ? val : Number(val);
	        })
	      };
	    }
	  }, {
	    key: "hide",
	    value: function hide(field) {
	      this.changeFieldEnabled(field);
	    }
	  }, {
	    key: "show",
	    value: function show(field) {
	      this.changeFieldEnabled(field);
	    }
	  }, {
	    key: "getSizeAndOrigin",
	    value: function getSizeAndOrigin() {
	      return {
	        width: this.width,
	        height: this.height,
	        origin: this.origin
	      };
	    }
	    /**
	     * @param { opt.field  } field 用来查找对应的yAxis
	     * @param { opt.iNode  } iNode 用来查找对应的xaxis的value
	     * @param { opt.value {xval: yval:} }
	     */

	  }, {
	    key: "getPoint",
	    value: function getPoint() {}
	  }, {
	    key: "getAxisOriginPoint",
	    value: function getAxisOriginPoint() {}
	  }, {
	    key: "getOriginPos",
	    value: function getOriginPos() {} //获取对应轴的接口

	  }, {
	    key: "getAxis",
	    value: function getAxis(opt) {
	      var axiss = this.getAxiss(opt);
	      return axiss[0];
	    }
	  }, {
	    key: "getAxiss",
	    value: function getAxiss(opt) {
	      var arr = [];
	      var expCount = Object.keys(opt).length;

	      _.each(this._axiss, function (item) {
	        var i = 0;

	        for (var p in opt) {
	          if (p == 'field') {
	            (function () {
	              //字段的判断条件不同
	              var fs = _.flatten([item[p]]);

	              var expFs = _.flatten([opt[p]]);

	              var inFs = true;

	              _.each(expFs, function (exp) {
	                if (_.indexOf(fs, exp) == -1) {
	                  //任何一个field不再fs内， 说明配对不成功
	                  inFs = false;
	                }
	              });

	              if (inFs) {
	                i++;
	              }
	            })();
	          } else {
	            if (JSON.stringify(item[p]) == JSON.stringify(opt[p])) {
	              i++;
	            }
	          }
	        }

	        if (expCount == i) {
	          arr.push(item);
	        }
	      });

	      return arr;
	    }
	  }]);
	  return coordBase;
	}(_component["default"]);

	exports["default"] = coordBase;
	});

	unwrapExports(coord);

	var dataSection_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;



	function normalizeTickInterval(interval, magnitude) {
	  var normalized; // let multiples = [1, 2, 2.5, 5, 10];

	  var multiples = [1, 2, 5, 10]; // round to a tenfold of 1, 2, 2.5 or 5

	  normalized = interval / magnitude; // normalize the interval to the nearest multiple

	  for (var _i = 0; _i < multiples.length; _i++) {
	    interval = multiples[_i];

	    if (normalized <= (multiples[_i] + (multiples[_i + 1] || multiples[_i])) / 2) {
	      break;
	    }
	  } // multiply back to the correct magnitude


	  interval *= magnitude;
	  return interval;
	}

	function correctFloat(num) {
	  return parseFloat(num.toPrecision(14));
	}

	function getLinearTickPositions(arr, $maxPart, $cfg) {
	  arr = _canvax._.without(arr, undefined, null, "");
	  var scale = $cfg && $cfg.scale ? parseFloat($cfg.scale) : 1; //返回的数组中的值 是否都为整数(思霏)  防止返回[8, 8.2, 8.4, 8.6, 8.8, 9]   应该返回[8, 9]

	  var isInt = $cfg && $cfg.isInt ? 1 : 0;

	  if (isNaN(scale)) {
	    scale = 1;
	  }

	  var max = _canvax._.max(arr);

	  var initMax = max;
	  max *= scale;

	  var min = _canvax._.min(arr);

	  if (min == max) {
	    if (max > 0) {
	      min = 0;
	      return [min, max]; // min= Math.round(max/2);
	    } else if (max < 0) {
	      return [max, 0]; //min = max*2;
	    } else {
	      max = 1;
	      return [0, max];
	    }
	  }

	  var length = max - min;

	  if (length) {
	    var tempmin = min; //保证min>0的时候不会出现负数

	    min -= length * 0.05; // S.log(min +":"+ tempmin)

	    if (min < 0 && tempmin >= 0) {
	      min = 0;
	    }

	    max += length * 0.05;
	  }

	  var tickInterval = (max - min) * 0.3; //72 / 365;

	  var magnitude = Math.pow(10, Math.floor(Math.log(tickInterval) / Math.LN10));
	  tickInterval = normalizeTickInterval(tickInterval, magnitude);

	  if (isInt) {
	    tickInterval = Math.ceil(tickInterval);
	  }

	  var pos,
	      lastPos,
	      roundedMin = correctFloat(Math.floor(min / tickInterval) * tickInterval),
	      roundedMax = correctFloat(Math.ceil(max / tickInterval) * tickInterval),
	      tickPositions = []; // Populate the intermediate values

	  pos = roundedMin;

	  while (pos <= roundedMax) {
	    // Place the tick on the rounded value
	    tickPositions.push(pos); // Always add the raw tickInterval, not the corrected one.

	    pos = correctFloat(pos + tickInterval); // If the interval is not big enough in the current min - max range to actually increase
	    // the loop variable, we need to break out to prevent endless loop. Issue #619

	    if (pos === lastPos) {
	      break;
	    } // Record the last value


	    lastPos = pos;
	  }

	  if (tickPositions.length >= 3) {
	    if (tickPositions[tickPositions.length - 2] >= initMax) {
	      tickPositions.pop();
	    }
	  }

	  return tickPositions;
	}

	var dataSection = {
	  section: function section($arr, $maxPart, $cfg) {
	    return _canvax._.uniq(getLinearTickPositions($arr, $maxPart, $cfg));
	  }
	};
	var _default = dataSection;
	exports["default"] = _default;
	});

	unwrapExports(dataSection_1);

	var axis_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _createClass2 = interopRequireDefault(createClass$1);



	var _dataSection2 = interopRequireDefault(dataSection_1);



	//TODO 所有的get xxx OfVal 在非proportion下面如果数据有相同的情况，就会有风险
	var axis =
	/*#__PURE__*/
	function () {
	  (0, _createClass2["default"])(axis, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        layoutType: {
	          detail: '布局方式',
	          "default": 'proportion'
	        },
	        dataSection: {
	          detail: '轴数据集',
	          "default": []
	        },
	        sectionHandler: {
	          detail: '自定义dataSection的计算公式',
	          "default": null
	        },
	        waterLine: {
	          detail: '水位线',
	          "default": null,
	          documentation: '水位data，需要混入 计算 dataSection， 如果有设置waterLine， dataSection的最高水位不会低于这个值'
	        },
	        middleWeight: {
	          detail: '区间分隔线',
	          "default": null,
	          documentation: '如果middleweight有设置的话 dataSectionGroup 为被middleweight分割出来的n个数组>..[ [0,50 , 100],[100,500,1000] ]'
	        },
	        middleWeightPos: {
	          detail: '区间分隔线的物理位置，百分比,默认 0.5 ',
	          "default": null
	        },
	        symmetric: {
	          detail: '自动正负对称',
	          "default": false,
	          documentation: 'proportion下，是否需要设置数据为正负对称的数据，比如 [ 0,5,10 ] = > [ -10, 0 10 ]，象限坐标系的时候需要'
	        },
	        origin: {
	          detail: '轴的起源值',
	          "default": null,
	          documentation: '\
                    1，如果数据中又正数和负数，则默认为0 <br />\
                    2，如果dataSection最小值小于0，则baseNumber为最小值<br />\
                    3，如果dataSection最大值大于0，则baseNumber为最大值<br />\
                    4，也可以由用户在第2、3种情况下强制配置为0，则section会补充满从0开始的刻度值\
                '
	        },
	        sort: {
	          detail: '排序',
	          "default": null
	        },
	        posParseToInt: {
	          detail: '是否位置计算取整',
	          "default": false,
	          documentation: '比如在柱状图中，有得时候需要高精度的能间隔1px的柱子，那么x轴的计算也必须要都是整除的'
	        }
	      };
	    }
	  }]);

	  function axis(opt, dataOrg) {
	    (0, _classCallCheck2["default"])(this, axis);
	    //源数据
	    //这个是一个一定会有两层数组的数据结构，是一个标准的dataFrame数据
	    // [ 
	    //    [   
	    //        [1,2,3],  
	    //        [1,2,3]    //这样有堆叠的数据只会出现在proportion的axis里，至少目前是这样
	    //    ] 
	    //   ,[    
	    //        [1,2,3] 
	    //    ]   
	    // ]
	    this._opt = _canvax._.clone(opt);
	    this.dataOrg = dataOrg || []; //3d中有引用到

	    this.dataSectionLayout = []; //和dataSection一一对应的，每个值的pos，//get xxx OfPos的时候，要先来这里做一次寻找
	    //轴总长
	    //3d中有引用到

	    this.axisLength = 1;
	    this._cellCount = null;
	    this._cellLength = null; //数据变动的时候要置空
	    //默认的 dataSectionGroup = [ dataSection ], dataSection 其实就是 dataSectionGroup 去重后的一维版本

	    this.dataSectionGroup = [];
	    this.originPos = 0; //value为 origin 对应的pos位置

	    this._originTrans = 0; //当设置的 origin 和datasection的min不同的时候，
	    //min,max不需要外面配置，没意义

	    this._min = null;
	    this._max = null;

	    _canvax._.extend(true, this, (0, tools.getDefaultProps)(axis.defaultProps()), opt);
	  }

	  (0, _createClass2["default"])(axis, [{
	    key: "resetDataOrg",
	    value: function resetDataOrg(dataOrg) {
	      //配置和数据变化
	      this.dataSection = [];
	      this.dataSectionGroup = [];
	      this.dataOrg = dataOrg;
	      this._cellCount = null;
	      this._cellLength = null;
	    }
	  }, {
	    key: "setAxisLength",
	    value: function setAxisLength(length) {
	      this.axisLength = length;
	      this.calculateProps();
	    }
	  }, {
	    key: "calculateProps",
	    value: function calculateProps() {
	      var me = this;

	      if (this.layoutType == "proportion") {
	        if (this._min == null) {
	          this._min = _canvax._.min(this.dataSection);
	        }

	        if (this._max == null) {
	          this._max = _canvax._.max(this.dataSection);
	        }
	        //如果用户设置了origin，那么就已用户的设置为准

	        if (!("origin" in this._opt)) {
	          this.origin = 0; //this.dataSection[0];//_.min( this.dataSection );

	          if (_canvax._.max(this.dataSection) < 0) {
	            this.origin = _canvax._.max(this.dataSection);
	          }

	          if (_canvax._.min(this.dataSection) > 0) {
	            this.origin = _canvax._.min(this.dataSection);
	          }
	        }
	        this._originTrans = this._getOriginTrans(this.origin);
	        this.originPos = this.getPosOfVal(this.origin);
	      }

	      this.dataSectionLayout = [];

	      _canvax._.each(this.dataSection, function (val, i) {
	        var ind = i;

	        if (me.layoutType == "proportion") {
	          ind = me.getIndexOfVal(val);
	        }
	        var pos = parseInt(me.getPosOf({
	          ind: i,
	          val: val
	        }), 10);
	        me.dataSectionLayout.push({
	          val: val,
	          ind: ind,
	          pos: pos
	        });
	      });
	    }
	  }, {
	    key: "getDataSection",
	    value: function getDataSection() {
	      //对外返回的dataSection
	      return this.dataSection;
	    }
	  }, {
	    key: "setDataSection",
	    value: function setDataSection(_dataSection) {
	      var me = this; //如果用户没有配置dataSection，或者用户传了，但是传了个空数组，则自己组装dataSection

	      if (_canvax._.isEmpty(_dataSection) && _canvax._.isEmpty(this._opt.dataSection)) {
	        if (this.layoutType == "proportion") {
	          var arr = this._getDataSection();

	          if ("origin" in me._opt) {
	            arr.push(me._opt.origin);
	          }

	          if (arr.length == 1) {
	            arr.push(arr[0] * .5);
	          }

	          if (this.waterLine) {
	            arr.push(this.waterLine);
	          }

	          if (this.symmetric) {
	            //如果需要处理为对称数据
	            var _min = _canvax._.min(arr);

	            var _max = _canvax._.max(arr);

	            if (Math.abs(_min) > Math.abs(_max)) {
	              arr.push(Math.abs(_min));
	            } else {
	              arr.push(-Math.abs(_max));
	            }
	          }

	          for (var ai = 0, al = arr.length; ai < al; ai++) {
	            arr[ai] = Number(arr[ai]);

	            if (isNaN(arr[ai])) {
	              arr.splice(ai, 1);
	              ai--;
	              al--;
	            }
	          }

	          if (_canvax._.isFunction(this.sectionHandler)) {
	            this.dataSection = this.sectionHandler(arr);
	          }

	          if (!this.dataSection || !this.dataSection.length) {
	            this.dataSection = _dataSection2["default"].section(arr, 3);
	          }

	          if (this.symmetric) {
	            //可能得到的区间是偶数， 非对称，强行补上
	            var _min2 = _canvax._.min(this.dataSection);

	            var _max2 = _canvax._.max(this.dataSection);

	            if (Math.abs(_min2) > Math.abs(_max2)) {
	              this.dataSection.push(Math.abs(_min2));
	            } else {
	              this.dataSection.unshift(-Math.abs(_max2));
	            }
	          }

	          if (this.dataSection.length == 0) {
	            this.dataSection = [0];
	          }

	          this.dataSectionGroup = [_canvax._.clone(this.dataSection)];

	          this._middleweight(); //如果有middleweight配置，需要根据配置来重新矫正下datasection


	          this._sort();
	        } else {
	          //非proportion 也就是 rule peak 模式下面
	          this.dataSection = _canvax._.flatten(this.dataOrg); //this._getDataSection();

	          this.dataSectionGroup = [this.dataSection];
	        }
	      } else {
	        this.dataSection = _dataSection || this._opt.dataSection;
	        this.dataSectionGroup = [this.dataSection];
	      }

	      this._middleWeightPos();
	    }
	  }, {
	    key: "_getDataSection",
	    value: function _getDataSection() {
	      //如果有堆叠，比如[ ["uv","pv"], "click" ]
	      //那么这个 this.dataOrg， 也是个对应的结构
	      //vLen就会等于2
	      var vLen = 1;

	      _canvax._.each(this.dataOrg, function (arr) {
	        vLen = Math.max(arr.length, vLen);
	      });

	      if (vLen == 1) {
	        return this._oneDimensional();
	      }

	      if (vLen > 1) {
	        return this._twoDimensional();
	      }
	    }
	  }, {
	    key: "_oneDimensional",
	    value: function _oneDimensional() {
	      var arr = _canvax._.flatten(this.dataOrg); //_.flatten( data.org );


	      for (var i = 0, il = arr.length; i < il; i++) {
	        arr[i] = arr[i] || 0;
	      }
	      return arr;
	    } //二维的yAxis设置，肯定是堆叠的比如柱状图，后续也会做堆叠的折线图， 就是面积图

	  }, {
	    key: "_twoDimensional",
	    value: function _twoDimensional() {
	      var d = this.dataOrg;
	      var arr = [];
	      var min;

	      _canvax._.each(d, function (d) {
	        if (!d.length) {
	          return;
	        }

	        if (!_canvax._.isArray(d[0])) {
	          arr.push(d);
	          return;
	        }
	        var varr = [];
	        var len = d[0].length;
	        var vLen = d.length;

	        for (var i = 0; i < len; i++) {
	          var up_count = 0;
	          var up_i = 0;
	          var down_count = 0;
	          var down_i = 0;

	          for (var ii = 0; ii < vLen; ii++) {
	            var _val = d[ii][i];

	            if (!_val && _val !== 0) {
	              continue;
	            }
	            min == undefined && (min = _val);
	            min = Math.min(min, _val);

	            if (_val >= 0) {
	              up_count += _val;
	              up_i++;
	            } else {
	              down_count += _val;
	              down_i++;
	            }
	          }

	          up_i && varr.push(up_count);
	          down_i && varr.push(down_count);
	        }
	        arr.push(varr);
	      });

	      arr.push(min);
	      return _canvax._.flatten(arr);
	    } //val 要被push到datasection 中去的 值
	    //主要是用在markline等组件中，当自己的y值超出了yaxis的范围

	  }, {
	    key: "setWaterLine",
	    value: function setWaterLine(val) {
	      if (val <= this.waterLine) return;
	      this.waterLine = val;

	      if (val < _canvax._.min(this.dataSection) || val > _canvax._.max(this.dataSection)) {
	        //waterLine不再当前section的区间内，需要重新计算整个datasection    
	        this.setDataSection();
	        this.calculateProps();
	      }
	    }
	  }, {
	    key: "_sort",
	    value: function _sort() {
	      if (this.sort) {
	        var sort = this._getSortType();

	        if (sort == "desc") {
	          this.dataSection.reverse(); //dataSectionGroup 从里到外全部都要做一次 reverse， 这样就可以对应上 dataSection.reverse()

	          _canvax._.each(this.dataSectionGroup, function (dsg) {
	            dsg.reverse();
	          });

	          this.dataSectionGroup.reverse(); //dataSectionGroup reverse end
	        }
	      }
	    }
	  }, {
	    key: "_getSortType",
	    value: function _getSortType() {
	      var _sort;

	      if (_canvax._.isString(this.sort)) {
	        _sort = this.sort;
	      }

	      if (!_sort) {
	        _sort = "asc";
	      }

	      return _sort;
	    }
	  }, {
	    key: "_middleweight",
	    value: function _middleweight() {
	      if (this.middleWeight) {
	        //支持多个量级的设置
	        if (!_canvax._.isArray(this.middleWeight)) {
	          this.middleWeight = [this.middleWeight];
	        }

	        var dMin = _canvax._.min(this.dataSection);

	        var dMax = _canvax._.max(this.dataSection);

	        var newDS = [dMin];
	        var newDSG = [];

	        for (var i = 0, l = this.middleWeight.length; i < l; i++) {
	          var preMiddleweight = dMin;

	          if (i > 0) {
	            preMiddleweight = this.middleWeight[i - 1];
	          }
	          var middleVal = preMiddleweight + parseInt((this.middleWeight[i] - preMiddleweight) / 2);
	          newDS.push(middleVal);
	          newDS.push(this.middleWeight[i]);
	          newDSG.push([preMiddleweight, middleVal, this.middleWeight[i]]);
	        }
	        var lastMW = this.middleWeight.slice(-1)[0];

	        if (dMax > lastMW) {
	          newDS.push(lastMW + (dMax - lastMW) / 2);
	          newDS.push(dMax);
	          newDSG.push([lastMW, lastMW + (dMax - lastMW) / 2, dMax]);
	        } //好了。 到这里用简单的规则重新拼接好了新的 dataSection


	        this.dataSection = newDS;
	        this.dataSectionGroup = newDSG;
	      }
	    }
	  }, {
	    key: "_middleWeightPos",
	    value: function _middleWeightPos() {
	      var me = this;

	      if (this.middleWeightPos) {
	        if (!_canvax._.isArray(this.middleWeightPos)) {
	          this.middleWeightPos = [this.middleWeightPos];
	        }
	        //如果大于1了则默认按照均分设置

	        var _count = 0;

	        _canvax._.each(this.middleWeightPos, function (pos) {
	          _count += pos;
	        });

	        if (_count < 1) {
	          this.middleWeightPos.push(1 - _count);
	        }

	        if (_count > 1) {
	          this.middleWeightPos = null;
	        }
	      }

	      if (this.middleWeight) {
	        if (!this.middleWeightPos) {
	          this.middleWeightPos = [];
	          var _prePos = 0;

	          _canvax._.each(this.middleWeight, function () {
	            var _pos = 1 / (me.middleWeight.length + 1);

	            _prePos += _pos;
	            me.middleWeightPos.push(_pos);
	          });

	          this.middleWeightPos.push(1 - _prePos);
	        }
	      } else {
	        this.middleWeightPos = [1];
	      }
	    } //origin 对应 this.origin 的值

	  }, {
	    key: "_getOriginTrans",
	    value: function _getOriginTrans(origin) {
	      var _this = this;

	      var pos = 0;
	      var me = this;
	      var dsgLen = this.dataSectionGroup.length;
	      var groupLength = this.axisLength / dsgLen;

	      var _loop = function _loop(i, l) {
	        var ds = _this.dataSectionGroup[i];
	        groupLength = _this.axisLength * _this.middleWeightPos[i];
	        var preGroupLenth = 0;

	        _canvax._.each(_this.middleWeightPos, function (mp, mi) {
	          if (mi < i) {
	            preGroupLenth += me.axisLength * mp;
	          }
	        });

	        if (_this.layoutType == "proportion") {
	          var min = _canvax._.min(ds);

	          var max = _canvax._.max(ds);

	          var amountABS = Math.abs(max - min);

	          if (origin >= min && origin <= max) {
	            pos = (origin - min) / amountABS * groupLength + preGroupLenth;
	            return "break";
	          }
	        }
	      };

	      for (var i = 0, l = dsgLen; i < l; i++) {
	        var _ret = _loop(i, l);

	        if (_ret === "break") break;
	      }

	      if (this.sort == "desc") {
	        //如果是倒序的
	        pos = -(groupLength - pos);
	      }
	      return parseInt(pos);
	    } //opt { val ind pos } 一次只能传一个

	  }, {
	    key: "_getLayoutDataOf",
	    value: function _getLayoutDataOf(opt) {
	      var props = ["val", "ind", "pos"];
	      var prop;

	      _canvax._.each(props, function (_p) {
	        if (_p in opt) {
	          prop = _p;
	        }
	      });

	      var layoutData;

	      _canvax._.each(this.dataSectionLayout, function (item) {
	        if (item[prop] === opt[prop]) {
	          layoutData = item;
	        }
	      });

	      return layoutData || {};
	    }
	  }, {
	    key: "getPosOfVal",
	    value: function getPosOfVal(val) {
	      /* val可能会重复，so 这里得到的会有问题，先去掉
	      //先检查下 dataSectionLayout 中有没有对应的记录
	      let _pos = this._getLayoutDataOf({ val : val }).pos;
	      if( _pos != undefined ){
	          return _pos;
	      };
	      */
	      return this.getPosOf({
	        val: val
	      });
	    }
	  }, {
	    key: "getPosOfInd",
	    value: function getPosOfInd(ind) {
	      //先检查下 dataSectionLayout 中有没有对应的记录
	      var _pos = this._getLayoutDataOf({
	        ind: ind
	      }).pos;

	      if (_pos != undefined) {
	        return _pos;
	      }
	      return this.getPosOf({
	        ind: ind
	      });
	    } //opt {val, ind} val 或者ind 一定有一个

	  }, {
	    key: "getPosOf",
	    value: function getPosOf(opt) {
	      var _this2 = this;

	      var me = this;
	      var pos;

	      var cellCount = this._getCellCount(); //dataOrg上面的真实数据节点数，把轴分成了多少个节点


	      if (this.layoutType == "proportion") {
	        var dsgLen = this.dataSectionGroup.length; //let groupLength = this.axisLength / dsgLen;

	        var _loop2 = function _loop2(i, l) {
	          var ds = _this2.dataSectionGroup[i];
	          var groupLength = _this2.axisLength * _this2.middleWeightPos[i];
	          var preGroupLenth = 0;

	          _canvax._.each(_this2.middleWeightPos, function (mp, mi) {
	            if (mi < i) {
	              preGroupLenth += me.axisLength * mp;
	            }
	          });

	          var min = _canvax._.min(ds);

	          var max = _canvax._.max(ds);

	          var val = "val" in opt ? opt.val : _this2.getValOfInd(opt.ind);

	          if (val >= min && val <= max) {
	            var _origin = _this2.origin;
	            var origiInRange = !(_origin < min || _origin > max); //如果 origin 并不在这个区间

	            if (!origiInRange) {
	              _origin = min;
	            }

	            var maxGroupDisABS = Math.max(Math.abs(max - _origin), Math.abs(_origin - min));
	            var amountABS = Math.abs(max - min);
	            var originPos = maxGroupDisABS / amountABS * groupLength;
	            pos = (val - _origin) / maxGroupDisABS * originPos + preGroupLenth;

	            if (isNaN(pos)) {
	              pos = parseInt(preGroupLenth);
	            }

	            if (origiInRange) {
	              //origin在区间内的时候，才需要便宜_originTrans
	              pos += _this2._originTrans;
	            }
	            return "break";
	          }
	        };

	        for (var i = 0, l = dsgLen; i < l; i++) {
	          var _ret2 = _loop2(i, l);

	          if (_ret2 === "break") break;
	        }
	      } else {
	        if (cellCount == 1) {
	          //如果只有一数据，那么就全部默认在正中间
	          pos = this.axisLength / 2;
	        } else {
	          //TODO 这里在非proportion情况下，如果没有opt.ind 那么getIndexOfVal 其实是有风险的，
	          //因为可能有多个数据的val一样
	          var valInd = "ind" in opt ? opt.ind : this.getIndexOfVal(opt.val);

	          if (valInd != -1) {
	            if (this.layoutType == "rule") {
	              //line 的xaxis就是 rule
	              pos = valInd / (cellCount - 1) * this.axisLength;
	            }

	            if (this.layoutType == "peak") {
	              //bar的xaxis就是 peak

	              /*
	              pos = (this.axisLength/cellCount) 
	                    * (valInd+1) 
	                    - (this.axisLength/cellCount)/2;
	              */
	              var _cellLength = this.getCellLength();

	              pos = _cellLength * (valInd + 1) - _cellLength / 2;
	            }
	          }
	        }
	      }
	      !pos && (pos = 0);
	      pos = Number(pos.toFixed(1));
	      return Math.abs(pos);
	    }
	  }, {
	    key: "getValOfPos",
	    value: function getValOfPos(pos) {
	      //先检查下 dataSectionLayout 中有没有对应的记录
	      var _val = this._getLayoutDataOf({
	        pos: pos
	      }).val;

	      if (_val != undefined) {
	        return _val;
	      }
	      return this._getValOfInd(this.getIndexOfPos(pos));
	    } //ds可选

	  }, {
	    key: "getValOfInd",
	    value: function getValOfInd(ind) {
	      //先检查下 dataSectionLayout 中有没有对应的记录
	      var _val = this._getLayoutDataOf({
	        ind: ind
	      }).val;

	      if (_val != undefined) {
	        return _val;
	      }
	      return this._getValOfInd(ind);
	      /*
	      if (this.layoutType == "proportion") {
	      
	      } else {
	          //这里的index是直接的对应dataOrg的索引
	          let org = ds ? ds : _.flatten(this.dataOrg);
	          return org[ind];
	      };
	      */
	    } //这里的ind

	  }, {
	    key: "_getValOfInd",
	    value: function _getValOfInd(ind) {
	      var me = this;

	      var org = _canvax._.flatten(this.dataOrg);

	      var val;

	      if (this.layoutType == "proportion") {
	        //let dsgLen = this.dataSectionGroup.length;
	        //let groupLength = this.axisLength / dsgLen;
	        _canvax._.each(this.dataSectionGroup, function (ds, i) {
	          var groupLength = me.axisLength * me.middleWeightPos[i];
	          var preGroupLenth = 0;

	          _canvax._.each(me.middleWeightPos, function (mp, mi) {
	            if (mi < i) {
	              preGroupLenth += me.axisLength * mp;
	            }
	          });

	          if (parseInt(ind / groupLength) == i || i == me.dataSectionGroup.length - 1) {
	            var min = _canvax._.min(ds);

	            var max = _canvax._.max(ds);

	            val = min + (max - min) / groupLength * (ind - preGroupLenth);
	            return false;
	          }
	        });
	      } else {
	        val = org[ind];
	      }
	      return val;
	    }
	  }, {
	    key: "getIndexOfPos",
	    value: function getIndexOfPos(pos) {
	      //先检查下 dataSectionLayout 中有没有对应的记录
	      var _ind = this._getLayoutDataOf({
	        pos: pos
	      }).ind;

	      if (_ind != undefined) {
	        return _ind;
	      }
	      var ind = 0;
	      var cellLength = this.getCellLengthOfPos(pos);

	      var cellCount = this._getCellCount();

	      if (this.layoutType == "proportion") {
	        //proportion中的index以像素为单位 所以，传入的像素值就是index
	        return pos;
	      } else {
	        if (this.layoutType == "peak") {
	          ind = parseInt(pos / cellLength);

	          if (ind == cellCount) {
	            ind = cellCount - 1;
	          }
	        }

	        if (this.layoutType == "rule") {
	          ind = parseInt((pos + cellLength / 2) / cellLength);

	          if (cellCount == 1) {
	            //如果只有一个数据
	            ind = 0;
	          }
	        }
	      }
	      return ind;
	    }
	  }, {
	    key: "getIndexOfVal",
	    value: function getIndexOfVal(val) {
	      var valInd = -1;

	      if (this.layoutType == "proportion") {
	        //先检查下 dataSectionLayout 中有没有对应的记录
	        var _ind = this._getLayoutDataOf({
	          val: val
	        }).ind;

	        if (_ind != undefined) {
	          return _ind;
	        }
	        //所以这里要返回pos

	        valInd = this.getPosOfVal(val);
	      } else {
	        _canvax._.each(this.dataOrg, function (arr) {
	          _canvax._.each(arr, function (list) {
	            var _ind = _canvax._.indexOf(list, val);

	            if (_ind != -1) {
	              valInd = _ind;
	            }
	          });
	        });
	      }

	      return valInd;
	    }
	  }, {
	    key: "getCellLength",
	    value: function getCellLength() {
	      if (this._cellLength !== null) {
	        return this._cellLength;
	      }

	      var axisLength = this.axisLength;
	      var cellLength = axisLength;

	      var cellCount = this._getCellCount();

	      if (cellCount) {
	        if (this.layoutType == "proportion") {
	          cellLength = 1;
	        } else {
	          //默认按照 peak 也就是柱状图的需要的布局方式
	          cellLength = axisLength / cellCount;

	          if (this.layoutType == "rule") {
	            if (cellCount == 1) {
	              cellLength = axisLength / 2;
	            } else {
	              cellLength = axisLength / (cellCount - 1);
	            }
	          }

	          if (this.posParseToInt) {
	            cellLength = parseInt(cellLength);
	          }
	        }
	      }
	      this._cellLength = cellLength;
	      return cellLength;
	    } //这个getCellLengthOfPos接口主要是给tips用，因为tips中只有x信息

	  }, {
	    key: "getCellLengthOfPos",
	    value: function getCellLengthOfPos() {
	      return this.getCellLength();
	    } //pos目前没用到，给后续的高级功能预留接口

	  }, {
	    key: "getCellLengthOfInd",
	    value: function getCellLengthOfInd() {
	      return this.getCellLength();
	    }
	  }, {
	    key: "_getCellCount",
	    value: function _getCellCount() {
	      if (this._cellCount !== null) {
	        return this._cellCount;
	      }

	      var cellCount = 0;

	      if (this.layoutType == "proportion") {
	        cellCount = this.axisLength;
	      } else {
	        if (this.dataOrg.length && this.dataOrg[0].length && this.dataOrg[0][0].length) {
	          cellCount = this.dataOrg[0][0].length;
	        }
	      }
	      this._cellCount = cellCount;
	      return cellCount;
	    }
	  }]);
	  return axis;
	}();

	var _default = axis;
	exports["default"] = _default;
	});

	unwrapExports(axis_1);

	var axis$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _axis = interopRequireDefault(axis_1);





	var Axis =
	/*#__PURE__*/
	function (_baseAxis) {
	  (0, _inherits2["default"])(Axis, _baseAxis);
	  (0, _createClass2["default"])(Axis, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        field: {
	          detail: '轴字段配置',
	          documentation: '目前x轴的field只支持单维度设置，也就是说只支持一条x轴',
	          "default": []
	        },
	        layoutType: {
	          detail: '布局方式',
	          "default": 'rule'
	        },
	        width: {
	          detail: '轴宽',
	          "default": 0
	        },
	        height: {
	          detail: '轴高',
	          "default": 0
	        },
	        enabled: {
	          detail: '是否显示轴',
	          "default": true
	        },
	        animation: {
	          detail: '是否开启动画',
	          "default": true
	        },
	        title: {
	          detail: '轴名称',
	          propertys: {
	            shapeType: "text",
	            textAlign: {
	              detail: '水平对齐方式',
	              "default": 'center'
	            },
	            textBaseline: {
	              detail: '基线对齐方式',
	              "default": 'middle'
	            },
	            strokeStyle: {
	              detail: '文本描边颜色',
	              "default": null
	            },
	            lineHeight: {
	              detail: '行高',
	              "default": 0
	            },
	            text: {
	              detail: '轴名称的内容',
	              "default": ''
	            },
	            fontColor: {
	              detail: '颜色',
	              "default": '#999'
	            },
	            fontSize: {
	              detail: '字体大小',
	              "default": 12
	            }
	          }
	        },
	        tickLine: {
	          detail: '刻度线',
	          propertys: {
	            enabled: {
	              detail: '是否开启',
	              "default": true
	            },
	            lineWidth: {
	              detail: '刻度线宽',
	              "default": 1
	            },
	            lineLength: {
	              detail: '刻度线长度',
	              "default": 4
	            },
	            distance: {
	              detail: '和前面一个元素的距离',
	              "default": 2
	            },
	            strokeStyle: {
	              detail: '描边颜色',
	              "default": '#cccccc'
	            }
	          }
	        },
	        axisLine: {
	          detail: '轴线配置',
	          propertys: {
	            enabled: {
	              detail: '是否有轴线',
	              "default": true
	            },
	            position: {
	              detail: '轴线的位置',
	              documentation: 'default在align的位置（left，right），可选 "center" 和 具体的值',
	              "default": 'default'
	            },
	            lineWidth: {
	              detail: '轴线宽度',
	              "default": 1
	            },
	            strokeStyle: {
	              detail: '轴线的颜色',
	              "default": '#cccccc'
	            }
	          }
	        },
	        label: {
	          detail: '刻度文本',
	          propertys: {
	            enabled: {
	              detail: '是否显示刻度文本',
	              "default": true
	            },
	            fontColor: {
	              detail: '文本颜色',
	              "default": '#999'
	            },
	            fontSize: {
	              detail: '字体大小',
	              "default": 12
	            },
	            rotation: {
	              detail: '旋转角度',
	              "default": 0
	            },
	            format: {
	              detail: 'label文本的格式化处理函数',
	              "default": null
	            },
	            distance: {
	              detail: '和轴线之间的间距',
	              "default": 2
	            },
	            textAlign: {
	              detail: '水平方向对齐方式',
	              "default": 'center'
	            },
	            lineHeight: {
	              detail: '文本的行高',
	              "default": 1
	            },
	            evade: {
	              detail: '是否开启逃避算法,目前的逃避只是隐藏',
	              "default": true
	            }
	          }
	        },
	        filter: {
	          detail: '过滤函数',
	          documentation: '可以用来过滤哪些yaxis 的 节点是否显示已经颜色之类的',
	          "default": null
	        },
	        trimLayout: {
	          detail: '自定义的显示规则函数',
	          documentation: '如果用户有手动的 trimLayout ，那么就全部visible为true，然后调用用户自己的过滤程序',
	          "default": null
	        }
	      };
	    }
	  }]);

	  function Axis(opt, dataOrg) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, Axis);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Axis).call(this, opt, dataOrg));

	    _canvax._.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Axis.defaultProps()));

	    return _this;
	  }

	  (0, _createClass2["default"])(Axis, [{
	    key: "drawWaterLine",
	    value: function drawWaterLine(y) {
	      //如果y在现有的数据区间里面， 就不需要重新计算和绘制了
	      if (this.layoutType == "proportion") {
	        if (y >= this._min && y <= this._max) {
	          return;
	        }
	      }
	      this.dataSection = [];
	      this.setWaterLine(y);

	      this._initHandle();

	      this.draw();
	    }
	  }]);
	  return Axis;
	}(_axis["default"]);

	exports["default"] = Axis;
	});

	unwrapExports(axis$1);

	var xaxis = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _canvax$$1 = interopRequireDefault(_canvax);



	var _axis = interopRequireDefault(axis$1);

	var _ = _canvax$$1["default"]._;
	var Line = _canvax$$1["default"].Shapes.Line;

	var xAxis =
	/*#__PURE__*/
	function (_Axis) {
	  (0, _inherits2["default"])(xAxis, _Axis);
	  (0, _createClass2["default"])(xAxis, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {};
	    }
	  }]);

	  function xAxis(opt, data, _coord) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, xAxis);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(xAxis).call(this, opt, data.org));
	    _this.type = "xAxis";
	    _this._coord = _coord || {};
	    _this._title = null; //this.title对应的文本对象

	    _this._axisLine = null;
	    _this._formatTextSection = []; //dataSection的值format后一一对应的值

	    _this._textElements = []; //_formatTextSection中每个文本对应的canvax.shape.Text对象

	    _this.pos = {
	      x: 0,
	      y: 0
	    };
	    _this.layoutData = []; //{x:100, value:'1000',visible:true}

	    _this.sprite = null;
	    _this.isH = false; //是否为横向转向的x轴

	    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(xAxis.defaultProps()), opt);

	    _this.init(opt);

	    return _this;
	  }

	  (0, _createClass2["default"])(xAxis, [{
	    key: "init",
	    value: function init(opt) {
	      this._setField();

	      this._initHandle(opt);

	      this.sprite = new _canvax$$1["default"].Display.Sprite({
	        id: "xAxisSprite_" + new Date().getTime()
	      });
	      this.rulesSprite = new _canvax$$1["default"].Display.Sprite({
	        id: "xRulesSprite_" + new Date().getTime()
	      });
	      this.sprite.addChild(this.rulesSprite);
	    }
	  }, {
	    key: "_initHandle",
	    value: function _initHandle(opt) {
	      var me = this;

	      if (opt) {
	        if (opt.isH && (!opt.label || opt.label.rotaion === undefined)) {
	          //如果是横向直角坐标系图
	          this.label.rotation = 90;
	        }
	      }
	      this.setDataSection();
	      me._formatTextSection = [];
	      me._textElements = [];

	      _.each(me.dataSection, function (val, i) {
	        me._formatTextSection[i] = me._getFormatText(val, i); //从_formatTextSection中取出对应的格式化后的文本

	        var txt = new _canvax$$1["default"].Display.Text(me._formatTextSection[i], {
	          context: {
	            fontSize: me.label.fontSize
	          }
	        });
	        me._textElements[i] = txt;
	      });

	      if (this.label.rotation != 0) {
	        //如果是旋转的文本，那么以右边为旋转中心点
	        this.label.textAlign = "right";
	      }

	      this._getTitle();

	      this._setXAxisHeight();
	    }
	  }, {
	    key: "_setField",
	    value: function _setField(field) {
	      if (field) {
	        this.field = field;
	      }

	      this.field = _.flatten([this.field])[0];
	    }
	  }, {
	    key: "draw",
	    value: function draw(opt) {
	      //首次渲染从 直角坐标系组件中会传入 opt,包含了width，origin等， 所有这个时候才能计算layoutData
	      opt && _.extend(true, this, opt);
	      this.setAxisLength(this.width);

	      this._trimXAxis();

	      this._widget(opt);

	      this.setX(this.pos.x);
	      this.setY(this.pos.y);
	    } //配置和数据变化

	  }, {
	    key: "resetData",
	    value: function resetData(dataFrame) {
	      this._setField(dataFrame.field);

	      this.resetDataOrg(dataFrame.org);

	      this._initHandle();

	      this.draw();
	    }
	  }, {
	    key: "setX",
	    value: function setX($n) {
	      this.sprite.context.x = $n;
	      this.pos.x = $n;
	    }
	  }, {
	    key: "setY",
	    value: function setY($n) {
	      this.sprite.context.y = $n;
	      this.pos.y = $n;
	    }
	  }, {
	    key: "_getTitle",
	    value: function _getTitle() {
	      if (this.title.text) {
	        if (!this._title) {
	          this._title = new _canvax$$1["default"].Display.Text(this.title.text, {
	            context: {
	              fontSize: this.title.fontSize,
	              textAlign: this.title.textAlign,
	              //"center",//this.isH ? "center" : "left",
	              textBaseline: this.title.textBaseline,
	              //"middle", //this.isH ? "top" : "middle",
	              fillStyle: this.title.fontColor,
	              strokeStyle: this.title.strokeStyle,
	              lineWidth: this.title.lineWidth,
	              rotation: this.isH ? -180 : 0
	            }
	          });
	        } else {
	          this._title.resetText(this.title.text);
	        }
	      }
	    }
	  }, {
	    key: "_setXAxisHeight",
	    value: function _setXAxisHeight() {
	      //检测下文字的高等
	      var me = this;

	      if (!me.enabled) {
	        me.height = 0;
	      } else {
	        var _maxTextHeight = 0;

	        if (this.label.enabled) {
	          _.each(me.dataSection, function (val, i) {
	            //从_formatTextSection中取出对应的格式化后的文本
	            var txt = me._textElements[i];
	            var textWidth = txt.getTextWidth();
	            var textHeight = txt.getTextHeight(); //let width = textWidth; //文本在外接矩形width

	            var height = textHeight; //文本在外接矩形height

	            if (!!me.label.rotation) {
	              //有设置旋转
	              if (me.label.rotation == 90) {
	                //width  = textHeight;
	                height = textWidth;
	              } else {
	                var sinR = Math.sin(Math.abs(me.label.rotation) * Math.PI / 180); //let cosR = Math.cos(Math.abs(me.label.rotation) * Math.PI / 180);

	                height = parseInt(sinR * textWidth); //width = parseInt( cosR * textWidth );
	              }
	            }
	            _maxTextHeight = Math.max(_maxTextHeight, height);
	          });
	        }
	        this.height = _maxTextHeight + this.tickLine.lineLength + this.tickLine.distance + this.label.distance;

	        if (this._title) {
	          this.height += this._title.getTextHeight();
	        }
	      }
	    }
	  }, {
	    key: "getNodeInfoOfX",
	    value: function getNodeInfoOfX(x) {
	      var ind = this.getIndexOfPos(x);
	      var val = this.getValOfInd(ind); //this.getValOfPos(x);//

	      var pos = this.getPosOf({
	        ind: ind,
	        val: val
	      });
	      return this._getNodeInfo(ind, val, pos);
	    }
	  }, {
	    key: "getNodeInfoOfVal",
	    value: function getNodeInfoOfVal(val) {
	      var ind = this.getIndexOfVal(val);
	      var pos = this.getPosOf({
	        ind: ind,
	        val: val
	      });
	      return this._getNodeInfo(ind, val, pos);
	    }
	  }, {
	    key: "_getNodeInfo",
	    value: function _getNodeInfo(ind, val, pos) {
	      var o = {
	        ind: ind,
	        value: val,
	        text: this._getFormatText(val, ind),
	        //text是 format 后的数据
	        x: pos,
	        //这里不能直接用鼠标的x
	        field: this.field,
	        layoutType: this.layoutType
	      };
	      return o;
	    }
	  }, {
	    key: "_trimXAxis",
	    value: function _trimXAxis() {
	      var tmpData = [];
	      var data = this.dataSection;

	      for (var a = 0, al = data.length; a < al; a++) {
	        var text = this._formatTextSection[a];
	        var txt = this._textElements[a];
	        var o = {
	          ind: a,
	          value: data[a],
	          text: text,
	          x: this.getPosOf({
	            val: data[a],
	            ind: a
	          }),
	          textWidth: txt.getTextWidth(),
	          field: this.field,
	          visible: null //trimgrapsh的时候才设置

	        };
	        tmpData.push(o);
	      }
	      this.layoutData = tmpData;

	      this._trimLayoutData();

	      return tmpData;
	    }
	  }, {
	    key: "_getFormatText",
	    value: function _getFormatText(val) {
	      var res = val;

	      if (_.isFunction(this.label.format)) {
	        res = this.label.format.apply(this, arguments);
	      }

	      if (_.isNumber(res) && this.layoutType == "proportion") {
	        res = (0, tools.numAddSymbol)(res);
	      }
	      return res;
	    }
	  }, {
	    key: "_widget",
	    value: function _widget(opt) {
	      var me = this;
	      !opt && (opt = {});

	      if (!me.enabled) {
	        me.height = 0; //width不能为0

	        return;
	      }
	      var arr = me.layoutData;
	      var visibleInd = 0;

	      for (var a = 0, al = arr.length; a < al; a++) {
	        _.isFunction(me.filter) && me.filter({
	          layoutData: arr,
	          index: a
	        });
	        var o = arr[a];

	        if (!o.visible) {
	          continue;
	        }
	        var x = o.x,
	            y = me.tickLine.lineLength + me.tickLine.distance + me.label.distance;

	        var _node = me.rulesSprite.getChildAt(visibleInd); //文字 


	        var textContext = {
	          x: o._text_x || o.x,
	          y: y,
	          fillStyle: this.label.fontColor,
	          fontSize: this.label.fontSize,
	          rotation: -Math.abs(this.label.rotation),
	          textAlign: this.label.textAlign,
	          lineHeight: this.label.lineHeight,
	          textBaseline: !!this.label.rotation ? "middle" : "top",
	          globalAlpha: 1
	        };

	        if (!!this.label.rotation && this.label.rotation != 90) {
	          textContext.x += 5;
	          textContext.y += 3;
	        }

	        var tickLineContext = {
	          x: x,
	          y: this.tickLine.distance,
	          end: {
	            x: 0,
	            y: this.tickLine.lineLength
	          },
	          lineWidth: this.tickLine.lineWidth,
	          strokeStyle: this.tickLine.strokeStyle
	        };
	        var duration = 300;
	        var delay = visibleInd * Math.min(1000 / arr.length, 25);

	        if (!me.animation || opt.resize) {
	          duration = 0;
	          delay = 0;
	        }

	        if (_node) {
	          if (_node._tickLine && me.tickLine.enabled) {
	            _node._tickLine.animate(tickLineContext, {
	              duration: duration,
	              id: _node._tickLine.id
	            });
	          }

	          if (_node._txt && me.label.enabled) {
	            _node._txt.animate(textContext, {
	              duration: duration,
	              id: _node._txt.id
	            });

	            _node._txt.resetText(o.text);
	          }
	        } else {
	          _node = new _canvax$$1["default"].Display.Sprite({
	            id: "xNode" + visibleInd
	          }); //新建line

	          if (me.tickLine.enabled) {
	            _node._tickLine = new Line({
	              id: "xAxis_tickline_" + visibleInd,
	              context: tickLineContext
	            });

	            _node.addChild(_node._tickLine);
	          }

	          if (me.label.enabled) {
	            _node._txt = new _canvax$$1["default"].Display.Text(o.text, {
	              id: "xAxis_txt_" + visibleInd,
	              context: textContext
	            });

	            _node.addChild(_node._txt); // TODO 后续x轴的动画要换成真实的动画效果，从画布外面移进来
	            // if (me.animation && !opt.resize) {
	            //     _node._txt.context.y += 20;
	            //     _node._txt.context.globalAlpha = 0;
	            //     _node._txt.animate( {
	            //         y: textContext.y,
	            //         globalAlpha: 1
	            //     }, {
	            //         duration: 500,
	            //         delay: delay,
	            //         id: _node._txt.id
	            //     });
	            // };

	          }

	          me.rulesSprite.addChild(_node);
	        }
	        visibleInd++;
	      }

	      if (this.rulesSprite.children.length >= visibleInd) {
	        for (var _al = visibleInd, pl = this.rulesSprite.children.length; _al < pl; _al++) {
	          this.rulesSprite.getChildAt(_al).remove();
	          _al--, pl--;
	        }
	      }

	      if (this.axisLine.enabled) {
	        var _axisLineCtx = {
	          start: {
	            x: 0,
	            y: 0
	          },
	          end: {
	            x: this.width,
	            y: 0
	          },
	          lineWidth: this.axisLine.lineWidth,
	          strokeStyle: this.axisLine.strokeStyle
	        };

	        if (!this._axisLine) {
	          var _axisLine = new Line({
	            context: _axisLineCtx
	          });

	          this.sprite.addChild(_axisLine);
	          this._axisLine = _axisLine;
	        } else {
	          this._axisLine.animate(_axisLineCtx);
	        }
	      }

	      if (this._title) {
	        this._title.context.y = this.height - this._title.getTextHeight() / 2;
	        this._title.context.x = this.width / 2;
	        this.sprite.addChild(this._title);
	      }
	    }
	  }, {
	    key: "_trimLayoutData",
	    value: function _trimLayoutData() {
	      var me = this;
	      var arr = this.layoutData;
	      var l = arr.length;
	      if (!this.enabled || !l) return; // rule , peak, proportion

	      if (me.layoutType == "proportion") {
	        this._checkOver();
	      }

	      if (me.layoutType == "peak") {
	        //TODO: peak暂时沿用 _checkOver ，这是保险的万无一失的。
	        this._checkOver();
	      }

	      if (me.layoutType == "rule") {
	        this._checkOver();
	      }
	    }
	  }, {
	    key: "_getRootPR",
	    value: function _getRootPR() {
	      //找到paddingRight,在最后一个文本右移的时候需要用到
	      var rootPaddingRight = 0;

	      if (this._coord.app) {
	        rootPaddingRight = this._coord.app.padding.right;
	      }
	      return rootPaddingRight;
	    }
	  }, {
	    key: "_checkOver",
	    value: function _checkOver() {
	      var me = this;
	      var arr = me.layoutData;
	      var l = arr.length;
	      var textAlign = me.label.textAlign; //如果用户设置不想要做重叠检测

	      if (!this.label.evade || me.trimLayout) {
	        _.each(arr, function (layoutItem) {
	          layoutItem.visible = true;
	        });

	        if (me.trimLayout) {
	          //如果用户有手动的 trimLayout ，那么就全部visible为true，然后调用用户自己的过滤程序
	          //trimLayout就事把arr种的每个元素的visible设置为true和false的过程
	          me.trimLayout(arr);
	        }
	        //首先找到最后一个visible的label

	        var lastNode;

	        for (var i = l - 1; i >= 0; i--) {
	          if (lastNode) break;
	          if (arr[i].visible) lastNode = arr[i];
	        }

	        if (lastNode) {
	          if (textAlign == "center" && lastNode.x + lastNode.textWidth / 2 > me.width) {
	            lastNode._text_x = me.width - lastNode.textWidth / 2 + me._getRootPR();
	          }

	          if (textAlign == "left" && lastNode.x + lastNode.textWidth > me.width) {
	            lastNode._text_x = me.width - lastNode.textWidth;
	          }
	        }
	        return;
	      }

	      function checkOver(i) {
	        var curr = arr[i];

	        if (curr === undefined) {
	          return;
	        }
	        curr.visible = true;

	        for (var ii = i; ii < l - 1; ii++) {
	          var next = arr[ii + 1];
	          var nextWidth = next.textWidth;
	          var currWidth = curr.textWidth; //如果有设置rotation，那么就固定一个最佳可视单位width为35  暂定

	          if (!!me.label.rotation) {
	            nextWidth = Math.min(nextWidth, 22);
	            currWidth = Math.min(currWidth, 22);
	          }

	          var next_left_x = next.x; //下个节点的起始

	          var curr_right_x = curr.x + currWidth; //当前节点的终点

	          if (textAlign == "center") {
	            next_left_x = next.x - nextWidth / 2;
	            curr_right_x = curr.x + currWidth / 2;
	          }

	          if (textAlign == "right") {
	            next_left_x = next.x - nextWidth;
	            curr_right_x = curr.x;
	          }

	          if (ii == l - 2) {
	            if (next_left_x + nextWidth > me.width + me._getRootPR()) {
	              //只有最后一个溢出了，才需要检测
	              //next是最后一个
	              if (textAlign == "center" && next.x + nextWidth / 2 > me.width) {
	                next_left_x = me.width - nextWidth;
	                next._text_x = me.width - nextWidth / 2 + me._getRootPR();
	              }

	              if (textAlign == "left" && next.x + nextWidth > me.width) {
	                next_left_x = me.width - nextWidth;
	                next._text_x = me.width - nextWidth;
	              }
	            }
	          }

	          if (next_left_x - curr_right_x < 1) {
	            if (ii == l - 2) {
	              //最后一个的话，反把前面的给hide
	              next.visible = true;
	              curr.visible = false;
	              return;
	            } else {
	              next.visible = false;
	            }
	          } else {
	            checkOver(ii + 1);
	            break;
	          }
	        }
	      }
	      checkOver(0);
	    }
	  }]);
	  return xAxis;
	}(_axis["default"]);

	exports["default"] = xAxis;
	});

	unwrapExports(xaxis);

	var yaxis = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _canvax$$1 = interopRequireDefault(_canvax);



	var _axis = interopRequireDefault(axis$1);

	var _ = _canvax$$1["default"]._;
	var Line = _canvax$$1["default"].Shapes.Line;

	var yAxis =
	/*#__PURE__*/
	function (_Axis) {
	  (0, _inherits2["default"])(yAxis, _Axis);
	  (0, _createClass2["default"])(yAxis, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        align: {
	          detail: '左右轴设置',
	          "default": 'left'
	        },
	        layoutType: {
	          detail: '布局方式',
	          "default": 'proportion'
	        }
	      };
	    }
	  }]);

	  function yAxis(opt, data, _coord) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, yAxis);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(yAxis).call(this, opt, data.org));
	    _this.type = "yAxis";
	    _this._coord = _coord || {};
	    _this._title = null; //this.label对应的文本对象

	    _this._axisLine = null;
	    _this.maxW = 0; //最大文本的 width

	    _this.pos = {
	      x: 0,
	      y: 0
	    };
	    _this.yMaxHeight = 0; //y轴最大高

	    _this.layoutData = []; //dataSection 对应的layout数据{y:-100, value:'1000'}

	    _this.sprite = null;
	    _this.isH = false; //是否横向

	    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(yAxis.defaultProps()), opt);

	    _this.init(opt);

	    return _this;
	  }

	  (0, _createClass2["default"])(yAxis, [{
	    key: "init",
	    value: function init(opt) {
	      this._setField();

	      this._initHandle(opt);

	      this.sprite = new _canvax$$1["default"].Display.Sprite({
	        id: "yAxisSprite_" + new Date().getTime()
	      });
	      this.rulesSprite = new _canvax$$1["default"].Display.Sprite({
	        id: "yRulesSprite_" + new Date().getTime()
	      });
	      this.sprite.addChild(this.rulesSprite);
	    }
	  }, {
	    key: "_initHandle",
	    value: function _initHandle(opt) {
	      if (opt) {
	        if (opt.isH && (!opt.label || opt.label.rotaion === undefined)) {
	          //如果是横向直角坐标系图
	          this.label.rotation = 90;
	        }
	        //除非用户强制设置textAlign，否则就要根据this.align做一次二次处理

	        if (!opt.label || !opt.label.textAlign) {
	          this.label.textAlign = this.align == "left" ? "right" : "left";
	        }
	      }
	      this.setDataSection();

	      this._getTitle();

	      this._setYaxisWidth();
	    }
	  }, {
	    key: "_setField",
	    value: function _setField(field) {
	      if (field) {
	        this.field = field;
	      }
	      //先要矫正子啊field确保一定是个array

	      if (!_.isArray(this.field)) {
	        this.field = [this.field];
	      }
	    }
	    /**
	     * 
	     * opt  pos,yMaxHeight,resize
	     */

	  }, {
	    key: "draw",
	    value: function draw(opt) {
	      _.extend(true, this, opt || {});

	      this.height = parseInt(this.yMaxHeight - this._getYAxisDisLine());
	      this.setAxisLength(this.height);
	      this.sprite.cleanAnimates();

	      this._trimYAxis();

	      this._widget(opt);

	      this.setX(this.pos.x);
	      this.setY(this.pos.y);
	    } //配置和数据变化

	  }, {
	    key: "resetData",
	    value: function resetData(dataFrame) {
	      this._setField(dataFrame.field);

	      this.resetDataOrg(dataFrame.org);

	      this._initHandle();

	      this.draw();
	    }
	  }, {
	    key: "setX",
	    value: function setX($n) {
	      this.sprite.context.x = $n;
	      this.pos.x = $n;
	    }
	  }, {
	    key: "setY",
	    value: function setY($n) {
	      this.sprite.context.y = $n;
	      this.pos.y = $n;
	    } //目前和xAxis一样

	  }, {
	    key: "_getTitle",
	    value: function _getTitle() {
	      if (this.title.text) {
	        if (!this._title) {
	          var rotation = 0;

	          if (this.align == "left") {
	            rotation = -90;
	          } else {
	            rotation = 90;

	            if (this.isH) {
	              rotation = 270;
	            }
	          }
	          this._title = new _canvax$$1["default"].Display.Text(this.title.text, {
	            context: {
	              fontSize: this.title.fontSize,
	              textAlign: this.title.textAlign,
	              //"center",//this.isH ? "center" : "left",
	              textBaseline: this.title.textBaseline,
	              //"middle", //this.isH ? "top" : "middle",
	              fillStyle: this.title.fontColor,
	              strokeStyle: this.title.strokeStyle,
	              lineWidth: this.title.lineWidth,
	              rotation: rotation
	            }
	          });
	        } else {
	          this._title.resetText(this.title.text);
	        }
	      }
	    }
	  }, {
	    key: "_setYaxisWidth",
	    value: function _setYaxisWidth() {//待实现
	    }
	  }, {
	    key: "_trimYAxis",
	    value: function _trimYAxis() {
	      var me = this;
	      var tmpData = [];

	      for (var i = 0, l = this.dataSection.length; i < l; i++) {
	        var layoutData = {
	          value: this.dataSection[i],
	          y: -Math.abs(this.getPosOf({
	            val: this.dataSection[i],
	            ind: i
	          })),
	          visible: true,
	          text: ""
	        }; //把format提前

	        var text = layoutData.value;

	        if (_.isFunction(me.label.format)) {
	          text = me.label.format.apply(this, [text, i]);
	        }

	        if ((text === undefined || text === null) && me.layoutType == "proportion") {
	          text = (0, tools.numAddSymbol)(layoutData.value);
	        }
	        layoutData.text = text;
	        tmpData.push(layoutData);
	      }

	      var _preShowInd = 0;

	      for (var a = 0, al = tmpData.length; a < al; a++) {
	        if (a == 0) continue;

	        if (_preShowInd == 0) {
	          if (tmpData[a].text == tmpData[_preShowInd].text) {
	            //如果后面的format后的数据和前面的节点的format后数据相同
	            tmpData[a].visible = false;
	          } else {
	            _preShowInd = a;
	          }
	        } else {
	          if (tmpData[a].text == tmpData[_preShowInd].text) {
	            tmpData[_preShowInd].visible = false;
	          }

	          _preShowInd = a;
	        }
	      }

	      this.layoutData = tmpData;

	      if (this.trimLayout) {
	        //如果用户有手动的 trimLayout ，那么就全部visible为true，然后调用用户自己的过滤程序
	        //trimLayout就事把arr种的每个元素的visible设置为true和false的过程
	        this.trimLayout(tmpData);
	      }
	    }
	  }, {
	    key: "_getYAxisDisLine",
	    value: function _getYAxisDisLine() {
	      //获取y轴顶高到第一条线之间的距离         
	      var disMin = 0;
	      var disMax = 2 * disMin;
	      var dis = disMin;
	      dis = disMin + this.yMaxHeight % this.dataSection.length;
	      dis = dis > disMax ? disMax : dis;
	      return dis;
	    }
	  }, {
	    key: "resetWidth",
	    value: function resetWidth(width) {
	      var me = this;
	      me.width = width;

	      if (me.align == "left") {
	        me.rulesSprite.context.x = me.width;
	      }
	    }
	  }, {
	    key: "_widget",
	    value: function _widget(opt) {
	      var me = this;
	      !opt && (opt = {});

	      if (!me.enabled) {
	        me.width = 0;
	        return;
	      }
	      var arr = this.layoutData;
	      var visibleInd = 0;
	      me.maxW = 0;

	      for (var a = 0, al = arr.length; a < al; a++) {
	        _.isFunction(me.filter) && me.filter({
	          layoutData: arr,
	          index: a
	        });
	        var o = arr[a];

	        if (!o.visible) {
	          continue;
	        }
	        var y = o.y;
	        var textAlign = me.label.textAlign;
	        var posy = y + (a == 0 ? -3 : 0) + (a == arr.length - 1 ? 3 : 0); //为横向图表把y轴反转后的 逻辑

	        if (me.label.rotation == 90 || me.label.rotation == -90) {
	          textAlign = "center";

	          if (a == arr.length - 1) {
	            posy = y - 2;
	            textAlign = "right";
	          }

	          if (a == 0) {
	            posy = y;
	          }
	        }
	        var aniFrom = 16;

	        if (o.value == me.origin) {
	          aniFrom = 0;
	        }

	        if (o.value < me.origin) {
	          aniFrom = -16;
	        }
	        var lineX = 0;
	        var tickLineContext = void 0;

	        if (me.tickLine.enabled) {
	          //线条
	          lineX = me.align == "left" ? -me.tickLine.lineLength - me.tickLine.distance : me.tickLine.distance;
	          tickLineContext = {
	            x: lineX,
	            y: y,
	            end: {
	              x: me.tickLine.lineLength,
	              y: 0
	            },
	            lineWidth: me.tickLine.lineWidth,
	            strokeStyle: me._getStyle(me.tickLine.strokeStyle)
	          };
	        }

	        var textContext = void 0;

	        if (me.label.enabled) {
	          var txtX = me.align == "left" ? lineX - me.label.distance : lineX + me.tickLine.lineLength + me.label.distance;

	          if (this.isH) {
	            txtX = txtX + (me.align == "left" ? -1 : 1) * 4;
	          }
	          textContext = {
	            x: txtX,
	            y: posy,
	            fillStyle: me._getStyle(me.label.fontColor),
	            fontSize: me.label.fontSize,
	            rotation: -Math.abs(me.label.rotation),
	            textAlign: textAlign,
	            textBaseline: "middle",
	            lineHeight: me.label.lineHeight,
	            globalAlpha: 1
	          };
	        }
	        var duration = 300;

	        if (!me.animation || opt.resize) {
	          duration = 0;
	        }

	        var _node = this.rulesSprite.getChildAt(visibleInd);

	        if (_node) {
	          if (_node._tickLine && me.tickLine.enabled) {
	            _node._tickLine.animate(tickLineContext, {
	              duration: duration,
	              id: _node._tickLine.id
	            });
	          }

	          if (_node._txt && me.label.enabled) {
	            _node._txt.animate(textContext, {
	              duration: duration,
	              id: _node._txt.id
	            });

	            _node._txt.resetText(o.text);
	          }
	        } else {
	          _node = new _canvax$$1["default"].Display.Sprite({
	            id: "_node" + visibleInd
	          }); //新建line

	          if (me.tickLine.enabled) {
	            _node._tickLine = new Line({
	              id: "yAxis_tickline_" + visibleInd,
	              context: tickLineContext
	            });

	            _node.addChild(_node._tickLine);
	          }

	          if (me.label.enabled) {
	            _node._txt = new _canvax$$1["default"].Display.Text(o.text, {
	              id: "yAxis_txt_" + visibleInd,
	              context: textContext
	            });

	            _node.addChild(_node._txt);

	            if (me.label.rotation == 90 || me.label.rotation == -90) {
	              me.maxW = Math.max(me.maxW, _node._txt.getTextHeight());
	            } else {
	              me.maxW = Math.max(me.maxW, _node._txt.getTextWidth());
	            }

	            if (me.animation && !opt.resize) {
	              _node._txt.context.y = y + aniFrom;
	              _node._txt.context.globalAlpha = 0;

	              _node._txt.animate({
	                y: textContext.y,
	                globalAlpha: 1
	              }, {
	                duration: 300,
	                id: _node._txt.id
	              });
	            }
	          }
	          me.rulesSprite.addChild(_node);
	        }
	        visibleInd++;
	      }

	      if (me.rulesSprite.children.length >= visibleInd) {
	        for (var _al = visibleInd, pl = me.rulesSprite.children.length; _al < pl; _al++) {
	          me.rulesSprite.getChildAt(_al).remove();
	          _al--, pl--;
	        }
	      }

	      if (!me.width && !('width' in me._opt)) {
	        me.width = parseInt(me.maxW + me.label.distance);

	        if (me.tickLine.enabled) {
	          me.width += parseInt(me.tickLine.lineLength + me.tickLine.distance);
	        }

	        if (me._title) {
	          me.width += me._title.getTextHeight();
	        }
	      }
	      var _originX = 0;

	      if (me.align == "left") {
	        me.rulesSprite.context.x = me.width;
	        _originX = me.width;
	      }

	      if (me.axisLine.enabled) {
	        var _axisLineCtx = {
	          start: {
	            x: _originX,
	            y: 0
	          },
	          end: {
	            x: _originX,
	            y: -me.height
	          },
	          lineWidth: me.axisLine.lineWidth,
	          strokeStyle: me._getStyle(me.axisLine.strokeStyle)
	        };

	        if (!this._axisLine) {
	          var _axisLine = new Line({
	            context: _axisLineCtx
	          });

	          this.sprite.addChild(_axisLine);
	          this._axisLine = _axisLine;
	        } else {
	          this._axisLine.animate(_axisLineCtx);
	        }
	      }

	      if (this._title) {
	        this._title.context.y = -this.height / 2;
	        this._title.context.x = this._title.getTextHeight() / 2;

	        if (this.align == "right") {
	          this._title.context.x = this.width - this._title.getTextHeight() / 2;
	        }
	        this.sprite.addChild(this._title);
	      }
	    }
	  }, {
	    key: "_getStyle",
	    value: function _getStyle(s) {
	      var res = s;

	      if (_.isFunction(s)) {
	        res = s.call(this, this);
	      }

	      if (!s) {
	        res = "#999";
	      }
	      return res;
	    }
	  }]);
	  return yAxis;
	}(_axis["default"]);

	exports["default"] = yAxis;
	});

	unwrapExports(yaxis);

	var grid = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _canvax$$1 = interopRequireDefault(_canvax);



	var _ = _canvax$$1["default"]._,
	    event = _canvax$$1["default"].event;
	var Line = _canvax$$1["default"].Shapes.Line;
	var Rect = _canvax$$1["default"].Shapes.Rect;

	var rectGrid =
	/*#__PURE__*/
	function (_event$Dispatcher) {
	  (0, _inherits2["default"])(rectGrid, _event$Dispatcher);
	  (0, _createClass2["default"])(rectGrid, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        enabled: {
	          detail: '是否开启grid绘制',
	          "default": true
	        },
	        line: {
	          detail: '网格线条配置',
	          propertys: {
	            xDimension: {
	              detail: '一维方向的网格线',
	              propertys: {
	                enabled: {
	                  detail: '是否开启',
	                  "default": true
	                },
	                data: [],
	                lineType: {
	                  detail: '线的样式，虚线或者实现',
	                  "default": 'solid'
	                },
	                lineWidth: {
	                  detail: '线宽',
	                  "default": 1
	                },
	                strokeStyle: {
	                  detail: '线颜色',
	                  "default": '#f0f0f0'
	                }
	              }
	            },
	            yDimension: {
	              detail: '二维方向的网格线',
	              propertys: {
	                enabled: {
	                  detail: '是否开启',
	                  "default": false
	                },
	                data: [],
	                lineType: {
	                  detail: '线的样式，虚线或者实现',
	                  "default": 'solid'
	                },
	                lineWidth: {
	                  detail: '线宽',
	                  "default": 1
	                },
	                strokeStyle: {
	                  detail: '线颜色',
	                  "default": '#f0f0f0'
	                }
	              }
	            }
	          }
	        },
	        fill: {
	          detail: '背景色配置',
	          propertys: {
	            xDimension: {
	              detail: '以为方向的背景色块，x方向',
	              propertys: {
	                enabled: {
	                  detail: '是否开启',
	                  "default": false
	                },
	                splitVals: {
	                  detail: "从x轴上面用来分割区块的vals",
	                  "default": null //默认等于xaxis的dataSection

	                },
	                fillStyle: {
	                  detail: '背景颜色',
	                  "default": null
	                },
	                alpha: {
	                  detail: '背景透明度',
	                  "default": null
	                }
	              }
	            },
	            yDimension: {
	              detail: '以为方向的背景色块，y方向',
	              propertys: {
	                enabled: {
	                  detail: '是否开启',
	                  "default": false
	                },
	                splitVals: {
	                  detail: "从x轴上面用来分割区块的vals",
	                  "default": null
	                },
	                fillStyle: {
	                  detail: '背景颜色',
	                  "default": null
	                },
	                alpha: {
	                  detail: '背景透明度',
	                  "default": null
	                }
	              }
	            }
	          }
	        }
	      };
	    }
	  }]);

	  function rectGrid(opt, _coord) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, rectGrid);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(rectGrid).call(this, opt, _coord));

	    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(rectGrid.defaultProps()));

	    _this.width = 0;
	    _this.height = 0;
	    _this._coord = _coord; //该组件被添加到的目标图表项目，

	    _this.pos = {
	      x: 0,
	      y: 0
	    };
	    _this.sprite = null; //总的sprite

	    _this.xAxisSp = null; //x轴上的线集合

	    _this.yAxisSp = null; //y轴上的线集合

	    _this.init(opt);

	    return _this;
	  }

	  (0, _createClass2["default"])(rectGrid, [{
	    key: "init",
	    value: function init(opt) {
	      _.extend(true, this, opt);

	      this.sprite = new _canvax$$1["default"].Display.Sprite();
	    }
	  }, {
	    key: "setX",
	    value: function setX($n) {
	      this.sprite.context.x = $n;
	    }
	  }, {
	    key: "setY",
	    value: function setY($n) {
	      this.sprite.context.y = $n;
	    }
	  }, {
	    key: "draw",
	    value: function draw(opt) {
	      _.extend(true, this, opt); //this._configData(opt);


	      this._widget();

	      this.setX(this.pos.x);
	      this.setY(this.pos.y);
	    }
	  }, {
	    key: "clean",
	    value: function clean() {
	      this.sprite.removeAllChildren();
	    }
	  }, {
	    key: "reset",
	    value: function reset(opt) {
	      this.sprite.removeAllChildren();
	      this.draw(opt);
	    }
	  }, {
	    key: "_widget",
	    value: function _widget() {
	      var self = this;

	      if (!this.enabled) {
	        return;
	      }
	      var _yAxis = self._coord._yAxis[0];
	      var _xAxis = self._coord._xAxis;
	      this.fillSp = new _canvax$$1["default"].Display.Sprite();
	      this.sprite.addChild(this.fillSp);

	      _.each([self.fill.xDimension, self.fill.yDimension], function (fill, ind) {
	        var _axis = ind ? _yAxis : _xAxis;

	        var splitVals = [];

	        if (fill.enabled) {
	          if (!fill.splitVals) {
	            splitVals = _axis.dataSection;
	          } else {
	            splitVals = [_axis.dataSection[0]].concat(_.flatten([fill.splitVals]));
	            splitVals.push(_axis.dataSection.slice(-1)[0]);
	          }

	          var fillRanges = [];

	          if (splitVals.length >= 2) {
	            var range = [];

	            for (var i = 0, l = splitVals.length; i < l; i++) {
	              var pos = _axis.getPosOf({
	                val: splitVals[i]
	              });

	              if (!range.length) {
	                range.push(pos);
	                continue;
	              }

	              if (range.length == 1) {
	                if (pos - range[0] < 1) {
	                  continue;
	                } else {
	                  range.push(pos);
	                  fillRanges.push(range);
	                  var nextBegin = range[1];
	                  range = [nextBegin];
	                }
	              }
	            }

	            _.each(fillRanges, function (range, rInd) {
	              var rectCtx = {
	                fillStyle: self.getProp(fill.fillStyle, rInd, "#000"),
	                fillAlpha: self.getProp(fill.alpha, rInd, 0.02 * (rInd % 2))
	              };

	              if (!ind) {
	                //x轴上面排列的fill
	                rectCtx.x = range[0];
	                rectCtx.y = 0;
	                rectCtx.width = range[1] - range[0];
	                rectCtx.height = -self.height;
	              } else {
	                //y轴上面排列的fill
	                rectCtx.x = 0;
	                rectCtx.y = -range[0];
	                rectCtx.width = self.width;
	                rectCtx.height = -(range[1] - range[0]);
	              }

	              var fillRect = new Rect({
	                context: rectCtx
	              });
	              self.fillSp.addChild(fillRect);
	            });
	          }
	        }
	      });

	      self.xAxisSp = new _canvax$$1["default"].Display.Sprite(), self.sprite.addChild(self.xAxisSp);
	      self.yAxisSp = new _canvax$$1["default"].Display.Sprite(), self.sprite.addChild(self.yAxisSp);
	      var arr = _yAxis.layoutData;

	      for (var a = 0, al = arr.length; a < al; a++) {
	        var o = arr[a];
	        if (!o.visible) continue;
	        var line = new Line({
	          id: "back_line_" + a,
	          context: {
	            y: o.y,
	            lineType: self.getProp(self.line.xDimension.lineType, a, 'solid'),
	            lineWidth: self.getProp(self.line.xDimension.lineWidth, a, 1),
	            strokeStyle: self.getProp(self.line.xDimension.strokeStyle, a, '#f0f0f0'),
	            visible: true
	          }
	        });

	        if (self.line.xDimension.enabled) {
	          self.xAxisSp.addChild(line);
	          line.context.start.x = 0;
	          line.context.end.x = self.width;
	        }
	      }

	      arr = _xAxis.layoutData;

	      for (var _a = 0, _al = arr.length; _a < _al; _a++) {
	        var _o = arr[_a];

	        var _line = new Line({
	          context: {
	            x: _o.x,
	            start: {
	              x: 0,
	              y: 0
	            },
	            end: {
	              x: 0,
	              y: -self.height
	            },
	            lineType: self.getProp(self.line.yDimension.lineType, _a, 'solid'),
	            lineWidth: self.getProp(self.line.yDimension.lineWidth, _a, 1),
	            strokeStyle: self.getProp(self.line.yDimension.strokeStyle, _a, '#f0f0f0'),
	            visible: true
	          }
	        });

	        if (self.line.yDimension.enabled) {
	          self.yAxisSp.addChild(_line);
	        }
	      }
	    }
	  }, {
	    key: "getProp",
	    value: function getProp(prop, i, def) {
	      var res = def;

	      if (prop != null && prop != undefined) {
	        if (_.isString(prop) || _.isNumber(prop)) {
	          res = prop;
	        }

	        if (_.isFunction(prop)) {
	          res = prop.apply(this, [i, def]);
	        }

	        if (_.isArray(prop)) {
	          res = prop[i];
	        }
	      }
	      return res;
	    }
	  }]);
	  return rectGrid;
	}(event.Dispatcher);

	exports["default"] = rectGrid;
	});

	unwrapExports(grid);

	var rect = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _index = interopRequireDefault(coord);

	var _canvax$$1 = interopRequireDefault(_canvax);

	var _xaxis = interopRequireDefault(xaxis);

	var _yaxis = interopRequireDefault(yaxis);

	var _grid = interopRequireDefault(grid);



	var _ = _canvax$$1["default"]._,
	    event = _canvax$$1["default"].event;

	var Rect =
	/*#__PURE__*/
	function (_coordBase) {
	  (0, _inherits2["default"])(Rect, _coordBase);
	  (0, _createClass2["default"])(Rect, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        horizontal: {
	          detail: '横向翻转坐标系',
	          documentation: "横向翻转坐标系",
	          insertText: "horizontal: ",
	          "default": false,
	          values: [true, false]
	        },
	        _props: {
	          xAxis: _xaxis["default"],
	          yAxis: _yaxis["default"],
	          grid: _grid["default"]
	        }
	      };
	    }
	  }]);

	  function Rect(opt, app) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, Rect);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Rect).call(this, opt, app));

	    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Rect.defaultProps()), _this.setDefaultOpt(opt, app));

	    _this.type = "rect";
	    _this._xAxis = null;
	    _this._yAxis = [];
	    _this._yAxisLeft = null;
	    _this._yAxisRight = null;
	    _this._grid = null;

	    _this.init(opt);

	    return _this;
	  }

	  (0, _createClass2["default"])(Rect, [{
	    key: "setDefaultOpt",
	    value: function setDefaultOpt(coordOpt, app) {
	      var coord$$1 = {
	        field: this.dataFrame.fields[0],
	        xAxis: {
	          //波峰波谷布局模型，默认是柱状图的，折线图种需要做覆盖
	          layoutType: "rule",
	          //"peak",  
	          //默认为false，x轴的计量是否需要取整， 这样 比如某些情况下得柱状图的柱子间隔才均匀。
	          //比如一像素间隔的柱状图，如果需要精确的绘制出来每个柱子的间距是1px， 就必须要把这里设置为true
	          posParseToInt: false
	        },
	        grid: {}
	      };

	      _.extend(true, coord$$1, coordOpt);

	      if (coord$$1.yAxis) {
	        var _nyarr = []; //TODO: 因为我们的deep extend 对于数组是整个对象引用过去，所以，这里需要
	        //把每个子元素单独clone一遍，恩恩恩， 在canvax中优化extend对于array的处理

	        _.each(_.flatten([coord$$1.yAxis]), function (yopt) {
	          _nyarr.push(_.clone(yopt));
	        });

	        coord$$1.yAxis = _nyarr;
	      } else {
	        coord$$1.yAxis = [];
	      }

	      var graphsArr = _.flatten([app._opt.graphs]); //有graphs的就要用找到这个graphs.field来设置coord.yAxis


	      for (var i = 0; i < graphsArr.length; i++) {
	        var graphs = graphsArr[i];

	        if (graphs.type == "bar") {
	          //如果graphs里面有柱状图，那么就整个xAxis都强制使用 peak 的layoutType
	          coord$$1.xAxis.layoutType = "peak";
	        }

	        if (graphs.field) {
	          (function () {
	            //没有配置field的话就不绘制这个 graphs了
	            var align = "left"; //默认left

	            if (graphs.yAxisAlign == "right") {
	              align = "right";
	            }
	            var optsYaxisObj = null;
	            optsYaxisObj = _.find(coord$$1.yAxis, function (obj, i) {
	              return obj.align == align || !obj.align && i == (align == "left" ? 0 : 1);
	            });

	            if (!optsYaxisObj) {
	              optsYaxisObj = {
	                align: align,
	                field: []
	              };
	              coord$$1.yAxis.push(optsYaxisObj);
	            } else {
	              if (!optsYaxisObj.align) {
	                optsYaxisObj.align = align;
	              }
	            }

	            if (!optsYaxisObj.field) {
	              optsYaxisObj.field = [];
	            } else {
	              if (!_.isArray(optsYaxisObj.field)) {
	                optsYaxisObj.field = [optsYaxisObj.field];
	              }
	            }

	            if (_.isArray(graphs.field)) {
	              optsYaxisObj.field = optsYaxisObj.field.concat(graphs.field);
	            } else {
	              optsYaxisObj.field.push(graphs.field);
	            }
	          })();
	        }
	      }
	      //要手动把yAxis 按照 left , right的顺序做次排序

	      var _lys = [],
	          _rys = [];

	      _.each(coord$$1.yAxis, function (yAxis, i) {
	        if (!yAxis.align) {
	          yAxis.align = i ? "right" : "left";
	        }

	        if (yAxis.align == "left") {
	          _lys.push(yAxis);
	        } else {
	          _rys.push(yAxis);
	        }
	      });

	      coord$$1.yAxis = _lys.concat(_rys);

	      if (coord$$1.horizontal) {
	        coord$$1.xAxis.isH = true;

	        _.each(coord$$1.yAxis, function (yAxis) {
	          yAxis.isH = true;
	        });
	      }

	      if ("enabled" in coord$$1) {
	        //如果有给直角坐标系做配置display，就直接通知到xAxis，yAxis，grid三个子组件
	        _.extend(true, coord$$1.xAxis, {
	          enabled: coord$$1.enabled
	        });

	        _.each(coord$$1.yAxis, function (yAxis) {
	          _.extend(true, yAxis, {
	            enabled: coord$$1.enabled
	          });
	        });

	        coord$$1.grid.enabled = coord$$1.enabled;
	      }

	      if ("animation" in coord$$1) {
	        //如果有给直角坐标系做配置animation，就直接通知到xAxis，yAxis，grid三个子组件
	        _.extend(true, coord$$1.xAxis, {
	          animation: coord$$1.animation
	        });

	        _.each(coord$$1.yAxis, function (yAxis) {
	          _.extend(true, yAxis, {
	            animation: coord$$1.animation
	          });
	        });

	        coord$$1.grid.animation = coord$$1.animation;
	      }
	      return coord$$1;
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      this._initModules(); //创建好了坐标系统后，设置 _fieldsDisplayMap 的值，
	      // _fieldsDisplayMap 的结构里包含每个字段是否在显示状态的enabled 和 这个字段属于哪个yAxis


	      this.fieldsMap = this.setFieldsMap({
	        type: "yAxis"
	      });
	    }
	  }, {
	    key: "resetData",
	    value: function resetData(dataFrame) {
	      var me = this;
	      this.dataFrame = dataFrame;

	      var _xAxisDataFrame = this.getAxisDataFrame(this.xAxis.field);

	      this._xAxis.resetData(_xAxisDataFrame);

	      _.each(this._yAxis, function (_yAxis) {
	        //这个_yAxis是具体的y轴实例
	        var yAxisDataFrame = me.getAxisDataFrame(_yAxis.field);

	        _yAxis.resetData(yAxisDataFrame);
	      });

	      this._resetXY_axisLine_pos(); //let _yAxis = this._yAxisLeft || this._yAxisRight;


	      this._grid.reset({
	        animation: false
	      });
	    }
	  }, {
	    key: "draw",
	    value: function draw(opt) {
	      //在绘制的时候，要先拿到xAxis的高
	      !opt && (opt = {});
	      var _padding = this.app.padding;
	      var h = opt.height || this.app.height;
	      var w = opt.width || this.app.width;

	      if (this.horizontal) {
	        //如果是横向的坐标系统，也就是xy对调，那么高宽也要对调
	        var _num = w;
	        w = h;
	        h = _num;
	      }
	      var y = h - this._xAxis.height - _padding.bottom;
	      var _yAxisW = 0;
	      var _yAxisRW = 0; //绘制yAxis

	      if (this._yAxisLeft) {
	        this._yAxisLeft.draw({
	          pos: {
	            x: _padding.left,
	            y: y
	          },
	          yMaxHeight: y - _padding.top,
	          resize: opt.resize
	        });

	        _yAxisW = this._yAxisLeft.width;
	      } //如果有双轴


	      if (this._yAxisRight) {
	        this._yAxisRight.draw({
	          pos: {
	            x: 0,
	            y: y
	          },
	          yMaxHeight: y - _padding.top,
	          resize: opt.resize
	        });

	        _yAxisRW = this._yAxisRight.width;
	      }

	      this._xAxis.draw({
	        pos: {
	          x: _padding.left + _yAxisW,
	          y: y
	        },
	        width: w - _yAxisW - _padding.left - _yAxisRW - _padding.right,
	        resize: opt.resize
	      });

	      this._yAxisRight && this._yAxisRight.setX(_yAxisW + _padding.left + this._xAxis.width); //绘制背景网格

	      this._grid.draw({
	        width: this._xAxis.width,
	        height: this._yAxis[0].height,
	        pos: {
	          x: _yAxisW + _padding.left,
	          y: y
	        },
	        resize: opt.resize
	      });

	      this.width = this._xAxis.width;
	      this.height = this._yAxis[0].height;
	      this.origin.x = _yAxisW + _padding.left;
	      this.origin.y = y;

	      this._initInduce();

	      this._resetXY_axisLine_pos();

	      if (this.horizontal) {
	        this._horizontal({
	          w: w,
	          h: h
	        });
	        /*
	        let _padding = this.app.padding;
	        this.width = this._yAxis[0].height;
	        this.height = this._xAxis.width;
	        this.origin.x = this._xAxis.height + _padding.left;
	        this.origin.y = this._yAxis[0].height + _padding.top;
	        */

	      }
	    }
	  }, {
	    key: "_resetXY_axisLine_pos",
	    value: function _resetXY_axisLine_pos() {
	      var me = this; //设置下x y 轴的 _axisLine轴线的位置，默认 axisLine.position==default

	      var xAxisPosY;

	      if (this._xAxis.enabled) {
	        if (this._xAxis.axisLine.position == 'center') {
	          xAxisPosY = -this._yAxis[0].height / 2;
	        }

	        if (this._xAxis.axisLine.position == 'center') {
	          xAxisPosY = -this._yAxis[0].height / 2;
	        }

	        if (_.isNumber(this._xAxis.axisLine.position)) {
	          xAxisPosY = -this._yAxis[0].getPosOfVal(this._xAxis.axisLine.position);
	        }

	        if (xAxisPosY !== undefined) {
	          this._xAxis._axisLine.context.y = xAxisPosY;
	        }
	      }

	      _.each(this._yAxis, function (_yAxis) {
	        //这个_yAxis是具体的y轴实例
	        var yAxisPosX;

	        if (_yAxis.enabled) {
	          if (_yAxis.axisLine.position == 'center') {
	            yAxisPosX = me._xAxis.width / 2;
	          }

	          if (_.isNumber(_yAxis.axisLine.position)) {
	            yAxisPosX = me._xAxis.getPosOfVal(_yAxis.axisLine.position);
	          }

	          if (yAxisPosX !== undefined) {
	            _yAxis._axisLine.context.x = yAxisPosX;
	          }
	        }
	      });
	    }
	  }, {
	    key: "getSizeAndOrigin",
	    value: function getSizeAndOrigin() {
	      var obj = {
	        width: this.width,
	        height: this.height,
	        origin: this.origin
	      };

	      if (this.horizontal) {
	        var _padding = this.app.padding; //因为在drawBeginHorizontal中
	        //横向了之后， 要把4个padding值轮换换过了
	        //top,right 对调 ， bottom,left 对调
	        //所以，这里要对调换回来给到origin

	        var left = _padding.bottom;
	        var top = _padding.right;
	        obj = {
	          width: this._yAxis[0].height,
	          height: this._xAxis.width,
	          origin: {
	            x: this._xAxis.height + left,
	            y: this._yAxis[0].height + top
	          }
	        };
	      }
	      return obj;
	    }
	  }, {
	    key: "_initModules",
	    value: function _initModules() {
	      this._grid = new _grid["default"](this.grid, this);
	      this.sprite.addChild(this._grid.sprite);

	      var _xAxisDataFrame = this.getAxisDataFrame(this.xAxis.field);

	      this._xAxis = new _xaxis["default"](this.xAxis, _xAxisDataFrame, this);

	      this._axiss.push(this._xAxis);

	      this.sprite.addChild(this._xAxis.sprite); //这里定义的是配置

	      var yAxis = this.yAxis;
	      var yAxisLeft, yAxisRight;
	      var yAxisLeftDataFrame, yAxisRightDataFrame; // yAxis 肯定是个数组

	      if (!_.isArray(yAxis)) {
	        yAxis = [yAxis];
	      }

	      yAxisLeft = _.find(yAxis, function (ya) {
	        return ya.align == "left";
	      });

	      if (yAxisLeft) {
	        yAxisLeftDataFrame = this.getAxisDataFrame(yAxisLeft.field);
	        this._yAxisLeft = new _yaxis["default"](yAxisLeft, yAxisLeftDataFrame, this);
	        this._yAxisLeft.axis = yAxisLeft;
	        this.sprite.addChild(this._yAxisLeft.sprite);

	        this._yAxis.push(this._yAxisLeft);

	        this._axiss.push(this._yAxisLeft);
	      }

	      yAxisRight = _.find(yAxis, function (ya) {
	        return ya.align == "right";
	      });

	      if (yAxisRight) {
	        yAxisRightDataFrame = this.getAxisDataFrame(yAxisRight.field);
	        this._yAxisRight = new _yaxis["default"](yAxisRight, yAxisRightDataFrame, this);
	        this._yAxisRight.axis = yAxisRight;
	        this.sprite.addChild(this._yAxisRight.sprite);

	        this._yAxis.push(this._yAxisRight);

	        this._axiss.push(this._yAxisRight);
	      }
	    }
	    /**
	     * 
	     * @param {x,y} size 
	     */

	  }, {
	    key: "_horizontal",
	    value: function _horizontal(opt) {
	      var me = this;
	      var w = opt.h;
	      var h = opt.w;

	      _.each([me.sprite.context], function (ctx) {
	        ctx.x += (w - h) / 2;
	        ctx.y += (h - w) / 2;
	        var origin = {
	          x: h / 2,
	          y: w / 2
	        };
	        ctx.rotation = 90;
	        ctx.rotateOrigin = origin;
	      });
	    } //由coor_base中得addField removeField来调用

	  }, {
	    key: "changeFieldEnabled",
	    value: function changeFieldEnabled(field) {
	      this.setFieldEnabled(field);
	      var fieldMap = this.getFieldMapOf(field);

	      var _axis = fieldMap.yAxis || fieldMap.rAxis;

	      var enabledFields = this.getEnabledFieldsOf(_axis); //[ fieldMap.yAxis.align ];

	      _axis.resetData(this.getAxisDataFrame(enabledFields));

	      this._resetXY_axisLine_pos(); //然后yAxis更新后，对应的背景也要更新


	      this._grid.reset({
	        animation: false
	      });
	    }
	  }, {
	    key: "_initInduce",
	    value: function _initInduce() {
	      var me = this;
	      me.induce = new _canvax$$1["default"].Shapes.Rect({
	        id: "induce",
	        context: {
	          x: me.origin.x,
	          y: me.origin.y - me.height,
	          width: me.width,
	          height: me.height,
	          fillStyle: '#000000',
	          globalAlpha: 0,
	          cursor: 'pointer'
	        }
	      });

	      if (!me.sprite.getChildById("induce")) {
	        me.sprite.addChild(me.induce);
	      }
	      me.induce.on(event.types.get(), function (e) {
	        //e.eventInfo = me._getInfoHandler(e);
	        me.fire(e.type, e); //图表触发，用来处理Tips

	        me.app.fire(e.type, e);
	      });
	    }
	  }, {
	    key: "getTipsInfoHandler",
	    value: function getTipsInfoHandler(e) {
	      //这里只获取xAxis的刻度信息;
	      var induceX = e.point.x;

	      if (e.target !== this.induce) {
	        induceX = this.induce.globalToLocal(e.target.localToGlobal(e.point)).x;
	      }

	      var xNode = this._xAxis.getNodeInfoOfX(induceX);

	      var obj = {
	        xAxis: xNode,
	        dimension_1: xNode,
	        //和xAxis一致，， 极坐标也会有dimension_1
	        title: xNode.text,
	        //下面两个属性是所有坐标系统一的
	        iNode: xNode.ind,
	        nodes: [//遍历_graphs 去拿东西
	        ]
	      };

	      if (e.eventInfo) {
	        _.extend(true, obj, e.eventInfo); //把xNode信息写到eventInfo上面


	        if (obj.xAxis) {
	          e.eventInfo.xAxis = xNode;
	        }
	      }
	      return obj;
	    } //下面的方法是所有坐标系都要提供的方法，用来计算位置的， graphs里面会调用
	    //return {pos {x,y}, value :{x,y}}

	  }, {
	    key: "getPoint",
	    value: function getPoint(opt) {
	      var point = {
	        x: 0,
	        y: undefined
	      };
	      var xaxisExp = {
	        type: "xAxis"
	      };
	      var yaxisExp = {
	        type: "yAxis",
	        field: opt.field
	      };

	      var _xAxis = this.getAxis(xaxisExp);

	      var _yAxis = this.getAxis(yaxisExp);

	      var _iNode = opt.iNode || 0;

	      var _value = opt.value; //x y 一般至少会带 yval过来

	      if (!("x" in _value)) {
	        //如果没有传xval过来，要用iNode去xAxis的org去取
	        _value.x = _.flatten(_xAxis.dataOrg)[_iNode];
	      }
	      point.x = _xAxis.getPosOf({
	        ind: _iNode,
	        val: _value.x
	      });
	      var y = _value.y;

	      if (!isNaN(y) && y !== null && y !== undefined && y !== "") {
	        point.y = -_yAxis.getPosOfVal(y);
	      } else {
	        point.y = undefined;
	      }
	      return {
	        pos: point,
	        value: _value
	      };
	    }
	  }, {
	    key: "getAxisOriginPoint",
	    value: function getAxisOriginPoint(exp) {
	      var _yAxis = this.getAxis(exp);

	      return {
	        pos: -_yAxis.originPos,
	        value: _yAxis.origin
	      };
	    }
	  }, {
	    key: "getOriginPos",
	    value: function getOriginPos(exp) {
	      var xaxisExp = {
	        type: "xAxis"
	      };
	      var yaxisExp = {
	        type: "yAxis",
	        field: exp.field
	      };

	      var _xAxis = this.getAxis(xaxisExp);

	      var _yAxis = this.getAxis(yaxisExp);

	      return {
	        x: _xAxis.originPos,
	        y: -_yAxis.originPos
	      };
	    }
	  }]);
	  return Rect;
	}(_index["default"]);

	_index["default"].registerComponent(Rect, 'coord', 'rect');

	var _default = Rect;
	exports["default"] = _default;
	});

	unwrapExports(rect);

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	var arrayWithHoles = _arrayWithHoles;

	function _iterableToArrayLimit(arr, i) {
	  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	var iterableToArrayLimit = _iterableToArrayLimit;

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	var arrayLikeToArray = _arrayLikeToArray;

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	var unsupportedIterableToArray = _unsupportedIterableToArray;

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	var nonIterableRest = _nonIterableRest;

	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
	}

	var slicedToArray = _slicedToArray;

	var color = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.colorRgb = colorRgb;
	exports.colorRgba = colorRgba;
	exports.hex2rgb = hex2rgb;
	exports.rgb2hex = rgb2hex;
	exports.rgba2rgb = rgba2rgb;
	exports.gradient = gradient;

	var _slicedToArray2 = interopRequireDefault(slicedToArray);

	//十六进制颜色值的正则表达式 
	var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	/*16进制颜色转为RGB格式*/

	function colorRgb(hex) {
	  var sColor = hex.toLowerCase();

	  if (sColor && reg.test(sColor)) {
	    if (sColor.length === 4) {
	      var sColorNew = "#";

	      for (var i = 1; i < 4; i += 1) {
	        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
	      }

	      sColor = sColorNew;
	    } //处理六位的颜色值  


	    var sColorChange = [];

	    for (var _i = 1; _i < 7; _i += 2) {
	      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
	    }

	    return "RGB(" + sColorChange.join(",") + ")";
	  } else {
	    return sColor;
	  }
	}

	function colorRgba(hex, a) {
	  return colorRgb(hex).replace(')', ',' + a + ')').replace('RGB', 'RGBA');
	}

	function hex2rgb(hex, out) {
	  var rgb = [];

	  for (var i = 1; i < 7; i += 2) {
	    rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
	  }

	  return rgb;
	}

	function rgb2hex(rgb) {
	  var r = rgb[0];
	  var g = rgb[1];
	  var b = rgb[2];
	  var hex = (r << 16 | g << 8 | b).toString(16);
	  return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
	}

	function rgba2rgb(RGBA_color) {
	  var background_color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#ffffff";

	  var _RGBA_color$match = RGBA_color.match(/[\d\.]+/g),
	      _RGBA_color$match2 = (0, _slicedToArray2["default"])(_RGBA_color$match, 4),
	      r = _RGBA_color$match2[0],
	      g = _RGBA_color$match2[1],
	      b = _RGBA_color$match2[2],
	      a = _RGBA_color$match2[3];

	  var _colorRgb$match = colorRgb(background_color).match(/[\d\.]+/g),
	      _colorRgb$match2 = (0, _slicedToArray2["default"])(_colorRgb$match, 3),
	      br = _colorRgb$match2[0],
	      bg = _colorRgb$match2[1],
	      bb = _colorRgb$match2[2];

	  return "RGB(" + [(1 - a) * br + a * r, (1 - a) * bg + a * g, (1 - a) * bb + a * b].join(',') + ")";
	} // 计算渐变过渡色


	function gradient(startColor, endColor) {
	  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	  // 将 hex 转换为rgb
	  var sColor = hex2rgb(startColor);
	  var eColor = hex2rgb(endColor); // 计算R\G\B每一步的差值

	  var rStep = (eColor[0] - sColor[0]) / step;
	  var gStep = (eColor[1] - sColor[1]) / step;
	  var bStep = (eColor[2] - sColor[2]) / step;
	  var gradientColorArr = [];

	  for (var i = 0; i < step; i++) {
	    // 计算每一步的hex值
	    gradientColorArr.push(rgb2hex([parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])]));
	  }

	  return gradientColorArr;
	}
	});

	unwrapExports(color);
	var color_1 = color.colorRgb;
	var color_2 = color.colorRgba;
	var color_3 = color.hex2rgb;
	var color_4 = color.rgb2hex;
	var color_5 = color.rgba2rgb;
	var color_6 = color.gradient;

	var group = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _canvax$$1 = interopRequireDefault(_canvax);





	var _ = _canvax$$1["default"]._,
	    event = _canvax$$1["default"].event;
	var AnimationFrame = _canvax$$1["default"].AnimationFrame;
	var BrokenLine = _canvax$$1["default"].Shapes.BrokenLine;
	var Circle = _canvax$$1["default"].Shapes.Circle;
	var Isogon = _canvax$$1["default"].Shapes.Isogon;
	var Path = _canvax$$1["default"].Shapes.Path;

	var LineGraphsGroup =
	/*#__PURE__*/
	function (_event$Dispatcher) {
	  (0, _inherits2["default"])(LineGraphsGroup, _event$Dispatcher);
	  (0, _createClass2["default"])(LineGraphsGroup, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        line: {
	          detail: '线配置',
	          propertys: {
	            enabled: {
	              detail: '是否开启',
	              "default": true
	            },
	            strokeStyle: {
	              detail: '线的颜色',
	              "default": undefined //不会覆盖掉constructor中的定义

	            },
	            lineWidth: {
	              detail: '线的宽度',
	              "default": 2
	            },
	            lineType: {
	              detail: '线的样式',
	              "default": 'solid'
	            },
	            smooth: {
	              detail: '是否平滑处理',
	              "default": true
	            }
	          }
	        },
	        node: {
	          detail: '单个数据节点配置，对应线上的小icon图形',
	          propertys: {
	            enabled: {
	              detail: '是否开启',
	              "default": true
	            },
	            shapeType: {
	              detail: '节点icon的图形类型，默认circle',
	              documentation: '可选有"isogon"(正多边形)，"path"（自定义path路径，待实现）',
	              "default": 'circle'
	            },
	            isogonPointNum: {
	              detail: 'shapeType为"isogon"时有效，描述正多边形的边数',
	              "default": 3
	            },
	            path: {
	              detail: 'shapeType为path的时候，描述图形的path路径',
	              "default": null
	            },
	            corner: {
	              detail: '拐角才有节点',
	              "default": false
	            },
	            radius: {
	              detail: '节点半径',
	              "default": 3
	            },
	            fillStyle: {
	              detail: '节点图形的背景色',
	              "default": '#ffffff'
	            },
	            strokeStyle: {
	              detail: '节点图形的描边色，默认和line.strokeStyle保持一致',
	              "default": null
	            },
	            lineWidth: {
	              detail: '节点图形边宽大小',
	              "default": 2
	            },
	            visible: {
	              detail: '节点是否显示,支持函数',
	              "default": true
	            }
	          }
	        },
	        label: {
	          detail: '文本配置',
	          propertys: {
	            enabled: {
	              detail: '是否开启',
	              "default": false
	            },
	            fontColor: {
	              detail: '文本颜色',
	              "default": null
	            },
	            strokeStyle: {
	              detail: '文本描边色',
	              "default": null
	            },
	            fontSize: {
	              detail: '文本字体大小',
	              "default": 12
	            },
	            format: {
	              detail: '文本格式化处理函数',
	              "default": null
	            }
	          }
	        },
	        area: {
	          detail: '面积区域配置',
	          propertys: {
	            enabled: {
	              detail: '是否开启',
	              "default": true
	            },
	            fillStyle: {
	              detail: '面积背景色',
	              "default": null
	            },
	            alpha: {
	              detail: '面积透明度',
	              "default": 0.2
	            }
	          }
	        }
	      };
	    }
	  }]);

	  function LineGraphsGroup(fieldMap, iGroup, opt, ctx, h, w, _graphs) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, LineGraphsGroup);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LineGraphsGroup).call(this));
	    _this._graphs = _graphs;
	    _this._opt = opt;
	    _this.fieldMap = fieldMap;
	    _this.field = null; //在extend之后要重新设置

	    _this.iGroup = iGroup;
	    _this._yAxis = fieldMap.yAxis;
	    _this.ctx = ctx;
	    _this.w = w;
	    _this.h = h;
	    _this.y = 0;
	    _this.line = {
	      //线
	      strokeStyle: fieldMap.color
	    };
	    _this.data = [];
	    _this.sprite = null;
	    _this._pointList = []; //brokenline最终的状态

	    _this._currPointList = []; //brokenline 动画中的当前状态

	    _this._bline = null;

	    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(LineGraphsGroup.defaultProps()), opt); //TODO group中得field不能直接用opt中得field， 必须重新设置， 
	    //group中得field只有一个值，代表一条折线, 后面要扩展extend方法，可以控制过滤哪些key值不做extend


	    _this.field = fieldMap.field; //iGroup 在yAxis.field中对应的值

	    _this.init(opt);

	    return _this;
	  }

	  (0, _createClass2["default"])(LineGraphsGroup, [{
	    key: "init",
	    value: function init() {
	      this.sprite = new _canvax$$1["default"].Display.Sprite();
	    }
	  }, {
	    key: "draw",
	    value: function draw(opt, data) {
	      _.extend(true, this, opt);

	      this.data = data;

	      this._widget(opt);
	    } //自我销毁

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      var me = this;
	      me.sprite.animate({
	        globalAlpha: 0
	      }, {
	        duration: 300,
	        onComplete: function onComplete() {
	          me.sprite.remove();
	        }
	      });
	    } //styleType , normals , iGroup

	  }, {
	    key: "_getColor",
	    value: function _getColor(s, iNode) {
	      var color$$1 = this._getProp(s, iNode);

	      if (color$$1 === undefined || color$$1 === null) {
	        //这个时候可以先取线的style，和线保持一致
	        color$$1 = this._getLineStrokeStyle();

	        if (s && s.lineargradient) {
	          color$$1 = s.lineargradient[parseInt(s.lineargradient.length / 2)].color;
	        }

	        if (!color$$1 || !_.isString(color$$1)) {
	          //那么最后，取this.fieldMap.color
	          color$$1 = this.fieldMap.color;
	        }
	      }
	      return color$$1;
	    }
	  }, {
	    key: "_getProp",
	    value: function _getProp(s, iNode) {
	      if (_.isArray(s)) {
	        return s[this.iGroup];
	      }

	      if (_.isFunction(s)) {
	        var _nodesInfo = [];

	        if (iNode != undefined) {
	          _nodesInfo.push(this.data[iNode]);
	        }
	        return s.apply(this, _nodesInfo);
	      }
	      return s;
	    } //这个是tips需要用到的 

	  }, {
	    key: "getNodeInfoAt",
	    value: function getNodeInfoAt($index, e) {
	      var o = this.data[$index];

	      if (e && e.eventInfo && e.eventInfo.dimension_1) {
	        var lt = e.eventInfo.dimension_1.layoutType;

	        if (lt == 'proportion') {
	          //$index则代表的xpos，需要计算出来data中和$index最近的值作为 node
	          var xDis;

	          for (var i = 0, l = this.data.length; i < l; i++) {
	            var _node = this.data[i];

	            var _xDis = Math.abs(_node.x - $index);

	            if (xDis == undefined || _xDis < xDis) {
	              xDis = _xDis;
	              o = _node;
	              continue;
	            }
	          }
	        }
	      }
	      return o;
	    }
	    /**
	     * 
	     * @param {object} opt 
	     * @param {data} data 
	     * 
	     * 触发这次reset的触发原因比如{name : 'datazoom', left:-1,right:1},  
	     * dataTrigger 描述了数据变化的原因和变化的过程，比如上面的数据 left少了一个数据，right多了一个数据
	     * @param {object} dataTrigger 
	     */

	  }, {
	    key: "resetData",
	    value: function resetData(data, dataTrigger) {
	      var me = this;

	      if (data) {
	        this.data = data;
	      }
	      me._pointList = this._getPointList(this.data);
	      var plen = me._pointList.length;
	      var cplen = me._currPointList.length;
	      var params = {
	        left: 0,
	        //默认左边数据没变
	        right: plen - cplen
	      };

	      if (dataTrigger) {
	        _.extend(params, dataTrigger.params);
	      }

	      if (params.left) {
	        if (params.left > 0) {
	          this._currPointList = this._pointList.slice(0, params.left).concat(this._currPointList);
	        }

	        if (params.left < 0) {
	          this._currPointList.splice(0, Math.abs(params.left));
	        }
	      }

	      if (params.right) {
	        if (params.right > 0) {
	          this._currPointList = this._currPointList.concat(this._pointList.slice(-params.right));
	        }

	        if (params.right < 0) {
	          this._currPointList.splice(this._currPointList.length - Math.abs(params.right));
	        }
	      }

	      me._createNodes();

	      me._createTexts();

	      me._grow();
	    }
	  }, {
	    key: "_grow",
	    value: function _grow(callback) {
	      var me = this;

	      if (!me.data.length) {
	        //因为在index中有调用
	        callback && callback(me);
	        return;
	      }

	      function _update(list) {
	        me._bline.context.pointList = _.clone(list);
	        me._bline.context.strokeStyle = me._getLineStrokeStyle(list);
	        me._area.context.path = me._fillLine(me._bline);
	        me._area.context.fillStyle = me._getFillStyle();
	        var iNode = 0;

	        _.each(list, function (point, i) {
	          if (_.isNumber(point[1])) {
	            if (me._nodes) {
	              var _node = me._nodes.getChildAt(iNode);

	              if (_node) {
	                _node.context.x = point[0];
	                _node.context.y = point[1];
	              }
	            }

	            if (me._labels) {
	              var _text = me._labels.getChildAt(iNode);

	              if (_text) {
	                _text.context.x = point[0];
	                _text.context.y = point[1] - 3;

	                me._checkTextPos(_text, i);
	              }
	            }

	            iNode++;
	          }
	        });
	      }
	      this._growTween = AnimationFrame.registTween({
	        from: me._getPointPosStr(me._currPointList),
	        to: me._getPointPosStr(me._pointList),
	        desc: me.field,
	        onUpdate: function onUpdate(arg) {
	          for (var p in arg) {
	            var ind = parseInt(p.split("_")[2]);
	            var xory = parseInt(p.split("_")[1]);
	            me._currPointList[ind] && (me._currPointList[ind][xory] = arg[p]); //p_1_n中间的1代表x or y
	          }

	          _update(me._currPointList);
	        },
	        onComplete: function onComplete() {
	          me.sprite._removeTween(me._growTween);

	          me._growTween = null; //在动画结束后强制把目标状态绘制一次。
	          //解决在onUpdate中可能出现的异常会导致绘制有问题。
	          //这样的话，至少最后的结果会是对的。

	          _update(me._pointList);

	          callback && callback(me);
	        }
	      });

	      this.sprite._tweens.push(this._growTween);
	    }
	  }, {
	    key: "_getPointPosStr",
	    value: function _getPointPosStr(list) {
	      var obj = {};

	      _.each(list, function (p, i) {
	        if (!p) {
	          //折线图中这个节点可能没有
	          return;
	        }
	        obj["p_1_" + i] = p[1]; //p_y==p_1

	        obj["p_0_" + i] = p[0]; //p_x==p_0
	      });

	      return obj;
	    }
	  }, {
	    key: "_getPointList",
	    value: function _getPointList(data) {
	      var list = [];

	      for (var a = 0, al = data.length; a < al; a++) {
	        var o = data[a];
	        list.push([o.x, o.y]);
	      }
	      return list;
	    }
	  }, {
	    key: "_widget",
	    value: function _widget(opt) {
	      var me = this;
	      !opt && (opt = {});
	      me._pointList = this._getPointList(me.data);

	      if (me._pointList.length == 0) {
	        //filter后，data可能length==0
	        return;
	      }
	      var list = [];

	      if (opt.animation) {
	        var firstNode = this._getFirstNode();

	        var firstY = firstNode ? firstNode.y : undefined;

	        for (var a = 0, al = me.data.length; a < al; a++) {
	          var o = me.data[a];
	          list.push([o.x, _.isNumber(o.y) ? firstY : o.y]);
	        }
	      } else {
	        list = me._pointList;
	      }
	      me._currPointList = list;
	      var blineCtx = {
	        pointList: list,
	        lineWidth: me.line.lineWidth,
	        y: me.y,
	        strokeStyle: me._getLineStrokeStyle(list),
	        //_getLineStrokeStyle 在配置线性渐变的情况下会需要
	        smooth: me.line.smooth,
	        lineType: me._getProp(me.line.lineType),
	        smoothFilter: function smoothFilter(rp) {
	          //smooth为true的话，折线图需要对折线做一些纠正，不能超过底部
	          if (rp[1] > 0) {
	            rp[1] = 0;
	          } else if (Math.abs(rp[1]) > me.h) {
	            rp[1] = -me.h;
	          }
	        },
	        lineCap: "round"
	      };
	      var bline = new BrokenLine({
	        //线条
	        context: blineCtx
	      });
	      bline.on(event.types.get(), function (e) {
	        e.eventInfo = {
	          trigger: me.line,
	          nodes: []
	        };

	        me._graphs.app.fire(e.type, e);
	      });

	      if (!this.line.enabled) {
	        bline.context.visible = false;
	      }
	      me.sprite.addChild(bline);
	      me._bline = bline;
	      var area = new Path({
	        //填充
	        context: {
	          path: me._fillLine(bline),
	          fillStyle: me._getFillStyle(),
	          globalAlpha: _.isArray(me.area.alpha) ? 1 : me.area.alpha
	        }
	      });
	      area.on(event.types.get(), function (e) {
	        e.eventInfo = {
	          trigger: me.area,
	          nodes: []
	        };

	        me._graphs.app.fire(e.type, e);
	      });

	      if (!this.area.enabled) {
	        area.context.visible = false;
	      }
	      me.sprite.addChild(area);
	      me._area = area;

	      me._createNodes();

	      me._createTexts();
	    }
	  }, {
	    key: "_getFirstNode",
	    value: function _getFirstNode() {
	      var _firstNode = null;

	      for (var i = 0, l = this.data.length; i < l; i++) {
	        var nodeData = this.data[i];

	        if (_.isNumber(nodeData.y)) {
	          if (_firstNode === null || this._yAxis.align == "right") {
	            //_yAxis为右轴的话，
	            _firstNode = nodeData;
	          }

	          if (this._yAxis.align !== "right" && _firstNode !== null) {
	            break;
	          }
	        }
	      }

	      return _firstNode;
	    }
	  }, {
	    key: "_getFillStyle",
	    value: function _getFillStyle() {
	      var me = this;
	      var fill_gradient = null; // _fillStyle 可以 接受渐变色，可以不用_getColor， _getColor会过滤掉渐变色

	      var _fillStyle = me._getProp(me.area.fillStyle) || me._getLineStrokeStyle(null, "fillStyle");

	      if (_.isArray(me.area.alpha) && !(_fillStyle instanceof CanvasGradient)) {
	        //alpha如果是数组，那么就是渐变背景，那么就至少要有两个值
	        //如果拿回来的style已经是个gradient了，那么就不管了
	        me.area.alpha.length = 2;

	        if (me.area.alpha[0] == undefined) {
	          me.area.alpha[0] = 0;
	        }

	        if (me.area.alpha[1] == undefined) {
	          me.area.alpha[1] = 0;
	        }

	        var topP = _.min(me._bline.context.pointList, function (p) {
	          return p[1];
	        });

	        if (topP[0] === undefined || topP[1] === undefined) {
	          return null;
	        }

	        fill_gradient = me.ctx.createLinearGradient(topP[0], topP[1], topP[0], 0);
	        var rgb = (0, color.colorRgb)(_fillStyle);
	        var rgba0 = rgb.replace(')', ', ' + me._getProp(me.area.alpha[0]) + ')').replace('RGB', 'RGBA');
	        fill_gradient.addColorStop(0, rgba0);
	        var rgba1 = rgb.replace(')', ', ' + me.area.alpha[1] + ')').replace('RGB', 'RGBA');
	        fill_gradient.addColorStop(1, rgba1);
	        _fillStyle = fill_gradient;
	      }
	      return _fillStyle;
	    }
	  }, {
	    key: "_getLineStrokeStyle",
	    value: function _getLineStrokeStyle(pointList, from) {
	      var me = this;

	      var _style;

	      if (!this._opt.line || !this._opt.line.strokeStyle) {
	        //如果用户没有配置line.strokeStyle，那么就用默认的
	        return this.line.strokeStyle;
	      }

	      if (this._opt.line.strokeStyle.lineargradient) {
	        //如果用户配置 填充是一个线性渐变
	        //从bline中找到最高的点
	        !pointList && (pointList = this._bline.context.pointList);

	        var topP = _.min(pointList, function (p) {
	          return p[1];
	        });

	        var bottomP = _.max(pointList, function (p) {
	          return p[1];
	        });

	        if (from == "fillStyle") {
	          bottomP = [0, 0];
	        }

	        if (topP[0] === undefined || topP[1] === undefined || bottomP[1] === undefined) {
	          return null;
	        }
	        //创建一个线性渐变
	        //console.log( topP[0] + "|"+ topP[1]+ "|"+  topP[0]+ "|"+ bottomP[1] )

	        _style = me.ctx.createLinearGradient(topP[0], topP[1], topP[0], bottomP[1]);

	        _.each(this._opt.line.strokeStyle.lineargradient, function (item) {
	          _style.addColorStop(item.position, item.color);
	        });

	        return _style;
	      } else {
	        //构造函数中执行的这个方法，还没有line属性
	        //if( this.line && this.line.strokeStyle ){
	        //    _style = this.line.strokeStyle
	        //} else {
	        _style = this._getColor(this._opt.line.strokeStyle); //}

	        return _style;
	      }
	    }
	  }, {
	    key: "_createNodes",
	    value: function _createNodes() {
	      var me = this;
	      var list = me._currPointList; //if ((me.node.enabled || list.length == 1) && !!me.line.lineWidth) { //拐角的圆点

	      if (!this._nodes) {
	        this._nodes = new _canvax$$1["default"].Display.Sprite({});
	        this.sprite.addChild(this._nodes);
	      }
	      var iNode = 0; //这里不能和下面的a对等，以为list中有很多无效的节点

	      for (var a = 0, al = list.length; a < al; a++) {
	        var _nodeColor = me._getColor(me.node.strokeStyle || me.line.strokeStyle, a);

	        me.data[a].color = _nodeColor; //回写回data里，tips的是用的到

	        if (!me.node.enabled) {
	          //不能写return， 是因为每个data的color还是需要计算一遍
	          continue;
	        }
	        var _point = me._currPointList[a];

	        if (!_point || !_.isNumber(_point[1])) {
	          //折线图中有可能这个point为undefined
	          continue;
	        }
	        var context = {
	          x: _point[0],
	          y: _point[1],
	          r: me._getProp(me.node.radius, a),
	          lineWidth: me._getProp(me.node.lineWidth, a) || 2,
	          strokeStyle: _nodeColor,
	          fillStyle: me._getProp(me.node.fillStyle, a),
	          visible: !!me._getProp(me.node.visible, a)
	        };
	        var nodeConstructor = Circle;

	        var _shapeType = me._getProp(me.node.shapeType, a);

	        if (_shapeType == "isogon") {
	          nodeConstructor = Isogon;
	          context.n = me._getProp(me.node.isogonPointNum, a);
	        }

	        if (_shapeType == "path") {
	          nodeConstructor = Path;
	          context.path = me._getProp(me.node.path, a);
	        }
	        var nodeEl = me._nodes.children[iNode]; //同一个元素，才能直接extend context

	        if (nodeEl) {
	          if (nodeEl.type == _shapeType) {
	            _.extend(nodeEl.context, context);
	          } else {
	            nodeEl.destroy(); //重新创建一个新的元素放到相同位置

	            nodeEl = new nodeConstructor({
	              context: context
	            });

	            me._nodes.addChildAt(nodeEl, iNode);
	          }
	        } else {
	          nodeEl = new nodeConstructor({
	            context: context
	          });

	          me._nodes.addChild(nodeEl);
	        }

	        if (me.node.corner) {
	          //拐角才有节点
	          var y = me._pointList[a][1];
	          var pre = me._pointList[a - 1];
	          var next = me._pointList[a + 1];

	          if (pre && next) {
	            if (y == pre[1] && y == next[1]) {
	              nodeEl.context.visible = false;
	            }
	          }
	        }
	        iNode++;
	      }

	      if (me._nodes.children.length > iNode) {
	        for (var i = iNode, l = me._nodes.children.length; i < l; i++) {
	          me._nodes.children[i].destroy();

	          i--;
	          l--;
	        }
	      }
	    }
	  }, {
	    key: "_createTexts",
	    value: function _createTexts() {
	      var me = this;
	      var list = me._currPointList;

	      if (me.label.enabled) {
	        //节点上面的文本info
	        if (!this._labels) {
	          this._labels = new _canvax$$1["default"].Display.Sprite({});
	          this.sprite.addChild(this._labels);
	        }

	        var iNode = 0; //这里不能和下面的a对等，以为list中有很多无效的节点

	        for (var a = 0, al = list.length; a < al; a++) {
	          var _point = list[a];

	          if (!_point || !_.isNumber(_point[1])) {
	            //折线图中有可能这个point为undefined
	            continue;
	          }
	          var context = {
	            x: _point[0],
	            y: _point[1] - 3,
	            fontSize: this.label.fontSize,
	            textAlign: "center",
	            textBaseline: "bottom",
	            fillStyle: me._getColor(me.label.fontColor, a),
	            lineWidth: 1,
	            strokeStyle: "#ffffff"
	          };
	          var value = me.data[a].value;

	          if (_.isFunction(me.label.format)) {
	            value = me.label.format(value, me.data[a]) || value;
	          }

	          if (value == undefined || value == null) {
	            continue;
	          }
	          var _label = this._labels.children[iNode];

	          if (_label) {
	            _label.resetText(value);

	            _.extend(_label.context, context);
	          } else {
	            _label = new _canvax$$1["default"].Display.Text(value, {
	              context: context
	            });

	            me._labels.addChild(_label);

	            me._checkTextPos(_label, a);
	          }

	          iNode++;
	        }

	        if (me._labels.children.length > iNode) {
	          for (var i = iNode, l = me._labels.children.length; i < l; i++) {
	            me._labels.children[i].destroy();

	            i--;
	            l--;
	          }
	        }
	      }
	    }
	  }, {
	    key: "_checkTextPos",
	    value: function _checkTextPos(_label, ind) {
	      var me = this;
	      var list = me._currPointList;
	      var pre = list[ind - 1];
	      var next = list[ind + 1];

	      if (pre && next && pre[1] < _label.context.y && next[1] < _label.context.y) {
	        _label.context.y += 7;
	        _label.context.textBaseline = "top";
	      }
	    }
	  }, {
	    key: "_fillLine",
	    value: function _fillLine(bline) {
	      //填充直线
	      var fillPath = _.clone(bline.context.pointList);

	      var path = "";
	      var originPos = -this._yAxis.originPos;
	      var _currPath = null;

	      _.each(fillPath, function (point, i) {
	        if (_.isNumber(point[1])) {
	          if (_currPath === null) {
	            _currPath = [];
	          }

	          _currPath.push(point);
	        } else {
	          // not a number
	          if (_currPath && _currPath.length) {
	            getOnePath();
	          }
	        }

	        if (i == fillPath.length - 1 && _.isNumber(point[1])) {
	          getOnePath();
	        }
	      });

	      function getOnePath() {
	        _currPath.push([_currPath[_currPath.length - 1][0], originPos], [_currPath[0][0], originPos], [_currPath[0][0], _currPath[0][1]]);

	        path += (0, tools.getPath)(_currPath);
	        _currPath = null;
	      }

	      return path;
	    } //根据x方向的 val来 获取对应的node， 这个node可能刚好是一个node， 也可能两个node中间的某个位置

	  }, {
	    key: "getNodeInfoOfX",
	    value: function getNodeInfoOfX(x) {
	      var me = this;
	      var nodeInfo;

	      for (var i = 0, l = this.data.length; i < l; i++) {
	        if (this.data[i].value !== null && Math.abs(this.data[i].x - x) <= 1) {
	          //左右相差不到1px的，都算
	          nodeInfo = this.data[i];
	          return nodeInfo;
	        }
	      }

	      var getPointFromXInLine = function getPointFromXInLine(x, line) {
	        var p = {
	          x: x,
	          y: 0
	        };
	        p.y = line[0][1] + (line[1][1] - line[0][1]) / (line[1][0] - line[0][0]) * (x - line[0][0]);
	        return p;
	      };

	      var point;

	      var search = function search(points) {
	        if (x < points[0][0] || x > points.slice(-1)[0][0]) {
	          return;
	        }
	        var midInd = parseInt(points.length / 2);

	        if (Math.abs(points[midInd][0] - x) <= 1) {
	          point = {
	            x: points[midInd][0],
	            y: points[midInd][1]
	          };
	          return;
	        }
	        var _pl = [];

	        if (x > points[midInd][0]) {
	          if (x < points[midInd + 1][0]) {
	            point = getPointFromXInLine(x, [points[midInd], points[midInd + 1]]);
	            return;
	          } else {
	            _pl = points.slice(midInd + 1);
	          }
	        } else {
	          if (x > points[midInd - 1][0]) {
	            point = getPointFromXInLine(x, [points[midInd - 1], points[midInd]]);
	            return;
	          } else {
	            _pl = points.slice(0, midInd);
	          }
	        }
	        search(_pl);
	      };

	      this._bline && search(this._bline.context.pointList);

	      if (!point || point.y == undefined) {
	        return null;
	      }

	      var node = {
	        type: "line",
	        iGroup: me.iGroup,
	        iNode: -1,
	        //并非data中的数据，而是计算出来的数据
	        field: me.field,
	        value: this._yAxis.getValOfPos(-point.y),
	        x: point.x,
	        y: point.y,
	        rowData: null,
	        //非data中的数据，没有rowData
	        color: me._getProp(me.node.strokeStyle) || me._getLineStrokeStyle()
	      };
	      return node;
	    }
	  }]);
	  return LineGraphsGroup;
	}(event.Dispatcher);

	exports["default"] = LineGraphsGroup;
	});

	unwrapExports(group);

	var graphs = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _component = interopRequireDefault(component);

	var _canvax$$1 = interopRequireDefault(_canvax);



	var AnimationFrame = _canvax$$1["default"].AnimationFrame;
	var _ = _canvax$$1["default"]._;

	var GraphsBase =
	/*#__PURE__*/
	function (_Component) {
	  (0, _inherits2["default"])(GraphsBase, _Component);
	  (0, _createClass2["default"])(GraphsBase, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        type: {
	          detail: '绘图组件',
	          "default": "",
	          insertText: "type: ",
	          values: ["bar", "line", "pie", "scat"] //具体的在index中批量设置，

	        },
	        animation: {
	          detail: '是否开启入场动画',
	          "default": true
	        },
	        aniDuration: {
	          detail: '动画时长',
	          "default": 500
	        }
	      };
	    }
	  }]);

	  function GraphsBase(opt, app) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, GraphsBase);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(GraphsBase).call(this, opt, app)); //这里不能把opt个extend进this

	    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(GraphsBase.defaultProps()));

	    _this.name = "graphs"; //这里所有的opts都要透传给 group

	    _this._opt = opt || {};
	    _this.app = app;
	    _this.ctx = app.stage.canvas.getContext("2d");
	    _this.dataFrame = app.dataFrame; //app.dataFrame的引用

	    _this.data = null; //没个graphs中自己_trimGraphs的数据

	    _this.width = 0;
	    _this.height = 0;
	    _this.origin = {
	      x: 0,
	      y: 0
	    };
	    _this.inited = false;
	    _this.sprite = new _canvax$$1["default"].Display.Sprite({
	      name: "graphs_" + opt.type
	    });

	    _this.app.graphsSprite.addChild(_this.sprite);

	    _this._growTween = null;
	    var me = (0, _assertThisInitialized2["default"])(_this);

	    _this.sprite.on("destroy", function () {
	      if (me._growTween) {
	        AnimationFrame.destroyTween(me._growTween);
	        me._growTween = null;
	      }
	    });

	    return _this;
	  }

	  (0, _createClass2["default"])(GraphsBase, [{
	    key: "tipsPointerOf",
	    value: function tipsPointerOf(e) {}
	  }, {
	    key: "tipsPointerHideOf",
	    value: function tipsPointerHideOf(e) {}
	  }, {
	    key: "focusAt",
	    value: function focusAt(ind, field) {}
	  }, {
	    key: "unfocusAt",
	    value: function unfocusAt(ind, field) {}
	  }, {
	    key: "selectAt",
	    value: function selectAt(ind, field) {}
	  }, {
	    key: "unselectAt",
	    value: function unselectAt(ind, field) {} //获取选中的 数据点

	  }, {
	    key: "getSelectedList",
	    value: function getSelectedList() {
	      return [];
	    } //获取选中的 列数据, 比如柱状图中的多分组，选中一列数据，则包函了这分组内的所有柱子

	  }, {
	    key: "getSelectedRowList",
	    value: function getSelectedRowList() {
	      return [];
	    }
	  }, {
	    key: "hide",
	    value: function hide(field) {}
	  }, {
	    key: "show",
	    value: function show(field) {}
	  }, {
	    key: "getLegendData",
	    value: function getLegendData() {} //触发事件, 事件处理函数中的this都指向对应的graphs对象。

	  }, {
	    key: "triggerEvent",
	    value: function triggerEvent(e) {
	      var trigger = e.eventInfo.trigger || this;
	      var fn = trigger["on" + e.type];

	      if (fn && _.isFunction(fn)) {
	        //如果有在pie的配置上面注册对应的事件，则触发
	        if (e.eventInfo && e.eventInfo.nodes && e.eventInfo.nodes.length) {
	          //完整的nodes数据在e.eventInfo中有，但是添加第二个参数，如果nodes只有一个数据就返回单个，多个则数组
	          if (e.eventInfo.nodes.length == 1) {
	            fn.apply(this, [e, e.eventInfo.nodes[0]]);
	          } else {
	            fn.apply(this, [e, e.eventInfo.nodes]);
	          }
	        } else {
	          /*
	          let _arr = [];
	          _.each( arguments, function(item, i){
	              if( !!i ){
	                  _arr.push( item );
	              }
	          } );
	          */
	          fn.apply(this, arguments);
	        }
	      }
	    } //所有graphs默认的grow

	  }, {
	    key: "grow",
	    value: function grow(callback, opt) {
	      !opt && (opt = {});
	      var me = this;
	      var duration = this.aniDuration;

	      if (!this.animation) {
	        duration = 0;
	      }
	      var from = 0;
	      var to = 1;
	      if ("from" in opt) from = opt.from;
	      if ("to" in opt) to = opt.to;
	      this._growTween = AnimationFrame.registTween({
	        from: {
	          process: from
	        },
	        to: {
	          process: to
	        },
	        duration: duration,
	        onUpdate: function onUpdate(status) {
	          _.isFunction(callback) && callback(status.process);
	        },
	        onComplete: function onComplete() {
	          this._growTween = null;
	          me.fire("complete");
	        }
	      });
	    }
	  }]);
	  return GraphsBase;
	}(_component["default"]);

	exports["default"] = GraphsBase;
	});

	unwrapExports(graphs);

	var line = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _group = interopRequireDefault(group);

	var _index = interopRequireDefault(graphs);





	var LineGraphs =
	/*#__PURE__*/
	function (_GraphsBase) {
	  (0, _inherits2["default"])(LineGraphs, _GraphsBase);
	  (0, _createClass2["default"])(LineGraphs, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        field: {
	          detail: '字段配置，支持二维数组格式',
	          "default": null
	        },
	        yAxisAlign: {
	          detail: '绘制在哪根y轴上面',
	          "default": 'left'
	        },
	        _props: [_group["default"]]
	      };
	    }
	  }]);

	  function LineGraphs(opt, app) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, LineGraphs);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LineGraphs).call(this, opt, app));
	    _this.type = "line";
	    _this.enabledField = null;
	    _this.groups = []; //群组集合

	    _canvax._.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(LineGraphs.defaultProps()), opt);

	    _this.init();

	    return _this;
	  }

	  (0, _createClass2["default"])(LineGraphs, [{
	    key: "init",
	    value: function init() {}
	  }, {
	    key: "draw",
	    value: function draw(opt) {
	      !opt && (opt = {});
	      this.width = opt.width;
	      this.height = opt.height;

	      _canvax._.extend(true, this.origin, opt.origin);

	      this.sprite.context.x = this.origin.x;
	      this.sprite.context.y = this.origin.y;
	      this.data = this._trimGraphs();

	      this._setGroupsForYfield(this.data, null, opt); //this.grow();


	      if (this.animation && !opt.resize) {
	        this.grow();
	      } else {
	        this.fire("complete");
	      }

	      return this;
	    }
	  }, {
	    key: "resetData",
	    value: function resetData(dataFrame, dataTrigger) {
	      var me = this;

	      if (dataFrame) {
	        me.dataFrame = dataFrame;
	        me.data = me._trimGraphs();
	      }

	      _canvax._.each(me.groups, function (g) {
	        g.resetData(me.data[g.field].data, dataTrigger);
	      });
	    }
	  }, {
	    key: "setEnabledField",
	    value: function setEnabledField() {
	      //要根据自己的 field，从enabledFields中根据enabled数据，计算一个 enabled版本的field子集
	      this.enabledField = this.app.getComponent({
	        name: 'coord'
	      }).filterEnabledFields(this.field);
	    } //dataFrame

	  }, {
	    key: "_trimGraphs",
	    value: function _trimGraphs() {
	      var me = this;

	      var _coord = this.app.getComponent({
	        name: 'coord'
	      }); //{"uv":{}.. ,"click": "pv":]}
	      //这样按照字段摊平的一维结构


	      var tmpData = {};
	      me.setEnabledField();

	      _canvax._.each(_canvax._.flatten(me.enabledField), function (field, i) {
	        //let maxValue = 0;
	        var fieldMap = me.app.getComponent({
	          name: 'coord'
	        }).getFieldMapOf(field); //单条line的全部data数据

	        var _lineData = me.dataFrame.getFieldData(field);

	        if (!_lineData) return; //console.log( JSON.stringify( _lineData ) )

	        var _data = [];

	        for (var b = 0, bl = _lineData.length; b < bl; b++) {
	          //返回一个和value的结构对应的point结构{x:  y: }
	          var point = _coord.getPoint({
	            iNode: b,
	            field: field,
	            value: {
	              //x:
	              y: _lineData[b]
	            }
	          });

	          var node = {
	            type: "line",
	            iGroup: i,
	            iNode: b,
	            field: field,
	            value: _lineData[b],
	            x: point.pos.x,
	            y: point.pos.y,
	            rowData: me.dataFrame.getRowDataAt(b),
	            color: fieldMap.color //默认设置皮肤颜色，动态的在group里面会被修改

	          };

	          _data.push(node);
	        }
	        tmpData[field] = {
	          yAxis: fieldMap.yAxis,
	          field: field,
	          data: _data
	        };
	      });

	      return tmpData;
	    }
	    /**
	     * 生长动画
	     */

	  }, {
	    key: "grow",
	    value: function grow(callback) {
	      var gi = 0;
	      var gl = this.groups.length;
	      var me = this;

	      _canvax._.each(this.groups, function (g) {
	        g._grow(function () {
	          gi++;
	          callback && callback(g);

	          if (gi == gl) {
	            me.fire("complete");
	          }
	        });
	      });

	      return this;
	    }
	  }, {
	    key: "show",
	    value: function show(field) {
	      var me = this; //这个field不再这个graphs里面的，不相关

	      if (_canvax._.indexOf(_canvax._.flatten([me.field]), field) == -1) {
	        return;
	      }
	      this.data = this._trimGraphs();

	      this._setGroupsForYfield(this.data, field);

	      _canvax._.each(this.groups, function (g) {
	        g.resetData(me.data[g.field].data);
	      });
	    }
	  }, {
	    key: "hide",
	    value: function hide(field) {
	      var me = this;
	      var i = me.getGroupIndex(field);

	      if (!this.groups.length || i < 0) {
	        return;
	      }
	      this.groups.splice(i, 1)[0].destroy();
	      this.data = this._trimGraphs();

	      _canvax._.each(this.groups, function (g) {
	        g.resetData(me.data[g.field].data);
	      });
	    }
	  }, {
	    key: "getGroupIndex",
	    value: function getGroupIndex(field) {
	      var ind = -1;

	      for (var i = 0, l = this.groups.length; i < l; i++) {
	        if (this.groups[i].field === field) {
	          ind = i;
	          break;
	        }
	      }

	      return ind;
	    }
	  }, {
	    key: "getGroup",
	    value: function getGroup(field) {
	      return this.groups[this.getGroupIndex(field)];
	    }
	  }, {
	    key: "_setGroupsForYfield",
	    value: function _setGroupsForYfield(data, fields, opt) {
	      var me = this;
	      !opt && (opt = {});

	      if (fields) {
	        //如果有传入field参数，那么就说明只需要从data里面挑选指定的field来添加
	        //一般用在add()执行的时候
	        fields = _canvax._.flatten([fields]);
	      }

	      var _flattenField = _canvax._.flatten([this.field]);

	      _canvax._.each(data, function (g, field) {
	        if (fields && _canvax._.indexOf(fields, field) == -1) {
	          //如果有传入fields，但是当前field不在fields里面的话，不需要处理
	          //说明该group已经在graphs里面了
	          return;
	        }
	        var fieldMap = me.app.getComponent({
	          name: 'coord'
	        }).getFieldMapOf(field); //iGroup 是这条group在本graphs中的ind，而要拿整个图表层级的index， 就是fieldMap.ind

	        var iGroup = _canvax._.indexOf(_flattenField, field);

	        var group$$1 = new _group["default"](fieldMap, iGroup, //不同于fieldMap.ind
	        me._opt, me.ctx, me.height, me.width, me);
	        group$$1.draw({
	          animation: me.animation && !opt.resize
	        }, g.data);
	        var insert = false; //在groups数组中插入到比自己_groupInd小的元素前面去

	        for (var gi = 0, gl = me.groups.length; gi < gl; gi++) {
	          if (iGroup < me.groups[gi].iGroup) {
	            me.groups.splice(gi, 0, group$$1);
	            insert = true;
	            me.sprite.addChildAt(group$$1.sprite, gi);
	            break;
	          }
	        }

	        if (!insert) {
	          me.groups.push(group$$1);
	          me.sprite.addChild(group$$1.sprite);
	        }
	      });
	    }
	  }, {
	    key: "getNodesAt",
	    value: function getNodesAt(ind, e) {
	      var _nodesInfoList = []; //节点信息集合

	      _canvax._.each(this.groups, function (group$$1) {
	        var node = group$$1.getNodeInfoAt(ind, e);
	        node && _nodesInfoList.push(node);
	      });

	      return _nodesInfoList;
	    }
	  }, {
	    key: "getNodesOfPos",
	    value: function getNodesOfPos(x) {
	      var _nodesInfoList = []; //节点信息集合

	      _canvax._.each(this.groups, function (group$$1) {
	        var node = group$$1.getNodeInfoOfX(x);
	        node && _nodesInfoList.push(node);
	      });

	      return _nodesInfoList;
	    }
	  }]);
	  return LineGraphs;
	}(_index["default"]);

	_index["default"].registerComponent(LineGraphs, 'graphs', 'line');

	var _default = LineGraphs;
	exports["default"] = _default;
	});

	unwrapExports(line);

	var trigger = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	/**
	 * 每个组件中对外影响的时候，要抛出一个trigger对象
	 * 上面的comp属性就是触发这个trigger的组件本身
	 * params属性则是这次trigger的一些动作参数
	 * 目前legend和datazoom组件都有用到
	 */
	var Trigger = function Trigger(comp) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  (0, _classCallCheck2["default"])(this, Trigger);
	  this.comp = comp;
	  this.params = params;
	};

	exports["default"] = Trigger;
	});

	unwrapExports(trigger);

	var legend = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _component = interopRequireDefault(component);

	var _canvax$$1 = interopRequireDefault(_canvax);

	var _trigger = interopRequireDefault(trigger);



	var _ = _canvax$$1["default"]._,
	    event = _canvax$$1["default"].event;
	var Circle = _canvax$$1["default"].Shapes.Circle;

	var Legend =
	/*#__PURE__*/
	function (_Component) {
	  (0, _inherits2["default"])(Legend, _Component);
	  (0, _createClass2["default"])(Legend, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        data: {
	          detail: '图例数据',
	          "default": [],
	          documentation: '\
                    数据结构为：{name: "uv", color: "#ff8533", field: "" ...}\
                    如果手动传入数据只需要前面这三个 enabled: true, ind: 0\
                    外部只需要传field和fillStyle就行了\
                    '
	        },
	        position: {
	          detail: '图例位置',
	          documentation: '图例所在的方向top,right,bottom,left',
	          "default": 'top'
	        },
	        direction: {
	          detail: '图例布局方向',
	          "default": 'h',
	          documentation: '横向 top,bottom --> h left,right -- >v'
	        },
	        textAlign: {
	          detail: '水平方向的对其，默认居左对其',
	          "default": 'left',
	          documentation: '可选left，center，right'
	        },
	        verticalAlign: {
	          detail: '垂直方向的对其方式，默认居中（待实现）',
	          "default": 'middle',
	          documentation: '可选top，middle，bottom'
	        },
	        icon: {
	          detail: '图标设置',
	          propertys: {
	            height: {
	              detail: '高',
	              "default": 26
	            },
	            width: {
	              detail: '图标宽',
	              "default": 'auto'
	            },
	            shapeType: {
	              detail: '图标的图形类型，目前只实现了圆形',
	              "default": 'circle'
	            },
	            radius: {
	              detail: '图标（circle）半径',
	              "default": 5
	            },
	            lineWidth: {
	              detail: '图标描边宽度',
	              "default": 1
	            },
	            fillStyle: {
	              detail: '图标颜色，一般会从data里面取，这里是默认色',
	              "default": '#999'
	            }
	          }
	        },
	        label: {
	          detail: '文本配置',
	          propertys: {
	            textAlign: {
	              detail: '水平对齐方式',
	              "default": 'left'
	            },
	            textBaseline: {
	              detail: '文本基线对齐方式',
	              "default": 'middle'
	            },
	            fontColor: {
	              detail: '文本颜色',
	              "default": '#333333'
	            },
	            cursor: {
	              detail: '鼠标样式',
	              "default": 'pointer'
	            },
	            format: {
	              detail: '文本格式化处理函数',
	              "default": null
	            }
	          }
	        },
	        activeEnabled: {
	          detail: '是否启动图例的',
	          "default": true
	        },
	        tipsEnabled: {
	          detail: '是否开启图例的tips',
	          "default": false
	        }
	      };
	    }
	  }]);

	  function Legend(opt, app) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, Legend);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Legend).call(this, opt, app));
	    _this.name = "legend";

	    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Legend.defaultProps()), opt);
	    /* data的数据结构为
	    [
	        //descartes中用到的时候还会带入yAxis
	        {name: "uv", color: "#ff8533", field: '' ...如果手动传入数据只需要前面这三个 enabled: true, ind: 0, } //外部只需要传field和fillStyle就行了 activate是内部状态
	    ]
	    */


	    _this.data = _this._getLegendData(opt); //this.position = "top" ; //图例所在的方向top,right,bottom,left
	    //this.direction = "h"; //横向 top,bottom --> h left,right -- >v

	    if (!opt.direction && opt.position) {
	      if (_this.position == "left" || _this.position == "right") {
	        _this.direction = 'v';
	      } else {
	        _this.direction = 'h';
	      }
	    }
	    _this.sprite = new _canvax$$1["default"].Display.Sprite({
	      id: "LegendSprite",
	      context: {
	        x: _this.pos.x,
	        y: _this.pos.y
	      }
	    });

	    _this.app.stage.addChild(_this.sprite);

	    _this.widget(); //图例是需要自己绘制完成后，才能拿到高宽来设置自己的位置


	    _this.layout();

	    return _this;
	  }

	  (0, _createClass2["default"])(Legend, [{
	    key: "_getLegendData",
	    value: function _getLegendData(opt) {
	      var legendData = opt.data;

	      if (legendData) {
	        _.each(legendData, function (item, i) {
	          item.enabled = true;
	          item.ind = i;
	        }); //delete opt.data;

	      } else {
	        legendData = this.app.getLegendData();
	      }
	      return legendData || [];
	    }
	  }, {
	    key: "layout",
	    value: function layout() {
	      var app = this.app;
	      var width = this.width + this.margin.left + this.margin.right;
	      var height = this.height + this.margin.top + this.margin.bottom;
	      var x = app.padding.left;
	      var y = app.padding.top;

	      if (this.position == "right") {
	        x = app.width - app.padding.right - width;
	      }

	      if (this.position == "bottom") {
	        y = app.height - app.padding.bottom - height / 2; //TODO:这样的设置到了中线了
	      }
	      var layoutWidth, layoutHeight; //然后把app的padding扩展开来

	      if (this.position == "left" || this.position == "right") {
	        // v
	        app.padding[this.position] += width;
	        layoutWidth = width;
	        layoutHeight = app.height - app.padding.top - app.padding.bottom;
	      } else if (this.position == "top" || this.position == "bottom") {
	        // h
	        app.padding[this.position] += height;
	        layoutWidth = app.width - app.padding.right - app.padding.left;
	        layoutHeight = height;
	      }

	      if (this.textAlign == 'center') {
	        x += layoutWidth / 2 - this.width / 2;
	      }

	      if (this.textAlign == 'right') {
	        x += layoutWidth - this.width;
	      }
	      this.pos = {
	        x: x,
	        y: y
	      };
	      return this.pos;
	    }
	  }, {
	    key: "draw",
	    value: function draw() {
	      //为了在直角坐标系中，让 textAlign left的时候，图例和坐标系左侧对齐， 好看点, 用心良苦啊
	      var _coord = this.app.getComponent({
	        name: 'coord'
	      });

	      if (_coord && _coord.type == 'rect') {
	        if (this.textAlign == "left" && (this.position == "top" || this.position == "bottom")) {
	          this.pos.x = _coord.getSizeAndOrigin().origin.x + this.icon.radius;
	        }
	      }
	      this.setPosition();
	    }
	  }, {
	    key: "widget",
	    value: function widget() {
	      var me = this;
	      var viewWidth = this.app.width - this.app.padding.left - this.app.padding.right;
	      var viewHeight = this.app.height - this.app.padding.top - this.app.padding.bottom;
	      var maxItemWidth = 0;
	      var width = 0,
	          height = 0;
	      var x = 0,
	          y = 0;
	      var rows = 1;
	      var isOver = false; //如果legend过多

	      _.each(this.data, function (obj, i) {
	        if (isOver) return;

	        var _icon = new Circle({
	          id: "legend_field_icon_" + i,
	          context: {
	            x: 0,
	            y: me.icon.height / 3,
	            fillStyle: !obj.enabled ? "#ccc" : obj.color || "#999",
	            r: me.icon.radius,
	            cursor: "pointer"
	          }
	        });

	        _icon.on(event.types.get(), function (e) {//... 代理到sprit上面处理
	        });

	        var _text = obj.name;

	        if (me.label.format) {
	          _text = me.label.format(obj.name, obj);
	        }
	        var txt = new _canvax$$1["default"].Display.Text(_text, {
	          id: "legend_field_txt_" + i,
	          context: {
	            x: me.icon.radius + 3,
	            y: me.icon.height / 3,
	            textAlign: me.label.textAlign,
	            //"left",
	            textBaseline: me.label.textBaseline,
	            //"middle",
	            fillStyle: me.label.fontColor,
	            //"#333", //obj.color
	            cursor: me.label.cursor //"pointer"

	          }
	        });
	        txt.on(event.types.get(), function (e) {//... 代理到sprit上面处理
	        });
	        var txtW = txt.getTextWidth();
	        var itemW = txtW + me.icon.radius * 2 + 20;
	        maxItemWidth = Math.max(maxItemWidth, itemW);
	        var spItemC = {
	          height: me.icon.height
	        };

	        if (me.direction == "v") {
	          if (y + me.icon.height > viewHeight) {
	            if (x > viewWidth * 0.3) {
	              isOver = true;
	              return;
	            }
	            x += maxItemWidth;
	            y = 0;
	          }
	          spItemC.x = x;
	          spItemC.y = y;
	          y += me.icon.height;
	          height = Math.max(height, y);
	        } else {
	          //横向排布
	          if (x + itemW > viewWidth) {
	            if (me.icon.height * (rows + 1) > viewHeight * 0.3) {
	              isOver = true;
	              return;
	            }
	            x = 0;
	            rows++;
	          }
	          spItemC.x = x;
	          spItemC.y = me.icon.height * (rows - 1);
	          x += itemW;
	          width = Math.max(width, x);
	        }
	        var sprite = new _canvax$$1["default"].Display.Sprite({
	          id: "legend_field_" + i,
	          context: spItemC
	        });
	        sprite.addChild(_icon);
	        sprite.addChild(txt);
	        sprite.context.width = itemW;
	        me.sprite.addChild(sprite);
	        sprite.on(event.types.get(), function (e) {
	          if (e.type == "click" && me.activeEnabled) {
	            //只有一个field的时候，不支持取消
	            if (_.filter(me.data, function (obj) {
	              return obj.enabled;
	            }).length == 1) {
	              if (obj.enabled) {
	                return;
	              }
	            }
	            obj.enabled = !obj.enabled;
	            _icon.context.fillStyle = !obj.enabled ? "#ccc" : obj.color || "#999";

	            if (obj.enabled) {
	              me.app.show(obj.name, new _trigger["default"](this, obj));
	            } else {
	              me.app.hide(obj.name, new _trigger["default"](this, obj));
	            }
	          }

	          if (me.tipsEnabled) {
	            if (e.type == 'mouseover' || e.type == 'mousemove') {
	              e.eventInfo = me._getInfoHandler(e, obj);
	            }

	            if (e.type == 'mouseout') {
	              delete e.eventInfo;
	            }
	            me.app.fire(e.type, e);
	          }
	        });
	      });

	      if (this.direction == "h") {
	        me.width = me.sprite.context.width = width;
	        me.height = me.sprite.context.height = me.icon.height * rows;
	      } else {
	        me.width = me.sprite.context.width = x + maxItemWidth;
	        me.height = me.sprite.context.height = height;
	      } //me.width = me.sprite.context.width  = width;
	      //me.height = me.sprite.context.height = height;

	    }
	  }, {
	    key: "_getInfoHandler",
	    value: function _getInfoHandler(e, data) {
	      return {
	        type: "legend",
	        triggerType: 'legend',
	        trigger: this,
	        tipsEnabled: this.tipsEnabled,
	        //title : data.name,
	        nodes: [{
	          name: data.name,
	          fillStyle: data.color
	        }]
	      };
	    }
	  }]);
	  return Legend;
	}(_component["default"]);

	_component["default"].registerComponent(Legend, 'legend');

	var _default = Legend;
	exports["default"] = _default;
	});

	unwrapExports(legend);

	var tips = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _typeof2 = interopRequireDefault(_typeof_1$1);

	var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

	var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

	var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

	var _createClass2 = interopRequireDefault(createClass$1);

	var _inherits2 = interopRequireDefault(inherits$1);

	var _component = interopRequireDefault(component);

	var _canvax$$1 = interopRequireDefault(_canvax);



	var _ = _canvax$$1["default"]._;
	var Rect = _canvax$$1["default"].Shapes.Rect;
	var Line = _canvax$$1["default"].Shapes.Line;

	var Tips =
	/*#__PURE__*/
	function (_Component) {
	  (0, _inherits2["default"])(Tips, _Component);
	  (0, _createClass2["default"])(Tips, null, [{
	    key: "defaultProps",
	    value: function defaultProps() {
	      return {
	        enabled: {
	          detail: '是否开启Tips',
	          "default": true
	        },
	        content: {
	          detail: '自定义tips的内容（html）',
	          "default": null
	        },
	        borderRadius: {
	          detail: 'tips的边框圆角半径',
	          "default": 5
	        },
	        strokeStyle: {
	          detail: 'tips边框颜色',
	          "default": '#ccc'
	        },
	        fillStyle: {
	          detail: 'tips背景色',
	          "default": 'rgba(255,255,255,0.95)'
	        },
	        fontColor: {
	          detail: 'tips文本颜色',
	          "default": '#999999'
	        },
	        positionOfPoint: {
	          detail: 'tips在触发点的位置，默认在右侧',
	          "default": 'right'
	        },
	        offsetX: {
	          detail: 'tips内容到鼠标位置的偏移量x',
	          "default": 10
	        },
	        offsetY: {
	          detail: 'tips内容到鼠标位置的偏移量y',
	          "default": 10
	        },
	        positionInRange: {
	          detail: 'tip的浮层是否限定在画布区域(废弃)',
	          "default": false
	        },
	        pointer: {
	          detail: '触发tips的时候的指针样式',
	          "default": 'line',
	          documentation: 'tips的指针,默认为直线，可选为："line" | "region"(柱状图中一般用region)'
	        },
	        pointerAnim: {
	          detail: 'tips移动的时候，指针是否开启动画',
	          "default": true
	        }
	      };
	    }
	  }]);

	  function Tips(opt, app) {
	    var _this;

	    (0, _classCallCheck2["default"])(this, Tips);
	    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Tips).call(this, opt, app));
	    _this.name = "tips";
	    _this.tipDomContainer = _this.app.canvax.domView;
	    _this.cW = 0; //容器的width

	    _this.cH = 0; //容器的height

	    _this.dW = 0; //html的tips内容width

	    _this.dH = 0; //html的tips内容Height

	    _this._tipDom = null;
	    _this._tipsPointer = null; //所有调用tip的 event 上面 要附带有符合下面结构的eventInfo属性
	    //会deepExtend到this.indo上面来

	    _this.eventInfo = null;
	    _this.sprite = null;
	    _this.sprite = new _canvax$$1["default"].Display.Sprite({
	      id: "TipSprite"
	    });

	    _this.app.stage.addChild(_this.sprite);

	    var me = (0, _assertThisInitialized2["default"])(_this);

	    _this.sprite.on("destroy", function () {
	      me._tipDom = null;
	    });

	    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Tips.defaultProps()), opt);

	    return _this;
	  }

	  (0, _createClass2["default"])(Tips, [{
	    key: "show",
	    value: function show(e) {
	      if (!this.enabled) return;

	      if (e.eventInfo) {
	        this.eventInfo = e.eventInfo; //TODO:这里要优化，canvax后续要提供直接获取canvax实例的方法

	        var stage = e.target.getStage();

	        if (stage) {
	          this.cW = stage.context.width;
	          this.cH = stage.context.height;
	        } else {
	          if (e.target.type == 'canvax') {
	            this.cW = e.target.width;
	            this.cH = e.target.height;
	          }
	        }

	        var content = this._setContent(e);

	        if (content) {
	          this._setPosition(e);

	          this.sprite.toFront(); //比如散点图，没有hover到点的时候，也要显示，所有放到最下面
	          //反之，如果只有hover到点的时候才显示point，那么就放这里
	          //this._tipsPointerShow(e);
	        } else {
	          this.hide(e);
	        }
	      }

	      this._tipsPointerShow(e);
	    }
	  }, {
	    key: "move",
	    value: function move(e) {
	      if (!this.enabled) return;

	      if (e.eventInfo) {
	        this.eventInfo = e.eventInfo;

	        var content = this._setContent(e);

	        if (content) {
	          this._setPosition(e); //比如散点图，没有hover到点的时候，也要显示，所有放到最下面
	          //反之，如果只有hover到点的时候才显示point，那么就放这里
	          //this._tipsPointerMove(e)

	        } else {
	          //move的时候hide的只有dialogTips, pointer不想要隐藏
	          //this.hide();
	          this._hideDialogTips();
	        }
	      }

	      this._tipsPointerMove(e);
	    }
	  }, {
	    key: "hide",
	    value: function hide(e) {
	      if (!this.enabled) return;

	      this._hideDialogTips(e);

	      this._tipsPointerHide(e);
	    }
	  }, {
	    key: "_hideDialogTips",
	    value: function _hideDialogTips() {
	      if (this.eventInfo) {
	        this.eventInfo = null;
	        this.sprite.removeAllChildren();

	        this._removeContent();
	      }
	    }
	    /**
	     *@pos {x:0,y:0}
	     */

	  }, {
	    key: "_setPosition",
	    value: function _setPosition(e) {
	      //tips直接修改为fixed，所以定位直接用e.x e.y 2020-02-27
	      if (!this.enabled) return;
	      if (!this._tipDom) return;

	      var x = this._checkX(e.clientX + this.offsetX);

	      var y = this._checkY(e.clientY + this.offsetY);

	      this._tipDom.style.cssText += ";visibility:visible;left:" + x + "px;top:" + y + "px;";

	      if (this.positionOfPoint == "left") {
	        this._tipDom.style.left = this._checkX(e.x - this.offsetX - this._tipDom.offsetWidth) + "px";
	      }
	    }
	    /**
	     *content相关-------------------------
	     */

	  }, {
	    key: "_creatTipDom",
	    value: function _creatTipDom(e) {
	      this._tipDom = document.createElement("div");
	      this._tipDom.className = "chart-tips";
	      this._tipDom.style.cssText += "; border-radius:" + this.borderRadius + "px;background:" + this.fillStyle + ";border:1px solid " + this.strokeStyle + ";visibility:hidden;position:fixed;enabled:inline-block;*enabled:inline;*zoom:1;padding:6px;color:" + this.fontColor + ";line-height:1.5";
	      this._tipDom.style.cssText += "; box-shadow:1px 1px 3px " + this.strokeStyle + ";";
	      this._tipDom.style.cssText += "; border:none;white-space:nowrap;word-wrap:normal;";
	      this._tipDom.style.cssText += "; text-align:left;pointer-events:none;";
	      this._tipDom.style.cssText += "; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;";
	      this.tipDomContainer.appendChild(this._tipDom);
	    }
	  }, {
	    key: "_removeContent",
	    value: function _removeContent() {
	      if (!this._tipDom) return;
	      this.tipDomContainer.removeChild(this._tipDom);
	      this._tipDom = null;
	    }
	  }, {
	    key: "_setContent",
	    value: function _setContent(e) {
	      var tipxContent = this._getContent(e);

	      if (!tipxContent && tipxContent !== 0) {
	        return;
	      }

	      if (!this._tipDom) {
	        this._creatTipDom(e);
	      }
	      this._tipDom.innerHTML = tipxContent;
	      this.dW = this._tipDom.offsetWidth;
	      this.dH = this._tipDom.offsetHeight;
	      return tipxContent;
	    }
	  }, {
	    key: "_getContent",
	    value: function _getContent(e) {
	      var tipsContent;

	      if (this.content) {
	        tipsContent = _.isFunction(this.content) ? this.content(e.eventInfo, e) : this.content;
	      } else {
	        tipsContent = this._getDefaultContent(e.eventInfo);
	      }
	      return tipsContent;
	    }
	  }, {
	    key: "_getDefaultContent",
	    value: function _getDefaultContent(info) {
	      var str = "";

	      if (!info.nodes.length) {
	        return str;
	      }

	      if (info.title !== undefined && info.title !== null && info.title !== "") {
	        str += "<div style='font-size:14px;border-bottom:1px solid #f0f0f0;padding:4px;margin-bottom:6px;'>" + info.title + "</div>";
	      }

	      _.each(info.nodes, function (node, i) {
	        /*
	        if (!node.value && node.value !== 0) {
	            return;
	        };
	        */
	        var style = node.color || node.fillStyle || node.strokeStyle;
	        var name = node.name || node.field || node.content;
	        var value = (0, _typeof2["default"])(node.value) == "object" ? JSON.stringify(node.value) : (0, tools.numAddSymbol)(node.value);
	        var hasVal = node.value || node.value == 0;
	        str += "<div style='line-height:1.5;font-size:12px;padding:0 4px;'>";

	        if (style) {
	          str += "<span style='background:" + style + ";margin-right:8px;margin-top:7px;float:left;width:8px;height:8px;border-radius:4px;overflow:hidden;font-size:0;'></span>";
	        }

	        if (name) {
	          str += "<span style='margin-right:5px;'>" + name;
	          hasVal && (str += "：");
	          str += "</span>";
	        }
	        hasVal && (str += value);
	        str += "</div>";
	      });

	      return str;
	    }
	    /**
	     *检测是x方向超过了视窗
	     */

	  }, {
	    key: "_checkX",
	    value: function _checkX(x) {
	      var w = this.dW + 2; //后面的2 是 两边的 linewidth

	      var scrollLeft = document.body.scrollLeft;
	      var clientWidth = document.body.clientWidth;

	      if (x < scrollLeft) {
	        x = scrollLeft;
	      } else if (x + w > clientWidth) {
	        x = scrollLeft + (clientWidth - w);
	      }

	      return x;
	    }
	    /**
	     *检测是y方向超过了视窗
	     */

	  }, {
	    key: "_checkY",
	    value: function _checkY(y) {
	      var h = this.dH + 2; //后面的2 是 两边的 linewidth

	      var scrollTop = document.body.scrollTop;
	      var clientHeight = document.body.clientHeight;

	      if (y < scrollTop) {
	        y = scrollTop;
	      } else if (y + h > clientHeight) {
	        y = scrollTop + (clientHeight - h);
	      }

	      return y;
	    }
	  }, {
	    key: "_tipsPointerShow",
	    value: function _tipsPointerShow(e) {
	      //legend等组件上面的tips是没有xAxis等轴信息的
	      if (!e.eventInfo || !e.eventInfo.xAxis) {
	        return;
	      }

	      var _coord = this.app.getComponent({
	        name: 'coord'
	      }); //目前只实现了直角坐标系的tipsPointer


	      if (!_coord || _coord.type != 'rect') return;
	      if (!this.pointer) return;
	      var el = this._tipsPointer;
	      var y = _coord.origin.y - _coord.height;
	      var x = 0;

	      if (this.pointer == "line") {
	        x = _coord.origin.x + e.eventInfo.xAxis.x;
	      }

	      if (this.pointer == "region") {
	        var regionWidth = _coord._xAxis.getCellLengthOfPos(e.eventInfo.xAxis.x);

	        x = _coord.origin.x + e.eventInfo.xAxis.x - regionWidth / 2;

	        if (e.eventInfo.xAxis.ind < 0) {
	          //当没有任何数据的时候， e.eventInfo.xAxis.ind==-1
	          x = _coord.origin.x;
	        }
	      }

	      if (!el) {
	        if (this.pointer == "line") {
	          el = new Line({
	            //xyToInt : false,
	            context: {
	              x: x,
	              y: y,
	              start: {
	                x: 0,
	                y: 0
	              },
	              end: {
	                x: 0,
	                y: _coord.height
	              },
	              lineWidth: 1,
	              strokeStyle: "#cccccc"
	            }
	          });
	        }

	        if (this.pointer == "region") {
	          var _regionWidth = _coord._xAxis.getCellLengthOfPos(x);

	          el = new Rect({
	            //xyToInt : false,
	            context: {
	              width: _regionWidth,
	              height: _coord.height,
	              x: x,
	              y: y,
	              fillStyle: "#cccccc",
	              globalAlpha: 0.3
	            }
	          });
	        }
	        this.app.graphsSprite.addChild(el, 0);
	        this._tipsPointer = el;
	      } else {
	        if (this.pointerAnim && _coord._xAxis.layoutType != "proportion") {
	          if (el.__animation) {
	            el.__animation.stop();
	          }
	          el.__animation = el.animate({
	            x: x,
	            y: y
	          }, {
	            duration: 200
	          });
	        } else {
	          el.context.x = x;
	          el.context.y = y;
	        }
	      }
	    }
	  }, {
	    key: "_tipsPointerHide",
	    value: function _tipsPointerHide(e) {
	      //legend等组件上面的tips是没有xAxis等轴信息的
	      if (!e.eventInfo || !e.eventInfo.xAxis) {
	        return;
	      }

	      var _coord = this.app.getComponent({
	        name: 'coord'
	      }); //目前只实现了直角坐标系的tipsPointer


	      if (!_coord || _coord.type != 'rect') return;
	      if (!this.pointer || !this._tipsPointer) return; //console.log("hide");

	      this._tipsPointer.destroy();

	      this._tipsPointer = null;
	    }
	  }, {
	    key: "_tipsPointerMove",
	    value: function _tipsPointerMove(e) {
	      //legend等组件上面的tips是没有xAxis等轴信息的
	      if (!e.eventInfo || !e.eventInfo.xAxis) {
	        return;
	      }

	      var _coord = this.app.getComponent({
	        name: 'coord'
	      }); //目前只实现了直角坐标系的tipsPointer


	      if (!_coord || _coord.type != 'rect') return;
	      if (!this.pointer || !this._tipsPointer) return; //console.log("move");

	      var el = this._tipsPointer;
	      var x = _coord.origin.x + e.eventInfo.xAxis.x;

	      if (this.pointer == "region") {
	        var regionWidth = _coord._xAxis.getCellLengthOfPos(e.eventInfo.xAxis.x);

	        x = _coord.origin.x + e.eventInfo.xAxis.x - regionWidth / 2;

	        if (e.eventInfo.xAxis.ind < 0) {
	          //当没有任何数据的时候， e.eventInfo.xAxis.ind==-1
	          x = _coord.origin.x;
	        }
	      }
	      var y = _coord.origin.y - _coord.height;

	      if (x == el.__targetX) {
	        return;
	      }

	      if (this.pointerAnim && _coord._xAxis.layoutType != "proportion") {
	        if (el.__animation) {
	          el.__animation.stop();
	        }
	        el.__targetX = x;
	        el.__animation = el.animate({
	          x: x,
	          y: y
	        }, {
	          duration: 200,
	          onComplete: function onComplete() {
	            delete el.__targetX;
	            delete el.__animation;
	          }
	        });
	      } else {
	        el.context.x = x;
	        el.context.y = y;
	      }
	    }
	  }]);
	  return Tips;
	}(_component["default"]);

	_component["default"].registerComponent(Tips, 'tips');

	var _default = Tips;
	exports["default"] = _default;
	});

	unwrapExports(tips);

	var projectTheme = ["#4d7fff","#13c9ce","#fb734f","#50c3f2","#b598f1"];     if( projectTheme && projectTheme.length ){        global$2.setGlobalTheme( projectTheme );    }    var chartx = {        options: {"4":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22time%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22ppc%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22click%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20legend%3A%20%7B%7D%0A%7D%3B","range":[]},"5":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22time%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22click%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20line%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strokeStyle%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineargradient%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23ff7033%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%200.1%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23ff9933%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%200.3%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%232dafe3%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%200.85%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23449be3%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%200.95%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%237177e3%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%235744e3%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alpha%3A%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D%3B","range":[]},"6":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22month%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%2060%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(val)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20str%20%3D%20val%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20_val%20%3D%20Number(%20val%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(%20_val%20%3E%2010000%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%20%3D%20parseInt(%20_val%2F10000%20)%2B%22%E4%B8%87%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(%20_val%20%3E%20100000000%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%20%3D%20(%20_val%2F100000000%20).toFixed(3)%2B%22%E4%BA%BF%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20str%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20area%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22avg_value%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(val%2Cinfo)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20str%20%3D%20%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20switch(%20info.name%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22value%22%20%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%20%3D%20%22%E5%BA%97%E9%93%BA%E6%B6%88%E8%80%97%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22avg_value%22%20%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%20%3D%20%22%E8%A1%8C%E4%B8%9A%E5%B9%B3%E5%9D%87%E6%B6%88%E8%80%97%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20str%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20tips%3A%20%7B%0A%20%20%20%20%20%20%20%20content%3A%20function%20(info)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20str%20%20%3D%20%22%3Ctable%20style%3D'border%3Anone'%3E%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20self%20%3D%20this%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20if(%20info.title%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%20%2B%3D%20%22%3Ctr%3E%3Ctd%20colspan%3D'2'%3E%22%2B%20info.title%20%2B%22%3C%2Ftd%3E%3C%2Ftr%3E%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20_.each(%20info.nodes%20%2C%20function(%20node%20%2C%20i%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(%20node.value%20%3D%3D%3D%20undefined%20%7C%7C%20node.value%20%3D%3D%3D%20null%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20label%20%3D%20%22%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20switch(%20node.field%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22value%22%20%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%20%3D%20%22%E5%BA%97%E9%93%BA%E6%B6%88%E8%80%97%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22avg_value%22%20%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%20%3D%20%22%E8%A1%8C%E4%B8%9A%E5%B9%B3%E5%9D%87%E6%B6%88%E8%80%97%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%2B%3D%20%22%3Ctr%20style%3D'color%3A%22%2B%20(node.color%20%7C%7C%20node.fillStyle%20%7C%7C%20node.strokeStyle)%20%2B%22'%3E%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20tsStyle%3D%22style%3D'border%3Anone%3Bwhite-space%3Anowrap%3Bword-wrap%3Anormal%3B'%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%2B%3D%22%3Ctd%20%22%2BtsStyle%2B%22%3E%22%2B%20label%20%2B%22%EF%BC%9A%3C%2Ftd%3E%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%20%2B%3D%20%22%3Ctd%20%22%2BtsStyle%2B%22%3E%22%2B%20node.value%20%2B%22%3C%2Ftd%3E%3C%2Ftr%3E%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20str%2B%3D%22%3C%2Ftable%3E%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20str%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%3B","range":[]},"7":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22time%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22d1%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22d1vs%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22left%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22d2%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22d2vs%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22right%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%7D%0A%7D%3B","range":[]}}    };
	for( var p in global$2 ){
	        chartx[ p ] = global$2[ p ];
	    }

	return chartx;

}));
