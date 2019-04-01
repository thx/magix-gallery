/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragsort/index",["magix","../mx-dragdrop/index","../mx-util/runner","$"],(require,exports,module)=>{
/*Magix,DD,Runner,$*/

var Magix = require("magix");
var DD = require("../mx-dragdrop/index");
var Runner = require("../mx-util/runner");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-dragsort_index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-dragsort_index_-bar {\n  position: absolute;\n  left: -1000px;\n  top: 0;\n  z-index: 10000;\n  background: #4d7fff;\n}\n._zs_gallery_mx-dragsort_index_-pointer {\n  position: absolute;\n  z-index: 10000;\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n}\n._zs_gallery_mx-dragsort_index_-pointer:after {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n  color: #4d7fff;\n}\n._zs_gallery_mx-dragsort_index_-ok {\n  background: #f6f9ff;\n  border: 1px solid #4d7fff;\n}\n._zs_gallery_mx-dragsort_index_-ok:after {\n  content: '✓';\n}\n");
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
    '@{bar.create}': function () {
        var node = $('#' + BarId);
        if (!node.length) {
            $('<div class="_zs_gallery_mx-dragsort_index_-bar" id="' + BarId + '"/>').appendTo('body');
        }
    },
    '@{drag.start}': function (info) {
        if (info.child) {
            $(info.child).css({
                opacity: 0.4
            });
            this['@{bar.create}']();
        }
    },
    '@{drag.end}': function (info) {
        if (info && info.child) {
            $(info.child).css({
                opacity: 1
            });
        }
        this['@{bar.hide}']();
        this['@{pointer.hide}']();
    },
    '@{bar.hide}': function () {
        $('#' + BarId).css({
            left: -1e5
        });
    },
    '@{bar.move}': function (info, v) {
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
    '@{pos.changed}': function (info) {
        var me = this;
        if (info.atPlace && info.child != info.hover) {
            if (info.anchor == HANDV) {
                if (info['@{side.changed}']) {
                    me['@{bar.move}'](info, info.side);
                }
            }
            else if (info['@{pos.changed}']) {
                me['@{bar.move}'](info, info.position);
            }
            me['@{pointer.change}'](true);
        }
        else {
            me['@{bar.hide}']();
            me['@{pointer.change}']();
        }
    },
    '@{pointer.update}': function (e) {
        var node = $('#' + PointerId);
        if (!node.length) {
            node = $('<div class="_zs_gallery_mx-dragsort_index_-pointer" id="' + PointerId + '"/>');
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
    '@{pointer.change}': function (state) {
        var node = $('#' + PointerId);
        if (state) {
            node.addClass('_zs_gallery_mx-dragsort_index_-ok');
        }
        else {
            node.removeClass('_zs_gallery_mx-dragsort_index_-ok');
        }
    },
    '@{pointer.hide}': function () {
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
            me['@{drag.start}'](e);
        });
        me.on('destroy', function () {
            oNode.off('mousedown');
        });
        me['@{owner.node}'] = oNode;
        var zones = [oNode.get(0)];
        if (extra.drops) {
            zones = zones.concat(extra.drops.split(','));
        }
        me['@{zone.ids}'] = zones;
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
        me['@{anchor.direction}'] = anchor;
        var sort = true;
        if (Magix.has(extra, 'sort')) {
            sort = (extra.sort + '') === 'true';
        }
        me['@{sort.ctrl}'] = sort;
    },
    '@{findZone}': function (node) {
        var me = this;
        var zones = me['@{zone.ids}'];
        for (var _i = 0, zones_1 = zones; _i < zones_1.length; _i++) {
            var zone = zones_1[_i];
            if (Magix.inside(node, zone)) {
                return Magix.node(zone);
            }
        }
        return null;
    },
    '@{findDirectChild}': function (node, zone) {
        var me = this, result = null;
        if (!zone) {
            zone = me['@{findZone}'](node);
        }
        if (!me['@{sort.ctrl}'] && me['@{drag.start.node}']) {
            return {
                child: me['@{drag.start.node}'],
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
    '@{findPosition}': function (nb, evt) {
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
        var info = me['@{hover.info}'];
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
    '@{drag.start}': function (e) {
        if (e.which === 1) {
            var me_1 = this;
            var info = me_1['@{findDirectChild}'](e.target);
            if (info.child) {
                me_1['@{drag.start.node}'] = info.child;
                me_1['@{drag.start.zone}'] = info.zone;
                me_1['@{owner.node}'].trigger({
                    type: 'dragbegin',
                    dragNode: info.child,
                    dragZone: info.zone
                });
                UI['@{drag.start}'](info);
                me_1.dragdrop(info.zone, function (e) {
                    me_1['@{drag.move}'](e);
                }, function (e) {
                    me_1['@{drag.end}'](e);
                });
            }
        }
    },
    '@{checkPosition}': function (bound, e, info) {
        var me = this;
        var p = me['@{findPosition}'](bound, e);
        var sideChanage = p.side != me['@{last.side}'], positionChange = p.position != me['@{last.position}'];
        if (sideChanage || positionChange) {
            me['@{last.side}'] = p.side;
            me['@{last.position}'] = p.position;
            info['@{side.changed}'] = sideChanage;
            info['@{pos.changed}'] = positionChange;
            info.side = p.side;
            info.position = p.position;
            info.atPlace = p.atPlace;
            info.anchor = me['@{anchor.direction}'];
            UI['@{pos.changed}'](info);
        }
    },
    '@{drag.move}': function (e) {
        var current = DD.fromPoint(e.clientX, e.clientY);
        var me = this;
        UI['@{pointer.update}'](e);
        me['@{move.event}'] = e;
        me['@{has.moved}'] = true;
        me['@{start.zone.scroll}']();
        me['@{start.win.scroll}']();
        if (me['@{zone.start.scrolling}'] || me['@{win.start.scrolling}'] || !current) {
            delete me['@{last.hover.node}'];
            delete me['@{last.side}'];
            delete me['@{last.position}'];
            return;
        }
        if (me['@{last.hover.node}'] != current) {
            if (current.id === BarId)
                return; //
            me['@{last.hover.node}'] = current;
            delete me['@{last.side}'];
            var zone = me['@{findZone}'](current);
            if (zone) {
                if (zone != me['@{last.zone}']) {
                    me['@{last.zone}'] = zone;
                    me['@{owner.node}'].trigger({
                        type: 'enterzone',
                        zone: zone,
                        changePointer: UI['@{pointer.change}']
                    });
                }
                var info = me['@{findDirectChild}'](current, zone);
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
                me['@{last.zone.bound}'] = {
                    x: offset.left,
                    y: offset.top,
                    scrollX: n.prop('scrollLeft'),
                    scrollY: n.prop('scrollTop'),
                    maxWidth: n.prop('scrollWidth'),
                    maxHeight: n.prop('scrollHeight'),
                    width: n.width(),
                    height: n.height()
                };
                me['@{checkPosition}'](me['@{last.hover.node.bound}'] = bound, e, me['@{hover.info}'] = {
                    child: me['@{drag.start.node}'],
                    bound: bound,
                    zone: info.zone,
                    hover: info.child
                });
            }
            else if (me['@{last.zone}']) {
                me['@{owner.node}'].trigger({
                    type: 'leavezone',
                    zone: me['@{last.zone}'],
                    changePointer: UI['@{pointer.change}']
                });
                delete me['@{last.zone}'];
            }
        }
        else if (me['@{last.hover.node.bound}'] &&
            Magix.inside(current, me['@{hover.info}'].zone)) {
            me['@{checkPosition}'](me['@{last.hover.node.bound}'], e, me['@{hover.info}']);
        }
        else {
            delete me['@{last.side}'];
            delete me['@{last.position}'];
            if (me['@{sort.ctrl}']) {
                UI['@{bar.hide}']();
                UI['@{pointer.change}']();
            }
        }
    },
    '@{drag.end}': function () {
        var me = this;
        me['@{stop.zone.scroll}']();
        me['@{stop.win.scroll}']();
        UI['@{drag.end}']({
            child: me['@{drag.start.node}']
        });
        var position = me['@{last.position}'], side = me['@{last.side}'], move = me['@{has.moved}'], info = me['@{hover.info}'], dragNode = me['@{drag.start.node}'];
        if (move) {
            if (position || side) {
                var zone = info.zone;
                var a = me['@{anchor.direction}'];
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
            me['@{owner.node}'].trigger({
                type: 'dragfinish',
                moved: move,
                dragNode: dragNode,
                dragZone: me['@{drag.start.zone}'],
                dropNode: info.hover,
                dropZone: info.zone,
                outZone: !me['@{last.zone}']
            });
        }
        delete me['@{drag.start.node}'];
        delete me['@{drag.start.zone}'];
        delete me['@{last.hover.node}'];
        delete me['@{hover.info}'];
        delete me['@{last.hover.node.bound}'];
        delete me['@{last.position}'];
        delete me['@{last.side}'];
        delete me['@{move.event}'];
        delete me['@{win.start.scrolling}'];
        delete me['@{last.zone}'];
        delete me['@{last.zone.bound}'];
        delete me['@{zone.start.scrolling}'];
        delete me['@{has.moved}'];
    },
    '@{start.zone.scroll}': function () {
        var me = this;
        if (!me['@{fn.zone.scroll}']) {
            me['@{fn.zone.scroll}'] = function () {
                var zoneBound = me['@{last.zone.bound}'];
                if (zoneBound) {
                    var zone = me['@{hover.info}'].zone;
                    var tx = 0, ty = 0, e = me['@{move.event}'];
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
                            me['@{zone.start.scrolling}'] = true;
                            me['@{prevent.win.scroll}'] = true;
                            zone.scrollTop += ty;
                            zone.scrollLeft += tx;
                            zoneBound.scrollX += tx;
                            zoneBound.scrollY += ty;
                            delete me['@{has.moved}'];
                            UI['@{bar.hide}']();
                            UI['@{pointer.change}']();
                        }
                        else {
                            delete me['@{zone.start.scrolling}'];
                            delete me['@{prevent.win.scroll}'];
                        }
                    }
                    else {
                        delete me['@{zone.start.scrolling}'];
                        delete me['@{prevent.win.scroll}'];
                    }
                }
            };
            Runner['@{task.add}'](SCROLL_INTERVAL, me['@{fn.zone.scroll}']);
        }
    },
    '@{start.win.scroll}': function () {
        var me = this;
        if (!me['@{fn.win.scroll}']) {
            me['@{fn.win.scroll}'] = function () {
                if (me['@{prevent.win.scroll}'])
                    return;
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
                    me['@{win.start.scrolling}'] = true;
                    e.pageX += tx;
                    e.pageY += ty;
                    window.scrollBy(tx, ty);
                    delete me['@{has.moved}'];
                    UI['@{bar.hide}']();
                    UI['@{pointer.update}'](e);
                    UI['@{pointer.change}']();
                }
                else {
                    delete me['@{win.start.scrolling}'];
                }
            };
            Runner['@{task.add}'](SCROLL_INTERVAL, me['@{fn.win.scroll}']);
        }
    },
    '@{stop.zone.scroll}': function () {
        var me = this;
        if (me['@{fn.zone.scroll}']) {
            Runner['@{task.remove}'](me['@{fn.zone.scroll}']);
            delete me['@{fn.zone.scroll}'];
            delete me['@{prevent.win.scroll}'];
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