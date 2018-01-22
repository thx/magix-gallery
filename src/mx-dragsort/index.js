/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragsort/index",["magix","../mx-dragdrop/index","../mx-runner/index","$"],(require,exports,module)=>{
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
Magix.applyStyle("_p","._ct{left:-1000px;top:0;background:#f96447}._ct,._cu{position:absolute}._cu{width:26px;height:26px}._cv{background:#479b47}._cw{background:#e94f4f}._cu:after{font-size:20px;line-height:26px;color:#fff;position:absolute;left:0;right:0;top:0;bottom:0;text-align:center}._cv:after{content:\"✓\"}._cw:after{content:\"✗\"}");
var BarId = Magix.guid('dbar_');
var PointerId = Magix.guid('pt_');
var Win = $(window);
var Doc = $(document);
var LEFT = 1;
var TOP = 2;
var RIGHT = 4;
var BOTTOM = 8;
var SCROLL_OFFSET = 20;
var SCROLL_STEP = 7;
var SCROLL_INTERVAL = 30;
var HORIZONAL = 1;
var VERTICAL = 2;
var HANDV = HORIZONAL | VERTICAL;
var UI = {
    '__bE': function () {
        var node = $('#' + BarId);
        if (!node.length) {
            $('<div class="_ct" id="' + BarId + '"/>').appendTo('body');
        }
    },
    '__bo': function (info) {
        if (info.child) {
            $(info.child).css({
                opacity: 0.4
            });
            this['__bE']();
        }
    },
    '__bz': function (info) {
        if (info && info.child) {
            $(info.child).css({
                opacity: 1
            });
        }
        this['__bF']();
        this['__bG']();
    },
    '__bF': function () {
        $('#' + BarId).css({
            left: -1e5
        });
    },
    '__bH': function (info, v) {
        var node = $('#' + BarId);
        var hasFound = false;
        if (info.anchor & VERTICAL) {
            if (v & TOP) {
                node.css({
                    height: 2,
                    width: info.bound.width,
                    top: info.bound.y - 1,
                    left: info.bound.x
                });
                hasFound = true;
            }
            else if (v & BOTTOM) {
                node.css({
                    height: 2,
                    width: info.bound.width,
                    top: info.bound.y + info.bound.height - 1,
                    left: info.bound.x
                });
                hasFound = true;
            }
        }
        if (!hasFound && info.anchor & HORIZONAL) {
            if (v & LEFT) {
                node.css({
                    height: info.bound.height,
                    width: 2,
                    top: info.bound.y,
                    left: info.bound.x - 1
                });
            }
            else if (v & RIGHT) {
                node.css({
                    height: info.bound.height,
                    width: 2,
                    top: info.bound.y,
                    left: info.bound.x + info.bound.width - 1
                });
            }
        }
    },
    '__bJ': function (info) {
        var me = this;
        if (info.atPlace && info.child != info.hover) {
            if (info.anchor == HANDV) {
                if (info['__bI']) {
                    me['__bH'](info, info.side);
                }
            }
            else if (info['__bJ']) {
                me['__bH'](info, info.position);
            }
            me['__bK'](true);
        }
        else {
            me['__bF']();
            me['__bK']();
        }
    },
    '__bL': function (e) {
        var node = $('#' + PointerId);
        if (!node.length) {
            node = $('<div class="_cu" id="' + PointerId + '"/>');
            node.appendTo('body');
        }
        var x = Math.max(0, Math.min(e.pageX + 10, Doc.width() - node.width()));
        var y = Math.max(0, Math.min(e.pageY + 18, Doc.height() - node.height()));
        node.css({
            left: x,
            top: y,
            display: 'block'
        });
    },
    '__bK': function (state) {
        var node = $('#' + PointerId);
        if (state) {
            node.removeClass('_cw').addClass('_cv');
        }
        else {
            node.addClass('_cw').removeClass('_cv');
        }
    },
    '__bG': function () {
        $('#' + PointerId).hide();
    }
};
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.on('mousedown', extra.selector, function (e) {
            e.preventDefault();
            me['__bo'](e);
        });
        me.on('destroy', function () {
            oNode.off('mousedown');
            DD.end();
        });
        me['__i'] = oNode;
        var zones = [oNode.get(0)];
        if (extra.drops) {
            zones = zones.concat(extra.drops.split(','));
        }
        me['__bM'] = zones;
        var hor = (extra.horizonal + '') === 'true';
        var ver = (extra.vertical + '') === 'true';
        if (!hor && !ver) {
            ver = true;
        }
        var anchor = 0;
        if (hor) {
            anchor |= HORIZONAL;
        }
        if (ver) {
            anchor |= VERTICAL;
        }
        me['__bN'] = anchor;
        var sort = true;
        if (Magix.has(extra, 'sort')) {
            sort = (extra.sort + '') === 'true';
        }
        me['__bO'] = sort;
    },
    '__bP': function (node) {
        var me = this;
        var zones = me['__bM'];
        for (var _i = 0, zones_1 = zones; _i < zones_1.length; _i++) {
            var zone = zones_1[_i];
            if (Magix.inside(node, zone)) {
                return Magix.node(zone);
            }
        }
        return null;
    },
    '__bq': function (node, zone) {
        var me = this, result = null;
        if (!zone) {
            zone = me['__bP'](node);
        }
        if (!me['__bO'] && me['__bQ']) {
            return {
                child: me['__bQ'],
                zone: zone
            };
        }
        while (zone != node) {
            if (node.parentNode == zone) {
                result = node;
                break;
            }
            else {
                node = node.parentNode;
            }
        }
        if (zone && !zone.firstChild && !result) {
            result = zone;
        }
        if (result) {
            if (result.getAttribute('ds-draggable') === 'false') {
                result = null;
            }
        }
        return {
            child: result,
            zone: zone
        };
    },
    '__bS': function (nb, evt) {
        var position = 0, side = 0, toLeft = -1, toTop = -1, toRight = -1, toBottom = -1, hasNearest = false;
        if (evt.pageX >= nb.x &&
            evt.pageX <= nb.x + nb.width &&
            evt.pageY >= nb.y &&
            evt.pageY <= nb.y + nb.height) {
            position = position | ((evt.pageX <= nb.x + nb.width / 2) ? LEFT : RIGHT);
            toLeft = evt.pageX - nb.x;
            toRight = nb.x + nb.width - evt.pageX;
            position = position | ((evt.pageY <= nb.y + nb.height / 2) ? TOP : BOTTOM);
            toTop = evt.pageY - nb.y;
            toBottom = nb.y + nb.height - evt.pageY;
            hasNearest = true;
        }
        if (hasNearest) {
            var temp = Math.min(toLeft, toTop, toRight, toBottom);
            if (temp > -1) {
                if (temp == toLeft) {
                    side = LEFT;
                }
                else if (temp == toTop) {
                    side = TOP;
                }
                else if (temp == toRight) {
                    side = RIGHT;
                }
                else if (temp == toBottom) {
                    side = BOTTOM;
                }
            }
        }
        var me = this;
        var info = me['__bR'];
        if (info) {
            if (info.zone === info.hover) {
                position = TOP;
                side = LEFT;
            }
        }
        return {
            position: position,
            atPlace: hasNearest,
            side: side
        };
    },
    '__bo': function (e) {
        if (e.which === 1) {
            var me_1 = this;
            var info = me_1['__bq'](e.target);
            if (info.child) {
                me_1['__bQ'] = info.child;
                me_1['__bT'] = info.zone;
                me_1['__i'].trigger({
                    type: 'dragbegin',
                    dragNode: info.child,
                    dragZone: info.zone
                });
                UI['__bo'](info);
                DD.begin(info.zone, function (e) {
                    me_1['__by'](e);
                }, function (e) {
                    me_1['__bz'](e);
                });
            }
        }
    },
    '__bW': function (bound, e, info) {
        var me = this;
        var p = me['__bS'](bound, e);
        var sideChanage = p.side != me['__bU'], positionChange = p.position != me['__bV'];
        if (sideChanage || positionChange) {
            me['__bU'] = p.side;
            me['__bV'] = p.position;
            info['__bI'] = sideChanage;
            info['__bJ'] = positionChange;
            info.side = p.side;
            info.position = p.position;
            info.atPlace = p.atPlace;
            info.anchor = me['__bN'];
            UI['__bJ'](info);
        }
    },
    '__by': function (e) {
        var current = DD.fromPoint(e.clientX, e.clientY);
        var me = this;
        UI['__bL'](e);
        me['__bA'] = e;
        me['__bp'] = true;
        me['__bX']();
        me['__bB']();
        if (me['__bY'] || me['__bZ'] || !current) {
            delete me['__c_'];
            delete me['__bU'];
            delete me['__bV'];
            return;
        }
        if (me['__c_'] != current) {
            if (current.id === BarId)
                return; //
            me['__c_'] = current;
            delete me['__bU'];
            var zone = me['__bP'](current);
            if (zone) {
                if (zone != me['__ca']) {
                    me['__ca'] = zone;
                    me['__i'].trigger({
                        type: 'enterzone',
                        zone: zone,
                        changePointer: UI['__bK']
                    });
                }
                var info = me['__bq'](current, zone);
                if (!info.child)
                    return;
                var n = $(info.child);
                var offset = n.offset();
                var bound = {
                    x: offset.left,
                    y: offset.top,
                    width: n.outerWidth(),
                    height: n.outerHeight()
                };
                n = $(info.zone);
                offset = n.offset();
                me['__cb'] = {
                    x: offset.left,
                    y: offset.top,
                    scrollX: n.prop('scrollLeft'),
                    scrollY: n.prop('scrollTop'),
                    maxWidth: n.prop('scrollWidth'),
                    maxHeight: n.prop('scrollHeight'),
                    width: n.width(),
                    height: n.height()
                };
                me['__bW'](me['__cc'] = bound, e, me['__bR'] = {
                    child: me['__bQ'],
                    bound: bound,
                    zone: info.zone,
                    hover: info.child
                });
            }
            else if (me['__ca']) {
                me['__i'].trigger({
                    type: 'leavezone',
                    zone: me['__ca'],
                    changePointer: UI['__bK']
                });
                delete me['__ca'];
            }
        }
        else if (me['__cc'] &&
            Magix.inside(current, me['__bR'].zone)) {
            me['__bW'](me['__cc'], e, me['__bR']);
        }
        else {
            delete me['__bU'];
            delete me['__bV'];
            if (me['__bO']) {
                UI['__bF']();
                UI['__bK']();
            }
        }
    },
    '__bz': function () {
        var me = this;
        me['__cd']();
        me['__bC']();
        UI['__bz']({
            child: me['__bQ']
        });
        var position = me['__bV'], side = me['__bU'], move = me['__bp'], info = me['__bR'], dragNode = me['__bQ'];
        if (move) {
            if (position || side) {
                var zone = info.zone;
                var a = me['__bN'];
                var v = a === HANDV ? side : position;
                if (((a & HORIZONAL) && (LEFT & v)) || ((TOP & v) && (a & VERTICAL))) {
                    if (info.hover == zone) {
                        zone.appendChild(dragNode);
                    }
                    else {
                        zone.insertBefore(dragNode, info.hover);
                    }
                }
                else if (((BOTTOM & v) && (a & VERTICAL)) ||
                    ((RIGHT & v) && (a & HORIZONAL))) {
                    var next = info.hover.nextSibling;
                    while (next && next.nodeType != 1) {
                        next = next.nextSibling;
                    }
                    zone.insertBefore(dragNode, next);
                    if (!next) {
                        zone.scrollTop = zone.scrollHeight;
                    }
                }
            }
        }
        if (info) {
            me['__i'].trigger({
                type: 'dragfinish',
                moved: move,
                dragNode: dragNode,
                dragZone: me['__bT'],
                dropNode: info.hover,
                dropZone: info.zone,
                outZone: !me['__ca']
            });
        }
        delete me['__bQ'];
        delete me['__bT'];
        delete me['__c_'];
        delete me['__bR'];
        delete me['__cc'];
        delete me['__bV'];
        delete me['__bU'];
        delete me['__bA'];
        delete me['__bZ'];
        delete me['__ca'];
        delete me['__cb'];
        delete me['__bY'];
        delete me['__bp'];
    },
    '__bX': function () {
        var me = this;
        if (!me['__ce']) {
            me['__ce'] = function () {
                var zoneBound = me['__cb'];
                if (zoneBound) {
                    var zone = me['__bR'].zone;
                    var tx = 0, ty = 0, e = me['__bA'];
                    if (e.pageX > zoneBound.x &&
                        e.pageY > zoneBound.y &&
                        e.pageX < zoneBound.x + zoneBound.width &&
                        e.pageY < zoneBound.y + zoneBound.height) {
                        if (e.pageX - zoneBound.x < SCROLL_OFFSET && zoneBound.scrollX > 0) {
                            tx = -Math.min(SCROLL_STEP, zoneBound.scrollX);
                        }
                        else if (zoneBound.x + zoneBound.width - e.pageX < SCROLL_OFFSET &&
                            zoneBound.scrollX + zoneBound.width < zoneBound.maxWidth) {
                            tx = Math.min(SCROLL_STEP, zoneBound.maxWidth - zoneBound.scrollX - zoneBound.width);
                        }
                        if (e.pageY - zoneBound.y < SCROLL_OFFSET && zoneBound.scrollY > 0) {
                            ty = -Math.min(SCROLL_STEP, zoneBound.scrollY);
                        }
                        else if (zoneBound.y + zoneBound.height - e.pageY < SCROLL_OFFSET &&
                            zoneBound.scrollY + zoneBound.height < zoneBound.maxHeight) {
                            ty = Math.min(SCROLL_STEP, zoneBound.maxHeight - zoneBound.scrollY - zoneBound.height);
                        }
                        if (tx || ty) {
                            me['__bY'] = true;
                            me['__cf'] = true;
                            zone.scrollTop += ty;
                            zone.scrollLeft += tx;
                            zoneBound.scrollX += tx;
                            zoneBound.scrollY += ty;
                            delete me['__bp'];
                            UI['__bF']();
                            UI['__bK']();
                        }
                        else {
                            delete me['__bY'];
                            delete me['__cf'];
                        }
                    }
                    else {
                        delete me['__bY'];
                        delete me['__cf'];
                    }
                }
            };
            Runner['__ag'](SCROLL_INTERVAL, me['__ce']);
        }
    },
    '__bB': function () {
        var me = this;
        if (!me['__bD']) {
            me['__bD'] = function () {
                if (me['__cf'])
                    return;
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
                    me['__bZ'] = true;
                    e.pageX += tx;
                    e.pageY += ty;
                    window.scrollBy(tx, ty);
                    delete me['__bp'];
                    UI['__bF']();
                    UI['__bL'](e);
                    UI['__bK']();
                }
                else {
                    delete me['__bZ'];
                }
            };
            Runner['__ag'](SCROLL_INTERVAL, me['__bD']);
        }
    },
    '__cd': function () {
        var me = this;
        if (me['__ce']) {
            Runner['__ai'](me['__ce']);
            delete me['__ce'];
            delete me['__cf'];
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