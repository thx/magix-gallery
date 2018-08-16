let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@progress.html',
    render() {
        let options = [{
            key: 'num',
            desc: '当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数',
            type: 'number',
            def: ''
        }, {
            key: 'text-placement',
            desc: '数值位置，可选left，right，top，bottom',
            type: 'string',
            def: 'top'
        }, {
            key: 'color',
            desc: '自定义颜色，#4d7fff 或者 rgb(77, 127, 255)',
            type: 'string',
            def: '品牌色'
        }]

        this.updater.digest({
            options
        });
    }
});