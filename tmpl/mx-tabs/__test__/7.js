let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest({
            list: [{
                text: '投影版',
                value: 'shadow'
            }, {
                text: '离散点',
                value: 'discrete'
            }, {
                text: '分割线（默认样式）',
                value: 'spliter'
            }],
            data: [{
                text: '模块1',
                value: 1,
                tag: 'HOT',
            }, {
                text: '模块2',
                value: 2,
            }, {
                text: '模块3',
                value: 3,
            }],
            disabledData: [{
                text: '模块选项1',
                value: 1,
            }, {
                text: '模块选项2',
                value: 2,
            }, {
                text: '模块选项3',
                value: 3,
            }]
        });
    }
});