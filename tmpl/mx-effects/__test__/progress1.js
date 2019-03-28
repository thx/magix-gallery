let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@progress1.html',
    render() {
        let options = [{
            key: 'num',
            desc: '当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数',
            type: 'number',
            def: ''
        }, {
            key: 'color',
            desc: '自定义颜色，#4d7fff 或者 rgb(77, 127, 255)',
            type: 'string',
            def: '品牌色'
        }, {
            key: 'text',
            desc: '是否显示比例文案',
            type: 'boolean',
            def: true
        }, {
            key: 'text-placement',
            desc: '数值位置，只在type=line时生效<br/>可选：left，right，top，bottom',
            type: 'string',
            def: 'top'
        }, {
            key: 'width',
            desc: '进度条宽度',
            type: 'number',
            def: '200'
        }]
        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});