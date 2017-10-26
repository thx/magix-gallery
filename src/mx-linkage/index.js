/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-linkage/index',["magix","$","../mx-monitor/index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
var Monitor = require('../mx-monitor/index');
Magix.applyStyle("t",".dI{height:32px;padding:0 9px;position:relative;border:1px solid #e6e6e6;border-radius:4px;width:340px;line-height:32px}.dI:hover{border-color:#ccc}.dJ{cursor:not-allowed;background-color:#fbfbfb}.dJ:hover{border-color:#e6e6e6}.dK{color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dL{position:absolute;border:1px solid #e6e6e6;font-size:14px;max-height:260px;overflow:auto;list-style:none;border-radius:4px;background-color:#fff;z-index:10;padding:3px 0;line-height:1.8;left:-1px;right:-1px}.dM{border-bottom:1px solid #e6e6e6;margin:0 10px;padding-bottom:3px}.dN{cursor:pointer;display:inline-block;padding:0 12px;height:29px;line-height:29px;border-radius:4px}.dN:active,.dN:focus,.dN:hover{color:#333;background-color:#f0f0f0}.dO{margin:0 10px;padding-top:3px}.dP{width:32%;float:left;margin:0 0 2px 2px;color:#666;display:block;cursor:pointer;padding:0 12px;height:29px;line-height:29px;border-radius:4px}.dP:active,.dP:focus,.dP:hover{color:#333;background-color:#f0f0f0}.dQ{margin-left:-1px}.dR{float:left;height:24px;line-height:24px;padding:0 1px;max-width:31%;overflow:hidden;margin-top:3px}.dS{cursor:pointer;border-radius:4px}.dS:active,.dS:focus,.dS:hover{color:#333;background-color:#f0f0f0}.dJ .dQ{cursor:not-allowed}.dJ .dS:active,.dJ .dS:focus,.dJ .dS:hover{background-color:transparent;cursor:not-allowed}.dT,.dT:active,.dT:focus,.dT:hover{color:#fff;background-color:#6363e6}");
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
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"ah <%if($$.texts.length){%>dQ ag<%}else{%>dK<%}%>\" mx-click=\"\u001f\u001e_e()\">1\u001d</div><div class=\"ah af dL\" id=\"db_<%=$$.viewId%>\"><div mx-guid=\"g2\u001f\" class=\"dM\">3\u001d</div><div mx-guid=\"g3\u001f\" class=\"dO\">4\u001d</div></div>","subs":[{"keys":["texts","placeholder"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.texts.length){for(var a=0;a<$$.texts.length;a++){%><div class=\"dR aj dS\" title=\"<%=$$.texts[a]%>\" mx-click=\"\u001f\u001e_ct({i:<%!a%>})\"><%=$$.texts[a]%></div><%if(a<$$.texts.length-1){%><div mx-guid=\"g1\u001f\" class=\"dR\">2\u001d</div><%}}}else{%> <%=$$.placeholder%> <%}%>","s":"1\u001d","attr":"class=\"ah <%if($$.texts.length){%>dQ ag<%}else{%>dK<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"31"},{"keys":["splitter"],"path":"div[mx-guid=\"g1\u001f\"]","pKeys":["texts","placeholder"],"tmpl":"<%=$$.splitter%>","s":"2\u001d"},{"keys":["headers","active"],"path":"div[mx-guid=\"g2\u001f\"]","tmpl":"<%for(var b=0;b<$$.headers.length;b++){var c=$$.headers[b]%><span title=\"<%=c%>\" class=\"dN<%if(b==$$.active){%> dT<%}%>\" <%if(b!==$$.active){%> mx-click=\"\u001f\u001e_ct({i:<%!b%>})\" <%}%>><%=c%></span><%}%>","s":"3\u001d"},{"keys":["list","selected","active","valueKey","textKey"],"path":"div[mx-guid=\"g3\u001f\"]","tmpl":"<%if($$.list&&$$.list.length){var d=$$.selected[$$.active]%><ul><%for(var e=0,f=$$.list;e<f.length;e++){var g=f[e];%><li class=\"dP aj<%if((g[$$.valueKey]+'')==(d+'')){%> dT<%}%>\" title=\"<%=g[$$.textKey]%>\" mx-click=\"\u001f\u001e_bz({o:'<%@g%>'})\"><%=g[$$.textKey]%></li><%}%></ul><%}%>","s":"4\u001d"}]},
    init: function (extra) {
        var me = this;
        me.assign(extra);
        Monitor['_d']();
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
        });
    },
    assign: function (ops) {
        var me = this;
        me['_cj'] = ops.placeholder;
        var valueKey = ops.valueKey || 'id';
        var parentKey = ops.parentKey || 'pId';
        var textKey = ops.parentKey || 'text';
        var info = ListToTree(ops.list, valueKey, parentKey);
        me['_ck'] = info;
        me['_cl'] = ops.headers;
        me['_cm'] = 0;
        var selected = Magix.has(ops, 'selected') ? ops.selected : '';
        selected = selected ? (selected + '').split(',') : [];
        me['_bm'] = selected;
        me['_br'] = (ops.disabled + '') === 'true';
        me.$u.set({
            splitter: ops.splitter || '/',
            textKey: textKey,
            valueKey: valueKey,
            selected: selected
        });
        return true;
    },
    render: function () {
        var me = this;
        me.$u.digest({
            placeholder: me['_cj'],
            headers: me['_cl'],
            viewId: me.id,
            texts: me['_cn'](),
            active: me['_cm'],
            list: me['_co']()
        });
        var ownerNode = $('#' + me.id);
        ownerNode.addClass('dI');
        ownerNode[me['_br'] ? 'addClass' : 'removeClass']('dJ');
        me['_h'] = ownerNode;
        me['_cp'] = $('#db_' + me.id);
    },
    '_cn': function () {
        var me = this;
        var texts = [];
        var info = me['_ck'];
        var selected = me['_bm'];
        var textKey = me.$u.get('textKey');
        for (var _i = 0, selected_1 = selected; _i < selected_1.length; _i++) {
            var s = selected_1[_i];
            texts.push(info.map[s][textKey]);
        }
        return texts;
    },
    '_co': function () {
        var me = this;
        var info = me['_ck'];
        var selected = me['_bm'];
        var currentTab = me['_cm'];
        if (currentTab === 0) {
            return info.list;
        }
        var id = selected[currentTab - 1];
        return id ? info.map[id].children : null;
    },
    '_cq': function (tab) {
        var me = this;
        me.$u.digest({
            active: me['_cm'] = tab,
            list: me['_co'](),
            selected: me['_bm']
        });
    },
    '_i': function (node) {
        return Magix.inside(node, this.id);
    },
    '_a': function () {
        var me = this;
        if (me['_j']) {
            me['_j'] = false;
            Monitor['_f'](me);
            me['_cp'].hide();
            me['_cq'](0);
        }
    },
    '_e': function () {
        var me = this;
        if (!me['_j']) {
            me['_j'] = true;
            Monitor['_k'](me);
            var offset = me['_h'].position();
            me['_cp'].show().css({
                left: offset.left + me['_cr'],
                top: me['_h'].outerHeight() + 10
            });
        }
    },
    '_cs': function () {
        var me = this;
        me.$u.digest({
            placeholder: me['_cj'],
            texts: me['_cn']()
        });
    },
    '_e<click>': function () {
        var me = this;
        var node = me['_h'];
        if (!node.hasClass('dJ')) {
            me['_e']();
        }
    },
    '_ct<click>': function (e) {
        this['_cq'](e.params.i);
    },
    '_bz<click>': function (e) {
        var me = this;
        var currentTab = me['_cm'];
        var headers = me['_cl'];
        var selected = me['_bm'];
        var valueKey = me.$u.get('valueKey');
        var one = e.params.o;
        var itemId = one[valueKey];
        selected = selected.slice(0, currentTab);
        selected.push(itemId);
        currentTab++;
        var info = me['_ck'];
        me['_bm'] = selected;
        if (currentTab < headers.length && info.map[itemId].children) {
            me['_cq'](currentTab);
        }
        else {
            me['_cs']();
            me['_a']();
            me['_h'].trigger({
                type: 'change',
                selected: selected
            });
        }
    }
});

});