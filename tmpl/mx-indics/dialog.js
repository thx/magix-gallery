let Magix = require('magix');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@dialog.html',
    init(e) {
        let selected = e.selected || [],
            fields = e.fields || [],
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

        // 分组，一行三个
        let groups = [],
            gap = 3;
        let num = Math.ceil(fields.length / gap);
        for (var i = 0; i < num; i++) {
            groups.push(fields.slice(i * gap, (i + 1) * gap));
        }
        this.updater.set({
            fields: fields,
            groups: groups,
            selectedItems: selectedItems,
            limit: e.limit,
            sortable: e.sortable
        })
        this.viewOptions = e;
    },
    render() {
        this.updater.digest({});
    },
    'toggle<change>': function(e) {
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
            if(sortable){
                // 可排序的时候在最后添加
                selectedItems.push({
                    value: value,
                    text: text
                })
            }else{
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
    'drag<dragfinish>' (e) {
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

    'clear<click>' () {
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

    'submit<click>' (event) {
        event.preventDefault();
        let selectedItems = this.updater.get('selectedItems');
        if (selectedItems.length == 0) {
            this.updater.digest({
                error: true
            })
            return;
        }

        let selected = selectedItems.map(item => {
            return item.value;
        })

        let viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }

        if (viewOptions.callback) {
            Magix.toTry(viewOptions.callback(selected));
        }

    },
    'cancel<click>' (event) {
        event.preventDefault();
        let viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});