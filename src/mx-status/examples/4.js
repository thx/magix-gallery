let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@4.html',
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
            icon: '<i class="mc-iconfont">&#xe682;</i>',
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