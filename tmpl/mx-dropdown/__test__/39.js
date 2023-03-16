let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@39.html',
    render() {
        this.updater.digest({
            list: [{
                value: 1,
                text: 'test',
                tip: '提示信息',
                tag: 'HOT'
            }, {
                value: 2,
                text: 'TestABC',
                tagContent: '<span style="position: absolute; left: 0; top: -6px; width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-red);"></span>',
            }, {
                value: 3,
                text: 'Another',
                detail: '额外的提示信息，<a href="https://www.taobao.com/" target="_blank" class="color-brand">查看详情</a>'
            }, {
                value: 4,
                text: '测试'
            }],
            selected1: 2,
            selected2: 2,
        });
    },
    'change<change>'(event) {
        this.updater.digest({
            selected1: event.selected
        })
    }
});