/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/base",["$","../mx-util/view","../mx-dragdrop/index"],(require,exports,module)=>{
/*$,View,DD*/

"use strict";
exports.__esModule = true;
var $ = require("$");
var View = require("../mx-util/view");
var DD = require("../mx-dragdrop/index");
var DefaultSize = 280;
exports["default"] = View.extend({
    mixins: [DD],
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
            if (me['@{vertical}']) {
                dotNodes.css({
                    marginTop: 0 - dotNodes.outerHeight() / 2
                });
            }
            else {
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
            me['@{owner.node}'].prop('value', nv);
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