/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dragselect/index',["magix","../mx-dragdrop/index","../mx-runner/index","$"],function(require,exports,module){
/*Magix,DD,Runner,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var DD = require('../mx-dragdrop/index');
var Runner = require('../mx-runner/index');
var $ = require('$');
Magix.applyStyle("j",".bS{left:-1000px;top:0;background:#6363e6;position:absolute;opacity:.3;border:1px solid #2b2bb9}");
var AreaId = Magix.guid('area_');
var Win = $(window);
var Doc = $(document);
var SCROLL_OFFSET = 20;
var SCROLL_STEP = 7;
var SCROLL_INTERVAL = 30;
var UI = {
    '_ao': function () {
        var node = $('#' + AreaId);
        if (!node.length) {
            node = $('<div id="' + AreaId + '" class="bS" />').appendTo('body');
        }
    },
    '_ap': function (x, y, width, height) {
        var node = $('#' + AreaId);
        node.css({
            left: x,
            top: y,
            width: width,
            height: height
        });
    },
    '_aq': function () {
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
            me['_ar'](e);
        });
        oNode.on('click', function (e) {
            if (!me['_as']) {
                var node = me['_at'](e.target);
                if (node) {
                    oNode.trigger({
                        type: 'change',
                        action: 'add',
                        mode: 'click',
                        node: node
                    });
                }
            }
            delete me['_as'];
        });
        me.on('destroy', function () {
            oNode.off('mousedown click');
        });
        me['_au'] = extra.selector;
        me['_h'] = oNode;
    },
    '_at': function (node) {
        var me = this, result = null, zone = me['_h'][0];
        while (zone != node) {
            if (node.parentNode == zone) {
                result = node;
                break;
            }
            else {
                node = node.parentNode;
            }
        }
        if (result && me['_au']) {
            if (!$.find.matchesSelector(result, me['_au'])) {
                result = null;
            }
        }
        return result;
    },
    '_av': function () {
        var me = this;
        var children = me['_au'] ? me['_h'].find(me['_au']) : me['_h'].children();
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
    '_aA': function (e) {
        var me = this;
        var newPos = {
            x: e.pageX,
            y: e.pageY
        };
        var range = me['_aw'];
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
        var oldPos = me['_ax'];
        var x = Math.min(newPos.x, oldPos.x);
        var y = Math.min(newPos.y, oldPos.y);
        var width = Math.abs(newPos.x - oldPos.x);
        var height = Math.abs(newPos.y - oldPos.y);
        UI['_ap'](x, y, width, height);
        var rects = me['_ay'];
        var area = {
            x: x, y: y, width: width, height: height
        };
        var map = me['_az'];
        for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
            var rect = rects_1[_i];
            if (rectIntersect(area, rect)) {
                if (map[rect.id] !== 1) {
                    map[rect.id] = 1;
                    me['_h'].trigger({
                        type: 'change',
                        action: 'add',
                        mode: 'drag',
                        node: rect.c
                    });
                }
            }
            else if (map[rect.id] === 1) {
                delete map[rect.id];
                me['_h'].trigger({
                    type: 'change',
                    action: 'remove',
                    mode: 'drag',
                    node: rect.c
                });
            }
        }
    },
    '_ar': function (e) {
        if (e.which === 1) {
            var me_1 = this;
            me_1['_ax'] = {
                x: e.pageX,
                y: e.pageY
            };
            var node = me_1['_h'];
            var offset = node.offset();
            me_1['_aw'] = {
                x: offset.left,
                y: offset.top,
                width: node.width(),
                height: node.height()
            };
            me_1['_az'] = {};
            UI['_ao']();
            node.trigger('dragbegin');
            DD.begin(e.target, function (e) {
                me_1['_aB'](e);
            }, function (e) {
                me_1['_aC'](e);
            });
        }
    },
    '_aB': function (e) {
        var me = this;
        if (!me['_as']) {
            var last = me['_ax'];
            if (Math.abs(e.pageX - last.x) > 5 || Math.abs(e.pageY - last.y) > 5) {
                me['_as'] = true;
            }
        }
        if (me['_as']) {
            if (!me['_ay']) {
                me['_ay'] = me['_av']();
            }
            me['_aD'] = e;
            me['_aE']();
            me['_aA'](e);
        }
    },
    '_aC': function () {
        var me = this;
        me['_aF']();
        UI['_aq']();
        delete me['_aD'];
        delete me['_ax'];
        delete me['_aw'];
        delete me['_ay'];
        delete me['_az'];
        //delete me['@{has.moved}'];
        me['_h'].trigger('dragfinish');
    },
    '_aE': function () {
        var me = this;
        if (!me['_aG']) {
            me['_aG'] = function () {
                var tx = 0, ty = 0, e = me['_aD'];
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
                    me['_aA'](e);
                    window.scrollBy(tx, ty);
                }
            };
            Runner['_aH'](SCROLL_INTERVAL, me['_aG']);
        }
    },
    '_aF': function () {
        var me = this;
        if (me['_aG']) {
            Runner['_aI'](me['_aG']);
            delete me['_aG'];
        }
    }
});

});