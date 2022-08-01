let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@circle.html',
    render() {
        let options = [{
            key: 'num',
            desc: '当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数',
            type: 'number',
            def: ''
        }, {
            key: 'color',
            desc: '自定义颜色，#385ACC 或者 rgb(77, 127, 255)',
            type: 'string',
            def: '品牌色'
        }, {
            key: 'color-list',
            desc: '当需要显示渐变色时，配置该数组，[\'#f8cb9c\', \'#ef9383\', \'#ea7575\']',
            type: 'array',
            def: '[]'
        }, {
            key: 'text',
            desc: '是否显示比例文案<br/>text=true：显示默认百分比<br/>text=false：不显示文案<br/>其余：显示自定义文案',
            type: 'boolean or string',
            def: true
        }, {
            key: 'width',
            desc: '圆弧直径',
            type: 'number',
            def: '120'
        }, {
            key: 'border',
            desc: '圆弧边宽',
            type: 'number',
            def: '6'
        }, {
            key: 'prefix',
            desc: '提示文案',
            type: 'string',
            def: ''
        }, {
            key: 'reload',
            desc: '是否带重刷icon',
            type: 'boolean',
            def: 'false'
        }];

        let events = [{
            type: 'reload',
            desc: '点击重刷icon时触发',
            params: [
                {
                    key: '',
                    desc: '',
                    type: ''
                }
            ]
        }];

        this.updater.digest({
            viewId: this.id,
            options,
            events,
        });
    }
});