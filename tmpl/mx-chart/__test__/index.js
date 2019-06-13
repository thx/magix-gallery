let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'chartId',
            desc: 'chartpark中的图表id，会根据id自动查找图表的配置',
            type: 'int',
            def: ''
        }, {
            key: 'data',
            desc: '绘制图表用到的数据',
            type: 'Array',
            def: '[]'
        }, {
            key: 'variables',
            desc: '该字段的值会覆盖在chartpark中定义的variables',
            type: 'Object',
            def: '{}'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});