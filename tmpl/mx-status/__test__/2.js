let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            tipInfo: {
                value: 1,
                text: '正在投放',
                icon: '<i class="@scoped.style:mc-iconfont">&#xe683;</i>',
                tip: '当前正在投放中<br/>换一行',
                color: '#51a300'
            },
            viewInfo: {
                value: 1,
                text: '正在投放',
                icon: '<i class="@scoped.style:mc-iconfont">&#xe683;</i>',
                tipView: '@./tip',
                tipData: {
                    tag: '预算过低',
                    tip: '建议修改预算至10000（+15%），相比当前展现量+35%，点击量+20%'
                },
                color: '#51a300'
            }
        });
    }
});