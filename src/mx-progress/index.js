/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-progress/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_F","._ex{height:32px;cursor:default;line-height:32px;display:inline-block}._ey{background:#eaeaea;position:relative;display:inline-block;top:-2px}._ey,._ez{height:4px;border-radius:2px}._ez{background:#f96447;left:0;top:0}._eA,._ez{position:absolute;-webkit-transition:all .15s;transition:all .15s}._eA{font-size:9px;pointer-events:none;top:-15px;line-height:normal}._eB{cursor:not-allowed}._eB ._ey{background-color:#fbfbfb}._eB ._ez{background-color:#eaeaea}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_ey\" mx-contextmenu=\"\u001f\u001e__E()\" style=\"width:<%=$$.width%>px\"><div class=\"_ez\"></div><div class=\"_eA\"></div></div>"},
    init: function (extra) {
        var me = this;
        me['__i'] = $('#' + me.id).addClass('_ex');
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        me['__dt'] = +ops.width || 340;
        me['__cv'] = (ops.disabled + '') === 'true';
        me['__cJ'] = +ops.value || 0;
        me['__eh'] = +ops.fixed || 0;
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            width: me['__dt']
        });
        me['__i'][me['__cv'] ? 'addClass' : 'removeClass']('_eB');
        me.val(me['__cJ']);
    },
    val: function (v) {
        var me = this;
        var nv = +v;
        if (nv || nv === 0) {
            if (nv < 0)
                nv = 0;
            else if (nv > 1)
                nv = 1;
            var rail = me['__i'].find('._ey');
            var rWidth = rail.width();
            var left = rWidth * nv;
            var tracker = me['__i'].find('._ez');
            tracker.width(left);
            var indicator = me['__i'].find('._eA');
            var text = (nv * 100).toFixed(me['__eh']) + '%';
            indicator.html(text);
            var w = indicator.width();
            left -= w / 2;
            if (left < 0)
                left = 0;
            else if (left > (rWidth - w))
                left = rWidth - w;
            indicator.css({
                left: left
            });
            me['__cJ'] = nv;
        }
        return me['__cJ'];
    },
    '__E<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});