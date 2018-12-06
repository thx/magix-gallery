/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragselect/index",["magix","../mx-dragdrop/index","../mx-runner/index","$"],(require,exports,module)=>{
/*Magix,DD,Runner,$*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var DD = require("../mx-dragdrop/index");
var Runner = require("../mx-runner/index");
var $ = require("$");
Magix.applyStyle("__mx-dragselect_index_","/* @dependent: ./index.less */\n.__mx-dragselect_index_-area {\n  left: -1000px;\n  top: 0;\n  background: #5665EB;\n  position: absolute;\n  opacity: 0.3;\n  border: solid 1px #4D4FA8;\n}\n");
var AreaId = Magix.guid('area_');
var Win = $(window);
var Doc = $(document);
var SCROLL_OFFSET = 20;
var SCROLL_STEP = 7;
var SCROLL_INTERVAL = 30;
var UI = {
    '@{start}': function () {
        var node = $('#' + AreaId);
        if (!node.length) {
            node = $('<div id="' + AreaId + '" class="__mx-dragselect_index_-area" />').appendTo('body');
        }
    },
    '@{update}': function (x, y, width, height) {
        var node = $('#' + AreaId);
        node.css({
            left: x,
            top: y,
            width: width,
            height: height
        });
    },
    '@{end}': function () {
        var node = $('#' + AreaId);
        node.css({
            left: -1e5
        });
    }
};
var rectIntersect = function (rect1, rect2) {
    var half1Width = rect1.width / 2, half1Height = rect1.height / 2, half2Width = rect2.width / 2, half2Height = rect2.height / 2, cen1 = {
        x: rect1.x + half1Width,
        y: rect1.y + half1Height
    }, cen2 = {
        x: rect2.x + half2Width,
        y: rect2.y + half2Height
    };
    return Math.abs(cen2.x - cen1.x) <= half1Width + half2Width &&
        Math.abs(cen2.y - cen1.y) <= half1Height + half2Height;
};
module.exports = Magix.View.extend({
    mixins: [DD],
    init: function (extra) {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.on('mousedown', function (e) {
            e.preventDefault();
            me['@{drag.start}'](e);
        });
        oNode.on('click', function (e) {
            if (!me['@{has.moved}']) {
                var node = me['@{findDirectChild}'](e.target);
                if (node) {
                    oNode.trigger({
                        type: 'change',
                        action: 'add',
                        mode: 'click',
                        node: node
                    });
                }
            }
            delete me['@{has.moved}'];
        });
        me.on('destroy', function () {
            oNode.off('mousedown click');
        });
        me['@{sub.selector}'] = extra.selector;
        me['@{owner.node}'] = oNode;
    },
    '@{findDirectChild}': function (node) {
        var me = this, result = null, zone = me['@{owner.node}'][0];
        while (zone != node) {
            if (node.parentNode == zone) {
                result = node;
                break;
            }
            else {
                node = node.parentNode;
            }
        }
        if (result && me['@{sub.selector}']) {
            if (!$.find.matchesSelector(result, me['@{sub.selector}'])) {
                result = null;
            }
        }
        return result;
    },
    '@{collectRects}': function () {
        var me = this;
        var children = me['@{sub.selector}'] ? me['@{owner.node}'].find(me['@{sub.selector}']) : me['@{owner.node}'].children();
        var rects = [], count = 0;
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var c = children_1[_i];
            var $c = $(c);
            var offset = $c.offset();
            rects.push({
                id: count++,
                c: c,
                x: offset.left,
                y: offset.top,
                width: $c.width(),
                height: $c.height()
            });
        }
        return rects;
    },
    '@{area.change}': function (e) {
        var me = this;
        var newPos = {
            x: e.pageX,
            y: e.pageY
        };
        var range = me['@{drag.range}'];
        if (newPos.x < range.x) {
            newPos.x = range.x;
        }
        else if (newPos.x > range.x + range.width) {
            newPos.x = range.x + range.width;
        }
        if (newPos.y < range.y) {
            newPos.y = range.y;
        }
        else if (newPos.y > range.y + range.height) {
            newPos.y = range.y + range.height;
        }
        var oldPos = me['@{drag.info}'];
        var x = Math.min(newPos.x, oldPos.x);
        var y = Math.min(newPos.y, oldPos.y);
        var width = Math.abs(newPos.x - oldPos.x);
        var height = Math.abs(newPos.y - oldPos.y);
        UI['@{update}'](x, y, width, height);
        var rects = me['@{sub.nodes.rect}'];
        var area = {
            x: x, y: y, width: width, height: height
        };
        var map = me['@{temp.map}'];
        for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
            var rect = rects_1[_i];
            if (rectIntersect(area, rect)) {
                if (map[rect.id] !== 1) {
                    map[rect.id] = 1;
                    me['@{owner.node}'].trigger({
                        type: 'change',
                        action: 'add',
                        mode: 'drag',
                        node: rect.c
                    });
                }
            }
            else if (map[rect.id] === 1) {
                delete map[rect.id];
                me['@{owner.node}'].trigger({
                    type: 'change',
                    action: 'remove',
                    mode: 'drag',
                    node: rect.c
                });
            }
        }
    },
    '@{drag.start}': function (e) {
        if (e.which === 1) {
            var me_1 = this;
            me_1['@{drag.info}'] = {
                x: e.pageX,
                y: e.pageY
            };
            var node = me_1['@{owner.node}'];
            var offset = node.offset();
            me_1['@{drag.range}'] = {
                x: offset.left,
                y: offset.top,
                width: node.width(),
                height: node.height()
            };
            me_1['@{temp.map}'] = {};
            UI['@{start}']();
            node.trigger('dragbegin');
            me_1.dragdrop(e.target, function (e) {
                me_1['@{drag.move}'](e);
            }, function (e) {
                me_1['@{drag.end}'](e);
            });
        }
    },
    '@{drag.move}': function (e) {
        var me = this;
        if (!me['@{has.moved}']) {
            var last = me['@{drag.info}'];
            if (Math.abs(e.pageX - last.x) > 5 || Math.abs(e.pageY - last.y) > 5) {
                me['@{has.moved}'] = true;
            }
        }
        if (me['@{has.moved}']) {
            if (!me['@{sub.nodes.rect}']) {
                me['@{sub.nodes.rect}'] = me['@{collectRects}']();
            }
            me['@{move.event}'] = e;
            me['@{start.win.scroll}']();
            me['@{area.change}'](e);
        }
    },
    '@{drag.end}': function () {
        var me = this;
        me['@{stop.win.scroll}']();
        UI['@{end}']();
        delete me['@{move.event}'];
        delete me['@{drag.info}'];
        delete me['@{drag.range}'];
        delete me['@{sub.nodes.rect}'];
        delete me['@{temp.map}'];
        //delete me['@{has.moved}'];
        me['@{owner.node}'].trigger('dragfinish');
    },
    '@{start.win.scroll}': function () {
        var me = this;
        if (!me['@{fn.win.scroll}']) {
            me['@{fn.win.scroll}'] = function () {
                var tx = 0, ty = 0, e = me['@{move.event}'];
                var scrollTop = Win.scrollTop();
                var winHeight = Win.height();
                var maxHeight = Doc.height();
                var maxWidth = Doc.width();
                var winWidth = Win.width();
                var scrollLeft = Win.scrollLeft();
                if (e.pageX - scrollLeft < SCROLL_OFFSET &&
                    scrollLeft > 0) {
                    tx = -Math.min(SCROLL_STEP, scrollLeft);
                }
                else if (scrollLeft + winWidth - e.pageX < SCROLL_OFFSET &&
                    scrollLeft + winWidth < maxWidth) {
                    tx = Math.min(SCROLL_STEP, maxWidth - winWidth - scrollLeft);
                }
                if (e.pageY - scrollTop < SCROLL_OFFSET &&
                    scrollTop > 0) {
                    ty = -Math.min(SCROLL_STEP, scrollTop);
                }
                else if (scrollTop + winHeight - e.pageY < SCROLL_OFFSET &&
                    scrollTop + winHeight < maxHeight) {
                    ty = Math.min(SCROLL_STEP, maxHeight - winHeight - scrollTop);
                }
                if (tx || ty) {
                    e.pageX += tx;
                    e.pageY += ty;
                    me['@{area.change}'](e);
                    window.scrollBy(tx, ty);
                }
            };
            Runner['@{task.add}'](SCROLL_INTERVAL, me['@{fn.win.scroll}']);
        }
    },
    '@{stop.win.scroll}': function () {
        var me = this;
        if (me['@{fn.win.scroll}']) {
            Runner['@{task.remove}'](me['@{fn.win.scroll}']);
            delete me['@{fn.win.scroll}'];
        }
    }
});

});