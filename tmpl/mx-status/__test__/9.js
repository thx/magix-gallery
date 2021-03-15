let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@9.html',
    mixins: [Form, Validator],
    render() {
        let opers = [{
            value: 0,
            text: '暂停投放',
            icon: '<i class="mc-iconfont">&#xe67f;</i>',
            color: '#a40100'
        }, {
            value: 1,
            text: '正在投放',
            icon: '<i class="mc-iconfont">&#xe683;</i>',
            color: '#51a300'
        }, {
            value: 9,
            text: '结束投放',
            confirmTitle: '系统提示',
            confirmContent: '确认结束投放吗？',
            icon: '<i class="mc-iconfont">&#xe682;</i>',
            color: '#999999'
        }]

        this.updater.digest({
            opers,
            selected: opers[1].value
        });
    }
});