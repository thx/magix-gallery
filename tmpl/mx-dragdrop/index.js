/*
ver:1.3.6
*/
/*
    author:xinglie.lkf@taobao.com
 */
let $ = require('$');
let Win = $(window);
let Doc = $(document);
let IsW3C = window.getComputedStyle;
let ClearSelection = (t) => {
    if ((t = window.getSelection)) {
        t().removeAllRanges();
    } else if ((t = window.document.selection)) {
        if (t.empty) t.empty();
        else t = null;
    }
};
let DragObject;
let DragPrevent = (e) => {
    e.preventDefault();
};
let DragMove = (event) => {
    if (DragObject.iMove) {
        DragObject.move(event);
    }
};
let DragMoveEvent = 'mousemove touchmove';
let DragEndEvent = 'mouseup touchend';
let DragPreventEvent = 'keydown mousewheel DOMMouseScroll';
let DragStop = (e) => {
    if (DragObject) {
        Doc.off(DragMoveEvent, DragMove)
            .off(DragEndEvent, DragStop)
            .off(DragPreventEvent, DragPrevent);
        Win.off('blur', DragStop);
        let node = DragObject.node;
        $(node).off('losecapture', DragStop);
        if (node.setCapture) node.releaseCapture();
        if (DragObject.iStop) {
            DragObject.stop(e);
        }
        DragObject = null;
    }
};

module.exports = {
    begin(node, moveCallback, endCallback) {
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
    fromPoint(x, y) {
        let node = null;
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
            while (node && node.nodeType == 3) node = node.parentNode;
        }
        return node;
    },
    clear: ClearSelection,
    end: DragStop
};