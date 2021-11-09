let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@28.html',
    render() {
        this.updater.digest({
            parents: [{
                value: 1,
                text: '第一组'
            }, {
                value: 2,
                text: '第二组'
            }],
            list: [{
                value: 1,
                text: '选项1',
                pValue: 1
            }, {
                value: 2,
                text: '选项2',
                pValue: 1
            }, {
                value: 3,
                text: '选项3',
                pValue: 2
            }, {
                value: 4,
                text: '选项4',
                pValue: 1
            }, {
                value: 5,
                text: '选项5',
                pValue: 2
            }, {
                value: 6,
                text: '选项6',
                pValue: 2
            }],
            selected: [2, 3]
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});