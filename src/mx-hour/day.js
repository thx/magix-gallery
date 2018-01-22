/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/day",["magix","$","./index"],(require,exports,module)=>{
/*Magix,$,Core*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Core = require("./index");
Magix.applyStyle("_w","._dB{padding:0;height:38.4px;text-align:center}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<table class=\"_W\"><thead><tr><%for(var _=0;_<24;_++){%><th class=\"_dB\"><%=('0'+_).slice(-2)%></th><%}%></tr></thead><tbody id=\"range_<%=$$.viewId%>\" mx-view=\"mx-hour/index\" mx-change=\"\u001f\u001e__cV()\"></tbody></table>"},
    init: function (extra) {
        var me = this;
        me['__cU'] = extra.hours;
        me['__i'] = $('#' + me.id);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
        me.val(me['__cU']);
    },
    val: function (hours) {
        var me = this;
        if (hours) {
            me['__cU'] = Core.improve(hours);
            $('#range_' + me.id).invokeView('val', [hours]);
        }
        return me['__cU'];
    },
    '__cV<change>': function (e) {
        var me = this;
        e.stopPropagation();
        me['__cU'] = e.range;
        me['__i'].val(e.range).trigger({
            type: 'change',
            hours: e.range
        });
    }
});

});