let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        let list = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/imgextra/i3/O1CN01vZt5WD1XFxHipYrw1_!!6000000002895-2-tps-160-160.png" />',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN011iQoCI1YlqTiaGDGf_!!6000000003100-2-tps-160-160.png"/>',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '通过智能需求平台，实现拉新快、上新快、线索通、会员快、货品加速等营销诉求<br/><span class="color-brand">点击外链跳转查看</span>',
            icon: '<img src="https://img.alicdn.com/imgextra/i3/O1CN01GwJniw1sleczUiFKO_!!6000000005807-2-tps-160-160.png"/>',
            link: 'https://www.taobao.com/',
        }];
        this.updater.digest({
            list,
            selected: list[0].value
        });
    },

    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});