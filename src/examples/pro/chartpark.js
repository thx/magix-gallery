let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@chartpark.less');

module.exports = Magix.View.extend({
    tmpl: '@chartpark.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            options: [{
                key: 'chart-id',
                desc: '项目图表id，可选',
                type: 'number',
                def: ''
            }, {
                key: 'options',
                desc: '自定义图表选项，可选；chart-id 与 chart-option 二选一，同时配置的时候以chart-id为准',
                type: 'object',
                def: ''
            }, {
                key: 'data',
                desc: '渲染图表的数据，必填',
                type: 'array',
                def: ''
            }]
        });
    }
});