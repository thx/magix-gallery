let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest({
            list: [{
                text: '空心默认',
                value: 'hollow'
            }, {
                text: '分割线',
                value: 'spliter'
            }],
            data: [{
                text: '模块1',
                value: 1,
                tip: '提示信息'
            }, {
                text: '模块2',
                value: 2
            }, {
                text: '模块3',
                value: 3
            }]
        });
    }
});