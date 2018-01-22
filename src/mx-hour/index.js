/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/index",["magix","$","mx-dragselect/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dragselect/index");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
Magix.applyStyle("_x","._dC{padding:0;height:38.4px;overflow:hidden;cursor:default;min-width:1px}._dD{opacity:0}._dE{background-color:#f37b63}._dF{border:none}._dG{border-right:1px solid #e6e6e6}");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: {"html":"<tr mx-change=\"\u001f\u001e__f()\" mx-dragbegin=\"\u001f\u001e__bd()\" mx-dragfinish=\"\u001f\u001e__be()\" mx-view=\"mx-dragselect/index\"><%for(var _=0;_<24;_++){%><td class=\"_dC<%if($$.noBorder){%> _dF<%if(_<23){%> _dG<%}}%>\" data-hour=\"<%=_%>\"><span class=\"_dD\"><%!('0'+_).slice(-2)%></span></td><%}%></tr>"},
    init: function (extra) {
        var me = this;
        me['__cW'] = extra.range;
        me['__cX'] = extra.border == 'no';
    },
    render: function () {
        var me = this;
        me.updater.digest({
            noBorder: me['__cX']
        });
        var ownerNode = $('#' + me.id);
        me['__i'] = ownerNode;
        me['__cU'] = ownerNode.find('._dC');
        if (me['__cW']) {
            me.val(me['__cW']);
        }
    },
    val: function (str) {
        var me = this;
        var hours = me['__cU'];
        if (str || str === '') {
            var dragSelected_1 = {};
            hours.each(function (idx, item) {
                item = $(item);
                if (str.charAt(idx) == '1') {
                    dragSelected_1[idx] = 1;
                    item.addClass('_dE');
                }
                else {
                    item.removeClass('_dE');
                }
            });
            me['__ba'] = dragSelected_1;
        }
        else {
            str = [];
            hours.each(function (idx, item) {
                item = $(item);
                if (idx < 24)
                    str.push(item.hasClass('_dE') ? 1 : 0);
            });
            str = str.join('');
        }
        return str;
    },
    '__v': function () {
        var me = this;
        var startValue = me['__bc'];
        var current = me.val();
        if (startValue != current) {
            me['__i'].val(current).trigger({
                type: 'change',
                range: current
            });
        }
    },
    '__f<change,click>': function (e) {
        e.stopPropagation();
        var node = $(e.node);
        var me = this;
        var hour = node.data('hour');
        var dragSelected = me['__ba'];
        var dragTemp = me['__bb'];
        if (e.action == 'add') {
            if (dragSelected[hour]) {
                node.removeClass('_dE');
                delete dragSelected[hour];
                if (e.mode == 'drag') {
                    dragTemp[hour] = 1;
                }
            }
            else {
                node.addClass('_dE');
                dragSelected[hour] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[hour];
                }
            }
        }
        else if (e.action == 'remove') {
            if (dragTemp[hour]) {
                node.addClass('_dE');
                dragSelected[hour] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[hour];
                }
            }
            else {
                node.removeClass('_dE');
                delete dragSelected[hour];
                if (e.mode == 'drag') {
                    dragTemp[hour] = 1;
                }
            }
        }
        if (e.mode == 'click') {
            me['__v']();
        }
    },
    '__bd<dragbegin>': function (e) {
        e.stopPropagation();
        var me = this;
        me['__bc'] = me.val();
        me['__bb'] = {};
    },
    '__be<dragfinish>': function (e) {
        e.stopPropagation();
        var me = this;
        me['__v']();
        delete me['__bb'];
    }
}, {
    improve: function (str) {
        if (!str) {
            str = '';
        }
        var start = 0;
        var end = 24;
        while (start < end) {
            if (!str.charAt(start)) {
                str += '0';
            }
            start++;
        }
        return str;
    }
});

});