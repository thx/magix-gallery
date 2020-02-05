import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@dialog.html',
    init(e) {
        let selected = e.selected || [],
            fields = e.fields || [],
            parents = e.parents || [],
            selectedItems = [];

        selected.forEach(value => {
            for (var i = 0; i < fields.length; i++) {
                let field = fields[i];
                if (field.value == value) {
                    field.checked = true;
                    selectedItems.push({
                        value: field.value,
                        text: field.text
                    })
                    break;
                }
            }
        })

        let lineNumber = e.lineNumber;

        let groups = [], hasParent;
        if (parents.length > 0) {
            // 有分组
            groups = parents.map(p => {
                let fs = [];
                fields.forEach(f => {
                    if (f.pValue == p.value) {
                        fs.push(f);
                    }
                })
                return {
                    text: p.text,
                    fields: fs
                }
            })
            hasParent = true;
        } else {
            let num = Math.ceil(fields.length / lineNumber);
            for (var i = 0; i < num; i++) {
                let group = {
                    fields: fields.slice(i * lineNumber, (i + 1) * lineNumber)
                }
                groups.push(group);
            }
            hasParent = false;
        }
        this.updater.set({
            width: Math.floor(100 / lineNumber) + '%',
            hasParent,
            sortable: e.sortable,
            fields,
            groups,
            selectedItems,
            max: e.max,
            min: e.min,
            tip: e.tip
        })
        this.viewOptions = e;
    },
    render() {
        this.updater.digest({});
    },
    'toggle<change>': function (e) {
        let that = this;
        let checked = e.target.checked;
        let { value, text } = e.params;
        let updater = that.updater;

        let { fields, selectedItems, sortable } = updater.get();
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value == value) {
                fields[i].checked = checked;
                break;
            }
        }

        if (checked) {
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
            for (var i = 0; i < selectedItems.length; i++) {
                if (selectedItems[i].value == value) {
                    selectedItems.splice(i, 1);
                    break;
                }
            }
        }

        updater.digest({
            fields,
            selectedItems
        });
    },
    'drag<dragfinish>'(e) {
        // 重排序之后的
        let selectedItems = [];
        let drags = document.querySelectorAll('#' + this.id + ' .@index.less:drag');
        for (var i = 0, len = drags.length; i < len; i++) {
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
        let fields = that.updater.get('fields');
        let selectedItems = [];
        fields.forEach(field => {
            field.checked = (defaults.indexOf(field.value + '') > -1);
            if (field.checked) {
                selectedItems.push(field);
            }
        })
        that.updater.digest({
            fields,
            selectedItems
        });
    },

    'clear<click>'() {
        let that = this;
        let fields = that.updater.get('fields');
        fields.forEach(field => {
            field.checked = false;
        })

        that.updater.digest({
            fields,
            selectedItems: []
        });
    },

    check() {
        event.preventDefault();
        let { selectedItems, min } = this.updater.get();
        let selected = selectedItems.map(item => {
            return item.value;
        })

        return new Promise((resolve) => {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok: (selected.length >= min),
                msg: `请至少选择 ${min} 个指标`,
                data: {
                    selected
                }
            })
        })
    }
});
