let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        let list1 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }];

        this.updater.digest({
            list1,
            selected1: [list1[0].value],
            selected2: list1[0].value
        });
    },

    'change<change>'(e) {
        this.updater.digest({
            [`selected${e.params.index}`]: e.selected
        })
    },

    'toggleDisabled<click>'(e) {
        let data = this.updater.get();
        [1, 2, 3, 4, 5].forEach(index => {
            data[`list${index}`].forEach(item => {
                item.disabled = e.params.disabled;
            })
        });
        this.updater.digest(data);
    }
});