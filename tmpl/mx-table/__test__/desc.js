let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@desc.html',
    render() {
        let options = [{
            key: 'sticky',
            desc: '是否需要表头吸顶功能',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'scroll-wrapper',
            desc: '自定义滚动节点id',
            type: 'string',
            def: 'window'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});