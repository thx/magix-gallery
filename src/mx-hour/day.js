/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-hour/day',["magix","$","./index"],(require,exports,module)=>{
/*Magix,$,Core*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Core = require('./index');
Magix.applyStyle("__mx-hour_day_",".__mx-hour_day_-reset {\n  padding: 0;\n  height: 38.4px;\n  text-align: center;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<table class=\"__mx-style_index_-wp100\"><thead><tr><%for(var i=0;i<24;i++){%><th class=\"__mx-hour_day_-reset\"><%=('0'+i).slice(-2)%></th><%}%></tr></thead><tbody mx-guid=\"g1\u001f\" id=\"range_<%=$$.viewId%>\" mx-view=\"mx-hour/index\" mx-change=\"\u001f\u001e@{hour}()\"></tbody></table>","subs":[{"keys":["viewId"],"path":"tbody[mx-guid=\"g1\u001f\"]","attr":"id=\"range_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]}],"file":"mx-hour/day.html"},
    init(extra) {
        let me = this;
        me['@{hours}'] = extra.hours;
        me['@{owner.node}'] = $('#' + me.id);
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
        me.val(me['@{hours}']);
    },
    val(hours) {
        let me = this;
        if (hours) {
            me['@{hours}'] = Core.improve(hours);
            $('#range_' + me.id).invokeView('val', [hours]);
        }
        return me['@{hours}'];
    },
    '@{hour}<change>'(e) {
        let me = this;
        e.stopPropagation();
        me['@{hours}'] = e.range;
        me['@{owner.node}'].val(e.range).trigger({
            type: 'change',
            hours: e.range
        });
    }
});

});