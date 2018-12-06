/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/index",["magix","$","../mx-dragdrop/index","./style"],(require,exports,module)=>{
/*Magix,$,DD*/


"use strict";
exports.__esModule = true;
var Magix = require("magix");
var $ = require("$");
require("./style");
var DD = require("../mx-dragdrop/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', vertical = $$.vertical, height = $$.height, width = $$.width, min = $$.min, max = $$.max; var $expr, $art, $line; try {
    $p += '<div class="__mx-slider_style_-rail';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' __mx-slider_style_-ver';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' __mx-slider_style_-hor';
        $expr = '<%}%>';
    }
    ;
    $p += '" mx-contextmenu="' + $viewId + '@{prevent}()" style="';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += 'height:' + ($expr = '<%=height%>', $e(height));
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += 'width:' + ($expr = '<%=width%>', $e(width));
        $expr = '<%}%>';
    }
    ;
    $p += 'px"><div class="__mx-slider_style_-tracker';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' __mx-slider_style_-ver-tracker';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' __mx-slider_style_-hor-tracker';
        $expr = '<%}%>';
    }
    ;
    $p += '"></div><div class="__mx-slider_style_-indicator';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' __mx-slider_style_-ver-idctor';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' __mx-slider_style_-hor-idctor';
        $expr = '<%}%>';
    }
    ;
    $p += '" mx-mousedown="' + $viewId + '@{drag}()"></div><div class="__mx-slider_style_-pointer-label';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' __mx-slider_style_-ver-pl';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' __mx-slider_style_-hor-pl';
        $expr = '<%}%>';
    }
    ;
    $p += '"></div><div class="';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += '__mx-slider_style_-ver-scale-bottom';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '__mx-slider_style_-scale-left';
        $expr = '<%}%>';
    }
    ;
    $p += '">' + ($expr = '<%=min%>', $e(min)) + '</div><div class="';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += '__mx-slider_style_-ver-scale-top';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '__mx-slider_style_-scale-right';
        $expr = '<%}%>';
    }
    ;
    $p += '">' + ($expr = '<%=max%>', $e(max)) + '</div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-slider/index.html';
    throw msg;
} return $p; },
    mixins: [DD],
    init: function (extra) {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.addClass('__mx-slider_style_-as-input');
        me.assign(extra);
        var click = function (e) {
            if (me['@{temp.hold.event}'] || me['@{disabled}'])
                return;
            var offset = oNode.offset();
            var vars = me['@{get.ui.vars}']();
            var pos = -1;
            if (me['@{vertical}']) {
                pos = vars.rMax - e.pageY + offset.top;
            }
            else {
                pos = e.pageX - offset.left;
            }
            var p = (pos - vars.half) / vars.max;
            var v = me['@{get.fixed.value}'](p);
            me.val(v);
        };
        var keydown = function (e) {
            if (me['@{dragging}'])
                return;
            if (e.keyCode == 37 || e.keyCode == 40) {
                e.preventDefault();
                var v = +me['@{value}'];
                v -= me['@{step}'];
                me.val(v);
            }
            else if (e.keyCode == 39 || e.keyCode == 38) {
                e.preventDefault();
                var v = +me['@{value}'];
                v += me['@{step}'];
                me.val(v);
            }
        };
        oNode.on('click', click);
        oNode.on('keydown', keydown);
        me.on('destroy', function () {
            oNode.off('click', click);
            oNode.off('keydown', keydown);
        });
        me['@{owner.node}'] = oNode;
    },
    assign: function (ops) {
        var me = this;
        me['@{width}'] = +ops.width || 340;
        me['@{height}'] = +ops.height || 340;
        me['@{min}'] = +ops.min || 0;
        me['@{max}'] = +ops.max || 100;
        me['@{step}'] = +ops.step || 1;
        me['@{disabled}'] = (ops.disabled + '') === 'true';
        me['@{vertical}'] = (ops.vertical + '') === 'true';
        var s = me['@{step}'] + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        me['@{tail.length}'] = i;
        me['@{value}'] = +ops.value || 0;
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            min: me['@{min}'].toFixed(me['@{tail.length}']),
            max: me['@{max}'].toFixed(me['@{tail.length}']),
            width: me['@{width}'],
            height: me['@{height}'],
            vertical: me['@{vertical}']
        });
        me['@{owner.node}'][me['@{disabled}'] ? 'addClass' : 'removeClass']('__mx-slider_style_-notallowed').prop('tabindex', me['@{disabled}'] ? -1 : 0);
        me.val(me['@{value}']);
    },
    '@{get.ui.vars}': function () {
        var me = this;
        var rail = me['@{owner.node}'].find('.__mx-slider_style_-rail');
        var tracker = me['@{owner.node}'].find('.__mx-slider_style_-tracker');
        var indicator = me['@{owner.node}'].find('.__mx-slider_style_-indicator');
        var pLabel = me['@{owner.node}'].find('.__mx-slider_style_-pointer-label');
        var half = indicator.outerWidth() / 2;
        var rMax = me['@{vertical}'] ? rail.height() : rail.width();
        var max = rMax - half * 2;
        return {
            rail: rail,
            pLabel: pLabel,
            tracker: tracker,
            indicator: indicator,
            rMax: rMax,
            max: max,
            half: half
        };
    },
    val: function (v, ignoreSyncValue) {
        var me = this;
        var nv = +v;
        if (nv || nv === 0) {
            me['@{owner.node}'].prop('value', nv);
            var max = me['@{max}'], min = me['@{min}'];
            if (nv > max)
                nv = max;
            else if (nv < min)
                nv = min;
            var p = (nv - min) / (max - min);
            var vars = me['@{get.ui.vars}']();
            var pos = p * vars.max;
            if (me['@{vertical}']) {
                vars.indicator.css({
                    bottom: pos
                });
            }
            else {
                vars.indicator.css({
                    left: pos
                });
            }
            v = me['@{get.fixed.value}'](p);
            var node = vars.pLabel;
            node.html(v);
            var l = pos + vars.half;
            if (me['@{vertical}']) {
                var pHalf = node.height() / 2;
                l -= pHalf;
                node.css({
                    bottom: l
                });
            }
            else {
                var pHalf = node.width() / 2;
                if (l < pHalf) {
                    l = 0;
                }
                else if (l + pHalf > vars.rMax) {
                    l = vars.rMax - 2 * pHalf;
                }
                else {
                    l -= pHalf;
                }
                node.css({
                    left: l
                });
            }
            if (me['@{vertical}']) {
                vars.tracker.height(pos + vars.half);
            }
            else {
                vars.tracker.width(pos + vars.half);
            }
            if (!ignoreSyncValue) {
                if (me['@{value}'] != v) {
                    me['@{fire.event}'](v);
                }
                me['@{value}'] = v;
            }
        }
        return +me['@{value}'];
    },
    '@{get.fixed.value}': function (p) {
        var me = this;
        var max = me['@{max}'], min = me['@{min}'], step = me['@{step}'], v;
        if (p === 0)
            v = min;
        else if (p === 1)
            v = max;
        else {
            v = min + (max - min) * p;
            v = Math.round(v / step) * step;
        }
        v = v.toFixed(me['@{tail.length}']);
        return v;
    },
    '@{fire.event}': function (p) {
        this['@{owner.node}'].prop('value', +p).trigger({
            type: 'change',
            value: +p
        });
    },
    '@{drag}<mousedown>': function (e) {
        var me = this;
        if (me['@{disabled}'])
            return;
        var current = $(e.eventTarget);
        var size = current.outerWidth();
        var min = 0; //最小
        var max = -1;
        if (me['@{vertical}']) {
            max = current.parent().height() - size;
        }
        else {
            max = current.parent().width() - size;
        }
        var currentValue = parseInt(current.css(me['@{vertical}'] ? 'bottom' : 'left'), 10);
        var dragValue = me['@{value}'];
        me['@{dragging}'] = 1;
        me.dragdrop(e.eventTarget, function (ex) {
            DD.clear();
            var newValue = -1;
            if (me['@{vertical}']) {
                newValue = currentValue + e.pageY - ex.pageY;
            }
            else {
                newValue = currentValue + ex.pageX - e.pageX;
            }
            if (newValue < min)
                newValue = min;
            else if (newValue > max)
                newValue = max;
            var p = newValue / max;
            me.val(dragValue = me['@{get.fixed.value}'](p), true);
        }, function () {
            if (me['@{value}'] != dragValue) {
                me['@{value}'] = dragValue;
                me['@{fire.event}'](dragValue);
            }
            me['@{temp.hold.event}'] = true;
            setTimeout(me.wrapAsync(function () {
                delete me['@{temp.hold.event}'];
            }), 20);
            delete me['@{dragging}'];
        });
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});