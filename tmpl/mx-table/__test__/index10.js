let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index10.html',
    render() {
        let options = [{
            key: 'orderField',
            desc: '排序字段',
            type: 'string'
        }, {
            key: 'orderBy',
            desc: '排序方式，降序（desc），升序（asc）',
            type: 'string',
            def: 'desc'
        }]

        this.updater.digest({
            options
        });
    }
});