let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
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

        let list2 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['<i class="mc-iconfont">&#xe601;</i>', '<i class="mc-iconfont">&#xe601;</i>'],
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }];

        let list3 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['<i class="mc-iconfont">&#xe601;</i>', '<i class="mc-iconfont">&#xe601;</i>'],
            icon: '<img src="https://img.alicdn.com/imgextra/i3/O1CN01vZt5WD1XFxHipYrw1_!!6000000002895-2-tps-160-160.png" />',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN011iQoCI1YlqTiaGDGf_!!6000000003100-2-tps-160-160.png"/>',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<img src="https://img.alicdn.com/imgextra/i3/O1CN01GwJniw1sleczUiFKO_!!6000000005807-2-tps-160-160.png"/>',
        }];

        let list4 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['<i class="mc-iconfont">&#xe601;</i>', '<i class="mc-iconfont">&#xe601;</i>'],
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }];

        let list5 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN01KKd4fd1sfhTb2w87P_!!6000000005794-2-tps-160-176.png"/>',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<img src="https://img.alicdn.com/imgextra/i2/O1CN01toBjL81iilycAZOjM_!!6000000004447-2-tps-160-176.png" />',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<img src="https://img.alicdn.com/imgextra/i4/O1CN01DshLwk1V3TFm6pobG_!!6000000002597-2-tps-160-176.png" />',
        }]

        this.updater.digest({
            list1,
            selected1: list1[0].value,
            list2,
            selected2: list2[0].value,
            list3,
            selected3: list3[0].value,
            list4,
            selected4: list4[0].value,
            list5,
            selected5: list5[0].value,
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