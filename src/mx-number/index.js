/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-number/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("v",".dW{padding:0;position:relative}.dX{width:100%;border:none;height:100%;padding:6px 9px;background-color:transparent;color:#333;display:block}.dY,.dZ{width:25px;height:50%;position:absolute;right:1px;border:2px solid #fff;border-radius:4px;cursor:pointer}.dY:hover,.dZ:hover{background-color:#f0f0f0}.dZ{top:1px}.dY{bottom:1px}.e_:after{width:0;height:0;position:absolute;top:0;right:0;bottom:0;left:0;border-left:5px solid transparent;border-right:5px solid transparent;content:\"\";display:block;margin:auto}.dY:after{border-top:5px solid #ccc}.dZ:after{border-bottom:5px solid #ccc}.ea{background-color:#fbfbfb}.ea:hover{border-color:#e6e6e6}.ea .dY,.ea .dZ{cursor:not-allowed;border-color:transparent}.ea .dY:hover,.ea .dZ:hover{background-color:transparent}.ea .dZ:hover:after{border-bottom-color:#ccc}.ea .dY:hover:after{border-top-color:#ccc}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<input mx-guid=\"g0\u001f\" class=\"dX\" mx-focusin=\"\u001f\u001e_cG()\" mx-focusout=\"\u001f\u001e_cI()\" value=\"<%=$$.value%>\" mx-change=\"\u001f\u001e_cF()\" mx-keydown=\"\u001f\u001e_cN()\" <%if($$.disabled){%> disabled<%}%> autocomplete=\"off\"><span class=\"dZ e_ ah\" mx-click=\"\u001f\u001e_cC({i:true})\" mx-mousedown=\"\u001f\u001e_cM({i:true})\" mx-contextmenu=\"\u001f\u001e_D()\"></span><span class=\"dY e_ ah\" mx-click=\"\u001f\u001e_cC()\" mx-mousedown=\"\u001f\u001e_cM()\" mx-contextmenu=\"\u001f\u001e_D()\"></span>","subs":[{"keys":["value","disabled"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.value%>\" mx-change=\"\u001f\u001e_cF()\" mx-keydown=\"\u001f\u001e_cN()\" <%if($$.disabled){%> disabled<%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-change"},{"n":"mx-keydown"},{"n":"disabled","b":1,"p":1}]}]},
    init: function (extra) {
        var me = this;
        me.assign(extra);
        var node = $('#' + me.id);
        node.addClass('an dW');
        me['_h'] = node;
    },
    assign: function (ops) {
        var me = this;
        me['_bN'] = +ops.value || '';
        me['_cy'] = +ops.step || 1;
        me['_bB'] = (ops.disabled + '') === 'true';
        me['_F'] = Magix.has(ops, 'max') ? +ops.max : Number.MAX_VALUE;
        me['_E'] = Magix.has(ops, 'min') ? +ops.min : -Number.MAX_VALUE;
        me['_cz'] = +ops.ratio || 10;
        var s = me['_cy'] + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        me['_cA'] = i;
        return true;
    },
    render: function () {
        var me = this;
        me['_h'][me['_bB'] ? 'addClass' : 'removeClass']('ea');
        me.updater.digest({
            value: me['_bN'],
            disabled: me['_bB']
        });
        me['_cB'] = me['_h'].find('input');
    },
    val: function (v) {
        v = +v;
        var me = this;
        if (v || v === 0) {
            var max = me['_F'];
            var min = me['_E'];
            var step = me['_cy'];
            if (v > max) {
                v = max;
            }
            else if (v < min) {
                v = min;
            }
            if (v !== me['_bN']) {
                v = Math.round(v / step) * step;
                v = v.toFixed(me['_cA']);
                me['_cB'].val(v);
                v = +v;
                me['_h'].prop('value', me['_bN'] = v).trigger({
                    type: 'input',
                    value: v
                });
            }
        }
        return me['_bN'];
    },
    '_cC': function (increase, enlarge) {
        var me = this;
        var value = me['_bN'];
        if (value === '')
            value = 0; //for init
        var step = me['_cy'];
        var c = value;
        if (enlarge)
            step *= me['_cz'];
        if (increase) {
            c += step;
        }
        else {
            c -= step;
        }
        me.val(c);
    },
    '_cD': function () {
        var me = this;
        var ipt = me['_cB'][0];
        if (ipt) {
            ipt.focus();
            ipt.selectionStart = ipt.selectionEnd = ipt.value.length;
        }
    },
    '_cE': function () {
        var me = this;
        me['_h'].addClass('ap');
        if (!Magix.has(me, '_bG')) {
            me['_bG'] = me['_bN'];
        }
    },
    '_cF<change>': function (e) {
        e.stopPropagation();
        var target = e.eventTarget;
        var value = target.value;
        var me = this;
        if (value === '') {
            target.value = me['_bN'] = '';
            me['_h'].prop('value', '');
            return;
        }
        var v = parseFloat(value);
        if (v || v === 0) {
            me.val(v);
        }
        target.value = me['_bN'].toFixed(me['_cA']);
    },
    '_cG<focusin>': function () {
        this['_cE']();
    },
    '_cI<focusout>': function () {
        var me = this;
        if (!me['_cH']) {
            me['_h'].removeClass('ap');
            if (me['_bG'] != me['_bN']) {
                me['_h'].trigger({
                    type: 'change',
                    value: me['_bN']
                });
            }
            delete me['_bG'];
        }
    },
    '_cC<click>': function (e) {
        var me = this;
        if (!me['_bB'] && !me['_cJ']) {
            me['_cC'](e.params.i, e.shiftKey);
            me['_cD']();
        }
    },
    '_cM<mousedown>': function (e) {
        var me = this;
        me['_cH'] = true;
        me['_cE']();
        me['_cK'] = setTimeout(me.wrapAsync(function () {
            me['_cL'] = setInterval(me.wrapAsync(function () {
                me['_cJ'] = true;
                me['_cC'](e.params.i);
                me['_cD']();
            }), 80);
        }), 300);
    },
    '_cN<keydown>': function (e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            var me = this;
            if (!me['_bB']) {
                var target = e.eventTarget;
                var value = target.value;
                if (value === '') {
                    me['_bN'] = '';
                }
                else {
                    var v = parseFloat(value);
                    if (v || v === 0) {
                        if (v != me['_bN']) {
                            me['_bN'] = v;
                        }
                    }
                }
                me['_cC'](e.keyCode == 38, e.shiftKey);
            }
        }
    },
    '_D<contextmenu>': function (e) {
        e.preventDefault();
    },
    '$doc<mouseup>': function () {
        var me = this;
        clearTimeout(me['_cK']);
        clearInterval(me['_cL']);
        delete me['_cH'];
        setTimeout(me.wrapAsync(function () {
            delete me['_cJ'];
        }), 0);
    }
});

});