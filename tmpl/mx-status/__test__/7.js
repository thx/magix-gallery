let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        let opers = [{
            value: 1,
            text: '正在投放',
            icon: '<i class="mc-iconfont">&#xe735;</i>',
            color: 'var(--color-green)'
        }, {
            value: 9,
            text: '结束投放',
            confirmTitle: '系统提示',
            confirmContent: '确认结束投放吗？',
            icon: '<i class="mc-iconfont">&#xe6dd;</i>',
            color: '#666666'
        }];
        this.updater.digest({
            info: {
                value: -99,
                text: '投放故障',
                icon: '<i class="mc-iconfont">&#xe734;</i>',
                color: 'var(--color-red)'
            },
            opers,
            cur: opers[0]
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