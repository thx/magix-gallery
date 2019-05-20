/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/index",["magix","$","../mx-dragdrop/index"],(require,exports,module)=>{
/*Magix,$,DD*/

var Magix = require("magix");
var $ = require("$");
var DD = require("../mx-dragdrop/index");
Magix.applyStyle("_zs_gallery_mx-slider_index_","[mx-view*=\"mx-slider/index\"],\n[mx-view*=\"mx-slider/range\"] {\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  cursor: pointer;\n}\n[mx-view*=\"mx-slider/index\"] ._zs_gallery_mx-slider_index_-rail-input,\n[mx-view*=\"mx-slider/range\"] ._zs_gallery_mx-slider_index_-rail-input {\n  position: absolute;\n  top: 0;\n  right: -74px;\n  width: 64px;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"],\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"],\n[mx-view*=\"mx-slider/index\"][mx-disabled],\n[mx-view*=\"mx-slider/range\"][mx-disabled] {\n  cursor: not-allowed;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker {\n  background-color: #ccc;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator {\n  background-color: #ccc;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before,\n[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before,\n[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before {\n  background-color: #ccc;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper {\n  line-height: 28px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail {\n  display: inline-block;\n  position: relative;\n  border-radius: 2px;\n  background: #f0f0f0;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker {\n  position: absolute;\n  border-radius: 2px;\n  left: 0;\n  background-color: var(--color-brand-light);\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker._zs_gallery_mx-slider_index_-hor-tracker {\n  height: 4px;\n  top: 0;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker._zs_gallery_mx-slider_index_-ver-tracker {\n  width: 4px;\n  bottom: 0;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--color-brand);\n  outline: 0;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before {\n  content: ' ';\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: var(--color-brand);\n  opacity: 0.3;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator._zs_gallery_mx-slider_index_-hor-idctor {\n  top: -2px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator._zs_gallery_mx-slider_index_-ver-idctor {\n  left: -2px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label {\n  position: absolute;\n  font-size: var(--font-size);\n  pointer-events: none;\n  line-height: normal;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label._zs_gallery_mx-slider_index_-hor-pl {\n  top: -23px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label._zs_gallery_mx-slider_index_-ver-pl {\n  right: 12px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-left,\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-right,\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-ver-scale-top,\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-ver-scale-bottom {\n  position: absolute;\n  font-size: var(--font-size);\n  pointer-events: none;\n  line-height: normal;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-left {\n  left: 0;\n  top: 9px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-right {\n  right: 0;\n  top: 9px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-ver-scale-bottom {\n  bottom: 0;\n  left: 12px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-ver-scale-top {\n  top: 0;\n  left: 12px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail._zs_gallery_mx-slider_index_-hor {\n  height: 4px;\n  top: -2px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail._zs_gallery_mx-slider_index_-ver {\n  width: 4px;\n  left: 8px;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-unit {\n  margin-left: 3px;\n  color: #999;\n}\n");
var DefaultSize = 280;
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
} ; var $g = '', $_temp, $p = '', vertical = $$.vertical, height = $$.height, width = $$.width, min = $$.min, max = $$.max, needInput = $$.needInput, viewId = $$.viewId, disabled = $$.disabled; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydU:_" class="_zs_gallery_mx-slider_index_-rail-wrapper"><span class="_zs_gallery_mx-slider_index_-rail ';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' _zs_gallery_mx-slider_index_-ver ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' _zs_gallery_mx-slider_index_-hor ';
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
    $p += 'px"><span class="_zs_gallery_mx-slider_index_-tracker ';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' _zs_gallery_mx-slider_index_-ver-tracker ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' _zs_gallery_mx-slider_index_-hor-tracker ';
        $expr = '<%}%>';
    }
    ;
    $p += '"></span><span class="_zs_gallery_mx-slider_index_-indicator ';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' _zs_gallery_mx-slider_index_-ver-idctor ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' _zs_gallery_mx-slider_index_-hor-idctor ';
        $expr = '<%}%>';
    }
    ;
    $p += '" mx-mousedown="' + $viewId + '@{drag}()"></span><span class="_zs_gallery_mx-slider_index_-pointer-label ';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' _zs_gallery_mx-slider_index_-ver-pl ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' _zs_gallery_mx-slider_index_-hor-pl ';
        $expr = '<%}%>';
    }
    ;
    $p += '"></span><span class="';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' _zs_gallery_mx-slider_index_-ver-scale-bottom ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' _zs_gallery_mx-slider_index_-scale-left ';
        $expr = '<%}%>';
    }
    ;
    $p += '">' + ($expr = '<%=min%>', $e(min)) + '</span><span class="';
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' _zs_gallery_mx-slider_index_-ver-scale-top ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' _zs_gallery_mx-slider_index_-scale-right';
        $expr = '<%}%>';
    }
    ;
    $p += '">' + ($expr = '<%=max%>', $e(max)) + '</span></span></div>';
    $expr = '<%if (needInput) {%>';
    if (needInput) {
        ;
        $p += '<input class="input input-small _zs_gallery_mx-slider_index_-rail-input" id="' + ($expr = '<%=viewId%>', $e(viewId)) + '_input" ';
        $expr = '<%if (disabled) {%>';
        if (disabled) {
            ;
            $p += ' disabled="true" ';
            $expr = '<%}%>';
        }
        ;
        $p += ' mx-keyup="' + $viewId + '@{enter}()" mx-focusout="' + $viewId + '@{out}()"/>';
        $expr = '<%}%>';
    }
    ;
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
        me.assign(extra);
        me['@{owner.node}'] = $('#' + me.id);
    },
    assign: function (ops) {
        var me = this;
        me['@{width}'] = +ops.width || DefaultSize;
        me['@{height}'] = +ops.height || DefaultSize;
        me['@{min}'] = +ops.min || 0;
        me['@{max}'] = +ops.max || 100;
        me['@{step}'] = +ops.step || 1;
        me['@{tip}'] = ops.tip || '';
        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        me['@{ui.disabled}'] = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');
        me['@{vertical}'] = (ops.vertical + '') === 'true';
        me['@{needInput}'] = ((ops.needInput + '') === 'true') && !me['@{vertical}'];
        var s = me['@{step}'] + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        me['@{tail.length}'] = i;
        var value;
        if (ops.value) {
            value = +ops.value;
        }
        else {
            // 默认取中间值
            value = ((me['@{max}'] + me['@{min}']) / 2);
        }
        me['@{value}'] = value;
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id,
            min: me['@{min}'].toFixed(me['@{tail.length}']),
            max: me['@{max}'].toFixed(me['@{tail.length}']),
            width: me['@{width}'],
            height: me['@{height}'],
            vertical: me['@{vertical}'],
            needInput: me['@{needInput}'],
            disabled: me['@{ui.disabled}']
        });
        me.val(me['@{value}']);
        var railWrapper = me['@{owner.node}'].find('._zs_gallery_mx-slider_index_-rail-wrapper');
        me['@{rail.node}'] = railWrapper;
        var click = function (e) {
            if (me['@{temp.hold.event}'] || me['@{ui.disabled}']) {
                return;
            }
            var offset = railWrapper.offset();
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
            if (me['@{dragging}']) {
                return;
            }
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
        railWrapper.on('click', click);
        railWrapper.on('keydown', keydown);
        me.on('destroy', function () {
            railWrapper.off('click', click);
            railWrapper.off('keydown', keydown);
        });
    },
    '@{get.ui.vars}': function () {
        var me = this;
        var rail = me['@{owner.node}'].find('._zs_gallery_mx-slider_index_-rail');
        var tracker = me['@{owner.node}'].find('._zs_gallery_mx-slider_index_-tracker');
        var indicator = me['@{owner.node}'].find('._zs_gallery_mx-slider_index_-indicator');
        var pLabel = me['@{owner.node}'].find('._zs_gallery_mx-slider_index_-pointer-label');
        var inputArea = me['@{owner.node}'].find('._zs_gallery_mx-slider_index_-rail-input');
        var half = indicator.outerWidth() / 2;
        var rMax = me['@{vertical}'] ? rail.height() : rail.width();
        var max = rMax - half * 2;
        return {
            rail: rail,
            pLabel: pLabel,
            inputArea: inputArea,
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
            node.html(v + (me['@{tip}'] ? ('<span class="_zs_gallery_mx-slider_index_-unit">' + me['@{tip}'] + '</span>') : ''));
            if (vars.inputArea && vars.inputArea.length) {
                vars.inputArea.val(v);
            }
            var l = pos + vars.half;
            if (me['@{vertical}']) {
                var pHalf = node.height() / 2;
                if (l - pHalf < 0) {
                    l = 0;
                }
                else if (l + pHalf > vars.rMax) {
                    l = vars.rMax - 2 * pHalf;
                }
                else {
                    l -= pHalf;
                }
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
        if (me['@{ui.disabled}']) {
            return;
        }
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
            if (newValue < min) {
                newValue = min;
            }
            else if (newValue > max) {
                newValue = max;
            }
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
    '@{enter}<keyup>': function (e) {
        var me = this;
        e.stopPropagation();
        clearTimeout(me['@{enter.delay.timer}']);
        var val = $.trim(e.eventTarget.value);
        me['@{enter.delay.timer}'] = setTimeout(me.wrapAsync(function () {
            if ($.isNumeric(val)) {
                me.val(val);
            }
        }), 400);
    },
    '@{out}<focusout>': function (e) {
        var me = this;
        e.stopPropagation();
        var val = $.trim(e.eventTarget.value);
        if ($.isNumeric(val)) {
            me.val(val);
        }
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});