/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hour/day',["magix","$","./index"],function(require,exports,module){
/*Magix,$,Core*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
var Core = require('./index');
Magix.applyStyle("q",".cY{width:100%;max-width:100%;margin-bottom:20px}.cZ{height:50px;background-color:#fafafa;color:#666}.d_{position:relative}.da{display:inline-block;position:absolute;margin-top:-15px;width:32px;height:18px}.db{left:8px}.dc{left:24%}.dd{left:47.5%}.de{left:71%}.df{left:94%}.dg{border-top:1px solid #e6e6e6}.dg:first-child{border-top:none}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<table class=\"cY\"><thead><tr class=\"cZ\"><td class=\"d_\"><span class=\"da db\">0:00</span><span class=\"da dc\">6:00</span><span class=\"da dd\">12:00</span><span class=\"da de\">18:00</span><span class=\"da df\">24:00</span></td></tr></thead><tbody><tr class=\"dg\"><td mx-guid=\"g0\u001f\" id=\"range_<%=$$.viewId%>\" mx-view=\"mx-hour/index\" mx-change=\"\u001f\u001e_bX()\"></td></tr></tbody></table>","subs":[{"keys":["viewId"],"path":"td[mx-guid=\"g0\u001f\"]","attr":"id=\"range_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]}]},
    init: function (extra) {
        var me = this;
        me['_bW'] = extra.hours;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
        me.val(me['_bW']);
    },
    val: function (hours) {
        var me = this;
        if (hours) {
            me['_bW'] = Core.improve(hours);
            $('#range_' + me.id).invokeView('val', [hours]);
        }
        return me['_bW'];
    },
    '_bX<change>': function (e) {
        var me = this;
        e.stopPropagation();
        me['_bW'] = e.hours;
    }
});

});