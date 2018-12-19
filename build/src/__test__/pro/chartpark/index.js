/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/chartpark/index",[],(require,exports,module)=>{
/**/

"use strict";
exports.__esModule = true;
var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var possibleConstructorReturn = function (self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
};
var classCallCheck$1 = function classCallCheck$$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var createClass$1 = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var inherits$1 = function inherits$$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var possibleConstructorReturn$1 = function possibleConstructorReturn$$1(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
};
var _ = {};
var breaker = {};
var ArrayProto = Array.prototype;
var ObjProto = Object.prototype;
// Create quick reference variables for speed access to core prototypes.
var push = ArrayProto.push;
var slice = ArrayProto.slice;
var concat = ArrayProto.concat;
var toString = ObjProto.toString;
var hasOwnProperty = ObjProto.hasOwnProperty;
// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
var nativeForEach = ArrayProto.forEach;
var nativeMap = ArrayProto.map;
var nativeFilter = ArrayProto.filter;
var nativeEvery = ArrayProto.every;
var nativeSome = ArrayProto.some;
var nativeIndexOf = ArrayProto.indexOf;
var nativeIsArray = Array.isArray;
var nativeKeys = Object.keys;
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
    if (obj !== Object(obj))
        throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) {
        if (_.has(obj, key))
            keys.push(key);
    }
    return keys;
};
_.has = function (obj, key) {
    return hasOwnProperty.call(obj, key);
};
var each = _.each = _.forEach = function (obj, iterator, context) {
    if (obj == null)
        return;
    if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
    }
    else if (obj.length === +obj.length) {
        for (var i = 0, length = obj.length; i < length; i++) {
            if (iterator.call(context, obj[i], i, obj) === breaker)
                return;
        }
    }
    else {
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                return;
        }
    }
};
_.compact = function (array) {
    return _.filter(array, _.identity);
};
_.filter = _.select = function (obj, iterator, context) {
    var results = [];
    if (obj == null)
        return results;
    if (nativeFilter && obj.filter === nativeFilter)
        return obj.filter(iterator, context);
    each(obj, function (value, index, list) {
        if (iterator.call(context, value, index, list))
            results.push(value);
    });
    return results;
};
each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (name) {
    _['is' + name] = function (obj) {
        return toString.call(obj) == '[object ' + name + ']';
    };
});
//if (!_.isArguments(arguments)) {
_.isArguments = function (obj) {
    return !!(obj && _.has(obj, 'callee'));
};
//}
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
    if (obj == null)
        return true;
    if (_.isArray(obj) || _.isString(obj))
        return obj.length === 0;
    for (var key in obj) {
        if (_.has(obj, key))
            return false;
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
    if (array == null)
        return -1;
    var i = 0, length = array.length;
    if (isSorted) {
        if (typeof isSorted == 'number') {
            i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
        }
        else {
            i = _.sortedIndex(array, item);
            return array[i] === item ? i : -1;
        }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf)
        return array.indexOf(item, isSorted);
    for (; i < length; i++) {
        if (array[i] === item)
            return i;
    }
    return -1;
};
_.isWindow = function (obj) {
    return obj != null && obj == obj.window;
};
// Internal implementation of a recursive `flatten` function.
var flatten = function flatten(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
        return concat.apply(output, input);
    }
    each(input, function (value) {
        if (_.isArray(value) || _.isArguments(value)) {
            shallow ? push.apply(output, value) : flatten(value, shallow, output);
        }
        else {
            output.push(value);
        }
    });
    return output;
};
// Flatten out an array, either recursively (by default), or just one level.
_.flatten = function (array, shallow) {
    return flatten(array, shallow, []);
};
_.every = _.all = function (obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null)
        return result;
    if (nativeEvery && obj.every === nativeEvery)
        return obj.every(iterator, context);
    each(obj, function (value, index, list) {
        if (!(result = result && iterator.call(context, value, index, list)))
            return breaker;
    });
    return !!result;
};
// Return the minimum element (or element-based computation).
_.min = function (obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
        return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj))
        return Infinity;
    var result = { computed: Infinity, value: Infinity };
    each(obj, function (value, index, list) {
        var computed = iterator ? iterator.call(context, value, index, list) : value;
        computed < result.computed && (result = { value: value, computed: computed });
    });
    return result.value;
};
// Return the maximum element or (element-based computation).
// Can't optimize arrays of integers longer than 65,535 elements.
// See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
_.max = function (obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
        return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj))
        return -Infinity;
    var result = { computed: -Infinity, value: -Infinity };
    each(obj, function (value, index, list) {
        var computed = iterator ? iterator.call(context, value, index, list) : value;
        computed > result.computed && (result = { value: value, computed: computed });
    });
    return result.value;
};
// Return the first value which passes a truth test. Aliased as `detect`.
_.find = _.detect = function (obj, iterator, context) {
    var result;
    any(obj, function (value, index, list) {
        if (iterator.call(context, value, index, list)) {
            result = value;
            return true;
        }
    });
    return result;
};
// Determine if at least one element in the object matches a truth test.
// Delegates to **ECMAScript 5**'s native `some` if available.
// Aliased as `any`.
var any = _.some = _.any = function (obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null)
        return result;
    if (nativeSome && obj.some === nativeSome)
        return obj.some(iterator, context);
    each(obj, function (value, index, list) {
        if (result || (result = iterator.call(context, value, index, list)))
            return breaker;
    });
    return !!result;
};
// Return a version of the array that does not contain the specified value(s).
_.without = function (array) {
    return _.difference(array, slice.call(arguments, 1));
};
// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
_.difference = function (array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function (value) {
        return !_.contains(rest, value);
    });
};
// Produce a duplicate-free version of the array. If the array has already
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
};
// Return the results of applying the iterator to each element.
// Delegates to **ECMAScript 5**'s native `map` if available.
_.map = _.collect = function (obj, iterator, context) {
    var results = [];
    if (obj == null)
        return results;
    if (nativeMap && obj.map === nativeMap)
        return obj.map(iterator, context);
    each(obj, function (value, index, list) {
        results.push(iterator.call(context, value, index, list));
    });
    return results;
};
// Determine if the array or object contains a given value (using `===`).
// Aliased as `include`.
_.contains = _.include = function (obj, target) {
    if (obj == null)
        return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf)
        return obj.indexOf(target) != -1;
    return any(obj, function (value) {
        return value === target;
    });
};
// Convenience version of a common use case of `map`: fetching a property.
_.pluck = function (obj, key) {
    return _.map(obj, function (value) {
        return value[key];
    });
};
// Return a random integer between min and max (inclusive).
_.random = function (min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};
// Shuffle a collection.
_.shuffle = function (obj) {
    return _.sample(obj, Infinity);
};
_.sample = function (obj, n, guard) {
    if (n == null || guard) {
        if (!isArrayLike(obj))
            obj = _.values(obj);
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
    var options, name, src, copy, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
    }
    if ((typeof target === 'undefined' ? 'undefined' : _typeof$1(target)) !== "object" && !_.isFunction(target)) {
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
                if (target === copy) {
                    continue;
                }
                //if( deep && copy && _.isObject( copy ) &&  && !_.isArray( copy ) && !_.isFunction( copy ) ){
                if (deep && copy && _.isObject(copy) && copy.constructor === Object) {
                    target[name] = _.extend(deep, src, copy);
                }
                else {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
};
_.clone = function (obj) {
    if (!_.isObject(obj))
        return obj;
    return _.isArray(obj) ? obj.slice() : _.extend(true, {}, obj);
};
var settings = {
    //设备分辨率
    RESOLUTION: window.devicePixelRatio || 1,
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
var addOrRmoveEventHand = function addOrRmoveEventHand(domHand, ieHand) {
    if (document[domHand]) {
        var _ret = function () {
            var eventDomFn = function eventDomFn(el, type, fn) {
                if (el.length) {
                    for (var i = 0; i < el.length; i++) {
                        eventDomFn(el[i], type, fn);
                    }
                }
                else {
                    el[domHand](type, fn, false);
                }
            };
            return {
                v: eventDomFn
            };
        }();
        if ((typeof _ret === "undefined" ? "undefined" : _typeof$1(_ret)) === "object")
            return _ret.v;
    }
    else {
        var _ret2 = function () {
            var eventFn = function eventFn(el, type, fn) {
                if (el.length) {
                    for (var i = 0; i < el.length; i++) {
                        eventFn(el[i], type, fn);
                    }
                }
                else {
                    el[ieHand]("on" + type, function () {
                        return fn.call(el, window.event);
                    });
                }
            };
            return {
                v: eventFn
            };
        }();
        if ((typeof _ret2 === "undefined" ? "undefined" : _typeof$1(_ret2)) === "object")
            return _ret2.v;
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
        var box = el.getBoundingClientRect(), doc = el.ownerDocument, body = doc.body, docElem = doc.documentElement, 
        // for ie  
        clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, 
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
        var top = box.top / zoom + (window.pageYOffset || docElem && docElem.scrollTop / zoom || body.scrollTop / zoom) - clientTop, left = box.left / zoom + (window.pageXOffset || docElem && docElem.scrollLeft / zoom || body.scrollLeft / zoom) - clientLeft;
        return {
            top: top,
            left: left
        };
    },
    addEvent: addOrRmoveEventHand("addEventListener", "attachEvent"),
    removeEvent: addOrRmoveEventHand("removeEventListener", "detachEvent"),
    pageX: function pageX(e) {
        if (e.pageX)
            return e.pageX;
        else if (e.clientX)
            return e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        else
            return null;
    },
    pageY: function pageY(e) {
        if (e.pageY)
            return e.pageY;
        else if (e.clientY)
            return e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
        else
            return null;
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
        canvas.setAttribute('width', _width * settings.RESOLUTION);
        canvas.setAttribute('height', _height * settings.RESOLUTION);
        canvas.setAttribute('id', id);
        return canvas;
    },
    createView: function createView(_width, _height, id) {
        var view = document.createElement("div");
        view.className = "canvax-view";
        view.style.cssText += "position:relative;width:100%;height:100%;";
        var stageView = document.createElement("div");
        stageView.style.cssText += "position:absolute;width:" + _width + "px;height:" + _height + "px;";
        //用来存放一些dom元素
        var domView = document.createElement("div");
        domView.style.cssText += "position:absolute;width:" + _width + "px;height:" + _height + "px;";
        view.appendChild(stageView);
        view.appendChild(domView);
        return {
            view: view,
            stageView: stageView,
            domView: domView
        };
    }
    //dom相关代码结束
};
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com
*/
var Utils = {
    mainFrameRate: 60,
    now: 0,
    /*给文本检测高宽专用*/
    _pixelCtx: null,
    __emptyFunc: function __emptyFunc() { },
    //retina 屏幕优化
    _devicePixelRatio: window.devicePixelRatio || 1,
    _UID: 0,
    getUID: function getUID() {
        return this._UID++;
    },
    createId: function createId(name) {
        //if end with a digit, then append an undersBase before appending
        var charCode = name.charCodeAt(name.length - 1);
        if (charCode >= 48 && charCode <= 57)
            name += "_";
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
        }
        else if (r instanceof Array) {
            if (r.length === 1) {
                r1 = r2 = r3 = r4 = r[0];
            }
            else if (r.length === 2) {
                r1 = r3 = r[0];
                r2 = r4 = r[1];
            }
            else if (r.length === 3) {
                r1 = r[0];
                r2 = r4 = r[1];
                r3 = r[2];
            }
            else {
                r1 = r[0];
                r2 = r[1];
                r3 = r[2];
                r4 = r[3];
            }
        }
        else {
            r1 = r2 = r3 = r4 = 0;
        }
        return [r1, r2, r3, r4];
    },
    isWebGLSupported: function isWebGLSupported() {
        var contextOptions = { stencil: true };
        try {
            if (!window.WebGLRenderingContext) //不存在直接return
             {
                return false;
            }
            var canvas = document.createElement('canvas'), gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);
            return !!(gl && gl.getContextAttributes().stencil); //还要确实检测是否支持webGL模式
        }
        catch (e) {
            return false;
        }
    },
    checkOpt: function checkOpt(opt) {
        if (!opt) {
            opt = {
                context: {}
            };
        }
        else {
            if (!opt.context) {
                opt.context = {};
            }
        }
        return opt;
    }
};
Utils._pixelCtx = Utils.initElement($.createCanvas(1, 1, "_pixelCanvas")).getContext('2d');
/**
 * Point
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 */
var Point = function () {
    function Point() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        classCallCheck$1(this, Point);
        if (arguments.length == 1 && _typeof$1(arguments[0]) == 'object') {
            var arg = arguments[0];
            if ("x" in arg && "y" in arg) {
                this.x = arg.x * 1;
                this.y = arg.y * 1;
            }
            else {
                var i = 0;
                for (var p in arg) {
                    if (i == 0) {
                        this.x = arg[p] * 1;
                    }
                    else {
                        this.y = arg[p] * 1;
                        break;
                    }
                    i++;
                }
            }
        }
        else {
            this.x = x * 1;
            this.y = y * 1;
        }
    }
    createClass$1(Point, [{
            key: "toArray",
            value: function toArray$$1() {
                return [this.x, this.y];
            }
        }]);
    return Point;
}();
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * canvas 上委托的事件管理
 */
var CanvaxEvent = function CanvaxEvent(evt, params) {
    var eventType = "CanvaxEvent";
    if (_.isString(evt)) {
        eventType = evt;
    }
    if (_.isObject(evt) && evt.type) {
        eventType = evt.type;
    }
    this.target = null;
    this.currentTarget = null;
    this.type = eventType;
    this.point = null;
    this._stopPropagation = false; //默认不阻止事件冒泡
};
CanvaxEvent.prototype = {
    stopPropagation: function stopPropagation() {
        this._stopPropagation = true;
    }
};
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 */
var _mouseEventTypes = ["click", "dblclick", "mousedown", "mousemove", "mouseup", "mouseout"];
var _hammerEventTypes = ["pan", "panstart", "panmove", "panend", "pancancel", "panleft", "panright", "panup", "pandown", "press", "pressup", "swipe", "swipeleft", "swiperight", "swipeup", "swipedown", "tap"];
var EventHandler = function EventHandler(canvax, opt) {
    this.canvax = canvax;
    this.curPoints = [new Point(0, 0)]; //X,Y 的 point 集合, 在touch下面则为 touch的集合，只是这个touch被添加了对应的x，y
    //当前激活的点对应的obj，在touch下可以是个数组,和上面的 curPoints 对应
    this.curPointsTarget = [];
    this._touching = false;
    //正在拖动，前提是_touching=true
    this._draging = false;
    //当前的鼠标状态
    this._cursor = "default";
    this.target = this.canvax.view;
    this.types = [];
    //mouse体统中不需要配置drag,touch中会用到第三方的touch库，每个库的事件名称可能不一样，
    //就要这里配置，默认实现的是hammerjs的,所以默认可以在项目里引入hammerjs http://hammerjs.github.io/
    this.drag = {
        start: "panstart",
        move: "panmove",
        end: "panend"
    };
    _.extend(true, this, opt);
};
//这样的好处是document.compareDocumentPosition只会在定义的时候执行一次。
var contains = document.compareDocumentPosition ? function (parent, child) {
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
EventHandler.prototype = {
    init: function init() {
        //依次添加上浏览器的自带事件侦听
        var me = this;
        if (me.target.nodeType == undefined) {
            //如果target.nodeType没有的话， 说明该target为一个jQuery对象 or kissy 对象or hammer对象
            //即为第三方库，那么就要对接第三方库的事件系统。默认实现hammer的大部分事件系统
            if (!me.types || me.types.length == 0) {
                me.types = _hammerEventTypes;
            }
        }
        else if (me.target.nodeType == 1) {
            me.types = _mouseEventTypes;
        }
        _.each(me.types, function (type) {
            //不再关心浏览器环境是否 'ontouchstart' in window 
            //而是直接只管传给事件模块的是一个原生dom还是 jq对象 or hammer对象等
            if (me.target.nodeType == 1) {
                $.addEvent(me.target, type, function (e) {
                    me.__mouseHandler(e);
                });
            }
            else {
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
        me.curPoints = [new Point($.pageX(e) - root.viewOffset.left, $.pageY(e) - root.viewOffset.top)];
        //理论上来说，这里拿到point了后，就要计算这个point对应的target来push到curPointsTarget里，
        //但是因为在drag的时候其实是可以不用计算对应target的。
        //所以放在了下面的me.__getcurPointsTarget( e , curMousePoint );常规mousemove中执行
        var curMousePoint = me.curPoints[0];
        var curMouseTarget = me.curPointsTarget[0];
        //模拟drag,mouseover,mouseout 部分代码 begin-------------------------------------------------
        //mousedown的时候 如果 curMouseTarget.dragEnabled 为true。就要开始准备drag了
        if (e.type == "mousedown") {
            //如果curTarget 的数组为空或者第一个为false ，，，
            if (!curMouseTarget) {
                var obj = root.getObjectsUnderPoint(curMousePoint, 1)[0];
                if (obj) {
                    me.curPointsTarget = [obj];
                }
            }
            curMouseTarget = me.curPointsTarget[0];
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
        }
        else if (e.type == "mousemove") {
            //|| e.type == "mousedown" ){
            //拖动过程中就不在做其他的mouseover检测，drag优先
            if (me._touching && e.type == "mousemove" && curMouseTarget) {
                //说明正在拖动啊
                if (!me._draging) {
                    //begin drag
                    curMouseTarget.fire("dragstart");
                    //有可能该child没有hover style
                    if (!curMouseTarget._globalAlpha) {
                        curMouseTarget._globalAlpha = curMouseTarget.context.$model.globalAlpha;
                    }
                    //先把本尊给隐藏了
                    curMouseTarget.context.globalAlpha = 0;
                    //然后克隆一个副本到activeStage
                    var cloneObject = me._clone2hoverStage(curMouseTarget, 0);
                    cloneObject.context.globalAlpha = curMouseTarget._globalAlpha;
                }
                else {
                    //drag move ing
                    me._dragIngHander(e, curMouseTarget, 0);
                }
                me._draging = true;
            }
            else {
                //常规mousemove检测
                //move事件中，需要不停的搜索target，这个开销挺大，
                //后续可以优化，加上和帧率相当的延迟处理
                me.__getcurPointsTarget(e, curMousePoint);
            }
        }
        else {
            //其他的事件就直接在target上面派发事件
            var child = curMouseTarget;
            if (!child) {
                child = root;
            }
            me.__dispatchEventInChilds(e, [child]);
            me._cursorHander(child);
        }
        if (root.preventDefault) {
            //阻止默认浏览器动作(W3C) 
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            else {
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
        var e = new CanvaxEvent(e);
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
        root.updateViewOffset();
        // touch 下的 curPointsTarget 从touches中来
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
                        me._draging = true;
                        //有可能该child没有hover style
                        if (!child._globalAlpha) {
                            child._globalAlpha = child.context.$model.globalAlpha;
                        }
                        //然后克隆一个副本到activeStage
                        me._clone2hoverStage(child, i);
                        //先把本尊给隐藏了
                        child.context.globalAlpha = 0;
                        child.fire("dragstart");
                        return false;
                    }
                });
            }
            //dragIng
            if (e.type == me.drag.move) {
                if (me._draging) {
                    _.each(me.curPointsTarget, function (child, i) {
                        if (child && child.dragEnabled) {
                            me._dragIngHander(e, child, i);
                        }
                    });
                }
            }
            //drag结束
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
        }
        else {
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
                x: CanvaxEvent.pageX(touch) - root.viewOffset.left,
                y: CanvaxEvent.pageY(touch) - root.viewOffset.top
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
        var hasChild = false;
        _.each(childs, function (child, i) {
            if (child) {
                hasChild = true;
                var ce = new CanvaxEvent(e);
                ce.target = ce.currentTarget = child || this;
                ce.stagePoint = me.curPoints[i];
                ce.point = ce.target.globalToLocal(ce.stagePoint);
                child.dispatchEvent(ce);
            }
        });
        return hasChild;
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
        var _point = target.globalToLocal(me.curPoints[i]);
        //要对应的修改本尊的位置，但是要告诉引擎不要watch这个时候的变化
        target._noHeart = true;
        var _moveStage = target.moveing;
        target.moveing = true;
        target.context.x += _point.x - target._dragPoint.x;
        target.context.y += _point.y - target._dragPoint.y;
        target.fire("draging");
        target.moveing = _moveStage;
        target._noHeart = false;
        //同步完毕本尊的位置
        //这里只能直接修改_transform 。 不能用下面的修改x，y的方式。
        var _dragDuplicate = root._bufferStage.getChildById(target.id);
        _dragDuplicate._transform = target.getConcatenatedMatrix();
        //worldTransform在renderer的时候计算
        _dragDuplicate.worldTransform = null;
        //setWorldTransform都统一在render中执行，这里注释掉
        //_dragDuplicate.setWorldTransform();
        //直接修改的_transform不会出发心跳上报， 渲染引擎不制动这个stage需要绘制。
        //所以要手动出发心跳包
        _dragDuplicate.heartBeat();
    },
    //drag结束的处理函数
    //TODO: dragend的还需要处理end的点是否还在元素上面，要恢复hover状态
    _dragEnd: function _dragEnd(e, target, i) {
        var me = this;
        var root = me.canvax;
        //_dragDuplicate 复制在_bufferStage 中的副本
        var _dragDuplicate = root._bufferStage.getChildById(target.id);
        _dragDuplicate && _dragDuplicate.destroy();
        target.context.globalAlpha = target._globalAlpha;
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
var EventManager = function EventManager() {
    //事件映射表，格式为：{type1:[listener1, listener2], type2:[listener3, listener4]}
    this._eventMap = {};
};
EventManager.prototype = {
    /*
     * 注册事件侦听器对象，以使侦听器能够接收事件通知。
     */
    _addEventListener: function _addEventListener(type, listener) {
        if (typeof listener != "function") {
            //listener必须是个function呐亲
            return false;
        }
        var addResult = true;
        var self = this;
        _.each(type.split(" "), function (type) {
            var map = self._eventMap[type];
            if (!map) {
                map = self._eventMap[type] = [];
                map.push(listener);
                self._eventEnabled = true;
                return true;
            }
            if (_.indexOf(map, listener) == -1) {
                map.push(listener);
                self._eventEnabled = true;
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
        if (arguments.length == 1)
            return this.removeEventListenerByType(type);
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
                    //如果这个如果这个时候child没有任何事件侦听
                    if (_.isEmpty(this._eventMap)) {
                        //那么该元素不再接受事件的检测
                        this._eventEnabled = false;
                    }
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
            //如果这个如果这个时候child没有任何事件侦听
            if (_.isEmpty(this._eventMap)) {
                //那么该元素不再接受事件的检测
                this._eventEnabled = false;
            }
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
            if (!e.target)
                e.target = this;
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
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 事件派发类
 */
var EventDispatcher = function (_EventManager) {
    inherits$1(EventDispatcher, _EventManager);
    function EventDispatcher() {
        classCallCheck$1(this, EventDispatcher);
        return possibleConstructorReturn$1(this, (EventDispatcher.__proto__ || Object.getPrototypeOf(EventDispatcher)).call(this));
    }
    createClass$1(EventDispatcher, [{
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
            }
            //params 要传给evt的eventhandler处理函数的参数，会被merge到Canvax event中
        }, {
            key: "fire",
            value: function fire(eventType, params) {
                //{currentTarget,point,target,type,_stopPropagation}
                var e = new CanvaxEvent(eventType);
                if (params) {
                    for (var p in params) {
                        if (p != "type") {
                            e[p] = params[p];
                        }
                        //然后，currentTarget要修正为自己
                        e.currentTarget = this;
                    }
                }
                var me = this;
                _.each(eventType.split(" "), function (eType) {
                    e.currentTarget = me;
                    me.dispatchEvent(e);
                });
                return this;
            }
        }, {
            key: "dispatchEvent",
            value: function dispatchEvent(event) {
                //this instanceof DisplayObjectContainer ==> this.children
                //TODO: 这里import DisplayObjectContainer 的话，在displayObject里面的import EventDispatcher from "../event/EventDispatcher";
                //会得到一个undefined，感觉是成了一个循环依赖的问题，所以这里换用简单的判断来判断自己是一个容易，拥有children
                if (this.children && event.point) {
                    var target = this.getObjectsUnderPoint(event.point, 1)[0];
                    if (target) {
                        target.dispatchEvent(event);
                    }
                    return;
                }
                if (this.context && event.type == "mouseover") {
                    //记录dispatchEvent之前的心跳
                    var preHeartBeat = this._heartBeatNum;
                    var pregAlpha = this.context.$model.globalAlpha;
                    this._dispatchEvent(event);
                    if (preHeartBeat != this._heartBeatNum) {
                        this._hoverClass = true;
                        if (this.hoverClone) {
                            var canvax = this.getStage().parent;
                            //然后clone一份obj，添加到_bufferStage 中
                            var activShape = this.clone(true);
                            activShape._transform = this.getConcatenatedMatrix();
                            canvax._bufferStage.addChildAt(activShape, 0);
                            //然后把自己隐藏了
                            //用一个临时变量_globalAlpha 来存储自己之前的alpha
                            this._globalAlpha = pregAlpha;
                            this.context.globalAlpha = 0;
                        }
                    }
                    return;
                }
                this._dispatchEvent(event);
                if (this.context && event.type == "mouseout") {
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
    return EventDispatcher;
}(EventManager);
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
        }
        else {
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
    toArray: function toArray$$1(transpose, out) {
        if (arguments.length == 0) {
            //canvas2d 中不会有任何的参数传入
            return [this.a, this.b, this.c, this.d, this.tx, this.ty];
        }
        //webgl的glsl需要用的时候，需要传入transpose 来转换为一个3*3完整矩阵
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
        }
        else {
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
        var aa = this.a, ac = this.c, atx = this.tx;
        var ab = this.b, ad = this.d, aty = this.ty;
        var out = [0, 0];
        out[0] = v[0] * aa + v[1] * ac + atx;
        out[1] = v[0] * ab + v[1] * ad + aty;
        return out;
    }
};
var commonjsGlobal$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};
function createCommonjsModule$1(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var Tween = createCommonjsModule$1(function (module, exports) {
    /**
     * Tween.js - Licensed under the MIT license
     * https://github.com/tweenjs/tween.js
     * ----------------------------------------------
     *
     * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
     * Thank you all, you're awesome!
     */
    var _Group = function _Group() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    };
    _Group.prototype = {
        getAll: function getAll() {
            return Object.keys(this._tweens).map(function (tweenId) {
                return this._tweens[tweenId];
            }.bind(this));
        },
        removeAll: function removeAll() {
            this._tweens = {};
        },
        add: function add(tween) {
            this._tweens[tween.getId()] = tween;
            this._tweensAddedDuringUpdate[tween.getId()] = tween;
        },
        remove: function remove(tween) {
            delete this._tweens[tween.getId()];
            delete this._tweensAddedDuringUpdate[tween.getId()];
        },
        update: function update(time, preserve) {
            var tweenIds = Object.keys(this._tweens);
            if (tweenIds.length === 0) {
                return false;
            }
            time = time !== undefined ? time : TWEEN.now();
            // Tweens are updated in "batches". If you add a new tween during an update, then the
            // new tween will be updated in the next batch.
            // If you remove a tween during an update, it will normally still be updated. However,
            // if the removed tween was added during the current batch, then it will not be updated.
            while (tweenIds.length > 0) {
                this._tweensAddedDuringUpdate = {};
                for (var i = 0; i < tweenIds.length; i++) {
                    if (this._tweens[tweenIds[i]].update(time) === false) {
                        this._tweens[tweenIds[i]]._isPlaying = false;
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
    if (typeof window === 'undefined' && typeof process !== 'undefined') {
        TWEEN.now = function () {
            var time = process.hrtime();
            // Convert [seconds, nanoseconds] to milliseconds.
            return time[0] * 1000 + time[1] / 1000000;
        };
    }
    // In a browser, use window.performance.now if it is available.
    else if (typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined) {
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
                if (this._valuesStart[property] instanceof Array === false) {
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
        yoyo: function yoyo(yoyo) {
            this._yoyo = yoyo;
            return this;
        },
        easing: function easing(easing) {
            this._easingFunction = easing;
            return this;
        },
        interpolation: function interpolation(interpolation) {
            this._interpolationFunction = interpolation;
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
            elapsed = elapsed > 1 ? 1 : elapsed;
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
                }
                else {
                    // Parses relative end values with start as base (e.g.: +10, -3)
                    if (typeof end === 'string') {
                        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
                            end = start + parseFloat(end);
                        }
                        else {
                            end = parseFloat(end);
                        }
                    }
                    // Protect against non numeric properties.
                    if (typeof end === 'number') {
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
                        if (typeof this._valuesEnd[property] === 'string') {
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
                    }
                    else {
                        this._startTime = time + this._delayTime;
                    }
                    return true;
                }
                else {
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
            None: function None(k) {
                return k;
            }
        },
        Quadratic: {
            In: function In(k) {
                return k * k;
            },
            Out: function Out(k) {
                return k * (2 - k);
            },
            InOut: function InOut(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k;
                }
                return -0.5 * (--k * (k - 2) - 1);
            }
        },
        Cubic: {
            In: function In(k) {
                return k * k * k;
            },
            Out: function Out(k) {
                return --k * k * k + 1;
            },
            InOut: function InOut(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k * k;
                }
                return 0.5 * ((k -= 2) * k * k + 2);
            }
        },
        Quartic: {
            In: function In(k) {
                return k * k * k * k;
            },
            Out: function Out(k) {
                return 1 - --k * k * k * k;
            },
            InOut: function InOut(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k * k * k;
                }
                return -0.5 * ((k -= 2) * k * k * k - 2);
            }
        },
        Quintic: {
            In: function In(k) {
                return k * k * k * k * k;
            },
            Out: function Out(k) {
                return --k * k * k * k * k + 1;
            },
            InOut: function InOut(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k * k * k * k;
                }
                return 0.5 * ((k -= 2) * k * k * k * k + 2);
            }
        },
        Sinusoidal: {
            In: function In(k) {
                return 1 - Math.cos(k * Math.PI / 2);
            },
            Out: function Out(k) {
                return Math.sin(k * Math.PI / 2);
            },
            InOut: function InOut(k) {
                return 0.5 * (1 - Math.cos(Math.PI * k));
            }
        },
        Exponential: {
            In: function In(k) {
                return k === 0 ? 0 : Math.pow(1024, k - 1);
            },
            Out: function Out(k) {
                return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
            },
            InOut: function InOut(k) {
                if (k === 0) {
                    return 0;
                }
                if (k === 1) {
                    return 1;
                }
                if ((k *= 2) < 1) {
                    return 0.5 * Math.pow(1024, k - 1);
                }
                return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
            }
        },
        Circular: {
            In: function In(k) {
                return 1 - Math.sqrt(1 - k * k);
            },
            Out: function Out(k) {
                return Math.sqrt(1 - --k * k);
            },
            InOut: function InOut(k) {
                if ((k *= 2) < 1) {
                    return -0.5 * (Math.sqrt(1 - k * k) - 1);
                }
                return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
            }
        },
        Elastic: {
            In: function In(k) {
                if (k === 0) {
                    return 0;
                }
                if (k === 1) {
                    return 1;
                }
                return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            },
            Out: function Out(k) {
                if (k === 0) {
                    return 0;
                }
                if (k === 1) {
                    return 1;
                }
                return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
            },
            InOut: function InOut(k) {
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
            In: function In(k) {
                var s = 1.70158;
                return k * k * ((s + 1) * k - s);
            },
            Out: function Out(k) {
                var s = 1.70158;
                return --k * k * ((s + 1) * k + s) + 1;
            },
            InOut: function InOut(k) {
                var s = 1.70158 * 1.525;
                if ((k *= 2) < 1) {
                    return 0.5 * (k * k * ((s + 1) * k - s));
                }
                return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
            }
        },
        Bounce: {
            In: function In(k) {
                return 1 - TWEEN.Easing.Bounce.Out(1 - k);
            },
            Out: function Out(k) {
                if (k < 1 / 2.75) {
                    return 7.5625 * k * k;
                }
                else if (k < 2 / 2.75) {
                    return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
                }
                else if (k < 2.5 / 2.75) {
                    return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
                }
                else {
                    return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
                }
            },
            InOut: function InOut(k) {
                if (k < 0.5) {
                    return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
                }
                return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
            }
        }
    };
    TWEEN.Interpolation = {
        Linear: function Linear(v, k) {
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
        Bezier: function Bezier(v, k) {
            var b = 0;
            var n = v.length - 1;
            var pw = Math.pow;
            var bn = TWEEN.Interpolation.Utils.Bernstein;
            for (var i = 0; i <= n; i++) {
                b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
            }
            return b;
        },
        CatmullRom: function CatmullRom(v, k) {
            var m = v.length - 1;
            var f = m * k;
            var i = Math.floor(f);
            var fn = TWEEN.Interpolation.Utils.CatmullRom;
            if (v[0] === v[m]) {
                if (k < 0) {
                    i = Math.floor(f = m * (1 + k));
                }
                return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
            }
            else {
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
            Linear: function Linear(p0, p1, t) {
                return (p1 - p0) * t + p0;
            },
            Bernstein: function Bernstein(n, i) {
                var fc = TWEEN.Interpolation.Utils.Factorial;
                return fc(n) / fc(i) / fc(n - i);
            },
            Factorial: function () {
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
            }(),
            CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
                var v0 = (p2 - p0) * 0.5;
                var v1 = (p3 - p1) * 0.5;
                var t2 = t * t;
                var t3 = t * t2;
                return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
            }
        }
    };
    // UMD (Universal Module Definition)
    (function (root) {
        if (typeof undefined === 'function' && undefined.amd) {
            // AMD
            undefined([], function () {
                return TWEEN;
            });
        }
        else {
            // Node.js
            module.exports = TWEEN;
        }
    })(commonjsGlobal$1);
});
//import Tween from "./Tween"
/**
 * 设置 AnimationFrame begin
 */
var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
}
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
}
//管理所有图表的渲染任务
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
        onStart: function onStart() { },
        onUpdate: function onUpdate() { },
        onComplete: function onComplete() { },
        onStop: function onStop() { },
        repeat: 0,
        delay: 0,
        easing: 'Linear.None',
        desc: '' //动画描述，方便查找bug
    }, options);
    var tween = {};
    var tid = "tween_" + Utils.getUID();
    opt.id && (tid = tid + "_" + opt.id);
    if (opt.from && opt.to) {
        (function () {
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
                tween._isCompleteed = true;
                //opt.onComplete.apply( this , [this] ); //执行用户的conComplete
                opt.onComplete(opt.from);
            }).onStop(function () {
                destroyFrame({
                    id: tid
                });
                tween._isStoped = true;
                //opt.onStop.apply( this , [this] );
                opt.onStop(opt.from);
            }).repeat(opt.repeat).delay(opt.delay).easing(Tween.Easing[opt.easing.split(".")[0]][opt.easing.split(".")[1]]);
            tween.id = tid;
            tween.start();
            animate();
        })();
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
var AnimationFrame = {
    registFrame: registFrame,
    destroyFrame: destroyFrame,
    registTween: registTween,
    destroyTween: destroyTween,
    Tween: Tween,
    taskList: _taskList
};
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 把canvax元素的context实现监听属性改动
 * 来给整个引擎提供心跳包的触发机制
 */
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
        var valueType = typeof val === "undefined" ? "undefined" : _typeof$1(val);
        if (_.indexOf(Publics, name) > -1) {
            return;
        }
        if (valueType === "function") {
            Publics.push(name); //函数无需要转换，也可以做为公共属性存在
        }
        else {
            var accessor = function accessor(neo) {
                //创建监控属性或数组，自变量，由用户触发其改变
                var value = model[name], preValue = value, complexValue;
                if (arguments.length) {
                    //写操作
                    //set 的 值的 类型
                    var neoType = typeof neo === "undefined" ? "undefined" : _typeof$1(neo);
                    if (stopRepeatAssign) {
                        return; //阻止重复赋值
                    }
                    if (value !== neo) {
                        if (neo && neoType === "object" && !(neo instanceof Array) && !neo.addColorStop // neo instanceof CanvasGradient
                        ) {
                            value = neo.$model ? neo : Observe(neo, neo);
                            complexValue = value.$model;
                        }
                        else {
                            //如果是其他数据类型
                            value = neo;
                        }
                        //accessor.value = value;
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
                }
                else {
                    //读操作
                    //读的时候，发现value是个obj，而且还没有defineProperty
                    //那么就临时defineProperty一次
                    if (value && valueType === "object" && !(value instanceof Array) && !value.$model && !value.addColorStop) {
                        value = Observe(value, value);
                        value.$watch = pmodel.$watch;
                        //accessor.value = value;
                        model[name] = value;
                    }
                    return value;
                }
            };
            //accessor.value = val;
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
            }
            else {
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
var defineProperty$1 = Object.defineProperty;
//如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
//标准浏览器使用__defineGetter__, __defineSetter__实现
try {
    defineProperty$1({}, "_", {
        value: "x"
    });
    var defineProperties = Object.defineProperties;
}
catch (e) {
    if ("__defineGetter__" in Object) {
        defineProperty$1 = function defineProperty$$1(obj, prop, desc) {
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
                    defineProperty$1(obj, prop, descs[prop]);
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
//会影响到transform改变的context属性
var TRANSFORM_PROPS = ["x", "y", "scaleX", "scaleY", "rotation", "scaleOrigin", "rotateOrigin"];
//所有和样式相关的属性
//appha 有 自己的 处理方式
var STYLE_PROPS = ["lineWidth", "lineAlpha", "strokeStyle", "fillStyle", "fillAlpha", "globalAlpha"];
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
    }
    else {
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
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 模拟as3 DisplayList 的 现实对象基类
 */
var DisplayObject = function (_EventDispatcher) {
    inherits$1(DisplayObject, _EventDispatcher);
    function DisplayObject(opt) {
        classCallCheck$1(this, DisplayObject);
        //相对父级元素的矩阵
        var _this = possibleConstructorReturn$1(this, (DisplayObject.__proto__ || Object.getPrototypeOf(DisplayObject)).call(this, opt));
        _this._transform = null;
        _this.worldTransform = null;
        //_transform如果有修改，则_transformChange为true，renderer的时候worldTransform
        _this._transformChange = false;
        //心跳次数
        _this._heartBeatNum = 0;
        //元素对应的stage元素
        _this.stage = null;
        //元素的父元素
        _this.parent = null;
        _this.xyToInt = "xyToInt" in opt ? opt.xyToInt : true; //是否对xy坐标统一int处理，默认为true，但是有的时候可以由外界用户手动指定是否需要计算为int，因为有的时候不计算比较好，比如，进度图表中，再sector的两端添加两个圆来做圆角的进度条的时候，圆circle不做int计算，才能和sector更好的衔接
        _this.moveing = false; //如果元素在最轨道运动中的时候，最好把这个设置为true，这样能保证轨迹的丝搬顺滑，否则因为xyToInt的原因，会有跳跃
        _this.clip = null; //裁剪的图形对象
        //创建好context
        _this.context = _this._createContext(opt);
        _this.type = opt.type || "DisplayObject";
        _this.id = opt.id || Utils.createId(_this.type);
        _this._trackList = []; //一个元素可以追踪另外元素的变动
        _this.init.apply(_this, arguments);
        //所有属性准备好了后，先要计算一次this._updateTransform()得到_tansform
        _this._updateTransform();
        return _this;
    }
    createClass$1(DisplayObject, [{
            key: "init",
            value: function init() { }
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
                    globalAlpha: optCtx.globalAlpha || 1
                    //样式部分迁移到shape中
                    //cursor        : optCtx.cursor || "default",
                    //fillAlpha     : optCtx.fillAlpha || 1,//context2d里没有，自定义
                    //fillStyle     : optCtx.fillStyle || null,//"#000000",
                    //lineCap       : optCtx.lineCap || null,//默认都是直角
                    //lineJoin      : optCtx.lineJoin || null,//这两个目前webgl里面没实现
                    //miterLimit    : optCtx.miterLimit || null,//miterLimit 属性设置或返回最大斜接长度,只有当 lineJoin 属性为 "miter" 时，miterLimit 才有效。
                    //lineAlpha     : optCtx.lineAlpha || 1,//context2d里没有，自定义
                    //strokeStyle   : optCtx.strokeStyle || null,
                    //lineType      : optCtx.lineType || "solid", //context2d里没有，自定义线条的type，默认为实线
                    //lineWidth     : optCtx.lineWidth || null
                };
                //平凡的clone数据非常的耗时，还是走回原来的路
                //var _contextATTRS = _.extend( true , _.clone(CONTEXT_DEFAULT), opt.context );
                _.extend(true, _contextATTRS, opt.context);
                //有些引擎内部设置context属性的时候是不用上报心跳的，比如做热点检测的时候
                self._notWatch = false;
                //不需要发心跳信息
                self._noHeart = false;
                //_contextATTRS.$owner = self;
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
                };
                //执行init之前，应该就根据参数，把context组织好线
                return Observe(_contextATTRS);
            }
            //TODO:track目前还没测试过,需要的时候再测试
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
                }
                else {
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
                }
                //一直回溯到顶层object， 即是stage， stage的parent为null
                this.stage = p;
                return p;
            }
        }, {
            key: "localToGlobal",
            value: function localToGlobal(point, container) {
                !point && (point = new Point(0, 0));
                var cm = this.getConcatenatedMatrix(container);
                if (cm == null)
                    return Point(0, 0);
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
                if (cm == null)
                    return new Point(0, 0); //{x:0, y:0};
                cm.invert();
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
                var context = this.context;
                //是否需要Transform
                if (context.scaleX !== 1 || context.scaleY !== 1) {
                    //如果有缩放
                    //缩放的原点坐标
                    var origin = new Point(context.scaleOrigin);
                    if (origin.x || origin.y) {
                        _transform.translate(-origin.x, -origin.y);
                    }
                    _transform.scale(context.scaleX, context.scaleY);
                    if (origin.x || origin.y) {
                        _transform.translate(origin.x, origin.y);
                    }
                }
                var rotation = context.rotation;
                if (rotation) {
                    //如果有旋转
                    //旋转的原点坐标
                    var origin = new Point(context.rotateOrigin);
                    if (origin.x || origin.y) {
                        _transform.translate(-origin.x, -origin.y);
                    }
                    _transform.rotate(rotation % 360 * Math.PI / 180);
                    if (origin.x || origin.y) {
                        _transform.translate(origin.x, origin.y);
                    }
                }
                //如果有位移
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
                }
                else {
                    x = context.x;
                    y = context.y;
                }
                if (x != 0 || y != 0) {
                    _transform.translate(x, y);
                }
                this._transform = _transform;
                return _transform;
            }
            //获取全局的世界坐标系内的矩阵
            //世界坐标是从上而下的，所以只要和parent的直接坐标相乘就好了
        }, {
            key: "setWorldTransform",
            value: function setWorldTransform() {
                //if( !this.worldTransform ){
                var cm = new Matrix();
                cm.concat(this._transform);
                this.parent && cm.concat(this.parent.worldTransform);
                this.worldTransform = cm;
                //};
                return this.worldTransform;
            }
            //显示对象的选取检测处理函数
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
                var y = point.y;
                //对鼠标的坐标也做相同的变换
                if (this.worldTransform) {
                    var inverseMatrix = this.worldTransform.clone().invert();
                    var originPos = [x * settings.RESOLUTION, y * settings.RESOLUTION];
                    originPos = inverseMatrix.mulVector(originPos);
                    x = originPos[0];
                    y = originPos[1];
                }
                if (this.graphics) {
                    result = this.containsPoint({ x: x, y: y });
                }
                if (this.type == "text") {
                    //文本框的先单独处理
                    var _rect = this.getRect();
                    if (!_rect.width || !_rect.height) {
                        return false;
                    }
                    //正式开始第一步的矩形范围判断
                    if (x >= _rect.x && x <= _rect.x + _rect.width && (_rect.height >= 0 && y >= _rect.y && y <= _rect.y + _rect.height || _rect.height < 0 && y <= _rect.y && y >= _rect.y + _rect.height)) {
                        //那么就在这个元素的矩形范围内
                        result = true;
                    }
                    else {
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
                        }
                        //circle,ellipse等就没有points
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
                        this.animate(to[p], _.extend({}, options), context[p]);
                        //如果是个object
                        continue;
                    }
                    if (isNaN(to[p]) && to[p] !== '' && to[p] !== null && to[p] !== undefined) {
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
                var upFun = function upFun() { };
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
                var compFun = function compFun() { };
                if (options.onComplete) {
                    compFun = options.onComplete;
                }
                options.onComplete = function (status) {
                    compFun.apply(self, arguments);
                };
                options.desc = "tweenType:DisplayObject.animate__id:" + this.id + "__objectType:" + this.type;
                tween = AnimationFrame.registTween(options);
                return tween;
            }
            //从树中删除
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
            }
            //元素的自我销毁
        }, {
            key: "_destroy",
            value: function _destroy() {
                this.remove();
                this.fire("destroy");
                //把自己从父节点中删除了后做自我清除，释放内存
                this.context = null;
                delete this.context;
            }
        }]);
    return DisplayObject;
}(EventDispatcher);
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 模拟as3的DisplayList 中的容器类
 */
var DisplayObjectContainer = function (_DisplayObject) {
    inherits$1(DisplayObjectContainer, _DisplayObject);
    function DisplayObjectContainer(opt) {
        classCallCheck$1(this, DisplayObjectContainer);
        var _this = possibleConstructorReturn$1(this, (DisplayObjectContainer.__proto__ || Object.getPrototypeOf(DisplayObjectContainer)).call(this, opt));
        _this.children = [];
        _this.mouseChildren = [];
        //所有的容器默认支持event 检测，因为 可能有里面的shape是eventEnable是true的
        //如果用户有强制的需求让容器下的所有元素都 不可检测，可以调用
        //DisplayObjectContainer的 setEventEnable() 方法
        _this._eventEnabled = true;
        return _this;
    }
    createClass$1(DisplayObjectContainer, [{
            key: "addChild",
            value: function addChild(child, index) {
                if (!child) {
                    return;
                }
                if (this.getChildIndex(child) != -1) {
                    child.parent = this;
                    return child;
                }
                //如果他在别的子元素中，那么就从别人那里删除了
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
            }
            //集合类的自我销毁
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
                }
                else {
                    //深度查询
                    //TODO:暂时未实现
                    return null;
                }
                return null;
            }
        }, {
            key: "getChildAt",
            value: function getChildAt(index) {
                if (index < 0 || index > this.children.length - 1)
                    return null;
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
                if (child.parent != this)
                    return;
                var oldIndex = _.indexOf(this.children, child);
                if (index == oldIndex)
                    return;
                this.children.splice(oldIndex, 1);
                this.children.splice(index, 0, child);
            }
        }, {
            key: "getNumChildren",
            value: function getNumChildren() {
                return this.children.length;
            }
            //获取x,y点上的所有object  num 需要返回的obj数量
        }, {
            key: "getObjectsUnderPoint",
            value: function getObjectsUnderPoint(point, num) {
                var result = [];
                for (var i = this.children.length - 1; i >= 0; i--) {
                    var child = this.children[i];
                    if (child == null || !child._eventEnabled && !child.dragEnabled || !child.context.$model.visible) {
                        continue;
                    }
                    if (child instanceof DisplayObjectContainer) {
                        //是集合
                        if (child.mouseChildren && child.getNumChildren() > 0) {
                            var objs = child.getObjectsUnderPoint(point);
                            if (objs.length > 0) {
                                result = result.concat(objs);
                            }
                        }
                    }
                    else {
                        //非集合，可以开始做getChildInPoint了
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
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * stage 类， 再as3中，stage则代表整个舞台。是唯一的根节点
 * 但是再canvax中，因为分层设计的需要。stage 舞台 同样代表一个canvas元素，但是不是再整个引擎设计
 * 里面， 不是唯一的根节点。而是会交由canvax类来统一管理其层级
 */
var Stage = function (_DisplayObjectContain) {
    inherits$1(Stage, _DisplayObjectContain);
    function Stage(opt) {
        classCallCheck$1(this, Stage);
        opt.type = "stage";
        var _this = possibleConstructorReturn$1(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this, opt));
        _this.canvas = null;
        _this.ctx = null; //渲染的时候由renderer决定,这里不做初始值
        //stage正在渲染中
        _this.stageRending = false;
        _this._isReady = false;
        return _this;
    }
    createClass$1(Stage, [{
            key: "init",
            value: function init() { }
            //由canvax的afterAddChild 回调
        }, {
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
                opt.stage = this;
                //TODO临时先这么处理
                this.parent && this.parent.heartBeat(opt);
            }
        }]);
    return Stage;
}(DisplayObjectContainer);
var SystemRenderer = function () {
    function SystemRenderer() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RENDERER_TYPE.UNKNOWN;
        var app = arguments[1];
        var options = arguments[2];
        classCallCheck$1(this, SystemRenderer);
        this.type = type; //2canvas,1webgl
        this.app = app;
        //prepare options
        if (options) {
            for (var i in settings.RENDER_OPTIONS) {
                if (typeof options[i] === 'undefined') {
                    options[i] = settings.RENDER_OPTIONS[i];
                }
            }
        }
        else {
            options = settings.RENDER_OPTIONS;
        }
        this.options = options;
        this.requestAid = null;
        this._heartBeat = false; //心跳，默认为false，即false的时候引擎处于静默状态 true则启动渲染
        this._preRenderTime = 0;
    }
    //如果引擎处于静默状态的话，就会启动
    createClass$1(SystemRenderer, [{
            key: 'startEnter',
            value: function startEnter() {
                var self = this;
                if (!self.requestAid) {
                    self.requestAid = AnimationFrame.registFrame({
                        id: "enterFrame",
                        task: function task() {
                            self.enterFrame.apply(self);
                        }
                    });
                }
            }
        }, {
            key: 'enterFrame',
            value: function enterFrame() {
                var self = this;
                //不管怎么样，enterFrame执行了就要把
                //requestAid null 掉
                self.requestAid = null;
                Utils.now = new Date().getTime();
                if (self._heartBeat) {
                    //var _begin = new Date().getTime();
                    this.app.children.length && self.render(this.app);
                    //var _end = new Date().getTime();
                    //$(document.body).append( "<br />render："+ (_end - _begin) );
                    self._heartBeat = false;
                    //渲染完了，打上最新时间挫
                    self._preRenderTime = new Date().getTime();
                }
            }
        }, {
            key: '_convertCanvax',
            value: function _convertCanvax(opt) {
                var me = this;
                _.each(me.app.children, function (stage) {
                    stage.context[opt.name] = opt.value;
                });
            }
        }, {
            key: 'heartBeat',
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
                        }
                        else {
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
                                }
                                else {
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
                }
                else {
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
                }
                else {
                    //否则智慧继续确认心跳
                    self._heartBeat = true;
                }
            }
        }]);
    return SystemRenderer;
}();
var CanvasGraphicsRenderer = function () {
    function CanvasGraphicsRenderer(renderer) {
        classCallCheck$1(this, CanvasGraphicsRenderer);
        this.renderer = renderer;
    }
    /**
    * @param displayObject
    * @stage 也可以displayObject.getStage()获取。
    */
    createClass$1(CanvasGraphicsRenderer, [{
            key: 'render',
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
                    var line = data.hasLine() && data.lineAlpha && !isClip;
                    ctx.lineWidth = data.lineWidth;
                    if (data.type === SHAPES.POLY) {
                        ctx.beginPath();
                        this.renderPolygon(shape.points, shape.closed, ctx, isClip);
                        if (fill) {
                            ctx.globalAlpha = data.fillAlpha * globalAlpha;
                            ctx.fillStyle = fillStyle;
                            ctx.fill();
                        }
                        if (line) {
                            ctx.globalAlpha = data.lineAlpha * globalAlpha;
                            ctx.strokeStyle = strokeStyle;
                            ctx.stroke();
                        }
                    }
                    else if (data.type === SHAPES.RECT) {
                        if (isClip) {
                            //ctx.beginPath();
                            //rect本身已经是个close的path
                            ctx.rect(shape.x, shape.y, shape.width, shape.height);
                            //ctx.closePath();
                        }
                        if (fill) {
                            ctx.globalAlpha = data.fillAlpha * globalAlpha;
                            ctx.fillStyle = fillStyle;
                            ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
                        }
                        if (line) {
                            ctx.globalAlpha = data.lineAlpha * globalAlpha;
                            ctx.strokeStyle = strokeStyle;
                            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
                        }
                    }
                    else if (data.type === SHAPES.CIRC) {
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
                            ctx.globalAlpha = data.lineAlpha * globalAlpha;
                            ctx.strokeStyle = strokeStyle;
                            ctx.stroke();
                        }
                    }
                    else if (data.type === SHAPES.ELIP) {
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
                            ctx.globalAlpha = data.lineAlpha * globalAlpha;
                            ctx.strokeStyle = strokeStyle;
                            ctx.stroke();
                        }
                    }
                }
            }
        }, {
            key: 'renderPolygon',
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
var CanvasRenderer = function (_SystemRenderer) {
    inherits$1(CanvasRenderer, _SystemRenderer);
    function CanvasRenderer(app) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck$1(this, CanvasRenderer);
        var _this = possibleConstructorReturn$1(this, (CanvasRenderer.__proto__ || Object.getPrototypeOf(CanvasRenderer)).call(this, RENDERER_TYPE.CANVAS, app, options));
        _this.CGR = new CanvasGraphicsRenderer(_this);
        return _this;
    }
    createClass$1(CanvasRenderer, [{
            key: 'render',
            value: function render(app) {
                var me = this;
                me.app = app;
                _.each(_.values(app.convertStages), function (convertStage) {
                    me.renderStage(convertStage.stage);
                });
                app.convertStages = {};
            }
        }, {
            key: 'renderStage',
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
            key: '_render',
            value: function _render(stage, displayObject, globalAlpha) {
                var ctx = stage.ctx;
                if (!ctx) {
                    return;
                }
                var $MC = displayObject.context.$model;
                if (!displayObject.worldTransform || displayObject._transformChange || displayObject.parent && displayObject.parent._transformChange) {
                    displayObject.setWorldTransform();
                    displayObject._transformChange = true;
                }
                globalAlpha *= $MC.globalAlpha;
                if (!$MC.visible || displayObject.isClip) {
                    return;
                }
                ctx.setTransform.apply(ctx, displayObject.worldTransform.toArray());
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
                    ctx.setTransform.apply(ctx, _clip.worldTransform.toArray());
                    //如果 graphicsData.length==0 的情况下才需要执行_draw来组织graphics数据
                    if (!_clip.graphics.graphicsData.length) {
                        //当渲染器开始渲染app的时候，app下面的所有displayObject都已经准备好了对应的世界矩阵
                        _clip._draw(_clip.graphics); //_draw会完成绘制准备好 graphicsData
                    }
                    this.CGR.render(_clip, stage, globalAlpha, isClipSave);
                    _clip._transformChange = false;
                    ctx.clip();
                }
                //因为已经采用了setTransform了， 非shape元素已经不需要执行transform 和 render
                if (displayObject.graphics) {
                    //如果 graphicsData.length==0 的情况下才需要执行_draw来组织graphics数据
                    if (!displayObject.graphics.graphicsData.length) {
                        //当渲染器开始渲染app的时候，app下面的所有displayObject都已经准备好了对应的世界矩阵
                        displayObject._draw(displayObject.graphics); //_draw会完成绘制准备好 graphicsData
                    }
                    //globalAlpha == 0 的话，只是不需要render，但是graphics的graphicsData还是要计算的
                    //事件检测的时候需要用到graphics.graphicsData
                    if (!!globalAlpha) {
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
            key: '_clear',
            value: function _clear(stage) {
                var ctx = stage.ctx;
                ctx.setTransform.apply(ctx, stage.worldTransform.toArray());
                ctx.clearRect(0, 0, this.app.width, this.app.height);
            }
        }]);
    return CanvasRenderer;
}(SystemRenderer);
//import WebGLRenderer from './webgl/WebGLRenderer';
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
/**
 * Application {{PKG_VERSION}}
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 主引擎 类
 *
 * 负责所有canvas的层级管理，和心跳机制的实现,捕获到心跳包后
 * 分发到对应的stage(canvas)来绘制对应的改动
 * 然后 默认有实现了shape的 mouseover  mouseout  drag 事件
 *
 **/
//utils
var Application = function (_DisplayObjectContain) {
    inherits$1(Application, _DisplayObjectContain);
    function Application(opt) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck$1(this, Application);
        opt.type = "canvax";
        var _this = possibleConstructorReturn$1(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this, opt));
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
        _this.renderer = autoRenderer(_this, options);
        _this.event = null;
        //是否阻止浏览器默认事件的执行
        _this.preventDefault = true;
        if (opt.preventDefault === false) {
            _this.preventDefault = false;
        }
        //该属性在systenRender里面操作，每帧由心跳上报的 需要重绘的stages 列表
        _this.convertStages = {};
        _this.context.$model.width = _this.width;
        _this.context.$model.height = _this.height;
        //然后创建一个用于绘制激活 shape 的 stage 到activation
        _this._bufferStage = null;
        _this._creatHoverStage();
        //设置一个默认的matrix做为app的世界根节点坐标
        _this.worldTransform = new Matrix().identity();
        return _this;
    }
    createClass$1(Application, [{
            key: "registEvent",
            value: function registEvent(opt) {
                //初始化事件委托到root元素上面
                this.event = new EventHandler(this, opt);
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
                this.view.removeChild(this.stageView);
                this.view.removeChild(this.domView);
                this.el.removeChild(this.view);
                this.el.innerHTML = "";
                this.event = null;
                this._bufferStage = null;
            }
        }, {
            key: "resize",
            value: function resize(opt) {
                //重新设置坐标系统 高宽 等。
                this.width = parseInt(opt && "width" in opt || this.el.offsetWidth, 10);
                this.height = parseInt(opt && "height" in opt || this.el.offsetHeight, 10);
                //this.view  width height都一直设置为100%
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
                });
                //该stage不参与事件检测
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
                }
                else {
                    canvas = stage.canvas;
                }
                if (this.children.length == 1) {
                    this.stageView.appendChild(canvas);
                }
                else if (this.children.length > 1) {
                    if (index === undefined) {
                        //如果没有指定位置，那么就放到 _bufferStage 的下面。
                        this.stageView.insertBefore(canvas, this._bufferStage.canvas);
                    }
                    else {
                        //如果有指定的位置，那么就指定的位置来
                        if (index >= this.children.length - 1) {
                            this.stageView.appendChild(canvas);
                        }
                        else {
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
                this.stageView.removeChild(stage.canvas);
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
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 模拟as3 中 的sprite类，目前还只是个简单的容易。
 */
var Sprite = function (_DisplayObjectContain) {
    inherits$1(Sprite, _DisplayObjectContain);
    function Sprite(opt) {
        classCallCheck$1(this, Sprite);
        opt = Utils.checkOpt(opt);
        opt.type = "sprite";
        return possibleConstructorReturn$1(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, opt));
    }
    return Sprite;
}(DisplayObjectContainer);
var GraphicsData = function () {
    function GraphicsData(lineWidth, strokeStyle, lineAlpha, fillStyle, fillAlpha, shape) {
        classCallCheck$1(this, GraphicsData);
        this.lineWidth = lineWidth;
        this.strokeStyle = strokeStyle;
        this.lineAlpha = lineAlpha;
        this.fillStyle = fillStyle;
        this.fillAlpha = fillAlpha;
        this.shape = shape;
        this.type = shape.type;
        this.holes = [];
        //这两个可以被后续修改， 具有一票否决权
        //比如polygon的 虚线描边。必须在fill的poly上面设置line为false
        this.fill = true;
        this.line = true;
    }
    createClass$1(GraphicsData, [{
            key: "clone",
            value: function clone() {
                var cloneGraphicsData = new GraphicsData(this.lineWidth, this.strokeStyle, this.lineAlpha, this.fillStyle, this.fillAlpha, this.shape);
                cloneGraphicsData.fill = this.fill;
                cloneGraphicsData.line = this.line;
                return cloneGraphicsData;
            }
        }, {
            key: "addHole",
            value: function addHole(shape) {
                this.holes.push(shape);
            }
            //从宿主graphics中同步最新的style属性
        }, {
            key: "synsStyle",
            value: function synsStyle(style) {
                //console.log("line:"+this.line+"__fill:"+this.fill)
                //从shape中把绘图需要的style属性同步过来
                if (this.line) {
                    this.lineWidth = style.lineWidth;
                    this.strokeStyle = style.strokeStyle;
                    this.lineAlpha = style.lineAlpha;
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
var arcToSegmentsCache = {};
var segmentToBezierCache = {};
var boundsOfCurveCache = {};
var _join = Array.prototype.join;
/* Adapted from http://dxr.mozilla.org/mozilla-central/source/content/svg/content/src/nsSVGPathDataParser.cpp
 * by Andrea Bogazzi code is under MPL. if you don't have a copy of the license you can take it here
 * http://mozilla.org/MPL/2.0/
 */
function arcToSegments(toX, toY, rx, ry, large, sweep, rotateX) {
    var argsString = _join.call(arguments);
    if (arcToSegmentsCache[argsString]) {
        return arcToSegmentsCache[argsString];
    }
    var PI = Math.PI, th = rotateX * PI / 180, sinTh = Math.sin(th), cosTh = Math.cos(th), fromX = 0, fromY = 0;
    rx = Math.abs(rx);
    ry = Math.abs(ry);
    var px = -cosTh * toX * 0.5 - sinTh * toY * 0.5, py = -cosTh * toY * 0.5 + sinTh * toX * 0.5, rx2 = rx * rx, ry2 = ry * ry, py2 = py * py, px2 = px * px, pl = rx2 * ry2 - rx2 * py2 - ry2 * px2, root = 0;
    if (pl < 0) {
        var s = Math.sqrt(1 - pl / (rx2 * ry2));
        rx *= s;
        ry *= s;
    }
    else {
        root = (large === sweep ? -1.0 : 1.0) * Math.sqrt(pl / (rx2 * py2 + ry2 * px2));
    }
    var cx = root * rx * py / ry, cy = -root * ry * px / rx, cx1 = cosTh * cx - sinTh * cy + toX * 0.5, cy1 = sinTh * cx + cosTh * cy + toY * 0.5, mTheta = calcVectorAngle(1, 0, (px - cx) / rx, (py - cy) / ry), dtheta = calcVectorAngle((px - cx) / rx, (py - cy) / ry, (-px - cx) / rx, (-py - cy) / ry);
    if (sweep === 0 && dtheta > 0) {
        dtheta -= 2 * PI;
    }
    else if (sweep === 1 && dtheta < 0) {
        dtheta += 2 * PI;
    }
    // Convert into cubic bezier segments <= 90deg
    var segments = Math.ceil(Math.abs(dtheta / PI * 2)), result = [], mDelta = dtheta / segments, mT = 8 / 3 * Math.sin(mDelta / 4) * Math.sin(mDelta / 4) / Math.sin(mDelta / 2), th3 = mTheta + mDelta;
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
    var costh2 = Math.cos(th2), sinth2 = Math.sin(th2), costh3 = Math.cos(th3), sinth3 = Math.sin(th3), toX = cosTh * rx * costh3 - sinTh * ry * sinth3 + cx1, toY = sinTh * rx * costh3 + cosTh * ry * sinth3 + cy1, cp1X = fromX + mT * (-cosTh * rx * sinth2 - sinTh * ry * costh2), cp1Y = fromY + mT * (-sinTh * rx * sinth2 + cosTh * ry * costh2), cp2X = toX + mT * (cosTh * rx * sinth3 + sinTh * ry * costh3), cp2Y = toY + mT * (sinTh * rx * sinth3 - cosTh * ry * costh3);
    segmentToBezierCache[argsString2] = [cp1X, cp1Y, cp2X, cp2Y, toX, toY];
    return segmentToBezierCache[argsString2];
}
/*
 * Private
 */
function calcVectorAngle(ux, uy, vx, vy) {
    var ta = Math.atan2(uy, ux), tb = Math.atan2(vy, vx);
    if (tb >= ta) {
        return tb - ta;
    }
    else {
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
    var rx = coords[0], ry = coords[1], rot = coords[2], large = coords[3], sweep = coords[4], tx = coords[5], ty = coords[6], segs = [[], [], [], []], segsNorm = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);
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
    var fromX = 0, fromY = 0, bound, bounds = [], segs = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);
    for (var i = 0, len = segs.length; i < len; i++) {
        bound = getBoundsOfCurve(fromX, fromY, segs[i][0], segs[i][1], segs[i][2], segs[i][3], segs[i][4], segs[i][5]);
        bounds.push({ x: bound[0].x + fx, y: bound[0].y + fy });
        bounds.push({ x: bound[1].x + fx, y: bound[1].y + fy });
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
    var sqrt = Math.sqrt, min = Math.min, max = Math.max, abs = Math.abs, tvalues = [], bounds = [[], []], a, b, c, t, t1, t2, b2ac, sqrtb2ac;
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
    var x, y, j = tvalues.length, jlen = j, mt;
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
var Rectangle = function () {
    function Rectangle() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        classCallCheck$1(this, Rectangle);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = SHAPES.RECT;
        this.closed = true;
    }
    createClass$1(Rectangle, [{
            key: 'clone',
            value: function clone() {
                return new Rectangle(this.x, this.y, this.width, this.height);
            }
        }, {
            key: 'copy',
            value: function copy(rectangle) {
                this.x = rectangle.x;
                this.y = rectangle.y;
                this.width = rectangle.width;
                this.height = rectangle.height;
                return this;
            }
        }, {
            key: 'contains',
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
                return false;
                //当x和 width , y和height都 为正或者都未负数的情况下，才可能在范围内
                /*
                if (x >= this.x && x < this.x + this.width)
                {
                    if (y >= this.y && y < this.y + this.height)
                    {
                        return true;
                    }
                }
                */
                return false;
            }
        }]);
    return Rectangle;
}();
var Circle = function () {
    function Circle() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        classCallCheck$1(this, Circle);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.type = SHAPES.CIRC;
        this.closed = true;
    }
    createClass$1(Circle, [{
            key: 'clone',
            value: function clone() {
                return new Circle(this.x, this.y, this.radius);
            }
        }, {
            key: 'contains',
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
            key: 'getBounds',
            value: function getBounds() {
                return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
            }
        }]);
    return Circle;
}();
var Ellipse = function () {
    function Ellipse() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        classCallCheck$1(this, Ellipse);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = SHAPES.ELIP;
        this.closed = true;
    }
    createClass$1(Ellipse, [{
            key: 'clone',
            value: function clone() {
                return new Ellipse(this.x, this.y, this.width, this.height);
            }
        }, {
            key: 'contains',
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
            key: 'getBounds',
            value: function getBounds() {
                return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
            }
        }]);
    return Ellipse;
}();
var Polygon = function () {
    function Polygon() {
        for (var _len = arguments.length, points = Array(_len), _key = 0; _key < _len; _key++) {
            points[_key] = arguments[_key];
        }
        classCallCheck$1(this, Polygon);
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
    createClass$1(Polygon, [{
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
/*
* Graphics绘图法则
* 单个grahics实例里的fill line 样式属性，都从对应shape.context 中获取
*
*/
var Graphics = function () {
    function Graphics(shape) {
        classCallCheck$1(this, Graphics);
        this.lineWidth = 1;
        this.strokeStyle = null;
        this.lineAlpha = 1;
        this.fillStyle = null;
        this.fillAlpha = 1;
        //比如path m 0 0 l 0 0 m 1 1 l 1 1
        //就会有两条graphicsData数据产生
        this.graphicsData = [];
        this.currentPath = null;
        this.dirty = 0; //用于检测图形对象是否已更改。 如果这是设置为true，那么图形对象将被重新计算。
        this.clearDirty = 0; //用于检测我们是否清除了图形webGL数据
        this._webGL = {};
        this.worldAlpha = 1;
        this.tint = 0xFFFFFF; //目标对象附加颜色
        this.Bound = {
            x: 0, y: 0, width: 0, height: 0
        };
    }
    createClass$1(Graphics, [{
            key: 'setStyle',
            value: function setStyle(context) {
                //从 shape 中把绘图需要的style属性同步过来
                var model = context.$model;
                this.lineWidth = model.lineWidth;
                this.strokeStyle = model.strokeStyle;
                this.lineAlpha = model.lineAlpha * model.globalAlpha;
                this.fillStyle = model.fillStyle;
                this.fillAlpha = model.fillAlpha * model.globalAlpha;
                var g = this;
                //一般都是先设置好style的，所以 ， 当后面再次设置新的style的时候
                //会把所有的data都修改
                //TODO: 后面需要修改, 能精准的确定是修改 graphicsData 中的哪个data
                if (this.graphicsData.length) {
                    _.each(this.graphicsData, function (gd, i) {
                        gd.synsStyle(g);
                    });
                }
            }
        }, {
            key: 'clone',
            value: function clone() {
                var clone = new Graphics();
                clone.dirty = 0;
                // copy graphics data
                for (var i = 0; i < this.graphicsData.length; ++i) {
                    clone.graphicsData.push(this.graphicsData[i].clone());
                }
                clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];
                return clone;
            }
        }, {
            key: 'moveTo',
            value: function moveTo(x, y) {
                var shape = new Polygon([x, y]);
                shape.closed = false;
                this.drawShape(shape);
                return this;
            }
        }, {
            key: 'lineTo',
            value: function lineTo(x, y) {
                if (this.currentPath) {
                    this.currentPath.shape.points.push(x, y);
                    this.dirty++;
                }
                else {
                    this.moveTo(0, 0);
                }
                return this;
            }
        }, {
            key: 'quadraticCurveTo',
            value: function quadraticCurveTo(cpX, cpY, toX, toY) {
                if (this.currentPath) {
                    if (this.currentPath.shape.points.length === 0) {
                        this.currentPath.shape.points = [0, 0];
                    }
                }
                else {
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
            key: 'bezierCurveTo',
            value: function bezierCurveTo$$1(cpX, cpY, cpX2, cpY2, toX, toY) {
                if (this.currentPath) {
                    if (this.currentPath.shape.points.length === 0) {
                        this.currentPath.shape.points = [0, 0];
                    }
                }
                else {
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
            key: 'arcTo',
            value: function arcTo(x1, y1, x2, y2, radius) {
                if (this.currentPath) {
                    if (this.currentPath.shape.points.length === 0) {
                        this.currentPath.shape.points.push(x1, y1);
                    }
                }
                else {
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
                }
                else {
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
            key: 'arc',
            value: function arc(cx, cy, radius, startAngle, endAngle) {
                var anticlockwise = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
                if (startAngle === endAngle) {
                    return this;
                }
                if (!anticlockwise && endAngle <= startAngle) {
                    endAngle += Math.PI * 2;
                }
                else if (anticlockwise && startAngle <= endAngle) {
                    startAngle += Math.PI * 2;
                }
                var sweep = endAngle - startAngle;
                var segs = Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * 48;
                if (sweep === 0) {
                    return this;
                }
                var startX = cx + Math.cos(startAngle) * radius;
                var startY = cy + Math.sin(startAngle) * radius;
                // If the currentPath exists, take its points. Otherwise call `moveTo` to start a path.
                var points = this.currentPath ? this.currentPath.shape.points : null;
                if (points) {
                    if (points[points.length - 2] !== startX || points[points.length - 1] !== startY) {
                        points.push(startX, startY);
                    }
                }
                else {
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
            key: 'drawRect',
            value: function drawRect(x, y, width, height) {
                this.drawShape(new Rectangle(x, y, width, height));
                return this;
            }
        }, {
            key: 'drawCircle',
            value: function drawCircle(x, y, radius) {
                this.drawShape(new Circle(x, y, radius));
                return this;
            }
        }, {
            key: 'drawEllipse',
            value: function drawEllipse(x, y, width, height) {
                this.drawShape(new Ellipse(x, y, width, height));
                return this;
            }
        }, {
            key: 'drawPolygon',
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
            key: 'clear',
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
            key: 'drawShape',
            value: function drawShape(shape) {
                if (this.currentPath) {
                    if (this.currentPath.shape.points.length <= 2) {
                        this.graphicsData.pop();
                    }
                }
                //this.currentPath = null;
                this.beginPath();
                var data = new GraphicsData(this.lineWidth, this.strokeStyle, this.lineAlpha, this.fillStyle, this.fillAlpha, shape);
                this.graphicsData.push(data);
                if (data.type === SHAPES.POLY) {
                    data.shape.closed = data.shape.closed;
                    this.currentPath = data;
                }
                this.dirty++;
                return data;
            }
        }, {
            key: 'beginPath',
            value: function beginPath() {
                this.currentPath = null;
            }
        }, {
            key: 'closePath',
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
            key: 'updateLocalBounds',
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
                        }
                        else if (type === SHAPES.CIRC) {
                            x = shape.x;
                            y = shape.y;
                            w = shape.radius + lineWidth / 2;
                            h = shape.radius + lineWidth / 2;
                            minX = x - w < minX ? x - w : minX;
                            maxX = x + w > maxX ? x + w : maxX;
                            minY = y - h < minY ? y - h : minY;
                            maxY = y + h > maxY ? y + h : maxY;
                        }
                        else if (type === SHAPES.ELIP) {
                            x = shape.x;
                            y = shape.y;
                            w = shape.width + lineWidth / 2;
                            h = shape.height + lineWidth / 2;
                            minX = x - w < minX ? x - w : minX;
                            maxX = x + w > maxX ? x + w : maxX;
                            minY = y - h < minY ? y - h : minY;
                            maxY = y + h > maxY ? y + h : maxY;
                        }
                        else {
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
                }
                else {
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
            key: 'getBound',
            value: function getBound() {
                return this.updateLocalBounds().Bound;
            }
        }, {
            key: 'destroy',
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
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 模拟as3 DisplayList 中的shape 类
 */
var Shape = function (_DisplayObject) {
    inherits$1(Shape, _DisplayObject);
    function Shape(opt) {
        classCallCheck$1(this, Shape);
        opt = Utils.checkOpt(opt);
        var styleContext = {
            cursor: opt.context.cursor || "default",
            fillAlpha: opt.context.fillAlpha || 1,
            fillStyle: opt.context.fillStyle || null,
            lineCap: opt.context.lineCap || "round",
            lineJoin: opt.context.lineJoin || "round",
            miterLimit: opt.context.miterLimit || null,
            lineAlpha: opt.context.lineAlpha || 1,
            strokeStyle: opt.context.strokeStyle || null,
            lineType: opt.context.lineType || "solid",
            lineWidth: opt.context.lineWidth || null
        };
        var _context = _.extend(true, styleContext, opt.context);
        opt.context = _context;
        if (opt.id === undefined && opt.type !== undefined) {
            opt.id = Utils.createId(opt.type);
        }
        //over的时候如果有修改样式，就为true
        var _this = possibleConstructorReturn$1(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this, opt));
        _this._hoverClass = false;
        _this.hoverClone = true; //是否开启在hover的时候clone一份到active stage 中 
        _this.pointChkPriority = true; //在鼠标mouseover到该节点，然后mousemove的时候，是否优先检测该节点
        _this._eventEnabled = false; //是否响应事件交互,在添加了事件侦听后会自动设置为true
        _this.dragEnabled = opt.dragEnabled || false; //"dragEnabled" in opt ? opt.dragEnabled : false;   //是否启用元素的拖拽
        //拖拽drag的时候显示在activShape的副本
        _this._dragDuplicate = null;
        _this.type = _this.type || "shape";
        //处理所有的图形一些共有的属性配置,把除开id,context之外的所有属性，全部挂载到this上面
        _this.initCompProperty(opt);
        //如果该元素是clone而来，则不需要绘制
        if (!_this.isClone) {
            //如果是clone对象的话就直接
            _this.graphics = new Graphics();
            _this._draw(_this.graphics);
        }
        else {
            _this.graphics = null;
        }
        return _this;
    }
    createClass$1(Shape, [{
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
            value: function draw() { }
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
            /*
             * 画虚线
             */
        }, {
            key: "dashedLineTo",
            value: function dashedLineTo(graphics, x1, y1, x2, y2, dashLength) {
                dashLength = typeof dashLength == 'undefined' ? 3 : dashLength;
                dashLength = Math.max(dashLength, this.context.$model.lineWidth);
                var deltaX = x2 - x1;
                var deltaY = y2 - y1;
                var numDashes = Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength);
                for (var i = 0; i < numDashes; ++i) {
                    var x = parseInt(x1 + deltaX / numDashes * i);
                    var y = parseInt(y1 + deltaY / numDashes * i);
                    graphics[i % 2 === 0 ? 'moveTo' : 'lineTo'](x, y);
                    if (i == numDashes - 1 && i % 2 === 0) {
                        graphics.lineTo(x2, y2);
                    }
                }
            }
        }]);
    return Shape;
}(DisplayObject);
/**
 * Canvax--Text
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 文本 类
 **/
var Text = function (_DisplayObject) {
    inherits$1(Text, _DisplayObject);
    function Text(text, opt) {
        classCallCheck$1(this, Text);
        opt.type = "text";
        if (text === null || text === undefined) {
            text = "";
        }
        opt.context = _.extend({
            font: "",
            fontSize: 13,
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
        var _this = possibleConstructorReturn$1(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, opt));
        _this._reNewline = /\r?\n/;
        _this.fontProperts = ["fontStyle", "fontVariant", "fontWeight", "fontSize", "fontFamily"];
        _this.context.font = _this._getFontDeclaration();
        _this.text = text.toString();
        _this.context.width = _this.getTextWidth();
        _this.context.height = _this.getTextHeight();
        return _this;
    }
    createClass$1(Text, [{
            key: "$watch",
            value: function $watch(name, value, preValue) {
                //context属性有变化的监听函数
                if (_.indexOf(this.fontProperts, name) >= 0) {
                    this.context[name] = value;
                    //如果修改的是font的某个内容，就重新组装一遍font的值，
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
                            }
                            else {
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
                if (!ctx)
                    return;
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
                if (!this.context.$model.fillStyle)
                    return;
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
                if (!ctx)
                    return;
                if (!this.context.$model.strokeStyle || !this.context.$model.lineWidth)
                    return;
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
                }
                else {
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
                var y = 0;
                //更具textAlign 和 textBaseline 重新矫正 xy
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
    var vx = 0, vy = 0;
    if (arguments.length == 1 && _.isObject(x)) {
        var arg = arguments[0];
        if (_.isArray(arg)) {
            vx = arg[0];
            vy = arg[1];
        }
        else if (arg.hasOwnProperty("x") && arg.hasOwnProperty("y")) {
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
var SmoothSpline = function SmoothSpline(opt) {
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
    iVtor = null;
    //基本上等于曲率
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
        }
        else {
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
};
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
        }
        else {
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
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 折线 类
 *
 * 对应context的属性有
 * @pointList 各个顶角坐标
 **/
var BrokenLine = function (_Shape) {
    inherits$1(BrokenLine, _Shape);
    function BrokenLine(opt) {
        classCallCheck$1(this, BrokenLine);
        opt = Utils.checkOpt(opt);
        var _context = _.extend({
            lineType: null,
            smooth: false,
            pointList: [],
            smoothFilter: Utils.__emptyFunc
        }, opt.context);
        if (!opt.isClone && _context.smooth) {
            _context.pointList = myMath.getSmoothPointList(_context.pointList, _context.smoothFilter);
        }
        opt.context = _context;
        opt.type = "brokenline";
        //保存好原始值
        var _this = possibleConstructorReturn$1(this, (BrokenLine.__proto__ || Object.getPrototypeOf(BrokenLine)).call(this, opt));
        _this._pointList = _context.pointList;
        return _this;
    }
    createClass$1(BrokenLine, [{
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
                        }
                        else {
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
                    var nextPoint = pointList[i + 1];
                    if (myMath.isValibPoint(point)) {
                        if (!context.lineType || context.lineType == 'solid') {
                            //实线的绘制
                            if (!beginPath) {
                                graphics.moveTo(point[0], point[1]);
                            }
                            else {
                                graphics.lineTo(point[0], point[1]);
                            }
                        }
                        else if (context.lineType == 'dashed' || context.lineType == 'dotted') {
                            //如果是虚线
                            //如果是曲线
                            if (context.smooth) {
                                //就直接做间隔好了
                                //TODO: 这个情况会有点稀疏，要优化
                                if (!beginPath) {
                                    graphics.moveTo(point[0], point[1]);
                                }
                                else {
                                    graphics.lineTo(point[0], point[1]);
                                    beginPath = false;
                                    i++; //跳过下一个点
                                    continue;
                                }
                            }
                            else {
                                //point 有效，而且 next也有效的话
                                //直线的虚线
                                if (myMath.isValibPoint(nextPoint)) {
                                    this.dashedLineTo(graphics, point[0], point[1], nextPoint[0], nextPoint[1], 5);
                                }
                            }
                        }
                        beginPath = true;
                    }
                    else {
                        beginPath = false;
                    }
                }
                /*
                if (!context.lineType || context.lineType == 'solid') {
                    //默认为实线
                    //TODO:目前如果 有设置smooth 的情况下是不支持虚线的
                    graphics.moveTo(pointList[0][0], pointList[0][1]);
                    for (var i = 1, l = pointList.length; i < l; i++) {
                        graphics.lineTo(pointList[i][0], pointList[i][1]);
                    };
                  } else if (context.lineType == 'dashed' || context.lineType == 'dotted') {
                    if (context.smooth) {
                        for (var si = 0, sl = pointList.length; si < sl; si++) {
                            if (si == sl-1) {
                                break;
                            };
                            graphics.moveTo( pointList[si][0] , pointList[si][1] );
                            graphics.lineTo( pointList[si+1][0] , pointList[si+1][1] );
                            si+=1;
                          };
                    } else {
                        //画虚线的方法
                        for (var i = 1, l = pointList.length; i < l; i++) {
                            var fromX = pointList[i - 1][0];
                            var toX = pointList[i][0];
                            var fromY = pointList[i - 1][1];
                            var toY = pointList[i][1];
                            this.dashedLineTo(graphics, fromX, fromY, toX, toY, 5);
                        };
                    }
                    
                };
                */
                return this;
            }
        }]);
    return BrokenLine;
}(Shape);
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 圆形 类
 *
 * 坐标原点再圆心
 *
 * 对应context的属性有
 * @r 圆半径
 **/
var Circle$2 = function (_Shape) {
    inherits$1(Circle, _Shape);
    function Circle(opt) {
        classCallCheck$1(this, Circle);
        //opt = Utils.checkOpt( opt );
        //默认情况下面，circle不需要把xy进行parentInt转换
        /*
        var opt = {
            type : "circle",
            xyToInt : false,
            context : {
                r : 0
            }
        };
        */
        opt = _.extend(true, {
            type: "circle",
            xyToInt: false,
            context: {
                r: 0
            }
        }, Utils.checkOpt(opt));
        return possibleConstructorReturn$1(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, opt));
    }
    createClass$1(Circle, [{
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
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * Path 类，Path主要用于把svgpath 字符串转换为pointList，然后构建graphicsData
 *
 * 对应context的属性有
 * @path path串
 **/
var Path = function (_Shape) {
    inherits$1(Path, _Shape);
    function Path(opt) {
        classCallCheck$1(this, Path);
        var _context = _.extend({
            pointList: [],
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
        return possibleConstructorReturn$1(this, (Path.__proto__ || Object.getPrototypeOf(Path)).call(this, opt));
    }
    createClass$1(Path, [{
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
                //分拆子分组
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
                var cs = data;
                // command chars
                var cc = ['m', 'M', 'l', 'L', 'v', 'V', 'h', 'H', 'z', 'Z', 'c', 'C', 'q', 'Q', 't', 'T', 's', 'S', 'a', 'A'];
                cs = cs.replace(/  /g, ' ');
                cs = cs.replace(/ /g, ',');
                //cs = cs.replace(/(.)-/g, "$1,-");
                cs = cs.replace(/(\d)-/g, '$1,-');
                cs = cs.replace(/,,/g, ',');
                var n;
                // create pipes so that we can split the data
                for (n = 0; n < cc.length; n++) {
                    cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
                }
                // create array
                var arr = cs.split('|');
                var ca = [];
                // init context point
                var cpx = 0;
                var cpy = 0;
                for (n = 1; n < arr.length; n++) {
                    var str = arr[n];
                    var c = str.charAt(0);
                    str = str.slice(1);
                    str = str.replace(new RegExp('e,-', 'g'), 'e-');
                    //有的时候，比如“22，-22” 数据可能会经常的被写成22-22，那么需要手动修改
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
                        var y1 = cpy;
                        // convert l, H, h, V, and v to L
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
            }
            //重新根的path绘制 graphics
        }, {
            key: "draw",
            value: function draw(graphics) {
                //graphics.beginPath();
                this.__parsePathData = null;
                this.context.$model.pointList = [];
                var pathArray = this._parsePathData(this.context.$model.path);
                for (var g = 0, gl = pathArray.length; g < gl; g++) {
                    for (var i = 0, l = pathArray[g].length; i < l; i++) {
                        var c = pathArray[g][i].command, p = pathArray[g][i].points;
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
/**
 * Canvax
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 水滴形 类
 * 派生自Path类
 *
 * 对应context的属性有
 * @hr 水滴横宽（中心到水平边缘最宽处距离）
 * @vr 水滴纵高（中心到尖端距离）
 **/
var Droplet = function (_Path) {
    inherits$1(Droplet, _Path);
    function Droplet(opt) {
        var _this;
        classCallCheck$1(this, Droplet);
        opt = _.extend({
            type: "droplet",
            context: {
                hr: 0,
                vr: 0 //{number},  // 必须，水滴纵高（中心到尖端距离）
            }
        }, Utils.checkOpt(opt));
        var my = (_this = possibleConstructorReturn$1(this, (Droplet.__proto__ || Object.getPrototypeOf(Droplet)).call(this, opt)), _this);
        _this.context.$model.path = _this.createPath();
        return _this;
    }
    createClass$1(Droplet, [{
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
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 椭圆形 类
 *
 * 对应context的属性有
 *
 * @hr 椭圆横轴半径
 * @vr 椭圆纵轴半径
 */
var Ellipse$2 = function (_Shape) {
    inherits$1(Ellipse, _Shape);
    function Ellipse(opt) {
        classCallCheck$1(this, Ellipse);
        opt = _.extend({
            type: "ellipse",
            context: {
                hr: 0,
                vr: 0 //{number},  // 必须，水滴纵高（中心到尖端距离）
            }
        }, Utils.checkOpt(opt));
        return possibleConstructorReturn$1(this, (Ellipse.__proto__ || Object.getPrototypeOf(Ellipse)).call(this, opt));
    }
    createClass$1(Ellipse, [{
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
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 多边形 类  （不规则）
 *
 * 对应context的属性有
 * @pointList 多边形各个顶角坐标
 **/
var Polygon$2 = function (_Shape) {
    inherits$1(Polygon, _Shape);
    function Polygon(opt) {
        classCallCheck$1(this, Polygon);
        var _context = _.extend({
            lineType: null,
            smooth: false,
            pointList: [],
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
        return possibleConstructorReturn$1(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, opt));
    }
    createClass$1(Polygon, [{
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
                //如果为虚线
                if (context.lineType == 'dashed' || context.lineType == 'dotted') {
                    //首先把前面的draphicsData设置为fill only
                    //也就是把line强制设置为false，这点很重要，否则你虚线画不出来，会和这个实现重叠了
                    graphics.currentPath.line = false;
                    if (context.smooth) {
                        //如果是smooth，本身已经被用曲率打散过了，不需要采用间隔法
                        for (var si = 0, sl = pointList.length; si < sl; si++) {
                            if (si == sl - 1) {
                                break;
                            }
                            graphics.moveTo(pointList[si][0], pointList[si][1]);
                            graphics.lineTo(pointList[si + 1][0], pointList[si + 1][1]);
                            si += 1;
                        }
                    }
                    else {
                        //画虚线的方法  
                        graphics.moveTo(pointList[0][0], pointList[0][1]);
                        for (var i = 1, l = pointList.length; i < l; i++) {
                            var fromX = pointList[i - 1][0];
                            var toX = pointList[i][0];
                            var fromY = pointList[i - 1][1];
                            var toY = pointList[i][1];
                            this.dashedLineTo(graphics, fromX, fromY, toX, toY, 5);
                        }
                    }
                }
                graphics.closePath();
                return;
            }
        }]);
    return Polygon;
}(Shape);
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 正n边形（n>=3）
 *
 * 对应context的属性有
 *
 * @r 正n边形外接圆半径
 * @r 指明正几边形
 *
 * @pointList 私有，从上面的r和n计算得到的边界值的集合
 */
var Isogon = function (_Polygon) {
    inherits$1(Isogon, _Polygon);
    function Isogon(opt) {
        classCallCheck$1(this, Isogon);
        var _context = _.extend({
            pointList: [],
            r: 0,
            n: 0 //{number},  // 必须，指明正几边形
        }, opt.context);
        _context.pointList = myMath.getIsgonPointList(_context.n, _context.r);
        opt.context = _context;
        opt.type = "isogon";
        return possibleConstructorReturn$1(this, (Isogon.__proto__ || Object.getPrototypeOf(Isogon)).call(this, opt));
    }
    createClass$1(Isogon, [{
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
}(Polygon$2);
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 线条 类
 *
 *
 * 对应context的属性有
 * @lineType  可选 虚线 实现 的 类型
 **/
var Line = function (_Shape) {
    inherits$1(Line, _Shape);
    function Line(opt) {
        classCallCheck$1(this, Line);
        var _context = _.extend({
            lineType: null,
            start: {
                x: 0,
                y: 0 // 必须，起点纵坐标
            },
            end: {
                x: 0,
                y: 0 // 必须，终点纵坐标
            },
            dashLength: 3 // 虚线间隔
        }, opt.context);
        opt.context = _context;
        opt.type = "line";
        return possibleConstructorReturn$1(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, opt));
    }
    createClass$1(Line, [{
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
                if (!model.lineType || model.lineType == 'solid') {
                    graphics.moveTo(model.start.x, model.start.y);
                    graphics.lineTo(model.end.x, model.end.y);
                }
                else if (model.lineType == 'dashed' || model.lineType == 'dotted') {
                    this.dashedLineTo(graphics, model.start.x, model.start.y, model.end.x, model.end.y, model.dashLength);
                }
                return this;
            }
        }]);
    return Line;
}(Shape);
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 矩现 类  （不规则）
 *
 *
 * 对应context的属性有
 * @width 宽度
 * @height 高度
 * @radius 如果是圆角的，则为【上右下左】顺序的圆角半径数组
 **/
var Rect = function (_Shape) {
    inherits$1(Rect, _Shape);
    function Rect(opt) {
        classCallCheck$1(this, Rect);
        var _context = _.extend({
            width: 0,
            height: 0,
            radius: []
        }, opt.context);
        opt.context = _context;
        opt.type = "rect";
        return possibleConstructorReturn$1(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this, opt));
    }
    createClass$1(Rect, [{
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
                var model = this.context.$model;
                //左上、右上、右下、左下角的半径依次为r1、r2、r3、r4
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
                }
                else {
                    this._buildRadiusPath(graphics);
                }
                graphics.closePath();
                return;
            }
        }]);
    return Rect;
}(Shape);
/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 扇形 类
 *
 * 坐标原点再圆心
 *
 * 对应context的属性有
 * @r0 默认为0，内圆半径指定后将出现内弧，同时扇边长度 = r - r0
 * @r  必须，外圆半径
 * @startAngle 起始角度(0, 360)
 * @endAngle   结束角度(0, 360)
 **/
var Sector = function (_Shape) {
    inherits$1(Sector, _Shape);
    function Sector(opt) {
        classCallCheck$1(this, Sector);
        var _context = _.extend({
            pointList: [],
            r0: 0,
            r: 0,
            startAngle: 0,
            endAngle: 0,
            clockwise: false //是否顺时针，默认为false(顺时针)
        }, opt.context);
        opt.context = _context;
        opt.regAngle = [];
        opt.isRing = false; //是否为一个圆环
        opt.type = "sector";
        return possibleConstructorReturn$1(this, (Sector.__proto__ || Object.getPrototypeOf(Sector)).call(this, opt));
    }
    createClass$1(Sector, [{
            key: "watch",
            value: function watch(name, value, preValue) {
                if (name == "r0" || name == "r" || name == "startAngle" || name == "endAngle" || name == "clockwise") {
                    //因为这里的graphs不一样。
                    this.graphics.clear();
                }
            }
        }, {
            key: "draw",
            value: function draw(graphics) {
                var model = this.context.$model;
                // 形内半径[0,r)
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
                endAngle = myMath.degreeToRadian(endAngle);
                //处理下极小夹角的情况
                //if( endAngle - startAngle < 0.025 ){
                //    startAngle -= 0.003
                //}
                var G = graphics;
                //G.beginPath();
                if (this.isRing) {
                    if (model.r0 == 0) {
                        //圆
                        G.drawCircle(0, 0, model.r);
                    }
                    else {
                        //圆环
                        if (model.fillStyle && model.fillAlpha) {
                            G.beginPath();
                            G.arc(0, 0, r, startAngle, endAngle, model.clockwise);
                            if (model.r0 == 0) {
                                G.lineTo(0, 0);
                            }
                            else {
                                G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
                            }
                            G.closePath();
                            G.currentPath.lineWidth = 0;
                            G.currentPath.strokeStyle = null;
                            G.currentPath.lineAlpha = 0;
                            G.currentPath.line = false;
                        }
                        if (model.lineWidth && model.strokeStyle && model.lineAlpha) {
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
                }
                else {
                    //正常的扇形状
                    G.beginPath();
                    G.arc(0, 0, r, startAngle, endAngle, model.clockwise);
                    if (model.r0 == 0) {
                        G.lineTo(0, 0);
                    }
                    else {
                        G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
                    }
                    G.closePath();
                }
                //G.closePath();
            }
        }]);
    return Sector;
}(Shape);
//shapes
var Canvax = {
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
    Circle: Circle$2,
    Droplet: Droplet,
    Ellipse: Ellipse$2,
    Isogon: Isogon,
    Line: Line,
    Path: Path,
    Polygon: Polygon$2,
    Rect: Rect,
    Sector: Sector
};
Canvax.Event = {
    EventDispatcher: EventDispatcher,
    EventManager: EventManager
};
Canvax.AnimationFrame = AnimationFrame;
Canvax._ = _;
Canvax.$ = $;
Canvax.utils = Utils;
var canvax = Canvax;
var _colors = ["#ff8533", "#73ace6", "#82d982", "#e673ac", "#cd6bed", "#8282d9", "#c0e650", "#e6ac73", "#6bcded", "#73e6ac", "#ed6bcd", "#9966cc"];
var theme = {
    colors: _colors,
    set: function set(colors) {
        this.colors = colors;
        /*
        var me = this;
        _.each( colors, function( color , i ){
            me.colors[i] = color;
        } );
        */
        return this.colors;
    },
    get: function get() {
        return this.colors;
    }
};
//图表皮肤
var global$1 = {
    setGlobalTheme: function setGlobalTheme(colors) {
        theme.set(colors);
    },
    getGlobalTheme: function getGlobalTheme() {
        return theme.get();
    },
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
    getOptions: function getOptions(chartPark_cid, options) {
        //chartPark_cid,chartpark中的图表id
        if (!options) {
            options = this.options;
        }
        if (!options[chartPark_cid]) {
            return;
        }
        var JsonSerialize = {
            prefix: '[[JSON_FUN_PREFIX_',
            suffix: '_JSON_FUN_SUFFIX]]'
        };
        var parse = function parse(string) {
            return JSON.parse(string, function (key, value) {
                if (typeof value === 'string' && value.indexOf(JsonSerialize.suffix) > 0 && value.indexOf(JsonSerialize.prefix) == 0) {
                    return new Function('return ' + value.replace(JsonSerialize.prefix, '').replace(JsonSerialize.suffix, ''))();
                }
                return value;
            }) || {};
        };
        var opt = parse(decodeURIComponent(options[chartPark_cid] || {}));
        return opt;
    }
};
var _$2 = canvax._;
//如果应用传入的数据是[{name:name, sex:sex ...} , ...] 这样的数据，就自动转换为chartx需要的矩阵格式数据
function parse2MatrixData(list) {
    if (list === undefined || list === null) {
        list = [];
    } //检测第一个数据是否为一个array, 否就是传入了一个json格式的数据
    if (list.length > 0 && !_$2.isArray(list[0])) {
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
    }
    else {
        return list;
    }
}
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
    }
    else {
        return String($n);
    }
}
function getEl(el) {
    if (_$2.isString(el)) {
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
}
/**
* 获取一个path路径
* @param  {[Array]} $arr    [数组]
* @return {[String]}        [path字符串]
*/
function getPath($arr) {
    var M = 'M', L = 'L', Z = 'z';
    var s = '';
    var start = {
        x: 0,
        y: 0
    };
    if (_$2.isArray($arr[0])) {
        start.x = $arr[0][0];
        start.y = $arr[0][1];
        s = M + $arr[0][0] + ' ' + $arr[0][1];
    }
    else {
        start = $arr[0];
        s = M + $arr[0].x + ' ' + $arr[0].y;
    }
    for (var a = 1, al = $arr.length; a < al; a++) {
        var x = 0, y = 0, item = $arr[a];
        if (_$2.isArray(item)) {
            x = item[0];
            y = item[1];
        }
        else {
            x = item.x;
            y = item.y;
        }
        //s += ' ' + L + x + ' ' + y
        if (x == start.x && y == start.y) {
            s += ' ' + Z;
        }
        else {
            s += ' ' + L + x + ' ' + y;
        }
    }
    // s += ' ' + Z
    return s;
}
/**
* 把原始的数据
* field1 field2 field3
*   1      2      3
*   2      3      4
* 这样的数据格式转换为内部的
* [{field:'field1',index:0,data:[1,2]} ......]
* 这样的结构化数据格式。
*/
var _$3 = canvax._;
function DataFrame(data, opt) {
    var dataFrame = {
        length: 0,
        org: [],
        data: [],
        getRowData: _getRowData,
        getFieldData: _getFieldData,
        getDataOrg: getDataOrg,
        fields: [],
        range: {
            start: 0,
            end: 0
        }
    };
    if (!data || data.length == 0) {
        return dataFrame;
    }
    //检测第一个数据是否为一个array, 否就是传入了一个json格式的数据
    if (data.length > 0 && !_$3.isArray(data[0])) {
        data = parse2MatrixData(data);
        dataFrame.length = data.length;
    }
    else {
        dataFrame.length = data.length - 1;
    }
    //设置好数据区间end值
    dataFrame.range.end = dataFrame.length - 1;
    //然后检查opts中是否有dataZoom.range
    if (opt && opt.dataZoom && opt.dataZoom.range) {
        _$3.extend(dataFrame.range, opt.dataZoom.range);
    }
    dataFrame.org = data;
    dataFrame.fields = data[0] ? data[0] : []; //所有的字段集合;
    var total = []; //已经处理成[o,o,o]   o={field:'val1',index:0,data:[1,2,3]}
    for (var a = 0, al = dataFrame.fields.length; a < al; a++) {
        var o = {};
        o.field = dataFrame.fields[a];
        o.index = a;
        o.data = [];
        total.push(o);
    }
    dataFrame.data = total;
    //填充好total的data并且把属于yAxis的设置为number
    for (var a = 1, al = data.length; a < al; a++) {
        for (var b = 0, bl = data[a].length; b < bl; b++) {
            /*
            var _val = data[a][b];
            if( !isNaN( _val ) ){
                _val = Number( _val );
            };
            */
            total[b].data.push(data[a][b]);
        }
    }
    //会按照$field的格式转换成对应一一对应的 org 的结构
    function getDataOrg($field, format, totalList, lev) {
        if (!lev)
            lev = 0;
        var arr = totalList || total;
        if (!arr) {
            return;
        }
        if (!format) {
            format = function format(e) {
                return e;
            };
        }
        function _format(data) {
            for (var i = 0, l = data.length; i < l; i++) {
                data[i] = format(data[i]);
            }
            return data;
        }
        if (!_$3.isArray($field)) {
            $field = [$field];
        }
        //这个时候的arr只是totalList的过滤，还没有完全的按照$field 中的排序
        var newData = [];
        for (var i = 0, l = $field.length; i < l; i++) {
            if (_$3.isArray($field[i])) {
                newData.push(getDataOrg($field[i], format, totalList, lev + 1));
            }
            else {
                var _fieldData = newData;
                if (!lev) {
                    _fieldData = [];
                }
                for (var ii = 0, iil = arr.length; ii < iil; ii++) {
                    if ($field[i] == arr[ii].field) {
                        _fieldData.push(_format(arr[ii].data.slice(dataFrame.range.start, dataFrame.range.end + 1)));
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
     * 获取某一行数据
    */
    function _getRowData(index) {
        var o = {};
        var data = dataFrame.data;
        for (var a = 0; a < data.length; a++) {
            o[data[a].field] = data[a].data[dataFrame.range.start + index];
        }
        return o;
    }
    function _getFieldData(field) {
        var data;
        _$3.each(dataFrame.data, function (d) {
            if (d.field == field) {
                data = d;
            }
        });
        if (data) {
            return data.data.slice(dataFrame.range.start, dataFrame.range.end + 1);
        }
        else {
            return [];
        }
    }
    return dataFrame;
}
var _$4 = canvax._;
var padding = 20;
var Chart = function (_Canvax$Event$EventDi) {
    inherits(Chart, _Canvax$Event$EventDi);
    function Chart(node, data, opt) {
        classCallCheck(this, Chart);
        var _this = possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, node, data, opt));
        _this.Canvax = canvax;
        _this._node = node;
        //不管传入的是data = [ ['xfield','yfield'] , ['2016', 111]]
        //还是 data = [ {xfiled, 2016, yfield: 1111} ]，这样的格式，
        //通过parse2MatrixData最终转换的是data = [ ['xfield','yfield'] , ['2016', 111]] 这样 chartx的数据格式
        //后面有些地方比如 一些graphs中会使用dataFrame.org，， 那么这个dataFrame.org和_data的区别是，
        //_data是全量数据， dataFrame.org是_data经过dataZoom运算过后的子集
        _this._data = parse2MatrixData(data);
        _this._opts = opt;
        _this.el = getEl(node); //chart 在页面里面的容器节点，也就是要把这个chart放在哪个节点里
        _this.width = parseInt(_this.el.offsetWidth); //图表区域宽
        _this.height = parseInt(_this.el.offsetHeight); //图表区域高
        //padding 不支持用户设置， 主要是给内部组件比如 配置了 legend的话，
        //legend如果在top，就会把图表的padding.top修改，减去legend的height
        _this.padding = {
            top: padding,
            right: padding,
            bottom: padding,
            left: padding
        };
        //Canvax实例
        _this.canvax = new canvax.App({
            el: _this.el,
            webGL: false
        });
        _this.canvax.registEvent();
        _this.id = "chartx_" + _this.canvax.id;
        _this.el.setAttribute("chart_id", _this.id);
        _this.el.setAttribute("chartx_version", "2.0");
        //设置stage ---------------------------------------------------------begin
        _this.stage = new canvax.Display.Stage({
            id: "main-chart-stage"
        });
        _this.canvax.addChild(_this.stage);
        //设置stage ---------------------------------------------------------end
        //构件好coord 和 graphs 的根容器
        _this.setCoord_Graphs_Sp();
        //初始化_graphs为空数组
        _this._graphs = [];
        //组件管理机制,所有的组件都绘制在这个地方
        _this.components = [];
        _this.inited = false;
        _this.dataFrame = null; //每个图表的数据集合 都 存放在dataFrame中。
        _this._theme = _$4.extend([], theme.colors); //theme.colors;  //皮肤对象，opts里面可能有theme皮肤组件
        _this.init.apply(_this, arguments);
        return _this;
    }
    createClass(Chart, [{
            key: "init",
            value: function init() { }
        }, {
            key: "draw",
            value: function draw() { }
            //ind 如果有就获取对应索引的具体颜色值
        }, {
            key: "getTheme",
            value: function getTheme(ind) {
                var colors = this._theme;
                if (ind != undefined) {
                    return colors[ind % colors.length] || "#ccc";
                }
                return colors;
            }
        }, {
            key: "setCoord_Graphs_Sp",
            value: function setCoord_Graphs_Sp() {
                //坐标系存放的容器
                this.coordSprite = new canvax.Display.Sprite({
                    id: 'coordSprite'
                });
                this.stage.addChild(this.coordSprite);
                //graphs管理
                this.graphsSprite = new canvax.Display.Sprite({
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
                this._clean();
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
            key: "_clean",
            value: function _clean() {
                //保留所有的stage，stage下面得元素全部 destroy 掉
                for (var i = 0, l = this.canvax.children.length; i < l; i++) {
                    var stage = this.canvax.getChildAt(i);
                    for (var s = 0, sl = stage.children.length; s < sl; s++) {
                        stage.getChildAt(s).destroy();
                        s--;
                        sl--;
                    }
                }
                //因为上面的destroy把 this.coordSprite 和 this.graphsSprite 这两个预设的容器给destroy了
                //所以要重新设置一遍准备好。
                this.setCoord_Graphs_Sp();
                this.components = []; //组件清空
                this._graphs = []; //绘图组件清空
                this.canvax.domView.innerHTML = "";
                //padding数据也要重置为起始值
                this.padding = {
                    top: padding,
                    right: padding,
                    bottom: padding,
                    left: padding
                };
            }
            /**
             * 容器的尺寸改变重新绘制
             */
        }, {
            key: "resize",
            value: function resize() {
                var _w = parseInt(this.el.offsetWidth);
                var _h = parseInt(this.el.offsetHeight);
                if (_w == this.width && _h == this.height)
                    return;
                this.width = _w;
                this.height = _h;
                this.canvax.resize();
                this.inited = false;
                this._clean();
                this.draw({
                    resize: true
                });
                this.inited = true;
            }
            /**
             * reset 其实就是重新绘制整个图表，不再做详细的拆分opts中有哪些变化，来做对应的细致的变化，简单粗暴的全部重新创立
             */
        }, {
            key: "reset",
            value: function reset(opt, data) {
                !opt && (opt = {});
                _$4.extend(true, this._opts, opt);
                //和上面的不同this._opts存储的都是用户设置的配置
                //而下面的这个extend到this上面， this上面的属性都有包含默认配置的情况
                _$4.extend(true, this, opt);
                if (data) {
                    this._data = parse2MatrixData(data);
                }
                this.dataFrame = this.initData(this._data, opt);
                this._clean();
                this.draw(opt);
            }
            /*
             * 只响应数据的变化，不涉及配置变化
             *
             * @dataTrigger 一般是触发这个data reset的一些场景数据，
             * 比如如果是 datazoom 触发的， 就会有 trigger数据{ name:'datazoom', left:1,right:1 }
             */
        }, {
            key: "resetData",
            value: function resetData(data, dataTrigger) {
                if (data) {
                    this._data = parse2MatrixData(data);
                    this.dataFrame = this.initData(this._data);
                }
                this._resetData && this._resetData(dataTrigger);
                this.fire("resetData");
            }
        }, {
            key: "initData",
            value: function initData() {
                return DataFrame.apply(this, arguments);
            }
            //插件管理相关代码begin
        }, {
            key: "initComponents",
            value: function initComponents() {
                var me = this;
                //TODO: theme 组件优先级最高，在registerComponents之前已经加载过
                var notComponents = ["coord", "graphs", "theme"];
                for (var _p in this._opts) {
                    if (_$4.indexOf(notComponents, _p) == -1) {
                        var _comp = this._opts[_p];
                        if (!_$4.isArray(_comp)) {
                            _comp = [_comp];
                        }
                        _$4.each(_comp, function (compOpt) {
                            var compConstructor = me.componentsMap[_p];
                            if (compConstructor && compConstructor.register) {
                                compConstructor.register(compOpt, me);
                            }
                        });
                    }
                }
            }
            //所有plug触发更新
        }, {
            key: "componentsReset",
            value: function componentsReset(trigger) {
                var me = this;
                _$4.each(this.components, function (p, i) {
                    if (trigger && trigger.name == p.type) {
                        //如果这次reset就是由自己触发的，那么自己这个components不需要reset，负责观察就好
                        return;
                    }
                    if (p.type == "dataZoom") {
                        p.plug.reset({}, me._getCloneChart());
                        return;
                    }
                    p.plug.reset && p.plug.reset(me[p.type] || {}, me.dataFrame);
                });
            }
        }, {
            key: "drawComponents",
            value: function drawComponents() {
                for (var i = 0, l = this.components.length; i < l; i++) {
                    var p = this.components[i];
                    p.plug && p.plug.draw && p.plug.draw();
                    if (p.type == "once") {
                        this.components.splice(i, 1);
                        i--;
                        //l--; l重新计算p.plug.draw 可能会改变components
                    }
                    l = this.components.length;
                }
            }
        }, {
            key: "getComponentsByType",
            value: function getComponentsByType(type) {
                var arr = [];
                _$4.each(this.components, function (c) {
                    if (c.type == type) {
                        arr.push(c.plug);
                    }
                });
                return arr;
            }
        }, {
            key: "getComponentById",
            value: function getComponentById(id) {
                var comp;
                _$4.each(this.components, function (c) {
                    if (c.id == id) {
                        comp = c;
                        return false;
                    }
                });
                return comp ? comp.plug : null;
            }
            //插件相关代码end
            //获取graphs列表根据type
        }, {
            key: "getGraphsByType",
            value: function getGraphsByType(type) {
                var arr = [];
                _$4.each(this._graphs, function (g) {
                    if (g.type == type) {
                        arr.push(g);
                    }
                });
                return arr;
            }
            //获取graphs根据id
        }, {
            key: "getGraphById",
            value: function getGraphById(id) {
                var _g;
                _$4.each(this._graphs, function (g) {
                    if (g.id == id) {
                        _g = g;
                        return false;
                    }
                });
                return _g;
            }
        }]);
    return Chart;
}(canvax.Event.EventDispatcher);
var _$5 = canvax._;
/**
 * 所有坐标系的基类，一些坐标系中复用的代码，沉淀在这里
 * 空坐标系，一些非直角坐标系，极坐标系的图表，就会直接创建一个空坐标系图表，然后添加组件
 */
var Coord = function (_Chart) {
    inherits(Coord, _Chart);
    function Coord(node, data, opt, graphsMap, componentsMap) {
        classCallCheck(this, Coord);
        var _this = possibleConstructorReturn(this, (Coord.__proto__ || Object.getPrototypeOf(Coord)).call(this, node, data, opt));
        _this.graphsMap = graphsMap;
        _this.componentsMap = componentsMap;
        //这里不要直接用data，而要用 this._data
        _this.dataFrame = _this.initData(_this._data, opt);
        _this._graphs = [];
        if (opt.graphs) {
            opt.graphs = _$5.flatten([opt.graphs]);
        }
        _$5.extend(true, _this, _this.setDefaultOpts(opt));
        //this.draw();
        return _this;
    }
    createClass(Coord, [{
            key: "setDefaultOpts",
            value: function setDefaultOpts(opt) {
                return opt;
            }
            //覆盖基类中得draw，和基类的draw唯一不同的是，descartes 会有 drawEndHorizontal 的操作
            //create的时候调用没有opt参数
            //resize（opt=={resize : true}） 和 reset的时候会有 opt参数传过来
        }, {
            key: "draw",
            value: function draw(opt) {
                if (this._opts.theme) {
                    //如果用户有配置皮肤组件，优先级最高
                    //皮肤就是一组颜色
                    //假如用户就只传了一个颜色值
                    if (!_$5.isArray(this._opts.theme)) {
                        this._opts.theme = [this._opts.theme];
                    }
                    var _theme = new this.componentsMap.theme(this._opts.theme, this);
                    this._theme = _theme.get(); //如果用户有设置图表皮肤组件，那么就全部用用户自己设置的，不再用merge
                }
                this.initModule(opt); //初始化模块  
                this.initComponents(opt); //初始化组件, 来自己chart.js模块
                if (this._coord && this._coord.horizontal) {
                    this.drawBeginHorizontal && this.drawBeginHorizontal();
                }
                this.startDraw(opt); //开始绘图，包括坐标系和graphs 和 components
                if (this._coord && this._coord.horizontal) {
                    this.drawEndHorizontal && this.drawEndHorizontal();
                }
            }
        }, {
            key: "initModule",
            value: function initModule(opt) {
                var me = this;
                //首先是创建一个坐标系对象
                if (this.CoordComponents) {
                    this._coord = new this.CoordComponents(this.coord, this);
                    this.coordSprite.addChild(this._coord.sprite);
                }
                _$5.each(this.graphs, function (graphs) {
                    var _g = new me.graphsMap[graphs.type](graphs, me);
                    me._graphs.push(_g);
                    me.graphsSprite.addChild(_g.sprite);
                });
            }
        }, {
            key: "startDraw",
            value: function startDraw(opt) {
                var me = this;
                !opt && (opt = {});
                var _coord = this._coord;
                var width = this.width - this.padding.left - this.padding.right;
                var height = this.height - this.padding.top - this.padding.bottom;
                var origin = { x: this.padding.left, y: this.padding.top };
                if (this._coord) {
                    //先绘制好坐标系统
                    this._coord.draw(opt);
                    width = this._coord.width;
                    height = this._coord.height;
                    origin = this._coord.origin;
                }
                if (this.dataFrame.length == 0) {
                    //如果没有数据，不需要绘制graphs
                    me.fire("complete");
                    return;
                }
                var graphsCount = this._graphs.length;
                var completeNum = 0;
                opt = _$5.extend(opt, {
                    width: width,
                    height: height,
                    origin: origin
                });
                _$5.each(this._graphs, function (_g) {
                    _g.on("complete", function (g) {
                        completeNum++;
                        if (completeNum == graphsCount) {
                            me.fire("complete");
                        }
                        _g.inited = true;
                    });
                    _g.draw(opt);
                });
                this.drawComponents(opt); //绘图完，开始绘制插件，来自己chart.js模块
                this.bindEvent();
            }
            //reset之前是应该已经 merge过了 opt ，  和准备好了dataFrame
        }, {
            key: "_resetData",
            value: function _resetData(dataTrigger) {
                var me = this;
                if (this._coord) {
                    this._coord.resetData(this.dataFrame, dataTrigger);
                }
                _$5.each(this._graphs, function (_g) {
                    _g.resetData(me.dataFrame, dataTrigger);
                });
                this.componentsReset(dataTrigger);
            }
        }, {
            key: "show",
            value: function show(field, legendData) {
                this._coord.addField(field, legendData);
                _$5.each(this._graphs, function (_g) {
                    _g.show(field, legendData);
                });
            }
        }, {
            key: "hide",
            value: function hide(field, legendData) {
                this._coord.removeField(field, legendData);
                _$5.each(this._graphs, function (_g) {
                    _g.hide(field, legendData);
                });
            }
            //坐标系图表的集中事件绑定处理
        }, {
            key: "bindEvent",
            value: function bindEvent() {
                var me = this;
                this.on("panstart mouseover", function (e) {
                    var _tips = me.getComponentById("tips");
                    if (_tips) {
                        me.setTipsInfo.apply(me, [e]);
                        _tips.show(e);
                        me._tipsPointerAtAllGraphs(e);
                    }
                });
                this.on("panmove mousemove", function (e) {
                    var _tips = me.getComponentById("tips");
                    if (_tips) {
                        me.setTipsInfo.apply(me, [e]);
                        _tips.move(e);
                        me._tipsPointerAtAllGraphs(e);
                    }
                });
                this.on("panend mouseout", function (e) {
                    //如果e.toTarget有货，但是其实这个point还是在induce 的范围内的
                    //那么就不要执行hide，顶多只显示这个点得tips数据
                    var _tips = me.getComponentById("tips");
                    if (_tips && !(e.toTarget && me._coord && me._coord.induce && me._coord.induce.containsPoint(me._coord.induce.globalToLocal(e.target.localToGlobal(e.point))))) {
                        _tips.hide(e);
                        me._tipsPointerHideAtAllGraphs(e);
                    }
                });
                this.on("tap", function (e) {
                    var _tips = me.getComponentById("tips");
                    if (_tips) {
                        _tips.hide(e);
                        me.setTipsInfo.apply(me, [e]);
                        _tips.show(e);
                        me._tipsPointerAtAllGraphs(e);
                    }
                });
            }
            //默认的基本tipsinfo处理，极坐标和笛卡尔坐标系统会覆盖
        }, {
            key: "setTipsInfo",
            value: function setTipsInfo(e) {
                if (!e.eventInfo) {
                    e.eventInfo = {};
                }
                if (!e.eventInfo.nodes || !e.eventInfo.nodes.length) {
                    var nodes = [];
                    _$5.each(this._graphs, function (_g) {
                        nodes = nodes.concat(_g.getNodesAt(e));
                    });
                    e.eventInfo.nodes = nodes;
                }
            }
            //把这个point拿来给每一个graphs执行一次测试，给graphs上面的shape触发激活样式
        }, {
            key: "_tipsPointerAtAllGraphs",
            value: function _tipsPointerAtAllGraphs(e) {
                _$5.each(this._graphs, function (_g) {
                    _g.tipsPointerOf(e);
                });
            }
        }, {
            key: "_tipsPointerHideAtAllGraphs",
            value: function _tipsPointerHideAtAllGraphs(e) {
                _$5.each(this._graphs, function (_g) {
                    _g.tipsPointerHideOf(e);
                });
            }
        }]);
    return Coord;
}(Chart);
var _$6 = canvax._;
var coorBase = function (_Canvax$Event$EventDi) {
    inherits(coorBase, _Canvax$Event$EventDi);
    function coorBase(opt, root) {
        classCallCheck(this, coorBase);
        var _this = possibleConstructorReturn(this, (coorBase.__proto__ || Object.getPrototypeOf(coorBase)).call(this, opt, root));
        _this._opts = opt;
        _this.root = root;
        _this.dataFrame = _this.root.dataFrame;
        //这个width为坐标系的width，height， 不是 图表的width和height（图表的widht，height有padding等）
        _this.width = 0;
        _this.height = 0;
        _this.origin = {
            x: 0,
            y: 0
        };
        _this.sprite = null;
        /*
        吧原始的field转换为对应结构的显示树
        ["uv"] --> [
            {field:'uv',enabled:true ,yAxis: yAxisleft }
            ...
        ]
        */
        _this.fieldsMap = null;
        _this.induce = null;
        return _this;
    }
    //设置 fieldsMap 中对应field 的 enabled状态
    createClass(coorBase, [{
            key: "setFieldEnabled",
            value: function setFieldEnabled(field) {
                var me = this;
                function set$$1(maps) {
                    _$6.each(maps, function (map, i) {
                        if (_$6.isArray(map)) {
                            set$$1(map);
                        }
                        else if (map.field && map.field == field) {
                            map.enabled = !map.enabled;
                        }
                    });
                }
                set$$1(me.fieldsMap);
            }
        }, {
            key: "getFieldMapOf",
            value: function getFieldMapOf(field) {
                var me = this;
                var fieldMap = null;
                function get$$1(maps) {
                    _$6.each(maps, function (map, i) {
                        if (_$6.isArray(map)) {
                            get$$1(map);
                        }
                        else if (map.field && map.field == field) {
                            fieldMap = map;
                            return false;
                        }
                    });
                }
                get$$1(me.fieldsMap);
                return fieldMap;
            }
            //如果有传参数 fields 进来，那么就把这个指定的 fields 过滤掉 enabled==false的field
            //只留下enabled的field 结构
        }, {
            key: "filterEnabledFields",
            value: function filterEnabledFields(fields) {
                var me = this;
                var arr = [];
                if (!_$6.isArray(fields))
                    fields = [fields];
                _$6.each(fields, function (f) {
                    if (!_$6.isArray(f)) {
                        if (me.getFieldMapOf(f).enabled) {
                            arr.push(f);
                        }
                    }
                    else {
                        //如果这个是个纵向数据，说明就是堆叠配置
                        var varr = [];
                        _$6.each(f, function (v_f) {
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
            key: "removeField",
            value: function removeField(field) {
                this.changeFieldEnabled(field);
            }
        }, {
            key: "addField",
            value: function addField(field) {
                this.changeFieldEnabled(field);
            }
        }]);
    return coorBase;
}(canvax.Event.EventDispatcher);
var _$7 = canvax._;
function normalizeTickInterval(interval, magnitude) {
    var normalized, i;
    // var multiples = [1, 2, 2.5, 5, 10];
    var multiples = [1, 2, 5, 10];
    // round to a tenfold of 1, 2, 2.5 or 5
    normalized = interval / magnitude;
    // normalize the interval to the nearest multiple
    for (var i = 0; i < multiples.length; i++) {
        interval = multiples[i];
        if (normalized <= (multiples[i] + (multiples[i + 1] || multiples[i])) / 2) {
            break;
        }
    }
    // multiply back to the correct magnitude
    interval *= magnitude;
    return interval;
}
function correctFloat(num) {
    return parseFloat(num.toPrecision(14));
}
function getLinearTickPositions(arr, $maxPart, $cfg) {
    arr = _$7.without(arr, undefined, null, "");
    var scale = $cfg && $cfg.scale ? parseFloat($cfg.scale) : 1;
    //返回的数组中的值 是否都为整数(思霏)  防止返回[8, 8.2, 8.4, 8.6, 8.8, 9]   应该返回[8, 9]
    var isInt = $cfg && $cfg.isInt ? 1 : 0;
    if (isNaN(scale)) {
        scale = 1;
    }
    var max = _$7.max(arr);
    var initMax = max;
    max *= scale;
    var min = _$7.min(arr);
    if (min == max) {
        if (max > 0) {
            min = 0;
            return [min, max];
            // min= Math.round(max/2);
        }
        else if (max < 0) {
            return [max, 0];
            //min = max*2;
        }
        else {
            max = 1;
            return [0, max];
        }
    }
    var length = max - min;
    if (length) {
        var tempmin = min; //保证min>0的时候不会出现负数
        min -= length * 0.05;
        // S.log(min +":"+ tempmin)
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
    var pos, lastPos, roundedMin = correctFloat(Math.floor(min / tickInterval) * tickInterval), roundedMax = correctFloat(Math.ceil(max / tickInterval) * tickInterval), tickPositions = [];
    // Populate the intermediate values
    pos = roundedMin;
    while (pos <= roundedMax) {
        // Place the tick on the rounded value
        tickPositions.push(pos);
        // Always add the raw tickInterval, not the corrected one.
        pos = correctFloat(pos + tickInterval);
        // If the interval is not big enough in the current min - max range to actually increase
        // the loop variable, we need to break out to prevent endless loop. Issue #619
        if (pos === lastPos) {
            break;
        }
        // Record the last value
        lastPos = pos;
    }
    if (tickPositions.length >= 3) {
        if (tickPositions[tickPositions.length - 2] >= initMax) {
            tickPositions.pop();
        }
    }
    return tickPositions;
}
var DataSection = {
    section: function section($arr, $maxPart, $cfg) {
        return _$7.uniq(getLinearTickPositions($arr, $maxPart, $cfg));
    }
};
var Line$1 = canvax.Shapes.Line;
var _$8 = canvax._;
var xAxis = function (_Canvax$Event$EventDi) {
    inherits(xAxis, _Canvax$Event$EventDi);
    function xAxis(opt, data, _coord) {
        classCallCheck(this, xAxis);
        var _this = possibleConstructorReturn(this, (xAxis.__proto__ || Object.getPrototypeOf(xAxis)).call(this));
        _this._opt = opt;
        _this._coord = _coord || {};
        _this.width = 0;
        _this.height = 0;
        _this.title = {
            text: "",
            shapeType: "text",
            fontColor: '#999',
            fontSize: 12,
            offset: 2,
            textAlign: "center",
            textBaseline: "middle",
            strokeStyle: null,
            lineHeight: 0
        };
        _this._title = null; //this.title对应的文本对象
        _this.enabled = true;
        _this.tickLine = {
            enabled: 1,
            lineWidth: 1,
            lineLength: 4,
            offset: 2,
            strokeStyle: '#cccccc'
        };
        _this.axisLine = {
            enabled: 1,
            lineWidth: 1,
            strokeStyle: '#cccccc'
        };
        _this.label = {
            enabled: 1,
            fontColor: '#999',
            fontSize: 12,
            rotation: 0,
            format: null,
            offset: 2,
            textAlign: "center",
            lineHeight: 1,
            evade: true //是否开启逃避检测，目前的逃避只是隐藏
        };
        if (opt.isH && (!opt.label || opt.label.rotaion === undefined)) {
            //如果是横向直角坐标系图
            _this.label.rotation = 90;
        }
        _this.maxTxtH = 0;
        _this.pos = {
            x: 0,
            y: 0
        };
        _this.dataOrg = []; //源数据
        _this.dataSection = []; //默认就等于源数据,也可以用户自定义传入来指定
        _this._formatTextSection = []; //dataSection的值format后一一对应的值
        _this._textElements = []; //_formatTextSection中每个文本对应的canvax.shape.Text对象
        _this.layoutData = []; //{x:100, value:'1000',visible:true}
        _this.sprite = null;
        //过滤器，可以用来过滤哪些yaxis 的 节点是否显示已经颜色之类的
        //@params params包括 dataSection , 索引index，txt(canvax element) ，line(canvax element) 等属性
        _this.filter = null; //function(params){}; 
        _this.isH = false; //是否为横向转向的x轴
        _this.animation = true;
        //layoutType == "proportion"的时候才有效
        _this.maxVal = null;
        _this.minVal = null;
        _this.ceilWidth = 0; //x方向一维均分长度, layoutType == peak 的时候要用到
        _this.layoutType = "rule"; // rule（均分，起点在0） , peak（均分，起点在均分单位的中心）, proportion（实际数据真实位置，数据一定是number）
        //如果用户有手动的 trimLayout ，那么就全部visible为true，然后调用用户自己的过滤程序
        //trimLayout就事把arr种的每个元素的visible设置为true和false的过程
        //function
        _this.trimLayout = null;
        _this.posParseToInt = false; //比如在柱状图中，有得时候需要高精度的能间隔1px的柱子，那么x轴的计算也必须要都是整除的
        _$8.extend(true, _this, opt);
        _this.init(opt, data);
        //xAxis的field只有一个值,
        _this.field = _$8.flatten([_this.field])[0];
        return _this;
    }
    createClass(xAxis, [{
            key: "init",
            value: function init(opt, data) {
                this.sprite = new canvax.Display.Sprite({
                    id: "xAxisSprite"
                });
                this.rulesSprite = new canvax.Display.Sprite({
                    id: "rulesSprite"
                });
                this.sprite.addChild(this.rulesSprite);
                this._initHandle(data);
            }
        }, {
            key: "_initHandle",
            value: function _initHandle(data) {
                var me = this;
                if (data && data.field) {
                    this.field = data.field;
                }
                if (data && data.org) {
                    this.dataOrg = _$8.flatten(data.org);
                }
                if (!this._opt.dataSection && this.dataOrg) {
                    //如果没有传入指定的dataSection，才需要计算dataSection
                    this.dataSection = this._initDataSection(this.dataOrg);
                }
                me._formatTextSection = [];
                me._textElements = [];
                _$8.each(me.dataSection, function (val, i) {
                    me._formatTextSection[i] = me._getFormatText(val, i);
                    //从_formatTextSection中取出对应的格式化后的文本
                    var txt = new canvax.Display.Text(me._formatTextSection[i], {
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
                //取第一个数据来判断xaxis的刻度值类型是否为 number
                !("minVal" in this._opt) && (this.minVal = _$8.min(this.dataSection));
                if (isNaN(this.minVal) || this.minVal == Infinity) {
                    this.minVal = 0;
                }
                !("maxVal" in this._opt) && (this.maxVal = _$8.max(this.dataSection));
                if (isNaN(this.maxVal) || this.maxVal == Infinity) {
                    this.maxVal = 1;
                }
                this._getName();
                this._setXAxisHeight();
            }
            /**
             *return dataSection 默认为xAxis.dataOrg的的faltten
             *即 [ [1,2,3,4] ] -- > [1,2,3,4]
             */
        }, {
            key: "_initDataSection",
            value: function _initDataSection(data) {
                var arr = _$8.flatten(data);
                if (this.layoutType == "proportion") {
                    if (arr.length == 1) {
                        arr.push(0);
                        arr.push(arr[0] * 2);
                    }
                    arr = arr.sort(function (a, b) {
                        return a - b;
                    });
                    arr = DataSection.section(arr);
                }
                return arr;
            }
            //配置和数据变化
        }, {
            key: "resetData",
            value: function resetData(dataFrame) {
                this._initHandle(dataFrame);
                this.draw();
            }
        }, {
            key: "getIndexOfVal",
            value: function getIndexOfVal(xvalue) {
                var i;
                for (var ii = 0, il = this.layoutData.length; ii < il; ii++) {
                    var obj = this.layoutData[ii];
                    if (obj.value == xvalue) {
                        i = ii;
                        break;
                    }
                }
                return i;
            }
        }, {
            key: "getIndexOfX",
            value: function getIndexOfX(x) {
                var iNode = 0;
                if (this.layoutType == "peak") {
                    iNode = parseInt(x / this.ceilWidth);
                    if (iNode == this.dataOrg.length) {
                        iNode = this.dataOrg.length - 1;
                    }
                }
                if (this.layoutType == "rule") {
                    iNode = parseInt((x + this.ceilWidth / 2) / this.ceilWidth);
                    if (this.dataOrg.length == 1) {
                        //如果只有一个数据
                        iNode = 0;
                    }
                }
                if (this.layoutType == "proportion") {
                    iNode = parseInt(x / ((this.maxVal - this.minVal) / this.width));
                }
                return iNode;
            }
        }, {
            key: "getNodeInfoOfX",
            value: function getNodeInfoOfX(x) {
                //nodeInfo 一般是给tips用，和data中得数据比就是少了个textWidth
                //这里和用 data 计算 layoutData的 trimgraphs 中不一样得是
                //这里的val获取必须在dataOrg中获取，统一的dataLen 也必须是用的 this.dataOrg.length
                var ind = this.getIndexOfX(x);
                var val = this.dataOrg[ind];
                var dataLen = this.dataOrg.length;
                var x = x;
                if (this.layoutType == "proportion") {
                    val = (this.maxVal - this.minVal) * (x / this.width) + this.minVal;
                }
                else {
                    x = this.getPosX({
                        val: val,
                        ind: ind,
                        dataLen: dataLen,
                        width: this.width
                    });
                }
                var o = {
                    ind: ind,
                    value: val,
                    text: val,
                    x: x,
                    field: this.field
                };
                o.text = this._getFormatText(val, ind, o);
                return o;
            }
        }, {
            key: "_setXAxisHeight",
            value: function _setXAxisHeight() {
                //检测下文字的高等
                var me = this;
                if (!me.enabled) {
                    me.height = 0;
                }
                else {
                    var _maxTextHeight = 0;
                    if (this.label.enabled) {
                        _$8.each(me.dataSection, function (val, i) {
                            //从_formatTextSection中取出对应的格式化后的文本
                            var txt = me._textElements[i];
                            var textWidth = txt.getTextWidth();
                            var textHeight = txt.getTextHeight();
                            var height = textHeight; //文本在外接矩形height
                            if (!!me.label.rotation) {
                                //有设置旋转
                                if (me.label.rotation == 90) {
                                    height = textWidth;
                                }
                                else {
                                    var sinR = Math.sin(Math.abs(me.label.rotation) * Math.PI / 180);
                                    var cosR = Math.cos(Math.abs(me.label.rotation) * Math.PI / 180);
                                    height = parseInt(sinR * textWidth);
                                }
                            }
                            _maxTextHeight = Math.max(_maxTextHeight, height);
                        });
                    }
                    this.height = _maxTextHeight + this.tickLine.lineLength + this.tickLine.offset + this.label.offset;
                    if (this._title) {
                        this.height += this._title.getTextHeight();
                    }
                }
            }
        }, {
            key: "_getName",
            value: function _getName() {
                if (this.title.text) {
                    if (!this._title) {
                        this._title = new canvax.Display.Text(this.title.text, {
                            context: {
                                fontSize: this.title.fontSize,
                                textAlign: this.title.textAlign,
                                textBaseline: this.title.textBaseline,
                                fillStyle: this.title.fontColor,
                                strokeStyle: this.title.strokeStyle,
                                lineWidth: this.title.lineWidth,
                                rotation: this.isH ? -180 : 0
                            }
                        });
                    }
                    else {
                        this._title.resetText(this.title.text);
                    }
                }
            }
        }, {
            key: "draw",
            value: function draw(opt) {
                //首次渲染从 直角坐标系组件中会传入 opt,包含了width，origin等， 所有这个时候才能计算layoutData
                opt && _$8.extend(true, this, opt);
                this.layoutData = this._trimXAxis(this.dataSection);
                this._trimLayoutData();
                this.sprite.context.x = this.pos.x;
                this.sprite.context.y = this.pos.y;
                this._widget(opt);
            }
            //获取x对应的位置
            //val ind 至少要有一个
        }, {
            key: "getPosX",
            value: function getPosX(opt) {
                var x = 0;
                var val = opt.val;
                var ind = "ind" in opt ? opt.ind : _$8.indexOf(this.dataSection, val); //如果没有ind 那么一定要有val
                var dataLen = "dataLen" in opt ? opt.dataLen : this.dataSection.length;
                var width = "width" in opt ? opt.width : this.width;
                var layoutType = "layoutType" in opt ? opt.layoutType : this.layoutType;
                if (dataLen == 1) {
                    x = width / 2;
                }
                else {
                    if (layoutType == "rule") {
                        //折线图的xyaxis就是 rule
                        x = ind / (dataLen - 1) * width;
                    }
                    if (layoutType == "proportion") {
                        //按照数据真实的值在minVal - maxVal 区间中的比例值
                        if (val == undefined) {
                            val = ind * (this.maxVal - this.minVal) / (dataLen - 1) + this.minVal;
                        }
                        x = width * ((val - this.minVal) / (this.maxVal - this.minVal));
                    }
                    if (layoutType == "peak") {
                        //柱状图的就是peak
                        var _ceilWidth = width / dataLen;
                        if (this.posParseToInt) {
                            _ceilWidth = parseInt(_ceilWidth);
                        }
                        x = _ceilWidth * (ind + 1) - _ceilWidth / 2;
                    }
                }
                if (isNaN(x)) {
                    x = 0;
                }
                return parseInt(x, 10);
            }
        }, {
            key: "_computerCeilWidth",
            value: function _computerCeilWidth() {
                //ceilWidth默认按照peak算, 而且不能按照dataSection的length来做分母
                var width = this.width;
                var ceilWidth = width;
                if (this.dataOrg.length) {
                    ceilWidth = width / this.dataOrg.length;
                    if (this.layoutType == "rule") {
                        if (this.dataOrg.length == 1) {
                            ceilWidth = width / 2;
                        }
                        else {
                            ceilWidth = width / (this.dataOrg.length - 1);
                        }
                    }
                }
                if (this.posParseToInt) {
                    ceilWidth = parseInt(ceilWidth);
                }
                return ceilWidth;
            }
        }, {
            key: "_trimXAxis",
            value: function _trimXAxis($data) {
                var tmpData = [];
                var data = $data || this.dataSection;
                this.ceilWidth = this._computerCeilWidth();
                for (var a = 0, al = data.length; a < al; a++) {
                    var text = this._formatTextSection[a];
                    var txt = this._textElements[a];
                    var o = {
                        ind: a,
                        value: data[a],
                        text: text,
                        x: this.getPosX({
                            val: data[a],
                            ind: a,
                            dataLen: al,
                            width: this.width
                        }),
                        textWidth: txt.getTextWidth(),
                        field: this.field
                    };
                    tmpData.push(o);
                }
                return tmpData;
            }
        }, {
            key: "_getFormatText",
            value: function _getFormatText(val, i) {
                var res;
                if (_$8.isFunction(this.label.format)) {
                    res = this.label.format.apply(this, arguments);
                }
                else {
                    res = val;
                }
                if (_$8.isArray(res)) {
                    res = Tools.numAddSymbol(res);
                }
                if (!res) {
                    res = val;
                }
                return res;
            }
        }, {
            key: "_widget",
            value: function _widget(opt) {
                if (!this.enabled)
                    return;
                !opt && (opt = {});
                var arr = this.layoutData;
                if (this._title) {
                    this._title.context.y = this.height - this._title.getTextHeight() / 2;
                    this._title.context.x = this.width / 2;
                    this.sprite.addChild(this._title);
                }
                var delay = Math.min(1000 / arr.length, 25);
                for (var a = 0, al = arr.length; a < al; a++) {
                    var xNodeId = "xNode" + a;
                    var xNode = this.rulesSprite.getChildById(xNodeId);
                    if (!xNode) {
                        xNode = new canvax.Display.Sprite({
                            id: xNodeId
                        });
                        this.rulesSprite.addChild(xNode);
                    }
                    var o = arr[a];
                    var x = o.x, y = this.tickLine.lineLength + this.tickLine.offset + this.label.offset;
                    if (this.label.enabled && !!arr[a].visible) {
                        //文字
                        var textContext = {
                            x: o._text_x || o.x,
                            y: y + 20,
                            fillStyle: this.label.fontColor,
                            fontSize: this.label.fontSize,
                            rotation: -Math.abs(this.label.rotation),
                            textAlign: this.label.textAlign,
                            lineHeight: this.label.lineHeight,
                            textBaseline: !!this.label.rotation ? "middle" : "top",
                            globalAlpha: 0
                        };
                        if (!!this.label.rotation && this.label.rotation != 90) {
                            textContext.x += 5;
                            textContext.y += 3;
                        }
                        if (xNode._txt) {
                            //_.extend( xNode._txt.context , textContext );
                            xNode._txt.resetText(o.text + "");
                            if (this.animation) {
                                xNode._txt.animate({
                                    x: textContext.x
                                }, {
                                    duration: 300
                                });
                            }
                            else {
                                xNode._txt.context.x = textContext.x;
                            }
                        }
                        else {
                            xNode._txt = new canvax.Display.Text(o.text, {
                                id: "xAxis_txt_" + a,
                                context: textContext
                            });
                            xNode.addChild(xNode._txt);
                            //新建的 txt的 动画方式
                            if (this.animation && !opt.resize) {
                                xNode._txt.animate({
                                    globalAlpha: 1,
                                    y: xNode._txt.context.y - 20
                                }, {
                                    duration: 500,
                                    easing: 'Back.Out',
                                    delay: a * delay,
                                    id: xNode._txt.id
                                });
                            }
                            else {
                                xNode._txt.context.y = xNode._txt.context.y - 20;
                                xNode._txt.context.globalAlpha = 1;
                            }
                        }
                        //xNode._txt.context.visible = !!arr[a].visible;
                    }
                    if (this.tickLine.enabled && !!arr[a].visible) {
                        var lineContext = {
                            x: x,
                            y: this.tickLine.offset,
                            end: {
                                x: 0,
                                y: this.tickLine.lineLength
                            },
                            lineWidth: this.tickLine.lineWidth,
                            strokeStyle: this.tickLine.strokeStyle
                        };
                        if (xNode._line) {
                            //_.extend( xNode._txt.context , textContext );
                            if (this.animation) {
                                xNode._line.animate({
                                    x: lineContext.x
                                }, {
                                    duration: 300
                                });
                            }
                            else {
                                xNode._line.context.x = lineContext.x;
                            }
                        }
                        else {
                            xNode._line = new Line$1({
                                context: lineContext
                            });
                            xNode.addChild(xNode._line);
                        }
                    }
                    //这里可以由用户来自定义过滤 来 决定 该node的样式
                    _$8.isFunction(this.filter) && this.filter({
                        layoutData: arr,
                        index: a,
                        txt: xNode._txt,
                        line: xNode._line || null
                    });
                }
                //把sprite.children中多余的给remove掉
                if (this.rulesSprite.children.length > arr.length) {
                    for (var al = arr.length, pl = this.rulesSprite.children.length; al < pl; al++) {
                        this.rulesSprite.getChildAt(al).remove();
                        al--, pl--;
                    }
                }
                //轴线
                if (this.axisLine.enabled) {
                    var _axisline = new Line$1({
                        context: {
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
                        }
                    });
                    this.sprite.addChild(_axisline);
                }
            }
        }, {
            key: "_trimLayoutData",
            value: function _trimLayoutData() {
                var me = this;
                var arr = this.layoutData;
                var l = arr.length;
                if (!this.enabled || !l)
                    return;
                // rule , peak, proportion
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
                if (this._coord._root) {
                    rootPaddingRight = this._coord._root.padding.right;
                }
                return rootPaddingRight;
            }
        }, {
            key: "_checkOver",
            value: function _checkOver() {
                var me = this;
                var arr = me.layoutData;
                //现在的柱状图的自定义datasection有缺陷
                if (me.trimLayout) {
                    //如果用户有手动的 trimLayout ，那么就全部visible为true，然后调用用户自己的过滤程序
                    //trimLayout就事把arr种的每个元素的visible设置为true和false的过程
                    me.trimLayout(arr);
                    return;
                }
                //如果用户设置不想要做重叠检测
                if (!this.label.evade) {
                    _$8.each(arr, function (layoutItem) {
                        layoutItem.visible = true;
                    });
                    return;
                }
                var l = arr.length;
                var textAlign = me.label.textAlign;
                function checkOver(i) {
                    var curr = arr[i];
                    if (curr === undefined) {
                        return;
                    }
                    curr.visible = true;
                    for (var ii = i; ii < l - 1; ii++) {
                        var next = arr[ii + 1];
                        var nextWidth = next.textWidth;
                        var currWidth = curr.textWidth;
                        //如果有设置rotation，那么就固定一个最佳可视单位width为35  暂定
                        if (!!me.label.rotation) {
                            nextWidth = Math.min(nextWidth, 22);
                            currWidth = Math.min(currWidth, 22);
                        }
                        //默认left
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
                            //next是最后一个
                            if (textAlign == "center" && next.x + nextWidth / 2 > me.width) {
                                next_left_x = me.width - nextWidth;
                                next._text_x = me.width - nextWidth / 2;
                            }
                            if (textAlign == "left" && next.x + nextWidth > me.width) {
                                next_left_x = me.width - nextWidth;
                                next._text_x = me.width - nextWidth;
                            }
                        }
                        //重叠，容许2px的误差
                        if (next_left_x - curr_right_x < -2) {
                            if (ii == l - 2) {
                                //最后一个的话，反把前面的给hide
                                next.visible = true;
                                curr.visible = false;
                                return;
                            }
                            else {
                                next.visible = false;
                            }
                        }
                        else {
                            checkOver(ii + 1);
                            break;
                        }
                    }
                }
                checkOver(0);
            }
        }]);
    return xAxis;
}(canvax.Event.EventDispatcher);
var Line$2 = canvax.Shapes.Line;
var _$9 = canvax._;
var yAxis = function (_Canvax$Event$EventDi) {
    inherits(yAxis, _Canvax$Event$EventDi);
    function yAxis(opt, data) {
        classCallCheck(this, yAxis);
        var _this = possibleConstructorReturn(this, (yAxis.__proto__ || Object.getPrototypeOf(yAxis)).call(this));
        _this._opt = opt;
        _this.width = null; //第一次计算后就会有值
        _this.yMaxHeight = 0; //y轴最大高
        _this.height = 0; //y轴第一条线到原点的高
        _this.maxW = 0; //最大文本的 width
        _this.field = []; //这个 轴 上面的 field 不需要主动配置。可以从graphs中拿
        _this.title = {
            text: "",
            shapeType: "text",
            fontColor: '#999',
            fontSize: 12,
            offset: 2,
            textAlign: "center",
            textBaseline: "middle",
            strokeStyle: null,
            lineHeight: 0
        };
        _this._title = null; //this.label对应的文本对象
        _this.enabled = true;
        _this.tickLine = {
            enabled: 1,
            lineWidth: 1,
            lineLength: 4,
            strokeStyle: '#cccccc',
            distance: 2
        };
        _this.axisLine = {
            enabled: 1,
            lineWidth: 1,
            strokeStyle: '#cccccc'
        };
        _this.label = {
            enabled: 1,
            fontColor: '#999',
            fontSize: 12,
            format: null,
            rotation: 0,
            distance: 3,
            textAlign: null,
            lineHeight: 1
        };
        if (opt.isH && (!opt.label || opt.label.rotaion === undefined)) {
            //如果是横向直角坐标系图
            _this.label.rotation = 90;
        }
        _this.pos = {
            x: 0,
            y: 0
        };
        _this.align = "left"; //yAxis轴默认是再左边，但是再双轴的情况下，可能会right
        _this.layoutData = []; //dataSection 对应的layout数据{y:-100, value:'1000'}
        _this.dataSection = []; //从原数据 dataOrg 中 结果 datasection 重新计算后的数据
        _this.waterLine = null; //水位data，需要混入 计算 dataSection， 如果有设置waterLineData， dataSection的最高水位不会低于这个值
        //默认的 dataSectionGroup = [ dataSection ], dataSection 其实就是 dataSectionGroup 去重后的一维版本
        _this.dataSectionGroup = [];
        //如果middleweight有设置的话 dataSectionGroup 为被middleweight分割出来的n个数组>..[ [0,50 , 100],[100,500,1000] ]
        _this.middleweight = null;
        _this.dataOrg = data.org || []; //源数据
        _this.sprite = null;
        _this.baseNumber = null; //默认为0，如果dataSection最小值小于0，则baseNumber为最小值，如果dataSection最大值大于0，则baseNumber为最大值
        _this.basePoint = null; //value为 baseNumber 的point {x,y}
        _this.min = null;
        _this.max = null; //后面加的，目前还没用
        _this._yOriginTrans = 0; //当设置的 baseNumber 和datasection的min不同的时候，
        //过滤器，可以用来过滤哪些yaxis 的 节点是否显示已经颜色之类的
        //@params params包括 dataSection , 索引index，txt(canvax element) ，line(canvax element) 等属性
        _this.filter = null; //function(params){}; 
        _this.isH = false; //是否横向
        _this.animation = true;
        _this.sort = null; //"asc" //排序，默认从小到大, desc为从大到小，之所以不设置默认值为asc，是要用null来判断用户是否进行了配置
        _this.layoutType = "proportion"; // rule , peak, proportion
        _this.init(opt, data);
        _this._getName();
        return _this;
    }
    createClass(yAxis, [{
            key: "init",
            value: function init(opt, data) {
                _$9.extend(true, this, opt);
                //extend会设置好this.field
                //先要矫正子啊field确保一定是个array
                if (!_$9.isArray(this.field)) {
                    this.field = [this.field];
                }
                this._initData();
                this.sprite = new canvax.Display.Sprite({
                    id: "yAxisSprite_" + new Date().getTime()
                });
                this.rulesSprite = new canvax.Display.Sprite({
                    id: "yRulesSprite_" + new Date().getTime()
                });
                this.sprite.addChild(this.rulesSprite);
            }
            //配置和数据变化
        }, {
            key: "resetData",
            value: function resetData(dataFrame) {
                this.dataSection = [];
                this.dataSectionGroup = [];
                if (dataFrame && dataFrame.field) {
                    this.field = dataFrame.field;
                }
                if (dataFrame && dataFrame.org) {
                    this.dataOrg = dataFrame.org; //这里必须是data.org
                }
                this._initData();
                this._trimYAxis();
                this._widget();
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
            //目前和xAxis一样
        }, {
            key: "_getName",
            value: function _getName() {
                if (this.title.text) {
                    if (!this._title) {
                        var rotation = 0;
                        if (this.align == "left") {
                            rotation = -90;
                        }
                        else {
                            rotation = 90;
                            if (this.isH) {
                                rotation = 270;
                            }
                        }
                        this._title = new canvax.Display.Text(this.title.text, {
                            context: {
                                fontSize: this.title.fontSize,
                                textAlign: this.title.textAlign,
                                textBaseline: this.title.textBaseline,
                                fillStyle: this.title.fontColor,
                                strokeStyle: this.title.strokeStyle,
                                lineWidth: this.title.lineWidth,
                                rotation: rotation
                            }
                        });
                    }
                    else {
                        this._title.resetText(this.title.text);
                    }
                }
            }
        }, {
            key: "draw",
            value: function draw(opt) {
                !opt && (opt = {});
                opt && _$9.extend(true, this, opt);
                this.height = parseInt(this.yMaxHeight - this._getYAxisDisLine());
                this._trimYAxis();
                this._widget(opt);
                this.setX(this.pos.x);
                this.setY(this.pos.y);
            }
            //更具y轴的值来输出对应的在y轴上面的位置
        }, {
            key: "getYposFromVal",
            value: function getYposFromVal(val) {
                var y = 0;
                var dsgLen = this.dataSectionGroup.length;
                var yGroupHeight = this.height / dsgLen;
                for (var i = 0, l = dsgLen; i < l; i++) {
                    var ds = this.dataSectionGroup[i];
                    var min = _$9.min(ds);
                    var max = _$9.max(ds);
                    var valInd = _$9.indexOf(ds, val);
                    if (val >= min && val <= max || valInd >= 0) {
                        if (this.layoutType == "proportion") {
                            var _baseNumber = this.baseNumber;
                            //如果 baseNumber 并不在这个区间
                            if (_baseNumber < min || _baseNumber > max) {
                                _baseNumber = min;
                            }
                            var maxGroupDisABS = Math.max(Math.abs(max - _baseNumber), Math.abs(_baseNumber - min));
                            var amountABS = Math.abs(max - min);
                            var h = maxGroupDisABS / amountABS * yGroupHeight;
                            y = (val - _baseNumber) / maxGroupDisABS * h + i * yGroupHeight;
                            if (isNaN(y)) {
                                y = i * yGroupHeight;
                            }
                        }
                        if (this.layoutType == "rule") {
                            //line 的xaxis就是 rule
                            y = valInd / (ds.length - 1) * yGroupHeight;
                        }
                        if (this.layoutType == "peak") {
                            //bar的xaxis就是 peak
                            y = yGroupHeight / ds.length * (valInd + 1) - yGroupHeight / ds.length / 2;
                        }
                        y += this._yOriginTrans;
                        break;
                    }
                }
                if (isNaN(y)) {
                    y = 0;
                }
                return -Math.abs(y);
            }
        }, {
            key: "getValFromYpos",
            value: function getValFromYpos(y) {
                var start = this.layoutData[0];
                var end = this.layoutData.slice(-1)[0];
                var val = (end.value - start.value) * ((y - start.y) / (end.y - start.y)) + start.value;
                return val;
            }
        }, {
            key: "_getYOriginTrans",
            value: function _getYOriginTrans(baseNumber) {
                var y = 0;
                var dsgLen = this.dataSectionGroup.length;
                var yGroupHeight = this.height / dsgLen;
                for (var i = 0, l = dsgLen; i < l; i++) {
                    var ds = this.dataSectionGroup[i];
                    var min = _$9.min(ds);
                    var max = _$9.max(ds);
                    var amountABS = Math.abs(max - min);
                    if (baseNumber >= min && baseNumber <= max) {
                        y = (baseNumber - min) / amountABS * yGroupHeight + i * yGroupHeight;
                        break;
                    }
                }
                y = isNaN(y) ? 0 : parseInt(y);
                if (this.sort == "desc") {
                    //如果是倒序的
                    y = -(yGroupHeight - Math.abs(y));
                }
                return y;
            }
        }, {
            key: "_trimYAxis",
            value: function _trimYAxis() {
                var me = this;
                var tmpData = [];
                /*
                //这里指的是坐标圆点0，需要移动的距离，因为如果有负数的话，最下面的坐标圆点应该是那个负数。
                //this._yOriginTrans = this._getYOriginTrans( 0 );
                var originVal = _.min(this.dataSection);
                if( originVal < 0  ){
                    originVal = 0;
                };
                */
                var originVal = this.baseNumber;
                this._yOriginTrans = this._getYOriginTrans(originVal);
                //设置 basePoint
                this.basePoint = {
                    value: this.baseNumber,
                    y: this.getYposFromVal(this.baseNumber)
                };
                for (var i = 0, l = this.dataSection.length; i < l; i++) {
                    var layoutData = {
                        value: this.dataSection[i],
                        y: this.getYposFromVal(this.dataSection[i]),
                        visible: true,
                        text: ""
                    };
                    //把format提前
                    var text = layoutData.value;
                    if (_$9.isFunction(me.label.format)) {
                        text = me.label.format.apply(this, [text, i]);
                    }
                    if (text === undefined || text === null) {
                        text = numAddSymbol(layoutData.value);
                    }
                    layoutData.text = text;
                    tmpData.push(layoutData);
                }
                var _preShowInd = 0;
                for (var a = 0, al = tmpData.length; a < al; a++) {
                    if (a == 0)
                        continue;
                    if (_preShowInd == 0) {
                        if (tmpData[a].text == tmpData[_preShowInd].text) {
                            //如果后面的format后的数据和前面的节点的format后数据相同
                            tmpData[a].visible = false;
                        }
                        else {
                            _preShowInd = a;
                        }
                    }
                    else {
                        if (tmpData[a].text == tmpData[_preShowInd].text) {
                            tmpData[_preShowInd].visible = false;
                        }
                        _preShowInd = a;
                    }
                }
                //TODO: 最后的问题就是dataSection中得每个只如果format后都相同的话，就会出现最上面最下面两个一样得刻度
                this.layoutData = tmpData;
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
            key: "_setDataSection",
            value: function _setDataSection() {
                //如果有堆叠，比如[ ["uv","pv"], "click" ]
                //那么这个 this.dataOrg， 也是个对应的结构
                //vLen就会等于2
                var vLen = 1;
                _$9.each(this.field, function (f) {
                    vLen = Math.max(vLen, 1);
                    if (_$9.isArray(f)) {
                        _$9.each(f, function (_f) {
                            vLen = Math.max(vLen, 2);
                        });
                    }
                });
                if (vLen == 1) {
                    return this._oneDimensional();
                }
                if (vLen == 2) {
                    return this._twoDimensional();
                }
            }
        }, {
            key: "_oneDimensional",
            value: function _oneDimensional() {
                var arr = _$9.flatten(this.dataOrg); //_.flatten( data.org );
                for (var i = 0, il = arr.length; i < il; i++) {
                    arr[i] = arr[i] || 0;
                }
                return arr;
            }
            //二维的yAxis设置，肯定是堆叠的比如柱状图，后续也会做堆叠的折线图， 就是面积图
        }, {
            key: "_twoDimensional",
            value: function _twoDimensional() {
                var d = this.dataOrg;
                var arr = [];
                var min;
                _$9.each(d, function (d, i) {
                    if (!d.length) {
                        return;
                    }
                    //有数据的情况下 
                    if (!_$9.isArray(d[0])) {
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
                            !min && (min = d[ii][i]);
                            min = Math.min(min, d[ii][i]);
                            if (d[ii][i] >= 0) {
                                up_count += d[ii][i];
                                up_i++;
                            }
                            else {
                                down_count += d[ii][i];
                                down_i++;
                            }
                        }
                        up_i && varr.push(up_count);
                        down_i && varr.push(down_count);
                    }
                    arr.push(varr);
                });
                arr.push(min);
                return _$9.flatten(arr);
            }
        }, {
            key: "_initData",
            value: function _initData() {
                var me = this;
                var arr = this._setDataSection();
                if (this.waterLine != null) {
                    arr.push(this.waterLine);
                }
                if (this._opt.min != null) {
                    arr.push(this.min);
                }
                if (arr.length == 1) {
                    arr.push(arr[0] * 2);
                }
                //如果用户传入了自定义的dataSection， 那么优先级最高
                if (!this._opt.dataSection) {
                    if (this._opt.baseNumber != undefined) {
                        arr.push(this.baseNumber);
                    }
                    if (this._opt.minNumber != undefined) {
                        arr.push(this.minNumber);
                    }
                    if (this._opt.maxNumber != undefined) {
                        arr.push(this.maxNumber);
                    }
                    for (var ai = 0, al = arr.length; ai < al; ai++) {
                        arr[ai] = Number(arr[ai]);
                        if (isNaN(arr[ai])) {
                            arr.splice(ai, 1);
                            ai--;
                            al--;
                        }
                    }
                    this.dataSection = DataSection.section(arr, 3);
                }
                else {
                    this.dataSection = this._opt.dataSection;
                }
                //如果还是0
                if (this.dataSection.length == 0) {
                    this.dataSection = [0];
                }
                if (_$9.min(this.dataSection) < this._opt.min) {
                    var minDiss = me._opt.min - _$9.min(me.dataSection);
                    //如果用户有硬性要求min，而且计算出来的dataSection还是比min小的话
                    _$9.each(this.dataSection, function (num, i) {
                        me.dataSection[i] += minDiss;
                    });
                }
                //如果有 middleweight 设置，就会重新设置dataSectionGroup
                this.dataSectionGroup = [_$9.clone(this.dataSection)];
                this._sort();
                this._setBottomAndBaseNumber();
                this._middleweight(); //如果有middleweight配置，需要根据配置来重新矫正下datasection
            }
            //yVal 要被push到datasection 中去的 值
        }, {
            key: "setWaterLine",
            value: function setWaterLine(yVal) {
                if (yVal <= this.waterLine)
                    return;
                this.waterLine = yVal;
                if (yVal < _$9.min(this.dataSection) || yVal > _$9.max(this.dataSection)) {
                    //waterLine不再当前section的区间内，需要重新计算整个datasection    
                    this._initData();
                }
            }
        }, {
            key: "_sort",
            value: function _sort() {
                if (this.sort) {
                    var sort = this._getSortType();
                    if (sort == "desc") {
                        this.dataSection.reverse();
                        //dataSectionGroup 从里到外全部都要做一次 reverse， 这样就可以对应上 dataSection.reverse()
                        _$9.each(this.dataSectionGroup, function (dsg, i) {
                            dsg.reverse();
                        });
                        this.dataSectionGroup.reverse();
                        //dataSectionGroup reverse end
                    }
                }
            }
        }, {
            key: "_getSortType",
            value: function _getSortType() {
                var _sort;
                if (_$9.isString(this.sort)) {
                    _sort = this.sort;
                }
                if (_$9.isArray(this.sort)) {
                    _sort = this.sort[this.align == "left" ? 0 : 1];
                }
                if (!_sort) {
                    _sort = "asc";
                }
                return _sort;
            }
        }, {
            key: "_setBottomAndBaseNumber",
            value: function _setBottomAndBaseNumber() {
                if (this.min == null) {
                    //this.min = this.dataSection[0];
                    this.min = _$9.min(this.dataSection);
                }
                //没人情况下 baseNumber 就是datasection的最小值
                if (this._opt.baseNumber == undefined || this._opt.baseNumber == null) {
                    this.baseNumber = 0; //this.dataSection[0];//_.min( this.dataSection );
                    if (_$9.max(this.dataSection) < 0) {
                        this.baseNumber = _$9.max(this.dataSection);
                    }
                    if (_$9.min(this.dataSection) > 0) {
                        this.baseNumber = _$9.min(this.dataSection);
                    }
                }
            }
        }, {
            key: "_middleweight",
            value: function _middleweight() {
                if (this.middleweight) {
                    //支持多个量级的设置
                    //量级的设置只支持非sort的柱状图场景，否则这里修改过的datasection会和 _initData 中sort过的逻辑有冲突
                    if (!_$9.isArray(this.middleweight)) {
                        this.middleweight = [this.middleweight];
                    }
                    //拿到dataSection中的min和 max 后，用middleweight数据重新设置一遍dataSection
                    var dMin = _$9.min(this.dataSection);
                    var dMax = _$9.max(this.dataSection);
                    var newDS = [dMin];
                    var newDSG = [];
                    for (var i = 0, l = this.middleweight.length; i < l; i++) {
                        var preMiddleweight = dMin;
                        if (i > 0) {
                            preMiddleweight = this.middleweight[i - 1];
                        }
                        var middleVal = preMiddleweight + parseInt((this.middleweight[i] - preMiddleweight) / 2);
                        newDS.push(middleVal);
                        newDS.push(this.middleweight[i]);
                        newDSG.push([preMiddleweight, middleVal, this.middleweight[i]]);
                    }
                    var lastMW = this.middleweight.slice(-1)[0];
                    if (dMax > lastMW) {
                        newDS.push(lastMW + (dMax - lastMW) / 2);
                        newDS.push(dMax);
                        newDSG.push([lastMW, lastMW + (dMax - lastMW) / 2, dMax]);
                    }
                    //好了。 到这里用简单的规则重新拼接好了新的 dataSection
                    this.dataSection = newDS;
                    this.dataSectionGroup = newDSG;
                    //因为重新设置过了 dataSection 所以要重新排序和设置bottom and base 值
                    this._sort();
                    this._setBottomAndBaseNumber();
                }
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
                me.maxW = 0;
                for (var a = 0, al = arr.length; a < al; a++) {
                    var o = arr[a];
                    if (!o.visible) {
                        continue;
                    }
                    var y = o.y;
                    var value = o.value;
                    var textAlign = me.label.textAlign || (me.align == "left" ? "right" : "left");
                    var posy = y + (a == 0 ? -3 : 0) + (a == arr.length - 1 ? 3 : 0);
                    //为横向图表把y轴反转后的 逻辑
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
                    var yNode = this.rulesSprite.getChildAt(a);
                    if (yNode) {
                        if (yNode._txt && this.label.enabled) {
                            if (me.animation && !opt.resize) {
                                yNode._txt.animate({
                                    y: posy
                                }, {
                                    duration: 500,
                                    delay: a * 80,
                                    id: yNode._txt.id
                                });
                            }
                            else {
                                yNode._txt.context.y = posy;
                            }
                            yNode._txt.resetText(o.text);
                        }
                        if (yNode._tickLine && this.tickLine.enabled) {
                            if (me.animation && !opt.resize) {
                                yNode._tickLine.animate({
                                    y: y
                                }, {
                                    duration: 500,
                                    delay: a * 80,
                                    id: yNode._tickLine.id
                                });
                            }
                            else {
                                yNode._tickLine.context.y = y;
                            }
                        }
                    }
                    else {
                        yNode = new canvax.Display.Sprite({
                            id: "yNode" + a
                        });
                        var aniFrom = 20;
                        if (o.value == me.baseNumber) {
                            aniFrom = 0;
                        }
                        if (o.value < me.baseNumber) {
                            aniFrom = -20;
                        }
                        var lineX = 0;
                        if (me.tickLine.enabled) {
                            //线条
                            lineX = me.align == "left" ? -me.tickLine.lineLength - me.tickLine.distance : me.tickLine.distance;
                            var line = new Line$2({
                                context: {
                                    x: lineX,
                                    y: y,
                                    end: {
                                        x: me.tickLine.lineLength,
                                        y: 0
                                    },
                                    lineWidth: me.tickLine.lineWidth,
                                    strokeStyle: me._getProp(me.tickLine.strokeStyle)
                                }
                            });
                            yNode.addChild(line);
                            yNode._tickLine = line;
                        }
                        //文字
                        if (me.label.enabled) {
                            var txtX = me.align == "left" ? lineX - me.label.distance : lineX + me.tickLine.lineLength + me.label.distance;
                            if (this.isH) {
                                txtX = txtX + (me.align == "left" ? -1 : 1) * 4;
                            }
                            var txt = new canvax.Display.Text(o.text, {
                                id: "yAxis_txt_" + me.align + "_" + a,
                                context: {
                                    x: txtX,
                                    y: posy + aniFrom,
                                    fillStyle: me._getProp(me.label.fontColor),
                                    fontSize: me.label.fontSize,
                                    rotation: -Math.abs(me.label.rotation),
                                    textAlign: textAlign,
                                    textBaseline: "middle",
                                    lineHeight: me.label.lineHeight,
                                    globalAlpha: 0
                                }
                            });
                            yNode.addChild(txt);
                            yNode._txt = txt;
                            if (me.label.rotation == 90 || me.label.rotation == -90) {
                                me.maxW = Math.max(me.maxW, txt.getTextHeight());
                            }
                            else {
                                me.maxW = Math.max(me.maxW, txt.getTextWidth());
                            }
                            //这里可以由用户来自定义过滤 来 决定 该node的样式
                            _$9.isFunction(me.filter) && me.filter({
                                layoutData: me.layoutData,
                                index: a,
                                txt: txt,
                                line: line
                            });
                            me.rulesSprite.addChild(yNode);
                            if (me.animation && !opt.resize) {
                                txt.animate({
                                    globalAlpha: 1,
                                    y: txt.context.y - aniFrom
                                }, {
                                    duration: 500,
                                    easing: 'Back.Out',
                                    delay: (a + 1) * 80,
                                    id: txt.id
                                });
                            }
                            else {
                                txt.context.y = txt.context.y - aniFrom;
                                txt.context.globalAlpha = 1;
                            }
                        }
                    }
                }
                //把 rulesSprite.children中多余的给remove掉
                if (me.rulesSprite.children.length > arr.length) {
                    for (var al = arr.length, pl = me.rulesSprite.children.length; al < pl; al++) {
                        me.rulesSprite.getChildAt(al).remove();
                        al--, pl--;
                    }
                }
                if (me.width === null) {
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
                //轴线
                if (me.axisLine.enabled) {
                    var _axisLine = new Line$2({
                        context: {
                            start: {
                                x: _originX,
                                y: 0
                            },
                            end: {
                                x: _originX,
                                y: -me.height
                            },
                            lineWidth: me.axisLine.lineWidth,
                            strokeStyle: me._getProp(me.axisLine.strokeStyle)
                        }
                    });
                    this.sprite.addChild(_axisLine);
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
            key: "_getProp",
            value: function _getProp(s) {
                var res = s;
                if (_$9.isFunction(s)) {
                    res = s.call(this, this);
                }
                if (!s) {
                    res = "#999";
                }
                return res;
            }
        }]);
    return yAxis;
}(canvax.Event.EventDispatcher);
var Line$3 = canvax.Shapes.Line;
var Rect$1 = canvax.Shapes.Rect;
var _$10 = canvax._;
var descartesGrid = function (_Canvax$Event$EventDi) {
    inherits(descartesGrid, _Canvax$Event$EventDi);
    function descartesGrid(opt, root) {
        classCallCheck(this, descartesGrid);
        var _this = possibleConstructorReturn(this, (descartesGrid.__proto__ || Object.getPrototypeOf(descartesGrid)).call(this, opt, root));
        _this.width = 0;
        _this.height = 0;
        _this.root = root; //该组件被添加到的目标图表项目，
        _this.pos = {
            x: 0,
            y: 0
        };
        _this.enabled = 1;
        _this.xDirection = {
            shapeType: "line",
            enabled: 1,
            data: [],
            lineType: 'solid',
            lineWidth: 1,
            strokeStyle: '#f0f0f0',
            filter: null
        };
        _this.yDirection = {
            shapeType: "line",
            enabled: 0,
            data: [],
            lineType: 'solid',
            lineWidth: 1,
            strokeStyle: '#f0f0f0',
            filter: null
        };
        _this.fill = {
            enabled: true,
            fillStyle: null,
            alpha: null
        };
        _this.sprite = null; //总的sprite
        _this.xAxisSp = null; //x轴上的线集合
        _this.yAxisSp = null; //y轴上的线集合
        _this.init(opt);
        return _this;
    }
    createClass(descartesGrid, [{
            key: "init",
            value: function init(opt) {
                _$10.extend(true, this, opt);
                this.sprite = new canvax.Display.Sprite();
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
                _$10.extend(true, this, opt);
                //this._configData(opt);
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
                var _yAxis = self.root._yAxis[0];
                if (self.fill.enabled && self.root && _yAxis && _yAxis.dataSectionGroup && _yAxis.dataSectionGroup.length > 1) {
                    self.yGroupSp = new canvax.Display.Sprite(), self.sprite.addChild(self.yGroupSp);
                    for (var g = 0, gl = _yAxis.dataSectionGroup.length; g < gl; g++) {
                        var yGroupHeight = _yAxis.height / gl;
                        var groupRect = new Rect$1({
                            context: {
                                x: 0,
                                y: -yGroupHeight * g,
                                width: self.width,
                                height: -yGroupHeight,
                                fillStyle: self.fill.fillStyle || "#000",
                                fillAlpha: self.fill.alpha || 0.025 * (g % 2)
                            }
                        });
                        self.yGroupSp.addChild(groupRect);
                    }
                }
                self.xAxisSp = new canvax.Display.Sprite(), self.sprite.addChild(self.xAxisSp);
                self.yAxisSp = new canvax.Display.Sprite(), self.sprite.addChild(self.yAxisSp);
                //x轴方向的线集合
                var arr = self.xDirection.data;
                for (var a = 0, al = arr.length; a < al; a++) {
                    var o = arr[a];
                    var line = new Line$3({
                        id: "back_line_" + a,
                        context: {
                            y: o.y,
                            lineType: self.xDirection.lineType,
                            lineWidth: self.xDirection.lineWidth,
                            strokeStyle: self.xDirection.strokeStyle
                        }
                    });
                    if (self.xDirection.enabled) {
                        _$10.isFunction(self.xDirection.filter) && self.xDirection.filter.apply(line, [{
                                layoutData: self.yDirection.data,
                                index: a,
                                line: line
                            }, self]);
                        self.xAxisSp.addChild(line);
                        line.context.start.x = 0;
                        line.context.end.x = self.width;
                    }
                }
                //y轴方向的线集合
                var arr = self.yDirection.data;
                for (var a = 0, al = arr.length; a < al; a++) {
                    var o = arr[a];
                    var line = new Line$3({
                        context: {
                            x: o.x,
                            start: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: -self.height
                            },
                            lineType: self.yDirection.lineType,
                            lineWidth: self.yDirection.lineWidth,
                            strokeStyle: self.yDirection.strokeStyle,
                            visible: o.x ? true : false
                        }
                    });
                    if (self.yDirection.enabled) {
                        _$10.isFunction(self.yDirection.filter) && self.yDirection.filter.apply(line, [{
                                layoutData: self.xDirection.data,
                                index: a,
                                line: line
                            }, self]);
                        self.yAxisSp.addChild(line);
                    }
                }
            }
        }]);
    return descartesGrid;
}(canvax.Event.EventDispatcher);
var _$11 = canvax._;
var Rect$2 = canvax.Shapes.Rect;
var Rect_Component = function (_coorBase) {
    inherits(Rect_Component, _coorBase);
    function Rect_Component(opt, root) {
        classCallCheck(this, Rect_Component);
        var _this = possibleConstructorReturn(this, (Rect_Component.__proto__ || Object.getPrototypeOf(Rect_Component)).call(this, opt, root));
        _this.type = "rect";
        _this._xAxis = null;
        _this._yAxis = [];
        _this._yAxisLeft = null;
        _this._yAxisRight = null;
        _this._grid = null;
        _this.horizontal = false;
        _this.xAxis = {
            field: _this.dataFrame.fields[0]
        };
        _this.yAxis = [{
                field: _this.dataFrame.fields.slice(1)
            }];
        _this.grid = {};
        _$11.extend(true, _this, opt);
        if (opt.horizontal) {
            _this.xAxis.isH = true;
            _$11.each(_this.yAxis, function (yAxis$$1) {
                yAxis$$1.isH = true;
            });
        }
        if ("enabled" in opt) {
            //如果有给直角坐标系做配置display，就直接通知到xAxis，yAxis，grid三个子组件
            _$11.extend(true, _this.xAxis, {
                enabled: opt.enabled
            });
            _$11.each(_this.yAxis, function (yAxis$$1) {
                _$11.extend(true, yAxis$$1, {
                    enabled: opt.enabled
                });
            });
            /*
            this.xAxis.enabled = opt.enabled;
            _.each( this.yAxis , function( yAxis ){
                yAxis.enabled = opt.enabled;
            });
            */
            _this.grid.enabled = opt.enabled;
        }
        _this.init(opt);
        return _this;
    }
    createClass(Rect_Component, [{
            key: "init",
            value: function init(opt) {
                this.sprite = new canvax.Display.Sprite({
                    id: "coord"
                });
                this._initModules();
                //创建好了坐标系统后，设置 _fieldsDisplayMap 的值，
                // _fieldsDisplayMap 的结构里包含每个字段是否在显示状态的enabled 和 这个字段属于哪个yAxis
                this.fieldsMap = this._setFieldsMap();
            }
        }, {
            key: "resetData",
            value: function resetData(dataFrame, dataTrigger) {
                var me = this;
                this.dataFrame = dataFrame;
                var _xAxisDataFrame = this._getAxisDataFrame(this.xAxis.field);
                this._xAxis.resetData(_xAxisDataFrame);
                _$11.each(this._yAxis, function (_yAxis) {
                    //这个_yAxis是具体的y轴实例
                    var yAxisDataFrame = me._getAxisDataFrame(_yAxis.field);
                    _yAxis.resetData(yAxisDataFrame);
                });
                this._grid.reset({
                    animation: false,
                    xDirection: {
                        data: this._yAxisLeft.layoutData
                    }
                });
            }
        }, {
            key: "draw",
            value: function draw(opt) {
                //在绘制的时候，要先拿到xAxis的高
                !opt && (opt = {});
                var _padding = this.root.padding;
                var h = opt.height || this.root.height;
                var w = opt.width || this.root.width;
                if (this.horizontal) {
                    //如果是横向的坐标系统，也就是xy对调，那么高宽也要对调
                    var _num = w;
                    w = h;
                    h = _num;
                }
                var y = h - this._xAxis.height - _padding.bottom;
                var _yAxisW = 0;
                var _yAxisRW = 0;
                //绘制yAxis
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
                }
                //如果有双轴
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
                //绘制x轴
                this._xAxis.draw({
                    pos: {
                        x: _padding.left + _yAxisW,
                        y: y
                    },
                    width: w - _yAxisW - _padding.left - _yAxisRW - _padding.right,
                    resize: opt.resize
                });
                this._yAxisRight && this._yAxisRight.setX(_yAxisW + _padding.left + this._xAxis.width);
                //绘制背景网格
                this._grid.draw({
                    width: this._xAxis.width,
                    height: this._yAxis[0].height,
                    xDirection: {
                        data: this._yAxis[0].layoutData
                    },
                    yDirection: {
                        data: this._xAxis.layoutData
                    },
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
                if (this.horizontal) {
                    this._horizontal({
                        w: w,
                        h: h
                    });
                    /*
                    this.width = this._yAxis[0].height;
                    this.height = this._xAxis.width;
                    this.origin.x = this._xAxis.height + _padding.left;
                    this.origin.y = this._yAxis[0].height + _padding.top;
                    */
                }
            }
        }, {
            key: "_initModules",
            value: function _initModules() {
                this._grid = new descartesGrid(this.grid, this);
                this.sprite.addChild(this._grid.sprite);
                var _xAxisDataFrame = this._getAxisDataFrame(this.xAxis.field);
                this._xAxis = new xAxis(this.xAxis, _xAxisDataFrame, this);
                this.sprite.addChild(this._xAxis.sprite);
                //这里定义的是配置
                var yAxis$$1 = this.yAxis;
                var yAxisLeft, yAxisRight;
                var yAxisLeftDataFrame, yAxisRightDataFrame;
                // yAxis 肯定是个数组
                if (!_$11.isArray(yAxis$$1)) {
                    yAxis$$1 = [yAxis$$1];
                }
                //left是一定有的
                yAxisLeft = _$11.find(yAxis$$1, function (ya) {
                    return ya.align == "left";
                });
                if (yAxisLeft) {
                    yAxisLeftDataFrame = this._getAxisDataFrame(yAxisLeft.field);
                    this._yAxisLeft = new yAxis(yAxisLeft, yAxisLeftDataFrame);
                    this._yAxisLeft.axis = yAxisLeft;
                    this.sprite.addChild(this._yAxisLeft.sprite);
                    this._yAxis.push(this._yAxisLeft);
                }
                yAxisRight = _$11.find(yAxis$$1, function (ya) {
                    return ya.align == "right";
                });
                if (yAxisRight) {
                    yAxisRightDataFrame = this._getAxisDataFrame(yAxisRight.field);
                    this._yAxisRight = new yAxis(yAxisRight, yAxisRightDataFrame);
                    this._yAxisRight.axis = yAxisRight;
                    this.sprite.addChild(this._yAxisRight.sprite);
                    this._yAxis.push(this._yAxisRight);
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
                _$11.each([me.sprite.context], function (ctx) {
                    ctx.x += (w - h) / 2;
                    ctx.y += (h - w) / 2;
                    var origin = {
                        x: h / 2,
                        y: w / 2
                    };
                    ctx.rotation = 90;
                    ctx.rotateOrigin = origin;
                });
            }
        }, {
            key: "getPosX",
            value: function getPosX(opt) {
                return this._xAxis.getPosX(opt);
            }
        }, {
            key: "_getAxisDataFrame",
            value: function _getAxisDataFrame(fields) {
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
            //从 fieldsMap 中过滤筛选出来一个一一对应的 enabled为true的对象结构
            //这个方法还必须要返回的数据里描述出来多y轴的结构。否则外面拿到数据后并不好处理那个数据对应哪个轴
        }, {
            key: "getEnabledFields",
            value: function getEnabledFields(fields) {
                if (fields) {
                    //如果有传参数 fields 进来，那么就把这个指定的 fields 过滤掉 enabled==false的field
                    //只留下enabled的field 结构
                    return this.filterEnabledFields(fields);
                }
                var fmap = {
                    left: [], right: []
                };
                _$11.each(this.fieldsMap, function (bamboo, b) {
                    if (_$11.isArray(bamboo)) {
                        //多节竹子，堆叠
                        var align;
                        var fields = [];
                        //设置完fields后，返回这个group属于left还是right的axis
                        _$11.each(bamboo, function (obj, v) {
                            if (obj.field && obj.enabled) {
                                align = obj.yAxis.align;
                                fields.push(obj.field);
                            }
                        });
                        fields.length && fmap[align].push(fields);
                    }
                    else {
                        //单节棍
                        if (bamboo.field && bamboo.enabled) {
                            fmap[bamboo.yAxis.align].push(bamboo.field);
                        }
                    }
                });
                return fmap;
            }
            //由coor_base中得addField removeField来调用
        }, {
            key: "changeFieldEnabled",
            value: function changeFieldEnabled(field) {
                this.setFieldEnabled(field);
                var fieldMap = this.getFieldMapOf(field);
                var enabledFields = this.getEnabledFields()[fieldMap.yAxis.align];
                fieldMap.yAxis.resetData(this._getAxisDataFrame(enabledFields));
                //然后yAxis更新后，对应的背景也要更新
                this._grid.reset({
                    animation: false,
                    xDirection: {
                        data: this._yAxisLeft ? this._yAxisLeft.layoutData : this._yAxisRight.layoutData
                    }
                });
            }
            //查询field在哪个yAxis上面,外部查询的话直接用fieldMap._yAxis
        }, {
            key: "_getYaxisOfField",
            value: function _getYaxisOfField(field) {
                var Axis;
                _$11.each(this._yAxis, function (_yAxis, i) {
                    var fs = _yAxis.field;
                    var _fs = _$11.flatten([fs]);
                    var ind = _$11.indexOf(_fs, field);
                    if (ind > -1) {
                        //那么说明这个yAxis轴上面有这个字段，这个yaxis需要reset
                        Axis = _yAxis;
                        return false;
                    }
                });
                return Axis;
            }
            //和原始field结构保持一致，但是对应的field换成 {field: , enabled:...}结构
        }, {
            key: "_setFieldsMap",
            value: function _setFieldsMap() {
                var me = this;
                var fieldInd = 0;
                function _set(fields) {
                    if (!fields) {
                        var yAxis$$1 = me.yAxis;
                        if (!_$11.isArray(yAxis$$1)) {
                            yAxis$$1 = [yAxis$$1];
                        }
                        fields = [];
                        _$11.each(yAxis$$1, function (item, i) {
                            if (item.field) {
                                fields = fields.concat(item.field);
                            }
                        });
                    }
                    if (_$11.isString(fields)) {
                        fields = [fields];
                    }
                    var clone_fields = _$11.clone(fields);
                    for (var i = 0, l = fields.length; i < l; i++) {
                        if (_$11.isString(fields[i])) {
                            clone_fields[i] = {
                                field: fields[i],
                                enabled: true,
                                yAxis: me._getYaxisOfField(fields[i]),
                                color: me.root.getTheme(fieldInd),
                                ind: fieldInd++
                            };
                        }
                        if (_$11.isArray(fields[i])) {
                            clone_fields[i] = _set(fields[i], fieldInd);
                        }
                    }
                    return clone_fields;
                }
                return _set();
            }
        }, {
            key: "_initInduce",
            value: function _initInduce() {
                var me = this;
                me.induce = new Rect$2({
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
                me.induce.on("panstart mouseover panmove mousemove panend mouseout tap click dblclick", function (e) {
                    //e.eventInfo = me._getInfoHandler(e);
                    me.fire(e.type, e);
                    //图表触发，用来处理Tips
                    me.root.fire(e.type, e);
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
                    title: xNode.text,
                    nodes: [
                    //遍历_graphs 去拿东西
                    ]
                };
                if (e.eventInfo) {
                    obj = _$11.extend(obj, e.eventInfo);
                    //把xNode信息写到eventInfo上面
                    if (obj.xAxis) {
                        e.eventInfo.xAxis = xNode;
                    }
                }
                return obj;
            }
        }]);
    return Rect_Component;
}(coorBase);
var _$12 = canvax._;
var Rect$3 = function (_CoordBase) {
    inherits(Rect, _CoordBase);
    function Rect(node, data, opts, graphsMap, componentsMap) {
        classCallCheck(this, Rect);
        //坐标系统
        var _this = possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this, node, data, opts, graphsMap, componentsMap));
        _this.CoordComponents = Rect_Component;
        _this._coord = null;
        return _this;
    }
    //设置这个坐标系下面特有的 opts 默认值
    //以及往this上面写部分默认数据
    //在CoordBase中被调用
    createClass(Rect, [{
            key: "setDefaultOpts",
            value: function setDefaultOpts(opts) {
                var me = this;
                me.coord = {
                    xAxis: {
                        //波峰波谷布局模型，默认是柱状图的，折线图种需要做覆盖
                        layoutType: "rule",
                        //默认为false，x轴的计量是否需要取整， 这样 比如某些情况下得柱状图的柱子间隔才均匀。
                        //比如一像素间隔的柱状图，如果需要精确的绘制出来每个柱子的间距是1px， 就必须要把这里设置为true
                        posParseToInt: false
                    }
                };
                opts = _$12.clone(opts);
                if (opts.coord.yAxis) {
                    var _nyarr = [];
                    //TODO: 因为我们的deep extend 对于数组是整个对象引用过去，所以，这里需要
                    //把每个子元素单独clone一遍，恩恩恩， 在canvax中优化extend对于array的处理
                    _$12.each(_$12.flatten([opts.coord.yAxis]), function (yopt) {
                        _nyarr.push(_$12.clone(yopt));
                    });
                    opts.coord.yAxis = _nyarr;
                }
                else {
                    opts.coord.yAxis = [];
                }
                //根据opt中得Graphs配置，来设置 coord.yAxis
                if (opts.graphs) {
                    //有graphs的就要用找到这个graphs.field来设置coord.yAxis
                    for (var i = 0; i < opts.graphs.length; i++) {
                        var graphs = opts.graphs[i];
                        if (graphs.type == "bar") {
                            //如果graphs里面有柱状图，那么就整个xAxis都强制使用 peak 的layoutType
                            me.coord.xAxis.layoutType = "peak";
                        }
                        if (graphs.field) {
                            //没有配置field的话就不绘制这个 graphs了
                            var align = "left"; //默认left
                            if (graphs.yAxisAlign == "right") {
                                align = "right";
                            }
                            var optsYaxisObj = null;
                            optsYaxisObj = _$12.find(opts.coord.yAxis, function (obj, i) {
                                return obj.align == align || !obj.align && i == (align == "left" ? 0 : 1);
                            });
                            if (!optsYaxisObj) {
                                optsYaxisObj = {
                                    align: align,
                                    field: []
                                };
                                opts.coord.yAxis.push(optsYaxisObj);
                            }
                            else {
                                if (!optsYaxisObj.align) {
                                    optsYaxisObj.align = align;
                                }
                            }
                            if (!optsYaxisObj.field) {
                                optsYaxisObj.field = [];
                            }
                            else {
                                if (!_$12.isArray(optsYaxisObj.field)) {
                                    optsYaxisObj.field = [optsYaxisObj.field];
                                }
                            }
                            if (_$12.isArray(graphs.field)) {
                                optsYaxisObj.field = optsYaxisObj.field.concat(graphs.field);
                            }
                            else {
                                optsYaxisObj.field.push(graphs.field);
                            }
                        }
                        else {
                            //在，直角坐标系中，每个graphs一定要有一个field设置，如果没有，就去掉这个graphs
                            opts.graphs.splice(i--, 1);
                        }
                    }
                } //再梳理一遍yAxis，get没有align的手动配置上align
                //要手动把yAxis 按照 left , right的顺序做次排序
                var _lys = [], _rys = [];
                _$12.each(opts.coord.yAxis, function (yAxis, i) {
                    if (!yAxis.align) {
                        yAxis.align = i ? "right" : "left";
                    }
                    if (yAxis.align == "left") {
                        _lys.push(yAxis);
                    }
                    else {
                        _rys.push(yAxis);
                    }
                });
                opts.coord.yAxis = _lys.concat(_rys);
                return opts;
            }
        }, {
            key: "drawBeginHorizontal",
            value: function drawBeginHorizontal() {
                //横向了之后， 要把4个padding值轮换一下
                //top,right 对调 ， bottom,left 对调
                var padding = this.padding;
                var num = padding.top;
                padding.top = padding.right;
                padding.right = padding.bottom;
                padding.bottom = padding.left;
                padding.left = num;
            }
            //绘制完毕后的横向处理
        }, {
            key: "drawEndHorizontal",
            value: function drawEndHorizontal() {
                var me = this;
                var ctx = me.graphsSprite.context;
                ctx.x += (me.width - me.height) / 2;
                ctx.y += (me.height - me.width) / 2;
                ctx.rotation = 90;
                ctx.rotateOrigin = { x: me.height / 2, y: me.width / 2 };
                function _horizontalText(el) {
                    if (el.children) {
                        _$12.each(el.children, function (_el) {
                            _horizontalText(_el);
                        });
                    }
                    if (el.type == "text") {
                        var ctx = el.context;
                        var w = ctx.width;
                        var h = ctx.height;
                        ctx.rotation = ctx.rotation - 90;
                    }
                }
                _$12.each(me._graphs, function (_graphs) {
                    _horizontalText(_graphs.sprite);
                });
            }
            //只有field为多组数据的时候才需要legend，给到legend组件来调用
        }, {
            key: "getLegendData",
            value: function getLegendData() {
                var me = this;
                var data = [];
                _$12.each(_$12.flatten(me._coord.fieldsMap), function (map, i) {
                    //因为yAxis上面是可以单独自己配置field的，所以，这部分要过滤出 legend data
                    var isGraphsField = false;
                    _$12.each(me.graphs, function (gopt) {
                        if (_$12.indexOf(_$12.flatten([gopt.field]), map.field) > -1) {
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
            ////设置图例end
            //把这个点位置对应的x轴数据和y轴数据存到 tips 的 info 里面
            //方便外部自定义 tip 是的 content
        }, {
            key: "setTipsInfo",
            value: function setTipsInfo(e) {
                e.eventInfo = this._coord.getTipsInfoHandler(e);
                //如果具体的e事件对象中有设置好了得 e.eventInfo.nodes，那么就不再遍历_graphs去取值
                //比如鼠标移动到多柱子组合的具体某根bar上面，e.eventInfo.nodes = [ {bardata} ] 就有了这个bar的数据
                //那么tips就只显示这个bardata的数据
                if (!e.eventInfo.nodes || !e.eventInfo.nodes.length) {
                    var nodes = [];
                    var iNode = e.eventInfo.xAxis.ind;
                    _$12.each(this._graphs, function (_g) {
                        nodes = nodes.concat(_g.getNodesAt(iNode));
                    });
                    e.eventInfo.nodes = nodes;
                }
            }
        }]);
    return Rect;
}(Coord);
//十六进制颜色值的正则表达式 
var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
/*16进制颜色转为RGB格式*/
var colorRgb = function colorRgb(hex) {
    var sColor = hex.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值  
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "RGB(" + sColorChange.join(",") + ")";
    }
    else {
        return sColor;
    }
};
var colorRgba = function colorRgba(hex, a) {
    return colorRgb(hex).replace(')', ',' + a + ')').replace('RGB', 'RGBA');
};
/*RGB颜色转换为16进制*/
var colorHex = function colorHex(rgb) {
    var that = rgb;
    if (/^(rgb|RGB)/.test(that)) {
        var aColor = that.replace(/(?:||rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = that;
        }
        return strHex;
    }
    else if (reg.test(that)) {
        var aNum = that.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return that;
        }
        else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
                numHex += aNum[i] + aNum[i];
            }
            return numHex;
        }
    }
    else {
        return that;
    }
};
/**增加颜色的明亮度
 *hex: #ff00ff
 *lum: 0.1 颜色#ff00ff明亮度增加0.1,-0.2明亮度减少0.2
 */
var colorLuminance = function colorLuminance(hex, lum) {
    // Validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, "");
    if (hex.length < 6) {
        hex = hex.replace(/(.)/g, '$1$1');
    }
    lum = lum || 0;
    // Convert to decimal and change luminosity
    var rgb = "#", c;
    for (var i = 0; i < 3; ++i) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    return rgb;
};
/**
 * HSL颜色值转换为RGB.
 * 换算公式改编自 http://en.wikipedia.org/wiki/HSL_color_space.
 * h, s, 和 l 设定在 [0, 1] 之间
 * 返回的 r, g, 和 b 在 [0, 255]之间
 *
 * @param   Number  h       色相
 * @param   Number  s       饱和度
 * @param   Number  l       亮度
 * @return  Array           RGB色值数值
 */
var hslToRgb = function hslToRgb(h, s, l) {
    var r, g, b;
    if (s == 0) {
        r = g = b = l; // achromatic
    }
    else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0)
                t += 1;
            if (t > 1)
                t -= 1;
            if (t < 1 / 6)
                return p + (q - p) * 6 * t;
            if (t < 1 / 2)
                return q;
            if (t < 2 / 3)
                return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};
/**
 * RGB 颜色值转换为 HSL.
 * 转换公式参考自 http://en.wikipedia.org/wiki/HSL_color_space.
 * r, g, 和 b 需要在 [0, 255] 范围内
 * 返回的 h, s, 和 l 在 [0, 1] 之间
 *
 * @param   Number  r       红色色值
 * @param   Number  g       绿色色值
 * @param   Number  b       蓝色色值
 * @return  Array           HSL各值数组
 */
var rgbToHsl = function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h, s, l];
};
var ColorFormat = {
    colorRgb: colorRgb,
    colorRgba: colorRgba,
    colorHex: colorHex,
    colorBrightness: colorLuminance,
    hslToRgb: hslToRgb,
    rgbToHsl: rgbToHsl
};
var AnimationFrame$1 = canvax.AnimationFrame;
var BrokenLine$1 = canvax.Shapes.BrokenLine;
var Rect$4 = canvax.Shapes.Rect;
var Circle$1 = canvax.Shapes.Circle;
var Path$1 = canvax.Shapes.Path;
var _$13 = canvax._;
var LineGraphsGroup = function (_Canvax$Event$EventDi) {
    inherits(LineGraphsGroup, _Canvax$Event$EventDi);
    function LineGraphsGroup(fieldMap, iGroup, opt, ctx, h, w) {
        classCallCheck(this, LineGraphsGroup);
        var _this = possibleConstructorReturn(this, (LineGraphsGroup.__proto__ || Object.getPrototypeOf(LineGraphsGroup)).call(this));
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
            enabled: 1,
            shapeType: "brokenLine",
            strokeStyle: fieldMap.color,
            lineWidth: 2,
            lineType: "solid",
            smooth: true
        };
        _this.icon = {
            enabled: 1,
            shapeType: "circle",
            corner: false,
            radius: 3,
            fillStyle: '#ffffff',
            strokeStyle: null,
            lineWidth: 2
        };
        _this.label = {
            enabled: 0,
            fontColor: null,
            strokeStyle: null,
            fontSize: 12,
            format: null
        };
        _this.area = {
            shapeType: "path",
            enabled: 1,
            fillStyle: null,
            alpha: 0.3
        };
        _this.data = [];
        _this.sprite = null;
        _this._pointList = []; //brokenline最终的状态
        _this._currPointList = []; //brokenline 动画中的当前状态
        _this._bline = null;
        _$13.extend(true, _this, opt);
        //TODO group中得field不能直接用opt中得field， 必须重新设置， 
        //group中得field只有一个值，代表一条折线, 后面要扩展extend方法，可以控制过滤哪些key值不做extend
        _this.field = fieldMap.field; //iGroup 在yAxis.field中对应的值
        _this.init(opt);
        return _this;
    }
    createClass(LineGraphsGroup, [{
            key: "init",
            value: function init(opt) {
                this.sprite = new canvax.Display.Sprite();
                var me = this;
                this.sprite.on("destroy", function () {
                    if (me._growTween) {
                        AnimationFrame$1.destroyTween(me._growTween);
                    }
                });
            }
        }, {
            key: "draw",
            value: function draw(opt, data) {
                _$13.extend(true, this, opt);
                this.data = data;
                this._widget(opt);
            }
            //自我销毁
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
            }
            //styleType , normals , iGroup
        }, {
            key: "_getColor",
            value: function _getColor(s, iNode) {
                var color = this._getProp(s, iNode);
                if (color === undefined || color === null) {
                    //这个时候可以先取线的style，和线保持一致
                    color = this._getLineStrokeStyle();
                    //因为_getLineStrokeStyle返回的可能是个渐变对象，所以要用isString过滤掉
                    if (!color || !_$13.isString(color)) {
                        //那么最后，取this.fieldMap.color
                        color = this.fieldMap.color;
                    }
                }
                return color;
            }
        }, {
            key: "_getProp",
            value: function _getProp(s, iNode) {
                if (_$13.isArray(s)) {
                    return s[this.iGroup];
                }
                if (_$13.isFunction(s)) {
                    return s.apply(this, [this.getNodeInfoAt(iNode)]);
                }
                return s;
            }
            //这个是tips需要用到的 
        }, {
            key: "getNodeInfoAt",
            value: function getNodeInfoAt($index) {
                var o = this.data[$index];
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
                if (!dataTrigger) {
                    dataTrigger = {
                        name: 'normal',
                        left: 0,
                        right: plen - cplen
                    };
                }
                if (dataTrigger.left) {
                    if (dataTrigger.left > 0) {
                        this._currPointList = this._pointList.slice(0, dataTrigger.left).concat(this._currPointList);
                    }
                    if (dataTrigger.left < 0) {
                        this._currPointList.splice(0, Math.abs(dataTrigger.left));
                    }
                }
                if (dataTrigger.right) {
                    if (dataTrigger.right > 0) {
                        this._currPointList = this._currPointList.concat(this._pointList.slice(-dataTrigger.right));
                    }
                    if (dataTrigger.right < 0) {
                        this._currPointList.splice(this._currPointList.length - Math.abs(dataTrigger.right));
                    }
                }
                me._createNodes();
                me._createTexts();
                me._grow();
            }
        }, {
            key: "_grow",
            value: function _grow(callback, opt) {
                var me = this;
                if (!me.data.length) {
                    //因为在index中有调用
                    callback && callback(me);
                    return;
                }
                function _update(list) {
                    me._bline.context.pointList = _$13.clone(list);
                    me._bline.context.strokeStyle = me._getLineStrokeStyle(list);
                    me._area.context.path = me._fillLine(me._bline);
                    me._area.context.fillStyle = me._getFillStyle();
                    var iNode = 0;
                    _$13.each(list, function (point, i) {
                        if (_$13.isNumber(point[1])) {
                            if (me._circles) {
                                var _circle = me._circles.getChildAt(iNode);
                                if (_circle) {
                                    _circle.context.x = point[0];
                                    _circle.context.y = point[1];
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
                this._growTween = AnimationFrame$1.registTween({
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
                        me._growTween = null;
                        //在动画结束后强制把目标状态绘制一次。
                        //解决在onUpdate中可能出现的异常会导致绘制有问题。
                        //这样的话，至少最后的结果会是对的。
                        _update(me._pointList);
                        callback && callback(me);
                    }
                });
            }
        }, {
            key: "_getPointPosStr",
            value: function _getPointPosStr(list) {
                var obj = {};
                _$13.each(list, function (p, i) {
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
                        list.push([o.x, _$13.isNumber(o.y) ? firstY : o.y]);
                    }
                }
                else {
                    list = me._pointList;
                }
                me._currPointList = list;
                var bline = new BrokenLine$1({
                    context: {
                        pointList: list,
                        lineWidth: me.line.lineWidth,
                        y: me.y,
                        strokeStyle: me._getLineStrokeStyle(list),
                        smooth: me.line.smooth,
                        lineType: me._getProp(me.line.lineType),
                        smoothFilter: function smoothFilter(rp) {
                            //smooth为true的话，折线图需要对折线做一些纠正，不能超过底部
                            if (rp[1] > 0) {
                                rp[1] = 0;
                            }
                            else if (Math.abs(rp[1]) > me.h) {
                                rp[1] = -me.h;
                            }
                        },
                        lineCap: "round"
                    }
                });
                if (!this.line.enabled) {
                    bline.context.visible = false;
                }
                me.sprite.addChild(bline);
                me._bline = bline;
                var area = new Path$1({
                    context: {
                        path: me._fillLine(bline),
                        fillStyle: me._getFillStyle(),
                        globalAlpha: _$13.isArray(me.area.alpha) ? 1 : me.area.alpha
                    }
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
                    if (_$13.isNumber(nodeData.y)) {
                        if (_firstNode === null || this._yAxis.place == "right") {
                            //_yAxis为右轴的话，
                            _firstNode = nodeData;
                        }
                        if (this._yAxis.place !== "right" && _firstNode !== null) {
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
                var fill_gradient = null;
                // _fillStyle 可以 接受渐变色，可以不用_getColor， _getColor会过滤掉渐变色
                var _fillStyle = me._getProp(me.area.fillStyle) || me._getLineStrokeStyle(null, "fillStyle");
                if (_$13.isArray(me.area.alpha) && !(_fillStyle instanceof CanvasGradient)) {
                    //alpha如果是数组，那么就是渐变背景，那么就至少要有两个值
                    //如果拿回来的style已经是个gradient了，那么就不管了
                    me.area.alpha.length = 2;
                    if (me.area.alpha[0] == undefined) {
                        me.area.alpha[0] = 0;
                    }
                    if (me.area.alpha[1] == undefined) {
                        me.area.alpha[1] = 0;
                    }
                    //从bline中找到最高的点
                    var topP = _$13.min(me._bline.context.pointList, function (p) {
                        return p[1];
                    });
                    if (topP[0] === undefined || topP[1] === undefined) {
                        return null;
                    }
                    //创建一个线性渐变
                    fill_gradient = me.ctx.createLinearGradient(topP[0], topP[1], topP[0], 0);
                    var rgb = ColorFormat.colorRgb(_fillStyle);
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
                    var topP = _$13.min(pointList, function (p) {
                        return p[1];
                    });
                    var bottomP = _$13.max(pointList, function (p) {
                        return p[1];
                    });
                    if (from == "fillStyle") {
                        bottomP = [0, 0];
                    }
                    if (topP[0] === undefined || topP[1] === undefined || bottomP[1] === undefined) {
                        return null;
                    }
                    //var bottomP = [ 0 , 0 ];
                    //创建一个线性渐变
                    //console.log( topP[0] + "|"+ topP[1]+ "|"+  topP[0]+ "|"+ bottomP[1] )
                    _style = me.ctx.createLinearGradient(topP[0], topP[1], topP[0], bottomP[1]);
                    _$13.each(this._opt.line.strokeStyle.lineargradient, function (item, i) {
                        _style.addColorStop(item.position, item.color);
                    });
                    return _style;
                }
                else {
                    //构造函数中执行的这个方法，还没有line属性
                    //if( this.line && this.line.strokeStyle ){
                    //    _style = this.line.strokeStyle
                    //} else {
                    _style = this._getColor(this._opt.line.strokeStyle);
                    //}
                    return _style;
                }
            }
        }, {
            key: "_createNodes",
            value: function _createNodes() {
                var me = this;
                var list = me._currPointList;
                if ((me.icon.enabled || list.length == 1) && !!me.line.lineWidth) {
                    //拐角的圆点
                    if (!this._circles) {
                        this._circles = new canvax.Display.Sprite({});
                        this.sprite.addChild(this._circles);
                    }
                    var iNode = 0; //这里不能和下面的a对等，以为list中有很多无效的节点
                    for (var a = 0, al = list.length; a < al; a++) {
                        var _point = me._currPointList[a];
                        if (!_point || !_$13.isNumber(_point[1])) {
                            //折线图中有可能这个point为undefined
                            continue;
                        }
                        var context = {
                            x: _point[0],
                            y: _point[1],
                            r: me._getProp(me.icon.radius, a),
                            lineWidth: me._getProp(me.icon.lineWidth, a) || 2,
                            strokeStyle: me._getColor(me.icon.strokeStyle, a),
                            fillStyle: me.icon.fillStyle
                        };
                        var circle = me._circles.children[iNode];
                        if (circle) {
                            _$13.extend(circle.context, context);
                        }
                        else {
                            circle = new Circle$1({
                                context: context
                            });
                            me._circles.addChild(circle);
                        }
                        if (me.icon.corner) {
                            //拐角才有节点
                            var y = me._pointList[a][1];
                            var pre = me._pointList[a - 1];
                            var next = me._pointList[a + 1];
                            if (pre && next) {
                                if (y == pre[1] && y == next[1]) {
                                    circle.context.visible = false;
                                }
                            }
                        }
                        iNode++;
                    }
                    //把过多的circle节点删除了
                    if (me._circles.children.length > iNode) {
                        for (var i = iNode, l = me._circles.children.length; i < l; i++) {
                            me._circles.children[i].destroy();
                            i--;
                            l--;
                        }
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
                        this._labels = new canvax.Display.Sprite({});
                        this.sprite.addChild(this._labels);
                    }
                    var iNode = 0; //这里不能和下面的a对等，以为list中有很多无效的节点
                    for (var a = 0, al = list.length; a < al; a++) {
                        var _point = list[a];
                        if (!_point || !_$13.isNumber(_point[1])) {
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
                        if (_$13.isFunction(me.label.format)) {
                            value = me.label.format(value, me.data[a]) || value;
                        }
                        if (value == undefined || value == null) {
                            continue;
                        }
                        var _label = this._labels.children[iNode];
                        if (_label) {
                            _label.resetText(value);
                            _$13.extend(_label.context, context);
                        }
                        else {
                            _label = new canvax.Display.Text(value, {
                                context: context
                            });
                            me._labels.addChild(_label);
                            me._checkTextPos(_label, a);
                        }
                        iNode++;
                    }
                    //把过多的circle节点删除了
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
                var fillPath = _$13.clone(bline.context.pointList);
                var path = "";
                var baseY = this._yAxis.basePoint.y;
                var _currPath = null;
                _$13.each(fillPath, function (point, i) {
                    if (_$13.isNumber(point[1])) {
                        if (_currPath === null) {
                            _currPath = [];
                        }
                        _currPath.push(point);
                    }
                    else {
                        // not a number
                        if (_currPath && _currPath.length) {
                            getOnePath();
                        }
                    }
                    if (i == fillPath.length - 1 && _$13.isNumber(point[1])) {
                        getOnePath();
                    }
                });
                function getOnePath() {
                    _currPath.push([_currPath[_currPath.length - 1][0], baseY], [_currPath[0][0], baseY], [_currPath[0][0], _currPath[0][1]]);
                    path += getPath(_currPath);
                    _currPath = null;
                }
                return path;
            }
        }]);
    return LineGraphsGroup;
}(canvax.Event.EventDispatcher);
var _$14 = canvax._;
var GraphsBase = function (_Canvax$Event$EventDi) {
    inherits(GraphsBase, _Canvax$Event$EventDi);
    function GraphsBase(opt, root) {
        classCallCheck(this, GraphsBase);
        //这里所有的opts都要透传给 group
        var _this = possibleConstructorReturn(this, (GraphsBase.__proto__ || Object.getPrototypeOf(GraphsBase)).call(this, opt, root));
        _this._opts = opt || {};
        _this.root = root;
        _this.ctx = root.stage.canvas.getContext("2d");
        _this.dataFrame = root.dataFrame; //root.dataFrame的引用
        _this.data = null; //没个graphs中自己_trimGraphs的数据
        _this.sprite = null;
        _this.width = 0;
        _this.height = 0;
        _this.origin = {
            x: 0,
            y: 0
        };
        _this.animation = true;
        _this.inited = false;
        return _this;
    }
    createClass(GraphsBase, [{
            key: "tipsPointerOf",
            value: function tipsPointerOf(e) { }
        }, {
            key: "tipsPointerHideOf",
            value: function tipsPointerHideOf(e) { }
        }, {
            key: "focusAt",
            value: function focusAt(ind, field) { }
        }, {
            key: "unfocusAt",
            value: function unfocusAt(ind, field) { }
        }, {
            key: "selectAt",
            value: function selectAt(ind, field) { }
        }, {
            key: "unselectAt",
            value: function unselectAt(ind, field) { }
            //获取选中的 数据点
        }, {
            key: "getSelectedList",
            value: function getSelectedList() {
                return [];
            }
            //获取选中的 列数据, 比如柱状图中的多分组，选中一列数据，则包函了这分组内的所有柱子
        }, {
            key: "getSelectedRowList",
            value: function getSelectedRowList() {
                return [];
            }
        }, {
            key: "hide",
            value: function hide(field) { }
        }, {
            key: "show",
            value: function show(field) { }
        }, {
            key: "getLegendData",
            value: function getLegendData() { }
            //触发事件, 事件处理函数中的this都指向对应的graphs对象。
        }, {
            key: "triggerEvent",
            value: function triggerEvent(eventTargetOpt, e) {
                var fn = eventTargetOpt["on" + e.type];
                if (fn && _$14.isFunction(fn)) {
                    if (e.eventInfo && e.eventInfo.nodes && e.eventInfo.nodes.length) {
                        if (e.eventInfo.nodes.length == 1) {
                            fn.apply(this, [e, e.eventInfo.nodes[0]]);
                        }
                        else {
                            fn.apply(this, [e, e.eventInfo.nodes]);
                        }
                    }
                    else {
                        var _arr = [];
                        _$14.each(arguments, function (item, i) {
                            if (!!i) {
                                _arr.push(item);
                            }
                        });
                        fn.apply(this, _arr);
                    }
                }
            }
        }]);
    return GraphsBase;
}(canvax.Event.EventDispatcher);
var _$15 = canvax._;
var Rect$5 = canvax.Shapes.Rect;
var LineGraphs = function (_GraphsBase) {
    inherits(LineGraphs, _GraphsBase);
    function LineGraphs(opt, root) {
        classCallCheck(this, LineGraphs);
        var _this = possibleConstructorReturn(this, (LineGraphs.__proto__ || Object.getPrototypeOf(LineGraphs)).call(this, opt, root));
        _this.type = "line";
        //默认给左轴
        _this.yAxisAlign = "left";
        _this.field = null;
        _this.enabledField = null;
        _this.groups = []; //群组集合
        _$15.extend(true, _this, opt);
        _this.init(_this._opts);
        return _this;
    }
    createClass(LineGraphs, [{
            key: "init",
            value: function init(opt) {
                opt.yAxisAlign && (this.yAxisAlign = opt.yAxisAlign);
                this.sprite = new canvax.Display.Sprite();
            }
        }, {
            key: "draw",
            value: function draw(opt) {
                !opt && (opt = {});
                this.width = opt.width;
                this.height = opt.height;
                _$15.extend(true, this.origin, opt.origin);
                this.sprite.context.x = this.origin.x;
                this.sprite.context.y = this.origin.y;
                this.data = this._trimGraphs();
                this._setGroupsForYfield(this.data, null, opt);
                //this.grow();
                if (this.animation && !opt.resize) {
                    this.grow();
                }
                else {
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
                _$15.each(me.groups, function (g) {
                    g.resetData(me.data[g.field].data, dataTrigger);
                });
            }
        }, {
            key: "setEnabledField",
            value: function setEnabledField() {
                //要根据自己的 field，从enabledFields中根据enabled数据，计算一个 enabled版本的field子集
                this.enabledField = this.root._coord.getEnabledFields(this.field);
            }
            //_yAxis, dataFrame
        }, {
            key: "_trimGraphs",
            value: function _trimGraphs() {
                var me = this;
                var _coor = this.root._coord;
                //{"uv":{}.. ,"click": "pv":]}
                //这样按照字段摊平的一维结构
                var tmpData = {};
                me.setEnabledField();
                var _yAxis = this.yAxisAlign == "right" ? _coor._yAxisRight : _coor._yAxisLeft;
                _$15.each(_$15.flatten(me.enabledField), function (field, i) {
                    //var maxValue = 0;
                    var fieldMap = me.root._coord.getFieldMapOf(field);
                    //单条line的全部data数据
                    var _lineData = me.dataFrame.getFieldData(field);
                    if (!_lineData)
                        return;
                    var _data = [];
                    for (var b = 0, bl = _lineData.length; b < bl; b++) {
                        var _xAxis = me.root._coord ? me.root._coord._xAxis : me.root._xAxis;
                        var x = _xAxis.getPosX({
                            ind: b,
                            dataLen: bl,
                            layoutType: me.root._coord ? me.root._coord.xAxis.layoutType : me.root._xAxis.layoutType
                        });
                        var y = _$15.isNumber(_lineData[b]) ? _yAxis.getYposFromVal(_lineData[b]) : undefined; //_lineData[b] 没有数据的都统一设置为undefined，说明这个地方没有数据
                        var node = {
                            type: "line",
                            iGroup: i,
                            iNode: b,
                            field: field,
                            value: _lineData[b],
                            x: x,
                            y: y,
                            rowData: me.dataFrame.getRowData(b),
                            color: fieldMap.color
                        };
                        _data.push(node);
                    }
                    tmpData[field] = {
                        yAxis: _yAxis,
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
                _$15.each(this.groups, function (g, i) {
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
                var me = this;
                //这个field不再这个graphs里面的，不相关
                if (_$15.indexOf(_$15.flatten([me.field]), field) == -1) {
                    return;
                }
                this.data = this._trimGraphs();
                this._setGroupsForYfield(this.data, field);
                _$15.each(this.groups, function (g, i) {
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
                _$15.each(this.groups, function (g, i) {
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
                    fields = _$15.flatten([fields]);
                }
                var _flattenField = _$15.flatten([this.field]);
                _$15.each(data, function (g, field) {
                    if (fields && _$15.indexOf(fields, field) == -1) {
                        //如果有传入fields，但是当前field不在fields里面的话，不需要处理
                        //说明该group已经在graphs里面了
                        return;
                    }
                    var fieldMap = me.root._coord.getFieldMapOf(field);
                    //iGroup 是这条group在本graphs中的ind，而要拿整个图表层级的index， 就是fieldMap.ind
                    var iGroup = _$15.indexOf(_flattenField, field);
                    var group = new LineGraphsGroup(fieldMap, iGroup, //不同于fieldMap.ind
                    me._opts, me.ctx, me.height, me.width);
                    group.draw({
                        animation: me.animation && !opt.resize
                    }, g.data);
                    var insert = false;
                    //在groups数组中插入到比自己_groupInd小的元素前面去
                    for (var gi = 0, gl = me.groups.length; gi < gl; gi++) {
                        if (iGroup < me.groups[gi].iGroup) {
                            me.groups.splice(gi, 0, group);
                            insert = true;
                            me.sprite.addChildAt(group.sprite, gi);
                            break;
                        }
                    } //否则就只需要直接push就好了
                    if (!insert) {
                        me.groups.push(group);
                        me.sprite.addChild(group.sprite);
                    }
                });
            }
        }, {
            key: "getNodesAt",
            value: function getNodesAt(ind) {
                var _nodesInfoList = []; //节点信息集合
                _$15.each(this.groups, function (group) {
                    var node = group.getNodeInfoAt(ind);
                    node && _nodesInfoList.push(node);
                });
                return _nodesInfoList;
            }
        }]);
    return LineGraphs;
}(GraphsBase);
var AnimationFrame$2 = canvax.AnimationFrame;
var BrokenLine$2 = canvax.Shapes.BrokenLine;
var Rect$6 = canvax.Shapes.Rect;
var _$16 = canvax._;
var BarGraphs = function (_GraphsBase) {
    inherits(BarGraphs, _GraphsBase);
    function BarGraphs(opt, root) {
        classCallCheck(this, BarGraphs);
        var _this = possibleConstructorReturn(this, (BarGraphs.__proto__ || Object.getPrototypeOf(BarGraphs)).call(this, opt, root));
        _this.type = "bar";
        _this.field = null;
        _this.enabledField = null;
        _this.yAxisAlign = "left"; //默认设置为左y轴
        _this._xAxis = _this.root._coord._xAxis;
        //trimGraphs的时候是否需要和其他的 bar graphs一起并排计算，true的话这个就会和别的重叠
        //和css中得absolute概念一致，脱离文档流的绝对定位
        _this.absolute = false;
        _this.proportion = false; //比例柱状图，比例图首先肯定是个堆叠图
        _this.node = {
            shapeType: 'rect',
            width: 0,
            _width: 0,
            maxWidth: 50,
            minWidth: 1,
            minHeight: 0,
            radius: 3,
            fillStyle: null,
            fillAlpha: 0.95,
            _count: 0,
            xDis: null,
            filter: null
        };
        _this.label = {
            enabled: false,
            animation: true,
            fontColor: null,
            fontSize: 12,
            format: null,
            lineWidth: 0,
            strokeStyle: null,
            rotation: 0,
            align: "center",
            verticalAlign: "bottom",
            position: "top",
            offsetX: 0,
            offsetY: 0
        };
        //分组的选中，不是选中具体的某个node，这里的选中靠groupRegion来表现出来
        _this.select = {
            enabled: false,
            alpha: 0.2,
            fillStyle: null,
            _fillStyle: "#092848",
            triggerEventType: "click",
            width: 1,
            inds: [] //选中的列的索引集合,注意，这里的ind不是当前视图的ind，而是加上了dataFrame.range.start的全局ind
        };
        _this._barsLen = 0;
        _this.txtsSp = null;
        _$16.extend(true, _this, opt);
        _this.init();
        return _this;
    }
    createClass(BarGraphs, [{
            key: "init",
            value: function init() {
                this.sprite = new canvax.Display.Sprite({
                    id: "graphsEl"
                });
                this.barsSp = new canvax.Display.Sprite({
                    id: "barsSp"
                });
                this.txtsSp = new canvax.Display.Sprite({
                    id: "txtsSp",
                    context: {
                    //visible: false
                    }
                });
            }
        }, {
            key: "getNodesAt",
            value: function getNodesAt(index) {
                //该index指当前
                var data = this.data;
                var _nodesInfoList = []; //节点信息集合
                _$16.each(this.enabledField, function (fs, i) {
                    if (_$16.isArray(fs)) {
                        _$16.each(fs, function (_fs, ii) {
                            //fs的结构两层到顶了
                            var nodeData = data[_fs] ? data[_fs][index] : null;
                            nodeData && _nodesInfoList.push(nodeData);
                        });
                    }
                    else {
                        var nodeData = data[fs] ? data[fs][index] : null;
                        nodeData && _nodesInfoList.push(nodeData);
                    }
                });
                return _nodesInfoList;
            }
        }, {
            key: "_getTargetField",
            value: function _getTargetField(b, v, i, field) {
                if (_$16.isString(field)) {
                    return field;
                }
                else if (_$16.isArray(field)) {
                    var res = field[b];
                    if (_$16.isString(res)) {
                        return res;
                    }
                    else if (_$16.isArray(res)) {
                        return res[v];
                    }
                }
            }
        }, {
            key: "_getColor",
            value: function _getColor(c, rectData, _flattenField) {
                var value = rectData.value;
                var field = rectData.field;
                var fieldMap = this.root._coord.getFieldMapOf(field);
                var color;
                //field对应的索引，， 取颜色这里不要用i
                if (_$16.isString(c)) {
                    color = c;
                }
                if (_$16.isArray(c)) {
                    color = _$16.flatten(c)[_$16.indexOf(_flattenField, field)];
                }
                if (_$16.isFunction(c)) {
                    color = c.apply(this, [rectData]);
                }
                if (color === undefined || color === null) {
                    //只有undefined(用户配置了function),null才会认为需要还原皮肤色
                    //“”都会认为是用户主动想要设置的，就为是用户不想他显示
                    color = fieldMap.color;
                }
                return color;
            }
        }, {
            key: "_getBarWidth",
            value: function _getBarWidth(ceilWidth, ceilWidth2) {
                if (this.node.width) {
                    if (_$16.isFunction(this.node.width)) {
                        this.node._width = this.node.width(ceilWidth);
                    }
                    else {
                        this.node._width = this.node.width;
                    }
                }
                else {
                    this.node._width = ceilWidth2 - Math.max(1, ceilWidth2 * 0.2);
                    //这里的判断逻辑用意已经忘记了，先放着， 有问题在看
                    if (this.node._width == 1 && ceilWidth > 3) {
                        this.node._width = ceilWidth - 2;
                    }
                }
                this.node._width < 1 && (this.node._width = 1);
                this.node._width = parseInt(this.node._width);
                if (this.node._width > this.node.maxWidth) {
                    this.node._width = this.node.maxWidth;
                }
                return this.node._width;
            }
        }, {
            key: "show",
            value: function show(field) {
                this.draw();
            }
        }, {
            key: "hide",
            value: function hide(field) {
                _$16.each(this.barsSp.children, function (h_groupSp, h) {
                    var _bar = h_groupSp.getChildById("bar_" + h + "_" + field);
                    _bar && _bar.destroy();
                });
                _$16.each(this.txtsSp.children, function (sp, h) {
                    var _label = sp.getChildById("text_" + h + "_" + field);
                    _label && _label.destroy();
                });
                this.draw();
            }
        }, {
            key: "resetData",
            value: function resetData(dataFrame, dataTrigger) {
                this.dataFrame = dataFrame;
                this.draw();
            }
        }, {
            key: "clean",
            value: function clean() {
                this.data = {};
                this.barsSp.removeAllChildren();
                if (this.label.enabled) {
                    this.txtsSp.removeAllChildren();
                }
            }
        }, {
            key: "draw",
            value: function draw(opt) {
                !opt && (opt = {});
                //第二个data参数去掉，直接trimgraphs获取最新的data
                _$16.extend(true, this, opt);
                var me = this;
                var animate = me.animation && !opt.resize;
                this.data = this._trimGraphs();
                if (this.enabledField.length == 0 || this._dataLen == 0) {
                    me._preDataLen = 0;
                    this.clean();
                    return;
                }
                var preDataLen = me._preDataLen; //纵向的分组，主要用于 resetData 的时候，对比前后data数量用
                var groupsLen = this.enabledField.length;
                var itemW = 0;
                me.node._count = 0;
                var _flattenField = _$16.flatten([this.field]);
                _$16.each(this.enabledField, function (h_group, i) {
                    h_group = _$16.flatten([h_group]);
                    /*
                    //h_group为横向的分组。如果yAxis.field = ["uv","pv"]的话，
                    //h_group就会为两组，一组代表uv 一组代表pv。
                    var spg = new Canvax.Display.Sprite({ id : "barGroup"+i });
                    */
                    //vLen 为一单元bar上面纵向堆叠的length
                    //比如yAxis.field = [?
                    //    ["uv","pv"],  vLen == 2
                    //    "click"       vLen == 1
                    //]
                    //if (h <= preDataLen - 1)的话说明本次绘制之前sprite里面已经有bar了。需要做特定的动画效果走过去
                    var vLen = h_group.length;
                    if (vLen == 0)
                        return;
                    //itemW 还是要跟着xAxis的xDis保持一致
                    itemW = me.width / me._dataLen;
                    me._barsLen = me._dataLen * groupsLen;
                    for (var h = 0; h < me._dataLen; h++) {
                        //bar的group
                        var groupH = null;
                        if (i == 0) {
                            //横向的分组
                            if (h <= preDataLen - 1) {
                                groupH = me.barsSp.getChildById("barGroup_" + h);
                            }
                            else {
                                groupH = new canvax.Display.Sprite({
                                    id: "barGroup_" + h
                                });
                                me.barsSp.addChild(groupH);
                                groupH.iNode = h;
                            }
                            //这个x轴单元 nodes的分组，添加第一个rect用来接受一些事件处理
                            //以及显示selected状态
                            var groupRegion;
                            var groupRegionWidth = itemW * me.select.width;
                            if (me.select.width > 1) {
                                //说明是具体指
                                groupRegionWidth = me.select.width;
                            }
                            if (h <= preDataLen - 1) {
                                groupRegion = groupH.getChildById("group_region_" + h);
                                groupRegion.context.width = groupRegionWidth;
                                groupRegion.context.x = itemW * h + (itemW - groupRegionWidth) / 2;
                            }
                            else {
                                groupRegion = new Rect$6({
                                    id: "group_region_" + h,
                                    pointChkPriority: false,
                                    hoverClone: false,
                                    xyToInt: false,
                                    context: {
                                        x: itemW * h + (itemW - groupRegionWidth) / 2,
                                        y: -me.height,
                                        width: groupRegionWidth,
                                        height: me.height,
                                        fillStyle: me._getGroupRegionStyle(h),
                                        globalAlpha: _$16.indexOf(me.select.inds, me.dataFrame.range.start + h) > -1 ? me.select.alpha : 0
                                    }
                                });
                                groupH.addChild(groupRegion);
                                groupRegion.iNode = h;
                                //触发注册的事件
                                groupRegion.on('mousedown mouseup panstart mouseover panmove mousemove panend mouseout tap click dblclick', function (e) {
                                    e.eventInfo = {
                                        iNode: this.iNode,
                                        nodes: me.getNodesAt(this.iNode)
                                    };
                                    me.root.fire(e.type, e);
                                    if (me.select.enabled && e.type == me.select.triggerEventType) {
                                        //如果开启了图表的选中交互
                                        var ind = me.dataFrame.range.start + this.iNode;
                                        if (_$16.indexOf(me.select.inds, ind) > -1) {
                                            //说明已经选中了
                                            me.unselectAt(ind);
                                        }
                                        else {
                                            me.selectAt(ind);
                                        }
                                    }
                                    me.triggerEvent(me, e);
                                });
                            }
                        }
                        else {
                            groupH = me.barsSp.getChildById("barGroup_" + h);
                        }
                        //txt的group begin
                        var txtGroupH = null;
                        if (i == 0) {
                            if (h <= preDataLen - 1) {
                                txtGroupH = me.txtsSp.getChildById("txtGroup_" + h);
                            }
                            else {
                                txtGroupH = new canvax.Display.Sprite({
                                    id: "txtGroup_" + h
                                });
                                me.txtsSp.addChild(txtGroupH);
                                txtGroupH.iGroup = i;
                            }
                        }
                        else {
                            txtGroupH = me.txtsSp.getChildById("txtGroup_" + h);
                        } //txt的group begin
                        for (var v = 0; v < vLen; v++) {
                            me.node._count++;
                            //单个的bar，从纵向的底部开始堆叠矩形
                            var rectData = me.data[h_group[v]][h];
                            rectData.iGroup = i, rectData.iNode = h, rectData.iLay = v;
                            var fillStyle = me._getColor(me.node.fillStyle, rectData, _flattenField);
                            rectData.color = fillStyle;
                            var rectH = rectData.y - rectData.fromY;
                            if (isNaN(rectH)) {
                                rectH = 0;
                            }
                            else {
                                if (Math.abs(rectH) < me.node.minHeight) {
                                    rectH = me.node.minHeight;
                                }
                            }
                            var finalPos = {
                                x: Math.round(rectData.x),
                                y: rectData.fromY,
                                width: me.node._width,
                                height: rectH,
                                fillStyle: fillStyle,
                                fillAlpha: me.node.fillAlpha,
                                scaleY: -1
                            };
                            rectData.width = finalPos.width;
                            var rectCtx = {
                                x: finalPos.x,
                                y: rectData.yBasePoint.y,
                                width: finalPos.width,
                                height: finalPos.height,
                                fillStyle: finalPos.fillStyle,
                                fillAlpha: me.node.fillAlpha,
                                scaleY: 0
                            };
                            if (!!me.node.radius && rectData.isLeaf && !me.proportion) {
                                var radiusR = Math.min(me.node._width / 2, Math.abs(rectH));
                                radiusR = Math.min(radiusR, me.node.radius);
                                rectCtx.radius = [radiusR, radiusR, 0, 0];
                            }
                            if (!animate) {
                                delete rectCtx.scaleY;
                                rectCtx.y = finalPos.y;
                            }
                            var rectEl = null;
                            var barId = "bar_" + h + "_" + rectData.field;
                            if (h <= preDataLen - 1) {
                                rectEl = groupH.getChildById(barId);
                            }
                            if (rectEl) {
                                rectEl.context.fillStyle = fillStyle;
                            }
                            else {
                                rectEl = new Rect$6({
                                    id: barId,
                                    context: rectCtx
                                });
                                rectEl.field = rectData.field;
                                groupH.addChild(rectEl);
                            }
                            rectEl.finalPos = finalPos;
                            rectEl.iGroup = i, rectEl.iNode = h, rectEl.iLay = v;
                            //nodeData, nodeElement ， data和图形之间互相引用的属性约定
                            rectEl.nodeData = rectData;
                            rectData.nodeElement = rectEl;
                            me.node.filter && me.node.filter.apply(rectEl, [rectData, me]);
                            //label begin ------------------------------
                            if (me.label.enabled) {
                                var value = rectData.value;
                                if (_$16.isFunction(me.label.format)) {
                                    var _formatc = me.label.format(value, rectData);
                                    if (_formatc !== undefined || _formatc !== null) {
                                        value = _formatc;
                                    }
                                }
                                if (value === undefined || value === null || value === "") {
                                    continue;
                                }
                                if (_$16.isNumber(value)) {
                                    value = numAddSymbol(value);
                                }
                                var textCtx = {
                                    fillStyle: me.label.fontColor || finalPos.fillStyle,
                                    fontSize: me.label.fontSize,
                                    lineWidth: me.label.lineWidth,
                                    strokeStyle: me.label.strokeStyle || finalPos.fillStyle,
                                    //textAlign   : me.label.align,
                                    textBaseline: me.label.verticalAlign,
                                    rotation: me.label.rotation
                                };
                                //然后根据position, offset确定x,y
                                var _textPos = me._getTextPos(finalPos, rectData);
                                textCtx.x = _textPos.x;
                                textCtx.y = _textPos.y;
                                textCtx.textAlign = me._getTextAlign(finalPos, rectData);
                                //文字
                                var textEl = null;
                                var textId = "text_" + h + "_" + rectData.field;
                                if (h <= preDataLen - 1) {
                                    textEl = txtGroupH.getChildById(textId);
                                }
                                if (textEl) {
                                    //do something
                                    textEl.resetText(value);
                                    textEl.context.x = textCtx.x;
                                    textEl.context.y = textCtx.y;
                                }
                                else {
                                    textEl = new canvax.Display.Text(value, {
                                        id: textId,
                                        context: textCtx
                                    });
                                    textEl.field = rectData.field;
                                    txtGroupH.addChild(textEl);
                                }
                            }
                            //label end ------------------------------
                        }
                    }
                });
                this.sprite.addChild(this.barsSp);
                //如果有text设置， 就要吧text的txtsSp也添加到sprite
                if (this.label.enabled) {
                    this.sprite.addChild(this.txtsSp);
                }
                this.sprite.context.x = this.origin.x;
                this.sprite.context.y = this.origin.y;
                this.grow(function () {
                    me.fire("complete");
                }, {
                    delay: 0,
                    duration: 300,
                    animate: animate
                });
                me._preDataLen = me._dataLen;
            }
        }, {
            key: "setEnabledField",
            value: function setEnabledField() {
                //要根据自己的 field，从enabledFields中根据enabled数据，计算一个 enabled版本的field子集
                this.enabledField = this.root._coord.getEnabledFields(this.field);
            }
        }, {
            key: "_getGroupRegionStyle",
            value: function _getGroupRegionStyle(iNode) {
                var me = this;
                var _groupRegionStyle = me.select.fillStyle;
                if (_$16.isArray(me.select.fillStyle)) {
                    _groupRegionStyle = me.select.fillStyle[h];
                }
                if (_$16.isFunction(me.select.fillStyle)) {
                    _groupRegionStyle = me.select.fillStyle.apply(this, [{
                            iNode: iNode,
                            rowData: me.dataFrame.getRowData(iNode)
                        }]);
                }
                if (_groupRegionStyle === undefined || _groupRegionStyle === null) {
                    return me.select._fillStyle;
                }
                return _groupRegionStyle;
            }
        }, {
            key: "_trimGraphs",
            value: function _trimGraphs() {
                var me = this;
                var _xAxis = this._xAxis;
                var _coord = this.root._coord;
                //用来计算下面的hLen
                this.setEnabledField();
                this.data = {};
                var layoutGraphs = [];
                var hLen = 0; //总共有多少列（ 一个xAxis单元分组内 ）
                var preHLen = 0; //自己前面有多少个列（ 一个xAxis单元分组内 ）
                var _preHLenOver = false;
                if (!this.absolute) {
                    _$16.each(this.root._graphs, function (_g) {
                        if (!_g.absolute && _g.type == "bar") {
                            if (_g === me) {
                                _preHLenOver = true;
                            }
                            if (_preHLenOver) {
                                //排在me后面的 graphs，需要计算setEnabledField，才能计算出来 全部的hLen
                                _g.setEnabledField();
                            }
                            else {
                                preHLen += _g.enabledField.length;
                            }
                            hLen += _g.enabledField.length;
                            layoutGraphs.push(_g);
                        }
                    });
                }
                else {
                    layoutGraphs = [this];
                    hLen = this.enabledField.length;
                }
                var ceilWidth = _xAxis.ceilWidth;
                //x方向的二维长度，就是一个bar分组里面可能有n个子bar柱子，那么要二次均分
                var ceilWidth2 = ceilWidth / (hLen + 1);
                //知道了ceilWidth2 后 检测下 barW是否需要调整
                var barW = this._getBarWidth(ceilWidth, ceilWidth2);
                var barDis = ceilWidth2 - barW;
                if (this.node.xDis != null) {
                    barDis = this.node.xDis;
                }
                var disLeft = (ceilWidth - barW * hLen - barDis * (hLen - 1)) / 2;
                if (preHLen) {
                    disLeft += (barDis + barW) * preHLen;
                }
                //var tmpData = [];
                var _yAxis = this.yAxisAlign == "left" ? _coord._yAxisLeft : _coord._yAxisRight;
                //然后计算出对于结构的dataOrg
                var dataOrg = this.dataFrame.getDataOrg(this.enabledField);
                //dataOrg和field是一一对应的
                _$16.each(dataOrg, function (hData, b) {
                    //hData，可以理解为一根竹子 横向的分组数据，这个hData上面还可能有纵向的堆叠
                    //tempBarData 一根柱子的数据， 这个柱子是个数据，上面可以有n个子元素对应的竹节
                    var tempBarData = [];
                    _$16.each(hData, function (vSectionData, v) {
                        tempBarData[v] = [];
                        //vSectionData 代表某个字段下面的一组数据比如 uv
                        me._dataLen = vSectionData.length;
                        //vSectionData为具体的一个field对应的一组数据
                        _$16.each(vSectionData, function (val, i) {
                            var vCount = val;
                            if (me.proportion) {
                                //先计算总量
                                vCount = 0;
                                _$16.each(hData, function (team, ti) {
                                    vCount += team[i];
                                });
                            }
                            var _x = _xAxis.getPosX({
                                ind: i,
                                dataLen: me._dataLen,
                                layoutType: _coord ? _coord.xAxis.layoutType : me.root._xAxis.layoutType
                            });
                            var x = _x - ceilWidth / 2 + disLeft + (barW + barDis) * b;
                            var y = 0;
                            if (me.proportion) {
                                y = -val / vCount * _yAxis.height;
                            }
                            else {
                                y = _yAxis.getYposFromVal(val);
                            }
                            function _getFromY(tempBarData, v, i, val, y, yBasePoint) {
                                var preData = tempBarData[v - 1];
                                if (!preData) {
                                    return yBasePoint.y;
                                }
                                var preY = preData[i].y;
                                var preVal = preData[i].value;
                                var yBaseNumber = yBasePoint.value;
                                if (val >= yBaseNumber) {
                                    //如果大于基线的，那么就寻找之前所有大于基线的
                                    if (preVal >= yBaseNumber) {
                                        //能找到，先把pre的isLeaf设置为false
                                        preData[i].isLeaf = false;
                                        return preY;
                                    }
                                    else {
                                        return _getFromY(tempBarData, v - 1, i, val, y, yBasePoint);
                                    }
                                }
                                else {
                                    if (preVal < yBaseNumber) {
                                        //能找到，先把pre的isLeaf设置为false
                                        preData[i].isLeaf = false;
                                        return preY;
                                    }
                                    else {
                                        return _getFromY(tempBarData, v - 1, i, val, y, yBasePoint);
                                    }
                                }
                            }
                            //找到其着脚点,一般就是 yAxis.basePoint
                            var fromY = _getFromY(tempBarData, v, i, val, y, _yAxis.basePoint);
                            y += fromY - _yAxis.basePoint.y;
                            var nodeData = {
                                type: "bar",
                                value: val,
                                vInd: v,
                                vCount: vCount,
                                field: me._getTargetField(b, v, i, me.enabledField),
                                fromX: x,
                                fromY: fromY,
                                x: x,
                                y: y,
                                width: barW,
                                yBasePoint: _yAxis.basePoint,
                                isLeaf: true,
                                xAxis: _xAxis.getNodeInfoOfX(_x),
                                iNode: i,
                                rowData: me.dataFrame.getRowData(i),
                                color: null
                            };
                            if (!me.data[nodeData.field]) {
                                me.data[nodeData.field] = tempBarData[v];
                            }
                            tempBarData[v].push(nodeData);
                        });
                    });
                    //tempBarData.length && tmpData.push( tempBarData );
                });
                return me.data;
                //return tmpData;
            }
        }, {
            key: "_getTextAlign",
            value: function _getTextAlign(bar, rectData) {
                var align = this.label.align;
                if (rectData.value < rectData.yBasePoint.value) {
                    if (align == "left") {
                        align = "right";
                    }
                    else if (align == "right") {
                        align = "left";
                    }
                }
                return align;
            }
        }, {
            key: "_getTextPos",
            value: function _getTextPos(bar, rectData) {
                var me = this;
                var point = {
                    x: 0, y: 0
                };
                var x = bar.x, y = bar.y;
                switch (me.label.position) {
                    case "top":
                        x = bar.x + bar.width / 2;
                        y = bar.y + bar.height;
                        break;
                    case "topRight":
                        x = bar.x + bar.width;
                        y = bar.y + bar.height;
                        break;
                    case "right":
                        x = bar.x + bar.width;
                        y = bar.y + bar.height / 2;
                        break;
                    case "rightBottom":
                        x = bar.x + bar.width;
                        y = bar.y;
                        break;
                    case "bottom":
                        x = bar.x + bar.width / 2;
                        y = bar.y;
                        break;
                    case "bottomLeft":
                        x = bar.x;
                        y = bar.y;
                        break;
                    case "left":
                        x = bar.x;
                        y = bar.y + bar.height / 2;
                        break;
                    case "leftTop":
                        x = bar.x;
                        y = bar.y + bar.height;
                        break;
                    case "center":
                        x = bar.x + bar.width / 2;
                        y = bar.y + bar.height / 2;
                        break;
                }
                x -= me.label.offsetX;
                var i = 1;
                if (rectData.value < rectData.yBasePoint.value) {
                    i = -1;
                }
                y -= i * me.label.offsetY;
                point.x = x;
                point.y = y;
                return point;
            }
            /**
             * 生长动画
             */
        }, {
            key: "grow",
            value: function grow(callback, opt) {
                var me = this;
                //console.log( me._preDataLen+"|"+ me._dataLen)
                //先把已经不在当前range范围内的元素destroy掉
                if (me._preDataLen > me._dataLen) {
                    for (var i = me._dataLen, l = me._preDataLen; i < l; i++) {
                        me.barsSp.getChildAt(i).destroy();
                        me.label.enabled && me.txtsSp.getChildAt(i).destroy();
                        i--;
                        l--;
                    }
                }
                if (!opt.animate) {
                    callback && callback(me);
                    return;
                }
                var sy = 1;
                var optsions = _$16.extend({
                    delay: Math.min(1000 / this._barsLen, 80),
                    easing: "Linear.None",
                    duration: 500
                }, opt);
                var barCount = 0;
                _$16.each(me.enabledField, function (h_group, g) {
                    h_group = _$16.flatten([h_group]);
                    var vLen = h_group.length;
                    if (vLen == 0)
                        return;
                    for (var h = 0; h < me._dataLen; h++) {
                        for (var v = 0; v < vLen; v++) {
                            var rectData = me.data[h_group[v]][h];
                            var group = me.barsSp.getChildById("barGroup_" + h);
                            var bar = group.getChildById("bar_" + h + "_" + rectData.field);
                            if (optsions.duration == 0) {
                                bar.context.scaleY = sy;
                                bar.context.y = sy * sy * bar.finalPos.y;
                                bar.context.x = bar.finalPos.x;
                                bar.context.width = bar.finalPos.width;
                                bar.context.height = bar.finalPos.height;
                            }
                            else {
                                if (bar._tweenObj) {
                                    AnimationFrame$2.destroyTween(bar._tweenObj);
                                }
                                bar._tweenObj = bar.animate({
                                    scaleY: sy,
                                    y: sy * bar.finalPos.y,
                                    x: bar.finalPos.x,
                                    width: bar.finalPos.width,
                                    height: bar.finalPos.height
                                }, {
                                    duration: optsions.duration,
                                    easing: optsions.easing,
                                    delay: h * optsions.delay,
                                    onUpdate: function onUpdate(arg) { },
                                    onComplete: function onComplete(arg) {
                                        if (arg.width < 3 && this.context) {
                                            this.context.radius = 0;
                                        }
                                        barCount++;
                                        if (barCount === me.node._count) {
                                            callback && callback(me);
                                        }
                                    },
                                    id: bar.id
                                });
                            }
                        }
                    }
                });
            }
            //这里的ind是包含了start的全局index
        }, {
            key: "selectAt",
            value: function selectAt(ind) {
                if (_$16.indexOf(this.select.inds, ind) > -1)
                    return;
                this.select.inds.push(ind);
                var index = ind - this.dataFrame.range.start;
                var group = this.barsSp.getChildById("barGroup_" + index);
                if (group) {
                    var groupRegion = group.getChildById("group_region_" + index);
                    if (groupRegion) {
                        groupRegion.context.globalAlpha = this.select.alpha;
                    }
                }
            }
            //这里的ind是包含了start的全局index
        }, {
            key: "unselectAt",
            value: function unselectAt(ind) {
                if (_$16.indexOf(this.select.inds, ind) == -1)
                    return;
                var _index = _$16.indexOf(this.select.inds, ind);
                this.select.inds.splice(_index, 1);
                var index = ind - this.dataFrame.range.start;
                var group = this.barsSp.getChildById("barGroup_" + index);
                if (group) {
                    var groupRegion = group.getChildById("group_region_" + index);
                    if (groupRegion) {
                        groupRegion.context.globalAlpha = 0;
                    }
                }
            }
        }, {
            key: "getSelectedRowList",
            value: function getSelectedRowList() {
                var rowDatas = [];
                var me = this;
                _$16.each(me.select.inds, function (ind) {
                    var index = ind - me.dataFrame.range.start;
                    rowDatas.push(me.dataFrame.getRowData(index));
                });
                return rowDatas;
            }
        }]);
    return BarGraphs;
}(GraphsBase);
var component = function (_Canvax$Event$EventDi) {
    inherits(component, _Canvax$Event$EventDi);
    function component(opt, data) {
        classCallCheck(this, component);
        var _this = possibleConstructorReturn(this, (component.__proto__ || Object.getPrototypeOf(component)).call(this, opt, data));
        _this.enabled = false; //是否加载该组件
        return _this;
    }
    createClass(component, [{
            key: "init",
            value: function init(opt, data) { }
        }, {
            key: "draw",
            value: function draw() { }
            //组件的销毁
        }, {
            key: "destroy",
            value: function destroy() { }
        }, {
            key: "reset",
            value: function reset() { }
        }]);
    return component;
}(canvax.Event.EventDispatcher);
var Circle$3 = canvax.Shapes.Circle;
var _$17 = canvax._;
var Legend = function (_Component) {
    inherits(Legend, _Component);
    function Legend(data, opt, root) {
        classCallCheck(this, Legend);
        var _this = possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).call(this));
        _this.root = root;
        /* data的数据结构为
        [
            //descartes中用到的时候还会带入yAxis
            {name: "uv", color: "#ff8533", field: '' ...如果手动传入数据只需要前面这三个 enabled: true, ind: 0, } //外部只需要传field和fillStyle就行了 activate是内部状态
        ]
        */
        _this.data = data || [];
        _this.width = 0;
        _this.height = 0;
        //一般来讲，比如柱状图折线图等，是按照传入的field来分组来设置图例的，那么legend.field都是null
        //但是还有一种情况就是，是按照同一个field中的数据去重后来分组的，比如散点图中sex属性的男女两个分组作为图例，
        //以及pie饼图中的每个数据的name字段都是作为一个图例
        //那么就想要给legend主动设置一个field字段，然后legend自己从dataFrame中拿到这个field的数据来去重，然后分组做为图例
        //这是一个很屌的设计
        _this.field = null;
        _this.icon = {
            height: 30,
            width: "auto",
            shapeType: "circle",
            radius: 5,
            lineWidth: 1,
            fillStyle: "#999",
            onChecked: function onChecked() { },
            onUnChecked: function onUnChecked() { }
        };
        _this.label = {
            textAlign: "left",
            textBaseline: "middle",
            fillStyle: "#333",
            cursor: "pointer",
            format: function format(name, info) {
                return name;
            }
        };
        //this.onChecked=function(){};
        //this.onUnChecked=function(){};
        _this._labelColor = "#999";
        _this.position = "top"; //图例所在的方向top,right,bottom,left
        _this.layoutType = "h"; //横向 top,bottom --> h left,right -- >v
        _this.sprite = null;
        if (opt) {
            _$17.extend(true, _this, opt);
        }
        if (_this.position == "left" || _this.position == "right") {
            _this.layoutType = 'v';
        }
        else {
            _this.layoutType = 'h';
        }
        _this.sprite = new canvax.Display.Sprite({
            id: "LegendSprite"
        });
        _this._draw();
        return _this;
    }
    createClass(Legend, [{
            key: "pos",
            value: function pos(_pos) {
                _pos.x && (this.sprite.context.x = _pos.x + this.icon.radius);
                _pos.y && (this.sprite.context.y = _pos.y);
            }
        }, {
            key: "draw",
            value: function draw() {
                //图例组件运行开始运行的时候就需要计算好自己的高宽 所以早就在_draw中渲染好了， 
                //组件统一调用draw的时候就不需要做任何处理了
            }
        }, {
            key: "_draw",
            value: function _draw() {
                var me = this;
                var viewWidth = this.root.width - this.root.padding.left - this.root.padding.right;
                var viewHeight = this.root.height - this.root.padding.top - this.root.padding.bottom;
                var maxItemWidth = 0;
                var width = 0, height = 0;
                var x = 0, y = 0;
                var rows = 1;
                _$17.each(this.data, function (obj, i) {
                    var _icon = new Circle$3({
                        id: "legend_field_icon_" + i,
                        context: {
                            x: 0,
                            y: me.icon.height / 3,
                            fillStyle: !obj.enabled ? "#ccc" : obj.color || me._labelColor,
                            r: me.icon.radius,
                            cursor: "pointer"
                        }
                    });
                    _icon.hover(function (e) {
                        e.eventInfo = me._getInfoHandler(e, obj);
                    }, function (e) {
                        delete e.eventInfo;
                    });
                    _icon.on("mousemove", function (e) {
                        e.eventInfo = me._getInfoHandler(e, obj);
                    });
                    //阻止事件冒泡
                    _icon.on("click", function () { });
                    var txt = new canvax.Display.Text(me.label.format(obj.name, obj), {
                        id: "legend_field_txt_" + i,
                        context: {
                            x: me.icon.radius + 3,
                            y: me.icon.height / 3,
                            textAlign: me.label.textAlign,
                            textBaseline: me.label.textBaseline,
                            fillStyle: me.label.fillStyle,
                            cursor: me.label.cursor //"pointer"
                        }
                    });
                    txt.hover(function (e) {
                        e.eventInfo = me._getInfoHandler(e, obj);
                    }, function (e) {
                        delete e.eventInfo;
                    });
                    txt.on("mousemove", function (e) {
                        e.eventInfo = me._getInfoHandler(e, obj);
                    });
                    txt.on("click", function () { });
                    var txtW = txt.getTextWidth();
                    var itemW = txtW + me.icon.radius * 2 + 20;
                    maxItemWidth = Math.max(maxItemWidth, itemW);
                    var spItemC = {
                        height: me.icon.height
                    };
                    if (me.layoutType == "v") {
                        if (y + me.icon.height > viewHeight) {
                            x += maxItemWidth;
                            y = 0;
                        }
                        spItemC.x = x;
                        spItemC.y = y;
                        y += me.icon.height;
                        height = Math.max(height, y);
                    }
                    else {
                        if (x + itemW > viewWidth) {
                            width = Math.max(width, x);
                            x = 0;
                            rows++;
                        }
                        spItemC.x = x;
                        spItemC.y = me.icon.height * (rows - 1);
                        x += itemW;
                    }
                    var sprite = new canvax.Display.Sprite({
                        id: "legend_field_" + i,
                        context: spItemC
                    });
                    sprite.addChild(_icon);
                    sprite.addChild(txt);
                    sprite.context.width = itemW;
                    me.sprite.addChild(sprite);
                    sprite.on("click", function (e) {
                        //只有一个field的时候，不支持取消
                        if (_$17.filter(me.data, function (obj) {
                            return obj.enabled;
                        }).length == 1) {
                            if (obj.enabled) {
                                return;
                            }
                        }
                        obj.enabled = !obj.enabled;
                        _icon.context.fillStyle = !obj.enabled ? "#ccc" : obj.color || me._labelColor;
                        if (obj.enabled) {
                            me.icon.onChecked(obj);
                        }
                        else {
                            me.icon.onUnChecked(obj);
                        }
                    });
                });
                if (this.layoutType == "h") {
                    me.width = me.sprite.context.width = width;
                    me.height = me.sprite.context.height = me.icon.height * rows;
                }
                else {
                    me.width = me.sprite.context.width = x + maxItemWidth;
                    me.height = me.sprite.context.height = height;
                }
                //me.width = me.sprite.context.width  = width;
                //me.height = me.sprite.context.height = height;
            }
        }, {
            key: "_getInfoHandler",
            value: function _getInfoHandler(e, data) {
                return {
                    type: "legend",
                    //title : data.name,
                    nodes: [{
                            name: data.name,
                            fillStyle: data.color
                        }]
                };
            }
        }], [{
            key: "register",
            value: function register(opt, app) {
                //设置legendOpt
                var legendOpt = _$17.extend(true, {
                    icon: {
                        onChecked: function onChecked(obj) {
                            app.show(obj.name, obj);
                            app.componentsReset({ name: "legend" });
                        },
                        onUnChecked: function onUnChecked(obj) {
                            app.hide(obj.name, obj);
                            app.componentsReset({ name: "legend" });
                        }
                    }
                }, opt);
                var legendData = opt.data;
                if (legendData) {
                    _$17.each(legendData, function (item, i) {
                        item.enabled = true;
                        item.ind = i;
                    });
                    delete opt.data;
                }
                else {
                    legendData = app.getLegendData();
                }
                //var _legend = new app.componentsMap.legend( legendData, legendOpt, this );
                var _legend = new this(legendData, legendOpt, app);
                if (_legend.layoutType == "h") {
                    app.padding[_legend.position] += _legend.height;
                }
                else {
                    app.padding[_legend.position] += _legend.width;
                }
                if (app._coord && app._coord.type == 'rect') {
                    if (_legend.position == "top" || _legend.position == "bottom") {
                        app.components.push({
                            type: "once",
                            plug: {
                                draw: function draw() {
                                    _legend.pos({
                                        x: app._coord.origin.x
                                    });
                                }
                            }
                        });
                    }
                }
                //default right
                var pos = {
                    x: app.width - app.padding.right,
                    y: app.padding.top
                };
                if (_legend.position == "left") {
                    pos.x = app.padding.left - _legend.width;
                }
                if (_legend.position == "top") {
                    pos.x = app.padding.left;
                    pos.y = app.padding.top - _legend.height;
                }
                if (_legend.position == "bottom") {
                    pos.x = app.padding.left;
                    pos.y = app.height - app.padding.bottom;
                }
                _legend.pos(pos);
                app.components.push({
                    type: "legend",
                    plug: _legend
                });
                app.stage.addChild(_legend.sprite);
            }
        }]);
    return Legend;
}(component);
var coord = { rect: Rect$3 };
var graphs = { line: LineGraphs, bar: BarGraphs };
var components = { legend: Legend };
var projectTheme = ["#4d7fff", "#13c9ce", "#fb734f", "#50c3f2", "#b598f1"];
if (projectTheme && projectTheme.length) {
    theme.set(projectTheme);
}
var chartx = { canvax: canvax, create: function create(el, _data, _opt) {
        var chart = null;
        var me = this;
        var data = canvax._.clone(_data);
        var opt = canvax._.extend(true, {}, _opt);
        var chart_id = canvax.$.query(el).getAttribute("chart_id");
        if (chart_id != undefined) {
            var _chart = me.instances[chart_id];
            if (_chart) {
                _chart.destroy();
            }
            delete me.instances[chart_id];
        }
        var Coord$$1 = Coord;
        if (opt.coord && opt.coord.type) {
            Coord$$1 = coord[opt.coord.type];
        }
        try {
            chart = new Coord$$1(el, data, opt, graphs, components);
            if (chart) {
                chart.draw();
                me.instances[chart.id] = chart;
                chart.on("destroy", function () {
                    me.instances[chart.id] = null;
                    delete me.instances[chart.id];
                });
            }
        }
        catch (err) {
            throw "Chatx Error：" + err;
        }
        return chart;
    }, options: { "3": "%7B%22coord%22%3A%7B%22type%22%3A%22rect%22%2C%22xAxis%22%3A%7B%22field%22%3A%22time%22%7D%7D%2C%22graphs%22%3A%5B%7B%22type%22%3A%22bar%22%2C%22field%22%3A%5B%22uv%22%2C%22pv%22%5D%2C%22node%22%3A%7B%22xDis%22%3A0%7D%7D%5D%7D", "4": "%7B%22coord%22%3A%7B%22type%22%3A%22rect%22%2C%22xAxis%22%3A%7B%22field%22%3A%22time%22%7D%7D%2C%22graphs%22%3A%5B%7B%22type%22%3A%22line%22%2C%22field%22%3A%5B%22click%22%2C%22ppc%22%5D%7D%5D%2C%22legend%22%3A%7B%7D%7D", "5": "%7B%22coord%22%3A%7B%22type%22%3A%22rect%22%2C%22xAxis%22%3A%7B%22field%22%3A%22time%22%7D%7D%2C%22graphs%22%3A%5B%7B%22type%22%3A%22line%22%2C%22field%22%3A%22click%22%2C%22line%22%3A%7B%22strokeStyle%22%3A%7B%22lineargradient%22%3A%5B%7B%22position%22%3A0%2C%22color%22%3A%22%23ff7033%22%7D%2C%7B%22position%22%3A0.1%2C%22color%22%3A%22%23ff9933%22%7D%2C%7B%22position%22%3A0.3%2C%22color%22%3A%22%232dafe3%22%7D%2C%7B%22position%22%3A0.85%2C%22color%22%3A%22%23449be3%22%7D%2C%7B%22position%22%3A0.95%2C%22color%22%3A%22%237177e3%22%7D%2C%7B%22position%22%3A1%2C%22color%22%3A%22%235744e3%22%7D%5D%7D%7D%2C%22fill%22%3A%7B%22alpha%22%3A0%7D%7D%5D%7D" } };
for (var p in global$1) {
    chartx[p] = global$1[p];
}
exports["default"] = chartx;

});