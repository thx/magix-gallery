let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index10.html',
    render() {
        let options = [{
            key: 'sort-trigger',
            desc: '需要排序的字段key值',
            type: 'string'
        }, {
            key: 'order-field-key',
            desc: '保留在路由上的排序字段',
            type: 'string',
            def: 'orderField'
        }, {
            key: 'order-by-key',
            desc: '保留在路由上的排序方式，降序（desc），升序（asc）',
            type: 'string',
            def: 'orderBy'
        }, {
            key: 'sort-field',
            desc: '当前是哪个字段进行排序，用于指定某个指标进行默认排序',
            type: 'string',
            def: ''
        }, {
            key: 'sort-orderby',
            desc: '当前是那种排序方式，用于指定某个指标进行默认排序时，指定排序方式',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});