let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'chart-id',
            desc: 'chartpark中的图表id，会根据id自动查找图表的配置； chart-id 和options 至少有一个',
            type: 'int',
            def: ''
        }, {
            key: 'data',
            desc: '必选、绘制图表用到的数据',
            type: 'array',
            def: '[]'
        }, {
            key: 'variables',
            desc: '可选、该字段的值会覆盖在chartpark中定义的variables',
            type: 'object',
            def: '{}'
        }, {
            key: 'options',
            desc: '可选、图表自定义配置；若同时配置了chart-id； 则最终options =  _.extend( true, optionsFromChartId, options )',
            type: 'object',
            def: '{}'
        }, {
            key: 'force',
            desc: '可选、是否强制重绘，如无特殊需求，不建议开启; 开启后，会强制销毁当前chart实例、再绘制',
            type: 'boolean',
            def: 'false'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});