/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragdrop/index",["$"],(require,exports,module)=>{
/*$*/

var $ = require("$");
var Win = $(window);
var Doc = $(document);
var IsW3C = window.getComputedStyle;
var ClearSelection = function (t) {
    if ((t = window.getSelection)) {
        t().removeAllRanges();
    }
    else if ((t = window.document.selection)) {
        if (t.empty)
            t.empty();
        else
            t = null;
    }
};
var DragPrevent = function (e) {
    e.preventDefault();
};
var DragMoveEvent = 'mousemove touchmove';
var DragEndEvent = 'mouseup touchend';
var DragPreventEvent = 'keydown mousewheel DOMMouseScroll';
module.exports = {
    ctor: function () {
        var me = this;
        me.on('destroy', function () {
            me['__as']();
        });
    },
    '__as': function (e) {
        var me = this;
        var info = me['__at'];
        if (info) {
            delete me['__at'];
            Doc.off(DragMoveEvent, me['__au'])
                .off(DragEndEvent, me['__av'])
                .off(DragPreventEvent, DragPrevent);
            Win.off('blur', me['__av']);
            var node = info['__aw'];
            var stop = info['__ax'];
            var iStop = info['__ay'];
            $(node).off('losecapture', me['__av']);
            if (node.setCapture)
                node.releaseCapture();
            if (iStop) {
                stop(e);
            }
        }
    },
    dragdrop: function (node, moveCallback, endCallback) {
        var me = this;
        me['__as']();
        if (node) {
            ClearSelection();
            if (node.setCapture) {
                node.setCapture();
            }
            me['__at'] = {
                '__ax': endCallback,
                '__aw': node,
                '__ay': $.isFunction(endCallback)
            };
            var moveIsFunction_1 = $.isFunction(moveCallback);
            me['__av'] = function (e) {
                me['__as'](e);
            };
            me['__au'] = function (e) {
                if (moveIsFunction_1) {
                    moveCallback(e);
                }
            };
            Doc.on(DragMoveEvent, me['__au'])
                .on(DragEndEvent, me['__av'])
                .on(DragPreventEvent, DragPrevent);
            Win.on('blur', me['__av']);
            $(node).on('losecapture', me['__av']);
        }
    },
    fromPoint: function (x, y) {
        var node = null;
        if (document.elementFromPoint) {
            if (!DragPrevent['__az'] && IsW3C) {
                DragPrevent['__az'] = true;
                DragPrevent['__aA'] = document.elementFromPoint(-1, -1) !== null;
            }
            if (DragPrevent['__aA']) {
                x += Win.scrollLeft();
                y += Win.scrollTop();
            }
            node = document.elementFromPoint(x, y);
            while (node && node.nodeType == 3)
                node = node.parentNode;
        }
        return node;
    },
    clear: ClearSelection
};

});