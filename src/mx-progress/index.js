/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-progress/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("z",".eo{height:32px;cursor:default;line-height:32px;display:inline-block}.ep{background:#eaeaea;position:relative;display:inline-block;top:-2px}.ep,.eq{height:4px;border-radius:2px}.eq{background:#6363e6;left:0;top:0}.er,.eq{position:absolute;-webkit-transition:all .15s;transition:all .15s}.er{font-size:9px;pointer-events:none;top:-15px;line-height:normal}.es{cursor:not-allowed}.es .ep{background-color:#fbfbfb}.es .eq{background-color:#eaeaea}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"ep\" mx-contextmenu=\"\u001f\u001e_D()\" style=\"width:<%=$$.width%>px\"><div class=\"eq\"></div><div class=\"er\"></div></div>","subs":[{"keys":["width"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"style=\"width:<%=$$.width%>px\"","attrs":[{"n":"style"}]}]},
    init: function (extra) {
        var me = this;
        me['_h'] = $('#' + me.id);
        me['_h'].addClass('eo');
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        me['_cW'] = +ops.width || 340;
        me['_bB'] = (ops.disabled + '') === 'true';
        me['_bN'] = +ops.value || 0;
        me['_d_'] = +ops.fixed || 0;
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            width: me['_cW']
        });
        me['_h'][me['_bB'] ? 'addClass' : 'removeClass']('es');
        me.val(me['_bN']);
    },
    val: function (v) {
        var me = this;
        var nv = +v;
        if (nv || nv === 0) {
            if (nv < 0)
                nv = 0;
            else if (nv > 1)
                nv = 1;
            var rail = me['_h'].find('.ep');
            var rWidth = rail.width();
            var left = rWidth * nv;
            var tracker = me['_h'].find('.eq');
            tracker.width(left);
            var indicator = me['_h'].find('.er');
            var text = (nv * 100).toFixed(me['_d_']) + '%';
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
            me['_bN'] = nv;
        }
        return me['_bN'];
    },
    '_D<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});