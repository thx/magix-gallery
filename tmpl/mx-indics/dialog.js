let Magix = require('magix');
let View = require('zs_scaffold/view')
let Fields = require('@./fields');
Magix.applyStyle('@index.less');

module.exports = View.extend({
    tmpl: '@dialog.html',
    init(e) {
        let fields = Fields.getAllFields();
        let selectedKeys = e.selected || [];
        let selected = [];

        selectedKeys.forEach(selectedKey => {
            for (var i = 0; i < fields.length; i++) {
                let field = fields[i];
                if (field.key == selectedKey) {
                    field.checked = true;
                    selected.push({
                        key: field.key,
                        label: field.label
                    })
                    break;
                }
            }
        })

        let groups = [],
            gap = 3;
        let num = Math.ceil(fields.length / gap);
        for (var i = 0; i < num; i++) {
            groups.push(fields.slice(i * gap, (i + 1) * gap));
        }

        this.updater.set({
            fields: fields,
            groups: groups,
            selected: selected,
            limit: (e.limit || 0),
            sortable: e.sortable || false
        })
        this.viewOptions = e;
    },
    render() {
        this.updater.digest({});
    },
    'toggle<change>': function(e) {
        let that = this;
        let checked = e.target.checked;
        let key = e.params.key,
            label = e.params.label;

        let updater = that.updater;

        let fields = updater.get('fields');
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].key == key) {
                fields[i].checked = checked;
                break;
            }
        }

        let selected = updater.get('selected');
        if (checked) {
            selected.push({
                key: key,
                label: label
            })
        } else {
            for (var i = 0; i < selected.length; i++) {
                if (selected[i].key == key) {
                    selected.splice(i, 1);
                    break;
                }
            }
        }

        updater.digest({
            fields: fields,
            selected: selected
        });
    },
    'drag<dragfinish>' (e) {
        // 重排序之后的
        let selected = [];
        let drags = $('#' + this.id + ' .@setting.less:drag');
        for (var i = 0, len = drags.length; i < len; i++) {
            let drag = $(drags[i]);
            selected.push({
                key: drag.data('key'),
                label: drag.data('label')
            })
        }
        this.updater.digest({
            selected: selected
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
            selected: []
        });
    },

    'submit<click>' (event) {
        event.preventDefault();
        let selected = this.updater.get('selected');
        if (selected.length == 0) {
            this.updater.digest({
                error: true
            })
            return;
        }

        let selectedKeys = selected.map(item => {
            return item.key;
        })

        let viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }

        if (viewOptions.pageKey) {
            Fields.setMemberConfig(viewOptions.pageKey, selectedKeys);
        }
        if (viewOptions.callback) {
            Magix.toTry(viewOptions.callback(selectedKeys));
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