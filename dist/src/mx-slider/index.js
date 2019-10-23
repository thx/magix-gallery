/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/index",["magix","$","../mx-util/view","../mx-dragdrop/index"],(require,exports,module)=>{
/*magix_1,$,View,DD*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var $ = require("$");
var View = require("../mx-util/view");
var DD = require("../mx-dragdrop/index");
magix_1["default"].applyStyle("_zs_gallery_mx-slider_index_","[mx-view*=\"mx-slider/index\"],\n[mx-view*=\"mx-slider/range\"] {\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  cursor: pointer;\n}\n[mx-view*=\"mx-slider/index\"] ._zs_gallery_mx-slider_index_-rail-input,\n[mx-view*=\"mx-slider/range\"] ._zs_gallery_mx-slider_index_-rail-input {\n  position: absolute;\n  top: 0;\n  right: -74px;\n  width: 64px;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"],\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"],\n[mx-view*=\"mx-slider/index\"][mx-disabled],\n[mx-view*=\"mx-slider/range\"][mx-disabled] {\n  cursor: not-allowed;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker {\n  background-color: #ccc;\n  opacity: 0.8;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator {\n  background-color: #ccc;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before,\n[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before,\n[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail-wrapper ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before {\n  background-color: #ccc;\n}\n._zs_gallery_mx-slider_index_-rail-wrapper {\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-slider_index_-rail {\n  display: inline-block;\n  height: 6px;\n  position: relative;\n  border-radius: 3px;\n  background: #f0f0f0;\n  top: -3px;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: #ccc;\n  margin-left: -3px;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 6px;\n  background-color: var(--color-brand);\n  opacity: 0.3;\n  border-radius: 3px;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator {\n  position: absolute;\n  top: -1px;\n  width: 8px;\n  height: 8px;\n  margin-left: -4px;\n  border-radius: 50%;\n  background-color: var(--color-brand);\n  outline: 0;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before {\n  content: ' ';\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: var(--color-brand);\n  opacity: 0.3;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label,\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot-text,\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-start,\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-end {\n  position: absolute;\n  font-size: var(--font-size);\n  pointer-events: none;\n  line-height: 16px;\n  white-space: nowrap;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label {\n  top: -22px;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot-text,\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-start {\n  top: 12px;\n  left: 0;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-end {\n  top: 12px;\n  right: 0;\n}\n._zs_gallery_mx-slider_index_-unit {\n  margin-left: 3px;\n  color: #999;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail {\n  width: 6px;\n  left: 12px;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot {\n  top: auto;\n  margin-left: 0;\n  margin-top: -3px;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker {\n  top: auto;\n  width: 6px;\n  height: auto;\n  bottom: 0;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator {\n  top: auto;\n  left: -1px;\n  margin-left: 0;\n  margin-bottom: -4px;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label {\n  top: auto;\n  right: 17px;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot-text,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot-text {\n  top: auto;\n  left: 17px;\n  margin-top: -8px;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-start,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-start {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 17px;\n  margin-bottom: -3px;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-end,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-end {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 17px;\n  margin-top: -3px;\n}\n");
var DefaultSize = 280;
exports["default"] = View.extend({
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
} ; var $g = '', $_temp, $p = '', vertical = $$.vertical, height = $$.height, width = $$.width, dots = $$.dots, min = $$.min, max = $$.max, needInput = $$.needInput, viewId = $$.viewId, disabled = $$.disabled; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryee:_" class="_zs_gallery_mx-slider_index_-rail-wrapper"><span class="_zs_gallery_mx-slider_index_-rail" mx-contextmenu="' + $viewId + '@{prevent}()" style="';
    $line = 4;
    $art = 'if vertical';
    ;
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' height: ';
        $line = 4;
        $art = '=height';
        ;
        $p += ($expr = '<%=height%>', $e(height)) + 'px; ';
        $line = 4;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' width: ';
        $line = 4;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; ';
        $line = 4;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 5;
    $art = 'each dots as d';
    ;
    $expr = '<%for (var $art_iodyacqm$art_i = 0, $art_cspwnuy$art_c = dots.length; $art_iodyacqm$art_i < $art_cspwnuy$art_c; $art_iodyacqm$art_i++) {    var d = dots[$art_iodyacqm$art_i]%>';
    for (var $art_iodyacqm$art_i = 0, $art_cspwnuy$art_c = dots.length; $art_iodyacqm$art_i < $art_cspwnuy$art_c; $art_iodyacqm$art_i++) {
        var d = dots[$art_iodyacqm$art_i];
        $p += '<span class="_zs_gallery_mx-slider_index_-dot" style="';
        $line = 6;
        $art = 'if vertical';
        ;
        $expr = '<%if (vertical) {%>';
        if (vertical) {
            ;
            $p += ' top: ';
            $line = 6;
            $art = '=(100 - d.percent)';
            ;
            $p += ($expr = '<%=(100 - d.percent)%>', $e((100 - d.percent))) + '%;  ';
            $line = 6;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' left: ';
            $line = 6;
            $art = '=d.percent';
            ;
            $p += ($expr = '<%=d.percent%>', $e(d.percent)) + '%; ';
            $line = 6;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '"></span><span class="_zs_gallery_mx-slider_index_-dot-text" style="';
        $line = 7;
        $art = 'if vertical';
        ;
        $expr = '<%if (vertical) {%>';
        if (vertical) {
            ;
            $p += ' top: ';
            $line = 7;
            $art = '=(100 - d.percent)';
            ;
            $p += ($expr = '<%=(100 - d.percent)%>', $e((100 - d.percent))) + '%;  ';
            $line = 7;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' left: ';
            $line = 7;
            $art = '=d.percent';
            ;
            $p += ($expr = '<%=d.percent%>', $e(d.percent)) + '%; ';
            $line = 7;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '">';
        $line = 7;
        $art = '=d.value';
        ;
        $p += ($expr = '<%=d.value%>', $e(d.value)) + '</span>';
        $line = 8;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<span mxs="_zs_galleryee:_" class="_zs_gallery_mx-slider_index_-tracker"></span><span mxs="_zs_galleryee:a" class="_zs_gallery_mx-slider_index_-indicator" mx-mousedown="' + $viewId + '@{drag}()"></span><span mxs="_zs_galleryee:b" class="_zs_gallery_mx-slider_index_-pointer-label"></span><span mxa="_zs_galleryee:a" class="_zs_gallery_mx-slider_index_-scale-start">';
    $line = 13;
    $art = '=min';
    ;
    $p += ($expr = '<%=min%>', $e(min)) + '</span><span mxa="_zs_galleryee:b" class="_zs_gallery_mx-slider_index_-scale-end">';
    $line = 14;
    $art = '=max';
    ;
    $p += ($expr = '<%=max%>', $e(max)) + '</span></span></div>';
    $line = 17;
    $art = 'if needInput';
    ;
    $expr = '<%if (needInput) {%>';
    if (needInput) {
        ;
        $p += '<input class="input input-small _zs_gallery_mx-slider_index_-rail-input" id="';
        $line = 19;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_input" ';
        $line = 20;
        $art = 'if disabled';
        ;
        $expr = '<%if (disabled) {%>';
        if (disabled) {
            ;
            $p += ' disabled="true" ';
            $line = 20;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' mx-keyup="' + $viewId + '@{enter}()" mx-focusout="' + $viewId + '@{out}()"/>';
        $line = 23;
        $art = '/if';
        ;
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
        this.assign(extra);
        this['@{owner.node}'] = $("#" + this.id);
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
        me['@{show.dot}'] = (ops.showDot + '') === 'true';
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
        var min = me['@{min}'], max = me['@{max}'], tail = me['@{tail.length}'];
        // 显示刻度点
        var dots = [];
        if (me['@{show.dot}']) {
            var step = me['@{step}'];
            var diff = max - min;
            var gap = Math.floor((max - min - 1) / step);
            for (var i = 1; i <= gap; i++) {
                dots.push({
                    value: (min + step * i).toFixed(tail),
                    percent: step * i / diff * 100
                });
            }
        }
        me.updater.digest({
            dots: dots,
            min: min.toFixed(tail),
            max: max.toFixed(tail),
            width: me['@{width}'],
            height: me['@{height}'],
            vertical: me['@{vertical}'],
            needInput: me['@{needInput}'],
            disabled: me['@{ui.disabled}']
        });
        if (dots.length > 0) {
            var dotNodes = $("#" + me.id + " ._zs_gallery_mx-slider_index_-dot-text");
            if (!me['@{vertical}']) {
                dotNodes.css({
                    marginLeft: 0 - dotNodes.outerWidth() / 2
                });
            }
        }
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
            var max = me['@{max}'], min = me['@{min}'];
            if (nv > max) {
                nv = max;
            }
            else if (nv < min) {
                nv = min;
            }
            var p = (nv - min) / (max - min);
            // 修正后的值
            v = me['@{get.fixed.value}'](p);
            // 更正
            p = (v - min) / (max - min);
            var vars = me['@{get.ui.vars}']();
            var node = vars.pLabel;
            node.html(v + (me['@{tip}'] ? ('<span class="_zs_gallery_mx-slider_index_-unit">' + me['@{tip}'] + '</span>') : ''));
            if (vars.inputArea && vars.inputArea.length) {
                vars.inputArea.val(v);
            }
            var l = vars.rMax * p;
            if (me['@{vertical}']) {
                var pHalf = node.height() / 2, dotSize = 6; //端点位移
                if (l - pHalf < 0) {
                    l = 0 - dotSize / 2;
                }
                else if (l + pHalf > vars.rMax) {
                    l = vars.rMax - 2 * pHalf + dotSize / 2;
                }
                else {
                    l -= pHalf;
                }
                node.css('bottom', l + "px");
                vars.indicator.css('bottom', p * 100 + "%");
                vars.tracker.css('height', p * 100 + "%");
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
                node.css('left', l + "px");
                vars.indicator.css('left', p * 100 + "%");
                vars.tracker.css('width', p * 100 + "%");
            }
            if (!ignoreSyncValue) {
                if (me['@{value}'] != v) {
                    me['@{fire.event}'](v);
                }
                me['@{value}'] = v;
            }
        }
        me['@{owner.node}'].prop('value', +me['@{value}']);
        return +me['@{value}'];
    },
    '@{get.fixed.value}': function (p) {
        var me = this;
        var max = me['@{max}'], min = me['@{min}'], step = me['@{step}'], v;
        if (p === 0) {
            v = min;
        }
        else if (p === 1) {
            v = max;
        }
        else {
            v = Math.round((max - min) * p / step) * step + min;
        }
        v = v.toFixed(me['@{tail.length}']);
        return v;
    },
    '@{fire.event}': function (p) {
        var v = (+p).toFixed(this['@{tail.length}']);
        this['@{owner.node}'].prop('value', v).trigger({
            type: 'change',
            value: v
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