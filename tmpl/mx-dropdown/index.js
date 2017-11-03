/*
ver:1.3.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@index.less');
let AssignIf = (view, key, ops, cfg, src) => {
    if (!view[key] || Magix.has(ops, cfg)) {
        let v = ops[cfg] || '';
        if (!src) {
            v += '';
        }
        view[key] = v;
    }
    return view[key];
};
module.exports = Magix.View.extend({
    tmpl: '@index.html:const[viewId]',
    init(extra) {
        let me = this;
        Monitor['@{setup}']();
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        me.updater.set({
            viewId: me.id
        });
        let node = $('#' + me.id);
        node.addClass('@index.less:dropdown');
        me['@{owner.node}'] = node;
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        AssignIf(me, '@{list}', ops, 'list', 1);
        let selected = AssignIf(me, '@{selected}', ops, 'selected');
        let textKey = AssignIf(me, '@{textKey}', ops, 'textKey');
        let valueKey = AssignIf(me, '@{valueKey}', ops, 'valueKey');
        let emptyText = AssignIf(me, '@{emptyText}', ops, 'emptyText');
        me['@{ui.searchbox}'] = (ops.searchbox + '') === 'true';
        me['@{ui.disabled}'] = (ops.disabled + '') === 'true';
        if (!me['@{list}']) {
            let node = me['@{owner.node}'];
            let list = [];
            let group;
            node.children().each((idx, item) => {
                item = $(item);
                group = item.attr('group') == 'true';
                list.push({
                    group: group,
                    text: item.text(),
                    value: group ? Magix.guid() : item.attr('value')
                });
            });
            textKey = me['@{textKey}'] = 'text';
            valueKey = me['@{valueKey}'] = 'value';
            me['@{list}'] = list;
        }
        let list = me['@{list}'];
        let map = Magix.toMap(list, valueKey);
        if (emptyText) {
            if (textKey && valueKey) {
                if (!map['']) {
                    let temp = {};
                    temp[textKey] = emptyText;
                    temp[valueKey] = '';
                    list.unshift(temp);
                    map[''] = temp;
                }
            } else {
                if (!map[emptyText]) {
                    list.unshift(emptyText);
                    map[emptyText] = emptyText;
                }
            }
        }
        if (!selected && emptyText && !(textKey || valueKey)) {
            selected = emptyText;
        }
        if (!selected || !map[selected]) { //未提供选项，或提供的选项不在列表里，则默认第一个
            selected = map[selected] || list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }
        me['@{selected}'] = selected;
        me['@{selected.text}'] = textKey && valueKey ? map[selected][textKey] : selected;
        return true;
    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id);
    },
    render() {
        let me = this;
        let node = me['@{owner.node}'];
        node[me['@{ui.disabled}'] ? 'addClass' : 'removeClass']('@index.less:notallowed');
        me['@{ui.update}'](true);
    },
    '@{hide}'() {
        let me = this;
        if (me['@{owner.node}'].hasClass('@index.less:open')) {
            me['@{owner.node}'].removeClass('@index.less:open').trigger('focusout');
            Monitor['@{remove}'](me);
        }
    },
    '@{show}'() {
        let me = this;
        if (!me['@{owner.node}'].hasClass('@index.less:open')) {
            let r = me.updater.get('rList');
            if (!r) {
                me.updater.digest({
                    rList: true
                });
            }
            me['@{owner.node}'].addClass('@index.less:open').trigger('focusin');
            let listNode = $('#list_' + me.id);
            let active = listNode.find('.@index.less:active');
            let pos = active.position();
            let height = listNode.height();
            let stop = listNode.prop('scrollTop');
            if (pos.top < 0 || pos.top > height) {
                let top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor['@{add}'](me);
        }
    },
    '@{ui.update}'(ignoreFireEvent) {
        let me = this;
        let selected = me['@{selected}'];
        me.updater.digest({
            textKey: me['@{textKey}'],
            valueKey: me['@{valueKey}'],
            selected,
            searchbox: me['@{ui.searchbox}'],
            selectedText: me['@{selected.text}'],
            list: me['@{list}'].slice()
        });
        me['@{owner.node}'].val(selected);
        if (!ignoreFireEvent) {
            me['@{fire.event}'](selected);
        }
    },
    '@{fn.search}'(val, callback) {
        let me = this;
        clearTimeout(me['@{search.timer}']);
        let srcList = me['@{list}'];
        let newList = [];
        let index = 0;
        let max = srcList.length;
        let textKey = me['@{textKey}'];
        let valueKey = me['@{valueKey}'];
        if (!val) {
            callback(srcList);
            return;
        }
        let go = () => {
            if (index < max) {
                let end = Math.min(index + 400, max);
                for (let i = index, li, text, value; i < end; i++) {
                    li = srcList[i];
                    text = li;
                    value = li;
                    if (textKey && valueKey) {
                        text = li[textKey];
                        value = li[valueKey];
                    }
                    if ((text + '').indexOf(val) >= 0 || (value + '').indexOf(val) >= 0) {
                        newList.push(li);
                    }
                }
                index = end;
                me['@{search.timer}'] = setTimeout(me.wrapAsync(go), 20);
            } else {
                callback(newList);
            }
        };
        go();
    },
    '@{fire.event}'(item, compare) {
        let me = this;
        let updater = me.updater;
        let valueKey = me['@{valueKey}'];
        let textKey = me['@{textKey}'];
        let lastSelected = me['@{selected}'];
        let selected = item;
        let selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        if (!compare || lastSelected !== selected) {
            updater.set({
                selected: me['@{selected}'] = selected
            });
            let event = $.Event('change', {
                item: item,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: valueKey ? item[valueKey] : item,
                text: textKey ? item[textKey] : item
            });
            me['@{owner.node}'].val(valueKey ? item[valueKey] : item).trigger(event);
            if (!event.isDefaultPrevented()) {
                updater.digest({
                    selected: selected,
                    selectedText: selectedText
                });
            } else {
                updater.set({
                    selected: lastSelected
                });
            }
        }
    },
    '@{toggle}<click>'() {
        let me = this;
        let node = me['@{owner.node}'];
        if (node.hasClass('@index.less:open')) {
            me['@{hide}']();
        } else if (!node.hasClass('@index.less:notallowed')) {
            me['@{show}']();
        }
    },
    '@{search}<keyup,paste>'(e) {
        let me = this;
        e.stopPropagation();
        clearTimeout(me['@{search.delay.timer}']);
        let val = $.trim(e.eventTarget.value);
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            if (val != me.$lVal) {
                me['@{fn.search}'](me.$lVal = val, list => {
                    me.updater.digest({
                        list
                    });
                });
            }
        }), 300);
    },
    '@{select}<click>'(e) {
        e.preventDefault();
        e.stopPropagation();
        let me = this;
        me['@{fire.event}'](e.params.item, true);
        me['@{hide}']();
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    }
});