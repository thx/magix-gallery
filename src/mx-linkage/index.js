/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-linkage/index',["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("__mx-linkage_index_",".__mx-linkage_index_-owner {\n  height: 32px;\n  padding: 0 9px;\n  position: relative;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  width: 340px;\n  line-height: 32px;\n}\n.__mx-linkage_index_-owner:hover {\n  border-color: #ccc;\n}\n.__mx-linkage_index_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.__mx-linkage_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.__mx-linkage_index_-placeholder {\n  color: #999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-linkage_index_-dashboard {\n  position: absolute;\n  border: 1px solid #e6e6e6;\n  font-size: 14px;\n  max-height: 260px;\n  overflow: auto;\n  list-style: none;\n  border-radius: 4px;\n  background-color: #fff;\n  z-index: 10;\n  padding: 3px 0;\n  line-height: 1.8;\n  left: -1px;\n  right: -1px;\n}\n.__mx-linkage_index_-tabs {\n  border-bottom: 1px solid #e6e6e6;\n  margin: 0 10px;\n  padding-bottom: 3px;\n}\n.__mx-linkage_index_-tab {\n  cursor: pointer;\n  display: inline-block;\n  padding: 0 12px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.__mx-linkage_index_-tab:hover,\n.__mx-linkage_index_-tab:focus,\n.__mx-linkage_index_-tab:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-linkage_index_-main-panel {\n  margin: 0 10px;\n  padding-top: 3px;\n}\n.__mx-linkage_index_-panel-item {\n  width: 32%;\n  float: left;\n  margin: 0 0 2px 2px;\n  color: #666;\n  display: block;\n  cursor: pointer;\n  padding: 0 12px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.__mx-linkage_index_-panel-item:hover,\n.__mx-linkage_index_-panel-item:focus,\n.__mx-linkage_index_-panel-item:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-linkage_index_-texts {\n  margin-left: -1px;\n}\n.__mx-linkage_index_-text {\n  float: left;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 1px 0;\n  max-width: 31%;\n  overflow: hidden;\n  margin-top: 3px;\n}\n.__mx-linkage_index_-text-cnt {\n  cursor: pointer;\n  border-radius: 4px;\n}\n.__mx-linkage_index_-text-cnt:hover,\n.__mx-linkage_index_-text-cnt:focus,\n.__mx-linkage_index_-text-cnt:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-linkage_index_-notallowed .__mx-linkage_index_-texts {\n  cursor: not-allowed;\n}\n.__mx-linkage_index_-notallowed .__mx-linkage_index_-text-cnt:hover,\n.__mx-linkage_index_-notallowed .__mx-linkage_index_-text-cnt:focus,\n.__mx-linkage_index_-notallowed .__mx-linkage_index_-text-cnt:active {\n  background-color: transparent;\n  cursor: not-allowed;\n}\n.__mx-linkage_index_-active,\n.__mx-linkage_index_-active:hover,\n.__mx-linkage_index_-active:active,\n.__mx-linkage_index_-active:focus {\n  color: #fff;\n  background-color: #f96447;\n}\n");
let ListToTree = (list, id, pId) => {
    id = id || 'id';
    pId = pId || 'pId';
    let map = {}, listMap = {}, rootList = [];
    for (let i = 0, max = list.length; i < max; i++) {
        let one = Magix.mix({}, list[i]);
        map[one[id]] = one;
        if (listMap[one[id]]) {
            one.children = listMap[one[id]];
        }
        if (Magix.has(one, pId) && one[pId] !== '') {
            if (map[one[pId]]) {
                let c = map[one[pId]].children || (map[one[pId]].children = []);
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
    return { list: rootList, map };
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"__mx-style_index_-unselectable <%if($$.texts.length){%>__mx-linkage_index_-texts __mx-style_index_-clearfix<%}else{%>__mx-linkage_index_-placeholder<%}%>\" mx-click=\"\u001f\u001e@{show}()\">1\u001d</div><div class=\"__mx-style_index_-unselectable __mx-style_index_-none __mx-linkage_index_-dashboard\" id=\"db_<%=$$.viewId%>\"><div mx-guid=\"g2\u001f\" class=\"__mx-linkage_index_-tabs\">3\u001d</div><div mx-guid=\"g3\u001f\" class=\"__mx-linkage_index_-main-panel\">4\u001d</div></div>","subs":[{"keys":["texts","placeholder"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.texts.length){%> <%for(var i=0;i<$$.texts.length;i++){%><div class=\"__mx-linkage_index_-text __mx-style_index_-ellipsis __mx-linkage_index_-text-cnt\" title=\"<%=$$.texts[i]%>\" mx-click=\"\u001f\u001e@{activeTab}({i:<%!i%>})\"><%=$$.texts[i]%></div><%if(i<$$.texts.length-1){%><div mx-guid=\"g1\u001f\" class=\"__mx-linkage_index_-text\">2\u001d</div><%}%> <%}%> <%}else{%> <%=$$.placeholder%> <%}%>","s":"1\u001d","attr":"class=\"__mx-style_index_-unselectable <%if($$.texts.length){%>__mx-linkage_index_-texts __mx-style_index_-clearfix<%}else{%>__mx-linkage_index_-placeholder<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"31"},{"keys":["splitter"],"path":"div[mx-guid=\"g1\u001f\"]","pKeys":["texts","placeholder"],"tmpl":"<%=$$.splitter%>","s":"2\u001d"},{"keys":["headers","active"],"path":"div[mx-guid=\"g2\u001f\"]","tmpl":"<%for(var i=0;i<$$.headers.length;i++){%> <%var h=$$.headers[i]%><span title=\"<%=h%>\" class=\"__mx-linkage_index_-tab<%if(i==$$.active){%> __mx-linkage_index_-active<%}%>\" <%if(i!==$$.active){%> mx-click=\"\u001f\u001e@{activeTab}({i:<%!i%>})\" <%}%>><%=h%></span><%}%>","s":"3\u001d"},{"keys":["list","selected","active","valueKey","textKey"],"path":"div[mx-guid=\"g3\u001f\"]","tmpl":"<%if($$.list&&$$.list.length){%> <%var current=$$.selected[$$.active]%><ul><%for(var _i=0,list_1=$$.list;_i<list_1.length;_i++){var one=list_1[_i];%><li class=\"__mx-linkage_index_-panel-item __mx-style_index_-ellipsis<%if((one[$$.valueKey]+'')==(current+'')){%> __mx-linkage_index_-active<%}%>\" title=\"<%=one[$$.textKey]%>\" mx-click=\"\u001f\u001e@{select}({o:'<%@one%>'})\"><%=one[$$.textKey]%></li><%}%></ul><%}%>","s":"4\u001d"}],"file":"mx-linkage/index.html"},
    init(extra) {
        let me = this;
        me.assign(extra);
        Monitor['@{setup}']();
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
    },
    assign(ops) {
        let me = this;
        me['@{placeholder}'] = ops.placeholder;
        let valueKey = ops.valueKey || 'id';
        let parentKey = ops.parentKey || 'pId';
        let textKey = ops.parentKey || 'text';
        let info = ListToTree(ops.list, valueKey, parentKey);
        me['@{list.info}'] = info;
        me['@{headers}'] = ops.headers;
        me['@{active.tab}'] = 0;
        let selected = Magix.has(ops, 'selected') ? ops.selected : '';
        selected = selected ? (selected + '').split(',') : [];
        me['@{selected}'] = selected;
        me['@{ui.disabled}'] = (ops.disabled + '') === 'true';
        me.updater.set({
            splitter: ops.splitter || '/',
            textKey,
            valueKey,
            selected
        });
        return true;
    },
    render() {
        let me = this;
        me.updater.digest({
            placeholder: me['@{placeholder}'],
            headers: me['@{headers}'],
            viewId: me.id,
            texts: me['@{get.text}'](),
            active: me['@{active.tab}'],
            list: me['@{get.active.list}']()
        });
        let ownerNode = $('#' + me.id);
        ownerNode.addClass('__mx-linkage_index_-owner');
        ownerNode[me['@{ui.disabled}'] ? 'addClass' : 'removeClass']('__mx-linkage_index_-notallowed');
        me['@{owner.node}'] = ownerNode;
        me['@{related.node}'] = $('#db_' + me.id);
    },
    '@{get.text}'() {
        let me = this;
        let texts = [];
        let info = me['@{list.info}'];
        let selected = me['@{selected}'];
        let textKey = me.updater.get('textKey');
        for (let s of selected) {
            texts.push(info.map[s][textKey]);
        }
        return texts;
    },
    '@{get.active.list}'() {
        let me = this;
        let info = me['@{list.info}'];
        let selected = me['@{selected}'];
        let currentTab = me['@{active.tab}'];
        if (currentTab === 0) {
            return info.list;
        }
        let id = selected[currentTab - 1];
        return id ? info.map[id].children : null;
    },
    '@{active.to.tab}'(tab) {
        let me = this;
        me.updater.digest({
            active: me['@{active.tab}'] = tab,
            list: me['@{get.active.list}'](),
            selected: me['@{selected}']
        });
    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id);
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
            me['@{related.node}'].hide();
            me['@{active.to.tab}'](0);
        }
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
            let offset = me['@{owner.node}'].position();
            me['@{related.node}'].show().css({
                left: offset.left + me['@{offset.left}'],
                top: me['@{owner.node}'].outerHeight() + 5
            });
        }
    },
    '@{fillText}'() {
        let me = this;
        me.updater.digest({
            placeholder: me['@{placeholder}'],
            texts: me['@{get.text}']()
        });
    },
    '@{show}<click>'() {
        let me = this;
        let node = me['@{owner.node}'];
        if (!node.hasClass('__mx-linkage_index_-notallowed')) {
            me['@{show}']();
        }
    },
    '@{activeTab}<click>'(e) {
        this['@{active.to.tab}'](e.params.i);
    },
    '@{select}<click>'(e) {
        let me = this;
        let currentTab = me['@{active.tab}'];
        let headers = me['@{headers}'];
        let selected = me['@{selected}'];
        let valueKey = me.updater.get('valueKey');
        let one = e.params.o;
        let itemId = one[valueKey];
        selected = selected.slice(0, currentTab);
        selected.push(itemId);
        currentTab++;
        let info = me['@{list.info}'];
        me['@{selected}'] = selected;
        if (currentTab < headers.length && info.map[itemId].children) {
            me['@{active.to.tab}'](currentTab);
        }
        else {
            me['@{fillText}']();
            me['@{hide}']();
            me['@{owner.node}'].trigger({
                type: 'change',
                selected: selected
            });
        }
    }
});

});