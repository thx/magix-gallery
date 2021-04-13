let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@5.html',
    mixins: [Form, Validator],
    render() {
        let list = [{
            text: '选项1',
            value: 1,
            tip: '选项说明1说明文案第一行<br/>说明文案第二行',
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN01KKd4fd1sfhTb2w87P_!!6000000005794-2-tps-160-176.png" />'
        }, {
            text: '选项2',
            value: 2,
            tip: '选项说明2说明文案第一行<br/>说明文案第二行',
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN01KKd4fd1sfhTb2w87P_!!6000000005794-2-tps-160-176.png" />'
        }, {
            text: '选项3',
            value: 3,
            tip: '通过智能需求平台，实现拉新快、上新快、线索通、会员快、货品加速等营销诉求<br/><span class="color-brand">点击外链跳转查看</span>',
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN01KKd4fd1sfhTb2w87P_!!6000000005794-2-tps-160-176.png" />'
            link: 'https://www.taobao.com/'
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