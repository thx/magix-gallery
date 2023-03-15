let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@12.html',
    render() {
        let list1 = [{
            name: '选项文案1',
            code: 1,
            description: '选项说明文案一行或者两行高度一致',
            properties: {
                icon: '<i class="mc-iconfont">&#xe621;</i>',
                tip: '额外的提示信息，<a href="https://www.taobao.com/" target="_blank" class="color-brand">查看详情</a>'
            }
        }, {
            name: '选项文案2',
            code: 2,
            description: '选项说明文案一行或者两行高度一致',
            properties: {
                tag: 'HOT',
                tags: ['测试', '测试'],
                icon: '<i class="mc-iconfont">&#xe621;</i>',
            }
        }, {
            name: '选项文案3',
            code: 3,
            description: '选项说明文案一行或者两行高度一致',
            properties: {
                icon: '<i class="mc-iconfont">&#xe621;</i>',
            }
        }];

        this.updater.digest({
            list1,
            selected1: list1[0].code,
            selected2: list1[0].code,
        });
    },
});