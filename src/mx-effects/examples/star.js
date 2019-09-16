let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@star.html',
    render() {
        let options = [{
            key: 'count',
            desc: 'icon个数',
            type: 'number',
            def: 5
        }, {
            key: 'num',
            desc: '当前评分，由于是icon打分，只支持全个和半个<br/>因此打分只支持0， 0.5， 1， 1.5， 2， 2.5， 3， 3.5， 4， 4.5， 5，最大值不超过count',
            type: 'number',
            def: 0
        }, {
            key: 'color',
            desc: '自定义颜色，#4d7fff 或者 rgb(77, 127, 255)',
            type: 'string',
            def: '品牌色'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});