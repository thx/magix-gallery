let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@11.html',
    render() {
        let list = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/imgextra/i3/O1CN0152J1BU1FAJJvA9eij_!!6000000000446-2-tps-154-154.png"/>',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            tags: [{
                text: 'hover提示',
                tip: 'hover到标签上可见提示信息'
            }, {
                text: '文案'
            }],
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN01Y65sM11syTiZUfzyb_!!6000000005835-2-tps-152-152.png" />',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<img src="https://img.alicdn.com/imgextra/i2/O1CN01F0CE081yssZLdMOCi_!!6000000006635-2-tps-152-152.png" />',
        }];

        this.updater.digest({
            list,
            selected: list[0].value,
        });
    },
});