let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@progress2.html',
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