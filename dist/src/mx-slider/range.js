/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/range",["magix","$","../mx-util/view","../mx-dragdrop/index"],(require,exports,module)=>{
/*magix_1,$,View,DD*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var $ = require("$");
var View = require("../mx-util/view");
var DD = require("../mx-dragdrop/index");
magix_1["default"].applyStyle("_zs_gallery_mx-slider_index_",":root {\n  --slider-size: 6px;\n  --slider-input-width: 64px;\n  --slider-line-height: 18px;\n  --slider-margin: calc(var(--input-small-height)/2 - var(--slider-size));\n}\n[mx-view*=\"mx-slider/index\"],\n[mx-view*=\"mx-slider/range\"] {\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  cursor: pointer;\n}\n[mx-view*=\"mx-slider/index\"] ._zs_gallery_mx-slider_index_-rail-input,\n[mx-view*=\"mx-slider/range\"] ._zs_gallery_mx-slider_index_-rail-input {\n  position: absolute;\n  top: 50%;\n  right: calc(0px - var(--slider-input-width) - 10px);\n  width: var(--slider-input-width);\n  margin-top: calc(1px - (var(--input-small-height) / 2));\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"],\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"],\n[mx-view*=\"mx-slider/index\"][mx-disabled],\n[mx-view*=\"mx-slider/range\"][mx-disabled] {\n  cursor: not-allowed;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker {\n  background-color: #ccc;\n  opacity: 0.8;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator {\n  background-color: #ccc;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before,\n[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before,\n[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before {\n  background-color: #ccc;\n}\n._zs_gallery_mx-slider_index_-rail {\n  display: inline-block;\n  height: var(--slider-size);\n  position: relative;\n  border-radius: calc(var(--slider-size) / 2);\n  background: #f0f0f0;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--slider-size);\n  height: var(--slider-size);\n  border-radius: 50%;\n  background-color: #ccc;\n  margin-left: calc(0px - var(--slider-size) / 2);\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: var(--slider-size);\n  background-color: var(--color-brand);\n  opacity: 0.3;\n  border-radius: calc(var(--slider-size) / 2);\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator {\n  position: absolute;\n  top: -1px;\n  width: calc(var(--slider-size) + 2px);\n  height: calc(var(--slider-size) + 2px);\n  margin-left: calc(0px - (var(--slider-size) + 2px) / 2);\n  border-radius: 50%;\n  background-color: var(--color-brand);\n  outline: 0;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator:before {\n  content: ' ';\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: calc(var(--slider-size) + 10px);\n  height: calc(var(--slider-size) + 10px);\n  border-radius: 50%;\n  background-color: var(--color-brand);\n  opacity: 0.3;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label,\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot-text,\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-start,\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-end {\n  position: absolute;\n  font-size: var(--font-size);\n  pointer-events: none;\n  line-height: var(--slider-line-height);\n  white-space: nowrap;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label {\n  top: calc(0px - var(--slider-line-height) - var(--slider-margin));\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot-text {\n  top: calc(var(--slider-size) + var(--slider-margin));\n  left: 0;\n  padding: 0 2px;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-start,\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-end {\n  width: 50%;\n  top: calc(var(--slider-size) + var(--slider-margin));\n  text-align: center;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-start {\n  left: -25%;\n}\n._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-end {\n  left: 75%;\n}\n._zs_gallery_mx-slider_index_-unit {\n  margin-left: 3px;\n  color: #999;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail {\n  width: var(--slider-size);\n  left: calc(var(--slider-size) * 2);\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot {\n  top: auto;\n  margin-left: 0;\n  margin-top: calc(0px - var(--slider-size) / 2);\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-tracker {\n  top: auto;\n  width: var(--slider-size);\n  height: auto;\n  bottom: 0;\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-indicator {\n  top: auto;\n  left: -1px;\n  margin-left: 0;\n  margin-bottom: calc(0px - (var(--slider-size) + 2px) / 2);\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-pointer-label {\n  top: auto;\n  right: calc(var(--slider-size) * 2 + var(--slider-size) / 2);\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot-text,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-dot-text {\n  top: auto;\n  left: calc(var(--slider-size) * 2 + var(--slider-size) / 2);\n  margin-top: calc(0px - var(--slider-line-height) / 2);\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-start,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-start {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: calc(var(--slider-size) * 2 + var(--slider-size) / 2);\n  width: auto;\n  margin-bottom: calc(0px - var(--slider-line-height) / 2);\n}\n[mx-view*=\"mx-slider/index\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-end,\n[mx-view*=\"mx-slider/range\"][mx-view*=\"vertical=true\"] ._zs_gallery_mx-slider_index_-rail ._zs_gallery_mx-slider_index_-scale-end {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: calc(var(--slider-size) * 2 + var(--slider-size) / 2);\n  width: auto;\n  margin-top: calc(0px - var(--slider-line-height) / 2);\n}\n");
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
} ; var $g = '', $_temp, $p = '', vertical = $$.vertical, height = $$.height, width = $$.width, dots = $$.dots, viewId = $$.viewId, min = $$.min, max = $$.max; var $expr, $art, $line; try {
    $p += '<span class="_zs_gallery_mx-slider_index_-rail" mx-contextmenu="' + $viewId + '@{prevent}()" style="';
    $line = 2;
    $art = 'if vertical';
    ;
    $expr = '<%if (vertical) {%>';
    if (vertical) {
        ;
        $p += ' height: ';
        $line = 2;
        $art = '=height';
        ;
        $p += ($expr = '<%=height%>', $e(height)) + 'px; ';
        $line = 2;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' width: ';
        $line = 2;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 3;
    $art = 'each dots as d';
    ;
    $expr = '<%for (var $art_idsrmwomb$art_i = 0, $art_cqcjkhn$art_c = dots.length; $art_idsrmwomb$art_i < $art_cqcjkhn$art_c; $art_idsrmwomb$art_i++) {    var d = dots[$art_idsrmwomb$art_i]%>';
    for (var $art_idsrmwomb$art_i = 0, $art_cqcjkhn$art_c = dots.length; $art_idsrmwomb$art_i < $art_cqcjkhn$art_c; $art_idsrmwomb$art_i++) {
        var d = dots[$art_idsrmwomb$art_i];
        $p += '<span class="_zs_gallery_mx-slider_index_-dot" style="';
        $line = 4;
        $art = 'if vertical';
        ;
        $expr = '<%if (vertical) {%>';
        if (vertical) {
            ;
            $p += ' top: ';
            $line = 4;
            $art = '=(100 - d.percent)';
            ;
            $p += ($expr = '<%=(100 - d.percent)%>', $e((100 - d.percent))) + '%;   ';
            $line = 4;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' left: ';
            $line = 4;
            $art = '=d.percent';
            ;
            $p += ($expr = '<%=d.percent%>', $e(d.percent)) + '%; ';
            $line = 4;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '"></span><span class="_zs_gallery_mx-slider_index_-dot-text" style="';
        $line = 5;
        $art = 'if vertical';
        ;
        $expr = '<%if (vertical) {%>';
        if (vertical) {
            ;
            $p += ' top: ';
            $line = 5;
            $art = '=(100 - d.percent)';
            ;
            $p += ($expr = '<%=(100 - d.percent)%>', $e((100 - d.percent))) + '%;   ';
            $line = 5;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' left: ';
            $line = 5;
            $art = '=d.percent';
            ;
            $p += ($expr = '<%=d.percent%>', $e(d.percent)) + '%; ';
            $line = 5;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '">';
        $line = 5;
        $art = '=d.value';
        ;
        $p += ($expr = '<%=d.value%>', $e(d.value)) + '</span>';
        $line = 6;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<span mxs="_zs_galleryel:_" class="_zs_gallery_mx-slider_index_-tracker"></span><span tabindex="0" mx-keydown="' + $viewId + '@{move.by.keyboard}({start:true})" class="_zs_gallery_mx-slider_index_-indicator" mx-mousedown="' + $viewId + '@{drag}({start:true})" id="left_';
    $line = 9;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '"></span><span class="_zs_gallery_mx-slider_index_-pointer-label" id="leftl_';
    $line = 10;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '"></span><span tabindex="0" mx-keydown="' + $viewId + '@{move.by.keyboard}()" class="_zs_gallery_mx-slider_index_-indicator" mx-mousedown="' + $viewId + '@{drag}({end:true})" id="right_';
    $line = 12;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '"></span><span class="_zs_gallery_mx-slider_index_-pointer-label" id="rightl_';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '"></span><span mxa="_zs_galleryel:_" class="_zs_gallery_mx-slider_index_-scale-start">';
    $line = 14;
    $art = '=min';
    ;
    $p += ($expr = '<%=min%>', $e(min)) + '</span><span mxa="_zs_galleryel:a" class="_zs_gallery_mx-slider_index_-scale-end">';
    $line = 15;
    $art = '=max';
    ;
    $p += ($expr = '<%=max%>', $e(max)) + '</span></span>';
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
    init: function (ops) {
        var me = this;
        var oNode = $('#' + me.id);
        me.assign(ops);
        var click = function (e) {
            if (me['@{temp.hold.event}'] || me['@{ui.disabled}']) {
                return;
            }
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
                magix_1["default"].node('left_' + me.id).focus();
            }
            else {
                me['@{sync.right}'](v);
                me['@{end}'] = v;
                me['@{fire.event}']();
                magix_1["default"].node('right_' + me.id).focus();
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
        me['@{width}'] = +ops.width || DefaultSize;
        me['@{height}'] = +ops.height || DefaultSize;
        me['@{min}'] = +ops.min || 0;
        me['@{max}'] = +ops.max || 100;
        me['@{step}'] = +ops.step || 1;
        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        me['@{ui.disabled}'] = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');
        // 是否显示刻度点
        me['@{show.dot}'] = (ops.showDot + '') === 'true';
        me['@{vertical}'] = (ops.vertical + '') === 'true';
        // 保留正常位数
        var s = (ops.step || 1) + '';
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
            // 默认0到中间值
            me['@{start}'] = me['@{min}'];
            me['@{end}'] = (me['@{min}'] + me['@{max}']) / 2;
        }
        return true;
    },
    render: function () {
        var me = this;
        var min = me['@{min}'], max = me['@{max}'], tail = me['@{tail.length}'], width = me['@{width}'];
        // 显示刻度点
        var dots = [];
        if (me['@{show.dot}']) {
            var step = me['@{step}'];
            var diff = max - min;
            var i = 1;
            while (min + step * i < max) {
                dots.push({
                    value: (min + step * i).toFixed(tail),
                    percent: step * i / diff * 100
                });
                i++;
            }
        }
        me.updater.digest({
            dots: dots,
            min: min.toFixed(tail),
            max: max.toFixed(tail),
            height: me['@{height}'],
            width: width,
            vertical: me['@{vertical}']
        });
        var gap = dots.length;
        if (gap > 0) {
            var dotTextNodes = $("#" + me.id + " ._zs_gallery_mx-slider_index_-dot-text");
            if (!me['@{vertical}']) {
                var gw = (gap > 0) ? width / gap : width, dw = dotTextNodes.outerWidth();
                var ml = 0 - dw / 2;
                // 间隔几个显示文案
                var gi = Math.ceil(dw / gw);
                for (var i = 0; i < dotTextNodes.length; i++) {
                    var textNode = $(dotTextNodes[i]);
                    var display = ((i + 1) % gi === 0) ? 'inline-block' : 'none';
                    if (i + 1 == dotTextNodes.length) {
                        // 最后一个节点
                        if (dots[i].percent / 100 * width + dw >= width) {
                            display = 'none';
                        }
                    }
                    textNode.css({
                        marginLeft: ml,
                        display: display
                    });
                }
            }
        }
        me.val([me['@{start}'], me['@{end}']]);
    },
    '@{get.ui.vars}': function () {
        var me = this;
        var rail = me['@{owner.node}'].find('._zs_gallery_mx-slider_index_-rail');
        var tracker = me['@{owner.node}'].find('._zs_gallery_mx-slider_index_-tracker');
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
        if (v > max) {
            v = max;
        }
        else if (v < min) {
            v = min;
        }
        var leftPercent = (v - min) / (max - min);
        // 修正后的值
        v = me['@{get.fixed.value}'](leftPercent);
        // 更正
        leftPercent = (v - min) / (max - min);
        var vars = me['@{get.ui.vars}']();
        var node = vars.iLeftL;
        node.html(v);
        // let l = vars.rMax * leftPercent;
        if (me['@{vertical}']) {
            var pHalf = node.height() / 2;
            // if (l - pHalf < 0) {
            //     l = 0;
            // } else if (l + pHalf > vars.rMax) {
            //     l = vars.rMax - 2 * pHalf;
            // } else {
            //     l -= pHalf;
            // }
            node.css({
                'bottom': leftPercent * 100 + "%",
                'margin-bottom': (0 - pHalf) + "px"
            });
            vars.iLeft.css('bottom', leftPercent * 100 + "%");
            vars.tracker.css('bottom', leftPercent * 100 + "%");
        }
        else {
            var pHalf = node.width() / 2;
            // if (l < pHalf) {
            //     l = 0;
            // } else if (l + pHalf > vars.rMax) {
            //     l = vars.rMax - 2 * pHalf;
            // } else {
            //     l -= pHalf;
            // }
            node.css({
                'left': leftPercent * 100 + "%",
                'margin-left': (0 - pHalf) + "px"
            });
            vars.iLeft.css('left', leftPercent * 100 + "%");
            vars.tracker.css('left', leftPercent * 100 + "%");
        }
        return v;
    },
    '@{sync.right}': function (v) {
        var me = this;
        v = +v;
        var max = me['@{max}'], min = me['@{min}'];
        if (v > max) {
            v = max;
        }
        else if (v < min) {
            v = min;
        }
        var rightPercent = (v - min) / (max - min);
        // 修正后的值
        v = me['@{get.fixed.value}'](rightPercent);
        // 更正
        rightPercent = (v - min) / (max - min);
        var vars = me['@{get.ui.vars}']();
        var node = vars.iRightL;
        node.html(v);
        // let l = vars.rMax * rightPercent;
        if (me['@{vertical}']) {
            var pHalf = node.height() / 2;
            // if (l - pHalf < 0) {
            //     l = 0;
            // } else if (l + pHalf > vars.rMax) {
            //     l = vars.rMax - 2 * pHalf;
            // } else {
            //     l -= pHalf;
            // }
            node.css({
                'bottom': rightPercent * 100 + "%",
                'margin-bottom': (0 - pHalf) + "px"
            });
            vars.iRight.css('bottom', rightPercent * 100 + "%");
            vars.tracker.css('top', (100 - rightPercent * 100) + "%");
        }
        else {
            var pHalf = node.width() / 2;
            // if (l < pHalf) {
            //     l = 0;
            // } else if (l + pHalf > vars.rMax) {
            //     l = vars.rMax - 2 * pHalf;
            // } else {
            //     l -= pHalf;
            // }
            node.css({
                'left': rightPercent * 100 + "%",
                'margin-left': (0 - pHalf) + "px"
            });
            vars.iRight.css('left', rightPercent * 100 + "%");
            vars.tracker.css('right', (100 - rightPercent * 100) + "%");
        }
        return v;
    },
    val: function (v) {
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
        var _a;
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
        return v.toFixed(me['@{tail.length}']);
    },
    '@{fire.event}': function () {
        var me = this;
        var start = (+me['@{start}']).toFixed(me['@{tail.length}']), end = (+me['@{end}']).toFixed(me['@{tail.length}']);
        var value = [start, end];
        this['@{owner.node}'].prop('value', value).trigger({
            type: 'change',
            value: value,
            start: start,
            end: end
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
                    magix_1["default"].node('right_' + me.id).focus();
                }
                else {
                    if (me['@{start}'] != dragEndValue) {
                        dragEndValue = me['@{sync.right}'](start);
                    }
                    dragStartValue = me['@{sync.left}'](v);
                    magix_1["default"].node('left_' + me.id).focus();
                }
            }
            else {
                var end = +me['@{end}'];
                if (nv <= end) {
                    if (me['@{end}'] != dragEndValue) {
                        dragEndValue = me['@{sync.right}'](end);
                    }
                    dragStartValue = me['@{sync.left}'](v);
                    magix_1["default"].node('left_' + me.id).focus();
                }
                else {
                    if (me['@{end}'] != dragStartValue) {
                        dragStartValue = me['@{sync.left}'](end);
                    }
                    dragEndValue = me['@{sync.right}'](v);
                    magix_1["default"].node('right_' + me.id).focus();
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
        if (e.keyCode == 37 || e.keyCode == 40) {
            e.preventDefault();
            step = -step;
            move = true;
        }
        else if (e.keyCode == 39 || e.keyCode == 38) {
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
                    magix_1["default"].node('right_' + me.id).focus();
                }
                else {
                    magix_1["default"].node('left_' + me.id).focus();
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