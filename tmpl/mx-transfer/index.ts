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
            selected = extra.selected;
        } else {
            // 字符串
            selected = (extra.selected === undefined || extra.selected === null) ? [] : (extra.selected + '').split(',');
        };
        let selectedMap = Magix.toMap(selected);

        let selectedList = [],  // 已选列表
            list = []; // 可操作列表
        (extra.list || []).forEach(item => {
            if (selectedMap[item[valueKey]]) {
                selectedList.push(item);
            } else {
                list.push(item);
            }
        });

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
    type(selected, all, max) {
        // 1: 全不选；2：部分选中；3：全选；
        return ((!max && selected > 0 && selected == all) || (max > 0 && selected > 0 && selected == max)) ? 3 : (selected == 0 ? 1 : 2);
    },
    render() {
        this['@{val}']();
    },
    '@{val}'(fire) {
        let { list, selectedList, textKey, valueKey, max } = this.updater.get();
        let la = 0, ls = 0;
        list.forEach(item => {
            if (!item.disabled) {
                la++;
                if (item.checked) {
                    ls++;
                }
            }
        });

        let sa = 0, ss = 0,
            texts = [], values = [];
        selectedList.forEach(item => {
            texts.push(item[textKey]);
            values.push(item[valueKey]);
            sa++;
            if (item.checked) {
                ss++;
            }
        })

        let val;
        if (this['@{bak.type}'] == 'array') {
            // 初始化为数组
            val = values;
        } else {
            // 初始化为字符串
            val = values.join(',');
        }

        this.updater.digest({
            listType: this.type(ls, la, max),
            selectedListType: this.type(ss, sa, max),
        })

        this['@{owner.node}'].val(val);
        if (fire) {
            this['@{owner.node}'].trigger({
                type: 'change',
                selected: val,
                items: selectedList,
                values,
                texts,
            });
        }
    },
    '@{check.all}<change>'(e) {
        e.stopPropagation();
        let { max } = this.updater.get();
        let { key } = e.params;
        let checked = e.target.checked;
        let list = this.updater.get(key);

        let selected = 0, all = 0;
        list.forEach(item => {
            // 已选列表忽略禁用态
            if ((key == 'list' && !item.disabled) || (key == 'selectedList')) {
                all++;
                item.checked = checked;

                if (item.checked) {
                    selected++;
                }
            }
        })

        this.updater.digest({
            [key + 'Type']: this.type(selected, all, max),
            [key]: list,
        })
    },
    '@{check}<change>'(e) {
        e.stopPropagation();
        let { max } = this.updater.get();
        let { key, itemIndex } = e.params;
        let checked = e.target.checked;
        let list = this.updater.get(key);
        list[itemIndex].checked = checked;

        let selected = 0, all = 0;
        list.forEach(item => {
            // 已选列表忽略禁用态
            if ((key == 'list' && !item.disabled) || (key == 'selectedList')) {
                all++;

                if (item.checked) {
                    selected++;
                }
            }
        })

        this.updater.digest({
            [key + 'Type']: this.type(selected, all, max),
            [key]: list,
        })
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

        this.updater.digest({
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

        this.updater.digest({
            list: list.concat(removeList),
            selectedList,
        });
        this['@{val}'](true);
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    },
});
