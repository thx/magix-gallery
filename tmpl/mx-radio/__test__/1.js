let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let list = [{
            text: '选项文案',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['<i class="mc-iconfont">&#xe601;</i>', '<i class="mc-iconfont">&#xe601;</i>'],
            icon: '<i class="mc-iconfont">&#xe621;</i>',
            disabled: true,
        }, {
            text: '选项文案',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/imgextra/i2/O1CN01toBjL81iilycAZOjM_!!6000000004447-2-tps-160-176.png" />',
            disabled: true,
        }, {
            text: '选项文案',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<i class="mc-iconfont">&#xe621;</i>',
            disabled: true,
        }];

        this.updater.digest({
            selected: list[0].value,
            list,
            list1: [{
                text: '选项文案',
                value: 1,
                tip: '选项说明文案一行或者两行高度一致',
                icon: '<i class="mc-iconfont">&#xe621;</i>',
                disabled: true,
            }, {
                text: '选项文案',
                value: 2,
                tip: '选项说明文案一行或者两行高度一致',
                icon: '<img src="https://img.alicdn.com/imgextra/i2/O1CN01toBjL81iilycAZOjM_!!6000000004447-2-tps-160-176.png" />',
                disabled: true,
            }, {
                text: '选项文案',
                value: 3,
                tip: '选项说明文案一行或者两行高度一致',
                icon: '<i class="mc-iconfont">&#xe621;</i>',
                disabled: true,
            }]
        });
    }
});