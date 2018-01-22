/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-linkage/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_z","._dR{height:32px;padding:0 9px;position:relative;border:1px solid #e6e6e6;border-radius:4px;width:340px;line-height:32px;z-index:10}._dR:hover{border-color:#ccc}._dS{cursor:not-allowed;background-color:#fbfbfb}._dS:hover{border-color:#e6e6e6}._dT{color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._dU{position:absolute;border:1px solid #e6e6e6;font-size:14px;max-height:260px;overflow:auto;list-style:none;border-radius:4px;background-color:#fff;z-index:10;padding:3px 0;line-height:1.8;left:-1px;right:-1px}._dV{border-bottom:1px solid #e6e6e6;margin:0 10px;padding-bottom:3px}._dW{cursor:pointer;display:inline-block;padding:0 12px;height:29px;line-height:29px;border-radius:4px}._dW:active,._dW:focus,._dW:hover{color:#333;background-color:#f0f0f0}._dX{margin:0 10px;padding-top:3px}._dY{width:32%;float:left;margin:0 0 2px 2px;color:#666;display:block;cursor:pointer;padding:0 12px;height:29px;line-height:29px;border-radius:4px}._dY:active,._dY:focus,._dY:hover{color:#333;background-color:#f0f0f0}._dZ{margin-left:-1px}._e_{float:left;height:24px;line-height:24px;padding:0 1px;max-width:31%;overflow:hidden;margin-top:3px}._ea{cursor:pointer;border-radius:4px}._ea:active,._ea:focus,._ea:hover{color:#333;background-color:#f0f0f0}._dS ._dZ{cursor:not-allowed}._dS ._ea:active,._dS ._ea:focus,._dS ._ea:hover{background-color:transparent;cursor:not-allowed}._eb,._eb:active,._eb:focus,._eb:hover{color:#fff;background-color:#f96447}");
var ListToTree = function (list, id, pId) {
    id = id || 'id';
    pId = pId || 'pId';
    var map = {}, listMap = {}, rootList = [];
    for (var i = 0, max = list.length; i < max; i++) {
        var one = Magix.mix({}, list[i]);
        map[one[id]] = one;
        if (listMap[one[id]]) {
            one.children = listMap[one[id]];
        }
        if (Magix.has(one, pId) && one[pId] !== '') {
            if (map[one[pId]]) {
                var c = map[one[pId]].children || (map[one[pId]].children = []);
                c.push(one);
            }
            else {
                if (!listMap[one[pId]])
                    listMap[one[pId]] = [one];
                else
                    listMap[one[pId]].push(one);
            }
        }
        else {
            rootList.push(one);
        }
    }
    return { list: rootList, map: map };
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_aj <%if($$.texts.length){%>_dZ _ai<%}else{%>_dT<%}%>\" mx-click=\"\u001f\u001e__f()\"><%if($$.texts.length){for(var _=0;_<$$.texts.length;_++){%><div class=\"_e_ _al _ea\" title=\"<%=$$.texts[_]%>\" mx-click=\"\u001f\u001e__dm({i:<%!_%>})\"><%=$$.texts[_]%></div><%if(_<$$.texts.length-1){%><div class=\"_e_\"><%=$$.splitter%></div><%}}}else{%> <%=$$.placeholder%> <%}%></div><div class=\"_aj _dU<%if(!$$.show){%> _ah<%}%>\" style=\"<%if($$.show){%>left:<%=$$.left%>px;top:<%=$$.top%>px;<%}%>\"><div class=\"_dV\"><%for(var a=0;a<$$.headers.length;a++){var b=$$.headers[a]%><span title=\"<%=b%>\" class=\"_dW<%if(a==$$.active){%> _eb<%}%>\" <%if(a!==$$.active){%> mx-click=\"\u001f\u001e__dm({i:<%!a%>})\" <%}%>><%=b%></span><%}%></div><div class=\"_dX\"><%if($$.list&&$$.list.length){var c=$$.selected[$$.active]%><ul><%for(var d=0,e=$$.list;d<e.length;d++){var f=e[d];%><li class=\"_dY _al<%if((f[$$.valueKey]+'')==(c+'')){%> _eb<%}%>\" title=\"<%=f[$$.textKey]%>\" mx-click=\"\u001f\u001e__cu({o:'<%@f%>'})\"><%=f[$$.textKey]%></li><%}%></ul><%}%></div></div>"},
    init: function (extra) {
        var me = this;
        me.assign(extra);
        Monitor['__d']();
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
        });
        var ownerNode = $('#' + me.id);
        ownerNode.addClass('_dR');
        me['__i'] = ownerNode;
    },
    assign: function (ops) {
        var me = this;
        me['__de'] = ops.placeholder;
        var valueKey = ops.valueKey || 'id';
        var parentKey = ops.parentKey || 'pId';
        var textKey = ops.parentKey || 'text';
        var info = ListToTree(ops.list, valueKey, parentKey);
        me['__df'] = info;
        me['__dg'] = ops.headers;
        me['__dh'] = 0;
        var selected = Magix.has(ops, 'selected') ? ops.selected : '';
        selected = selected ? (selected + '').split(',') : [];
        me['__b_'] = selected;
        me['__cm'] = (ops.disabled + '') === 'true';
        me.updater.set({
            splitter: ops.splitter || '/',
            textKey: textKey,
            valueKey: valueKey,
            selected: selected
        });
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            placeholder: me['__de'],
            headers: me['__dg'],
            viewId: me.id,
            texts: me['__di'](),
            active: me['__dh'],
            list: me['__dj']()
        });
        me['__i'][me['__cm'] ? 'addClass' : 'removeClass']('_dS');
    },
    '__di': function () {
        var me = this;
        var texts = [];
        var info = me['__df'];
        var selected = me['__b_'];
        var textKey = me.updater.get('textKey');
        for (var _i = 0, selected_1 = selected; _i < selected_1.length; _i++) {
            var s = selected_1[_i];
            texts.push(info.map[s][textKey]);
        }
        return texts;
    },
    '__dj': function () {
        var me = this;
        var info = me['__df'];
        var selected = me['__b_'];
        var currentTab = me['__dh'];
        if (currentTab === 0) {
            return info.list;
        }
        var id = selected[currentTab - 1];
        return id ? info.map[id].children : null;
    },
    '__dk': function (tab) {
        var me = this;
        me.updater.digest({
            active: me['__dh'] = tab,
            list: me['__dj'](),
            selected: me['__b_']
        });
    },
    '__j': function (node) {
        return Magix.inside(node, this.id);
    },
    '__a': function () {
        var me = this;
        if (me['__k']) {
            me['__k'] = false;
            Monitor['__g'](me);
            me['__dk'](0);
            me.updater.digest({
                show: false
            });
        }
    },
    '__f': function () {
        var me = this;
        if (!me['__k']) {
            me['__k'] = true;
            Monitor['__l'](me);
            me.updater.digest({
                show: true,
                top: me['__i'].outerHeight() + 5
            });
        }
    },
    '__dl': function () {
        var me = this;
        me.updater.digest({
            placeholder: me['__de'],
            texts: me['__di']()
        });
    },
    '__f<click>': function () {
        var me = this;
        var node = me['__i'];
        if (!node.hasClass('_dS')) {
            me['__f']();
        }
    },
    '__dm<click>': function (e) {
        this['__dk'](e.params.i);
    },
    '__cu<click>': function (e) {
        var me = this;
        var currentTab = me['__dh'];
        var headers = me['__dg'];
        var selected = me['__b_'];
        var valueKey = me.updater.get('valueKey');
        var one = e.params.o;
        var itemId = one[valueKey];
        selected = selected.slice(0, currentTab);
        selected.push(itemId);
        currentTab++;
        var info = me['__df'];
        me['__b_'] = selected;
        if (currentTab < headers.length && info.map[itemId].children) {
            me['__dk'](currentTab);
        }
        else {
            me['__dl']();
            me['__a']();
            me['__i'].trigger({
                type: 'change',
                selected: selected
            });
        }
    }
});

});