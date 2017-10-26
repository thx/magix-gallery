/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dragdrop/index',["$"],function(require,exports,module){
/*$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var $ = require('$');
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
var DragObject;
var DragPrevent = function (e) {
    e.preventDefault();
};
var DragMove = function (event) {
    if (DragObject.iMove) {
        DragObject.move(event);
    }
};
var DragMoveEvent = 'mousemove touchmove';
var DragEndEvent = 'mouseup touchend';
var DragPreventEvent = 'keydown mousewheel DOMMouseScroll';
var DragStop = function (e) {
    if (DragObject) {
        Doc.off(DragMoveEvent, DragMove)
            .off(DragEndEvent, DragStop)
            .off(DragPreventEvent, DragPrevent);
        Win.off('blur', DragStop);
        var node = DragObject.node;
        $(node).off('losecapture', DragStop);
        if (node.setCapture)
            node.releaseCapture();
        if (DragObject.iStop) {
            DragObject.stop(e);
        }
        DragObject = null;
    }
};
module.exports = {
    begin: function (node, moveCallback, endCallback) {
        DragStop();
        if (node) {
            ClearSelection();
            if (node.setCapture) {
                node.setCapture();
            }
            DragObject = {
                move: moveCallback,
                stop: endCallback,
                node: node,
                iMove: $.isFunction(moveCallback),
                iStop: $.isFunction(endCallback)
            };
            Doc.on(DragMoveEvent, DragMove)
                .on(DragEndEvent, DragStop)
                .on(DragPreventEvent, DragPrevent);
            Win.on('blur', DragStop);
            $(node).on('losecapture', DragStop);
        }
    },
    fromPoint: function (x, y) {
        var node = null;
        if (document.elementFromPoint) {
            if (!DragPrevent.$fixed && IsW3C) {
                DragPrevent.$fixed = true;
                DragPrevent.$add = document.elementFromPoint(-1, -1) !== null;
            }
            if (DragPrevent.$add) {
                x += Win.scrollLeft();
                y += Win.scrollTop();
            }
            node = document.elementFromPoint(x, y);
            while (node && node.nodeType == 3)
                node = node.parentNode;
        }
        return node;
    },
    clear: ClearSelection,
    end: DragStop
};

});