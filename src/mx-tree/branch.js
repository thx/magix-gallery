/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/branch",["magix","$","./branch"],(require,exports,module)=>{
/*Magix,$*/
require("./branch");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */

var Magix = require("magix");
var $ = require("$");
var Vframe = Magix.Vframe;
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul><%for(var _=0,a;_<$$.list.length;_++){a=$$.list[_]%><li class=\"_fH<%if(!_&&$$.fromTop){%> _fN<%}if(_==$$.list.length-1){%> _fM<%}%>\"><div class=\"_fI<%if(a.children){%> _ad<%}%>\" <%if(a.children){%> mx-click=\"\u001f\u001e__aW({id:'<%=$eq(a[$$.valueKey])%>'})\" <%}%>><%if(a.children){%><span class=\"_fJ\">+</span><%}%></div><div class=\"_fK\"><label class=\"_fL\"><input class=\"_as _fP _aa\" type=\"checkbox\" mx-change=\"\u001f\u001e__gk()\" id=\"cb_<%=$$.id%>_<%=a[$$.valueKey]%>\" value=\"<%=a[$$.valueKey]%>\" name=\"<%=$$.id%>\"><span class=\"_ac _fO _aa\"><%=a[$$.textKey]%></span></label></div><%if(a.children){%><div id=\"<%=$$.id%>_<%=a[$$.valueKey]%>\" class=\"_fG _ah\" mx-view=\"mx-tree/branch?textKey=<%!$eu($$.textKey)%>&valueKey=<%!$eu($$.valueKey)%>&list=<%@a.children%>\"></div><%}%></li><%}%></ul>"},
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
    '__gF': function () {
        var me = this;
        var id = me.id;
        var hasChecked, hasUnchecked;
        $('#' + id + ' input[name="' + id + '"]').each(function (i, n) {
            if (n.indeterminate) {
                hasChecked = hasUnchecked = true;
            }
            else if (n.checked) {
                hasChecked = true;
            }
            else {
                hasUnchecked = true;
            }
        });
        if (hasChecked && hasUnchecked) {
            return 3;
        }
        else if (hasChecked) {
            return 2;
        }
        return 1;
    },
    '__gG': function (key) {
        var me = this;
        var parent = me.owner.parent();
        var state = 0;
        if (parent) {
            var children = parent.children();
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var c = children_1[_i];
                var vf = Vframe.get(c);
                if (vf) {
                    state |= vf.invoke('__gF');
                }
            }
            var node = $('#cb_' + key);
            if (state === 3) {
                node.prop('indeterminate', true);
            }
            else {
                node.prop('indeterminate', false);
                node.prop('checked', state == 2);
            }
            parent.invoke('__gG', [parent.id]);
        }
    },
    '__cB': function (state) {
        var me = this;
        var id = me.id;
        $('#' + id + ' input[name="' + id + '"]')
            .prop('indeterminate', false)
            .prop('checked', state);
        var owner = me.owner;
        var children = owner.children();
        for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
            var c = children_2[_i];
            var vf = Vframe.get(c);
            if (vf) {
                vf.invoke('__cB', [state]);
            }
        }
    },
    '__aW<click>': function (e) {
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
    '__gk<change>': function (e) {
        var me = this;
        var vf = Vframe.get(me.id + '_' + e.eventTarget.value);
        if (vf) {
            vf.invoke('__cB', [e.eventTarget.checked]);
        }
        me['__gG'](me.id);
    }
});

});