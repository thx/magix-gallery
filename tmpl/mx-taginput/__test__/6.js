let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@6.html',
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
                text: 'test1',
                pValue: 1
            }, {
                value: 2,
                text: 'TEST_INFO',
                pValue: 1
            }, {
                value: 3,
                text: '测试选项1',
                pValue: 2
            }, {
                value: 4,
                text: '选项2',
                pValue: 1
            }, {
                value: 5,
                text: 'Hello',
                pValue: 2
            }, {
                value: 6,
                text: 'user_name',
                pValue: 2
            }],
            selected1: [1, 2],
            selected2: '1,2',
            selected3: ''
        });
    },
    'change<change>'(e) {
        let index = e.params.index;

        // e.selected：原先为数组则为数据，原先为字符串就是字符串，默认字符串
        // e.items：array，选中完成对象
        this.updater.digest({
            [`selected${index}`]: e.selected
        });
    }
});