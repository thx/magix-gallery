/*
ver:1.3.10
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@multiple.less');
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
    tmpl: '@multiple.html:const[viewId]',
    init(extra) {
        let me = this;
        Monitor['@{setup}']();
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        node.addClass('@multiple.less:dropdown');
        node.on('keydown', e => {
            if (e.keyCode == 13) {//enter
                me['@{toggle}<click>']();
            }
        });
        me.on('destroy', () => {
            node.off('keydown');
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        me.updater.set({
            viewId: me.id,
            inArray: $.inArray
        });
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
        me['@{disabled}'] = (ops.disabled + '') === 'true';
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
                    map[''] = emptyText;
                }
            }
        }
        me['@{selected}'] = selected;
        me['@{list.map}'] = map;
        me.updater.set({ list });
        return true;
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id);
    },
    render() {
        let me = this;
        let node = me['@{owner.node}'];
        node[me['@{disabled}'] ? 'addClass' : 'removeClass']('@multiple.less:notallowed').prop('tabindex', me['@{ui.disabled}'] ? -1 : 0);
        me['@{updateSelected}'](me['@{selected}']);
    },
    '@{hide}'(ignoreBak) {
        let me = this;
        if (me['@{owner.node}'].hasClass('@multiple.less:open')) {
            let data = me.updater.get();
            if (Magix.has(me, '@{bakSelected}')) {
                let fired = ignoreBak && data.selected !== me['@{bakSelected}'];
                if (ignoreBak) {
                    me['@{updateSelected}'](data.selected);
                } else {
                    me['@{updateSelected}'](me['@{bakSelected}']);
                }
                if (fired) {
                    me['@{owner.node}'].val(data.selected).trigger({
                        type: 'change',
                        keys: {
                            text: data.textKey,
                            value: data.valueKey
                        },
                        values: (data.selected + '').split(',')
                    });
                }
                delete me['@{bakSelected}'];
            }
            me['@{owner.node}'].removeClass('@multiple.less:open').trigger('focusout');
            Monitor['@{remove}'](me);
        }
    },
    '@{show}'() {
        let me = this;
        if (!me['@{owner.node}'].hasClass('@multiple.less:open')) {
            let r = me.updater.get('rList');
            if (!r) {
                me.updater.digest({
                    rList: true
                });
            }
            me['@{owner.node}'].addClass('@multiple.less:open').trigger('focusin');
            let listNode = $('#list_' + me.id);
            let active = listNode.find('.@multiple.less:active');
            let pos = active.position();
            if (pos) {
                let height = listNode.height();
                let stop = listNode.prop('scrollTop');
                if (pos.top < 0 || pos.top > height) {
                    let top = pos.top - height + stop + height / 2;
                    listNode.prop('scrollTop', top);
                }
            }
            Monitor['@{add}'](me);
        }
    },
    '@{getText}'(keys, textKey) {
        let me = this;
        let map = me['@{list.map}'];
        let text = [];
        for (let key of keys) {
            let entity = map[key] || {};
            if (textKey) {
                text.push(entity[textKey]);
            } else {
                text.push(key || entity);
            }
        }
        return text;
    },
    '@{updateSelected}'(selected) {
        let me = this;
        selected = selected || '';
        selected += '';
        let textKey = me['@{textKey}'] || '';
        let valueKey = me['@{valueKey}'] || '';
        let parts = selected.split(',');
        let selectedText = '';
        let list = me['@{list}'];
        if (parts.length) {
            selectedText = me['@{getText}'](parts, textKey);
        } else {
            selected = list[0];
            selectedText = list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
                selectedText = selected[textKey];
            }
        }
        me.updater.digest({
            textKey,
            valueKey,
            emptyText: me['@{emptyText}'],
            searchbox: me['@{ui.searchbox}'],
            phLabel: selected === '',
            selected: me['@{selected}'] = selected,
            selectedText: selectedText
        });
        me['@{owner.node}'].val(selected);
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
    '@{toggle}<click>'() {
        let me = this;
        let node = me['@{owner.node}'];
        if (node.hasClass('@multiple.less:open')) {
            me['@{hide}']();
        } else if (!node.hasClass('@multiple.less:notallowed')) {
            me['@{show}']();
        }
    },
    '@{search}<keyup,paste>'(e) {
        let me = this;
        clearTimeout(me['@{search.delay.timer}']);
        let val = $.trim(e.eventTarget.value);
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            if (val != me['@{last.value}']) {
                me['@{fn.search}'](me['@{last.value}'] = val, (list) => {
                    me.updater.digest({
                        list
                    });
                });
            }
        }), 300);
    },
    '@{select}<click>'(e) {
        let me = this;
        let item = e.params.item;
        let updater = me.updater;
        let data = updater.get();
        if (!Magix.has(me, '@{bakSelected}')) {
            me['@{bakSelected}'] = data.selected;
        }
        let valueKey = me['@{valueKey}'];
        let textKey = me['@{textKey}'];
        let selected = item;
        let selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        let keys = [''];
        if (selected) {
            keys = data.selected.split(',');
        }
        let idx = $.inArray('', keys);
        if (idx > -1) {
            keys.splice(idx, 1);
        }
        idx = $.inArray(selected + '', keys);
        if (idx == -1) {
            keys.push(selected);
        } else {
            keys.splice(idx, 1);
        }
        if (!keys.length) {
            if (data.emptyText) {
                keys = [''];
            }
        }
        selected = keys.join(',');
        updater.digest({
            selected: me['@{selected}'] = selected
        });
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    },
    '@{hide}<click>'(e) {
        this['@{hide}'](e.params.enter);
    },
    '@{checkAll}<click>'() {
        let me = this;
        let selected = me['@{selected}'];
        let list = me['@{list}'];
        let valueKey = me['@{valueKey}'];
        let updater = me.updater;
        if (!Magix.has(me, '@{bakSelected}')) {
            me['@{bakSelected}'] = selected;
        }
        if (selected) {
            selected = '';
        } else {
            selected = '';
            for (let i = me['@{emptyText}'] ? 1 : 0, e; i < list.length; i++) {
                e = list[i];
                if (valueKey) {
                    if (!e.group) {
                        selected += e[valueKey] + ',';
                    }
                } else {
                    selected += e + ',';
                }
            }
            selected = selected.slice(0, -1);
        }
        updater.digest({
            selected: me['@{selected}'] = selected
        });
    },
    '@{invertCheck}<click>'() {
        let me = this;
        let selected = me['@{selected}'];
        let list = me['@{list}'];
        let valueKey = me['@{valueKey}'];
        let updater = me.updater;
        if (!Magix.has(me, '@{bakSelected}')) {
            me['@{bakSelected}'] = selected;
        }
        let oldSelected = selected.split(',');
        selected = '';
        for (let i = me['@{emptyText}'] ? 1 : 0, e; i < list.length; i++) {
            e = list[i];
            if (valueKey) {
                if (!e.group && $.inArray(e[valueKey] + '', oldSelected) == -1) {
                    selected += e[valueKey] + ',';
                }
            } else if ($.inArray(e + '', oldSelected) == -1) {
                selected += e + ',';
            }
        }
        selected = selected.slice(0, -1);
        updater.digest({
            selected: me['@{selected}'] = selected
        });
    }
});