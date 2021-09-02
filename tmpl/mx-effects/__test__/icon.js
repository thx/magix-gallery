let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@icon.html',
    render() {
        let options = [{
            key: 'mode',
            desc: 'icon类型<br/>solid：可选实心打标<br/>hollow：空心打标<br/>opacity：透明背景色',
            type: 'string',
            def: 'solid'
        }, {
            key: 'type',
            desc: [
                '展示类型',
                'common：灰色类型提示（默认）',
                'error：红色错误类型提示',
                'warn：黄色警告类型提示',
                'pass：绿色通过类型提示',
                'highlight：品牌色图标强调提示'
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
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});