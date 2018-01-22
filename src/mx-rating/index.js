/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-rating/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_G","._eC{color:#999;font-size:20px;padding:0 1px}._eD{color:#f96447}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<%for(var _=0;_<$$.number;_++){%><i class=\"__ _eC<%if(_<$$.value){%> _eD<%}if(!$$.readonly){%> _ad<%}%>\" mx-mouseover=\"\u001f\u001e__dG({i:<%!_%>})\" mx-mouseout=\"\u001f\u001e__dG()\" mx-click=\"\u001f\u001e__el({i:<%!_%>})\">&#xe60f;</i><%}%>"},
    init: function (extra) {
        var me = this;
        me['__i'] = $('#' + me.id);
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        me['__ei'] = ops.number | 0 || 5;
        me['__cJ'] = ops.value | 0 || 0;
        me['__ej'] = (ops.readonly + '') === 'true';
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            readonly: me['__ej'],
            value: me['__cJ'],
            number: me['__ei']
        });
    },
    '__dG<mouseover,mouseout>': function (e) {
        var me = this;
        if (me['__ej'])
            return;
        clearTimeout(me['__ek']);
        me['__ek'] = setTimeout(me.wrapAsync(function () {
            var value = e.params.i + 1;
            me.updater.digest({
                value: e.type == 'mouseout' ? me['__cJ'] : value
            });
            if (e.type == 'mouseover') {
                me['__i'].trigger({
                    type: 'itemover',
                    value: value
                });
            }
            else {
                me['__i'].trigger({
                    type: 'itemout',
                    value: me['__cJ']
                });
            }
        }), 0);
    },
    '__el<click>': function (e) {
        var me = this;
        if (me['__ej'])
            return;
        var last = me['__cJ'];
        var value = e.params.i + 1;
        if (value != last) {
            me['__cJ'] = value;
            me['__i'].prop({ value: value }).trigger({
                type: 'change',
                value: value
            });
        }
    }
});

});