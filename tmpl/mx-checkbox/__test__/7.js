let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@7.html',
    mixins: [Form, Validator],
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

        let list2 = JSON.parse(JSON.stringify(list1));
        list2[1].disabled = true;
        list2[1].disabledTip = '禁用提示信息';

        this.updater.digest({
            list1,
            selected1: [list1[0].value],
            list2,
            selected2: [list2[0].value]
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