let Magix = require('magix');
let Vframe = Magix.Vframe;
let Util = require('@../mx-tree/util');
let I18n = require('../mx-medusa/util');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me['@{extra}'] = extra;

        Monitor['@{setup}']();
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
    },
    render: function () {
        let me = this;
        let ops = me['@{extra}'];
        let valueKey = ops.valueKey || 'value';
        let textKey = ops.textKey || 'text';
        let parentKey = ops.parentKey || 'pValue';

        // 是否可操作
        let disabledNode = $('#' + me.id + '[mx-disabled]')

        let info = Util.listToTree(ops.list, valueKey, parentKey);
        let map = info.map,
            list = info.list;
        me.updater.set({
            viewId: me.id,
            disabled: disabledNode && (disabledNode.length > 0),
            placeholder: ops.placeholder || I18n['choose'],
            valueKey,
            textKey,
            parentKey,
            map,
            list,
            expand: false
        })

        let selectedValue = ops.selected || '';
        let data = me['@{get}'](selectedValue);

        // 确认选择的时候再改
        data.selectedText = data.selectedTexts.join('/');
        data.selectedValue = selectedValue;

        me.updater.digest(data);
        me['@{owner.node}'] = $('#' + me.id);
        me['@{owner.node}'].val(selectedValue);
    },
    '@{get}'(selectedValue) {
        let updater = this.updater;
        let valueKey = updater.get('valueKey'),
            textKey = updater.get('textKey'),
            parentKey = updater.get('parentKey'),
            placeholder = updater.get('placeholder'),
            map = updater.get('map'),
            list = updater.get('list');

        let selectedTexts = [],
            selectedValues = [],
            groups = [];
        if (!selectedValue || !map[selectedValue]) {
            // 1. 未选中
            // 2. 选中值不在可选列表中
            selectedTexts = [placeholder];
            groups = [list];
        } else {
            // 已选中
            let _loop = (v) => {
                let i = map[v];
                selectedTexts.unshift(i[textKey]);
                selectedValues.unshift(i[valueKey] + '');
                if (!i[parentKey]) {
                    // 根节点
                    list.forEach(s => {
                        s.cur = false;
                    })
                    i.cur = true;
                    groups.unshift(list);
                } else {
                    let siblings = map[i[parentKey]].children;
                    siblings.forEach(s => {
                        s.cur = false;
                    })
                    i.cur = true;
                    groups.unshift(siblings);
                    _loop(i[parentKey]);
                }
            }
            _loop(selectedValue);
        }

        return {
            groups,
            selectedTexts,
            selectedValues
        }
    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id);
    },
    '@{hide}'(e) {
        let me = this;
        let expand = me.updater.get('expand');
        if (expand) {
            me.updater.digest({
                expand: false
            });
            Monitor['@{remove}'](me);
        }
    },
    '@{show}<click>'(e) {
        let me = this;
        let updater = me.updater;
        let expand = updater.get('expand'),
            selectedValue = updater.get('selectedValue');

        if (!expand) {
            // 重新获取数据，可能是切换之后未选择直接失去焦点了
            let data = me['@{get}'](selectedValue);
            data.expand = true;
            updater.digest(data);
            Monitor['@{add}'](me);
        }
    },
    '@{select}<click>'(e) {
        let me = this;
        let updater = me.updater;
        let selectedValues = updater.get('selectedValues'),
            valueKey = updater.get('valueKey');

        let gIndex = e.params.gIndex,
            iIndex = e.params.iIndex;
        let groups = updater.get('groups');
        let list = groups[gIndex];
        let item = list[iIndex];
        item.children = item.children || [];
        if (item.children.length > 0) {
            // 还有子节点
            list.forEach(g => {
                g.cur = false;
            })
            item.cur = true;
            groups = groups.slice(0, gIndex + 1);

            // 恢复选中态
            item.children.forEach(c => {
                c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
            })

            groups.push(item.children);
            updater.digest({
                groups
            })
        } else {
            // 选中叶子节点
            let selectedValue = item[valueKey];
            let data = me['@{get}'](selectedValue);
            data.selectedValue = selectedValue;
            data.selectedText = data.selectedTexts.join('/');
            updater.digest(data);

            let event = $.Event('change', {
                item,
                selected: selectedValue
            });
            me['@{owner.node}'].val(selectedValue).trigger(event);
            me['@{hide}']();
        }
    }
});