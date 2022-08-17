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
            icon: '<i class="mx-iconfont">&#xe711;</i>',
            color: 'var(--color-red)'
        }, {
            value: 1,
            text: '正在投放',
            icon: '<i class="mx-iconfont">&#xe713;</i>',
            color: 'var(--color-green)'
        }, {
            value: 9,
            text: '结束投放',
            icon: '<i class="mx-iconfont">&#xe613;</i>',
            color: '#999999'
        }]

        this.updater.digest({
            opers,
            selected: opers[1].value
        });
    }
});