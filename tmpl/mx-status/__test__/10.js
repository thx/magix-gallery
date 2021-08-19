let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@10.html',
    mixins: [Form, Validator],
    render() {
        let opers = [{
            value: 0,
            text: '暂停投放',
            icon: '<i class="mc-iconfont">&#xe734;</i>',
            color: 'var(--color-red)'
        }, {
            value: 1,
            text: '正在投放',
            icon: '<i class="mc-iconfont">&#xe735;</i>',
            color: 'var(--color-green)'
        }, {
            value: 9,
            text: '结束投放',
            icon: '<i class="mc-iconfont">&#xe6dd;</i>',
            color: '#666666'
        }]

        this.updater.digest({
            opers,
            selected: opers[1].value
        });
    }
});