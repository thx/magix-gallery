/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@index.less');
let ListToTree = (list, id, pId) => {
    id = id || 'id';
    pId = pId || 'pId';
    let map = {},
        listMap = {},
        rootList = [];
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
            } else {
                if (!listMap[one[pId]]) listMap[one[pId]] = [one];
                else listMap[one[pId]].push(one);
            }
        } else {
            rootList.push(one);
        }
    }
    return { list: rootList, map };
};
module.exports = Magix.View.extend({
    tmpl: '@index.html:const[viewId]',
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
        ownerNode.addClass('@index.less:owner');
        ownerNode[me['@{ui.disabled}'] ? 'addClass' : 'removeClass']('@index.less:notallowed');
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
        if (!node.hasClass('@index.less:notallowed')) {
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
        } else {
            me['@{fillText}']();
            me['@{hide}']();
            me['@{owner.node}'].trigger({
                type: 'change',
                selected: selected
            });
        }
    }
});