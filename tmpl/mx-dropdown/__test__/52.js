let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@52.html',
    render() {
        let list = [{
            text: '请选择',
            value: 0,
            opers: []
        }, {
            text: '选项1',
            value: 1,
            opers: ['edit', 'delete'],
        }, {
            text: '选项2',
            value: 2,
            opers: ['edit', 'delete'],
        }, {
            text: '选项3',
            value: 3,
            opers: ['edit', 'delete'],
        }];

        this.updater.digest({
            list,
            selected: list[0].value,
            operationType: '',
            operationItem: {},
        });
    },
    'change<change>'(e) {
        let { operationType, operationItem } = e;
        let { list } = this.updater.get();
        if (operationType == 'delete') {
            for (let i = 0; i < list.length; i++) {
                if (list[i].value == operationItem.value) {
                    list.splice(i, 1);
                    break;
                }
            }
        }
        this.updater.digest({
            operationType,
            operationItem,
        })
    }
});