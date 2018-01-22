/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragselect/index",["magix","../mx-dragdrop/index","../mx-runner/index","$"],(require,exports,module)=>{
/*Magix,DD,Runner,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var DD = require("../mx-dragdrop/index");
var Runner = require("../mx-runner/index");
var $ = require("$");
Magix.applyStyle("_o","._cs{left:-1000px;top:0;background:#5665eb;position:absolute;opacity:.3;border:1px solid #4d4fa8}");
var AreaId = Magix.guid('area_');
var Win = $(window);
var Doc = $(document);
var SCROLL_OFFSET = 20;
var SCROLL_STEP = 7;
var SCROLL_INTERVAL = 30;
var UI = {
    '__aq': function () {
        var node = $('#' + AreaId);
        if (!node.length) {
            node = $('<div id="' + AreaId + '" class="_cs" />').appendTo('body');
        }
    },
    '__bn': function (x, y, width, height) {
        var node = $('#' + AreaId);
        node.css({
            left: x,
            top: y,
            width: width,
            height: height
        });
    },
    '__be': function () {
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
    init: function (extra) {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.on('mousedown', function (e) {
            e.preventDefault();
            me['__bo'](e);
        });
        oNode.on('click', function (e) {
            if (!me['__bp']) {
                var node = me['__bq'](e.target);
                if (node) {
                    oNode.trigger({
                        type: 'change',
                        action: 'add',
                        mode: 'click',
                        node: node
                    });
                }
            }
            delete me['__bp'];
        });
        me.on('destroy', function () {
            oNode.off('mousedown click');
            DD.end();
        });
        me['__br'] = extra.selector;
        me['__i'] = oNode;
    },
    '__bq': function (node) {
        var me = this, result = null, zone = me['__i'][0];
        while (zone != node) {
            if (node.parentNode == zone) {
                result = node;
                break;
            }
            else {
                node = node.parentNode;
            }
        }
        if (result && me['__br']) {
            if (!$.find.matchesSelector(result, me['__br'])) {
                result = null;
            }
        }
        return result;
    },
    '__bs': function () {
        var me = this;
        var children = me['__br'] ? me['__i'].find(me['__br']) : me['__i'].children();
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
    '__bx': function (e) {
        var me = this;
        var newPos = {
            x: e.pageX,
            y: e.pageY
        };
        var range = me['__bt'];
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
        var oldPos = me['__bu'];
        var x = Math.min(newPos.x, oldPos.x);
        var y = Math.min(newPos.y, oldPos.y);
        var width = Math.abs(newPos.x - oldPos.x);
        var height = Math.abs(newPos.y - oldPos.y);
        UI['__bn'](x, y, width, height);
        var rects = me['__bv'];
        var area = {
            x: x, y: y, width: width, height: height
        };
        var map = me['__bw'];
        for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
            var rect = rects_1[_i];
            if (rectIntersect(area, rect)) {
                if (map[rect.id] !== 1) {
                    map[rect.id] = 1;
                    me['__i'].trigger({
                        type: 'change',
                        action: 'add',
                        mode: 'drag',
                        node: rect.c
                    });
                }
            }
            else if (map[rect.id] === 1) {
                delete map[rect.id];
                me['__i'].trigger({
                    type: 'change',
                    action: 'remove',
                    mode: 'drag',
                    node: rect.c
                });
            }
        }
    },
    '__bo': function (e) {
        if (e.which === 1) {
            var me_1 = this;
            me_1['__bu'] = {
                x: e.pageX,
                y: e.pageY
            };
            var node = me_1['__i'];
            var offset = node.offset();
            me_1['__bt'] = {
                x: offset.left,
                y: offset.top,
                width: node.width(),
                height: node.height()
            };
            me_1['__bw'] = {};
            UI['__aq']();
            node.trigger('dragbegin');
            DD.begin(e.target, function (e) {
                me_1['__by'](e);
            }, function (e) {
                me_1['__bz'](e);
            });
        }
    },
    '__by': function (e) {
        var me = this;
        if (!me['__bp']) {
            var last = me['__bu'];
            if (Math.abs(e.pageX - last.x) > 5 || Math.abs(e.pageY - last.y) > 5) {
                me['__bp'] = true;
            }
        }
        if (me['__bp']) {
            if (!me['__bv']) {
                me['__bv'] = me['__bs']();
            }
            me['__bA'] = e;
            me['__bB']();
            me['__bx'](e);
        }
    },
    '__bz': function () {
        var me = this;
        me['__bC']();
        UI['__be']();
        delete me['__bA'];
        delete me['__bu'];
        delete me['__bt'];
        delete me['__bv'];
        delete me['__bw'];
        //delete me['@{has.moved}'];
        me['__i'].trigger('dragfinish');
    },
    '__bB': function () {
        var me = this;
        if (!me['__bD']) {
            me['__bD'] = function () {
                var tx = 0, ty = 0, e = me['__bA'];
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
                    me['__bx'](e);
                    window.scrollBy(tx, ty);
                }
            };
            Runner['__ag'](SCROLL_INTERVAL, me['__bD']);
        }
    },
    '__bC': function () {
        var me = this;
        if (me['__bD']) {
            Runner['__ai'](me['__bD']);
            delete me['__bD'];
        }
    }
});

});