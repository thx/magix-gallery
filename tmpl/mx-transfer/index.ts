import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();
        this['@{owner.node}'] = $('#' + this.id);

        let stateConstant = {
            unchecked: 1,
            indeterminate: 2,
            checked: 3,
        }

        let textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value';

        // 选中项：已选中数据 数组 or 字符串
        let selected = [];
        if ($.isArray(extra.selected)) {
            // 数组，保留初始数据状态，双向绑定原样返回
            this['@{bak.type}'] = 'array';
            selected = extra.selected.map(v => (v + ''));
        } else {
            // 字符串
            selected = (extra.selected === undefined || extra.selected === null) ? [] : (extra.selected + '').split(',');
        };

        // 可操作列表
        let list = [], map = {};
        (extra.list || []).forEach(item => {
            map[item[valueKey]] = item;
            if (selected.indexOf(item[valueKey] + '') < 0) {
                list.push(item);
            }
        });

        // 已选列表，按照历史顺序保留
        let selectedList = [];
        selected.forEach(v => {
            selectedList.push(map[v]);
        })

        this.updater.set({
            max: +extra.max || 0,
            stateConstant,
            list,
            selectedList,
            textKey,
            valueKey,
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this['@{val}']();
    },
    '@{val}'(fire) {
        let { list, selectedList, textKey, valueKey, max, stateConstant } = this.updater.get();

        // 可选列表状态计算
        let la = 0, ls = 0;
        list.forEach(item => {
            if (!item.disabled) {
                la++;
                if (item.checked) {
                    ls++;
                }
            }
        });
        let listType = ((!max && la == ls && ls > 0) || (max > 0 && (max - selectedList.length == ls) && ls > 0)) ? stateConstant.checked : (ls == 0 ? stateConstant.unchecked : stateConstant.indeterminate);

        // 已选列表状态计算
        let sa = 0, ss = 0,
            texts = [], values = [];
        selectedList.forEach(item => {
            texts.push(item[textKey]);
            values.push(item[valueKey]);
            sa++;
            if (item.checked) {
                ss++;
            }
        });
        let selectedListType = (sa == ss && ss > 0) ? stateConstant.checked : (ss == 0 ? stateConstant.unchecked : stateConstant.indeterminate);

        this.updater.digest({
            listType,
            listCount: ls,
            selectedListType,
            selectedListCount: ss,
        })

        // 初始化为数组 or 字符串
        let val = (this['@{bak.type}'] == 'array') ? values : values.join(',');
        this['@{owner.node}'].val(val);

        if (fire) {
            // 通知外部选中项变更
            this['@{owner.node}'].trigger({
                type: 'change',
                selected: val,
                items: selectedList,
                values,
                texts,
            });
        }
    },

    '@{toggle.all.list}<change>'(e) {
        e.stopPropagation();
        let { list, listCount, selectedList, max } = this.updater.get();
        let checked = e.target.checked;
        let remain = (max > 0) ? (max - listCount - selectedList.length) : list.length;

        list.forEach(item => {
            if (!item.disabled) {
                if (!checked) {
                    // 取消选择
                    item.checked = checked;
                } else if (checked && remain > 0 && !item.checked) {
                    // 选中
                    item.checked = checked;
                    remain--;
                }
            }
        });

        this.updater.set({
            list,
        });
        this['@{val}']();
    },
    '@{toggle.all.selected}<change>'(e) {
        e.stopPropagation();
        let { selectedList } = this.updater.get();
        let checked = e.target.checked;
        selectedList.forEach(item => {
            item.checked = checked;
        });

        this.updater.set({
            selectedList,
        });
        this['@{val}']();
    },
    '@{toggle.list}<change>'(e) {
        e.stopPropagation();
        let { itemIndex } = e.params;
        let checked = e.target.checked;
        let { list } = this.updater.get();
        list[itemIndex].checked = checked;
        this.updater.set({
            list,
        });
        this['@{val}']();
    },
    '@{toggle.selected}<change>'(e) {
        e.stopPropagation();
        let { itemIndex } = e.params;
        let checked = e.target.checked;
        let { selectedList } = this.updater.get();
        selectedList[itemIndex].checked = checked;
        this.updater.set({
            selectedList,
        });
        this['@{val}']();
    },
    'add<click>'(e) {
        let { list, selectedList } = this.updater.get();
        let addList = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].checked) {
                let item = list[i];
                item.checked = false;
                addList.push(item);
                list.splice(i--, 1)
            }
        }

        this.updater.set({
            list,
            selectedList: selectedList.concat(addList),
        });
        this['@{val}'](true);
    },
    'remove<click>'(e) {
        let { list, selectedList } = this.updater.get();
        let removeList = [];
        for (let i = 0; i < selectedList.length; i++) {
            if (selectedList[i].checked) {
                let item = selectedList[i];
                item.checked = false;
                removeList.push(item);
                selectedList.splice(i--, 1)
            }
        }

        this.updater.set({
            list: list.concat(removeList),
            selectedList,
        });
        this['@{val}'](true);
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    },
});
