let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'fd-id',
            desc: '反馈表单id',
            type: 'number',
            def: ''
        }, {
            key: 'fd-frequency',
            desc: '频率控制，all（每次弹出），one（只弹出一次），autoShowByRemote（平台控制是否自动弹出）',
            type: 'string',
            def: 'one'
        }, {
            key: 'fd-style',
            desc: '附加到外层容器的样式，驼峰传入<br/>默认相对当前节点下居中定位',
            type: 'object',
            def: '{}'
        },
        {
            key: 'placement',
            desc: '提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px',
            type: 'string',
            def: 'top'
        }, {
            key: 'align',
            desc: '提示框与目标的对齐方式，top，bottom，left，right，center',
            type: 'string',
            def: 'right'
        },  {
            key: 'trigger-type',
            desc: '浮层反馈浮层的方式，可选点击（click），默认展开（auto），云端控制（autoShowByRemote）',
            type: 'string',
            def: 'click'
        }, {
            key: 'need-mask',
            desc: '是否需要蒙层',
            type: 'boolean',
            def: 'false'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});