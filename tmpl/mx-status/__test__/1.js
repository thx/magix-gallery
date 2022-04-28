let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
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
            color: '#999999'
        }]

        this.updater.digest({
            opers,
            cur: opers[1]
        });
    },
    'change<change>'(e){
        // e.status 完整的对象
        //      value
        //      text
        this.updater.digest({
            cur: e.status
        });
    }
});