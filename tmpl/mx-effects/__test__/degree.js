let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@degree.html',
    render() {
        let options = [{
            key: 'num',
            desc: '当前进度，0 ~ 100之间的整数',
            type: 'number',
            def: ''
        }, {
            key: 'type',
            desc: [
                '展示类型',
                'error：红色错误类型提示',
                'warn：黄色警告类型提示',
                'pass：绿色通过类型提示',
                'highlight：品牌色图标强调提示（默认）'
            ].join('<br>'),
            type: 'string',
            def: 'highlight'
        }, {
            key: 'color',
            desc: '自定义颜色，配置了color的时候忽略type的配置',
            type: 'string',
            def: '品牌色'
        }, {
            key: 'base-opacity',
            desc: '基础透明度，<1 的数值，<br/>表示第一个格子的透明度，后续计算为 opacity = base + i * (1 - base) / 9',
            type: 'number',
            def: '0.08'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});