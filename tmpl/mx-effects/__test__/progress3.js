let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@progress3.html',
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
            desc: '是否显示比例文案',
            type: 'boolean',
            def: true
        }, {
            key: 'width',
            desc: '圆形直径',
            type: 'number',
            def: '120'
        }, {
            key: 'border',
            desc: '圆形边宽',
            type: 'number',
            def: '8'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});