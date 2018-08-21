let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@star.html',
    render() {
        let options = [{
            key: 'num',
            desc: '当前评分，0， 0.5， 1， 1.5 ... 4， 4.5， 5，超出范围会进行修正',
            type: 'number',
            def: ''
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