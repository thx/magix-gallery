let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'mode',
            desc: '页脚类型，简单版（simple）还是复杂版本',
            type: 'string',
            def: ''
        }, {
            key: 'products',
            desc: '是否需要妈妈产品线信息',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'width',
            desc: '产品线信息宽度，products = true时生效',
            type: 'number',
            def: '1000'
        }, {
            key: 'dark',
            desc: '产品线信息深底色白字',
            type: 'boolean',
            def: 'false'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});