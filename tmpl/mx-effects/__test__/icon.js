let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@icon.html',
    render() {
        let options = [{
            key: 'mode',
            desc: 'icon类型<br/>solid：实心圆角打标<br/>solid-square：实心方形打标<br/>hollow：空心圆角打标<br/>hollow-square：空心方形打标<br/>opacity：透明背景色圆角打标<br/>opacity-square：透明背景色方形打标<br/>dot：圆点打标',
            type: 'string',
            def: 'solid'
        }, {
            key: 'type',
            desc: [
                '展示类型',
                'common：浅灰色类型提示（默认）',
                'dark：深灰色类型提示',
                'error：红色错误类型提示',
                'warn：黄色警告类型提示',
                'pass：绿色通过类型提示',
                'highlight：品牌色图标强调提示',
                'white：白色icon',
                'stress：蓝色高亮类型提示'
            ].join('<br>'),
            type: 'string',
            def: 'common'
        }, {
            key: 'color',
            desc: '自定义颜色，实心的背景色，空心的边框+字体颜色，设置了color的时候忽略type',
            type: 'hex格式色号',
            def: ''
        }, {
            key: 'color-text',
            desc: '自定义文案颜色',
            type: 'hex格式色号',
            def: ''
        }, {
            key: 'tip',
            desc: 'hover提示信息',
            type: 'string',
            def: ''
        }, {
            key: 'tip-width',
            desc: 'hover提示信息宽度',
            type: 'number',
            def: '200'
        }, {
            key: 'tip-placement',
            desc: 'hover提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px',
            type: 'string',
            def: 'bottom'
        }, {
            key: 'tip-align',
            desc: 'hover提示框与目标的对齐方式，top，bottom，left，right，center',
            type: 'string',
            def: 'center'
        }, {
            key: 'tip-view',
            desc: 'hover提示框自定义提示内容view',
            type: 'string',
            def: ''
        }, {
            key: 'tip-data',
            desc: 'hover提示框自定义提示内容view需要传入的数据',
            type: 'object',
            def: '{}'
        }, {
            key: 'pos',
            desc: '打标定位<br/>tr：右上角定位',
            type: 'string',
            def: ''
        }, {
            key: 'pos-offset',
            desc: `<pre>设置pos时，微量偏移 
pos-offset: {
    left: -10,
    top: 10
}</pre>`,
            type: 'object',
            def: ''
        }, ]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});