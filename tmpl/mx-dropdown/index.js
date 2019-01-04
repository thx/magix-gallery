/**
 * 为了保证dropdown.item每次更新，不实现assign
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
let I18n = require('../mx-medusa/util');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(ops) {
        let me = this;

        Monitor['@{setup}']();
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });

        me['@{owner.node}'] = $('#' + me.id);

        let disabledNode = $('#' + me.id + '[mx-disabled]')
        me['@{ui.disabled}'] = disabledNode && (disabledNode.length > 0);

        // 列表是否展开
        me['@{ui.expand}'] = false;

        // 展开方向：向上向下
        let placementMap = {
            top: '@index.less:top',
            bottom: '@index.less:bottom'
        }

        // trigger方式，click，hover，默认click
        me['@{trigger.type}'] = ops.triggerType || 'click';

        let selected = me['@{selected}'] = ops.selected;
        let textKey = me['@{textKey}'] = ops.textKey || 'text';
        let valueKey = me['@{valueKey}'] = ops.valueKey || 'value';
        let emptyText = me['@{emptyText}'] = ops.emptyText || '';
        let list = [];
        if (!ops.list) {
            let node = me['@{owner.node}'].children();
            let group;
            node.each((idx, item) => {
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
        } else {
            // 直接配数据不支持分组
            try {
                list = JSON.parse(ops.list);
            } catch (e) {
                list = ops.list
            }
            if (typeof list[0] === 'object') {
                // 本身是个对象
            } else {
                // 直接value列表
                list = list.map(value => {
                    let temp = {};
                    temp[textKey] = value;
                    temp[valueKey] = value;
                    return temp;
                })
            }
        }
        me['@{list}'] = list;

        let map = Magix.toMap(list, valueKey);
        if (emptyText) {
            if (!map['']) {
                let temp = {};
                temp[textKey] = emptyText;
                temp[valueKey] = '';
                list.unshift(temp);
                map[''] = temp;
            }
        }

        if (!selected || !map[selected]) { //未提供选项，或提供的选项不在列表里，则默认第一个
            let firstItem = {};
            for (var i = 0; i < list.length; i++) {
                if (!list[i].group) {
                    firstItem = list[i];
                    break;
                }
            }
            selected = map[selected] || firstItem;
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }

        me.updater.set({
            viewId: me.id,
            textKey: me['@{textKey}'],
            valueKey: me['@{valueKey}'],
            selected: me['@{selected}'] = selected,
            searchbox: (ops.searchbox + '') === 'true',
            searchText: I18n['dropdown.search'],
            selectedText: me['@{selected.text}'] = map[selected][textKey],
            keyword: me['@{last.search.value}'] = (ops.keyword || ''),  // 搜索关键词
            expand: me['@{ui.expand}'],
            height: (ops.height || 250),
            spm: me['@{owner.node}'].attr('data-spm-click') || '', //埋点
            name: ops.name || '', // 前缀
            placementClass: placementMap[ops.placement || 'bottom']
        });
        me['@{owner.node}'].val(selected);
    },
    render() {
        let me = this;
        let searchbox = me.updater.get('searchbox');

        let initList;
        let next = () => {
            me.updater.digest({
                list: initList
            });
            let triggerType = me['@{trigger.type}'];
            let triggerNode = $('#' + me.id + ' .@index.less:dropdown-toggle');
            switch (triggerType) {
                case 'click':
                    triggerNode.on('click', () => {
                        if (me['@{ui.expand}']) {
                            me['@{hide}']();
                        } else if (!me['@{ui.disabled}']) {
                            me['@{show}']();
                        }
                    })
                    break;
                case 'hover':
                    triggerNode.hover(() => {
                        clearTimeout(me['@{dealy.hide.timer}']);
                        if (!me['@{ui.disabled}']){
                            me['@{show}']();
                        }
                    }, () => {
                        me['@{delay.hide}']();
                    });
    
                    let wrapper = $('#' + me.id + ' .@index.less:dropdown-menu-wrapper');
                    wrapper.hover(() => {
                        clearTimeout(me['@{dealy.hide.timer}']);
                    }, () => {
                        me['@{delay.hide}']();
                    });
                    break;
            }
        }   

        if(searchbox){
            me['@{fn.search}'](me['@{last.search.value}'], list => {
                initList = list;
                next();
            });
        }else{
            initList = me['@{list}'];
            next();
        }
    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id);
    },
    '@{delay.hide}'() {
        let me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{hide}']();
        }), 250);
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.expand}']) {
            me.updater.digest({
                expand: me['@{ui.expand}'] = false
            });
            me['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](me);
        }
    },
    '@{show}'() {
        let me = this;

        if (!me['@{ui.expand}']) {
            let d = {
                expand: me['@{ui.expand}'] = true
            }
            let r = me.updater.get('rList');
            if (!r) {
                d.rList = true;
            }
            me.updater.digest(d);

            me['@{owner.node}'].trigger('focusin');
            let listNode = $('#list_' + me.id);
            let active = listNode.find('.@index.less:active');
            let pos = active.position();
            let height = listNode.height();
            let stop = listNode.prop('scrollTop');
            if (pos && (pos.top < 0 || pos.top > height)) {
                let top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor['@{add}'](me);
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

                    // text不区分大小写匹配
                    let lowVal = (val + '').toLocaleLowerCase(),
                        lowText = (text + '').toLocaleLowerCase();
                    if ((lowText).indexOf(lowVal) >= 0 || (value + '').indexOf(val) >= 0) {
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
    '@{search}<keyup,paste>'(e) {
        let me = this;
        e.stopPropagation();
        clearTimeout(me['@{search.delay.timer}']);
        let val = $.trim(e.eventTarget.value);
        me.updater.set({
            keyword: val
        });
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            if (val != me['@{last.search.value}']) {
                me['@{fn.search}'](me['@{last.search.value}'] = val, list => {
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
        let valueKey = me['@{valueKey}'];
        let textKey = me['@{textKey}'];
        let lastSelected = me['@{selected}'];
        let keyword = me['@{last.search.value}'];
        let selected = item[valueKey];
        let selectedText = item[textKey];
        if (lastSelected !== selected) {
            updater.set({
                selected: me['@{selected}'] = selected
            });
            let event = $.Event('change', {
                item,
                keyword,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: item[valueKey],
                text: item[textKey],
                selected: item[valueKey]
            });
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
            me['@{owner.node}'].val(valueKey ? item[valueKey] : item).trigger(event);
        }

        me['@{hide}']();
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    }
});