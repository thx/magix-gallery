let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        let list = [{
            value: 1,
            text: '正在投放',
            icon: '<i class="mx-iconfont">&#xe713;</i>',
            color: 'var(--color-green)'
        }, {
            value: 9,
            text: '结束投放',
            icon: '<i class="mx-iconfont">&#xe613;</i>',
            color: '#999999'
        }];
        this.updater.digest({
            info: {
                value: -99,
                text: '投放故障',
                icon: '<i class="mx-iconfont">&#xe711;</i>',
                color: 'var(--color-red)'
            },
            list,
            cur: list[0]
        });
    },
    'change<change>'(e) {
        // e.status 完整的对象
        //      value
        //      text
        this.updater.digest({
            cur: e.status
        });
    }
});