let Magix = require('magix');
let $ = require('$');

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
        },
        // {
        //     key: 'text-align',
        //     desc: '对齐方式，可选center | left | right',
        //     type: 'string',
        //     def: 'left'
        // }, 
        {
            key: 'biz-code',
            desc: '特殊产品线的定制展示需求，目前已有定制如下：<br/>1. 策略中心（ adStrategy ）',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});