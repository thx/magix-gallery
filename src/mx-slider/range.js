/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/range",["magix","$","../mx-dragdrop/index","./style"],(require,exports,module)=>{
/*Magix,$,DD*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */

var Magix = require("magix");
var $ = require("$");
var DD = require("../mx-dragdrop/index");
require("./style");
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
} ; var $g = '', $_temp, $p = '', vertical = $$.vertical, height = $$.height, width = $$.width, viewId = $$.viewId, min = $$.min, max = $$.max; var $expr, $art, $line; try {
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
    $p += '"></div><div tabindex="0" mx-keydown="' + $viewId + '@{move.by.keyboard}({start:true})" class="__mx-slider_style_-indicator';
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
    $p += '" mx-mousedown="' + $viewId + '@{drag}({start:true})" id="left_' + ($expr = '<%=viewId%>', $e(viewId)) + '"></div><div class="__mx-slider_style_-pointer-label';
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
    $p += '" id="leftl_' + ($expr = '<%=viewId%>', $e(viewId)) + '"></div><div tabindex="0" mx-keydown="' + $viewId + '@{move.by.keyboard}()" class="__mx-slider_style_-indicator';
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
    $p += '" mx-mousedown="' + $viewId + '@{drag}({end:true})" id="right_' + ($expr = '<%=viewId%>', $e(viewId)) + '"></div><div class="__mx-slider_style_-pointer-label';
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
    $p += '" id="rightl_' + ($expr = '<%=viewId%>', $e(viewId)) + '"></div><div class="';
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
    msg += $expr + '\r\n\tat file:mx-slider/range.html';
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
            var start = +me['@{start}'];
            var end = +me['@{end}'];
            var syncLeft = Math.abs(start - v) < Math.abs(end - v);
            if (syncLeft) {
                me['@{sync.left}'](v);
                me['@{start}'] = v;
                me['@{fire.event}']();
                Magix.node('left_' + me.id).focus();
            }
            else {
                me['@{sync.right}'](v);
                me['@{end}'] = v;
                me['@{fire.event}']();
                Magix.node('right_' + me.id).focus();
            }
        };
        oNode.on('click', click);
        me.on('destroy', function () {
            oNode.off('click', click);
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
        var value = ops.value;
        if (value) {
            value = (value + '').split(',');
            me['@{start}'] = +value[0] || 0;
            me['@{end}'] = +value[1] || 0;
        }
        else {
            me['@{start}'] = 0;
            me['@{end}'] = 0;
        }
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            min: me['@{min}'].toFixed(me['@{tail.length}']),
            max: me['@{max}'].toFixed(me['@{tail.length}']),
            viewId: me.id,
            height: me['@{height}'],
            width: me['@{width}'],
            vertical: me['@{vertical}']
        });
        me['@{owner.node}'][me['@{disabled}'] ? 'addClass' : 'removeClass']('__mx-slider_style_-notallowed');
        me.val([me['@{start}'], me['@{end}']]);
    },
    '@{get.ui.vars}': function () {
        var me = this;
        var rail = me['@{owner.node}'].find('.__mx-slider_style_-rail');
        var tracker = me['@{owner.node}'].find('.__mx-slider_style_-tracker');
        var iLeft = $('#left_' + me.id);
        var iRight = $('#right_' + me.id);
        var rMax = me['@{vertical}'] ? rail.height() : rail.width();
        var half = iLeft.outerWidth() / 2;
        var max = rMax - half * 2;
        return {
            rail: rail,
            iLeftL: $('#leftl_' + me.id),
            iRightL: $('#rightl_' + me.id),
            tracker: tracker,
            iLeft: iLeft,
            iRight: iRight,
            left: parseInt(iLeft.css(me['@{vertical}'] ? 'bottom' : 'left'), 10),
            right: parseInt(iRight.css(me['@{vertical}'] ? 'bottom' : 'left'), 10),
            rMax: rMax,
            max: max,
            half: half
        };
    },
    '@{sync.left}': function (v) {
        var me = this;
        v = +v;
        var max = me['@{max}'], min = me['@{min}'];
        if (v > max)
            v = max;
        else if (v < min)
            v = min;
        var leftPercent = (v - min) / (max - min);
        var vars = me['@{get.ui.vars}']();
        var pos = leftPercent * vars.max;
        if (me['@{vertical}']) {
            vars.iLeft.css({
                bottom: pos
            });
        }
        else {
            vars.iLeft.css({
                left: pos
            });
        }
        v = me['@{get.fixed.value}'](leftPercent);
        var node = vars.iLeftL;
        node.html(v);
        var l = pos + vars.half;
        if (me['@{vertical}']) {
            var pHalf = node.height() / 2;
            l -= pHalf;
            node.css({
                bottom: l
            });
            vars.tracker.css({
                bottom: pos + vars.half
            }).height(vars.right - pos);
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
            vars.tracker.css({
                left: pos + vars.half
            }).width(vars.right - pos);
        }
        return v;
    },
    '@{sync.right}': function (v) {
        var me = this;
        v = +v;
        var max = me['@{max}'], min = me['@{min}'];
        if (v > max)
            v = max;
        else if (v < min)
            v = min;
        var rightPercent = (v - min) / (max - min);
        var vars = me['@{get.ui.vars}']();
        var pos = rightPercent * vars.max;
        if (me['@{vertical}']) {
            vars.iRight.css({
                bottom: pos
            });
        }
        else {
            vars.iRight.css({
                left: pos
            });
        }
        v = me['@{get.fixed.value}'](rightPercent);
        var node = vars.iRightL;
        node.html(v);
        var l = pos + vars.half;
        if (me['@{vertical}']) {
            var pHalf = node.height() / 2;
            l -= pHalf;
            node.css({
                bottom: l
            });
            vars.tracker.height(pos - vars.left);
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
            vars.tracker.width(pos - vars.left);
        }
        return v;
    },
    val: function (v) {
        var _a;
        var me = this;
        if (v) {
            var av = (v + '').split(',');
            var start = +av[0] || 0;
            var end = +av[1] || 0;
            if (start > end) {
                _a = [end, start], start = _a[0], end = _a[1];
            }
            me['@{owner.node}'].prop('value', [start, end]);
            start = me['@{sync.left}'](start);
            end = me['@{sync.right}'](end);
            if (me['@{start}'] != start || me['@{end}'] != end) {
                me['@{start}'] = start;
                me['@{end}'] = end;
                me['@{fire.event}']();
            }
        }
        return [+me['@{start}'], +me['@{end}']];
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
    '@{fire.event}': function () {
        var me = this;
        var value = [+me['@{start}'], +me['@{end}']];
        this['@{owner.node}'].prop('value', value).trigger({
            type: 'change',
            value: value,
            start: +me['@{start}'],
            end: +me['@{end}']
        });
    },
    '@{check.and.fire}': function (start, end) {
        var me = this;
        if (start != me['@{start}'] ||
            end != me['@{end}']) {
            me['@{start}'] = start;
            me['@{end}'] = end;
            me['@{fire.event}']();
        }
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
        var dragStartValue = me['@{start}'];
        var dragEndValue = me['@{end}'];
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
            var v = me['@{get.fixed.value}'](p);
            var nv = +v;
            if (e.params.end) {
                var start = +me['@{start}'];
                if (nv >= start) {
                    if (me['@{start}'] != dragStartValue) {
                        dragStartValue = me['@{sync.left}'](start);
                    }
                    dragEndValue = me['@{sync.right}'](v);
                    Magix.node('right_' + me.id).focus();
                }
                else {
                    if (me['@{start}'] != dragEndValue) {
                        dragEndValue = me['@{sync.right}'](start);
                    }
                    dragStartValue = me['@{sync.left}'](v);
                    Magix.node('left_' + me.id).focus();
                }
            }
            else {
                var end = +me['@{end}'];
                if (nv <= end) {
                    if (me['@{end}'] != dragEndValue) {
                        dragEndValue = me['@{sync.right}'](end);
                    }
                    dragStartValue = me['@{sync.left}'](v);
                    Magix.node('left_' + me.id).focus();
                }
                else {
                    if (me['@{end}'] != dragStartValue) {
                        dragStartValue = me['@{sync.left}'](end);
                    }
                    dragEndValue = me['@{sync.right}'](v);
                    Magix.node('right_' + me.id).focus();
                }
            }
        }, function () {
            me['@{check.and.fire}'](dragStartValue, dragEndValue);
            me['@{temp.hold.event}'] = true;
            setTimeout(me.wrapAsync(function () {
                delete me['@{temp.hold.event}'];
            }), 20);
            delete me['@{dragging}'];
        });
    },
    '@{move.by.keyboard}<keydown>': function (e) {
        var me = this, step = me['@{step}'], move;
        if (me['@{dragging}'])
            return;
        if (e.keyCode == 37 || e.keyCode == 40) { //decrement
            e.preventDefault();
            step = -step;
            move = true;
        }
        else if (e.keyCode == 39 || e.keyCode == 38) { //increment
            e.preventDefault();
            move = true;
        }
        if (move) {
            var srcStartValue = me['@{start}'];
            var startValue = +srcStartValue;
            var srcEndValue = me['@{end}'];
            var endValue = +srcEndValue;
            var start = e.params.start;
            if (start) {
                startValue += step;
            }
            else {
                endValue += step;
            }
            if (startValue > endValue) {
                if (start) {
                    Magix.node('right_' + me.id).focus();
                }
                else {
                    Magix.node('left_' + me.id).focus();
                }
                if (endValue != +srcStartValue) {
                    srcStartValue = me['@{sync.left}'](endValue);
                }
                if (startValue != +srcEndValue) {
                    srcEndValue = me['@{sync.right}'](startValue);
                }
            }
            else {
                if (start) {
                    srcStartValue = me['@{sync.left}'](startValue);
                }
                else {
                    srcEndValue = me['@{sync.right}'](endValue);
                }
            }
            me['@{check.and.fire}'](srcStartValue, srcEndValue);
        }
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});