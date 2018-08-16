let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@notice.html',
    render() {
        let options = [{
            key: 'type',
            desc: [
                '展示类型',
                'error：红色错误类型提示',
                'warn：黄色警告类型提示',
                'highlight：品牌色图标强调提示'
            ].join('<br>'),
            type: 'string',
            def: '默认灰色提示'
        }, {
            key: 'border',
            desc: '是否带边框 + 圆角',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'text-align',
            desc: '文字对齐方式，left，center，right',
            type: 'string',
            def: 'left'
        }, {
            key: 'color',
            desc: '自定义颜色，背景色要计算透明度，请用hex格式色号，配置了color的时候忽略type的配置',
            type: 'hex格式色号',
            def: ''
        }]

        this.updater.digest({
            options
        });
    }
});