/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dragsort/index',["magix","../mx-dragdrop/index","../mx-runner/index","$"],function(require,exports,module){
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
Magix.applyStyle("k",".bT{left:-1000px;top:0;background:#6363e6}.bT,.bU{position:absolute}.bU{width:26px;height:26px}.bV{background:#479b47}.bW{background:#e94f4f}.bU:after{font-size:20px;line-height:26px;color:#fff;position:absolute;left:0;right:0;top:0;bottom:0;text-align:center}.bV:after{content:\"✓\"}.bW:after{content:\"✗\"}");
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
    '_aJ': function () {
        var node = $('#' + BarId);
        if (!node.length) {
            $('<div class="bT" id="' + BarId + '"/>').appendTo('body');
        }
    },
    '_ar': function (info) {
        if (info.child) {
            $(info.child).css({
                opacity: 0.4
            });
            this['_aJ']();
        }
    },
    '_aC': function (info) {
        if (info.child) {
            $(info.child).css({
                opacity: 1
            });
        }
        this['_aK']();
        this['_aL']();
    },
    '_aK': function () {
        $('#' + BarId).css({
            left: -1e5
        });
    },
    '_aM': function (info, v) {
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
    '_aO': function (info) {
        var me = this;
        if (info.atPlace && info.child != info.hover) {
            if (info.anchor == HANDV) {
                if (info['_aN']) {
                    me['_aM'](info, info.side);
                }
            }
            else if (info['_aO']) {
                me['_aM'](info, info.position);
            }
            me['_aP'](true);
        }
        else {
            me['_aK']();
            me['_aP']();
        }
    },
    '_aQ': function (e) {
        var node = $('#' + PointerId);
        if (!node.length) {
            node = $('<div class="bU" id="' + PointerId + '"/>');
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
    '_aP': function (state) {
        var node = $('#' + PointerId);
        if (state) {
            node.removeClass('bW').addClass('bV');
        }
        else {
            node.addClass('bW').removeClass('bV');
        }
    },
    '_aL': function () {
        $('#' + PointerId).hide();
    }
};
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.on('mousedown', extra.selector, function (e) {
            e.preventDefault();
            me['_ar'](e);
        });
        me.on('destroy', function () {
            oNode.off('mousedown');
        });
        me['_h'] = oNode;
        var zones = [oNode.get(0)];
        if (extra.drops) {
            zones = zones.concat(extra.drops.split(','));
        }
        me['_aR'] = zones;
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
        me['_aS'] = anchor;
        var sort = true;
        if (Magix.has(extra, 'sort')) {
            sort = (extra.sort + '') === 'true';
        }
        me['_aT'] = sort;
    },
    '_aU': function (node) {
        var me = this;
        var zones = me['_aR'];
        for (var _i = 0, zones_1 = zones; _i < zones_1.length; _i++) {
            var zone = zones_1[_i];
            if (Magix.inside(node, zone)) {
                return Magix.node(zone);
            }
        }
        return null;
    },
    '_at': function (node, zone) {
        var me = this, result = null;
        if (!zone) {
            zone = me['_aU'](node);
        }
        if (!me['_aT'] && me['_aV']) {
            return {
                child: me['_aV'],
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
    '_aX': function (nb, evt) {
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
        var info = me['_aW'];
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
    '_ar': function (e) {
        if (e.which === 1) {
            var me_1 = this;
            var info = me_1['_at'](e.target);
            if (info.child) {
                me_1['_aV'] = info.child;
                me_1['_aY'] = info.zone;
                me_1['_h'].trigger({
                    type: 'dragbegin',
                    dragNode: info.child,
                    dragZone: info.zone
                });
                UI['_ar'](info);
                DD.begin(info.zone, function (e) {
                    me_1['_aB'](e);
                }, function (e) {
                    me_1['_aC'](e);
                });
            }
        }
    },
    '_ba': function (bound, e, info) {
        var me = this;
        var p = me['_aX'](bound, e);
        var sideChanage = p.side != me['_aZ'], positionChange = p.position != me['_b_'];
        if (sideChanage || positionChange) {
            me['_aZ'] = p.side;
            me['_b_'] = p.position;
            info['_aN'] = sideChanage;
            info['_aO'] = positionChange;
            info.side = p.side;
            info.position = p.position;
            info.atPlace = p.atPlace;
            info.anchor = me['_aS'];
            UI['_aO'](info);
        }
    },
    '_aB': function (e) {
        var current = DD.fromPoint(e.clientX, e.clientY);
        var me = this;
        UI['_aQ'](e);
        me['_aD'] = e;
        me['_as'] = true;
        me['_bb']();
        me['_aE']();
        if (me['_bc'] || me['_bd'] || !current) {
            delete me['_be'];
            delete me['_aZ'];
            delete me['_b_'];
            return;
        }
        if (me['_be'] != current) {
            if (current.id === BarId)
                return; //
            me['_be'] = current;
            delete me['_aZ'];
            var zone = me['_aU'](current);
            if (zone) {
                if (zone != me['_bf']) {
                    me['_bf'] = zone;
                    me['_h'].trigger({
                        type: 'enterzone',
                        zone: zone,
                        changePointer: UI['_aP']
                    });
                }
                var info = me['_at'](current, zone);
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
                me['_bg'] = {
                    x: offset.left,
                    y: offset.top,
                    scrollX: n.prop('scrollLeft'),
                    scrollY: n.prop('scrollTop'),
                    maxWidth: n.prop('scrollWidth'),
                    maxHeight: n.prop('scrollHeight'),
                    width: n.width(),
                    height: n.height()
                };
                me['_ba'](me['_bh'] = bound, e, me['_aW'] = {
                    child: me['_aV'],
                    bound: bound,
                    zone: info.zone,
                    hover: info.child
                });
            }
            else if (me['_bf']) {
                me['_h'].trigger({
                    type: 'leavezone',
                    zone: me['_bf'],
                    changePointer: UI['_aP']
                });
                delete me['_bf'];
            }
        }
        else if (me['_bh'] &&
            Magix.inside(current, me['_aW'].zone)) {
            me['_ba'](me['_bh'], e, me['_aW']);
        }
        else {
            delete me['_aZ'];
            delete me['_b_'];
            if (me['_aT']) {
                UI['_aK']();
                UI['_aP']();
            }
        }
    },
    '_aC': function () {
        var me = this;
        me['_bi']();
        me['_aF']();
        UI['_aC']({
            child: me['_aV']
        });
        var position = me['_b_'], side = me['_aZ'], move = me['_as'], info = me['_aW'], dragNode = me['_aV'];
        if (move) {
            if (position || side) {
                var zone = info.zone;
                var a = me['_aS'];
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
            me['_h'].trigger({
                type: 'dragfinish',
                moved: move,
                dragNode: dragNode,
                dragZone: me['_aY'],
                dropNode: info.hover,
                dropZone: info.zone,
                outZone: !me['_bf']
            });
        }
        delete me['_aV'];
        delete me['_aY'];
        delete me['_be'];
        delete me['_aW'];
        delete me['_bh'];
        delete me['_b_'];
        delete me['_aZ'];
        delete me['_aD'];
        delete me['_bd'];
        delete me['_bf'];
        delete me['_bg'];
        delete me['_bc'];
        delete me['_as'];
    },
    '_bb': function () {
        var me = this;
        if (!me['_bj']) {
            me['_bj'] = function () {
                var zoneBound = me['_bg'];
                if (zoneBound) {
                    var zone = me['_aW'].zone;
                    var tx = 0, ty = 0, e = me['_aD'];
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
                            me['_bc'] = true;
                            me['_bk'] = true;
                            zone.scrollTop += ty;
                            zone.scrollLeft += tx;
                            zoneBound.scrollX += tx;
                            zoneBound.scrollY += ty;
                            delete me['_as'];
                            UI['_aK']();
                            UI['_aP']();
                        }
                        else {
                            delete me['_bc'];
                            delete me['_bk'];
                        }
                    }
                    else {
                        delete me['_bc'];
                        delete me['_bk'];
                    }
                }
            };
            Runner['_aH'](SCROLL_INTERVAL, me['_bj']);
        }
    },
    '_aE': function () {
        var me = this;
        if (!me['_aG']) {
            me['_aG'] = function () {
                if (me['_bk'])
                    return;
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
                    me['_bd'] = true;
                    e.pageX += tx;
                    e.pageY += ty;
                    window.scrollBy(tx, ty);
                    delete me['_as'];
                    UI['_aK']();
                    UI['_aQ'](e);
                    UI['_aP']();
                }
                else {
                    delete me['_bd'];
                }
            };
            Runner['_aH'](SCROLL_INTERVAL, me['_aG']);
        }
    },
    '_bi': function () {
        var me = this;
        if (me['_bj']) {
            Runner['_aI'](me['_bj']);
            delete me['_bj'];
            delete me['_bk'];
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