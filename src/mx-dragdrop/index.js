/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
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
            me['@{dd&drag.end}']();
        });
    },
    '@{dd&drag.end}': function (e) {
        var me = this;
        var info = me['@{dd&drag.object}'];
        if (info) {
            delete me['@{dd&drag.object}'];
            Doc.off(DragMoveEvent, me['@{dd&move.proxy}'])
                .off(DragEndEvent, me['@{dd&stop.proxy}'])
                .off(DragPreventEvent, DragPrevent);
            Win.off('blur', me['@{dd&stop.proxy}']);
            var node = info['@{dd&node}'];
            var stop = info['@{dd&stop}'];
            var iStop = info['@{dd&stop.is.function}'];
            $(node).off('losecapture', me['@{dd&stop.proxy}']);
            if (node.setCapture)
                node.releaseCapture();
            if (iStop) {
                stop(e);
            }
        }
    },
    dragdrop: function (node, moveCallback, endCallback) {
        var me = this;
        me['@{dd&drag.end}']();
        if (node) {
            ClearSelection();
            if (node.setCapture) {
                node.setCapture();
            }
            me['@{dd&drag.object}'] = {
                '@{dd&stop}': endCallback,
                '@{dd&node}': node,
                '@{dd&stop.is.function}': $.isFunction(endCallback)
            };
            var moveIsFunction_1 = $.isFunction(moveCallback);
            me['@{dd&stop.proxy}'] = function (e) {
                me['@{dd&drag.end}'](e);
            };
            me['@{dd&move.proxy}'] = function (e) {
                if (moveIsFunction_1) {
                    moveCallback(e);
                }
            };
            Doc.on(DragMoveEvent, me['@{dd&move.proxy}'])
                .on(DragEndEvent, me['@{dd&stop.proxy}'])
                .on(DragPreventEvent, DragPrevent);
            Win.on('blur', me['@{dd&stop.proxy}']);
            $(node).on('losecapture', me['@{dd&stop.proxy}']);
        }
    },
    fromPoint: function (x, y) {
        var node = null;
        if (document.elementFromPoint) {
            if (!DragPrevent['@{dd&fixed}'] && IsW3C) {
                DragPrevent['@{dd&fixed}'] = true;
                DragPrevent['@{dd&add.scroll}'] = document.elementFromPoint(-1, -1) !== null;
            }
            if (DragPrevent['@{dd&add.scroll}']) {
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