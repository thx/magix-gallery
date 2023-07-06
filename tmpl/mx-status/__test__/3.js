let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        let list = [{
            value: 0,
            text: '暂停投放',
            icon: '<i class="mx-iconfont">&#xe711;</i>',
            color: '#999999'
        }, {
            value: 1,
            text: '正在投放',
            icon: '<i class="mx-iconfont">&#xe713;</i>',
            color: 'var(--color-green)'
        }]

        this.updater.digest({
            info: {
                value: -99,
                text: '故障提醒',
                tip: '当前计划预算消耗完即将下线',
                icon: '<i class="mx-iconfont">&#xe712;</i>',
                color: 'var(--color-red)'
            },
            list,
            selected: list[0].value
        });
    }
});