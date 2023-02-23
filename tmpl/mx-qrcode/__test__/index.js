let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'url',
            desc: '生成二维码的链接',
            type: 'string'
        }, {
            key: 'size',
            desc: '二维码宽度',
            type: 'number',
            def: 80
        }, {
            key: 'trigger-type',
            desc: '二维码展示方案，直接展示（flat），hover浮层展示（hover）',
            type: 'string',
            def: 'flat'
        }, {
            key: 'content',
            desc: 'trigger-type="hover"时，显示的内容',
            type: 'string'
        }, {
            key: 'placement',
            desc: 'trigger-type="hover"时，提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px',
            type: 'string',
            def: 'bottom'
        }, {
            key: 'align',
            desc: 'trigger-type="hover"时，提示框与目标的对齐方式，top，bottom，left，right，center',
            type: 'string',
            def: 'center'
        }]
        this.updater.digest({
            viewId: this.id,
            options,
        });
    }
});