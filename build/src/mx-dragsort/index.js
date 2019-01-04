/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragsort/index",["magix","../mx-dragdrop/index","../mx-runner/index","$"],(require,exports,module)=>{
/*Magix,DD,Runner,$*/

var Magix = require("magix");
var DD = require("../mx-dragdrop/index");
var Runner = require("../mx-runner/index");
var $ = require("$");
Magix.applyStyle("_zs_galleryD","._zs_gallerydL{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydM{left:-1000px;top:0;background:#4d7fff}._zs_gallerydM,._zs_gallerydN{position:absolute;z-index:10000}._zs_gallerydN{width:20px;height:20px;border-radius:4px}._zs_gallerydN:after{position:absolute;left:0;right:0;top:0;bottom:0;font-size:12px;line-height:20px;text-align:center;color:#4d7fff}._zs_gallerydO{background:#f6f9ff;border:1px solid #4d7fff}._zs_gallerydO:after{content:\"✓\"}");
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
    '__aB': function () {
        var node = $('#' + BarId);
        if (!node.length) {
            $('<div class="_zs_gallerydM" id="' + BarId + '"/>').appendTo('body');
        }
    },
    '__aC': function (info) {
        if (info.child) {
            $(info.child).css({
                opacity: 0.4
            });
            this['__aB']();
        }
    },
    '__aF': function (info) {
        if (info && info.child) {
            $(info.child).css({
                opacity: 1
            });
        }
        this['__aD']();
        this['__aE']();
    },
    '__aD': function () {
        $('#' + BarId).css({
            left: -1e5
        });
    },
    '__aG': function (info, v) {
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
    '__aI': function (info) {
        var me = this;
        if (info.atPlace && info.child != info.hover) {
            if (info.anchor == HANDV) {
                if (info['__aH']) {
                    me['__aG'](info, info.side);
                }
            }
            else if (info['__aI']) {
                me['__aG'](info, info.position);
            }
            me['__aJ'](true);
        }
        else {
            me['__aD']();
            me['__aJ']();
        }
    },
    '__aK': function (e) {
        var node = $('#' + PointerId);
        if (!node.length) {
            node = $('<div class="_zs_gallerydN" id="' + PointerId + '"/>');
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
    '__aJ': function (state) {
        var node = $('#' + PointerId);
        if (state) {
            node.addClass('_zs_gallerydO');
        }
        else {
            node.removeClass('_zs_gallerydO');
        }
    },
    '__aE': function () {
        $('#' + PointerId).hide();
    }
};
module.exports = Magix.View.extend({
    mixins: [DD],
    init: function (extra) {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.on('mousedown', extra.selector, function (e) {
            e.preventDefault();
            me['__aC'](e);
        });
        me.on('destroy', function () {
            oNode.off('mousedown');
        });
        me['__j'] = oNode;
        var zones = [oNode.get(0)];
        if (extra.drops) {
            zones = zones.concat(extra.drops.split(','));
        }
        me['__aL'] = zones;
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
        me['__aM'] = anchor;
        var sort = true;
        if (Magix.has(extra, 'sort')) {
            sort = (extra.sort + '') === 'true';
        }
        me['__aN'] = sort;
    },
    '__aO': function (node) {
        var me = this;
        var zones = me['__aL'];
        for (var _i = 0, zones_1 = zones; _i < zones_1.length; _i++) {
            var zone = zones_1[_i];
            if (Magix.inside(node, zone)) {
                return Magix.node(zone);
            }
        }
        return null;
    },
    '__aQ': function (node, zone) {
        var me = this, result = null;
        if (!zone) {
            zone = me['__aO'](node);
        }
        if (!me['__aN'] && me['__aP']) {
            return {
                child: me['__aP'],
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
    '__aS': function (nb, evt) {
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
        var info = me['__aR'];
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
    '__aC': function (e) {
        if (e.which === 1) {
            var me_1 = this;
            var info = me_1['__aQ'](e.target);
            if (info.child) {
                me_1['__aP'] = info.child;
                me_1['__aT'] = info.zone;
                me_1['__j'].trigger({
                    type: 'dragbegin',
                    dragNode: info.child,
                    dragZone: info.zone
                });
                UI['__aC'](info);
                me_1.dragdrop(info.zone, function (e) {
                    me_1['__aU'](e);
                }, function (e) {
                    me_1['__aF'](e);
                });
            }
        }
    },
    '__aX': function (bound, e, info) {
        var me = this;
        var p = me['__aS'](bound, e);
        var sideChanage = p.side != me['__aV'], positionChange = p.position != me['__aW'];
        if (sideChanage || positionChange) {
            me['__aV'] = p.side;
            me['__aW'] = p.position;
            info['__aH'] = sideChanage;
            info['__aI'] = positionChange;
            info.side = p.side;
            info.position = p.position;
            info.atPlace = p.atPlace;
            info.anchor = me['__aM'];
            UI['__aI'](info);
        }
    },
    '__aU': function (e) {
        var current = DD.fromPoint(e.clientX, e.clientY);
        var me = this;
        UI['__aK'](e);
        me['__aY'] = e;
        me['__aZ'] = true;
        me['__b_']();
        me['__ba']();
        if (me['__bb'] || me['__bc'] || !current) {
            delete me['__bd'];
            delete me['__aV'];
            delete me['__aW'];
            return;
        }
        if (me['__bd'] != current) {
            if (current.id === BarId)
                return; //
            me['__bd'] = current;
            delete me['__aV'];
            var zone = me['__aO'](current);
            if (zone) {
                if (zone != me['__be']) {
                    me['__be'] = zone;
                    me['__j'].trigger({
                        type: 'enterzone',
                        zone: zone,
                        changePointer: UI['__aJ']
                    });
                }
                var info = me['__aQ'](current, zone);
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
                me['__bf'] = {
                    x: offset.left,
                    y: offset.top,
                    scrollX: n.prop('scrollLeft'),
                    scrollY: n.prop('scrollTop'),
                    maxWidth: n.prop('scrollWidth'),
                    maxHeight: n.prop('scrollHeight'),
                    width: n.width(),
                    height: n.height()
                };
                me['__aX'](me['__bg'] = bound, e, me['__aR'] = {
                    child: me['__aP'],
                    bound: bound,
                    zone: info.zone,
                    hover: info.child
                });
            }
            else if (me['__be']) {
                me['__j'].trigger({
                    type: 'leavezone',
                    zone: me['__be'],
                    changePointer: UI['__aJ']
                });
                delete me['__be'];
            }
        }
        else if (me['__bg'] &&
            Magix.inside(current, me['__aR'].zone)) {
            me['__aX'](me['__bg'], e, me['__aR']);
        }
        else {
            delete me['__aV'];
            delete me['__aW'];
            if (me['__aN']) {
                UI['__aD']();
                UI['__aJ']();
            }
        }
    },
    '__aF': function () {
        var me = this;
        me['__bh']();
        me['__bi']();
        UI['__aF']({
            child: me['__aP']
        });
        var position = me['__aW'], side = me['__aV'], move = me['__aZ'], info = me['__aR'], dragNode = me['__aP'];
        if (move) {
            if (position || side) {
                var zone = info.zone;
                var a = me['__aM'];
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
            me['__j'].trigger({
                type: 'dragfinish',
                moved: move,
                dragNode: dragNode,
                dragZone: me['__aT'],
                dropNode: info.hover,
                dropZone: info.zone,
                outZone: !me['__be']
            });
        }
        delete me['__aP'];
        delete me['__aT'];
        delete me['__bd'];
        delete me['__aR'];
        delete me['__bg'];
        delete me['__aW'];
        delete me['__aV'];
        delete me['__aY'];
        delete me['__bc'];
        delete me['__be'];
        delete me['__bf'];
        delete me['__bb'];
        delete me['__aZ'];
    },
    '__b_': function () {
        var me = this;
        if (!me['__bj']) {
            me['__bj'] = function () {
                var zoneBound = me['__bf'];
                if (zoneBound) {
                    var zone = me['__aR'].zone;
                    var tx = 0, ty = 0, e = me['__aY'];
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
                            me['__bb'] = true;
                            me['__bk'] = true;
                            zone.scrollTop += ty;
                            zone.scrollLeft += tx;
                            zoneBound.scrollX += tx;
                            zoneBound.scrollY += ty;
                            delete me['__aZ'];
                            UI['__aD']();
                            UI['__aJ']();
                        }
                        else {
                            delete me['__bb'];
                            delete me['__bk'];
                        }
                    }
                    else {
                        delete me['__bb'];
                        delete me['__bk'];
                    }
                }
            };
            Runner['__bl'](SCROLL_INTERVAL, me['__bj']);
        }
    },
    '__ba': function () {
        var me = this;
        if (!me['__bm']) {
            me['__bm'] = function () {
                if (me['__bk'])
                    return;
                var tx = 0, ty = 0, e = me['__aY'];
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
                    me['__bc'] = true;
                    e.pageX += tx;
                    e.pageY += ty;
                    window.scrollBy(tx, ty);
                    delete me['__aZ'];
                    UI['__aD']();
                    UI['__aK'](e);
                    UI['__aJ']();
                }
                else {
                    delete me['__bc'];
                }
            };
            Runner['__bl'](SCROLL_INTERVAL, me['__bm']);
        }
    },
    '__bh': function () {
        var me = this;
        if (me['__bj']) {
            Runner['__bn'](me['__bj']);
            delete me['__bj'];
            delete me['__bk'];
        }
    },
    '__bi': function () {
        var me = this;
        if (me['__bm']) {
            Runner['__bn'](me['__bm']);
            delete me['__bm'];
        }
    }
});

});