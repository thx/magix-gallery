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
            icon: '<i class="mc-iconfont">&#xe734;</i>',
            color: '#a40100'
        }, {
            value: 1,
            text: '正在投放',
            icon: '<i class="mc-iconfont">&#xe735;</i>',
            color: '#51a300'
        }, {
            value: 9,
            text: '结束投放',
            confirmTitle: '系统提示',
            confirmContent: '确认结束投放吗？',
            icon: '<i class="mc-iconfont">&#xe6dd;</i>',
            color: '#999999'
        }]

        this.updater.digest({
            opers,
            selected: opers[1].value
        });
    }
});