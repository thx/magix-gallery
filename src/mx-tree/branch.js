/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-tree/branch',["magix","$","./branch"],function(require,exports,module){
/*Magix,$*/
require("./branch");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */

var Magix = require('magix');
var $ = require('$');
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul mx-guid=\"g0\u001f\">1\u001d</ul>","subs":[{"keys":["list","fromTop","valueKey","textKey","id"],"path":"ul[mx-guid=\"g0\u001f\"]","tmpl":"<%for(var a=0,b;a<$$.list.length;a++){b=$$.list[a]%><li class=\"fw<%if(!a&&$$.fromTop){%> fC<%}if(a==$$.list.length-1){%> fB<%}%>\"><div class=\"fx<%if(b.children){%> ab<%}%>\" <%if(b.children){%> mx-click=\"\u001f\u001e_bw({id:'<%=$eq(b[$$.valueKey])%>'})\" <%}%>><%if(b.children){%><span class=\"fy\">+</span><%}%></div><div class=\"fz\"><label class=\"fA\"><input class=\"h aq\" type=\"checkbox\" mx-change=\"\u001f\u001e_eM()\" value=\"<%=b[$$.valueKey]%>\"><%=b[$$.textKey]%></label></div><%if(b.children){%><div mx-view=\"mx-tree/branch?textKey=<%!$eu($$.textKey)%>&list=<%@b.children%>\" vuew-value-key=\"<%=$$.valueKey%>\" id=\"<%=$$.id%>_<%=b[$$.valueKey]%>\" class=\"fv af\"></div><%}%></li><%}%>","s":"1\u001d"}]},
    init: function (extra) {
        var me = this;
        me.updater.set(extra);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            id: me.id
        });
    },
    checkAll: function (state) {
        $('#' + this.id + ' input[type="checkbox"]').prop('checked', state);
    },
    '_bw<click>': function (e) {
        var node = $('#' + this.id + '_' + e.params.id);
        var current = $(e.eventTarget).find('span');
        var val = $.trim(current.html());
        if (val == '+') {
            node.slideDown();
            current.html('-');
        }
        else {
            node.slideUp();
            current.html('+');
        }
    },
    '_eM<change>': function (e) {
        var me = this;
        var vf = Magix.Vframe.get(me.id + '_' + e.eventTarget.value);
        if (vf) {
            vf.invoke('checkAll', [e.eventTarget.checked]);
        }
    }
});

});