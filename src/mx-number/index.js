/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-number/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-number_index_","/* @dependent: ./index.less */\n.__mx-number_index_-ipt {\n  width: 100%;\n  border: none;\n  height: 100%;\n  background-color: transparent;\n  color: #333;\n  display: block;\n}\n.__mx-number_index_-up,\n.__mx-number_index_-down {\n  width: 25px;\n  height: 50%;\n  position: absolute;\n  right: 1px;\n  border: 2px solid #fff;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.__mx-number_index_-up:hover,\n.__mx-number_index_-down:hover {\n  background-color: #f0f0f0;\n}\n.__mx-number_index_-up {\n  top: 1px;\n}\n.__mx-number_index_-down {\n  bottom: 1px;\n}\n.__mx-number_index_-arrow:after {\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-left: 5px solid rgba(0, 0, 0, 0);\n  border-right: 5px solid rgba(0, 0, 0, 0);\n  content: '';\n  display: block;\n  margin: auto;\n}\n.__mx-number_index_-down:after {\n  border-top: 5px solid #ccc;\n}\n.__mx-number_index_-up:after {\n  border-bottom: 5px solid #ccc;\n}\n.__mx-number_index_-notallowed {\n  background-color: #fbfbfb;\n}\n.__mx-number_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.__mx-number_index_-notallowed .__mx-number_index_-up,\n.__mx-number_index_-notallowed .__mx-number_index_-down {\n  cursor: not-allowed;\n  border-color: transparent;\n}\n.__mx-number_index_-notallowed .__mx-number_index_-up:hover,\n.__mx-number_index_-notallowed .__mx-number_index_-down:hover {\n  background-color: transparent;\n}\n.__mx-number_index_-notallowed .__mx-number_index_-up:hover:after {\n  border-bottom-color: #ccc;\n}\n.__mx-number_index_-notallowed .__mx-number_index_-down:hover:after {\n  border-top-color: #ccc;\n}\n");
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
} ; var $g = '', $_temp, $p = '', value = $$.value, disabled = $$.disabled; var $expr, $art, $line; try {
    $p += '<input class="__mx-number_index_-ipt" mx-focusin="' + $viewId + '@{active}()" mx-focusout="' + $viewId + '@{deactive}()" value="' + ($expr = '<%=value%>', $e(value)) + '" mx-change="' + $viewId + '@{num.check}()" mx-keydown="' + $viewId + '@{press.check}()" ';
    $expr = '<%if (disabled) {%>';
    if (disabled) {
        ;
        $p += ' disabled';
        $expr = '<%}%>';
    }
    ;
    $p += ' autocomplete="off"/><span mxs="_):_" class="__mx-number_index_-up __mx-number_index_-arrow __mx-style_index_-unselectable" mx-click="' + $viewId + '@{num.change}({i:true})" mx-mousedown="' + $viewId + '@{fast.start}({i:true})" mx-contextmenu="' + $viewId + '@{prevent}()"></span><span mxs="_):a" class="__mx-number_index_-down __mx-number_index_-arrow __mx-style_index_-unselectable" mx-click="' + $viewId + '@{num.change}()" mx-mousedown="' + $viewId + '@{fast.start}()" mx-contextmenu="' + $viewId + '@{prevent}()"></span>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-number/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me.assign(extra);
        var node = $('#' + me.id);
        me['@{owner.node}'] = node;
    },
    assign: function (ops) {
        var me = this;
        var v = +ops.value;
        if (!v && v !== 0)
            v = '';
        me['@{value}'] = v;
        me['@{step}'] = +ops.step || 1;
        me['@{disabled}'] = (ops.disabled + '') === 'true';
        me['@{max}'] = Magix.has(ops, 'max') ? +ops.max : Number.MAX_VALUE;
        me['@{min}'] = Magix.has(ops, 'min') ? +ops.min : -Number.MAX_VALUE;
        me['@{ratio}'] = +ops.ratio || 10;
        var s = me['@{step}'] + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        me['@{tail.length}'] = i;
        return true;
    },
    render: function () {
        var me = this;
        me['@{owner.node}'][me['@{disabled}'] ? 'addClass' : 'removeClass']('__mx-number_index_-notallowed');
        me.updater.digest({
            value: me['@{value}'],
            disabled: me['@{disabled}']
        });
        me['@{ctrl.input}'] = me['@{owner.node}'].find('input');
    },
    val: function (v) {
        v = +v;
        var me = this;
        if (v || v === 0) {
            var max = me['@{max}'];
            var min = me['@{min}'];
            var step = me['@{step}'];
            if (v > max) {
                v = max;
            }
            else if (v < min) {
                v = min;
            }
            if (v !== me['@{value}']) {
                v = step < 1 ? Math.round(v / step) * step : v;
                v = v.toFixed(me['@{tail.length}']);
                me['@{ctrl.input}'].val(v);
                v = +v;
                me['@{owner.node}'].prop('value', me['@{value}'] = v).trigger({
                    type: 'input',
                    value: v
                });
            }
        }
        return me['@{value}'];
    },
    '@{num.change}': function (increase, enlarge) {
        var me = this;
        var value = me['@{value}'];
        if (value === '')
            value = 0; //for init
        var step = me['@{step}'];
        var c = value;
        if (enlarge)
            step *= me['@{ratio}'];
        if (increase) {
            c += step;
        }
        else {
            c -= step;
        }
        me.val(c);
    },
    '@{cursor.show}': function () {
        var me = this;
        var ipt = me['@{ctrl.input}'][0];
        if (ipt) {
            ipt.focus();
            ipt.selectionStart = ipt.selectionEnd = ipt.value.length;
        }
    },
    '@{simulator.active}': function () {
        var me = this;
        me['@{owner.node}'].addClass('__mx-style_index_-input-focus');
        if (!Magix.has(me, '@{last.value}')) {
            me['@{last.value}'] = me['@{value}'];
        }
    },
    '@{num.check}<change>': function (e) {
        e.stopPropagation();
        var target = e.eventTarget;
        var value = target.value;
        var me = this;
        if (value === '') {
            target.value = me['@{value}'] = '';
            me['@{owner.node}'].prop('value', '');
            return;
        }
        var v = Number(value);
        if (v || v === 0) {
            me.val(v);
        }
        v = me['@{value}'];
        if (v || v === 0) {
            v = v.toFixed(me['@{tail.length}']);
        }
        else {
            v = '';
        }
        target.value = v;
    },
    '@{active}<focusin>': function () {
        this['@{simulator.active}']();
    },
    '@{deactive}<focusout>': function () {
        var me = this;
        if (!me['@{ui.keep.active}']) {
            me['@{owner.node}'].removeClass('__mx-style_index_-input-focus');
            if (me['@{last.value}'] != me['@{value}']) {
                me['@{owner.node}'].trigger({
                    type: 'change',
                    value: me['@{value}']
                });
            }
            delete me['@{last.value}'];
        }
    },
    '@{num.change}<click>': function (e) {
        var me = this;
        if (!me['@{disabled}'] && !me['@{fast.change.start}']) {
            me['@{num.change}'](e.params.i, e.shiftKey);
            me['@{cursor.show}']();
        }
    },
    '@{fast.start}<mousedown>': function (e) {
        var me = this;
        if (!me['@{disabled}']) {
            me['@{ui.keep.active}'] = true;
            me['@{simulator.active}']();
            me['@{long.tap.timer}'] = setTimeout(me.wrapAsync(function () {
                me['@{interval.timer}'] = setInterval(me.wrapAsync(function () {
                    me['@{fast.change.start}'] = true;
                    me['@{num.change}'](e.params.i);
                    me['@{cursor.show}']();
                }), 50);
            }), 300);
        }
    },
    '@{press.check}<keydown>': function (e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            var me = this;
            if (!me['@{disabled}']) {
                var target = e.eventTarget;
                var value = target.value;
                if (value === '') {
                    me['@{value}'] = '';
                }
                else {
                    var v = Number(value);
                    if (v || v === 0) {
                        if (v != me['@{value}']) {
                            me['@{value}'] = v;
                        }
                    }
                }
                me['@{num.change}'](e.keyCode == 38, e.shiftKey);
            }
        }
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    },
    '$doc<mouseup>': function () {
        var me = this;
        clearTimeout(me['@{long.tap.timer}']);
        clearInterval(me['@{interval.timer}']);
        delete me['@{ui.keep.active}'];
        setTimeout(me.wrapAsync(function () {
            delete me['@{fast.change.start}'];
        }), 0);
    }
});

});