import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@dialog.html',
    init(e) {
        let textMode = (e.mode == 'custom' && e.display == 'text'),
            fields = e.fields || [],
            parents = e.parents || [],
            selected = e.selected || [],
            selectedItems = [],
            lineNumber = e.lineNumber; // 每行多少个指标

        selected.forEach(value => {
            for (let i = 0; i < fields.length; i++) {
                let field = fields[i];
                if (field.value + '' === value + '') {
                    // 按照指标的配置顺序
                    field.checked = true;
                    selectedItems.push(field);
                    break;
                }
            }
        })

        let groups = [];
        if (parents.length > 0) {
            // 有分组
            parents.forEach(p => {
                let fs = [];
                fields.forEach(f => {
                    if (f.pValue == p.value) {
                        fs.push(f);
                    }
                })
                groups.push({
                    ...p,
                    fields: fs
                })
            })
        } else {
            let num = Math.ceil(fields.length / lineNumber);
            for (let i = 0; i < num; i++) {
                groups.push({
                    fields: fields.slice(i * lineNumber, (i + 1) * lineNumber)
                });
            }
        }

        let width;
        if (textMode) {
            width = `calc((100% - var(--output-h-gap, 24px) * ${lineNumber + 1}) / ${lineNumber})`;
        } else {
            width = Math.floor(100 / lineNumber) + '%';
        }

        this.updater.set({
            textMode,
            width,
            hasParent: (parents.length > 0),
            groups,
            fields,
            selectedItems,
            sortable: e.sortable,
            max: e.max,
            min: e.min,
            tip: e.tip
        })
        this.viewOptions = e;
    },

    render() {
        this.syncParents();
    },

    'toggle<change>'(e) {
        let that = this;
        let checked = e.target.checked;
        let { value, text } = e.params;

        let { fields, selectedItems, sortable } = that.updater.get();
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].value == value) {
                fields[i].checked = checked;
                break;
            }
        }

        if (checked) {
            // 选择
            if (sortable) {
                // 可排序的时候在最后添加
                selectedItems.push({
                    value: value,
                    text: text
                })
            } else {
                // 不可选择时按照列表顺序
                selectedItems = fields.filter(item => {
                    return item.checked;
                })
            }
        } else {
            // 移除
            for (let i = 0; i < selectedItems.length; i++) {
                if (selectedItems[i].value == value) {
                    selectedItems.splice(i, 1);
                    break;
                }
            }
        }

        that.updater.set({
            fields,
            selectedItems
        });
        that.syncParents();
    },

    /**
     * 重新排序
     */
    'drag<dragfinish>'(e) {
        let selectedItems = [];
        let drags = document.querySelectorAll('#' + this.id + ' .@index.less:drag');
        for (let i = 0, len = drags.length; i < len; i++) {
            let attrs = drags[i].attributes;
            selectedItems.push({
                value: attrs['data-value'].value,
                text: attrs['data-text'].value
            })
        }
        this.updater.digest({
            selectedItems
        });
    },

    /**
     * 恢复默认设置
     */
    'reset<click>'() {
        let that = this;
        // 默认指标        
        let defaults = that.viewOptions.map[1].list;
        let { fields } = that.updater.get();
        let selectedItems = [];
        fields.forEach(field => {
            if (!field.disabled) {
                field.checked = (defaults.indexOf(field.value + '') > -1);
            }
            if (field.checked) {
                selectedItems.push(field);
            }
        })
        that.updater.set({
            fields,
            selectedItems
        });
        that.syncParents();
    },

    /**
     * 清空
     */
    'clear<click>'() {
        let that = this;
        let { fields } = that.updater.get();
        let selectedItems = [];
        fields.forEach(field => {
            if (!field.disabled) {
                field.checked = false;
            }

            // 可能有禁选已选中的
            if (field.checked) {
                selectedItems.push(field);
            }
        })

        that.updater.set({
            fields,
            selectedItems,
        });
        that.syncParents();
    },

    'toggleParent<change>'(e) {
        let checked = e.target.checked;
        let { groupIndex } = e.params;
        let { groups, selectedItems, max } = this.updater.get();

        if (checked) {
            // 选中
            groups[groupIndex].fields.forEach(field => {
                if (!field.disabled && !field.checked && (max == 0 || (max > 0 && selectedItems.length < max))) {
                    field.checked = true;
                    selectedItems.push(field);
                }
            })
        } else {
            // 删除
            groups[groupIndex].fields.forEach(field => {
                if (!field.disabled) {
                    field.checked = false;
                    for (let i = 0; i < selectedItems.length; i++) {
                        if (selectedItems[i].value == field.value) {
                            selectedItems.splice(i, 1);
                            break;
                        }
                    }
                }
            })
        }
        this.updater.set({
            groups,
            selectedItems
        })
        this.syncParents();
    },

    /**
     * 计算组状态
     */
    syncParents() {
        let { groups } = this.updater.get();
        groups.forEach(g => {
            let len = g.fields.length;
            let dc = 0, // 分组内禁用count
                sc = 0; // 分组内选中个数
            g.fields.forEach(f => {
                if (f.disabled) {
                    dc++;
                }
                if (f.checked) {
                    sc++;
                }
            })

            // 全部禁用
            g.disabled = (dc > 0 && dc == len);

            // 部分选中
            g.indeterminate = (sc > 0 && sc < len);

            // 全选
            g.checked = (sc > 0 && sc == len);
        });

        this.updater.digest({
            groups
        })
    },

    check() {
        let { selectedItems, min, max } = this.updater.get();
        let selected = selectedItems.map(item => {
            return item.value;
        });

        return new Promise((resolve) => {
            // 此处返回promise，防止有接口提交校验等
            let len = selected.length;
            resolve({
                ok: ((len >= min) && (max == 0 || (max > 0 && len <= max))),
                msg: `请至少选择&nbsp;${min}&nbsp;个指标${(max > 0) ? ('，至多选择&nbsp;' + max + '&nbsp;个指标') : ''}`,
                data: {
                    selected
                }
            })
        })
    }
});
