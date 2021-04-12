let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'mode',
            desc: `<pre>展现类型
normal：容器宽度大于360且高度大于360时使用，图文区域展示为320*320
small：容器宽度160 ~ 360且高度160 ~ 360时使用，图文区域展示为120*120`,
            type: 'string',
            def: '当显式指定mode时，指定什么就是什么尺寸<br/>未显式指定，根据组件所处容器尺寸进行计算'
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
            desc: '特殊产品线的定制展示需求，目前已有定制如下：<br/>1. 策略中心（ adStrategy ）<br/>2. 联盟（ union ）',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});