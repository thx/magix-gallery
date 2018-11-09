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
            desc: '自定义颜色，#4d7fff 或者 rgb(77, 127, 255)均可，背景色根据自定义颜色计算透明度<br/>配置了color的时候忽略type的配置',
            type: 'string',
            def: ''
        }, {
            key: 'icon',
            desc: '是否有警告icon',
            type: 'boolean',
            def: 'true'
        }]

        this.updater.digest({
            options
        });
    }
});