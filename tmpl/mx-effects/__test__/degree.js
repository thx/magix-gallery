let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@degree.html',
    render() {
        let options = [{
            key: 'count',
            desc: '刻度个数',
            type: 'number',
            def: '10'
        }, {
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
                'highlight：品牌色图标强调提示（默认）',
                'stress：蓝色高亮类型提示'
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
            desc: '基础透明度<br/>配置&lt;1 的数值时会有渐变效果<br/>配置&gt;1的数值，则会显示为实色<br/>表示第一个格子的透明度，后续计算为 opacity = base + i * (1 - base) / (count - 1)，最大1',
            type: 'number',
            def: '0.1'
        }, {
            key: 'text',
            desc: '显示文案<br/>text=num：显示0-100的整数<br/>text=percent显示百分比',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});