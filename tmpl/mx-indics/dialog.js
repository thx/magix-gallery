let Magix = require('magix');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@dialog.html',
    init(e) {
        let selected = e.selected || [],
            fields = e.fields || [],
            parents = e.parents || [];
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

        let sortable = e.sortable;

        
        let groups = [], hasParent;
        if(parents.length > 0){
            // 有分组
            groups = parents.map(p => {
                let fs = [];
                fields.forEach(f => {
                    if(f.pValue == p.value){
                        fs.push(f);
                    }
                })
                return {
                    text: p.text,
                    fields: fs
                }
            })
            hasParent = true;
        }else{
            // 可排序：一行三个
            // 不可排序：一行四个
            let gap = sortable ? 4 : 5;
            let num = Math.ceil(fields.length / gap);
            for (var i = 0; i < num; i++) {
                let group = {
                    fields: fields.slice(i * gap, (i + 1) * gap)
                }
                groups.push(group);
            }
            hasParent = false;
        }

        this.updater.set({
            hasParent,
            sortable,
            fields,
            groups,
            selectedItems,
            limit: e.limit
        })
        this.viewOptions = e;
    },
    render() {
        this.updater.digest({});
    },
    'toggle<change>': function (e) {
        let that = this;
        let checked = e.target.checked;
        let value = e.params.value,
            text = e.params.text;
        let updater = that.updater;

        let fields = updater.get('fields');
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value == value) {
                fields[i].checked = checked;
                break;
            }
        }

        let selectedItems = updater.get('selectedItems'),
            sortable = updater.get('sortable');
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
        let drags = $('#' + this.id + ' .@index.less:drag');
        for (var i = 0, len = drags.length; i < len; i++) {
            let drag = $(drags[i]);
            selectedItems.push({
                value: drag.data('value'),
                text: drag.data('text')
            })
        }
        this.updater.digest({
            selectedItems
        });
    },

    'clear<click>'() {
        let that = this;
        let updater = that.updater;

        let fields = updater.get('fields');
        fields.forEach(field => {
            field.checked = false;
        })

        updater.digest({
            fields: fields,
            selectedItems: []
        });
    },

    check() {
        event.preventDefault();
        let selectedItems = this.updater.get('selectedItems');
        let selected = selectedItems.map(item => {
            return item.value;
        })
    
        return new Promise((resolve) => {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok: (selected.length > 0),  
                msg: '请至少选择一个指标',
                data: {
                    selected
                }
            })
        })
    }
});