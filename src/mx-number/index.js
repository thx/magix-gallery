/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-number/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_g","._aS{padding:0;position:relative}._aT{width:100%;border:none;height:100%;background-color:transparent;color:#333;display:block}._aU,._aV{width:25px;height:50%;position:absolute;right:1px;border:2px solid #fff;border-radius:4px;cursor:pointer}._aU:hover,._aV:hover{background-color:#f0f0f0}._aV{top:1px}._aU{bottom:1px}._aW:after{width:0;height:0;position:absolute;top:0;right:0;bottom:0;left:0;border-left:5px solid transparent;border-right:5px solid transparent;content:\"\";display:block;margin:auto}._aU:after{border-top:5px solid #ccc}._aV:after{border-bottom:5px solid #ccc}._aX{background-color:#fbfbfb}._aX:hover{border-color:#e6e6e6}._aX ._aU,._aX ._aV{cursor:not-allowed;border-color:transparent}._aX ._aU:hover,._aX ._aV:hover{background-color:transparent}._aX ._aV:hover:after{border-bottom-color:#ccc}._aX ._aU:hover:after{border-top-color:#ccc}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<input class=\"_aT\" mx-focusin=\"\u001f\u001e__ao()\" mx-focusout=\"\u001f\u001e__dT()\" value=\"<%=$$.value%>\" mx-change=\"\u001f\u001e__dR()\" mx-keydown=\"\u001f\u001e__dY()\" <%if($$.disabled){%> disabled<%}%> autocomplete=\"off\"><span class=\"_aV _aW _aj\" mx-click=\"\u001f\u001e__dO({i:true})\" mx-mousedown=\"\u001f\u001e__dX({i:true})\" mx-contextmenu=\"\u001f\u001e__E()\"></span><span class=\"_aU _aW _aj\" mx-click=\"\u001f\u001e__dO()\" mx-mousedown=\"\u001f\u001e__dX()\" mx-contextmenu=\"\u001f\u001e__E()\"></span>"},
    init: function (extra) {
        var me = this;
        me.assign(extra);
        var node = $('#' + me.id);
        me['__i'] = node;
    },
    assign: function (ops) {
        var me = this;
        var v = +ops.value;
        if (!v && v !== 0)
            v = '';
        me['__cJ'] = v;
        me['__dK'] = +ops.step || 1;
        me['__cv'] = (ops.disabled + '') === 'true';
        me['__G'] = Magix.has(ops, 'max') ? +ops.max : Number.MAX_VALUE;
        me['__F'] = Magix.has(ops, 'min') ? +ops.min : -Number.MAX_VALUE;
        me['__dL'] = +ops.ratio || 10;
        var s = me['__dK'] + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        me['__dM'] = i;
        return true;
    },
    render: function () {
        var me = this;
        me['__i'][me['__cv'] ? 'addClass' : 'removeClass']('_aX');
        me.updater.digest({
            value: me['__cJ'],
            disabled: me['__cv']
        });
        me['__dN'] = me['__i'].find('input');
    },
    val: function (v) {
        v = +v;
        var me = this;
        if (v || v === 0) {
            var max = me['__G'];
            var min = me['__F'];
            var step = me['__dK'];
            if (v > max) {
                v = max;
            }
            else if (v < min) {
                v = min;
            }
            if (v !== me['__cJ']) {
                v = Math.round(v / step) * step;
                v = v.toFixed(me['__dM']);
                me['__dN'].val(v);
                v = +v;
                me['__i'].prop('value', me['__cJ'] = v).trigger({
                    type: 'input',
                    value: v
                });
            }
        }
        return me['__cJ'];
    },
    '__dO': function (increase, enlarge) {
        var me = this;
        var value = me['__cJ'];
        if (value === '')
            value = 0; //for init
        var step = me['__dK'];
        var c = value;
        if (enlarge)
            step *= me['__dL'];
        if (increase) {
            c += step;
        }
        else {
            c -= step;
        }
        me.val(c);
    },
    '__dP': function () {
        var me = this;
        var ipt = me['__dN'][0];
        if (ipt) {
            ipt.focus();
            ipt.selectionStart = ipt.selectionEnd = ipt.value.length;
        }
    },
    '__dQ': function () {
        var me = this;
        me['__i'].addClass('_ar');
        if (!Magix.has(me, '__cA')) {
            me['__cA'] = me['__cJ'];
        }
    },
    '__dR<change>': function (e) {
        e.stopPropagation();
        var target = e.eventTarget;
        var value = target.value;
        var me = this;
        if (value === '') {
            target.value = me['__cJ'] = '';
            me['__i'].prop('value', '');
            return;
        }
        var v = Number(value);
        if (v || v === 0) {
            me.val(v);
        }
        v = me['__cJ'];
        if (v || v === 0) {
            v = v.toFixed(me['__dM']);
        }
        else {
            v = '';
        }
        target.value = v;
    },
    '__ao<focusin>': function () {
        this['__dQ']();
    },
    '__dT<focusout>': function () {
        var me = this;
        if (!me['__dS']) {
            me['__i'].removeClass('_ar');
            if (me['__cA'] != me['__cJ']) {
                me['__i'].trigger({
                    type: 'change',
                    value: me['__cJ']
                });
            }
            delete me['__cA'];
        }
    },
    '__dO<click>': function (e) {
        var me = this;
        if (!me['__cv'] && !me['__dU']) {
            me['__dO'](e.params.i, e.shiftKey);
            me['__dP']();
        }
    },
    '__dX<mousedown>': function (e) {
        var me = this;
        if (!me['__cv']) {
            me['__dS'] = true;
            me['__dQ']();
            me['__dV'] = setTimeout(me.wrapAsync(function () {
                me['__dW'] = setInterval(me.wrapAsync(function () {
                    me['__dU'] = true;
                    me['__dO'](e.params.i);
                    me['__dP']();
                }), 50);
            }), 300);
        }
    },
    '__dY<keydown>': function (e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            var me = this;
            if (!me['__cv']) {
                var target = e.eventTarget;
                var value = target.value;
                if (value === '') {
                    me['__cJ'] = '';
                }
                else {
                    var v = Number(value);
                    if (v || v === 0) {
                        if (v != me['__cJ']) {
                            me['__cJ'] = v;
                        }
                    }
                }
                me['__dO'](e.keyCode == 38, e.shiftKey);
            }
        }
    },
    '__E<contextmenu>': function (e) {
        e.preventDefault();
    },
    '$doc<mouseup>': function () {
        var me = this;
        clearTimeout(me['__dV']);
        clearInterval(me['__dW']);
        delete me['__dS'];
        setTimeout(me.wrapAsync(function () {
            delete me['__dU'];
        }), 0);
    }
});

});